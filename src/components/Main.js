import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Members from "../pages/Members";
import Show from "../pages/Show";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import CreatePost from "../pages/CreatePost";

function Main(props) {
   const [user, setUser] = useState(null);
   const [post, setPost] = useState(null);

   const URL = "http://localhost:4000/user/";
   const URL2 = "http://localhost:4000/post/";

   // USER FUNCTIONS
   // ==========================
   const getUser = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUser(data);
   };

   const createUser = async (singleuser) => {
      // make post request to create Users
      await fetch(URL, {
         method: "post",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(singleuser),
      });
      getUser();
   };

   const updateUser = async (singleuser) => {
      // make post request to create people
      await fetch(URL + singleuser._id, {
         method: "put",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(singleuser),
      });
      // update list of people
      getUser();
   };

   const deleteUser = async (id) => {
      // make post request to create people
      await fetch(URL + id, {
         method: "delete",
      });
      // update list of people
      getUser();
   };

   // ===========================
   // POST FUNCTIONS
   // ===========================

   const getPost = async () => {
      const response = await fetch(URL2);
      const data = await response.json();
      setPost(data);
   };

     // make post request to create Posts
   const createPost = async (singlepost) => {
      await fetch(URL2, {
         method: "post",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(singlepost),
      });
      getPost();
   };

   // HOOKS
   useEffect(() => getUser(), []);
   useEffect(() => getPost(), []);

   return (
           <main>
              <Switch>
              <Route exact path="/">
                 <Index post={post} createPost={createPost} />
              </Route>
              <Route path="/about">
                 <About />
              </Route>
               <Route path="/createpost">
                 <CreatePost post={post} createPost={createPost} />
              </Route>
              <Route path="/members">
                 <Members user={user} createUser={createUser} />
              </Route>
              <Route path="/signup">
                 <SignUp createUser={createUser} />
              </Route>
              <Route path="/signin">
                 <SignIn />
              </Route>
              <Route
                 path="/user/:id"
                 render={(rp) => (
                            <Show
                            user={user}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            {...rp}
                            />
                            )}
              />
              </Switch>
           </main>
           );
}

export default Main;