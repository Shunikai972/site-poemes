/* ============================================================
   ASTRO LUCIFER — script.js (optimisé)
   ============================================================ */

// ─── DATA ────────────────────────────────────────────────────────────────────
const POEMS = [
  {id:'p1',title:"Jamais d'été",number:'I',color:'#00f5ff',gc:'gcyan',
   spine:'linear-gradient(180deg,#0a1a2e,#0d2d4a,#091a2e)',w:28,h:180,
   stanzas:[
    ["Jamais d'été dans ma vie, mais t'as ramené le soleil."],
    ["Tu as débarqué dans ma vie comme si ça avait toujours été ta place."],
    ["Tu as volé mon cœur dès le premier \"honey\", depuis ce jour, il ne cesse de battre pour toi, comme s'il avait trouvé sa raison d'être."],
    ["Tard le soir, j'me demande toujours si tu penses à moi, et j'me dis que dans tous les cas, moi, je pense à toi."],
    ["Il y a trop et pas assez à écrire, on est si loin, si proches, si près, si éloignés. Je veux te connaître, te faire sourire, te rendre heureuse, mais je me demande toujours si c'est ce que toi tu veux."],
    ["Il y en a qui se posent en victime alors qu'ils n'ont rien vécu. Moi, j'dis rien et je regarde ceux qui se vantent de leurs misères."],
    ["Mais sur ma peau, sous mes vêtements, dans mon âme, les marques du temps s'enlacent, chargées d'émotions, de douleurs qui s'entrelacent."],
    ["Un poème, 50 000 styles d'écriture, chacun reflétant une partie de moi, une partie de mon âme, fait de lettres que je t'offre en phrases coulant sous tes yeux."],
    ["En vrai, j'suis flatté et effrayé. Tu as vécu l'enfer dans les bras d'un toxico, et tu me fais confiance alors que l'on se connaît depuis si peu, depuis si longtemps."],
    ["Je suis flatté par ta présence et effrayé, effrayé à l'idée de fauter."],
    ["Je me stupidifie en me disant que singer la bêtise, c'est sûrement la plus haute forme d'intelligence, mais en soi, je veux juste ne plus me retrouver, mais c'est trop tard, je t'ai trouvé."],
    ["Il faudra bien que je te montre plus qui je suis à un moment ou à un autre."],
    ["Je t'aime, mais on est tous le démon de quelqu'un.","Et je refuse de devenir le tien."]
  ]},
  {id:'p2',title:'Sur le quai',number:'II',color:'#ff2d78',gc:'gpink',
   spine:'linear-gradient(180deg,#2e0a1a,#4a0d28,#2e091a)',w:22,h:164,
   stanzas:[
    ["Sur le quai d'une gare trop grise, je t'ai vu t'éloigner","Les adieux font des échos que même le temps peut pas noyer","J'écris ton absence entre deux lignes de ma paie","Le cœur en intérim, l'amour en CDI jamais signé"],
    ["J'parle au silence, il me répond avec ta voix","Double sens dans chaque phrase : partir pour mieux rester là","On s'est juré l'infini sur des bancs trop petits","Des rêves en solde, mais l'espoir hors de prix"],
    ["La nuit m'apprend que l'ombre aussi peut éclairer","J'compte les étoiles comme des dettes à régulariser"],
    ["J'ai le spleen élégant, costume de failles","Des vers en clair-obscur, des promesses en braille","Si le monde est un miroir, j'y vois nos fissures","Deux âmes en cavale, une seule signature"],
    ["Et si demain s'effondre sous le poids des saisons","Je garderai ton nom comme unique raison."],
    ["Les horloges faisaient semblant, le temps voulait me piéger","J'ai couru après les heures pour poursuivre ton parfum","J'ai laissé mes promesses dans le bruit des freins","J'me suis lancé dans une bataille que je pouvais pas gagner, y a des murs de pierre, des victoires amères"],
    ["Y a ton nom sur ma raison, y a ton parfum dans mon salon","Y a des victoires amères mais dans nos cœurs, ma défaite c'est notre maison"]
  ]},
  {id:'p3',title:"Et si j'me tais",number:'III',color:'#ffd700',gc:'ggold',
   spine:'linear-gradient(180deg,#1a1500,#2e2500,#1a1500)',w:32,h:190,
   stanzas:[
    ["Et si j'me tais parfois, c'est pas par lâcheté","C'est que certaines vérités demandent l'éternité","Sur le quai d'une gare trop grise, j'suis resté figé","À aimer ton absence comme une façon d'exister."]
  ]},
  {id:'p4',title:"La vie m'attriste",number:'IV',color:'#b44fff',gc:'gpurple',
   spine:'linear-gradient(180deg,#150a2e,#23104a,#150a2e)',w:25,h:160,
   stanzas:[
    ["La vie m'attriste, ton nom sur mes lèvres","Le compte et l'moral à zéro","Dans les coups durs comme dans l'biff, tout est négocié","J'm'en fous du paradis si t'es pas invitée"],
    ["On a partagé la dalle, j'te partagerai l'éternité","On a pas grandi comme des fous mais avec trop d'ambition","Demain on vise la lune, aujourd'hui on vise que l'addition","Pas besoin d'Se voir pour s'comprendre"],
    ["Chaton, s'il y a balle perdue, c'est moi qui vais la prendre","J't'ai embrassé puis j't'ai regardé t'éloigner"],
    ["Sur le quai d'une gare trop grise, je t'ai vu t'éloigner","Les adieux font des échos que même le temps peut pas noyer","J'nage sans les rames, j'suis perdu comme un sans-papiers","J'écris ton absence entre deux lignes de ma paie"],
    ["Le cœur en intérim pour ma peine, l'attachement en CDI jamais signé","J'parle au silence, il me répond avec ta voix","J'veux plus m'retourner, ça m'rappelle que t'es plus là","J't'ai juré que j'tiens à toi et qu't'en vaut la peine, j't'ai serrée contre moi pour te dire reste en vie"],
    ["Des rêves en solde mais l'espoir hors de prix","La nuit m'a appris que l'ombre aussi peut éclairer","J'compte les étoiles comme tes rires dans mon esprit qui continuent d'exister"],
    ["Si le monde se fracasse dans ses fissures","J'te garderai contre moi, deux âmes en cavale, une seule signature","Si demain tout tombe sous le poids des saisons","Je garderai ton nom comme seule direction"],
    ["Les horloges faisaient semblant, le temps voulait me piéger","J'ai couru après les heures pour poursuivre ton parfum","J'ai laissé mes promesses dans le bruit des freins","J'me suis lancé dans une bataille que je pouvais pas gagner, y a des murs de pierre, des victoires amères"],
    ["Y a ton nom sur ma raison, y a ton parfum dans mon salon","Y a des victoires amères mais dans nos cœurs, ma défaite c'est notre maison"]
  ]},
  {id:'p5',title:"J'ai du sang",number:'V',color:'#00ff96',gc:'ggreen',
   spine:'linear-gradient(180deg,#001a0f,#002d1a,#001a0f)',w:30,h:175,
   stanzas:[
    ["J'ai du sang dans l'crâne, la peine dans mes textes","J'me suis tranché les veines pour y verser d'l'espoir","Réfléchis pas si tu m'connais ou pas, chacun d'mes mots tourne dans l'cortex","La douleur soulève les voix, pourtant j'ai plus les mots"],
    ["J'passe le collier d'chanvre à mon cou","Dans l'antichambre, le médecin cherche mon pouls","J'ai des voix qui veulent pas s'taire dans ma tête depuis ti-peu","Rentre à l'intérieur, ici-bas il pleut des cordes"],
    ["J'me sens si seul depuis que Dieu a abandonné les hommes","Ou est-ce Dieu qui se sent seul quand il voit leurs haines sous perfusion lithium","Dieu qui se sent seul quand il voit qu'on l'oublie","Que vos prières sont vides et qu'les regards s'détournent de lui"],
    ["Tu croyais en sa parole, ou lui croyait-il en la tienne quand tu as juré d'aimer ton prochain ?","Ton serment s'est brisé, dans l'vent tu as juré après avoir rencontré ton premier pédé"],
    ["J'traîne mes démons en laisse mais ils tirent trop fort","Chaque nuit c'est la guerre, chaque rêve un champ d'morts","J'regarde le soleil se lever et tous les soirs j'me demande jusqu'à quand il va me regarder me coucher"],
    ["J'enchaîne liqueur sur liqueur pour faire assécher mes peurs","J'pleure de l'intérieur pour faire taire mes pleurs","J'suis un serpent au sang froid, pourtant j'suis toujours au-dessus de 15 degrés"],
    ["Tu peux pas ressentir la peine","Depuis ce jour j'suis plus le même"],
    ["J'ai le flacon, j'ai l'ivresse, j'ai la détresse, ma trinité est réunie, j'ai plus qu'à prier"]
  ]},
  {id:'p6',title:"L'univers sans étoiles",number:'VI',color:'#00f5ff',gc:'gcyan',
   spine:'linear-gradient(180deg,#041520,#071e2e,#041520)',w:28,h:170,
   stanzas:[
    ["L'univers sans étoiles serait morose","Soleil de mon infini, j'ai besoin de ma dose","De toi je veux être l'osmose","Étoile silencieuse au milieu du cosmos"],
    ["Cœur glacé, sol aride","Météore glacé, sang qui gicle sans s'épancher","Crime passionnel commis dans la Voie lactée"],
    ["Sans tes mots, je me perds. Parce que sans toi, mon âme est nue.","Fixe-moi et regarde dans mes yeux, nos étoiles seront gravées en lettres de feu"]
  ]},
  {id:'p7',title:"Des fois l'matin",number:'VII',color:'#ff2d78',gc:'gpink',
   spine:'linear-gradient(180deg,#200615,#34091e,#200615)',w:26,h:180,
   stanzas:[
    ["Des fois l'matin j'me lève et j'repense à toi, à elles, à ces moments éphémères","Des fois l'matin j'me lève et j'me dis qu'j'aurais souhaité jamais savoir dire « je t'aime »","Des fois j'me lève l'matin, j'repense à toutes les putains qu'j'ai vesk et à toutes celles qu'j'esquiverai jamais"],
    ["J'ai taffé pour venir te voir, t'as tué mes interrogations à coup d't'inquiète","Orelsan, il avait raison, la seule chose qui comptait, c'était ta quête"],
    ["Tellement d'nuits à polir ma pierre","À adresser mes prières à un être invisible qui m'répondra jamais"],
    ["J't'ai demandé si tu m'aimais, j'ai eu des milliers d'réponses mais jamais la seule que j'voulais"],
    ["J'ai gravé ton nom en lettres de sang sur mon cœur","Pour m'rappeler qu'c'est pas la faucheuse mais plutôt l'amour qui tue","Me reproche plus jamais d'pas arriver à l'heure"],
    ["Pour la prochaine salope qui viendra m'demander des fleurs, y aura un couteau sous les lèvres, tu"],
    ["T'as menti, tu m'as promis la lune","Histoire de jouir deux fois plutôt qu'une","T'as pris ma raison avec tes caresses enivrantes","Puis t'as disparu, la seule chose qui reste maintenant, c'est une douleur lancinante"],
    ["On m'a dit « aime ton prochain comme t'aimerais être aimé »","J'dois être un sacré fils de pute vu l'résultat","J'écris des paroles en r'pensant à toi","Pendant qu'tu t'tapes un autre gars"],
    ["J'aurais jamais dû croiser ta route","Mais les problèmes sont signés à mon nom","Contrat bien juteux qu'le diable m'a refourgué","Dans les p'tites lignes, y avait marqué « est parti pour une vie à s'faire baiser »"],
    ["Personne lira mes textes","Et si un jour ils percent, ça s'ra pas mérité","J'raconte ma vie et la tienne à travers des lettres","Tu m'colleras un procès pour manque de vérité"],
    ["Je sais pas parler, juste baiser","J'pense avec ma bite et mon cœur suit","J't'ai dit reste dans ma vie","T'as même pas écouté et tu m'as rejoint dans mon lit","J'suis qu'un cygne béni, on m'a donné le don d'écrire mais on m'a volé mes ailes et on a tué ma voix"],
    ["Des jours à paniquer et encore plus à niquer","On s'est suicidés sans s'regarder, je t'ai étouffée avec mon cœur","À croire que s'aimer sans se suivre et sans censure les espoirs, mais les jours ont glissé et je t'ai pas rattrapée"],
    ["Amour aux couleurs de la mort qui sépare les gens et ne les réunit plus jamais","J'voulais que ça s'arrête mais sans que ça cesse, qu'on puisse exister et plus s'lâcher","Que j'aie enfin le droit d'aimer"]
  ]},
  {id:'p8',title:'Âme étoilée',number:'VIII',color:'#ffd700',gc:'ggold',
   spine:'linear-gradient(180deg,#1e1400,#2e2000,#1e1400)',w:24,h:175,
   stanzas:[
    ["Y a une âme pour 100 humains, les autres en sont dépourvus","3 coups et il en sort plus rien, d'ici demain elle sera perdue"],
    ["Cheveux couleur or et âme couleur lumière.","Dans les champs de la mélancolie, elle se noie.","Elle sauve les autres et ne se sauve pas."],
    ["Seule sur la piste, elle dansait.","Seule sous l'eau, elle étouffait.","Les saints n'étaient plus tous au ciel depuis qu'elle est descendue sur terre."],
    ["Bonté sans nom sur sa langue et douceur sur ses traits.","Elle se noie sous les fautes de ceux qu'elle a sauvés.","Elle aide les gens, mais personne ne l'a aidée, ils la regardent couler."],
    ["Je t'ai vue, je t'ai reconnue, prêtresse de lumière ayant égayé mes nuits sombres.","Je t'ai tendu la main et je t'ai hissée hors de l'eau.","Un autre t'a reconnue, et il t'a secourue."],
    ["Un autre s'est joint et foule nous fûmes.","La bonté ne s'acquiert pas, elle est innée.","Mais il ne faut jamais cesser de la partager."],
    ["L'air vivace s'engouffra dans ses poumons.","L'ange était sauvé."]
  ]},
  {id:'p9',title:"Au milieu d'une app",number:'IX',color:'#b44fff',gc:'gpurple',
   spine:'linear-gradient(180deg,#10062a,#1a0c42,#10062a)',w:27,h:172,
   stanzas:[
    ["Au milieu d'une app de merde, j'me suis fait des amis","Embrouilles et problèmes s'ont rejoints","Ils ont balayé mes dernières réticences à tirer sur un joint","C'est plus qu'une descente en enfer"],
    ["J'ai l'cerveau qui fond, j'vais pas tarder à tirer sur la médicinale","J'vais pas tarder à tirer un trait sur ma vie et à me lancer dans un commerce bancal"],
    ["Boule de stress dans l'ventre","Balle de plomb dans l'chargeur","C'est celle qui mettra fin à mes jours"],
    ["Sous l'feu des kalash, y en a qui tombent","Sous les coups de mes pensées, je crie","J'dois être malade ou pas complètement conscient"],
    ["Y avait un fou en face de moi, j'l'ai pris pour mon frère","Double meurtre plus tard, j'sais toujours pas c'que j'dois faire","J'ose plus m'regarder dans un miroir","Même mon reflet est plus beau qu'oim"]
  ]},
  {id:'p10',title:"Des fois l'matin (II)",number:'X',color:'#00ff96',gc:'ggreen',
   spine:'linear-gradient(180deg,#001810,#00281a,#001810)',w:23,h:178,
   stanzas:[
    ["Des fois l'matin j'me lève et j'repense à toi, à elles, à ces moments éphémères","Des fois l'matin j'me lève et j'me dis qu'j'aurais souhaité jamais savoir dire « je t'aime »","Des fois j'me lève l'matin, j'repense à toutes les putains qu'j'ai vesk et à toutes celles qu'j'esquiverai jamais"],
    ["J'ai taffé pour venir te voir, t'as tué mes interrogations à coup d't'inquiète","Orelsan, il avait raison, la seule chose qui comptait, c'était ta quête"],
    ["Tellement d'nuits à polir ma pierre","À adresser mes prières à un être invisible qui m'répondra jamais"],
    ["J't'ai demandé si tu m'aimais, j'ai eu des milliers d'réponses mais jamais la seule que j'voulais"],
    ["J'ai gravé ton nom en lettres de sang sur mon cœur","Pour m'rappeler qu'c'est pas la faucheuse mais plutôt l'amour qui tue","Me reproche plus jamais d'pas arriver à l'heure"],
    ["Pour la prochaine salope qui viendra m'demander des fleurs, y aura un couteau sous les lèvres, tu"],
    ["T'as menti, tu m'as promis la lune","Histoire de jouir deux fois plutôt qu'une","T'as pris ma raison avec tes caresses enivrantes","Puis t'as disparu, la seule chose qui reste maintenant, c'est une douleur lancinante"],
    ["On m'a dit « aime ton prochain comme t'aimerais être aimé »","J'dois être un sacré fils de pute vu l'résultat","J'écris des paroles en r'pensant à toi","Pendant qu'tu t'tapes un autre gars"],
    ["J'aurais jamais dû croiser ta route","Mais les problèmes sont signés à mon nom","Contrat bien juteux qu'le diable m'a refourgué","Dans les p'tites lignes, y avait marqué « est parti pour une vie à s'faire baiser »"],
    ["Personne lira mes textes","Et si un jour ils percent, ça s'ra pas mérité","J'raconte ma vie et la tienne à travers des lettres","Tu m'colleras un procès pour manque de vérité"],
    ["Je sais pas parler, juste baiser","J'pense avec ma bite et mon cœur suit","J't'ai dit reste dans ma vie","T'as même pas écouté et tu m'as rejoint dans mon lit"]
  ]},
  {id:'p11',title:'Nuit blanche',number:'XI',color:'#00f5ff',gc:'gcyan',
   spine:'linear-gradient(180deg,#041520,#071e2e,#041520)',w:28,h:168,
   stanzas:[
    ["Nuit blanche, jours noirs, ton ombre me poursuit à travers ma vie","Je ferme les yeux, ta tête imprimée à l'encre noire sur mes pupilles","J'inspire, j'expire, tu refuses de sortir de moi"],
    ["Si loin, si proche, j'ai essayé de te rattraper, tu t'enfuyais","Le jour, la nuit, la lune et le soleil","On se poursuivait dans une course effrénée, j'attendais mon éclipse pour te retrouver"],
    ["Rien à foutre de tes tunes et de tes courbes, c'est ton sourire qui me fait vriller"],
    ["Nuit blanche, jours noirs, j'ai passé des mois sous la pluie, j'attends mon soleil"]
  ]},
  {id:'p12',title:'Le champ de rose',number:'XII',color:'#ff2d78',gc:'gpink',
   spine:'linear-gradient(180deg,#200615,#34091e,#200615)',w:26,h:188,
   stanzas:[
    ["Dans le pré de roses près de la colline, il tousse et pense à sa belle.","Couleur ocre des fleurs qui poussent en rimbambelle,","Sous la lumière dorée de l'aube naissante,"],
    ["Il repense à elle, aux bourgeons sur son corps qui la rendent honteuse. Hors du commun et si loin de ses envies,","Elle s'enfuit là où les regards ne seront plus des défis.","Son charme, c'est d'être elle."],
    ["Il ferme les yeux, se laisse aller, son cœur ralentit et s'apaise.","Dans le miroir de ses yeux, son reflet."],
    ["Dégoûtée des hommes qui ne s'intéressaient qu'à ses formes,","Il a été séduit par son sourire et le revoit dans ses souvenirs qui s'écornent.","Ils disaient l'aimer pour qui elle était, mais ne voulaient que son corps."],
    ["Pourtant, ce qu'il voyait, c'était ses yeux, sa moue boudeuse et la beauté de son âme, qui resplendissait bien plus fort."],
    ["Loin des salles de cours, de leurs lampes halogènes,","Il aurait dû l'appeler et lui dire 'Allô j't'aime'.","Dans un dernier souffle, il murmure son nom tandis que le poignard qui traverse ses côtes finit de teindre les roses,","Blanches."]
  ]},
  {id:'p13',title:"Le port d'Olonne",number:'XIII',color:'#ffd700',gc:'ggold',
   spine:'linear-gradient(180deg,#1e1400,#2e2000,#1e1400)',w:24,h:176,
   stanzas:[
    ["Sur le quai du port d'Olonne, les pieds dans le sable chaud, elle s'abandonne à la douleur","Vivant un rêve-cauchemar éveillée, elle ne songe plus qu'à se noyer, la pauvre enfant"],
    ["Cheveux et coupures couleur soleil couchant","Elle porte sur son cou le collier invisible de la violence"],
    ["Remords d'avoir choisi ses habits pour vivre sa vie","Elle pense avoir provoqué la colère des bêtes à visage d'homme","Elle les choisira désormais pour fuir leur barbarie"],
    ["Traumatisme à la couleur de l'hymen sur le sable d'Olonne","Ses larmes salées rejoignent l'immensité de la mer"]
  ]},
  {id:'p14',title:'Cha',number:'XIV',color:'#b44fff',gc:'gpurple',
   spine:'linear-gradient(180deg,#10062a,#1a0c42,#10062a)',w:27,h:145,
   stanzas:[
    ["Fourrure dans la nuit,","Griffes et crocs","Mort sauvage"]
  ]},
  {id:'p15',title:"Brise-moi l'cœur",number:'XV',color:'#00ff96',gc:'ggreen',
   spine:'linear-gradient(180deg,#001810,#00281a,#001810)',w:23,h:185,
   stanzas:[
    ["Brise-moi l'cœur une fois de plus, je dirai rien","Prends-le, détruis-le, dans tous les cas il t'appartient"],
    ["Plus je t'aime, plus tu t'éloignes","Un peu comme un cancer dans tes sentiments"],
    ["Je t'ai tellement dit que j'étais désolé que tu sais plus ce que ça veut dire"],
    ["Au fond du fond, on s'retrouvera, car même si parfois tu m'fais chialer, t'es la seule qui me donne envie d'Sourire","J'ai tellement voulu être le bon qu'j'suis devenu le pire"],
    ["T'as caché le verre dans ton cœur et tu m'as dit d't'oublier","Comment j'pourrais t'sortir d'ma tête si tu y retournes dès qu'j'ai le dos tourné","Plus j't'aime, plus j'me déteste","Plus j'te le dis, plus j'le réalise"],
    ["Quoi que j'fasse, plus je t'aime, plus je t'aime mal"],
    ["Mes démons ont pris mes pensées en otage","Je hais ces blessures qu'ils t'ont infligées et qui traverseront les âges","J'ai jamais voulu t'emprisonner","Le plus beau chez la colombe, c'est sa liberté"]
  ]},
  {id:'p16',title:"J'lâche pas la plume",number:'XVI',color:'#00f5ff',gc:'gcyan',
   spine:'linear-gradient(180deg,#041520,#071e2e,#041520)',w:28,h:210,
   stanzas:[
    ["J'lâche pas la plume, ma main s'crispe","J'lâche mes as, j'veux parler à l'âme d'ma dame de cœur","Qu'ça soit dans la vie ou quand on joue aux échecs, c'est toi ma reine","J'sais pas trop comment t'le dire, j'préfère te l'faire ressentir"],
    ["Une ligne et une autre se tracent","Une lettre puis une autre qui prend sa place","Vérité criante, écho du passé rémanent"],
    ["C'était pas une journée différente, elle commençait presque normalement","Un type sympa, attentionné et marrant","C'était même pas commencé, entre nous c'était terminé, tu lui as fait comprendre mais il comprend pas"],
    ["Le regard presque dérangé, de celui qui dicte sa loi","Une main qui frôle un visage de faux","Un regard qui pèse, le silence trop tôt"],
    ["J'crie mais la ville me musèle, les passants complices qui ignorent c'qui s'passe dans les ruelles","J'essaie de crier mais l'air est lourd, mes paupières collées, le monde est sourd"],
    ["Il t'a mise dans de beaux draps, mais c'était pas qu'pour les problèmes","Une fois sa besogne finie, dans le creux de la nuit, il m'a murmuré \"Je t'aime\""],
    ["J'écris sale, pour tout nettoyer","J'préfère te sortir de tes tourments en torrent avant qu'ils finissent par te noyer","Quand j'suis distant, c'est car j'ai peur de moi-même"],
    ["C'est toi le maître du jeu, tu dictes les règles et j'les suis","Dans son esprit et dans l'réel, jolie princesse est sur bateau pirate, déjà seule contre la houle, elle disparaît dans la foule"],
    ["On s'engueule, on s'prend la tête, je te déteste tellement je t'aime","Frérot, l'amour c'est trop compliqué, c'que j'trouve simple tu le vois pas, de toi j'peux plus m'passer, plus que tout j'me hais de t'faire tant d'peine"],
    ["Comme l'autre l'a dit, moi je t'aime comme tu es","Tes manières peuvent me tuer","Ta voix m'assassiner","Tes charmes me torturer","Ton amour me ressusciter"],
    ["La vie est courte, donc cesse d'être triste","J'passerai l'permis pour venir te voir et t'emmener voyager","Même s'il est plus dans ta vie, ce fils de p... continue d'te la pourrir","J'te sauverai de tes ténèbres, dût-je en mourir"],
    ["J'ai les mots qui coulent comme mes larmes quand j'pense à ta douleur","J'te parlerai jusqu'à pas d'heure","Une main pour caresser ton cou, l'autre dans la tienne"],
    ["J'te l'redirai encore et encore, y a que toi qui vaut l'coup","Rien à foutre des clés de la ville, j'veux juste celle de ton cœur","T'es exceptionnelle car t'es toi","T'es formidable parce que... (idée : ma vie c'est toi)"],
    ["J'sais pas combien de fois t'as voulu t'foutre en l'air,","C'est pas être médiocre de pas l'avoir fait"],
    ["C'est être plus forte que tous ces démons qui t'prennent la tête."],
    ["J'sais qu'parfois t'aimerais juste disparaître,","Loin des cris, loin des ombres qui t'répètent","Qu't'es pas assez, qu't'es qu'un fantôme","Mais moi j'te vois en couleurs, j'te peins en or, en chrome."],
    ["J'suis loin d'être génial, juste amoureux","La nuit est longue mais l'aube arrive,","Et si t'as plus d'forces, j'te prête mes rives,","J'te porterai comme la mer berce la lune,"],
    ["C'est même pas vrai quand j'te dis \"je te déteste tellement je t'aime\",","T'es mon paradis, t'es celle qui coule dans mes veines"],
    ["Jolie princesse est sur bateau pirate,","Attache-toi à moi quand j'm'attache à toi","J'suis pas comme celui qui m'a précédé, j'veux pas qu'le temps nous sépare, qu'il efface ta voix."],
    ["Jolie princesse est sur bateau pirate,","J'espère qu'elle a trouvé son capitaine et qu'elle le laisse la libérer de ses chaînes."]
  ]},
  {id:'p17',title:'Y a tes griffures',number:'XVII',color:'#ff2d78',gc:'gpink',
   spine:'linear-gradient(180deg,#200615,#34091e,#200615)',w:26,h:172,
   stanzas:[
    ["Y a tes griffures sur ma peau et ton nom dans ma tête","J't'ai vue arriver, j'étais tellement perdu que j'ai failli te louper"],
    ["J'veux que tu sortes de ma vie mais mon cœur veut que tu restes mh","J't'ai fait du mal et t'as pleuré jusqu'à minuit","Toi aussi tu m'en as fait mais j'te l'ai pas dit"],
    ["J'imagine encore que tu reviendras demain","Domination au goût d'sang, sur l'moment ça m'plaît, j't'ai dit d'arrêter mais c'est moi qui m'suis figé"],
    ["J'attrape tes lèvres avant de sauter","Essayez pas d'm'aider, y a plus que la terre qui peut me porter","T'es plus qu'un souv'nir au loin dans mes études"],
    ["J'veux plus penser, mon cœur est entouré de barbelés","J'arrive plus à respirer, j'ai pas peur de la mort mais j'tremble à l'idée d'aimer"]
  ]},
  {id:'p18',title:'Une ligne et une autre',number:'XVIII',color:'#ffd700',gc:'ggold',
   spine:'linear-gradient(180deg,#1e1400,#2e2000,#1e1400)',w:24,h:200,
   stanzas:[
    ["Une ligne et une autre se tracent.","Une lettre puis une autre qui prend sa place.","Vérité criante, écho du passé rémanent."],
    ["C'était pas une journée différente, elle commençait presque normalement.","Un type sympa, attentionné et marrant.","J'enchaîne les bouteilles, et mes traumas se déchaînent."],
    ["Je l'revois faire le beau parleur, maman m'avait dit que c'était pas les yeux des garçons qu'il fallait scruter, mais leurs cœurs.","La pointe de ma plume continue son chemin, j'écris mon histoire."],
    ["C'était même pas un coup d'un soir, j'lui ai fait comprendre, mais il ne comprenait pas.","Le regard presque dérangé, de celui qui dicte sa loi.","Une main qui frôle, un visage de faux."],
    ["Un regard qui pèse, le silence trop tôt.","J'crie, mais la ville me musèle, les passants complices qui ignorent ce qui s'passe dans les ruelles.","J'essaie de m'échapper, mais l'air est lourd, mes paupières collées, le monde est sourd."],
    ["Une fois sa besogne finie, dans le creux de la nuit, il m'a murmuré \"Je t'aime\".","Sous l'aube naissante, ces mots qui coulent comme des larmes.","Mon corps blessé sous les coups de sa lame."],
    ["Comme un voleur, il m'a tout pris.","Comme un violeur, il s'est enfui.","Titubante et détruite, j'suis allée voir les officiers."],
    ["Avant qu'j'aie fini de parler, un des mecs m'a dit \"plainte classée\".","Il y a quelques mois, je dansais sur la piste.","Et bientôt, des avis de décès, j'me fondrai dans les listes."],
    ["Mon histoire presque terminée, j'lâche ma plume de métal teintée vermeil, d'ma peau le sang émerge.","D'mes poignets, les rubis coulent et viennent tacher le sol encore vierge."]
  ]},
  {id:'p19',title:"J'écris pour une fille",number:'XIX',color:'#b44fff',gc:'gpurple',
   spine:'linear-gradient(180deg,#10062a,#1a0c42,#10062a)',w:27,h:190,
   stanzas:[
    ["J'écris pour une fille qu'au fond j'connais pas","Pour une fille qui pour son ego s'soumet pas","J'ai brisé ma plume, fumé ma thune","Pour écouter ma peine, y restera que la lune"],
    ["Dans 2 ou 3 instants, plus rien m'empêchera d'profiter du bon moment","Originaire de partout, venant de nulle part, j'suis un citoyen du monde"],
    ["D'mon côté d'la terre, j'regarde les étoiles fendre l'horizon","D'l'autre côté d'la terre, c'est des bombes","Nuage gris, cendre"],
    ["Tout c'qui nous reste quand on a plus rien, c'est l'envie d'prendre","Tout c'qui nous reste quand on a plus rien, c'est l'envie d'Se pendre"],
    ["On s'ressent plus, on s'ment presque","Des litres d'alcool, c'est tout c'qui nous reste","Un prof qui dit d'la merde comme un con, j'surlignais au stabilo","Sous l'faux sourire d'mon quotidien, c'est l'bourreau"],
    ["On m'a dit un soir que j'étais devenu mature","J'suis toujours l'même con indécis, on change pas sa nature"],
    ["Quand j'regarde les étoiles, c'est toi que j'vois","Pareil"]
  ]}
];

const SHELVES = [
  {label:'Amours & Promesses', poems:[0,1,2,3,4,5]},
  {label:'Nuit & Rêves',       poems:[6,7,8,9,10,11]},
  {label:'Souffrance & Révolte',poems:[12,13,14,15,16,17,18]}
];

const FLOAT_VERSES = [
  {t:"Je est un autre",a:"Rimbaud",c:'#00f5ff'},
  {t:"Ma Bohème — Ô là là ! que d'amours splendides j'ai rêvées !",a:"Rimbaud",c:'#b44fff'},
  {t:"Ô saisons, ô châteaux !",a:"Rimbaud",c:'#ff2d78'},
  {t:"Il faut être absolument moderne.",a:"Rimbaud",c:'#00ff96'},
  {t:"Le Bateau ivre — Comme je descendais des Fleuves impassibles",a:"Rimbaud",c:'#00f5ff'},
  {t:"Hypocrite lecteur, — mon semblable, — mon frère !",a:"Baudelaire",c:'#ffd700'},
  {t:"Ô Mort, vieux capitaine, il est temps ! levons l'ancre !",a:"Baudelaire",c:'#ff2d78'},
  {t:"Là, tout n'est qu'ordre et beauté, luxe, calme et volupté.",a:"Baudelaire",c:'#b44fff'},
  {t:"Je suis la plaie et le couteau !",a:"Baudelaire",c:'#00f5ff'},
  {t:"Enivrez-vous sans cesse ! De vin, de poésie ou de vertu.",a:"Baudelaire",c:'#ffd700'},
  {t:"Sous le Pont Mirabeau coule la Seine",a:"Apollinaire",c:'#00ff96'},
  {t:"Vienne la nuit sonne l'heure / Les jours s'en vont je demeure",a:"Apollinaire",c:'#00f5ff'},
  {t:"Le monde entier est en fête — et je reste seul",a:"Apollinaire",c:'#ff2d78'},
  {t:"Il pleure dans mon cœur / Comme il pleut sur la ville",a:"Verlaine",c:'#b44fff'},
  {t:"Et tout le reste est littérature.",a:"Verlaine",c:'#ffd700'},
  {t:"Les sanglots longs / Des violons / De l'automne",a:"Verlaine",c:'#00f5ff'},
  {t:"Barbara — Rappelle-toi Barbara",a:"Prévert",c:'#ff2d78'},
  {t:"Il ne faut pas laisser les intellectuels jouer avec les allumettes.",a:"Prévert",c:'#00ff96'},
  {t:"Déjeuner du matin — Il a mis le café / Dans la tasse",a:"Prévert",c:'#ffd700'},
  {t:"Cueillez dès aujourd'hui les roses de la vie.",a:"Ronsard",c:'#b44fff'},
  {t:"Mignonne, allons voir si la rose…",a:"Ronsard",c:'#00f5ff'},
  {t:"Un coup de dés jamais n'abolira le hasard",a:"Mallarmé",c:'#ff2d78'},
  {t:"La chair est triste, hélas ! et j'ai lu tous les livres.",a:"Mallarmé",c:'#ffd700'},
  {t:"La terre est bleue comme une orange.",a:"Éluard",c:'#00ff96'},
  {t:"Liberté, j'écris ton nom.",a:"Éluard",c:'#00f5ff'},
  {t:"Waterloo ! Waterloo ! Waterloo ! morne plaine !",a:"Hugo",c:'#b44fff'},
  {t:"Demain dès l'aube, à l'heure où blanchit la campagne…",a:"Hugo",c:'#ff2d78'},
  {t:"Pourquoi mon âme est-elle triste ?",a:"Lamartine",c:'#00f5ff'},
  {t:"Genevois, rive chère à mon cœur",a:"Lamartine",c:'#b44fff'},
  {t:"Les prés verts encore éternels",a:"Lamartine",c:'#ff2d78'},
  {t:"Je suis le ténébreux, — le veuf, — l'inconsolé",a:"Nerval",c:'#ffd700'},
  {t:"Le rêve est une seconde vie.",a:"Nerval",c:'#00ff96'},
  {t:"Et la fleur que j'aime s'appelle la mélancolie.",a:"Nerval",c:'#00f5ff'},
  {t:"Qu'il est doux le fardeau d'une âme bien née !",a:"Musset",c:'#b44fff'},
  {t:"On ne badine pas avec l'amour.",a:"Musset",c:'#ff2d78'},
  {t:"La vie est courte. Si tu doutes de moi, vivons du moins bien.",a:"Musset",c:'#ffd700'},
  {t:"Vois-tu cette forteresse ravissante",a:"Baudelaire",c:'#00f5ff'},
  {t:"Tu m'as donné ta boue et j'en ai fait de l'or.",a:"Baudelaire",c:'#b44fff'},
  {t:"O que ma quille éclate ! O que j'aille à la mer !",a:"Rimbaud",c:'#ff2d78'},
  {t:"Je trouverai peut-être le cœur qui veut m'aimer.",a:"Rimbaud",c:'#ffd700'},
  {t:"La nuit s'étend comme une main de camarade",a:"Apollinaire",c:'#00ff96'},
  {t:"Ne sois jamais satisfait. C'est comme cela qu'on progresse.",a:"Colette",c:'#b44fff'},
  {t:"Je suis impatient du monde.",a:"Char",c:'#ff2d78'},
  {t:"L'érotisme, c'est l'approbation de la vie jusque dans la mort.",a:"Bataille",c:'#ffd700'},
  {t:"L'oubli est un brin de paille dans le vent.",a:"Reverdy",c:'#00f5ff'},
  {t:"La beauté sera CONVULSIVE ou ne sera pas.",a:"Breton",c:'#b44fff'},
  {t:"O mois des fleurs, mois des métamorphoses",a:"Aragon",c:'#ff2d78'},
  {t:"Je vous écris d'un pays lointain.",a:"Michaux",c:'#ffd700'},
  {t:"Un être qui regarde a l'air plus vivant.",a:"Supervielle",c:'#00ff96'},
  {t:"Je puis dire, quelquefois, un tas de choses sur les différentes sortes de cailloux.",a:"Ponge",c:'#00f5ff'},
  {t:"La vie est une lutte contre les forces qui nous conduisent au repos.",a:"Valéry",c:'#b44fff'},
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let mX = innerWidth/2, mY = innerHeight/2;
let cX = mX, cY = mY, rX = mX, rY = mY;
let activePoem = null;
let currentTipTarget = null;

const $cur     = document.getElementById('cur');
const $ring    = document.getElementById('cur-ring');
const $bookTip = document.getElementById('book-tip');

// ─── MOUSE ───────────────────────────────────────────────────────────────────
document.addEventListener('mousemove', e => { mX = e.clientX; mY = e.clientY; }, {passive:true});

// ─── SINGLE MASTER rAF LOOP ───────────────────────────────────────────────────
// cursor lerp + particles — nothing else runs its own rAF on the main page
let _particleTick = null;

(function masterLoop() {
  requestAnimationFrame(masterLoop);

  // Cursor (transform only — no layout thrash)
  cX += (mX - cX) * .18; cY += (mY - cY) * .18;
  rX += (mX - rX) * .09; rY += (mY - rY) * .09;
  $cur.style.transform  = `translate(${cX|0}px,${cY|0}px)`;
  $ring.style.transform = `translate(${rX|0}px,${rY|0}px)`;

  if (_particleTick) _particleTick();
})();

function hov(on) { document.body.classList.toggle('hov', on); }

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function initParticles() {
  const cv  = document.getElementById('pc');
  const ctx = cv.getContext('2d');
  const COLS = ['#00f5ff','#ff2d78','#b44fff','#ffd700','#00ff96'];

  function resize() { cv.width = innerWidth; cv.height = innerHeight; }
  resize();
  let _rt; window.addEventListener('resize', () => { clearTimeout(_rt); _rt = setTimeout(resize, 200); }, {passive:true});

  // 40 particles (was 80)
  const N = 40;
  const pts = Array.from({length: N}, () => ({
    x: Math.random() * cv.width,  y: Math.random() * cv.height,
    vx: (Math.random()-.5)*.25,   vy: (Math.random()-.5)*.25,
    r:  Math.random()*1.1+.2,
    c:  COLS[Math.floor(Math.random()*COLS.length)],
    a:  Math.random()*.35+.07,
    ph: Math.random()*Math.PI*2,
    ps: Math.random()*.012+.003
  }));

  const D2 = 80*80; // connection threshold² (skip sqrt in hot path)

  _particleTick = () => {
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);

    // Draw particles
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      p.ph += p.ps;
      const al = p.a * (.5 + .5 * Math.sin(p.ph));

      ctx.globalAlpha = al;
      ctx.shadowColor = p.c; ctx.shadowBlur = 7;
      ctx.fillStyle   = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();

      // Mouse repel only when library visible
      if (!activePoem) {
        const dx = mX-p.x, dy = mY-p.y, d2 = dx*dx+dy*dy;
        if (d2 < 14400) { const d = Math.sqrt(d2); p.vx += dx/d*.005; p.vy += dy/d*.005; }
      }
      p.vx *= .993; p.vy *= .993;
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
    }

    // Connections (n=40 → 780 pairs, cheap d² filter)
    ctx.shadowBlur = 0; ctx.lineWidth = .35;
    for (let i = 0; i < N-1; i++) {
      for (let j = i+1; j < N; j++) {
        const dx = pts[i].x-pts[j].x, dy = pts[i].y-pts[j].y;
        const d2 = dx*dx+dy*dy;
        if (d2 < D2) {
          ctx.globalAlpha = (1 - Math.sqrt(d2)/80) * .05;
          ctx.strokeStyle = pts[i].c;
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
  };
}

// ─── FLOATING VERSES ─────────────────────────────────────────────────────────
// Pure CSS animation — no JS collision, no activeVerses array
function initFloatingVerses() {
  const cont = document.getElementById('floating-verses');

  function spawn() {
    const v   = FLOAT_VERSES[Math.floor(Math.random() * FLOAT_VERSES.length)];
    const el  = document.createElement('div');
    el.className = 'fv';
    const sx  = 4 + Math.random()*88,  sy  = 8 + Math.random()*78;
    const tx  = (Math.random()-.5)*140, ty = (Math.random()-.5)*90;
    const rot = (Math.random()-.5)*6;
    const dur = 18 + Math.random()*20;
    const mop = .25 + Math.random()*.22;
    const fs  = 11 + Math.random()*5;

    el.style.cssText = `left:${sx}%;top:${sy}%;color:${v.c};--rot:${rot}deg;--tx:${tx}px;--ty:${ty}px;--max-op:${mop};animation-duration:${dur}s;text-shadow:0 0 14px ${v.c},0 0 36px ${v.c}55;font-size:${fs}px;`;

    const auth = document.createElement('span');
    auth.style.cssText = `display:block;font-family:'Space Mono',monospace;font-style:normal;font-size:.55em;letter-spacing:.3em;opacity:.6;margin-top:3px;color:${v.c};`;
    auth.textContent = '— ' + v.a;
    el.textContent = v.t;
    el.appendChild(auth);
    cont.appendChild(el);

    setTimeout(() => el.parentNode && el.parentNode.removeChild(el), (dur + 2) * 1000);
  }

  // 10 staggered initially (was 51 all at once)
  for (let i = 0; i < 10; i++) setTimeout(spawn, i * 1800);
  setInterval(spawn, 4000); // slower spawn rate
}

// ─── LIBRARY BUILD ────────────────────────────────────────────────────────────
function buildLibrary() {
  const lib  = document.getElementById('lib');
  const frag = document.createDocumentFragment();

  SHELVES.forEach((sh, si) => {
    const shelf = document.createElement('div');
    shelf.className = 'shelf';
    shelf.style.cssText = `opacity:0;transform:translateY(30px);transition:opacity .85s ${si*.25+.3}s,transform .85s ${si*.25+.3}s`;

    const lbl = document.createElement('div');
    lbl.className = 'slbl';
    lbl.textContent = sh.label;

    const row = document.createElement('div');
    row.className = 'sbooks';

    sh.poems.forEach((pi, bi) => {
      row.appendChild(makeBook(POEMS[pi]));
      if (bi === 0 || bi === 2) row.appendChild(makeDecor());
    });

    const plank = document.createElement('div');
    plank.className = 'splank';
    shelf.append(lbl, row, plank);
    frag.appendChild(shelf);
  });

  lib.appendChild(frag);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    lib.querySelectorAll('.shelf').forEach(s => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; });
  }));
}

// ─── BOOK TIP ─────────────────────────────────────────────────────────────────
function _tipPos(book) {
  const r = book.getBoundingClientRect();
  const W = innerWidth, tipW = 170, tipH = 96, gap = 14, pad = 12;
  let left = Math.max(pad, Math.min(r.left, W - pad - tipW));
  let top  = Math.max(pad, r.top - tipH - gap);
  $bookTip.style.transform = `translate(${left|0}px,${top|0}px)`;
}

function showBookTip(book, poem) {
  $bookTip.style.setProperty('--bc', poem.color);
  $bookTip.innerHTML = `<span class="bc-num">Poème ${poem.number}</span><span class="bc-title">${poem.title}</span><span class="bc-hint"><span class="bc-dot"></span>Cliquer pour lire</span>`;
  currentTipTarget = book;
  _tipPos(book);
  requestAnimationFrame(() => $bookTip.classList.add('visible'));
}
function hideBookTip() { $bookTip.classList.remove('visible'); currentTipTarget = null; }

// ─── BOOK ELEMENT ─────────────────────────────────────────────────────────────
function makeBook(poem) {
  const book  = document.createElement('div');
  book.className = `book ${poem.gc}`;

  const spine = document.createElement('div');
  spine.className = 'bspine';
  spine.style.cssText = `width:${poem.w}px;height:${poem.h}px;background:${poem.spine};box-shadow:inset -3px 0 7px rgba(0,0,0,.45),inset 1px 0 2px rgba(255,255,255,.04),inset 0 0 0 1px rgba(255,255,255,.025)`;

  const s1 = document.createElement('div');
  s1.style.cssText = `position:absolute;top:0;left:0;right:0;height:4px;background:${poem.color};opacity:.7;box-shadow:0 0 10px ${poem.color},0 0 20px ${poem.color}60`;

  const s2 = document.createElement('div');
  s2.style.cssText = `position:absolute;bottom:0;left:0;right:0;height:2px;background:${poem.color};opacity:.3;box-shadow:0 0 6px ${poem.color}`;

  const stitle = document.createElement('span');
  stitle.className = 'bst';
  stitle.textContent = poem.title;

  spine.append(s1, stitle, s2);
  book.append(spine);

  book.addEventListener('click',       () => openPoem(poem));
  book.addEventListener('mouseenter',  () => { hov(true);  showBookTip(book, poem); });
  book.addEventListener('mousemove',   () => _tipPos(book), {passive:true});
  book.addEventListener('mouseleave',  () => { hov(false); hideBookTip(); });

  return book;
}

function makeDecor() {
  const d = document.createElement('div');
  d.className = 'decor';
  d.textContent = ['◈','✦','◆','✧','⬡'][Math.floor(Math.random()*5)];
  d.style.animationDelay = Math.random()*3 + 's';
  return d;
}

// ─── PARALLAX (rAF-throttled) ─────────────────────────────────────────────────
function initParallax() {
  let ticking = false, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    rx = (e.clientX - innerWidth/2)  / (innerWidth/2);
    ry = (e.clientY - innerHeight/2) / (innerHeight/2);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        // Only move shelves when overlay is closed
        if (!activePoem) {
          document.querySelectorAll('.shelf').forEach((sh, i) => {
            const d = (i+1)*.6;
            sh.style.transform = `translateX(${rx*d*7}px) translateY(${ry*d*2.5}px) rotateY(${rx*d*.5}deg)`;
          });
          document.querySelectorAll('.orb').forEach((o, i) => {
            const f = (i+1)*24;
            o.style.transform = `translate(${rx*f}px,${ry*f}px)`;
          });
        }
        ticking = false;
      });
    }
  }, {passive:true});
}

// ─── POEM OVERLAY ─────────────────────────────────────────────────────────────
// KEY FIXES:
//  1. NO canvas inside the poem (was launching its own rAF + creating radial gradient every frame)
//  2. NO setTimeout per line — CSS animation-delay handles stagger (zero JS timers)
//  3. Poem overlay pauses particle rendering (activePoem flag)

function openPoem(poem) {
  const ov = document.getElementById('pov');
  const pw = document.getElementById('pwrap');
  pw.style.setProperty('--pc', poem.color);

  // Build HTML — no canvas, no ppcv
  const frag = document.createDocumentFragment();

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'phdr';
  hdr.innerHTML = `
    <span class="pnum">Poème ${poem.number}</span>
    <h2 class="ptitle">${poem.title}</h2>
    <div class="pdiv"><div class="pdiv-line"></div><span class="pdiv-gem">◆</span><div class="pdiv-line"></div></div>`;

  // Close btn
  const cb = document.createElement('button');
  cb.className = 'pcls'; cb.id = 'cbtn'; cb.textContent = '✕';
  cb.addEventListener('click',      closePoem);
  cb.addEventListener('mouseenter', () => hov(true));
  cb.addEventListener('mouseleave', () => hov(false));

  // Body — use CSS custom-property delay instead of setTimeout
  const body = document.createElement('div');
  body.className = 'pbody';
  let lineIdx = 0;
  poem.stanzas.forEach((lines, si) => {
    const sDiv = document.createElement('div');
    sDiv.className = 'pstanza';
    lines.forEach((line, li) => {
      const span = document.createElement('span');
      span.className = 'pline' + (li === 0 ? ' first' : '');
      span.textContent = line;
      // CSS animation-delay per line — no JS timers at all
      span.style.setProperty('--li', lineIdx++);
      sDiv.appendChild(span);
    });
    body.appendChild(sDiv);
    if (si < poem.stanzas.length - 1) {
      const sep = document.createElement('div');
      sep.className = 'stanza-sep';
      sep.textContent = '✦  ✦  ✦';
      body.appendChild(sep);
    }
  });

  frag.append(cb, hdr, body);

  // Clear and insert
  pw.innerHTML = '';
  pw.appendChild(frag);

  ov.classList.add('on');
  document.body.style.overflow = 'hidden';
  activePoem = poem;
}

function closePoem() {
  document.getElementById('pov').classList.remove('on');
  document.body.style.overflow = '';
  hov(false);
  activePoem = null;
}

document.getElementById('pbdrop').addEventListener('click', closePoem);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && activePoem) closePoem(); });

// ─── FLICKER (CSS class, not style mutation) ──────────────────────────────────
function startFlicker() {
  function flk() {
    const books = document.querySelectorAll('.bspine');
    if (books.length) books[Math.floor(Math.random()*books.length)].classList.add('flicker');
    setTimeout(() => document.querySelectorAll('.bspine.flicker').forEach(b => b.classList.remove('flicker')), 150);
    setTimeout(flk, Math.random()*3000 + 800);
  }
  setTimeout(flk, 4000);
}

// ─── RESIZE / SCROLL (passive) ────────────────────────────────────────────────
window.addEventListener('resize', () => { if (currentTipTarget) _tipPos(currentTipTarget); }, {passive:true});
window.addEventListener('scroll', () => { if (currentTipTarget) _tipPos(currentTipTarget); }, {passive:true});

// ─── BOOT ─────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('gone');
    buildLibrary();
    document.body.classList.add('loaded');
    initParticles();
    initParallax();
    initFloatingVerses();
    startFlicker();
  }, 1500);
});