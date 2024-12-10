from exts import db
from sqlalchemy.sql import func


#reward
user_reward = db.Table('user_reward',
                        db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
                        db.Column('reward_id', db.Integer, db.ForeignKey('reward.id')),
                    )

class Reward(db.Model):
    __tablename__ = 'reward'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False)
    desc = db.Column(db.Text)
    point = db.Column(db.Integer)
    date_earned = db.Column(db.DateTime, default=func.now())
    is_claim = db.Column(db.Boolean, default=False)
    id_task = db.Column(db.Integer)

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<Reward {self.id} {self.name}>"

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def to_dict(self):
        return {"id": self.id, "name": self.name, "desc": self.desc, "point": self.point,
                "date_earned": self.date_earned, "is_claim": self.is_claim, "id_task": self.id_task}

# user model

"""
class User:
    id:integer
    username:string
    email:string
    password:string
"""


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False)
    password = db.Column(db.Text(), nullable=False)
    points = db.Column(db.Integer(), default=0)
    rewards = db.relationship('Reward', secondary=user_reward, backref='users')

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.username}>"

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def to_dict(self):
        return {"id": self.id, "points": self.points, "username": self.username}
    
    def freq_claim(self):
        if not self.rewards:
            return 0

        total = len([r for r in self.rewards if r.is_claim == True])
        return total
    
    def loyalty_name(self):
        total = self.freq_claim()
        if not total:
            return "Baru"

        if total == 1:
            return "Beralih"

        return "Setia"