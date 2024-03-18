import { authService } from '@/services/auth.service'
import { AuthPasswordResetType } from '@/services/auth.types'
import { SetPasswordMutationType } from '@/types/hooks.types'
import { useMutation } from '@tanstack/react-query'

export const useSetPasswordMutation = ({
	setFormSuccess,
	reset,
}: SetPasswordMutationType) => {
	return useMutation({
		mutationKey: ['set password'],
		mutationFn: (params: AuthPasswordResetType) =>
			authService.setPassword(params),
		onSuccess: () => {
			setFormSuccess(true)
			reset()
		},
	})
}
