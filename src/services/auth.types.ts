export type AuthLoginType = {
	email: string
	password: string
}

export type ForgotPasswordType = Pick<AuthLoginType, 'email'>

export type AuthLoginResponse = {
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

export type AuthPasswordResetResponse = Pick<
	AuthLoginResponse,
	'detail' | 'timestamp'
>

export type AuthArrError = Pick<AuthLoginResponse, 'error' | 'timestamp'> & {
	detail: { field_name: string; error: string }[]
}

export type AuthStrError = Pick<AuthLoginResponse, 'error' | 'timestamp'> & {
	detail: string | number
}

export type AuthPasswordResetType = {
	token: string
	secret: string
	password: string
	password_confirm: string
}
