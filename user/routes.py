from app import app
from db import mysql
from flask import Blueprint, jsonify

users = Blueprint('users', __name__, url_prefix='/users')

@users.route('/', methods=['GET'])
def get():
    cursor = mysql.get_db().cursor()
    cursor.execute('select id, name, username, email, phone, website, street, suite, city, zipcode, company from users')
    result = cursor.fetchall()

    users = []
    user = {}

    for (id, name, username, email, phone, website, street, suite, city, zipcode, company) in result:
        user = {
            'id': id,
            'username': username,
            'email': email,
            'phone': phone,
            'website': website,
            'address': {
                'street': street,
                'suite': suite,
                'city': city,
                'zipcode': zipcode
            },
            'company': {
                'name': company
            }
        }
        users.append(user)

    return jsonify(users)

@users.route('/', methods=['DELETE'])
def delete():
    pass

@users.route('/', methods=['PUT'])
def put():
    pass

@users.route('/', methods=['POST'])
def post():
    pass
