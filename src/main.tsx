import '@/styles/fonts.scss'
import '@/styles/index.scss'
import '@/styles/utils.scss'
import store from '@store'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
