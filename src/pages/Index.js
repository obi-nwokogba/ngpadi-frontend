import { useState } from "react";
import {Link} from "react-router-dom"

// ===================================
// USER SCHEMA FOR REFERENCE
/*
  displayname: String,
    email: String,
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

  // LOADED FUNCTION
  const loaded = () => {
    return props.user.map((user) => (
      <div key={user._id} className="person">
        <Link to={`/user/${user._id}`}><h1>{user.displayname}</h1></Link>
        <h3>{user.displayname}</h3>
        <h3>{user.email}</h3>
        <h3>{user.location}</h3>
        <h3>{user.status}</h3>
        <h3>{user.profilepicurl}</h3>
        <h3>{user.timejoined}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Index Line 42 - Loading...</h1>;
  };
  return (
    <section>

    <h2>Sign Up</h2>
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
          type="text"
          value={newForm.status}
          name="status"
          placeholder="Status. e.g. Feeling happy"
          onChange={handleChange}
        />
        <input type="submit" value="Create User" className="button1" />
      </form>
      
      {props.user ? loaded() : loading()}
    </section>
  );
}

export default Index;