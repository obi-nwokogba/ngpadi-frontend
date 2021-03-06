import { useState } from "react";
//import { Link } from "react-router-dom"

// ===================================
// USER SCHEMA FOR REFERENCE
/*
  displayname: String,
    email: String,
    password: String,
    location: String,
    status: String,
    profilepicurl: String,
    timejoined: String */
// ===================================

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    displayname: "",
    email: "",
    password: "",
    location: "",
    status: "",
    profilepicurl: "",
    timejoined: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createUser(newForm);
    setNewForm({
      displayname: "",
      email: "",
      location: "",
      status: "",
      profilepicurl: "",
      timejoined: ""
    });
  };

  return (
    <section>

      <h1 className="pageheader">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.displayname}
          name="displayname"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.email}
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.location}
          name="location"
          placeholder="Location e.g. Santa Monica"
          onChange={handleChange}
        />
        <input
          type="password"
          value={newForm.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" value="Sign Up" className="button1" />
      </form>

      {/* {props.user ? loaded() : loading()} */}
    </section>
  );
}

export default Index;