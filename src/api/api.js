import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "04a4f1a6-bb03-41ad-8c50-a4b3e9bb8d43"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}
export const followAPI = {

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    updatePhoto(file) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha,
        })
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const CaptchaAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response)
    }
}

