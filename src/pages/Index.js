import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    displayname: "",
    email: "",
    location: "",
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
    });
  };

  // loaded function
  const loaded = () => {
    return props.user.map((user) => (
      <div key={user._id} className="person">
        <Link to={`/user/${user._id}`}><h1>{user.displayname}</h1></Link>
        <img src={user.image} alt={user.name} />
        <h3>{user.displayname}</h3>
        <h3>{user.email}</h3>
        <h3>{user.location}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
  );
}

export default Index;