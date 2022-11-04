import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { isUndefined } from "util";
import Footer from "../../components/Footer";
import Header from "../../components/header";

function Step2(this: any) {
  const { back, push } = useRouter();
  const [dateStart, setDateStart] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateStart(() => e.target.value);
  };

  const goTo = () => {
    push("/diagnostic/step3");
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
            />
          </div>
          <div className="col-span-2 pt-20">
            <h1 className="text-4xl">Etape 2</h1>
            <h3 className="font-semibold ">Votre poule a quel age?</h3>
            <fieldset>
              <ul className="pl-5 mt-2">
                <li className=" list-inside flex items-center my-2">
                  <input
                    type="radio"
                    id="d1"
                    name="date"
                    value="1 à 3 semaines"
                    onChange={handleChange.bind(this)}
                  />{" "}
                  <label className="ml-3" htmlFor="d1">
                    1 à 3 semaines
                  </label>
                </li>
                <li className="list-inside flex items-center my-2">
                  <input
                    type="radio"
                    id="d2"
                    name="date"
                    value="4 à 6 semaines"
                    onChange={handleChange.bind(this)}
                  />{" "}
                  <label className="ml-3" htmlFor="d2">
                    4 à 6 semaines
                  </label>
                </li>
                <li className="list-inside flex items-center my-2">
                  <input
                    type="radio"
                    id="d3"
                    name="date"
                    value="Plus de semaines"
                    onChange={handleChange.bind(this)}
                  />{" "}
                  <label className="ml-3" htmlFor="d3">
                    Plus de semaines
                  </label>
                </li>
                <li className="list-inside flex items-center my-2">
                  <input
                    type="radio"
                    id="d4"
                    name="date"
                    value="Plus de semaines"
                    onChange={handleChange.bind(this)}
                  />{" "}
                  <label className="ml-3" htmlFor="d4">
                    Je ne sais pas
                  </label>
                </li>
              </ul>
            </fieldset>
            <div className="flex space-x-3 mt-4">
              <button
                className="bg-gray-100 text-gray-800 rounded-full px-4 py-2  font-medium uppercase"
                onClick={() => back()}
              >
                Retour
              </button>
              <button
                className="bg-red-500 text-white rounded-full px-4 py-2 font-medium uppercase disabled:bg-gray-100"
                onClick={goTo}
                disabled={isUndefined(dateStart)}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Step2;
