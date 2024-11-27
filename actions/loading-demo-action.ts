"use server"

export const getTodos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    return data.json();
}