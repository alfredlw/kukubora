import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto pt-3 px-3">
      <Head>
        <title>Bureau KukuBora</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="max-width-5xl mx-auto grid grid-cols-3 py-8">
        <div>
          <Image
            src="/assets/images/logo.png"
            alt=""
            height={512}
            width={512}
          />
          <p className="text-center text-xs mt-3 text-gray-500">Logo KukuBora</p>
        </div>
        <div className="p-5 col-span-2 text-gray-500">
          <h1 className="font-bold text-xl text-yellow-400">Qui sommes-nous?</h1>
          <p className="">
            Nous sommes KukuBoraZta. Une initiative de recherche des diagnostiques
            des maladies des poules par un système expert.
          </p>
          <h1 className="font-bold text-xl text-yellow-400 mt-5">Objectif</h1>
          <p className="">
            L’objectif le plus estimé de notre travail est de concevoir un
            système expert qui va bien aider l’utilisateur via une interface qui
            serait web, qui diagnostique les signes (symptômes) et qui
            confirment la présence de la maladie et permettre de produire une
            prescription suivant la présence de signes (symptômes) détectés sans
            passer nécessairement par l’intermédiaire d’un expert humain.
          </p>
          <p>Ca vous tente? <Link href="/diagnostic" className="text-red-500">Vous pouvez commencer par ici</Link></p>
        </div>
        
      </main>
      <div className="pt-8">
        <div className=" grid md:grid-cols-2 gap-0 rounded-xl">
          <div className=" text-gray-50 bg-red-500 p-5 md:rounded-l-3xl">
            <h6 className="font-bold text-xl text-yellow-400">Nos contacts</h6>
            <h3>Pour un traitement approprié de vos poules.</h3>
            <ul className=" list-disc pl-10 mt-3">
              <a href="tel:+243977883417" target="_blank">
                <li>+243 977 883 417</li>
              </a>
              <a href="tel:+243826764127" target="_blank">
                <li>+243 826 764 127</li>
              </a>
              <a href="mailto:zetasepika@gmail.com" target="_blank">
                <li>zetasepika@gmail.com</li>
              </a>
            </ul>
          </div>
          <div className="bg-gray-100 p-5 md:rounded-r-3xl text-gray-500">
            <h6 className="font-bold text-xl">Adresse</h6>
            <p>Beni, Q. Residentiel, No 37, ... <br/>République Démocratique du Congo.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
