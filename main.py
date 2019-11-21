from app import app
from users.routes import users

app.register_blueprint(users)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
