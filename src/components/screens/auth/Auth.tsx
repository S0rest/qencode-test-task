import { GithubIcon, GoogleIcon, QencodeLogo } from '@/assets/CommonIcons'
import { FieldType } from '@/components/ui/field/field.types'
import { useForgotPasswordMutation } from '@/hooks/useForgotPasswordMutation'
import { useLoginMutation } from '@/hooks/useLoginMutation'
import { ROUTE } from '@/util/enums'
import cn from 'clsx'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import s from './Auth.module.scss'
import { AuthProps } from './auth.types'
import FormSuccess from './form-success/FormSuccess'
import ForgotPasswordForm from './form/forgot-password/ForgotPasswordForm'
import { LoginFormState } from './form/form.types'
import LoginForm from './form/login/LoginForm'

const Auth = ({ type, title }: AuthProps) => {
	const [isLoginNextPage, setIsLoginNextPage] = useState(false)
	const [fieldType, setFieldType] = useState<FieldType>('password')
	const [formSuccess, setFormSuccess] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		// watch,
	} = useForm<LoginFormState>({
		mode: 'onChange',
	})
	// console.log(watch())

	const {
		mutate: mutateLogin,
		isPending: isLoginPending,
		isError: isLoginError,
		error: loginError,
	} = useLoginMutation({
		setFormSuccess,
		reset,
		setIsLoginNextPage,
	})

	const {
		mutate: mutateForgotPassword,
		isPending: isForgotPasswordPending,
		isError: isForgotPasswordError,
		error: forgotPasswordError,
	} = useForgotPasswordMutation({
		setFormSuccess,
		reset,
	})

	const onSubmit: SubmitHandler<LoginFormState> = formData => {
		console.log(formData)
		if (type === 'Login') {
			if (!isLoginNextPage) {
				setIsLoginNextPage(true)
				return
			}
			mutateLogin(formData)
			// setFormSuccess(true)
			// console.log(formData)
			// reset()
			// setIsLoginNextPage(false)
		} else if (type === 'Forgot Password') {
			mutateForgotPassword({ email: formData.email })
		}
	}

	const handleChangeFieldType = () => {
		setFieldType(prev => (prev === 'password' ? 'text' : 'password'))
	}

	return (
		<div className={s.auth}>
			<div className={s.auth__form}>
				<div className={s.auth__logo}>
					<QencodeLogo />
				</div>
				{!formSuccess && (
					<>
						<h1 className={s.auth__title}>{title}</h1>
						{type === 'Login' && (
							<>
								<div className={cn(s.auth__socials, s.socials)}>
									<div className={s.socials__columns}>
										<button className={s.socials__button}>
											<span className={s.socials__icon}>
												<GoogleIcon />
											</span>
											<p className={s.socials__text}>Google</p>
										</button>
									</div>
									<div className={s.socials__columns}>
										<button className={s.socials__button}>
											<span className={s.socials__icon}>
												<GithubIcon />
											</span>
											<p className={s.socials__text}>Github</p>
										</button>
									</div>
								</div>
								<div className={cn(s.auth__decor, s.decor)}>
									<span className={s.decor__column}></span>
									<span className={cn(s.decor__column, s.decor__column_m)}>
										<p className={s.decor__text}>OR</p>
									</span>
									<span className={s.decor__column}></span>
								</div>
								<LoginForm
									handleSubmit={handleSubmit}
									onSubmit={onSubmit}
									register={register}
									handleChangeFieldType={handleChangeFieldType}
									fieldType={fieldType}
									isPending={isLoginPending}
									errors={errors}
									isLoginNextPage={isLoginNextPage}
									isError={isLoginError}
									error={loginError}
								/>
								<p className={s.auth__hint}>
									Is your company new to Qencode?{' '}
									<Link to={ROUTE.MAIN} className={s.auth__hint_link}>
										Sign up
									</Link>
								</p>
							</>
						)}
						{type === 'Forgot Password' && (
							<ForgotPasswordForm
								handleSubmit={handleSubmit}
								onSubmit={onSubmit}
								register={register}
								errors={errors}
								isPending={isForgotPasswordPending}
								isError={isForgotPasswordError}
								error={forgotPasswordError}
							/>
						)}
					</>
				)}
				<FormSuccess type={type} formSuccess={formSuccess} />
			</div>
		</div>
	)
}

export default Auth
