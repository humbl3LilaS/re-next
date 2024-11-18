import {getUser} from "@/actions/permanent-redirect-actions";
import {notFound, redirect} from "next/navigation";

const Page = async () => {

    const user = await getUser();

    if (!user) {
        notFound();
    }

    return (
        <section>
            <h1>Permanently redirect demo</h1>
            <button
                className={"block px-4 py-2 mt-4 ml-4 rounded-lg bg-black text-white"}
                onClick={async () => {
                    "use server"
                    redirect(`/permanent-redirect-demo/${user.name}`);
                }}
            >
                Go to profile
            </button>
        </section>
    );
};


export default Page;