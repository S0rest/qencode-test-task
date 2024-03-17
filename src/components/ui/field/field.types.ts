import { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export type FieldProps = {
	placeholder: string
	error?: FieldError
	Icon?: ReactNode
}

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> & FieldProps

export type FieldType = 'password' | 'text'

export type FieldMessageType = {
	sendMessage: (message: string) => Promise<void>
}
