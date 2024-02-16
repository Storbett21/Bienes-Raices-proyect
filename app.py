from flask import Flask, jsonify, request
import psycopg2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Función para verificar la conexión a la base de datos
def verificar_conexion():
    try:
        conn = psycopg2.connect(
            dbname="BienesRaices",
            user="postgres",
            password="postgres",
            host="127.0.0.1",
            port="5432"
        )
        conn.close()
        return True
    except psycopg2.OperationalError:
        return False
    
# Ruta para verificar el estado de la conexión
@app.route('/status', methods=['GET'])
def verificar_estado():
    if verificar_conexion():
        return jsonify({"status": "OK"})
    else:
        return jsonify({"status": "ERROR"})

# Ruta para insertar datos en la base de datos
@app.route('/insertar', methods=['POST'])
def insertar_datos():
    # Obtener los datos enviados desde el formulario
    datos = request.json

    # Imprimir los datos en la consola del servidor Flask
    print("Datos recibidos:", datos)

    # Insertar los datos en la tabla de la base de datos
    try:
        conn = psycopg2.connect(
            dbname="BienesRaices",
            user="postgres",
            password="postgres",
            host="127.0.0.1",
            port="5432"
        )
        cursor = conn.cursor()
        cursor.execute("INSERT INTO vendedores (nombre, apellido, telefono) VALUES (%s, %s, %s)",
                       (datos['nombre'], datos['apellido'], datos['telefono']))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"mensaje": "Datos insertados correctamente"})
    except psycopg2.Error as e:
        return jsonify({"error": str(e)})
    

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

# Ruta para la página principal
@app.route('/', methods=['GET'])
def index():
    return "Bienvenido a mi aplicación Flask"

if __name__ == '__main__':
    app.run(debug=True)
