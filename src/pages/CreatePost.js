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

function CreatePost(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    posttitle: "",
    posttype: "",
    posturl: "",
    posttext: "",
    profilepicurl: "",
    userid: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPost(newForm);
    setNewForm({
      posttitle: "",
      posttype: "",
      posturl: "",
      posttext: "",
      profilepicurl: "",
      userid: ""
    });
  };

  // LOADED FUNCTION
  const loaded = () => {
    return props.post.map((post) => (
      <div key={post._id} className="userbox">
        <Link to={`/post/${post._id}`}>
            <h1>{post.posttitle}</h1></Link>
        <p class="label1">POSTID</p>
        <p>{post.postid}</p>
        <p class="label1">LOCATION</p>
        <p>{post.posttitle}</p>
        <p class="label1">POST TYPE</p>
        <p>{post.posttype}</p>
        <p class="label1">PROFILE PIC URL</p>
        <p>{post.profilepicurl}</p>
        <p class="label1">TIME CREATED</p>
        <p>{post.timecreated}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Index Line 42 - Loading...</h1>;
  };
  return (
    <section>

    <h1 className="pageheader">Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.posttitle}
          name="posttitle"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.posttype}
          name="posttype"
          placeholder="Post Type"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.posturl}
          name="posturl"
          placeholder="Link to content"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.posttext}
          name="posttext"
          placeholder="Text Content of your post"
          onChange={handleChange}
        />
        <input type="submit" value="POST THIS!" className="button1" />
      </form>
      
    </section>
  );
}

export default CreatePost;