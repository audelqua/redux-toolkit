import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from './fetchAsyncThunkActions'

interface UsersState {
    data: string | unknown,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: boolean
}

const initialState = {
    data: '',
    loading: 'idle',
    error: false
} as UsersState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchUserById.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
        
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = 'failed';
        state.error = true;
      });
    },
})

export default usersSlice.reducer;

