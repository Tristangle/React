import { Session } from "inspector";
import Sessions from "./Sessions";

export default function Home(){
    return (
        <div>
            <h2>Qui sommes-Nous?</h2>
            <p>
                Bienvenue chez La Maison Horrifique, l'expérience ultime d'escape game pour les amateurs de sensations fortes ! 
                Plongez dans un univers terrifiant où chaque session vous promet une immersion totale dans des scénarios effrayants et palpitants. 
                Notre société se spécialise dans la création de jeux d'évasion thématiques, mêlant énigmes complexes et atmosphères angoissantes pour vous offrir des frissons garantis. 
                Oserez-vous relever le défi et survivre à nos aventures cauchemardesques ? La Maison Horrifique, là où vos peurs prennent vie.
            </p>
            <Sessions/>
        </div>
    )
}