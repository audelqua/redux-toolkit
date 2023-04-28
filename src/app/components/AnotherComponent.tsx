"use client";
import React from 'react'
import { useAppSelector } from "@/redux/hooks";

const AnotherComp: React.FC = () => {
    const count = useAppSelector((state) => state.counterReducer.value);
    
    return (
        <div>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>your count somewhere else {count}</h4>
            </div>
        </div>
    )
}

export default AnotherComp