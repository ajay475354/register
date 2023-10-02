import "./index.css";
const EachUser = (props) => {
  const { eachItem } = props;
  const { name, email, role, phoneNum, team, gender, description } = eachItem;
  return (
    <div className="each_container">
      <p>{`name:${name}`}</p>
      <p>{`emai:${email}`}</p>
      <p>{`role:${role}`}</p>
      <p>{`phoneNum:${phoneNum}`}</p>
      <p>{`team:${team}`}</p>
      <p>{`gender:${gender}`}</p>
      <p>{`description:${description}`}</p>
    </div>
  );
};

export default EachUser;
