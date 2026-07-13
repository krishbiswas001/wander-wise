import {create, find } from './user.js';
import { generateAccessToken } from '../config/jwt.js';// Service function for registering a new user and generating an access token
import{unauthorizedError} from '../errors/unauthorized.js'
import { compare } from 'bcryptjs';


export const register = async (data) => {
    const user = await create(data);
    return generateAccessToken({ userId: user._id });
}

export const login = async (data) => {
    const user = await find({ email: data.email });
}
