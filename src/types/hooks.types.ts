export type LoginMutationType = {
	setFormSuccess: (value: React.SetStateAction<boolean>) => void
	reset: () => void
	setIsLoginNextPage: (value: React.SetStateAction<boolean>) => void
}

export type ForgotPasswordMutationType = {
	setFormSuccess: React.Dispatch<React.SetStateAction<boolean>>
	reset: () => void
}