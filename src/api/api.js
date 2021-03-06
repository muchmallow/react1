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
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form/data"
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response;
            });
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`);
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