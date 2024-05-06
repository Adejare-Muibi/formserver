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
		const err =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const loginUser = async (payload: Login) => {
	try {
		const response = await axios.post(`${SERVER_URL}/auth/signin`, payload);
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

export const verifyEmail = async (token: string) => {
	try {
		const response = await axios.get(
			`${SERVER_URL}/auth/register/verify/${token}`
		);
		console.log(response);
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

export const getDashboard = async () => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.get(`${SERVER_URL}/user/dashboard`, {
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
		const err =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message;
		console.log('error', err);
		return {status: 400, message: err};
	}
};

export const updateForm = async (formID: string, payload: Form) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.patch(
			`${SERVER_URL}/user/form/update-form/${formID}`,
			payload,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
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

export const deleteForm = async (formID: string) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.delete(
			`${SERVER_URL}/user/form/delete-form/${formID}`,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
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

export const updateProfile = async (
	userEmail: string,
	payload: ProfileForm
) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.patch(
			`${SERVER_URL}/user/user/${userEmail}`,
			payload,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
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

export const updatePassword = async (
	tokenPassword: string,
	payload: {
		password: string;
		confirm: string;
	}
) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.post(
			`${SERVER_URL}/user/change-password/${tokenPassword}`,
			payload,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
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
export const forgetPassword = async (payload: {email: string}) => {
	try {
		const response = await axios.post(
			`${SERVER_URL}/auth/reset-password`,
			payload
		);
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

export const resetPassword = async (token: string) => {
	try {
		const response = await axios.get(
			`${SERVER_URL}/auth/reset-password/${token}`
		);
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

export const changePassword = async (payload: {
	token: string;
	password: string;
}) => {
	try {
		const response = await axios.post(
			`${SERVER_URL}/auth/reset-password/update`,
			payload
		);
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

export const upgradePlan = async (payload: {reference: string}) => {
	try {
		const token = localStorage.getItem('_tkn');
		const response = await axios.post(
			`${SERVER_URL}/user/plan-payment`,
			payload,
			{
				headers: {Authorization: `Bearer ${token}`},
			}
		);
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
