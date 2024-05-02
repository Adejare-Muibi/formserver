import axios from 'axios';
import {Login, Register} from './apiCalls.types';
import {ProfileForm} from '@/app/profile/profile.types';

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
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err = error.response?.data?.message || error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const getDashboard = async () => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.get(`${SERVER_URL}/user/dashboard`, {
			headers: {Authorization: `Bearer ${token}`},
		});
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err = error.response?.data?.message || error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const submitForm = async (payload: Form) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.post(
			`${SERVER_URL}/user/create-form`,
			payload,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err = error.response?.data?.message || error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const updateProfile = async (url: string, payload: ProfileForm) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.patch(`${SERVER_URL}/${url}`, payload, {
			headers: {Authorization: `Bearer ${token}`},
		});
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const updatePassword = async (url: string, payload: ProfileForm) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.patch(`${SERVER_URL}/${url}`, payload, {
			headers: {Authorization: `Bearer ${token}`},
		});
		return {status: response.status, data: response.data};
	} catch (error: any) {
		const err =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};
