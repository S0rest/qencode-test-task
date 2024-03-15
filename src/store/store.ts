import { api } from '@api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	// auth: authSlice.reducer,
})

const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export default store
