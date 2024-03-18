import axios from '@/axios/axios'
import { API_AUTH } from '@/util/api'
import { REDIRECT_URL } from '@/util/const'
import { AxiosResponse } from 'axios'
import {
	AuthArrError,
	AuthLoginResponse,
	AuthLoginType,
	AuthPasswordResetResponse,
	AuthPasswordResetType,
	ForgotPasswordType,
} from './auth.types'

export const authService = {
	login: async (
		params: AuthLoginType
	): Promise<AxiosResponse<AuthLoginResponse, AuthArrError>> =>
		axios.post(API_AUTH.LOGIN, params),
	forgotPassword: async (
		params: ForgotPasswordType
	): Promise<AxiosResponse<AuthPasswordResetResponse, AuthArrError>> =>
		axios.post(API_AUTH.PASSWORD_RESET, {
			email: params,
			redirect_url: REDIRECT_URL,
		}),
	setPassword: async (
		params: AuthPasswordResetType
	): Promise<AxiosResponse<AuthPasswordResetResponse, AuthArrError>> =>
		axios.post(API_AUTH.PASSWORD_SET, params),
}
