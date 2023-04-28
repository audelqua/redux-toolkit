import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from './fetchAsyncThunkActions'

interface UsersState {
    data: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: boolean
}


// definition of these types for action needs more research, for now i set it to any type
// interface IThunkMetaType { 
//     age: number,
//     request: string,
//     requestState: string
// }

// interface IFetchUserActionType {
//     meta: IThunkMetaType,
//     payload: string,
//     type: string
// }

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
      .addCase(fetchUserById.fulfilled, (state, action: any) => {
        state.loading = 'succeeded';
        console.log(action);
        
        state.data = action.payload;
        
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = 'failed';
        state.error = true;
      });
    },
})

export default usersSlice.reducer;

