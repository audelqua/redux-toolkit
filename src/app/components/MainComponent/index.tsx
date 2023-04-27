"use client";
import React from 'react'
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const MainComponent: React.FC = () => {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();
    console.log('count', count);
    
    return (
        <div>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </div>
    )
}

export default MainComponent