import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  gage = ["Ramènes 1 objet de décoration ",
   " Fais un dessin de noel pour ",
   " Acrostiche ",
" Ramènes un cadeau à ",
"    Offre une pomme à",
"    Offre un mouchoir",
  "  Fais une photo avec un chapeau",
   " Mettre un pull de noel",
"    Se déguiser en père Noel",
  "  Mettre une fausse barbe et faire le tour des salles en chantant \"Joyeux Noel ho ho ho\" ",
"    Dessiner le portrait de ",
   " Offrir un vin/lait/thé/café chaud au prochain visiteur de l'entreprise",
    "Inventer une comptine",
   " Tourner une mini vidéo avec d'autres collègues de la même salle (chanson, voeux, ou autres)",
"    Faire des compliments à tous ses collègues pendant une semaine",
    "Envoyer dans la boite mail du patron la vidéo de \"Tu es triste? Arrête!\"",
 "   Faire des manalas pour les collègues"]

 cadeaux = [
"  Une image avec une citation pseudo philosophique",
"  Une image avec une citation d'une célébrité à propos de Noel",
"  Une photo de chat trop mignon dans des paquets cadeaux",
"  Une vidéo rigolote de Noel",
"  Une vidéo mignonne de Noel",
"  Acrostiche",
"  Une vieille pub de Noel en vidéo",
"  Dessin de noel",
"  Photo affiche ",
"  Bon pour chauffer son plat en premier dans le micro onde ",
 " Un message écrit pré-enregistré du Père Noel qui utilise le prénom de la personne qui ouvre la case. (Exemple: \"Ho ho ho alors [prénom] on a été sage cette année ? J'ai entendu que tu avais été un peu coquin avec tes collègues, blabla\")",
"  Chanson de noel préenregistrer ",
 ];

 listeFinale :any= [];

 listeFinale2 :any= [];

  constructor() { }

  ngOnInit() {
    this.randomgage();
  }

  randomgage(){
    for (let index = 0; index < 12; index++) {
     let i = Math.floor(Math.random() * this.gage.length);
      this.listeFinale.push(this.gage[i])
      this.gage[i].slice()
    }
    this.randomgift()
  }

  randomgift(){
    for (let index = 0; index < 12; index++) {
     let i = Math.floor(Math.random() * this.cadeaux.length);
      this.listeFinale.push(this.cadeaux[i])
      this.cadeaux[i].slice()
    }
    this.randomFinale();
  }

  randomFinale(){
    for (let index = 0; index < 24; index++) {
      let i = Math.floor(Math.random() * this.listeFinale.length);
       this.listeFinale2.push(this.listeFinale[i])
       if (this.listeFinale.length > 0) {
          this.listeFinale[i].slice()
       }
     }
  }
  getdata(){
    
  }
}
