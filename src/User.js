import React from "react";

const User = (props) => {
  console.log(props.data);

  return (
    <div>
      <h1>User Component</h1>
      <h4>{props.data.name}</h4>
      <h4>{props.data.age}</h4>
    </div>
  );
};
export default User;
