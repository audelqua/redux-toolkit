"use client";
import React from 'react'
import { useAppSelector } from "@/redux/hooks";
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserData = (id: number) => new Promise(function (res) {
    setTimeout(function () {
        return res(`hello world! this is your id ${id}`)
    }, 1000)
})

// console.log('fetchUserData', fetchUserData.then(res => console.log(res)));


const fetchUser = createAsyncThunk('user/fetchUser', async function (userId, thunkAPI) {
    console.log('here we are');

    const response = await fetchUserData(12)
    return response
})

const AnotherComp: React.FC = () => {
    const count = useAppSelector((state) => state.counterReducer.value);

    const handleFetchUser = () => {
        console.log('we should dispatch thunk here');
    }

    return (
        <div>
            <span>We have an asynchronous action here</span>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>your count somewhere else {count}</h4>
                <button onClick={handleFetchUser}>
                    click to fetch user
                </button>
            </div>
        </div>
    )
}

export default AnotherComp

// const somePromise = new Promise(function(res, rej){
//     res('hello')
// })
// const callPromise = () => {
//     somePromise.then(res => {console.log(res)})
// }
// callPromise()