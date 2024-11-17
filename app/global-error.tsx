'use client'

export default function GlobalError(
    {
        reset,
    }: {
        reset: () => void
    }) {
    return (
        // global-error must include html and body tags
        <html>
        <body>
        <h2>Something went wrong caught error globally!</h2>
        <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    )
}