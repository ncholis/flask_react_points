import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useAuth } from "../auth";

const RewardCard = ({ id, name, point, date_earned, is_claim, desc, onPoint, id_task, claimed }) => {

  const onhandlePoint = () => {
    onPoint(point, id)
    alert(is_claim ? "Reward already claimed!" : "Reward claimed!")
  }

  return (
        <Card border="info" className="mb-3" style={{ width: "35rem" }}>
          <Card.Body>
            {/* Title and Description */}
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{desc}</Card.Subtitle>

            {/* Points and Date Earned */}
            <Card.Text>
              <strong>Points:</strong> {point} <br />
              <strong>Date Earned:</strong> {date_earned}
            </Card.Text>

            {/* Claim Button */}
            <Button
              variant={claimed | !is_claim ? "secondary" : "primary"}
              block
              onClick={onhandlePoint}
              disabled={claimed | !is_claim} // Disable button if already claimed
            >
              { claimed | !is_claim ? 'Claimed' : 'Claim' }
            </Button>
          </Card.Body>
        </Card>
  )
}

const Reward = () => {
  const [rewards, setRewards] = useState([]);
  const [point, setPoint] = useState(0);
  const [logged] = useAuth()
  const [user, setUser] = useState({})
  const [services, setServices] = useState()

  const handlePoint = (point, reward_id) => {
    const token = localStorage.getItem("REACT_TOKEN_AUTH_KEY");

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify({"point": point}),
    };

    const requestOptionsx = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify({ reward_id: reward_id, user_id: user.id})
    };


    fetch("/auth/addPoint", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        fetch("/reward/reward_claim", requestOptionsx)
          .then((res) => {
            console.log(res)
          })
      }).finally(() => {
        fetchUser()
      });

    fetch("/")
  };

  const fetchUser = async () => {
    try {
      const res = await fetch("/auth/profile");
      const d = await res.json();
      setUser(d.user)

      const rewardRes = await fetch(`/reward/rewards/${d.user.id}`);
      const rewardsData = await rewardRes.json();
      console.log("REWARDS DATA:")
      console.log(rewardsData)
      setRewards(rewardsData);
  
    } catch (err) {
      console.error("Error fetching user or rewards:", err);
    }
  };

  useEffect(() => {
    fetchUser()

    const services = localStorage.getItem('services')
    if (services) {
      setServices(JSON.parse(services))
    }
  }, []);

  return logged ? (
    <div className="rewards container">
      <Card
        bg="info"
        text="white"
        style={{
          width: '20rem'
        }}
      >
        <Card.Header>
          <h1>
            My Points
          </h1>
        </Card.Header>
        <Card.Body>
          <p><strong>1 Point = 1 Rupiah</strong></p>
          <h1>
            {user && user.points | 0}
          </h1>
        </Card.Body>
      </Card>
      <h3 className="mb-3 mt-5">My Rewards</h3>
      {rewards && rewards.map((reward, index) => (
        <Row xs={1} md={2} className="g-4">
            <RewardCard
              key={index}
              id={reward.id}
              name={reward.name}
              point={reward.point}
              date_earned={reward.date_earned}
              claimed={reward.is_claim}
              is_claim={services[index].id === reward.id_task ? true : false}
              desc={reward.desc}
              onPoint={handlePoint}
            ></RewardCard>
        </Row>
      ))}
    </div>
  ) : (<p> Please Login again </p>)
};

export default Reward;