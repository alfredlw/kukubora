import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useGlobalContext } from "../../context";

const symptomes = [
    "Forte fièvre et Diarrhée blanchâtre",
    "Prostration (l’animal est couché à même la litière)",
    "Manque d'appétit",
    "Sécheresse des muscles",
    "Plumage ébouriffé et souillé Prévention Et Transmission"
]

function Step5() {
  const { back, push } = useRouter();
  const {q5, addToQ5, removeFromQ5} = useGlobalContext()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const checked = e.target.checked
    const value = e.target.value

    if(checked){
       addToQ5 && addToQ5(value)
    }else{
        removeFromQ5 && removeFromQ5(value)
    }
  }

  const goTo = () => {
    push("/diagnostic/step6");
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
            <h1 className="text-4xl">Etape 5</h1>
            <h3 className="font-semibold ">
              Parmi les symptômes suivants, quels sont ceux que présentent sur votre poule
            </h3>
            <ul className="pl-5 mt-2">
                {
                    symptomes.map((item, index)=>{
                        return <li className="  flex items-start my-2" key={item}>
                        <input type="checkbox" id={`s${index}`} defaultChecked={q5?.includes(item)} value={item} onChange={handleChange} />{" "}
                        <label className="ml-3" htmlFor={`s${index}`} >{item}</label>
                      </li>
                    })
                }
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
                onClick={goTo}
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

export default Step5;
