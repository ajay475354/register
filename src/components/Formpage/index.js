import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EachUser from "../EachUser/index";
import "./index.css";

const Formpage = () => {
  const [formInfo, setFormData] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("formdata"));
    return saved || "";
  });
  const formdata = useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const id = uuidv4();

    const name = formdata.current.user_name.value;
    const email = formdata.current.user_email.value;
    const role = formdata.current.user_role.value;
    const phoneNum = formdata.current.user_phoneNo.value;
    const team = formdata.current.working_team.value;
    const gender = formdata.current.age.value;
    const description = formdata.current.text_area.value;

    setFormData([
      ...formInfo,
      { id, name, email, role, phoneNum, team, gender, description },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("formdata", JSON.stringify(formInfo));
  }, [formInfo]);

  return (
    <div className="form_container_">
      <h1 className="head">Form Details</h1>
      <form ref={formdata} className="form_container" onSubmit={onSubmitForm}>
        <label className="label_" htmlFor="username_id">
          UserName:
        </label>
        <input
          type="text"
          name="user_name"
          id="username_id"
          className="user_inputs"
        />
        <label className="label_" htmlFor="user_email">
          UserEmail:
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="user_inputs"
        />
        <label className="label_" htmlFor="user_role">
          UserRole:
        </label>
        <input
          type="text"
          name="user_role"
          id="user_role"
          className="user_inputs"
        />
        <label className="label_" htmlFor="user_phone">
          UserPhoneNo:
        </label>
        <input
          type="number"
          name="user_phoneNo"
          id="user_phone"
          className="user_inputs"
        />
        <select name="working_team" className="selecting_team">
          <option value="frontend team">frontend team</option>
          <option value="backend team">backend team</option>
          <option value="sql team">sql team</option>
          <option value="testing team">teasting team</option>
        </select>
        <p className="label_">Gender</p>
        <div className="radio_container">
          <input
            type="radio"
            id="male_id"
            name="age"
            value="male"
            className="radio_"
          />
          <label htmlFor="male_id">male</label>
        </div>
        <div className="radio_container">
          <input
            type="radio"
            id="female_id"
            name="age"
            value="female"
            className="radio_"
          />
          <label htmlFor="female_id">female</label>
        </div>
        <label className="label_" htmlFor="text_area">
          Description:
        </label>
        <textarea
          rows="7"
          cols="30"
          id="text_area"
          className="text_area"
          placeholder="description......"
          name="text_area"
        />
        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
      <div>
        {formInfo.map((each) => (
          <EachUser eachItem={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default Formpage;
