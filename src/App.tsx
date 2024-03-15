import Login from '@/pages/login/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ROUTE } from './util/enums'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTE.MAIN} element={<Navigate to={ROUTE.LOGIN} />} />
				<Route path={ROUTE.LOGIN} element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App