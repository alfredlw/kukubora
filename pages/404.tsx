import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-width-5xl flex flex-col justify-center items-center mx-auto h-96">
        <Image src="/assets/images/logo.png" alt="" height={112} width={112} />
        <h1 className="font-semibold">Page introuvable</h1>
        <p>Il semble que vous vous êtes perdu dans l'espace!</p>
        <Link href="/" className="text-red-500">
          Allez à l'accueil
        </Link>
      </main>
    </div>
  );
}
