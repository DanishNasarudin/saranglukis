import { Inter } from "next/font/google";
import Details from "./(sections)/Details";
import Hero from "./(sections)/Hero";
import Howto from "./(sections)/Howto";
import InstaFeed from "./(sections)/InstaFeed";
import Master from "./(sections)/Master";
import Studio from "./(sections)/Studio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col mx-auto`}>
      <Hero />
      <InstaFeed />
      <Howto />
      <Master />
      <Studio />
      <Details />
    </main>
  );
}
