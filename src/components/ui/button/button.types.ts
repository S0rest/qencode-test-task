import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
	color?: 'primary' | 'white'
}

export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps