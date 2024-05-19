import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter/counterSlice'
import { footballApi } from '@/api/football-api'

export const makeStore = () => {
  return configureStore({
    reducer: {[footballApi.reducerPath]: footballApi.reducer,
        counter: counterReducer},
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']