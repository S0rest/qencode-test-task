import cn from 'clsx'
import { forwardRef } from 'react'
import s from './Button.module.scss'
import { ButtonPropsType } from './button.types'

const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
	({ children, color, className, disabled, ...rest }, ref) => {
		return (
			<button
				className={cn(s.button, className, {
					[s.button_w]: color === 'white',
				})}
				ref={ref}
				disabled={disabled}
				{...rest}
			>
				{children}
			</button>
		)
	}
)

export default Button
