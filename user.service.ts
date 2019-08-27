import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  readonly baseURL = "http://localhost:3000/users";

  postUser(user) {
    return this.http.post(this.baseURL + "/register", user);
  }

  login(authCredentials) {
    return this.http.post(this.baseURL + "/authenticate", authCredentials);
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
  }
}
