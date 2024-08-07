import React from "react";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import { Avatar } from "primereact/avatar";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "path/to/avatar1.jpg",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "path/to/avatar2.jpg",
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback: "Normally wings are wings, but theirs are lean meat and tender.",
    avatar: "path/to/avatar3.jpg",
  },
];

const CustomerFeedback = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <Card key={index} style={{ marginBottom: "1em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1em",
            }}
          >
            <Avatar image={feedback.avatar} className="p-mr-2" shape="circle" />
            <div>
              <h4>{feedback.name}</h4>
              <Rating
                value={feedback.rating}
                readOnly
                stars={5}
                cancel={false}
              />
            </div>
          </div>
          <p>{feedback.feedback}</p>
        </Card>
      ))}
    </div>
  );
};

export default CustomerFeedback;
