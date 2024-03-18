import * as Yup from 'yup'

export const FormSchema = Yup.object().shape({
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password length should be at least 8 characters'),
	confirmPassword: Yup.string()
		.required('Confirm Password is required')
		.min(8, 'Password length should be at least 8 characters')
		.oneOf([Yup.ref('password')], 'Passwords do not match'),
})
