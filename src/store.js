import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recordApi } from './services/record'
import { dashboardApi } from './services/dashboardData'
import { createNameApi } from './services/createName'

import homeReducer from './reducers/home'

export const store = configureStore({
  reducer: {
        home: homeReducer,
    // Add the generated reducer as a specific top-level slice
    [recordApi.reducerPath]: recordApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [createNameApi.reducerPath]: createNameApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recordApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)