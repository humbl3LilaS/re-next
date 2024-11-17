"use client"

import {useEffect} from "react";

type ErrorProps = {
    error: Error & { digest?: string }
    reset: () => void
}

const Error = ({error, reset}: ErrorProps) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong in /app/error-demo!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
};

export default Error;