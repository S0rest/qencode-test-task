import { authService } from '@/services/auth.service'
import { AuthLoginType } from '@/services/auth.types'
import { LoginMutationType } from '@/types/hooks.types'
import { useMutation } from '@tanstack/react-query'

export const useLoginMutation = ({
	setFormSuccess,
	reset,
	setIsLoginNextPage,
}: LoginMutationType) => {
	return useMutation({
		mutationKey: ['login'],
		mutationFn: (params: AuthLoginType) => authService.login(params),
		onSuccess: () => {
			setFormSuccess(true)
			reset()
			setIsLoginNextPage(false)
		},
	})
}
