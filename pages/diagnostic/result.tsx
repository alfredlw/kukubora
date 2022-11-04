import React, { useState } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";

function Result() {
  const [isFinalising, setIsFinalizing] = useState(false);
  const { push } = useRouter();
  const { q4, q5, q6, q7, q8, q9, q10, q11, reset } = useGlobalContext();

  const end = () => {
    reset && reset();
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
              className={`${isFinalising && " animate-ping"}`}
            />
          </div>

          <div className="col-span-2 pt-20">
            <h1 className="text-4xl">Resultats</h1>
            <h3 className="font-semibold ">
              D&apos;apres les informations que vous avez fournie pendant le
              diagnostique:
            </h3>
            <div className="p-5">
              <h6 className="text-lg text-yellow-500 font-semibold ">
                Maladies
              </h6>
              <ul className="pl-5 mt-2">
                {q4 && q4?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Newcastle
                  </li>
                )}
                {q5 && q5?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Gumboro
                  </li>
                )}
                {q6 && q6?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Maladie de marek
                  </li>
                )}
                {q7 && q7?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Bronchite infectieuse
                  </li>
                )}
                {q8 && q8?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Coccidiose
                  </li>
                )}
                {q9 && q9?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Coryza infectieuse ou Rhume aviaire
                  </li>
                )}
                {q10 && q10?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Choléra aviaire
                  </li>
                )}
                {q11 && q11?.length > 1 && (
                  <li className=" list-inside list-disc text-gray-600">
                    Variole aviaire
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-green-100 p-5">
              <h6 className="text-lg text-green-500 font-semibold">
                Prescription
              </h6>

              <ul className="pl-5 mt-2">
                {q4 && q4?.length > 1 && (
                  <>
                    <li className="list-disc list-inside text-gray-600">
                      Aucun traitement direct sauf le vaccin VECTORINE{" "}
                    </li>
                    <li className="list-disc list-inside text-gray-600">
                      Une ose 1 goute dans chaque œil
                    </li>
                  </>
                )}
                {q5 && q5?.length > 1 && (
                  <>
                    <li className="list-disc list-inside text-gray-600">
                      Aucun traitement direct sauf le vaccin TRANSMUNE
                    </li>
                    <li className="list-disc list-inside text-gray-600">
                      Une ose 1 goute dans chaque œil
                    </li>
                  </>
                )}
                <li className="list-disc list-inside text-gray-600">Hygiene</li>
                <li className="list-disc list-inside text-gray-600">
                  Evitez de laisser vos poules aller en dehors de l&apos;enclos sans
                  controle
                </li>
                <li className="list-disc list-inside text-gray-600">
                  Nous vous suggerons d&apos;aller voir un medecin veterinaire
                  specialiste pour d&apos;autres questions
                </li>
              </ul>
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

export default Result;
