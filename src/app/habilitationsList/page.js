import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import "../habilitationsList/page.css"

export default function habilitationList() {
  return (
    <body>
      <header >
          <NavBar/>
      </header>
      <main >
        <section>
          <div>
            <p>La liste de vos habilitations</p>
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
