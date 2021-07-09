import { useState } from "react";
//import {Link} from "react-router-dom"

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


  return (
    <section class="signincontainer">

    <h1 className="pageheader">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.email}
          name="Email address"
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          type="password"
          value={newForm.password}
          name="email"
          placeholder="Password"
          onChange={handleChange}
        />
        
        
        <input type="submit" value="Sign In" className="button1 abunate_animated animate__heartBeat" />
      </form>
    </section>
  );
}

export default SignIn;