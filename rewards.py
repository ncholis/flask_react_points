from flask_restx import Namespace, Resource, fields
from models import Reward, User
from flask_jwt_extended import jwt_required
from flask import request


reward_ns = Namespace("reward", description="A namespace for Rewards")


reward_model = reward_ns.model(
    "Reward",
    {
     "id": fields.Integer(), "name": fields.String(),
     "point": fields.Integer(), "date_earned": fields.DateTime(),
     "is_claim": fields.Boolean(False), "desc": fields.String(),
     "id_task": fields.Integer(), "name": fields.String(),
     },
)

@reward_ns.route("/hello")
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}

@reward_ns.route("/reward_claim")
class RewardsResource(Resource):
    @reward_ns.marshal_list_with(reward_model)
    def post(self):
        data = request.get_json()
        user_id = data.get("user_id")

        try:
            user = User.query.filter_by(id=user_id).first()
        except Exception as e:
            return []

        reward_id = data.get("reward_id")
        try:
            reward = [ u for u in user.rewards if u.id == reward_id ][0]
        except Exception as e:
            return []

        print(reward)
        reward.is_claim = True
        reward.save()

        return reward.to_dict()

@reward_ns.route("/rewards/<int:user_id>")
class RewardsResource(Resource):
    @reward_ns.marshal_list_with(reward_model)
    def get(self, user_id):
        try:
            user = User.query.filter_by(id=user_id).first()
        except Exception as e:
            return []

        return user.rewards

    @reward_ns.marshal_with(reward_model)
    @reward_ns.expect(reward_model)
    @jwt_required()
    def post(self):
        """Create a new reward"""

        data = request.get_json()
        new_r = Reward(
            name=data.get("name"), point=data.get("point"), desc=data.get("desc")
        )

        new_r.save()

        return new_r, 201


@reward_ns.route("/reward/<int:id>")
class RewardResource(Resource):
    @reward_ns.marshal_with(reward_model)
    def get(self, id):
        """Get a reward by id"""
        reward = Reward.query.get_or_404(id)

        return reward

    @reward_ns.marshal_with(reward_model)
    @jwt_required()
    def put(self, id):
        """Update a reward by id"""

        reward_to_update = Reward.query.get_or_404(id)

        data = request.get_json()

        reward_to_update.update(data.get("title"), data.get("description"))

        return reward_to_update

    @reward_ns.marshal_with(reward_model)
    @jwt_required()
    def delete(self, id):
        """Delete a reward by id"""

        reward_to_delete = Reward.query.get_or_404(id)

        reward_to_delete.delete()

        return reward_to_delete