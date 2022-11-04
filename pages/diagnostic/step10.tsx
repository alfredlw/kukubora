import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useGlobalContext } from "../../context";

const symptomes = [
  "La période d’incubation est de quatre à neuf jours, mais des accès aigus peuvent apparaître en deux jours. Si dans certains cas, les oiseaux meurent dans les quelques heures suivant les premiers signes qui varient suivant la forme de la maladie",
  "La forme respiratoire se caractérise par du halètement, de la toux et des éternuements, tandis que dans la forme septicémique, apparaît une diarrhée avec des fèces humides de couleur grise, jaune ou verte",
  "Dans la forme localisée, les signes sont la paralysie et la flaccidité des articulations des ailes et des pattes. Si dans les cas aigus, la tête et la crête virent au rouge sombre ou au pourpre",
  "L’infection est localisée à la région des oreilles, une torsion du cou (torticolis) peut quelquefois s’observer",
  "Dans les cas chroniques, la crête est généralement pâle, avec des gonflements autour des yeux et un jetage buccal ou nasal",
  "Le choléra est commun partout où il y a des troupeaux villageois en liberté, du fait qu’ils associent plusieurs espèces de volailles et sont constamment en contact avec des oiseaux sauvages"
];

function Step10() {
  const { back, push } = useRouter();

  const { q10, addToQ10, removeFromQ10 } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value;

    if (checked) {
      addToQ10 && addToQ10(value);
    } else {
      removeFromQ10 && removeFromQ10(value);
    }
  };

  const goTo = () => {
    push("/diagnostic/step11");
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
            <h1 className="text-4xl">Etape 10</h1>
            <h3 className="font-semibold ">
              Parmi les symptômes suivant, quels sont ceux que présente votre
              poule
            </h3>
            <ul className="pl-5 mt-2">
              {symptomes.map((item, index) => {
                return (
                  <li className="  flex items-start my-2" key={item}>
                    <input
                      type="checkbox"
                      id={`s${index}`}
                      defaultChecked={q10?.includes(item)}
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    <label className="ml-3" htmlFor={`s${index}`}>
                      {item}
                    </label>
                  </li>
                );
              })}
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

export default Step10;
