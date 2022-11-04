import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-3 pt-3">
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
        <div className="flex flex-col items-center py-16 ">
          <Image src="/assets/images/logo.png" alt="" height={96} width={96} />
          <h1 className="text-4xl text-center">
            C&apos;est vraiment &apos;&apos;ya bure&apos;&apos;, facile et anonyme!
          </h1>
          <p className="text-center">KukuBoraZta</p>
        </div>
        <div className="">
          <div className=" grid md:grid-cols-2 gap-0 rounded-xl">
            <div className=" text-gray-50 bg-red-500 p-5 md:rounded-l-3xl">
              <blockquote className="border-l-2 border-white bg-white bg-opacity-5 p-5 md:rounded-l-3xl">
                Afin vous n&apos;avez plus besoin d&apos;une présence humaine pour savoir
                état sanitaire de vos poules... kukuboraZta Diagnostics. Passez
                librement vos test par lequel une securite et une
                confidentialité vous sont bien propre...{" "}
                <Link href="/diagnostic" className="font-bold text-xl text-yellow-500">
                  Commencer maintenant!
                </Link>
              </blockquote>
            </div>
            <div className="bg-gray-100 p-5 md:rounded-r-3xl text-gray-500">
              <h6 className="font-bold text-xl text-yellow-400">
                Nos contacts
              </h6>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
