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
	confirmPassword: string
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

export type ResetPasswordFormProps = {
	handleSubmit: UseFormHandleSubmit<LoginFormState, LoginFormState>
	onSubmit: SubmitHandler<LoginFormState>
	register: UseFormRegister<LoginFormState>
	errors: FieldErrors<LoginFormState>
	fieldType: FieldType
	handleChangeFieldType: () => void
	fieldTypeConfirm: FieldType
	handleChangeFieldTypeConfirm: () => void
	isPending: boolean
	isError: boolean
	error: Error | null
}

export type FormSuccessProps = {
	type: 'Login' | 'Forgot Password' | 'Set Password'
	formSuccess: boolean
}
