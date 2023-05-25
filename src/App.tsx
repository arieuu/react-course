import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { CanceledError } from "./services/api-client";

interface User {
  id: number,
  name: string
}

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError]= useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    // We set loading to false wether we succeed in loading or not. We could just use finally but it doesn't work in strict mode
    // Signal is for in case the user stops the page before it's done requesting to an API. That way we know it and act accoordingly.

    apiClient.get<User[]>("/users", {signal: controller.signal})
      .then((res) => {
        setUsers(res.data);
        // Set loading to false to hide effect
        setIsLoading(false);
      })

      .catch((err) => { 
        if(err instanceof CanceledError) return; // If it's canceled we just return without saying anything
        setError("Something went wrong, try again later...");

        // We set the loading state to false so the loading animation is hidden
        setIsLoading(false);
      });

      return(() => controller.abort())

  }, []);

  const userDelete = (user: User) => {
    /** Making an optimistic update where we update the UI first and then we make a call to the server to persist it */

    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));
    apiClient.delete("https://jsonplaceholder.typicode.com/users/" + user.id)

    // If there's an error we update the state to render an error and set the array of users to its original state

    .catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    });
  }  



  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Ariel"};
    setUsers([newUser, ...users]);

    // Request to the server
    apiClient.post("https://jsonplaceholder.typicode.com/users/", newUser)
    .then((res) => {
      setUsers([res.data, ...users]);
    })
    .catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    })
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!"};
    setUsers(users.map((u) => u.id == user.id ? updatedUser : u));

    // Request to server for update
    apiClient.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updateUser)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  return (
    <div>

      { error && <p> {error} </p>}
      { isLoading && <div className="spinner-border"></div> }

      <button className="btn btn-primary mb-3" onClick={addUser}> Add </button>
      <ul className="list-group">
        {users.map((user) => 
        
        <li key={user.id} className="list-group-item d-flex justify-content-between"> {user.name} 
          <div>
            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}> Update </button>
            <div className="btn btn-outline-danger" onClick={() => userDelete(user)}> Delete </div> 
          </div>
        </li>)}
      </ul>

      
    </div>
  ) 

}

export default App;
