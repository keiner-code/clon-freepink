import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface typeMenuMovil { menuMovil: boolean; menuAside:boolean}
const initialState: typeMenuMovil = {menuMovil: false, menuAside:false}

export const showMenuSlice = createSlice({
  name: 'menuMovil',
  initialState,
  reducers: {
    changeShowMenuDevice: (state) => {
      state.menuMovil = !state.menuMovil
    },
    changeShowMenuAside: (state) => {
      state.menuAside = !state.menuAside
    }
  }
})

export const { changeShowMenuDevice, changeShowMenuAside } = showMenuSlice.actions
export default showMenuSlice.reducer