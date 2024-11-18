"use server"

import {db} from "@/database/drizzle";
import {users} from "@/database/schema";
import {eq} from "drizzle-orm";
import {permanentRedirect, redirect} from "next/navigation";


export const getUser = async () => {
    try {
        const [user] = await db
            .select({name: users.name})
            .from(users)
            .where(
                // in real-life we can use user's session to get userId or email, and then we query by this info
                eq(users.id, 1)
            )

        if (!user) {
            return undefined
        }


        return user;

    } catch (_error) {
        console.log("error getting the use", _error);
    }
}

export const updateUser = async (prevState: any, formData: FormData) => {
    const name = formData.get("name") as string;

    if (!name) {
        return {message: "User is required"}
    }

    const [user] = await db.update(users).set({name}).where(eq(users.id, 1)).returning({name: users.name})

    permanentRedirect(`/permanent-redirect-demo/${user.name}`)
}