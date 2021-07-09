import { useState } from "react";
import {Link} from "react-router-dom"

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

function SignIn(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    email: "",
    password: ""
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
      email: "",
      password: ""
    });
  };



  const loading = () => {
    return <h1>Index Line 42 - Loading...</h1>;
  };
  return (
    <section class="signincontainer">

    <h1 className="pageheader">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.email}
          name="displayname"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.password}
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        
        
        <input type="submit" value="Sign In" className="button1" />
      </form>
      
      {/* {props.user ? loaded() : loading()} */}
    </section>
  );
}

export default SignIn;