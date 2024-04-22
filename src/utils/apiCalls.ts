import axios from 'axios';
import {Login, Register} from './apiCalls.types';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (payload: Register) => {
	try {
		const response = await axios.post(`${SERVER_URL}/auth/register`, payload);
		console.log(response.data);
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err = error.response?.data?.message || error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const loginUser = async (payload: Login) => {
	try {
		const response = await axios.post(`${SERVER_URL}/auth/signin`, payload);
		return response.data;
	} catch (error: any) {
		const err = error.response?.data?.message || error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const getDashboard = async () => {
	try {
		const response = await axios.get(`${SERVER_URL}/user/dashboard`);
		console.log('response', response.data);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
		return error.message;
	}
};
