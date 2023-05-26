import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import userService from "./services/user-service";
import { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {

  const { users, error, isLoading, setUsers, setError } = useUsers(); // Using a custom hook to fetch the list of users

  const userDelete = (user: User) => {
    /** Making an optimistic update where we update the UI first and then we make a call to the server to persist it */

    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));
    userService.delete(user.id) // Calling delete from user service

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
    userService.add(newUser)
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
    userService.update(user, updatedUser)
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
