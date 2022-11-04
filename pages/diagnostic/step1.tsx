import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { isUndefined } from "util";
import Footer from "../../components/Footer";
import Header from "../../components/header";

function Step1(this: any) {
  const { back, push } = useRouter();
  const [hasSymptome, setHasSymptome] = useState<string>();

const handleChange= (e:React.ChangeEvent<HTMLInputElement>) =>{
  setHasSymptome(()=>e.target.value)
}

  const goTo = () => {
    if (hasSymptome==="yes") {
      push("/diagnostic/step2");
    } else {
      push("/diagnostic/noproblem");
    }
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
            <h1 className="text-4xl">Etape 1</h1>
            <h3 className="font-semibold ">
              Votre poule presente t-il certains symptômes?
            </h3>
            <fieldset>
            <ul className="pl-5 mt-2">
              <li className=" list-inside flex items-center my-2">
                <input type="radio" name="hasSymptome" id="yes" value='yes' onChange={handleChange.bind(this)} />{" "}
                <label className="ml-3" htmlFor="yes">
                  Oui
                </label>
              </li>
              <li className="list-inside flex items-center my-2">
                <input type="radio" name="hasSymptome" id="no" value='no' onChange={handleChange.bind(this)} />{" "}
                <label className="ml-3" htmlFor="no">
                  Non
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
                disabled={isUndefined(hasSymptome)}
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

export default Step1;
