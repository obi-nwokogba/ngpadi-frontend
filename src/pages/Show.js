import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const user = props.user;
  const singleuser = user.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(singleuser);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateUser(editForm);
    props.history.push("/");
  }

  const removeUser = () => {
    props.deleteUser(singleuser._id);
    props.history.push("/");
  }

  return (
    <div className="person">
      <h1>{singleuser.name}</h1>
      <h2>{singleuser.title}</h2>
      <img src={singleuser.image} alt={singleuser.name} />
      <button id="delete" onClick={removeUser}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update User" />
      </form>
    </div>
  )
}

export default Show;