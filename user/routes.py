from app import app
from db import mysql
from flask import Blueprint, request, jsonify

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
            'name': name,
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

    user = request.json

    name = user.get("name", None)
    username = user.get("username", None)
    email = user.get("email", None)
    phone = user.get("phone", None)
    website = user.get("website", None)
    street = user.get("street", None)
    suite = user.get("suite", None)
    city = user.get("city", None)
    zipcode = user.get("zipcode", None)
    company = user.get("company", None)

    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("""insert into users (name, username, email, phone, website, street, suite, city, zipcode, company) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""", (name, username, email, phone, website, street, suite, city, zipcode, company))
    db.commit()

    return jsonify({
        'id': cursor.lastrowid,
        'name': name,
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
    })

@users.route('/', methods=['POST'])
def post():
    pass
