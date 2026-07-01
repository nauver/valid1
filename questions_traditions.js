const SUBJECTS = [
  {
    "id": "TRD-ORANGE",
    "name": "Bataille des oranges"
  },
  {
    "id": "TRD-SHRIMP",
    "name": "Pêche aux crevettes à cheval"
  },
  {
    "id": "TRD-COLACHO",
    "name": "El Colacho"
  },
  {
    "id": "TRD-KURENT",
    "name": "Kurentovanje"
  },
  {
    "id": "TRD-UPHELLYAA",
    "name": "Up Helly Aa"
  },
  {
    "id": "TRD-TOMATINA",
    "name": "La Tomatina"
  },
  {
    "id": "TRD-MARTENITSA",
    "name": "Martenitsa"
  },
  {
    "id": "TRD-MIDSUMMER",
    "name": "Midsommar"
  },
  {
    "id": "TRD-VAPPU",
    "name": "Vappu"
  },
  {
    "id": "TRD-BUSOJARAS",
    "name": "Busójárás"
  }
];
const QUESTIONS = [
  {
    "id": "TRD-ORANGE-COUNTRY",
    "subjectId": "TRD-ORANGE",
    "subject": "Bataille des oranges",
    "type": "Pays",
    "question": "Pendant un carnaval, des milliers d’oranges sont lancées entre équipes rivales.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Italie",
      "Belgique",
      "Espagne",
      "Slovénie"
    ],
    "correct": "Italie",
    "explanation": "Bataille des oranges est associé à Italie, plus précisément à Ivrea, Piémont."
  },
  {
    "id": "TRD-ORANGE-REGION",
    "subjectId": "TRD-ORANGE",
    "subject": "Bataille des oranges",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Ivrea, Piémont",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Ivrea, Piémont",
    "explanation": "Le lieu de référence est Ivrea, Piémont. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-ORANGE-MEANING",
    "subjectId": "TRD-ORANGE",
    "subject": "Bataille des oranges",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "révolte populaire symbolique",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "révolte populaire symbolique",
    "explanation": "Cette tradition porte une signification culturelle : révolte populaire symbolique."
  },
  {
    "id": "TRD-ORANGE-RIDDLE",
    "subjectId": "TRD-ORANGE",
    "subject": "Bataille des oranges",
    "type": "Devinette",
    "question": "Devinette : Pendant un carnaval, des milliers d’oranges sont lancées entre équipes rivales.\nQuelle tradition est décrite ?",
    "answers": [
      "Bataille des oranges",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Bataille des oranges",
    "explanation": "La description renvoie à Bataille des oranges."
  },
  {
    "id": "TRD-ORANGE-TF",
    "subjectId": "TRD-ORANGE",
    "subject": "Bataille des oranges",
    "type": "Vrai / Faux",
    "question": "Bataille des oranges est associé à Ivrea, Piémont.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Bataille des oranges est bien associé à Ivrea, Piémont."
  },
  {
    "id": "TRD-SHRIMP-COUNTRY",
    "subjectId": "TRD-SHRIMP",
    "subject": "Pêche aux crevettes à cheval",
    "type": "Pays",
    "question": "Des pêcheurs entrent dans la mer à cheval pour capturer des crevettes avec de grands filets.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Belgique",
      "Italie",
      "Espagne",
      "Slovénie"
    ],
    "correct": "Belgique",
    "explanation": "Pêche aux crevettes à cheval est associé à Belgique, plus précisément à Oostduinkerke."
  },
  {
    "id": "TRD-SHRIMP-REGION",
    "subjectId": "TRD-SHRIMP",
    "subject": "Pêche aux crevettes à cheval",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Oostduinkerke",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Oostduinkerke",
    "explanation": "Le lieu de référence est Oostduinkerke. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-SHRIMP-MEANING",
    "subjectId": "TRD-SHRIMP",
    "subject": "Pêche aux crevettes à cheval",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "savoir-faire maritime encore pratiqué",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "savoir-faire maritime encore pratiqué",
    "explanation": "Cette tradition porte une signification culturelle : savoir-faire maritime encore pratiqué."
  },
  {
    "id": "TRD-SHRIMP-RIDDLE",
    "subjectId": "TRD-SHRIMP",
    "subject": "Pêche aux crevettes à cheval",
    "type": "Devinette",
    "question": "Devinette : Des pêcheurs entrent dans la mer à cheval pour capturer des crevettes avec de grands filets.\nQuelle tradition est décrite ?",
    "answers": [
      "Pêche aux crevettes à cheval",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Pêche aux crevettes à cheval",
    "explanation": "La description renvoie à Pêche aux crevettes à cheval."
  },
  {
    "id": "TRD-SHRIMP-TF",
    "subjectId": "TRD-SHRIMP",
    "subject": "Pêche aux crevettes à cheval",
    "type": "Vrai / Faux",
    "question": "Pêche aux crevettes à cheval est associé à Oostduinkerke.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Pêche aux crevettes à cheval est bien associé à Oostduinkerke."
  },
  {
    "id": "TRD-COLACHO-COUNTRY",
    "subjectId": "TRD-COLACHO",
    "subject": "El Colacho",
    "type": "Pays",
    "question": "Des personnages costumés sautent au-dessus de bébés couchés sur des matelas dans la rue.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Espagne",
      "Italie",
      "Belgique",
      "Slovénie"
    ],
    "correct": "Espagne",
    "explanation": "El Colacho est associé à Espagne, plus précisément à Castrillo de Murcia."
  },
  {
    "id": "TRD-COLACHO-REGION",
    "subjectId": "TRD-COLACHO",
    "subject": "El Colacho",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Castrillo de Murcia",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Castrillo de Murcia",
    "explanation": "Le lieu de référence est Castrillo de Murcia. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-COLACHO-MEANING",
    "subjectId": "TRD-COLACHO",
    "subject": "El Colacho",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "rite spectaculaire de protection symbolique",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "rite spectaculaire de protection symbolique",
    "explanation": "Cette tradition porte une signification culturelle : rite spectaculaire de protection symbolique."
  },
  {
    "id": "TRD-COLACHO-RIDDLE",
    "subjectId": "TRD-COLACHO",
    "subject": "El Colacho",
    "type": "Devinette",
    "question": "Devinette : Des personnages costumés sautent au-dessus de bébés couchés sur des matelas dans la rue.\nQuelle tradition est décrite ?",
    "answers": [
      "El Colacho",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "El Colacho",
    "explanation": "La description renvoie à El Colacho."
  },
  {
    "id": "TRD-COLACHO-TF",
    "subjectId": "TRD-COLACHO",
    "subject": "El Colacho",
    "type": "Vrai / Faux",
    "question": "El Colacho est associé à Castrillo de Murcia.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : El Colacho est bien associé à Castrillo de Murcia."
  },
  {
    "id": "TRD-KURENT-COUNTRY",
    "subjectId": "TRD-KURENT",
    "subject": "Kurentovanje",
    "type": "Pays",
    "question": "Des personnages couverts de peaux et de cloches défilent pour chasser l’hiver.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Slovénie",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Slovénie",
    "explanation": "Kurentovanje est associé à Slovénie, plus précisément à Ptuj."
  },
  {
    "id": "TRD-KURENT-REGION",
    "subjectId": "TRD-KURENT",
    "subject": "Kurentovanje",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Ptuj",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Ptuj",
    "explanation": "Le lieu de référence est Ptuj. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-KURENT-MEANING",
    "subjectId": "TRD-KURENT",
    "subject": "Kurentovanje",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "rituel de passage vers le printemps",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "rituel de passage vers le printemps",
    "explanation": "Cette tradition porte une signification culturelle : rituel de passage vers le printemps."
  },
  {
    "id": "TRD-KURENT-RIDDLE",
    "subjectId": "TRD-KURENT",
    "subject": "Kurentovanje",
    "type": "Devinette",
    "question": "Devinette : Des personnages couverts de peaux et de cloches défilent pour chasser l’hiver.\nQuelle tradition est décrite ?",
    "answers": [
      "Kurentovanje",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Kurentovanje",
    "explanation": "La description renvoie à Kurentovanje."
  },
  {
    "id": "TRD-KURENT-TF",
    "subjectId": "TRD-KURENT",
    "subject": "Kurentovanje",
    "type": "Vrai / Faux",
    "question": "Kurentovanje est associé à Ptuj.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Kurentovanje est bien associé à Ptuj."
  },
  {
    "id": "TRD-UPHELLYAA-COUNTRY",
    "subjectId": "TRD-UPHELLYAA",
    "subject": "Up Helly Aa",
    "type": "Pays",
    "question": "Des participants déguisés défilent aux torches avant de brûler une réplique de drakkar.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Écosse",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Écosse",
    "explanation": "Up Helly Aa est associé à Écosse, plus précisément à Shetland."
  },
  {
    "id": "TRD-UPHELLYAA-REGION",
    "subjectId": "TRD-UPHELLYAA",
    "subject": "Up Helly Aa",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Shetland",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Shetland",
    "explanation": "Le lieu de référence est Shetland. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-UPHELLYAA-MEANING",
    "subjectId": "TRD-UPHELLYAA",
    "subject": "Up Helly Aa",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "héritage viking réinterprété en fête moderne",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "héritage viking réinterprété en fête moderne",
    "explanation": "Cette tradition porte une signification culturelle : héritage viking réinterprété en fête moderne."
  },
  {
    "id": "TRD-UPHELLYAA-RIDDLE",
    "subjectId": "TRD-UPHELLYAA",
    "subject": "Up Helly Aa",
    "type": "Devinette",
    "question": "Devinette : Des participants déguisés défilent aux torches avant de brûler une réplique de drakkar.\nQuelle tradition est décrite ?",
    "answers": [
      "Up Helly Aa",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Up Helly Aa",
    "explanation": "La description renvoie à Up Helly Aa."
  },
  {
    "id": "TRD-UPHELLYAA-TF",
    "subjectId": "TRD-UPHELLYAA",
    "subject": "Up Helly Aa",
    "type": "Vrai / Faux",
    "question": "Up Helly Aa est associé à Shetland.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Up Helly Aa est bien associé à Shetland."
  },
  {
    "id": "TRD-TOMATINA-COUNTRY",
    "subjectId": "TRD-TOMATINA",
    "subject": "La Tomatina",
    "type": "Pays",
    "question": "Des milliers de participants se lancent des tomates dans une bataille festive.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Espagne",
      "Italie",
      "Belgique",
      "Slovénie"
    ],
    "correct": "Espagne",
    "explanation": "La Tomatina est associé à Espagne, plus précisément à Buñol."
  },
  {
    "id": "TRD-TOMATINA-REGION",
    "subjectId": "TRD-TOMATINA",
    "subject": "La Tomatina",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Buñol",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Buñol",
    "explanation": "Le lieu de référence est Buñol. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-TOMATINA-MEANING",
    "subjectId": "TRD-TOMATINA",
    "subject": "La Tomatina",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "fête populaire devenue symbole touristique",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "fête populaire devenue symbole touristique",
    "explanation": "Cette tradition porte une signification culturelle : fête populaire devenue symbole touristique."
  },
  {
    "id": "TRD-TOMATINA-RIDDLE",
    "subjectId": "TRD-TOMATINA",
    "subject": "La Tomatina",
    "type": "Devinette",
    "question": "Devinette : Des milliers de participants se lancent des tomates dans une bataille festive.\nQuelle tradition est décrite ?",
    "answers": [
      "La Tomatina",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "La Tomatina",
    "explanation": "La description renvoie à La Tomatina."
  },
  {
    "id": "TRD-TOMATINA-TF",
    "subjectId": "TRD-TOMATINA",
    "subject": "La Tomatina",
    "type": "Vrai / Faux",
    "question": "La Tomatina est associé à Buñol.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : La Tomatina est bien associé à Buñol."
  },
  {
    "id": "TRD-MARTENITSA-COUNTRY",
    "subjectId": "TRD-MARTENITSA",
    "subject": "Martenitsa",
    "type": "Pays",
    "question": "Des bracelets rouges et blancs sont offerts au début du mois de mars.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Bulgarie",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Bulgarie",
    "explanation": "Martenitsa est associé à Bulgarie, plus précisément à Bulgarie."
  },
  {
    "id": "TRD-MARTENITSA-REGION",
    "subjectId": "TRD-MARTENITSA",
    "subject": "Martenitsa",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Bulgarie",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Bulgarie",
    "explanation": "Le lieu de référence est Bulgarie. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-MARTENITSA-MEANING",
    "subjectId": "TRD-MARTENITSA",
    "subject": "Martenitsa",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "souhait de santé et arrivée du printemps",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "souhait de santé et arrivée du printemps",
    "explanation": "Cette tradition porte une signification culturelle : souhait de santé et arrivée du printemps."
  },
  {
    "id": "TRD-MARTENITSA-RIDDLE",
    "subjectId": "TRD-MARTENITSA",
    "subject": "Martenitsa",
    "type": "Devinette",
    "question": "Devinette : Des bracelets rouges et blancs sont offerts au début du mois de mars.\nQuelle tradition est décrite ?",
    "answers": [
      "Martenitsa",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Martenitsa",
    "explanation": "La description renvoie à Martenitsa."
  },
  {
    "id": "TRD-MARTENITSA-TF",
    "subjectId": "TRD-MARTENITSA",
    "subject": "Martenitsa",
    "type": "Vrai / Faux",
    "question": "Martenitsa est associé à Bulgarie.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Martenitsa est bien associé à Bulgarie."
  },
  {
    "id": "TRD-MIDSUMMER-COUNTRY",
    "subjectId": "TRD-MIDSUMMER",
    "subject": "Midsommar",
    "type": "Pays",
    "question": "Des familles décorent un mât fleuri et dansent autour de celui-ci.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Suède",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Suède",
    "explanation": "Midsommar est associé à Suède, plus précisément à Suède."
  },
  {
    "id": "TRD-MIDSUMMER-REGION",
    "subjectId": "TRD-MIDSUMMER",
    "subject": "Midsommar",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Suède",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Suède",
    "explanation": "Le lieu de référence est Suède. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-MIDSUMMER-MEANING",
    "subjectId": "TRD-MIDSUMMER",
    "subject": "Midsommar",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "célébration du solstice et de la lumière",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "célébration du solstice et de la lumière",
    "explanation": "Cette tradition porte une signification culturelle : célébration du solstice et de la lumière."
  },
  {
    "id": "TRD-MIDSUMMER-RIDDLE",
    "subjectId": "TRD-MIDSUMMER",
    "subject": "Midsommar",
    "type": "Devinette",
    "question": "Devinette : Des familles décorent un mât fleuri et dansent autour de celui-ci.\nQuelle tradition est décrite ?",
    "answers": [
      "Midsommar",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Midsommar",
    "explanation": "La description renvoie à Midsommar."
  },
  {
    "id": "TRD-MIDSUMMER-TF",
    "subjectId": "TRD-MIDSUMMER",
    "subject": "Midsommar",
    "type": "Vrai / Faux",
    "question": "Midsommar est associé à Suède.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Midsommar est bien associé à Suède."
  },
  {
    "id": "TRD-VAPPU-COUNTRY",
    "subjectId": "TRD-VAPPU",
    "subject": "Vappu",
    "type": "Pays",
    "question": "Des étudiants et familles célèbrent le printemps avec casquettes, pique-niques et boissons festives.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Finlande",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Finlande",
    "explanation": "Vappu est associé à Finlande, plus précisément à Finlande."
  },
  {
    "id": "TRD-VAPPU-REGION",
    "subjectId": "TRD-VAPPU",
    "subject": "Vappu",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Finlande",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Finlande",
    "explanation": "Le lieu de référence est Finlande. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-VAPPU-MEANING",
    "subjectId": "TRD-VAPPU",
    "subject": "Vappu",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "fête du printemps et des étudiants",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "fête du printemps et des étudiants",
    "explanation": "Cette tradition porte une signification culturelle : fête du printemps et des étudiants."
  },
  {
    "id": "TRD-VAPPU-RIDDLE",
    "subjectId": "TRD-VAPPU",
    "subject": "Vappu",
    "type": "Devinette",
    "question": "Devinette : Des étudiants et familles célèbrent le printemps avec casquettes, pique-niques et boissons festives.\nQuelle tradition est décrite ?",
    "answers": [
      "Vappu",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Vappu",
    "explanation": "La description renvoie à Vappu."
  },
  {
    "id": "TRD-VAPPU-TF",
    "subjectId": "TRD-VAPPU",
    "subject": "Vappu",
    "type": "Vrai / Faux",
    "question": "Vappu est associé à Finlande.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Vappu est bien associé à Finlande."
  },
  {
    "id": "TRD-BUSOJARAS-COUNTRY",
    "subjectId": "TRD-BUSOJARAS",
    "subject": "Busójárás",
    "type": "Pays",
    "question": "Des participants portent de grands masques en bois pour effrayer l’hiver.\n\nDans quel pays cette tradition est-elle surtout connue ?",
    "answers": [
      "Hongrie",
      "Italie",
      "Belgique",
      "Espagne"
    ],
    "correct": "Hongrie",
    "explanation": "Busójárás est associé à Hongrie, plus précisément à Mohács."
  },
  {
    "id": "TRD-BUSOJARAS-REGION",
    "subjectId": "TRD-BUSOJARAS",
    "subject": "Busójárás",
    "type": "Région / lieu",
    "question": "Où cette tradition est-elle particulièrement associée ?",
    "answers": [
      "Mohács",
      "Andalousie",
      "Bavière",
      "Laponie"
    ],
    "correct": "Mohács",
    "explanation": "Le lieu de référence est Mohács. L’ancrage local est important pour comprendre la tradition."
  },
  {
    "id": "TRD-BUSOJARAS-MEANING",
    "subjectId": "TRD-BUSOJARAS",
    "subject": "Busójárás",
    "type": "Signification",
    "question": "Quelle idée cette tradition met-elle surtout en scène ?",
    "answers": [
      "carnaval traditionnel de fin d’hiver",
      "une compétition sportive moderne",
      "un traité administratif",
      "une cérémonie bancaire"
    ],
    "correct": "carnaval traditionnel de fin d’hiver",
    "explanation": "Cette tradition porte une signification culturelle : carnaval traditionnel de fin d’hiver."
  },
  {
    "id": "TRD-BUSOJARAS-RIDDLE",
    "subjectId": "TRD-BUSOJARAS",
    "subject": "Busójárás",
    "type": "Devinette",
    "question": "Devinette : Des participants portent de grands masques en bois pour effrayer l’hiver.\nQuelle tradition est décrite ?",
    "answers": [
      "Busójárás",
      "Midsommar",
      "Busójárás",
      "La Tomatina"
    ],
    "correct": "Busójárás",
    "explanation": "La description renvoie à Busójárás."
  },
  {
    "id": "TRD-BUSOJARAS-TF",
    "subjectId": "TRD-BUSOJARAS",
    "subject": "Busójárás",
    "type": "Vrai / Faux",
    "question": "Busójárás est associé à Mohács.\nCette affirmation est-elle correcte ?",
    "answers": [
      "Vrai",
      "Faux",
      "Impossible à dire",
      "Nom inventé"
    ],
    "correct": "Vrai",
    "explanation": "La bonne réponse est vraie : Busójárás est bien associé à Mohács."
  }
];
