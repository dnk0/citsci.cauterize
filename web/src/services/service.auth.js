import axios from "axios";

const API_URL = "http://localhost:8080/u/";

class AuthService {
    login(username, password) {
        return new Promise(function(resolve, reject) {
            axios.post(API_URL + "login", {
                    username,
                    password
                })
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem("cauterize.access_token", JSON.stringify(response.data.access_token));
                        localStorage.setItem("cauterize.refresh_token", JSON.stringify(response.data.refresh_token));
                    }
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    logout() {
        localStorage.removeItem("cauterize.access_token");
        localStorage.removeItem("cauterize.refresh_token");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        let token_content = JSON.parse(atob(this.getCurrentAccessToken().split('.')[1]))
        if (token_content.user_id) {
            return token_content.user_id
        } else {
            return null
        }
    }

    isLoggedIn() {
        if (localStorage.getItem("cauterize.access_token") === null) {
            return false
        }
        return true
    }

    getCurrentAccessToken() {
        return localStorage.getItem("cauterize.access_token")
    }

    setKeepLoggedIn(keepLoggedIn) {
        return localStorage.setItem("cauterize.keep_session", keepLoggedIn);
    }

    keepLoggedIn() {
        return localStorage.getItem("cauterize.keep_session")
    }
}

export default new AuthService();
