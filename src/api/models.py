# En tu archivo models.py
from sqlalchemy import Column, Integer, String, LargeBinary
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    apellido = db.Column(db.String(100))
    telefono = db.Column(db.String(20))
    email = db.Column(db.String(100))  # Nuevo campo para el email
    mensaje = db.Column(db.Text)        # Nuevo campo para el mensaje
    opciones = db.Column(db.String(10)) # Nuevo campo para las opciones (Compra/Vende)
    presupuesto = db.Column(db.Float)   # Nuevo campo para el presupuesto
    imagen = db.Column(db.LargeBinary)       # Para almacenar la imagen como datos binarios en la base de datos

class Propiedad(db.Model):
    __tablename__ = 'propiedades'

    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100))
    descripcion = db.Column(db.String(200))
    precio = db.Column(db.Integer)
    banos = db.Column(db.Integer)
    estacionamientos = db.Column(db.Integer)
    habitaciones = db.Column(db.Integer)
    imagen = db.Column(db.LargeBinary)  # Para almacenar la imagen como datos binarios en la base de datos

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
