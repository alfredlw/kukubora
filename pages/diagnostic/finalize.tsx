import React, { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";

function Finalize() {
  const [isFinalising, setIsFinalizing] = useState(false);
  const { push, back } = useRouter();
  const { q4, q5, q6, q7, q8, q9, q10, q11 } = useGlobalContext();

  const finalize = () => {
    setIsFinalizing(true);
    setTimeout(() => {
      setIsFinalizing(false);

      if (
        q4?.length === 0 &&
        q5?.length === 0 &&
        q6?.length === 0 &&
        q7?.length === 0 &&
        q8?.length === 0 &&
        q9?.length === 0 &&
        q10?.length === 0 &&
        q11?.length === 0
      ) {
        push("/diagnostic/noproblem");
      } else {
        push("/diagnostic/result");
      }
    }, 5000);
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
              className={`${isFinalising && " animate-ping"}`}
            />
          </div>
          {!isFinalising ? (
            <div className="col-span-2 pt-20">
              <h1 className="text-4xl">Fin</h1>
              <h3 className="font-semibold ">
                Vous etes à la fin de votre diagnostique!
              </h3>
              <ul className="pl-5 mt-2">
                <li className="list-disc list-inside">
                  Veuillez cliquer sur FINALISER pour voir le resultat
                </li>
              </ul>
              <div className="flex space-x-3 mt-4">
                <button
                  className="bg-gray-100 text-gray-800 rounded-full px-4 py-2  font-medium uppercase"
                  onClick={() => back()}
                >
                  Retour
                </button>
                <button
                  className="bg-red-500 text-white rounded-full px-4 py-2 font-medium uppercase"
                  onClick={finalize}
                >
                  Finaliser
                </button>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col justify-center items-center">
              <div className="h-12 w-12 rounded-full border-4 border-red-500 animate-spin">
                <div className="h-3 w-3 bg-red-500 rounded-full" />
              </div>
              <p className="text-gray-500 text-sm mt-2">Veuilez patienter!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Finalize;
