import '@/styles/fonts.scss'
import '@/styles/index.scss'
import '@/styles/utils.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { queryClient } from './query/queryClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
