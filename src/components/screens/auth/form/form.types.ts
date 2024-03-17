import { FieldType } from '@/components/ui/field/field.types'
import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'

export type LoginFormState = {
	email: string
	password: string
}

export type LoginFormProps = {
	handleSubmit: UseFormHandleSubmit<LoginFormState, LoginFormState>
	onSubmit: SubmitHandler<LoginFormState>
	register: UseFormRegister<LoginFormState>
	handleChangeFieldType: () => void
	fieldType: FieldType
	isPending: boolean
	errors: FieldErrors<LoginFormState>
	isLoginNextPage: boolean
	isError: boolean
	error: Error | null
}

export type ForgotPasswordFormProps = {
	handleSubmit: UseFormHandleSubmit<LoginFormState, LoginFormState>
	onSubmit: SubmitHandler<LoginFormState>
	register: UseFormRegister<LoginFormState>
	isPending: boolean
	errors: FieldErrors<LoginFormState>
	isError: boolean
	error: Error | null
}

export type FormSuccessProps = {
	type: 'Login' | 'Forgot Password' | 'Reset Password'
	formSuccess: boolean
}
