import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, {User} from "../services/user-service";

function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError]= useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
  
      const { request, cancel } = userService.getAll<User>(); // Getting what we need from user service
  
      // We set loading to false wether we succeed in loading or not. We could just use finally but it doesn't work in strict mode
      // Signal is for in case the user stops the page before it's done requesting to an API. That way we know it and act accoordingly.
  
        request.then((res) => {
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
  
        return(cancel) // Effect clean up
  
    }, []);



    return { users, error, isLoading, setUsers, setError };
}

export default useUsers;