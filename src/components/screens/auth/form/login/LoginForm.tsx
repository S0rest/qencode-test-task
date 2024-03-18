import { EyeHideIcon, EyeShowIcon } from '@/assets/CommonIcons'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AuthArrError, AuthStrError } from '@/services/auth.types'
import { EMAIL_REGEX } from '@/util/const'
import { ROUTE } from '@/util/enums'
import { AxiosError } from 'axios'
import { Link } from 'react-router-dom'
import { LoginFormProps } from '../form.types'
import s from './LoginForm.module.scss'

const LoginForm = ({
	handleSubmit,
	onSubmit,
	register,
	handleChangeFieldType,
	fieldType,
	isPending,
	errors,
	isLoginNextPage,
	isError,
	error,
}: LoginFormProps) => {
	const showValidationError = (fieldName: 'email' | 'password') => {
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
									{error}
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
						'Invalid user' ? (
							<div className='error'>
								Your Qencode account could not be found
							</div>
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
				placeholder='Work email'
				error={errors.email}
			/>
			{!errors.email && showValidationError('email')}
			{!errors.email && showResponseError()}
			{isLoginNextPage && (
				<>
					<Field
						{...register('password', {
							required: 'Please enter password',
							minLength: {
								value: 8,
								message: 'Password length should be at least 8 characters',
							},
						})}
						type={fieldType}
						className={s.auth__passwordInput}
						placeholder='Password'
						error={errors.password}
						Icon={fieldType === 'password' ? <EyeShowIcon /> : <EyeHideIcon />}
						onClick={handleChangeFieldType}
					/>
					{!errors.password && showValidationError('password')}
					<Link to={ROUTE.FORGOT_PASSWORD} className={s.auth__hintPassword}>
						Forgot your password?
					</Link>
				</>
			)}
			<Button className={s.auth__button} disabled={isPending}>
				Log in to Qencode
			</Button>
		</form>
	)
}

export default LoginForm
