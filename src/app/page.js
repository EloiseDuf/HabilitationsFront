import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import "./page.css"

export default function Home() {
  return (
    <body>
      <header >
          <NavBar/>
      </header>
      <main >
        <section>
          <div>
            <p>Bonjour Eloïse</p>
            <p>Vous détenez 10 habilitations, 5 arrivent à expiration dans moins de 3 mois</p>
          </div>
          <Image
            src="/assets/bouclier.png"
            alt="bouclier Logo"
            width={180}
            height={180}
            priority
          />
        </section>
      </main>
    </body>
  );
}
