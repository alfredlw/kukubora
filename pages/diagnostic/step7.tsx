import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useGlobalContext } from "../../context";
const symptomes = [
  "écoulements nasal",
  "Ronflements",
  "La toux",
  "Conjonctivite",
  "Diminution de la quantité et de la qualité des œufs (coquilles molle, déformation des œufs)",
];
function Step7() {
  const { back, push } = useRouter();
  const { q7, addToQ7, removeFromQ7 } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const value = e.target.value;

    if (checked) {
      addToQ7 && addToQ7(value);
    } else {
      removeFromQ7 && removeFromQ7(value);
    }
  };

  const goTo = () => {
    push("/diagnostic/step8");
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
            <h1 className="text-4xl">Etape 7</h1>
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
                      defaultChecked={q7?.includes(item)}
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

export default Step7;
