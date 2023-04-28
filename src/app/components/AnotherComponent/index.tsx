"use client";
import React from 'react'
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchUserById } from '../../../redux/features/fetchAsync/fetchAsyncThunkActions'

const AnotherComp: React.FC = () => {
    const count = useAppSelector((state) => state.counterReducer.value);
    const myUser = useAppSelector((state) => state.userReducer.data);
    const dispatch = useAppDispatch();
    
    const handleFetchUser = () => {
        dispatch(fetchUserById(20)).then((response) => {
            console.log('response', response);
        })
    }

    return (
        <div>
            <span>We have an asynchronous action here</span>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>your count somewhere else {count}</h4>
                <button onClick={handleFetchUser}>
                    click to fetch user
                </button>
                <span>user is: {myUser}</span>
            </div>
        </div>
    )
}

export default AnotherComp