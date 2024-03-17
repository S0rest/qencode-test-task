import { authService } from '@/services/auth.service'
import { ForgotPasswordType } from '@/services/auth.types'
import { ForgotPasswordMutationType } from '@/types/hooks.types'
import { useMutation } from '@tanstack/react-query'

export const useForgotPasswordMutation = ({
	setFormSuccess,
	reset,
}: ForgotPasswordMutationType) => {
	return useMutation({
		mutationKey: ['forgot password'],
		mutationFn: (params: ForgotPasswordType) =>
			authService.forgotPassword(params),
		onSuccess: () => {
			setFormSuccess(true)
			reset()
		},
	})
}
