import {useState} from "react";

function Show(props) {
   const id = props.match.params.id;
   const user = props.user;
   const singleuser = user.find(p => p._id === id);

   const [editForm, setEditForm] = useState(singleuser);

   // handleChange function for form
   const handleChange = event => {
      setEditForm({...editForm, [event.target.name]: event.target.value});
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
   <h1>Edit Your Profile</h1>
              <h1>{singleuser.displayname}</h1>
              <h2>{singleuser.email}</h2>
           
              <button id="delete" onClick={removeUser}>DELETE</button>
           
              <form onSubmit={handleSubmit}>
           
                 <input
                    type="text"
                    value={editForm.displayname}
                    name="displayname"
                    placeholder="Your Name"
                    onChange={handleChange}
                    />
                 <input
                    type="text"
                    value={editForm.email}
                    name="email"
                    placeholder="email address"
                    onChange={handleChange}
                    />
                 <input
                    type="text"
                    value={editForm.location}
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                    />
                 <input
                    type="text"
                    value={editForm.status}
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                    />
                 <input type="submit" value="Update User"/>
              </form>
           </div>
           );
}

export default Show;