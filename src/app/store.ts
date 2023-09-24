import { configureStore } from '@reduxjs/toolkit'
import showMenuSlicer from '@/features/showMenuSlice'

export const store = configureStore({
  reducer: {
    menu: showMenuSlicer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch