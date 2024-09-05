import Image from "next/image"
import Link from "next/link"
import "./NavBar.css"

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>
                            <Image
                                src="/assets/accueil.png"
                                width={40}
                                height={40}
                                />
                            <p>Accueil</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/habilitationsList"}>
                        <Image
                        src="/assets/habilitation.png"
                        width={40}
                        height={40}
                        />
                        <p>Habilitations</p>
                    </Link>
                </li>
                <li>
                    <Image
                    src="/assets/training.png"
                    width={40}
                    height={40}
                    />
                    <p>Formations</p>
                </li>
            </ul>
        </nav> 
    )
}
