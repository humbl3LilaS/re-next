import Link from "next/link";

export default function Home() {
  return (
      <main>
          <h1>
              Re-Learning NextJS properly
          </h1>
          <section>
              <Link href={"/loading-demo"} className={"text-blue-400 underline"}>Loading demo</Link>
          </section>
      </main>
  );
}
