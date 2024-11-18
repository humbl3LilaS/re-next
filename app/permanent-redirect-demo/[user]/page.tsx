"use client"
import {useParams} from "next/navigation";

import {useActionState} from "react"
import {updateUser} from "@/actions/permanent-redirect-actions";



const DynamicPage = () => {

    const initialState = {
        message: '',
    }

    //in real life we can check if the user is exist or not by using session
    const params = useParams()

    const [state, formAction, isPending] = useActionState(updateUser, initialState)

    return (
        <section className={"w-screen h-screen bg-slate-100"}>
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <header className={"p-4 mb-4 bg-white rounded-lg shadow-xl"}>
                    This is the route for {params.user}
                </header>
                <form
                    className={"p-8 bg-white rounded-lg shadow-xl"}
                    action={formAction} method="POST"
                    encType={"application/x-www-form-urlencoded"}
                >
                    <div className={"flex flex-col gap-y-2"}>
                        <label htmlFor={"name"}>
                            Name
                        </label>
                        <input
                            name="name"
                            id="name"
                            className={"px-4 py-2 border border-stone-500 rounded-lg outline-none"}
                        />
                        <p aria-live="polite">{state?.message}</p>
                    </div>
                    <button
                        className={"block px-4 py-2 mt-4 rounded-lg bg-black text-white"}
                        type={"submit"}
                        disabled={isPending}
                    >
                        {isPending ? "Updating..." : "Change Name"}
                    </button>
                </form>
            </div>
        </section>
    );
}


export default DynamicPage;