import React, { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image";
import { useRouter } from "next/router";

function NoProblem() {
  const [isFinalising, setIsFinalizing] = useState(false);
  const { push, back } = useRouter();

  const end = () => {
  
      push("/");
   
  };

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
              className={`${isFinalising&&' animate-ping'}`}
            />
          </div>
          
            <div className="col-span-2 pt-20">
              <h1 className="text-4xl">Resultats</h1>
              <h3 className="font-semibold ">
                Comme votre poule ne presente aucun symptôme c&apos;est dificile pour nous de vous aider. sinon:
              </h3>
              <div className="p-5">
              <h6 className="text-lg text-yellow-500 font-semibold "></h6>
                <ul className="pl-5 mt-2">
                  <li className=" list-inside text-gray-600">
                  Votre poule n&apos;a rien comme maladie
                  </li>
                </ul>
              </div>
              <div className="bg-green-100 p-5">
                <h6 className="text-lg text-green-500 font-semibold">Prescription</h6>
                
                <ul className="pl-5 mt-2">
                  <li className=" list-inside list-decimal text-gray-600">
                  Prennez soin de l&apos;hygiene de vos poule 
                  </li>
                  <li className="list-disc list-inside text-gray-600">
                  Evitez de laisser vos poules aller en dehors de l&apos;enclos sans controle
                  </li>
                  <li className="list-disc list-inside text-gray-600">
                  Nous vous suggerons d&apos;aller voir un medecin veterinaire specialiste pour d&apos;autres questions
                  </li>
                </ul>
                {/* <p>
                Hygiene, evitez de laisser vos poules aller en dehors de l'enclos
                </p> */}
              </div>
              <div className="flex space-x-3 mt-4">
                <button
                  className="bg-red-500 text-white rounded-full px-4 py-2 font-medium uppercase"
                  onClick={end}
                >
                  OK
                </button>
              </div>
            </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NoProblem;
