import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count1}</h1>
      <h3>{props.name}</h3>
      <h4>location: Kansas</h4>
      <h5>conatct: personal mail</h5>
    </div>
  );
};

export default User;
