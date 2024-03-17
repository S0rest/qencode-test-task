import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FormSuccessProps } from '../form/form.types'

const FormSuccess = ({ type, formSuccess }: FormSuccessProps) => {
	const successRef = useRef(null)
	return (
		<CSSTransition
			in={formSuccess}
			timeout={500}
			classNames='alertSlow'
			nodeRef={successRef}
			unmountOnExit
		>
			<div ref={successRef}>
				<h1 className='font-bold text-[30px]/[38.73px] mb-[40px] text-center text-[#1A1919]'>
					{type} successful
				</h1>
			</div>
		</CSSTransition>
	)
}

export default FormSuccess
