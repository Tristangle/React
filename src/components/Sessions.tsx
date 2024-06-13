import React from 'react';
import Session from "../interfaces/Sessions"

export default function Sessions () {

    const sessions: Session[] = [
        {
          title: "L'hôpital hanté",
          description: 'Plongé dans un hôpital en ruine, vous découvrirez les secrets de ses anciens patients.',
          duration: 60,
          participants: '2-4 personnes',
          difficulty: 'Facile',
          price: 25,
          theme: 'Dérangeant',
          objective: 'Découvrir les secrets des patients et en sortir vivant',
          equipement: ['Lampes de poche', 'Stétoscope'],
          public: 'Amateurs de frissons'
        },
        {
          title: "Le Meurice",
          description: "Explorez cet ancien palace abandonné en plein coeur de Paris. Venez y découvrir ses plus grands mystères et tentez d'en sortir vivant.",
          duration: 120,
          participants: '2-6 personnes',
          difficulty: 'Difficile',
          price: 35,
          theme: 'Horreur',
          objective: "Explorer l'hôtel et briser la malédiction",
          equipement: ['Cartes', 'Boussoles'],
          public: 'Joueurs expérimentés'
        },
        {
          title: 'Parasomnia',
          description: "Pour permettre à Clarisse de sommeiller, un labyrinthe gigantesque a été construit; dans l’unique but de perdre ceux qui la tourmentent. Car jusque-là, ses cauchemars ont eu raison d’elle. Nous avons tous déjà eu peur de ce que crée notre cerveau endormi. Et si ces êtres terrifiants sortaient de votre sommeil, seriez-vous prêt à vous y confronter ?",
          duration: 90,
          participants: '4-6 personnes',
          difficulty: 'Moyen',
          price: 45,
          theme: 'Paranormal',
          objective: "Sortir vivant du labyrinthe.",
          equipement: ['Lampes de poche', 'Objets cachés'],
          public: 'Amateurs de suspense'
        },
        {
          title: 'Dark Friday',
          description: "Vous êtes enfermés dans un ancien asile psychiatrique. Des cris résonnent au sein des couloirs...Trouvez un moyen de sortir avant qu'il ne soit trop tard.",
          duration: 60,
          participants: '6-8 personnes',
          difficulty: 'Facile',
          price: 40,
          theme: 'Screamer',
          objective: 'Sortez avec toutes vos dents.',
          equipement: ["Clé","Téléphone"],
          public: 'Familles et groupes d\'amis'
        },
        {
          title: 'Catacombes Nightmare',
          description: "Vous vous êtes perdu dans les catacombes de Paris. Les squelettes vous trouveront si vous ne vous n'en sortez pas avant le temps imparti.",
          duration: 90,
          participants: '4 personnes',
          difficulty: 'Moyen',
          price: 35,
          theme: 'Horreur',
          objective: 'Explorer les catacombes et en sortir vivant',
          equipement: ['Lampes de poche', 'Cartes'],
          public: 'Aventuriers'
        },
        {
          title: 'La cimetière',
          description: "Vous êtes enfermé au sein d'un cimetière. Il fait bientôt nuit. Tentez de vous échapper avant que la nuit tombe. Gare aux esprits rôdeurs...",
          duration: 120,
          participants: '6-8 personnes',
          difficulty: 'Difficile',
          price: 50,
          theme: 'Survie',
          objective: "Échapper aux chasseurs et s'enfuire",
          equipement: ['Lampes de poche', 'Cartes', 'Indices'],
          public: 'Amateurs de survie'
        }
      ];
      

    const petitFilou = () => {
        alert("Petit filou va ! ;)")
    }
    
    return (
        <div>
        <h2>Nos Sessions d'Escape Game</h2>
        {sessions.map((session, index) => (
            <div key={index}>
                <h2>{session.title}</h2>
                <p>{session.description}</p>
                <p>Durée : {session.duration} minutes</p>
                <p>Participants : {session.participants}</p>
                <p>Difficulté : {session.difficulty}</p>
                <p>Prix : {session.price}€</p>
                <p>Thème : {session.theme}</p>
                <p>Objectif : {session.objective}</p>
                <p>Équipement : {session.equipement.join(', ')}</p>
                <p>Public : {session.public}</p>
                <input type="button" value="Réservez maintenant" onClick={petitFilou}/>
            </div>
        ))}
        </div>
    );
}