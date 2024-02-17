import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from sqlalchemy.exc import SQLAlchemyError
from models import db, User

load_dotenv() # Cargar las variables de entorno

app = Flask(__name__)

app.config['DEBUG'] = True # Permite ver los errores
app.config['ENV'] = 'development' # Activa el servidor en modo desarrollo
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASEURI') # Leemos la url de conexion a la base de datos

db.init_app(app) # vinculacion del archivo models.py a nuestra app.py
Migrate(app, db) # db init, db migrate, db upgrade, db downgrade

# Habilitar CORS
CORS(app)

# Ruta para verificar la conexión a la base de datos
@app.route('/db_status')
def db_status():
    try:
        db.session.execute('SELECT 1') 
        return jsonify({"status": "Connected to database"}), 200
    except SQLAlchemyError as e:
        return jsonify({"status": "Error connecting to database", "error": str(e)}), 500

@app.route('/')
def main():
    return jsonify({ "status": "Server Up"}), 200

@app.route('/save_user', methods=['POST'])
def save_user():
    try:
        data = request.get_json() # Obtener datos JSON del cuerpo de la solicitud
        nombre = data.get('nombre')
        apellido = data.get('apellido')
        telefono = data.get('telefono')

        if not nombre or not apellido or not telefono:
            raise ValueError("Nombre, apellido y teléfono son campos requeridos.")

        # Aquí podrías guardar los datos en la base de datos
        # Por ejemplo, podrías crear un nuevo usuario usando SQLAlchemy
        new_user = User(nombre=nombre, apellido=apellido, telefono=telefono)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Usuario guardado correctamente"}), 200
    except ValueError as ve:
        return jsonify({"message": str(ve)}), 400
    except SQLAlchemyError as e:
        db.session.rollback()  # Revertir cambios en caso de error
        return jsonify({"message": "Error al guardar usuario", "error": str(e)}), 500

if __name__ == '__main__':
    app.run()
