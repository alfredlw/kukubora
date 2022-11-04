import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/header";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-3">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
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
