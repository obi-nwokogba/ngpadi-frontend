import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [user, setUser] = useState(null);

    const URL = "http://localhost:4000/user/";

    const getUser = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);
    };

    const createUser = async (singleuser) => {
        // make post request to create people
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(singleuser),
        });
        // update list of people
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

    useEffect(() => getUser(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index user={user} createUser={createUser} />
                </Route>
                <Route exact path="/seed">
                    <Index user={user} createUser={createUser} />
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