"use client"
import {useState} from "react";

const ErrorButton = () => {
    const [error, setError] = useState(false)
    if (error) {
        throw new Error("Intentionally throw")
    }
    return (
        <button
            className={"block px-4 py-2 mt-4 ml-4 rounded-lg bg-black text-white"}
            onClick={() => setError(true)}
        >
            Throw
        </button>
    );
};

export default ErrorButton;