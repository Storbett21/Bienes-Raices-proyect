import os
from flask import Flask, jsonify, request, send_from_directory, flash, redirect, render_template
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from models import db, User, Propiedad
from werkzeug.utils import secure_filename

load_dotenv()  # Cargar las variables de entorno

app = Flask(__name__)

app.config['DEBUG'] = True  # Permite ver los errores
app.config['ENV'] = 'development'  # Activa el servidor en modo desarrollo
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASEURI')  # Leemos la url de conexion a la base de datos

# Configuración para manejar archivos estáticos
UPLOAD_FOLDER = "Bienes_Raices"
ALLOWED_EXTENSIONS = {'png', '', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS

db.init_app(app)  # vinculacion del archivo models.py a nuestra app.py
Migrate(app, db)  # db init, db migrate, db upgrade, db downgrade

# Habilitar CORS
CORS(app)

# Ruta para verificar la conexión a la base de datos
@app.route('/db_status')
def db_status():
    try:
        result = db.session.execute(text('SELECT 1'))
        return jsonify({"status": "Connected to database"}), 200
    except SQLAlchemyError as e:
        return jsonify({"status": "Error connecting to database", "error": str(e)}), 500

# Ruta para servir archivos estáticos (imágenes)
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/')
def main():
    return jsonify({"status": "Server Up"}), 200

@app.route('/agregar_propiedad', methods=['POST'])
def agregar_propiedad():
    try:
        titulo = request.form['titulo']
        descripcion = request.form['descripcion']
        precio = int(request.form['precio'])
        banos = int(request.form['banos'])
        estacionamientos = int(request.form['estacionamientos'])
        habitaciones = int(request.form['habitaciones'])
        imagen = request.files['imagen']

        if not (titulo and descripcion and precio and banos and estacionamientos and habitaciones and imagen):
            return jsonify({'error': 'Todos los campos son obligatorios'}), 400

        if imagen.filename == '' or not imagen.filename.lower().endswith(tuple('.' + ext for ext in app.config['ALLOWED_EXTENSIONS'])):
            return jsonify({'error': 'Por favor, proporcione una imagen válida (.png, .jpg, .jpeg, .gif)'}), 400

        MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
        if len(imagen.read()) > MAX_IMAGE_SIZE:
            return jsonify({'error': 'El tamaño de la imagen es demasiado grande (máx. 10 MB)'}), 400

        # Guardar la imagen en el directorio de subidas
        if not os.path.exists(app.config['UPLOAD_FOLDER']):
            os.makedirs(app.config['UPLOAD_FOLDER'])
        filename = secure_filename(imagen.filename)
        imagen.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        nueva_propiedad = Propiedad(
            titulo=titulo,
            descripcion=descripcion,
            precio=precio,
            banos=banos,
            estacionamientos=estacionamientos,
            habitaciones=habitaciones,
            imagen=filename  # Guardamos el nombre de archivo en lugar de los bytes de la imagen
        )

        db.session.add(nueva_propiedad)
        db.session.commit()

        return jsonify({'message': 'Propiedad agregada correctamente'}), 201

    except KeyError as e:
        return jsonify({'error': f'Falta el campo requerido: {str(e)}'}), 400
    except ValueError as e:
        return jsonify({'error': f'Error en el formato de datos: {str(e)}'}), 400
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': f'Error en la base de datos: {str(e)}'}), 500


if __name__ == '__main__':
    app.run()
