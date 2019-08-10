import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "da3b8251-db91-4981-b097-c49a19337cd6"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getMeAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
};


// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
// })
//     .then(response => {
//         if(response.data.resultCode === 0){
//             let {id, login, email} = response.data.data;
//             this.props.setAuthUserData(id, email, login);
//         }
//     });


// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "da3b8251-db91-4981-b097-c49a19337cd6"
//     }
// })