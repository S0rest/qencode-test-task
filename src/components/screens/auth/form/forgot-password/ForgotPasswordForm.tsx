import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AuthArrError, AuthStrError } from '@/services/auth.types'
import { EMAIL_REGEX } from '@/util/const'
import { ROUTE } from '@/util/enums'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { ForgotPasswordFormProps } from '../form.types'
import s from './ForgotPasswordForm.module.scss'

const ForgotPasswordForm = ({
	handleSubmit,
	onSubmit,
	register,
	errors,
	isPending,
	isError,
	error,
}: ForgotPasswordFormProps) => {
	const navigate = useNavigate()

	const handleClickCancel = () => {
		navigate(ROUTE.LOGIN)
	}

	const showValidationError = (fieldName: 'email') => {
		return (
			<>
				{isError &&
					Array.isArray(
						(error as AxiosError<AuthArrError>).response?.data?.detail
					) &&
					(error as AxiosError<AuthArrError>).response!.data.detail.map(
						({ field_name, error }, index) =>
							field_name === fieldName && (
								<div className='error' key={index}>
									{error.includes('Input should be')
										? 'Your Qencode account could not be found'
										: error}
								</div>
							)
					)}
			</>
		)
	}

	const showResponseError = () => {
		return (
			<>
				{isError &&
					(typeof (error as AxiosError<AuthStrError>).response?.data?.detail ===
					'string' ? (
						(error as AxiosError<AuthStrError>).response!.data.detail ===
						'Too many requests' ? (
							<div className='error'>Too many requests try again later</div>
						) : (
							<div className='error'>
								{(error as AxiosError<AuthStrError>).response!.data.detail}
							</div>
						)
					) : null)}
			</>
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('email', {
					required: 'Please enter email',
					pattern: {
						value: EMAIL_REGEX,
						message: 'Enter valid email',
					},
				})}
				type='email'
				placeholder='Enter your email'
				error={errors.email}
			/>
			{!errors.email && showValidationError('email')}
			{!errors.email && showResponseError()}
			<Button type='submit' className={s.buttonSend} disabled={isPending}>
				Send
			</Button>
			<Button
				className={s.buttonCancel}
				color='white'
				onClick={handleClickCancel}
			>
				Cancel
			</Button>
		</form>
	)
}

export default ForgotPasswordForm
