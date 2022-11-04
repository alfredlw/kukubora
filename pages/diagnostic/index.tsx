import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image";
import { useRouter } from "next/router";

function Diagnostic() {
    const {push, back} = useRouter()

    const goTo = () => {
      push("/diagnostic/step1")
    }

  return (
    <div className="max-w-5xl mx-auto px-3">
      <Head>
        <title>KukuBora Diagnostics</title>
        <meta
          name="description"
          content="Passez librement vos test par lequel une sécurité et une confidentialité vous sont bien propre..."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main className="max-width-5xl mx-auto">
        <div className="grid md:grid-cols-3 py-8">
        <div>
            <Image
              src="/assets/images/logo.png"
              alt=""
              width={512}
              height={512}
            />
          </div>
          <div className="col-span-2 pt-20">
            <h1 className="text-4xl">Sentez-vous guidez!</h1>
            <h3 className="font-semibold ">Pour passer au diagnostique :</h3>
            <ul className="pl-5 mt-2">
              <li className="list-disc list-inside">
                Vous allez répondre par Oui ou Non à certaines questions;
              </li>
              <li className="list-disc list-inside">
                Rassurez-vous que vous allez fournir les informations selon les symptômes observées;
              </li>
              <li className="list-disc list-inside">
                A la fin, cliquez sur confirmer pour récevoir le résultat
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
            <button className="bg-gray-100 text-gray-800 rounded-full px-4 py-2  font-medium uppercase" onClick={()=>back()}>
              Retour
            </button>
            <button className="bg-red-500 text-white rounded-full px-4 py-2 font-medium uppercase" onClick={goTo}>
              Continuer
            </button>
            </div>
          </div>
         
        </div>
       
      </main>
      <Footer />
    </div>
  );
}

export default Diagnostic;
