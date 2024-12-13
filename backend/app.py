from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
import hashlib
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# MySQL Configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root' 
app.config['MYSQL_PASSWORD'] = '' 
app.config['MYSQL_DB'] = 'lamsalpawan'
mysql = MySQL(app)

# JWT Configurations
app.config['JWT_SECRET_KEY'] = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2'
jwt = JWTManager(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Route: Test
@app.route('/')
def index():
    return "Backend is running!"

#Register
@app.route('/api/signup', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if username or password is empty
    if not username or not password:
        return jsonify({'success': False, 'message': 'Username and password are required'}), 400

    # Hash the password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    print(f"Registering user: {username}, Hashed Password: {hashed_password}")

    cur = mysql.connection.cursor()

    # Check if username already exists
    cur.execute("SELECT * FROM users WHERE username=%s", (username,))
    existing_user = cur.fetchone()
    if existing_user:
        cur.close()
        return jsonify({'success': False, 'message': 'Username already exists'}), 409

    # Insert new user into the database
    try:
        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed_password))
        mysql.connection.commit()
        cur.close()
        return jsonify({'success': True, 'message': 'User registered successfully'}), 201
    except Exception as e:
        cur.close()
        print(f"Error during registration: {e}")
        return jsonify({'success': False, 'message': 'Registration failed'}), 500

# Authentication
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = hashlib.sha256(data.get('password').encode()).hexdigest()
    print(f"Received Data:{data}")
    print(f"Received Username: {username}")
    print(f"Hashed Password: {password}")

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
    user = cur.fetchone()
    cur.close()

    if user:
        token = create_access_token(identity={'username': username})
        return jsonify({'success': True, 'token': token}), 200
    else:
        print("Login failed: Invalid credentials")
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

# Fetch Projects
@app.route('/api/projects', methods=['GET'])
def get_projects():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM projects")
    projects = cur.fetchall()
    cur.close()
    result = [{'id': p[0], 'title': p[1], 'description': p[2], 'image_url': p[3], 'date': p[4], 'link':p[5]} for p in projects]
    return jsonify(result), 200

# Fetch Files (Protected)
@app.route('/api/files', methods=['GET'])
@jwt_required()
def get_files():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM files")
    files = cur.fetchall()
    cur.close()
    result = [{'id': f[0], 'filename': f[1], 'file_path': f[2]} for f in files]
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(debug=True)