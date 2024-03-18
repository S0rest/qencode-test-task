import { EyeHideIcon, EyeShowIcon } from '@/assets/CommonIcons'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AuthArrError, AuthStrError } from '@/services/auth.types'
import { AxiosError } from 'axios'
import cn from 'clsx'
import { ResetPasswordFormProps } from '../form.types'

const ResetPasswordForm = ({
	handleSubmit,
	onSubmit,
	register,
	errors,
	fieldType,
	handleChangeFieldType,
	fieldTypeConfirm,
	handleChangeFieldTypeConfirm,
	isPending,
	isError,
	error,
}: ResetPasswordFormProps) => {
	const showValidationError = (fieldName: 'password' | 'password_confirm') => {
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
			<div>
				<label className={cn('label', 'block mb-[8px]')} htmlFor='password'>
					Password
				</label>
				<Field
					{...register('password')}
					name='password'
					type={fieldType}
					placeholder='Password'
					error={errors.password}
					Icon={fieldType === 'password' ? <EyeShowIcon /> : <EyeHideIcon />}
					onClick={handleChangeFieldType}
				/>
			</div>
			{!errors.password && showValidationError('password')}
			<div className='mt-[25px]'>
				<label
					className={cn('label', 'block mb-[8px]')}
					htmlFor='confirmPassword'
				>
					Confirm Password
				</label>
				<Field
					{...register('confirmPassword')}
					name='confirmPassword'
					type={fieldTypeConfirm}
					placeholder='Password'
					error={errors.confirmPassword}
					Icon={
						fieldTypeConfirm === 'password' ? <EyeShowIcon /> : <EyeHideIcon />
					}
					onClick={handleChangeFieldTypeConfirm}
				/>
			</div>
			{!errors.confirmPassword && showValidationError('password_confirm')}
			{!errors.confirmPassword && showResponseError()}
			<Button type='submit' className='mt-[30px]' disabled={isPending}>
				Reset Password
			</Button>
		</form>
	)
}

export default ResetPasswordForm
