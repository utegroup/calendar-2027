/*
  Testi del sito, da rivedere qui.

  Quiz: si possono cambiare domande e risposte.
  Non cambiare l’ordine delle quattro risposte di ogni domanda:
  il mestiere che esce dipende dalla posizione, non dalle parole.
*/

window.COPY = {
  ui: {
    it: {
      htmlLang: "it",
      title: "Calendario 2027 — Custodi del Tempo",
      logo: "GDS Group",
      back: "Indietro",
      calendarWord: "CALENDARIO",
      tagline: ["Custodi del Tempo:", "volti e gesti dei mestieri di una volta."],
      seeCalendar: "Vedi il calendario",
      explore: "Esplora i mestieri",
      discover: "Scopri il tuo mestiere",
      visit: "Visita il nostro sito",
      visitUrl: "https://www.utegroup.it/",
      exploreTitle: ["Esplora i 12 mestieri", "selezionati."],
      gesture: "Step {current} di {total}",
      confirm: "Conferma",
      restart: "Ricomincia",
      home: "Torna alla home",
      pageOf: "{current} / {total}",
      choose: "Scegli una risposta",
      cover: "Copertina",
      opening: "Apertura",
      front: "Fronte",
      backSide: "Retro",
      closing: "Chiusura",
      previous: "Immagine precedente",
      next: "Immagine successiva",
    },
    en: {
      htmlLang: "en",
      title: "Calendar 2027 — Keepers of Time",
      logo: "GDS Group",
      back: "Back",
      calendarWord: "CALENDAR",
      tagline: ["Keepers of Time:", "faces and gestures of the old crafts."],
      seeCalendar: "See the calendar",
      explore: "Explore the crafts",
      discover: "Find your craft",
      visit: "Visit our website",
      visitUrl: "https://www.utegroup.it/",
      exploreTitle: ["Explore the 12", "chosen crafts."],
      gesture: "Step {current} of {total}",
      confirm: "Confirm",
      restart: "Start again",
      home: "Back to home",
      pageOf: "{current} / {total}",
      choose: "Choose an answer",
      cover: "Cover",
      opening: "Opening",
      front: "Front",
      backSide: "Back",
      closing: "Closing",
      previous: "Previous image",
      next: "Next image",
    },
  },

  quiz: [
    {
      it: {
        prompt: "A quale ritmo senti di appartenere davvero?",
        options: [
          {title: "Tranquillo", text: "Un passo calmo, dove ogni cosa accade a suo tempo."},
          {title: "Costante", text: "Un moto senza fretta che non si ferma mai del tutto."},
          {title: "Frenetico", text: "Un turbine di energia che brucia e forgia al volo."},
          {title: "Solitario", text: "Un respiro appartato, lontano da ogni voce estranea."},
        ],
      },
      en: {
        prompt: "Which rhythm feels like your true way of living?",
        options: [
          {title: "Peaceful", text: "A slow and unhurried pace, letting life unfold."},
          {title: "Constant", text: "A tireless, steady flow that never really stops."},
          {title: "Frenetic", text: "A sudden spark of energy that shapes on the fly."},
          {title: "Solitary", text: "A quiet and sheltered path, away from the crowd."},
        ],
      },
    },
    {
      it: {
        prompt: "Qual è il tuo modo di stare tra gli altri?",
        options: [
          {title: "Discreto", text: "Presenza silenziosa che osserva senza fare rumore."},
          {title: "Nascosto", text: "Dietro le quinte, a preparare ciò che verrà visto."},
          {title: "Accogliente", text: "Al banco d'ascolto, donando sollievo a chiunque passi."},
          {title: "Sicuro", text: "Punto di riferimento saldo che sa indicare la rotta."},
        ],
      },
      en: {
        prompt: "How do you like being around others?",
        options: [
          {title: "Discreet",text: "A quiet presence nearby, watching without any noise."},
          {title: "Hidden",text: "Behind the curtain, setting the stage for everyone."},
          {title: "Welcoming", text: "At the open counter, easing the load of passersby."},
          {title: "Steadfast", text: "A trusted guide at the helm, charting the open way."},
        ],
      },
    },
    {
      it: {
        prompt: "Quale approccio al lavoro ti somiglia di più?",
        options: [
          { title: "Meticoloso", text: "Torni e ritorni sul dettaglio finché non è perfetto."},
          {title: "Rituale", text: "Ripeti il gesto da principio, senza farlo mai uguale."},
          {title: "Riparatore", text: "Rendi viva e utile ogni cosa che sembrava perduta."},
          {title: "Intuitivo", text: "Cogli l'istante fuggente prima che svanisca l'incanto."},
        ],
      },
      en: {
        prompt: "Which approach to your work feels most like you?",
        options: [
          {title: "Meticulous", text: "Honing each single detail until it finally feels true."},
          {title: "Ritual", text: "Repeating the timeless gesture, never quite the same."},
          {title: "Restorative", text: "Bringing back to life what everyone thought was lost."},
          {title: "Intuitive", text: "Seizing the fleeting spark before the magic slips away."},
        ],
      },
    },
    {
      it: {
        prompt: "Che cosa ti fa dire che ne è valsa davvero la pena?",
        options: [
          {title: "La durata", text: "Aver creato dal nulla un'opera solida che rimarrà."},
          {title: "Il dono", text: "Sapere che il tuo gesto ha nutrito o aiutato qualcuno."},
          {title: "La fatica viva", text: "Sentire addosso il sole, il vento e la terra sincera."},
          {title: "La meraviglia", text: "Aver custodito un istante fragile di pura armonia."},
        ],
      },
      en: {
        prompt: "What makes you feel it was truly worth the effort?",
        options: [
          {title: "Endurance", text: "Shaping out of nothing a solid work that will last."},
          {title: "The gift", text: "Knowing your effort provided solace or food to someone."},
          {title: "Honest toil", text: "Feeling raw sunshine, brisk wind, and earth on you."},
          {title: "Wonder", text: "Holding together a fragile, fleeting breath of grace."},
        ],
      },
    },
  ],

  crafts: {
    liutaio: {
      it: {
        name: ["Liutaio"],
        description:
          "Tra il profumo di resine e legni pregiati, scolpisce e pialla con pazienza chirurgica le casse armoniche, accordando la materia per dare un’anima di suono agli strumenti a corda.",
        reveal:
          "Tra il profumo di resine e legni pregiati, le tue mani scolpiscono e piallano con pazienza chirurgica. Accordi la materia finché lo strumento trova un’anima di suono.",
        traits: ["Paziente", "Accurato", "Ascoltatore"],
      },
      en: {
        name: ["Luthier"],
        description:
          "Amid the scent of resins and fine woods, he carves and planes the bodies of instruments with surgical patience, tuning the material until it gives stringed instruments a soul of sound.",
        reveal:
          "Among the scent of resins and fine woods, your hands carve and plane with surgical patience. You tune the material until the instrument finds a soul of sound.",
        traits: ["Patient", "Precise", "Listener"],
      },
    },
    fornaio: {
      it: {
        name: ["Fornaio"],
        description:
          "Nel silenzio delle ore notturne, impasta acqua e farina trasformando il calore del forno in fragrante nutrimento che sveglia le città con il suo profumo dorato.",
        reveal:
          "Nel silenzio delle ore notturne impasti acqua e farina, e trasformi il calore in fragrante nutrimento. Con te la città si sveglia su un profumo dorato.",
        traits: ["Notturno", "Generoso", "Costante"],
      },
      en: {
        name: ["Baker"],
        description:
          "In the silence of the night hours, he works water and flour, turning the heat of the oven into fragrant nourishment that wakes the city with its golden scent.",
        reveal:
          "In the silence of the night hours you work water and flour, and turn heat into fragrant nourishment. With you, the city wakes to a golden scent.",
        traits: ["Nocturnal", "Generous", "Steady"],
      },
    },
    calzolaio: {
      it: {
        name: ["Calzolaio"],
        description:
          "Con le mani segnate dal cuoio e l’odore intenso del mastice, intaglia, cuce e risuola scarpe su misura, restituendo valore e cammino a calzature destinate a durare nel tempo.",
        reveal:
          "Con le mani segnate dal cuoio e l’odore del mastice, intagli, cuci e risuoli su misura. Restituisci cammino a scarpe destinate a durare nel tempo.",
        traits: ["Tenace", "Preciso", "Durevole"],
      },
      en: {
        name: ["Cobbler"],
        description:
          "With hands marked by leather and the sharp smell of cement, he cuts, stitches and resoles made-to-measure shoes, giving worth and a path back to footwear meant to last.",
        reveal:
          "With hands marked by leather and the smell of cement, you cut, stitch and resole to measure. You give the road back to shoes meant to last.",
        traits: ["Tenacious", "Precise", "Lasting"],
      },
    },
    sarta: {
      it: {
        name: ["Sarta"],
        description:
          "Tra spilli, gessetti e forbici affilate, trasforma semplici drappi di stoffa in abiti sartoriali, sagomando le forme con pieghe perfette e dettagli finemente ricamati a mano.",
        reveal:
          "Tra spilli, gessetti e forbici affilate trasformi un drappo in un abito su misura. Sagomi le forme con pieghe esatte e ricami che si vedono solo da vicino.",
        traits: ["Misurata", "Raffinata", "Attenta"],
      },
      en: {
        name: ["Seamstress"],
        description:
          "Among pins, chalk and sharp shears, she turns plain lengths of cloth into tailored clothes, shaping the form with perfect folds and details finely embroidered by hand.",
        reveal:
          "Among pins, chalk and sharp shears, you turn a length of cloth into a made-to-measure dress. You shape the form with exact folds and stitches seen only up close.",
        traits: ["Measured", "Refined", "Attentive"],
      },
    },
    vetraio: {
      it: {
        name: ["Mastro Vetraio"],
        description:
          "Nelle calde fornaci lagunari, con gesti antichi e sapienti, soffiano e modellano il vetro tramandando segreti inestimabili.",
        reveal:
          "Nelle calde fornaci, con gesti antichi e sapienti, soffi e modelli la materia incandescente. Tra le tue mani un segreto diventa luce e trasparenza.",
        traits: ["Ardente", "Sapiente", "Lieve"],
      },
      en: {
        name: ["Master glassblower"],
        description:
          "In the hot furnaces of the lagoon, with ancient, knowing gestures, they blow and shape the glass, passing on secrets beyond price.",
        reveal:
          "In the hot furnaces, with ancient, knowing gestures, you blow and shape the glowing matter. In your hands a secret becomes light and transparency.",
        traits: ["Fiery", "Knowing", "Light"],
      },
    },
    mietitura: {
      it: {
        name: ["Mietitura"],
        description:
          "Sotto il sole cocente dell’inizio estate, falcia a mano le spighe bionde nei campi, custodendo la memoria di un rito agricolo che da millenni garantisce il pane quotidiano.",
        reveal:
          "Sotto il sole cocente dell’inizio estate falci a mano le spighe bionde. Custodisci un rito agricolo che da millenni porta il pane sulla tavola.",
        traits: ["Solare", "Operoso", "Radicato"],
      },
      en: {
        name: ["Reaper"],
        description:
          "Under the scorching sun of early summer, he cuts the blond ears by hand in the fields, keeping the memory of a farming rite that for millennia has meant daily bread.",
        reveal:
          "Under the scorching sun of early summer you cut the blond ears by hand. You keep an agricultural rite that for millennia has brought bread to the table.",
        traits: ["Sunlit", "Hardworking", "Rooted"],
      },
    },
    ceramista: {
      it: {
        name: ["Ceramista"],
        description:
          "Modellando l’argilla viva sul tornio in rapida rotazione, crea forme armoniose e le dipinge con smalti iridescenti prima di consegnarle al fuoco della cottura.",
        reveal:
          "Sulla materia in rapida rotazione trovi forme armoniose, poi il colore, poi il fuoco. Ciò che esce dalle tue mani ha già il tempo dentro.",
        traits: ["Fluido", "Paziente", "Armonioso"],
      },
      en: {
        name: ["Potter"],
        description:
          "Shaping the living clay on the fast-turning wheel, he makes harmonious forms and paints them with iridescent glazes before giving them to the fire of the kiln.",
        reveal:
          "On the fast-turning wheel you find harmonious forms, then colour, then fire. What leaves your hands already holds time inside it.",
        traits: ["Fluid", "Patient", "Harmonious"],
      },
    },
    pescatore: {
      it: {
        name: ["Pescatore"],
        description:
          "Poco prima dell’alba, scioglie gli ormeggi e affronta il mare aperto, riparando le reti e interpretando le correnti per raccogliere i frutti preziosi dell’abisso.",
        reveal:
          "Poco prima dell’alba sciogli gli ormeggi e affronti il mare aperto. Ripari le reti, leggi le correnti e torni con ciò che l’abisso ha deciso di darti.",
        traits: ["Mattiniero", "Coraggioso", "Attento"],
      },
      en: {
        name: ["Fisherman"],
        description:
          "Just before dawn he casts off and faces the open sea, mending the nets and reading the currents to gather the precious fruits of the deep.",
        reveal:
          "Just before dawn you cast off and face the open sea. You mend the nets, read the currents, and return with what the deep has chosen to give.",
        traits: ["Early-rising", "Brave", "Attentive"],
      },
    },
    impagliatore: {
      it: {
        name: ["Impagliatore di sedie"],
        description:
          "Intrecciando con destrezza manuale canne di palude ed erbe palustri, ridona vita alle vecchie sedute creando trame robuste che profumano di tradizione contadina.",
        reveal:
          "Intrecci con destrezza canne di palude ed erbe palustri, e ridai vita alle vecchie sedute. Le tue trame sono robuste e profumano di tradizione contadina.",
        traits: ["Abile", "Paziente", "Custode"],
      },
      en: {
        name: ["Chair caner"],
        description:
          "Weaving marsh reeds and palustrine grasses by hand, he gives old seats their life back, making strong patterns that smell of country tradition.",
        reveal:
          "With sure hands you weave marsh reeds and palustrine grasses, and give old seats their life back. Your patterns are strong, and smell of country tradition.",
        traits: ["Skilled", "Patient", "Keeper"],
      },
    },
    arrotino: {
      it: {
        name: ["Arrotino"],
        description:
          "Spingendo il suo carretto e facendo girare la mola d’acqua, affila lame ed utensili tra scintille luminose, restituendo un taglio perfetto al lavoro quotidiano di cuochi e artigiani.",
        reveal:
          "Spingi il carretto e fai girare la mola. Tra scintille luminose restituisci il taglio a lame e utensili, e il lavoro di cuochi e artigiani ricomincia.",
        traits: ["Itinerante", "Preciso", "Sollecito"],
      },
      en: {
        name: ["Knife grinder"],
        description:
          "Pushing his cart and turning the water wheel, he sharpens blades and tools among bright sparks, giving a perfect edge back to the daily work of cooks and makers.",
        reveal:
          "You push the cart and turn the grinding wheel. Among bright sparks you give blades and tools their edge back, and the work of cooks and makers begins again.",
        traits: ["Itinerant", "Precise", "Ready"],
      },
    },
    proiezionista: {
      it: {
        name: ["Proiezionista"],
        description:
          "Nel buio suggestivo della cabina di regia, carica le pellicole e manovra la luce del proiettore, accendendo la magia delle storie sul grande schermo per un pubblico sognatore.",
        reveal:
          "Nel buio della cabina carichi le pellicole e governi la luce del proiettore. Per un pubblico che sogna, accendi la magia delle storie sul grande schermo.",
        traits: ["Riservato", "Sognatore", "Preciso"],
      },
      en: {
        name: ["Projectionist"],
        description:
          "In the suggestive dark of the projection booth, he loads the reels and works the projector’s light, striking the magic of stories onto the big screen for a dreaming audience.",
        reveal:
          "In the dark of the booth you load the reels and govern the projector’s light. For a dreaming audience, you strike the magic of stories onto the big screen.",
        traits: ["Private", "Dreamer", "Precise"],
      },
    },
    gondoliere: {
      it: {
        name: ["Gondoliere"],
        description:
          "Con il tipico remo unico e un equilibrio magistrale, guida il suo scafo nero tra i canali silenziosi, narrando ai passeggeri la storia millenaria della sua città sospesa sull’acqua.",
        reveal:
          "Con un solo remo e un equilibrio magistrale guidi lo scafo nero tra i canali silenziosi. A chi sale con te racconti una città sospesa sull’acqua.",
        traits: ["Equilibrato", "Narratore", "Fiero"],
      },
      en: {
        name: ["Gondolier"],
        description:
          "With the typical single oar and a masterful balance, he guides his black hull through the quiet canals, telling passengers the thousand-year story of his city suspended on the water.",
        reveal:
          "With a single oar and a masterful balance you guide the black hull through the quiet canals. To those who come aboard, you tell of a city suspended on the water.",
        traits: ["Balanced", "Storyteller", "Proud"],
      },
    },
  },
};
