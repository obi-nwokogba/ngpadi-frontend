import { useState } from "react";
import { Link } from "react-router-dom"

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

    // LOADED FUNCTION
    const loaded = () => {
        return props.post.map((post) => (


            <div key={post._id} className="postbox">
        <Link to={`/post/${post._id}`}><h2 class="posttitle">{post.posttitle}</h2></Link>
        
        <p class="label1">TITLE</p>
        <p>{post.posttitle}</p>

        <p class="label1">POST TYPE</p>
        <p>{post.posttype}</p>

        <p class="label1">POST URL</p>
        <p><a href="{post.posturl}">{post.posturl}</a></p>

        <p>{post.posttext}</p>
      </div>
        ));
    };

    const loading = () => {
        return <h1>Index Line 42 - Loading...</h1>;
    };
    return (
        <section>

    <h1 className="pageheader">New Posts</h1>

      {props.post ? loaded() : loading()}
    </section>
    );
}

export default Index;