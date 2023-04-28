import { createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'users/fetch',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response
    }
)

const userAPI = {
    fetchById: (id: number) => new Promise((resolve) => setTimeout(function() {resolve(`My name is audrey! and my id is ${id}`)}, 2000))
}