import request from './request';
import { RegisterUser } from "../page/register";
import { UpdatePassword } from "../page/updatePassword";
import { UserInfo } from "../page/update_info";


export async function login(username: string, password: string) {
    return await request.post('/user/login', {
        username, password
    });
}

export async function registerCaptcha(email: string) {
    return await request.get('/user/register-captcha', {
        params: {
            address: email
        }
    });
}

export async function register(registerUser: RegisterUser) {
    return await request.post('/user/register', registerUser);
}

export async function updatePasswordCaptcha(email: string) {
    return await request.get('/user/update_password/captcha', {
        params: {
            address: email
        }
    });
}

export async function updatePassword(data: UpdatePassword) {
    return await request.post('/user/update_password', data);
}


export async function getUserInfo() {
    return await request.get('/user/info');
}

export async function updateInfo(data: UserInfo) {
    return await request.post('/user/update', data);
}

export async function updateUserInfoCaptcha() {
    return await request.get('/user/update/captcha');
}
