import apiClient from "./api-client";

export interface User {
  id: number,
  name: string
}

class UserService {

    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient.get<User[]>("/users", {signal: controller.signal});

        return { request, cancel: () => controller.abort() }
    }

    deleteUser(id: number) {
        return apiClient.delete("/users/" + id);
    }

    addUser(user: User) {
        return apiClient.post("/users/", user);
    }

    updateUser(user: User, updatedUser: User) {
        return apiClient.patch("/users/" + user.id, updatedUser);
    }

}

export default new UserService();