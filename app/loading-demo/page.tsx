import {getTodos} from "@/actions/loading-demo-action";

const LoadingDemoPage = async () => {
    const data = await getTodos() as Array<{
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }>;
    return (
        <main className="p-10 w-screen h-screen grid grid-col-4 grid-rows-4 bg-blue-100 gap-4">
            <header className="bg-stone-300 rounded-lg col-span-4"/>
            <aside className={"bg-green-400 col-span-1 row-span-3 rounded-lg"}/>
            <section className={"bg-rose-300 col-span-3 row-span-3 rounded-lg p-10"}>
                <div>
                    {data[0].title}
                </div>
            </section>
        </main>
    );
};

export default LoadingDemoPage;