import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from models import db, User

load_dotenv()  # Cargar las variables de entorno

app = Flask(__name__)

app.config['DEBUG'] = True  # Permite ver los errores
app.config['ENV'] = 'development'  # Activa el servidor en modo desarrollo
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASEURI')  # Leemos la url de conexion a la base de datos

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

@app.route('/')
def main():
    return jsonify({"status": "Server Up"}), 200


@app.route('/save_user_with_image', methods=['POST'])
def save_user_with_image():
    try:
        # Recibir datos del formulario
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
        telefono = request.form.get('telefono')
        email = request.form.get('email')
        mensaje = request.form.get('mensaje')
        opciones = request.form.get('opciones')
        presupuesto = request.form.get('presupuesto')
        imagen = request.files.get('imagen')

        # Validar que se haya enviado una imagen
        if imagen is None:
            raise ValueError('No se ha proporcionado ninguna imagen')

        # Validar que el archivo sea una imagen
        if imagen.filename == '':
            raise ValueError('No se ha proporcionado ninguna imagen')
        if not imagen.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            raise ValueError('El archivo no es una imagen válida')

        # Validar el tamaño máximo del archivo (por ejemplo, 10 MB)
        MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10 MB
        if len(imagen.read()) > MAX_IMAGE_SIZE:
            raise ValueError('El tamaño de la imagen es demasiado grande')

        # Leer la imagen y convertirla a datos binarios
        img_stream = imagen.read()
        img_bytes = bytearray(img_stream)

        # Crear un nuevo usuario y asignar la imagen
        new_user = User(
            nombre=nombre,
            apellido=apellido,
            telefono=telefono,
            email=email,
            mensaje=mensaje,
            opciones=opciones,
            presupuesto=presupuesto,
            imagen=img_bytes
        )
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Usuario guardado correctamente"}), 200
    except ValueError as ve:
        return jsonify({"message": str(ve)}), 400
    except Exception as e:
        return jsonify({"message": "Error al guardar usuario", "error": str(e)}), 500

if __name__ == '__main__':
    app.run()

