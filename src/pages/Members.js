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

function Members(props) {



  // LOADED FUNCTION
  const loaded = () => {
    return props.user.map((user) => (
      <div key={user._id} className="userbox">
        <Link to={`/user/${user._id}`}><h1>{user.displayname}</h1></Link>
        <p class="label1">EMAIL</p>
        <p>{user.email}</p>
        <p class="label1">LOCATION</p>
        <p>{user.location}</p>
        <p class="label1">STATUS</p>
        <p>{user.status}</p>
        <p class="label1">PROFILE PIC URL</p>
        <p>{user.profilepicurl}</p>
        <p class="label1">TIME JOINED</p>
        <p>{user.timejoined}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Index Line 42 - Loading...</h1>;
  };
  return (
    <section>

    <h1 className="pageheader">Members</h1>

      
      {props.user ? loaded() : loading()}
    </section>
  );
}

export default Members;