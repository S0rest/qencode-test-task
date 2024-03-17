export type AuthLoginType = {
	email: string
	password: string
}

export type ForgotPasswordType = Pick<AuthLoginType, 'email'>

export type AuthResponse = {
	error: number
	timestamp: number
	access_token: string
	refresh_token: string
	token_expire: number
	refresh_token_expire: number
} & (
	| { detail: { field_name: string; error: string }[] }
	| { detail: string | number }
)

export type AuthArrError = Pick<AuthResponse, 'error' | 'timestamp'> & {
	detail: { field_name: string; error: string }[]
}

export type AuthStrError = Pick<AuthResponse, 'error' | 'timestamp'> & {
	detail: string | number
}
