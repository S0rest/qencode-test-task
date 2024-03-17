import cn from 'clsx'
import { forwardRef } from 'react'
import s from './Field.module.scss'
import { InputPropsType } from './field.types'

const Field = forwardRef<HTMLInputElement, InputPropsType>(
	({ error, style, Icon, className, onClick, ...rest }, ref) => {
		return (
			<>
				<div className={cn(s.field, className)} style={style}>
					<input
						ref={ref}
						{...rest}
						className={cn('input', {
							[s.input__icon]: Icon,
						})}
					/>
					{Icon && (
						<span className={s.icon} onClick={onClick}>
							{Icon}
						</span>
					)}
				</div>
				{error && <div className='error'>{error.message}</div>}
			</>
		)
	}
)

export default Field
