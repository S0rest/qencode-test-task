import { GithubIcon, GoogleIcon, QencodeLogo } from '@/assets/CommonIcons'
import { ROUTE } from '@/util/enums'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import s from './Auth.module.scss'
import { AuthProps } from './auth.types'

const Auth = ({ type }: AuthProps) => {
	return (
		<div className={s.auth}>
			<div className={s.auth__form}>
				<div className={s.auth__logo}>
					<QencodeLogo />
				</div>
				<h1 className={s.auth__title}>Log in to your account</h1>
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
				<input type='email' className='input' placeholder='Work email' />
				<button className={s.auth__button}>Log in to Qencode</button>
				<p className={s.auth__hint}>
					Is your company new to Qencode?{' '}
					<Link to={ROUTE.MAIN} className={s.auth__hint_link}>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Auth
