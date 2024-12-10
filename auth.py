from flask_restx import Resource, Namespace, fields
from models import User, Reward
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)
from flask import request, jsonify, make_response, session, redirect, url_for


auth_ns = Namespace("auth", description="A namespace for our Authentication")


signup_model = auth_ns.model(
    "SignUp",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
    },
)


login_model = auth_ns.model(
    "Login", {"username": fields.String(), "password": fields.String()}
)


@auth_ns.route("/signup")
class SignUp(Resource):
    @auth_ns.expect(signup_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")

        db_user = User.query.filter_by(username=username).first()

        if db_user is not None:
            return jsonify({"message": f"User with username {username} already exists"})

        rewards = [
            {
                "name": "Beli Domain dan dapatkan point kamu",
                "desc": "",
                "point": 3000,
                "is_claim": False,
                "id_task": 1,
            },
            {
                "name": "Beli Hosting Segera dan Dapatkan point kamu",
                "desc": "",
                "point": 10000,
                "is_claim": False,
                "id_task": 2,
            },
            {
                "name": "Buat Website dikami dan dapatkan point kamu",
                "desc": "",
                "point": 15000,
                "is_claim": False,
                "id_task": 3,
            },
        ]

        new_user = User(
            username=data.get("username"),
            email=data.get("email"),
            password=generate_password_hash(data.get("password")),
        )
        for r in rewards:
            reward = Reward(**r)
            new_user.rewards.append(reward)
        new_user.save()

        return make_response(jsonify({"message": "User created successfuly"}), 201)


@auth_ns.route("/login")
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        db_user = User.query.filter_by(username=username).first()

        if db_user and check_password_hash(db_user.password, password):
           
            session['user'] = db_user.to_dict()
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)
            
            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token}
            )

        else:
            return jsonify({"message": "Invalid username or password"})


@auth_ns.route("/refresh")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):

        current_user = get_jwt_identity()

        new_access_token = create_access_token(identity=current_user)

        return make_response(jsonify({"access_token": new_access_token}), 200)

@auth_ns.route("/profile")
class ProfileResource(Resource):
    def get(self):
        user_data = session.get('user')  # Ambil data user dari session
        if not user_data:
            return redirect(url_for('auth_login'))
        
        db_user = User.query.filter_by(id=user_data['id']).first()
        return jsonify({"message": "User profile", "user": db_user.to_dict() })

@auth_ns.route("/logout")
class LogoutResource(Resource):
    def get(self):
        session.pop('user', None)  # Hapus data user dari session
        return jsonify({"message": "Logged out"})

@auth_ns.route("/addPoint")
class AddPoint(Resource):
    def post(self):
        data = request.get_json()
        point = data.get("point") or 0

        user_data = session.get('user')  # Ambil data user dari session
        if not user_data:
            return redirect(url_for('auth_login'))

        print(user_data)
        db_user = User.query.filter_by(id=user_data['id']).first()
        if db_user is None:
            return jsonify({"message": f"User Not Found"})

        print(db_user)
        db_user.points += int(point)
        db_user.save()

        return jsonify({ "message": "Point added", "point": db_user.points})