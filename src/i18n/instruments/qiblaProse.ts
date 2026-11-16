/**
 * Localised long-form copy for the online Qibla tool page.
 *
 * Every locale URL (/es/onlineqibla/, /ja/onlineqibla/, …) renders the same
 * markup with the body text taken from here, so a Spanish reader gets Spanish
 * prose, a Spanish <title> and Spanish keywords instead of English under a
 * translated header. English doubles as the fallback for any missing locale.
 */
import type { QiblaProse } from './qiblaProseTypes';

export const qiblaProse: Record<string, QiblaProse> = {

  en: {
  aboutH: "The online Qibla finder that works from where you stand",
  intro: [    "This **online Qibla** tool answers one question in one tap: which way is the Qibla from here? Allow location, hold the phone flat, and the page shows the **Qibla direction** on a live compass along with the bearing in degrees. There is nothing to install, no account to create and no waiting for an app to update — it is an **online Qibla finder** built for the moment you actually need it.",
    "If you have ever searched for “where is Qibla direction”, “find Qibla direction” or a *live gibla direction online* phrase typed in a hurry, you already know the problem. Hotel rooms have a sticker pointing at a wall, mosque apps want a download, and a plain compass tells you north but not the bearing you need. This page closes that gap with a **Qibla direction arrow** and a number you can trust.",
  ],
  sections: [
  {
    h: "How the online Qibla direction is calculated",
    paras: [
      "The Kaaba sits at roughly 21.4225° N, 39.8262° E. Your phone reports its own latitude and longitude through the browser, and the page computes the great-circle bearing between the two points — the shortest path over the Earth's surface. The result is your **Qibla direction compass degrees** value, measured clockwise from true north.",
      "Because the maths uses your real coordinates, the answer is different in every city, and it is correct wherever you travel. A **compass Qibla** bearing in Delhi is not the same as one in London or Jakarta, and this page recalculates the moment location changes, so an **online Qibla compass** in a new city is never a guess based on the last trip.",
    ],
  },
  {
    h: "How to use the Qibla direction compass",
    paras: [
      "Open the page, allow location, then hold the phone flat in front of you with the top pointing away. Turn on the spot until the arrow lines up with the marker, and you are facing the Qibla. For a prayer mat, note the bearing first and then lay the mat along that line.",
      "That is the whole **quick Qibla direction** routine: location, flat phone, turn until the arrow locks. When you only have a moment before prayer, it takes less time than opening an app store page, and the **live Qibla direction online** reading keeps updating as you rotate rather than freezing on one number.",
    ],
    list: [
      "Stand away from magnets, speakers, laptops and metal furniture before trusting the heading.",
      "Move the phone in a figure-eight twice if the compass feels slow or jumpy.",
      "Compare the bearing with the direction of the sun at noon for a rough sanity check.",
      "Turn off any magnetic case — it biases the sensor more than anything else.",
      "Use a fixed surface for a prayer mat rather than balancing the phone by hand.",
    ],
    listAt: 0,
  },
  {
    h: "Online Qibla compass versus a phone app",
    paras: [
      "An app is fine if you use one every day in the same place. The advantage of an **online Qibla location** page is that it works on any phone you pick up — a borrowed phone, a tablet on a hotel desk, a laptop in a room where you have never prayed before — with no install permissions to fight through.",
      "It is also honest about uncertainty. A phone compass carries a few degrees of error, so the page shows the bearing as a number: you can see whether you are 2° off or 40° off, which matters far more than a needle that looks confident. Treat a **Qibla finder** reading as accurate to a couple of degrees, and use the arrow as the practical answer.",
    ],
  },
  {
    h: "Accuracy, interference and what to expect indoors",
    paras: [
      "Two things decide how good a **Qibla direction compass degrees** reading is: the magnetometer and your location fix. Indoors, GPS can drift by tens of metres, which barely changes the bearing over long distances but does matter if you are far from the Kaaba and near a large steel structure. Move to a window for a better fix.",
      "Magnetometer error is the bigger factor. Speakers, magnetic phone mounts, steel desks, cars and even a laptop fan can pull a compass several degrees. If the **online Qibla direction** number swings when you rotate slowly, recalibrate with the figure-eight motion and step away from the interference before you commit.",
    ],
  },
  {
    h: "Who this online Qibla tool is for",
    paras: [
      "Travellers in an unfamiliar hotel room, office workers looking for a corner to pray in, students in a new hostel, and anyone whose local mosque is out of sight. It is equally useful as a cross-check: if the sticker on the wall says one thing and the **online Qibla compass** says another, you now have a second opinion with a number attached.",
      "The tool is free and needs no account. Your coordinates are used in the tab to calculate the bearing and are never stored, so an **online Qibla direction** check leaves nothing behind: allow location access for an exact bearing, or let the page fall back to an approximate city from your IP address if you decline.",
    ],
  },
  {
    h: "The short version",
    paras: [
      "Allow location, hold the phone flat, turn until the arrow lines up, and note the degrees if you need to lay out a mat. Stay away from magnets and metal, recalibrate if the needle feels sluggish, and treat the reading as good to a couple of degrees. Whether you searched for a **Qibla direction arrow**, **find Qibla direction** or an **online Qibla location** from a new city, the answer is the same page — free, private and no install.",
    ],
  },
  ],
  guidesH: "Latest guides from the Qibla blog",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Qibla Direction in Compass Degrees: How the Bearing Is Calculated", desc: "How the qibla direction compass degrees value is worked out: coordinates, the great-circle bearing, magnetic declination, and two worked examples you can repeat." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Why Is My Qibla Direction Wrong? 7 Fixes That Actually Work", desc: "The qibla direction arrow looks wrong on your phone? Seven causes, from sensor calibration to steel walls, with fixes you can try in under a minute each." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Qibla Finder: Find the Direction of Prayer Anywhere", desc: "Find the direction of the Kaaba from any location with compass and location integration — the full guide to the online qibla finder." },
  ],
  guidesAll: "See all online Qibla guides →",
  faqH: "Frequently asked questions about the online Qibla",
  faq: [
    {
      q: "How to know Qibla direction online?",
      a: "Allow the page to read your location, then hold the phone flat in front of you. The page calculates the bearing from your own coordinates to the Kaaba and draws it as an arrow, so you can turn on the spot until the arrow lines up. The number beside it is your Qibla direction in degrees from true north.",
    },
    {
      q: "How to find Qibla online?",
      a: "Open the online Qibla finder, allow location access and wait a second for the GPS fix. Hold the phone flat and level, away from magnets and metal, and turn slowly until the arrow points straight ahead. Nothing needs installing, and the reading updates live as you rotate.",
    },
    {
      q: "How to find Qibla direction from my house online?",
      a: "Stand in the room where you pray, open the page and allow location. If the room has thick walls or a steel roof, step to a window for a better fix, then note the bearing. Write it down or mark the line on the floor, and the same spot works every day without repeating the reading.",
    },
    {
      q: "How to check Qibla direction online?",
      a: "Compare two readings in the same room: one near the wall you believe is correct, one on the other side. If both agree within a couple of degrees, the reading is clean. If they differ, one spot is affected by metal or magnets, and moving away from appliances usually settles it.",
    },
    {
      q: "How do I find Qibla direction online without an app?",
      a: "A browser page is enough. This Qibla finder uses the location and compass sensors your phone already has, so it needs no download, no account and no permissions beyond location. Once the page has loaded it keeps working even without mobile data.",
    },
    {
      q: "How to check Qibla online when travelling?",
      a: "In a new city the bearing changes, so take a fresh reading rather than reusing the number from home. Allow location on arrival, hold the phone flat, and note the degrees. Hotel rooms and airports have a lot of steel, so step away from the lift shaft, the TV and the minibar before you trust the arrow.",
    },
    {
      q: "Is the Qibla direction the same for every room in my city?",
      a: "Practically, yes. The Qibla is a great-circle bearing to the Kaaba, roughly 21.4225° N, 39.8262° E, and across a single city that bearing changes by far less than the accuracy of a phone sensor. A few kilometres of movement shifts the angle by a fraction of a degree, so the number you measure at home is valid in the mosque, the office and the neighbouring town.",
    },
    {
      q: "Why does the Qibla arrow differ from my phone's compass app?",
      a: "Two reasons: true north versus magnetic north, and sensor calibration. A compass app may show magnetic north while the Qibla bearing is measured from true north, and the gap between them, magnetic declination, reaches 10–20° in some regions. Magnetometer drift adds a few degrees more. Lay the phone flat, move a figure of eight in the air to recalibrate, and compare again before deciding which reading is wrong.",
    },
    {
      q: "What is magnetic declination and why does it matter for Qibla?",
      a: "Magnetic declination is the angle between magnetic north, which a magnetometer senses, and true north, which maps and bearings use. The Qibla direction is defined against true north, so this page applies your location's declination before drawing the arrow. If you copy the degrees and use them with a magnetic compass instead of a true-north reference, the declination gets applied twice and the direction drifts.",
    },
    {
      q: "Can I use the Qibla finder without enabling GPS?",
      a: "You can, but you must supply the coordinates another way. Without location permission the page cannot know where you are, so the arrow has nothing to point at. If you prefer not to share GPS, look up your latitude and longitude from a map, enter them where the page allows manual input, or simply note the degrees while location is briefly on and then turn it off again.",
    },
    {
      q: "How accurate is the Qibla direction shown on this page?",
      a: "The mathematics is exact to a fraction of a degree; the limits come from GPS and the magnetometer. A GPS fix is usually good to a few metres, which is irrelevant at continental distances, while a phone compass is realistically good to 2–5°. That is far more precise than needed, because even one degree of error over two metres of prayer space is only a three-centimetre offset.",
    },
    {
      q: "Where is Qibla online from my location?",
      a: "It depends on where you are standing. The Qibla is the great-circle direction to the Kaaba at roughly 21.4225° N, 39.8262° E, so the answer is different in every city — west-north-west from India, south-east from Europe, north-west from Indonesia. This page shows your own number rather than a fixed map guess.",
    },
  ],
  },

  es: {
  aboutH: "El buscador de alquibla online que funciona desde donde estás",
  intro: [    "Esta **alquibla online** responde a una sola pregunta con un toque: ¿hacia dónde está la alquibla desde aquí? Permite la ubicación, mantén el móvil plano y la página muestra la **dirección de la alquibla** en una brújula en vivo junto con el rumbo en grados. No hay nada que instalar, ni cuenta que crear, ni espera de actualizaciones: es un **buscador de alquibla online** hecho para el momento en que de verdad lo necesitas.",
    "Si alguna vez has buscado «dónde está la alquibla», «encontrar la dirección de la alquibla» o una frase de *dirección de la alquibla en vivo* escrita con prisa, ya conoces el problema. Las habitaciones de hotel tienen una pegatina apuntando a una pared, las apps de mezquita piden descarga y una brújula normal te dice el norte pero no el rumbo que necesitas. Esta página cierra esa brecha con una **flecha de la alquibla** y un número en el que puedes confiar.",
  ],
  sections: [
  {
    h: "Cómo se calcula la dirección de la alquibla online",
    paras: [
      "La Kaaba está a unos 21,4225° N, 39,8262° E. Tu móvil comunica su latitud y longitud a través del navegador y la página calcula el rumbo de círculo máximo entre ambos puntos: el camino más corto sobre la superficie terrestre. El resultado es tu valor en **grados de la dirección de la alquibla**, medido en sentido horario desde el norte verdadero.",
      "Como el cálculo usa tus coordenadas reales, la respuesta es distinta en cada ciudad y es correcta dondequiera que viajes. Un rumbo de **alquibla con brújula** en Delhi no es el mismo que en Londres o Yakarta, y esta página recalcula en cuanto cambia la ubicación, así que una **brújula de alquibla online** en una ciudad nueva nunca es una suposición basada en el viaje anterior.",
    ],
  },
  {
    h: "Cómo usar la brújula de la dirección de la alquibla",
    paras: [
      "Abre la página, permite la ubicación y sostén el móvil plano frente a ti con la parte superior apuntando hacia delante. Gira sobre ti mismo hasta que la flecha coincida con la marca: entonces estás mirando a la alquibla. Para la alfombra de rezo, apunta primero el rumbo y luego coloca la alfombra sobre esa línea.",
      "Esa es toda la rutina de la **dirección de la alquibla rápida**: ubicación, móvil plano, girar hasta que la flecha encaje. Cuando solo tienes un momento antes del rezo, lleva menos tiempo que abrir la página de una tienda de apps, y la lectura de **alquibla en vivo** se actualiza mientras giras en lugar de congelarse en un número.",
    ],
    list: [
      "Aléjate de imanes, altavoces, portátiles y muebles metálicos antes de fiarte del rumbo.",
      "Mueve el móvil en forma de ocho dos veces si la brújula va lenta o a saltos.",
      "Compara el rumbo con la dirección del sol al mediodía como comprobación rápida.",
      "Quita cualquier funda magnética: es lo que más desvía el sensor.",
      "Usa una superficie fija para la alfombra en lugar de sujetar el móvil en la mano.",
    ],
    listAt: 0,
  },
  {
    h: "Brújula de alquibla online frente a una app",
    paras: [
      "Una app va bien si la usas todos los días en el mismo sitio. La ventaja de una página de **ubicación de la alquibla online** es que funciona en cualquier móvil que tengas a mano: uno prestado, una tablet en la mesa del hotel, un portátil en una habitación donde nunca has rezado, sin permisos de instalación que superar.",
      "También es honesta con la incertidumbre. Una brújula de móvil lleva unos grados de error, así que la página muestra el rumbo como número: ves si te desvías 2° o 40°, lo que importa mucho más que una aguja que parece segura. Toma una lectura del **buscador de alquibla** como exacta dentro de un par de grados y usa la flecha como respuesta práctica.",
    ],
  },
  {
    h: "Precisión, interferencias y qué esperar en interiores",
    paras: [
      "Dos cosas deciden la calidad de una lectura de **grados de la dirección de la alquibla**: el magnetómetro y tu posición. En interiores el GPS puede desviarse decenas de metros, lo que apenas cambia el rumbo a larga distancia pero importa si estás lejos de la Kaaba y cerca de una gran estructura de acero. Acércate a una ventana para mejorar la señal.",
      "El error del magnetómetro es el factor mayor. Los altavoces, los soportes magnéticos, los escritorios de acero, los coches y hasta el ventilador de un portátil pueden desviar una brújula varios grados. Si el número de la **dirección de la alquibla online** oscila cuando giras despacio, recalibra con el movimiento en ocho y aléjate de la interferencia antes de decidir.",
    ],
  },
  {
    h: "Para quién es esta herramienta de alquibla online",
    paras: [
      "Viajeros en una habitación de hotel desconocida, oficinistas que buscan un rincón donde rezar, estudiantes en un albergue nuevo y cualquiera que no tenga su mezquita a la vista. Es igual de útil como comprobación: si la pegatina de la pared dice una cosa y la **brújula de alquibla online** dice otra, ya tienes una segunda opinión con un número.",
      "La herramienta es gratis y no necesita cuenta. Tus coordenadas se usan en la pestaña para calcular el rumbo y nunca se guardan, así que una comprobación de **dirección de la alquibla online** no deja nada: permite la ubicación para un rumbo exacto, o deja que la página use una ciudad aproximada a partir de tu IP si lo rechazas.",
    ],
  },
  {
    h: "La versión corta",
    paras: [
      "Permite la ubicación, mantén el móvil plano, gira hasta que la flecha coincida y apunta los grados si necesitas colocar una alfombra. Aléjate de imanes y metal, recalibra si la aguja va lenta y considera la lectura buena dentro de un par de grados. Buscaras una **flecha de la alquibla**, **encontrar la dirección de la alquibla** o una **ubicación de la alquibla online** desde una ciudad nueva, la respuesta es la misma página: gratis, privada y sin instalar nada.",
    ],
  },
  ],
  guidesH: "Últimas guías del blog de la alquibla",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Dirección de la alquibla en grados: cómo se calcula el rumbo", desc: "Cómo se obtiene el valor en grados de la dirección de la alquibla: coordenadas, rumbo de círculo máximo, declinación magnética y dos ejemplos que puedes repetir." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "¿Por qué está mal mi dirección de la alquibla? 7 soluciones que funcionan", desc: "¿La flecha de la alquibla se ve mal en tu móvil? Siete causas, desde la calibración del sensor hasta las paredes de acero, con soluciones de menos de un minuto." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Buscador de alquibla: encuentra la dirección del rezo en cualquier lugar", desc: "Encuentra la dirección de la Kaaba desde cualquier lugar con brújula y ubicación: la guía completa del buscador de alquibla online." },
  ],
  guidesAll: "Ver todas las guías de la alquibla online →",
  faqH: "Preguntas frecuentes sobre la alquibla online",
  faq: [
    {
      q: "¿Cómo saber la dirección de la alquibla online?",
      a: "Permite que la página lea tu ubicación y sostén el móvil plano frente a ti. La página calcula el rumbo desde tus coordenadas hasta la Kaaba y lo dibuja como flecha, así que puedes girar sobre ti mismo hasta que la flecha coincida. El número a su lado es tu dirección de la alquibla en grados desde el norte verdadero.",
    },
    {
      q: "¿Cómo encontrar la alquibla online?",
      a: "Abre el buscador de alquibla online, permite el acceso a la ubicación y espera un segundo a que llegue la señal GPS. Sostén el móvil plano y nivelado, lejos de imanes y metal, y gira despacio hasta que la flecha apunte al frente. No hay nada que instalar y la lectura se actualiza en vivo mientras giras.",
    },
    {
      q: "¿Cómo encontrar la dirección de la alquibla desde mi casa online?",
      a: "Ponte en la habitación donde rezas, abre la página y permite la ubicación. Si la sala tiene muros gruesos o tejado de acero, acércate a una ventana para mejorar la señal y apunta el rumbo. Escríbelo o marca la línea en el suelo: el mismo punto sirve cada día sin repetir la lectura.",
    },
    {
      q: "¿Cómo comprobar la dirección de la alquibla online?",
      a: "Compara dos lecturas en la misma habitación: una junto a la pared que crees correcta y otra en el lado opuesto. Si coinciden con un par de grados de diferencia, la lectura es limpia. Si difieren, un punto está afectado por metal o imanes, y alejarse de los electrodomésticos suele resolverlo.",
    },
    {
      q: "¿Cómo encuentro la dirección de la alquibla online sin una app?",
      a: "Basta con una página del navegador. Este buscador de alquibla usa la ubicación y los sensores de brújula que tu móvil ya tiene, así que no necesita descargas, ni cuenta, ni permisos más allá de la ubicación. Una vez cargada, la página sigue funcionando incluso sin datos móviles.",
    },
    {
      q: "¿Cómo comprobar la alquibla online cuando viajo?",
      a: "En una ciudad nueva el rumbo cambia, así que toma una lectura nueva en lugar de reutilizar el número de casa. Permite la ubicación al llegar, sostén el móvil plano y apunta los grados. Las habitaciones de hotel y los aeropuertos tienen mucho acero, así que aléjate del hueco del ascensor, la tele y el minibar antes de fiarte de la flecha.",
    },
    {
      q: "¿Dónde está la alquibla online desde mi ubicación?",
      a: "Depende de dónde estés. La alquibla es la dirección de círculo máximo hacia la Kaaba, a unos 21,4225° N, 39,8262° E, así que la respuesta es distinta en cada ciudad: oeste-noroeste desde India, sureste desde Europa, noroeste desde Indonesia. Esta página muestra tu propio número y no una suposición fija de mapa.",
    },
  ],
  },

  ja: {
  aboutH: "今いる場所からそのまま使えるオンラインのキブラ（礼拝方向）ファインダー",
  intro: [    "この**オンラインキブラ**ツールは、ひとつの問いにタップ一回で答えます。ここからキブラはどちらか。位置情報を許可し、スマホを平らに持てば、**キブラの方向**がライブコンパスと度数で表示されます。インストールも、アカウント作成も、アプリの更新待ちもありません。本当に必要なその瞬間のために作られた**オンラインキブラファインダー**です。",
    "「キブラはどちらか」「キブラの方向を調べたい」「*キブラの方角をオンラインで*」と慌てて検索したことがあるなら、問題はもうご存じでしょう。ホテルの部屋には壁を指すシールがあり、モスクアプリはダウンロードを求め、普通のコンパスは北は教えてくれても必要な方位は教えてくれません。このページは**キブラ方向の矢印**と信頼できる数字で、その隙間を埋めます。",
  ],
  sections: [
  {
    h: "オンラインのキブラ方向はどのように計算されるか",
    paras: [
      "カアバはおよそ北緯21.4225°、東経39.8262°にあります。スマホはブラウザ経由で自身の緯度と経度を伝え、ページは2点間の大円方位を計算します。地球表面をたどる最短経路のことです。その結果が、真北から時計回りに測った**キブラ方向のコンパス度数**です。",
      "実際の座標を使う計算なので、答えは都市ごとに異なり、旅先でも正しく出ます。デリーでの**コンパスによるキブラ**の方位はロンドンやジャカルタとは違い、このページは位置が変わるとすぐ再計算します。新しい街での**オンラインキブラコンパス**が、前回の旅の推測になることはありません。",
    ],
  },
  {
    h: "キブラ方向コンパスの使い方",
    paras: [
      "ページを開き、位置情報を許可し、スマホの上端を前方に向けて平らに持ちます。矢印がマークに重なるまでその場で回れば、キブラの方を向いています。礼拝用のマットなら、まず方位を読み取り、その線に沿ってマットを敷きます。",
      "**手早いキブラ方向**の手順はこれだけです。位置情報、平らなスマホ、矢印が合うまで回る。礼拝前に時間がないとき、アプリストアのページを開くより速く、**オンラインのライブキブラ方向**は回転に合わせて更新され、ひとつの数字で止まったままにはなりません。",
    ],
    list: [
      "方位を信じる前に、磁石・スピーカー・ノートPC・金属製の家具から離れる。",
      "コンパスが遅い、または飛ぶように動くときは、スマホを8の字に2回動かす。",
      "正午の太陽の方向と比べて、ざっくり確認する。",
      "マグネットケースは外す。センサーを最も狂わせる原因です。",
      "礼拝マットは手でスマホを支えるのではなく、固定した面で使う。",
    ],
    listAt: 0,
  },
  {
    h: "オンラインキブラコンパスとアプリの違い",
    paras: [
      "毎日同じ場所で使うならアプリでも構いません。**オンラインのキブラ位置情報**ページの利点は、手元にあるどんな端末でも動くことです。借りたスマホ、ホテルの机のタブレット、初めて礼拝する部屋のノートPCでも、インストール権限と格闘する必要はありません。",
      "不確かさについても正直です。スマホのコンパスには数度の誤差があるため、ページは方位を数字で示します。2°ずれているのか40°ずれているのかが分かるのは、自信ありげな針よりずっと重要です。**キブラファインダー**の読みは数度の精度と考え、矢印を実用的な答えとして使ってください。",
    ],
  },
  {
    h: "精度、干渉、屋内で期待できること",
    paras: [
      "**キブラ方向のコンパス度数**の読みを決めるのは2つ、磁気センサーと位置情報の精度です。屋内ではGPSが数十メートルずれることがあり、遠距離では方位にほとんど影響しませんが、カアバから遠く大きな鉄骨構造の近くでは問題になります。窓際に移動すると精度が上がります。",
      "より大きな要素は磁気センサーの誤差です。スピーカー、マグネット式ホルダー、鉄の机、車、ノートPCのファンでさえコンパスを数度引っ張ります。ゆっくり回したときに**オンラインのキブラ方向**の数字が揺れるなら、8の字で再調整し、干渉源から離れてから判断してください。",
    ],
  },
  {
    h: "このオンラインキブラツールは誰のためか",
    paras: [
      "見知らぬホテルの部屋にいる旅行者、礼拝できる一角を探す会社員、新しい寮の学生、地元のモスクが見えない人。確認用としても同じくらい役立ちます。壁のシールが示す方向と**オンラインキブラコンパス**が違うなら、数字付きの第二の意見が手に入るわけです。",
      "ツールは無料でアカウント不要です。座標はタブ内で方位の計算に使われるだけで保存されないため、**オンラインキブラ方向**の確認は何も残しません。正確な方位には位置情報を許可し、拒否した場合はIPアドレスから推定したおおよその都市に切り替わります。",
    ],
  },
  {
    h: "要点まとめ",
    paras: [
      "位置情報を許可し、スマホを平らに持ち、矢印が合うまで回り、マットを敷く必要があれば度数を控えます。磁石と金属から離れ、針が鈍いときは再調整し、読みは数度の精度と考えてください。**キブラ方向の矢印**、**キブラ方向を調べる**、新しい街での**オンラインキブラ位置情報**のどれを探していても、答えは同じページです。無料で、プライベートで、インストール不要。",
    ],
  },
  ],
  guidesH: "キブラブログの最新ガイド",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "キブラ方向をコンパスの度数で表すと？方位の計算方法", desc: "キブラ方向のコンパス度数の求め方。座標、大円方位、磁気偏角、そして自分で再現できる2つの計算例を解説します。" },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "キブラ方向が違うのはなぜ？実際に効く7つの対処法", desc: "スマホのキブラ方向の矢印がおかしい？センサーの調整から鉄壁まで、7つの原因と1分以内で試せる対処法をまとめました。" },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "キブラファインダー：どこでも礼拝方向を見つける方法", desc: "コンパスと位置情報を組み合わせて、どの場所からでもカアバの方向を見つける。オンラインキブラファインダーの完全ガイド。" },
  ],
  guidesAll: "オンラインキブラのガイドをすべて見る →",
  faqH: "オンラインキブラに関するよくある質問",
  faq: [
    {
      q: "オンラインでキブラ方向を知るには？",
      a: "ページに位置情報の読み取りを許可し、スマホを平らに前へ持ってください。ページはあなたの座標からカアバへの方位を計算し、矢印で描きます。その場で回って矢印を合わせれば完了です。隣の数字が真北から測ったキブラ方向の度数です。",
    },
    {
      q: "オンラインでキブラを見つけるには？",
      a: "オンラインキブラファインダーを開き、位置情報へのアクセスを許可し、GPSの取得を1秒待ちます。スマホを平らに水平に保ち、磁石や金属から離れて、矢印が正面を指すまでゆっくり回ります。インストールは不要で、回転に合わせて読みが更新されます。",
    },
    {
      q: "自宅からオンラインでキブラ方向を知るには？",
      a: "礼拝する部屋に立ち、ページを開いて位置情報を許可します。壁が厚い、または鉄の屋根なら、精度向上のため窓際へ移動してから方位を控えます。メモするか床に線を引き、同じ地点なら毎日読み直さずに使えます。",
    },
    {
      q: "オンラインでキブラ方向を確認するには？",
      a: "同じ部屋で2回読み取ります。正しいと思う壁の近くと、反対側です。両者が数度以内で一致すれば読みは良好です。違う場合は片方が金属や磁石の影響を受けており、家電から離れると落ち着くことがほとんどです。",
    },
    {
      q: "アプリなしでオンラインでキブラ方向を見つけるには？",
      a: "ブラウザのページで十分です。このキブラファインダーはスマホが持つ位置情報とコンパスセンサーを使うので、ダウンロードもアカウントも位置情報以外の権限も不要です。一度読み込めば、モバイルデータなしでも動作を続けます。",
    },
    {
      q: "旅行中にオンラインでキブラを確認するには？",
      a: "新しい街では方位が変わるので、自宅の数字を使い回さず新しく読み取ります。到着したら位置情報を許可し、スマホを平らに持ち、度数を控えます。ホテルの部屋や空港は鉄が多いので、エレベーターシャフト、テレビ、ミニバーから離れてから矢印を信じてください。",
    },
    {
      q: "今いる場所から見たキブラはオンラインでどこですか？",
      a: "立っている場所によります。キブラはおよそ北緯21.4225°、東経39.8262°のカアバへの大円方向なので、答えは都市ごとに異なります。インドからは西北西、ヨーロッパからは南東、インドネシアからは北西です。このページは地図上の固定値ではなく、あなた自身の数字を示します。",
    },
  ],
  },

  fr: {
  aboutH: "Le chercheur de Qibla en ligne qui fonctionne depuis là où vous êtes",
  intro: [    "Cet outil de **Qibla en ligne** répond à une seule question en un geste : dans quelle direction se trouve la Qibla d'ici ? Autorisez la localisation, tenez le téléphone à plat, et la page affiche la **direction de la Qibla** sur une boussole en direct avec le relèvement en degrés. Rien à installer, pas de compte à créer, pas d'attente de mise à jour : c'est un **chercheur de Qibla en ligne** conçu pour le moment où vous en avez vraiment besoin.",
    "Si vous avez déjà cherché « où est la Qibla », « trouver la direction de la Qibla » ou une phrase du type *direction de la Qibla en direct*, vous connaissez le problème. Les chambres d'hôtel ont un autocollant qui pointe vers un mur, les applications de mosquée réclament un téléchargement, et une boussole ordinaire vous donne le nord mais pas le relèvement utile. Cette page comble cet écart avec une **flèche de direction de la Qibla** et un chiffre fiable.",
  ],
  sections: [
  {
    h: "Comment la direction de la Qibla en ligne est calculée",
    paras: [
      "La Kaaba se situe à environ 21,4225° N, 39,8262° E. Votre téléphone transmet sa latitude et sa longitude via le navigateur, et la page calcule le relèvement orthodromique entre les deux points : le chemin le plus court à la surface du globe. Le résultat est votre valeur de **degrés de la direction de la Qibla**, mesurée dans le sens horaire depuis le nord vrai.",
      "Comme le calcul utilise vos coordonnées réelles, la réponse diffère dans chaque ville et reste exacte où que vous voyagiez. Un relèvement de **Qibla à la boussole** à Delhi n'est pas le même qu'à Londres ou Jakarta, et cette page recalcule dès que la position change : une **boussole Qibla en ligne** dans une nouvelle ville n'est jamais une supposition basée sur le voyage précédent.",
    ],
  },
  {
    h: "Comment utiliser la boussole de direction de la Qibla",
    paras: [
      "Ouvrez la page, autorisez la localisation, puis tenez le téléphone à plat devant vous, le haut vers l'avant. Tournez sur place jusqu'à ce que la flèche s'aligne sur le repère : vous faites face à la Qibla. Pour un tapis de prière, notez d'abord le relèvement puis posez le tapis sur cette ligne.",
      "C'est toute la routine de la **direction de la Qibla rapide** : localisation, téléphone à plat, rotation jusqu'à ce que la flèche se cale. Quand il ne reste qu'un instant avant la prière, c'est plus rapide que d'ouvrir la page d'une boutique d'applications, et la **direction de la Qibla en direct** se met à jour pendant la rotation au lieu de se figer sur un chiffre.",
    ],
    list: [
      "Éloignez-vous des aimants, haut-parleurs, ordinateurs portables et meubles métalliques avant de faire confiance au cap.",
      "Faites décrire deux fois un huit au téléphone si la boussole semble lente ou instable.",
      "Comparez le relèvement avec la direction du soleil à midi pour un contrôle rapide.",
      "Retirez toute coque magnétique : c'est ce qui fausse le plus le capteur.",
      "Utilisez une surface fixe pour le tapis de prière plutôt que de tenir le téléphone à la main.",
    ],
    listAt: 0,
  },
  {
    h: "Boussole Qibla en ligne ou application mobile",
    paras: [
      "Une application convient si vous l'utilisez chaque jour au même endroit. L'avantage d'une page de **localisation de la Qibla en ligne** est qu'elle fonctionne sur n'importe quel téléphone à portée de main : un appareil emprunté, une tablette sur un bureau d'hôtel, un ordinateur portable dans une pièce où vous n'avez jamais prié, sans permissions d'installation à gérer.",
      "Elle est aussi honnête sur l'incertitude. Une boussole de téléphone porte quelques degrés d'erreur, alors la page affiche le relèvement sous forme de chiffre : vous voyez si vous êtes à 2° ou à 40°, ce qui compte bien plus qu'une aiguille qui semble sûre d'elle. Considérez une lecture du **chercheur de Qibla** comme exacte à quelques degrés, et prenez la flèche comme réponse pratique.",
    ],
  },
  {
    h: "Précision, interférences et ce qu'il faut attendre en intérieur",
    paras: [
      "Deux éléments déterminent la qualité d'une lecture en **degrés de direction de la Qibla** : le magnétomètre et votre position. En intérieur, le GPS peut dériver de plusieurs dizaines de mètres, ce qui ne change presque pas le relèvement sur de longues distances mais compte si vous êtes loin de la Kaaba et près d'une grande structure métallique. Approchez-vous d'une fenêtre pour une meilleure position.",
      "L'erreur du magnétomètre est le facteur principal. Haut-parleurs, supports magnétiques, bureaux en acier, voitures et même le ventilateur d'un ordinateur portable peuvent tirer une boussole de plusieurs degrés. Si le chiffre de **direction de la Qibla en ligne** oscille quand vous tournez lentement, recalibrez avec le mouvement en huit et éloignez-vous de l'interférence avant de trancher.",
    ],
  },
  {
    h: "À qui sert cet outil de Qibla en ligne",
    paras: [
      "Aux voyageurs dans une chambre d'hôtel inconnue, aux salariés qui cherchent un coin pour prier, aux étudiants dans un nouveau foyer, et à tous ceux dont la mosquée n'est pas visible. Il est tout aussi utile comme contre-vérification : si l'autocollant du mur dit une chose et la **boussole Qibla en ligne** une autre, vous avez un second avis chiffré.",
      "L'outil est gratuit et sans compte. Vos coordonnées servent dans l'onglet au calcul du relèvement et ne sont jamais stockées : une vérification de **direction de la Qibla en ligne** ne laisse donc rien derrière elle. Autorisez la localisation pour un relèvement exact, ou laissez la page utiliser une ville approximative à partir de votre adresse IP si vous refusez.",
    ],
  },
  {
    h: "La version courte",
    paras: [
      "Autorisez la localisation, tenez le téléphone à plat, tournez jusqu'à ce que la flèche s'aligne et notez les degrés si vous devez poser un tapis. Restez loin des aimants et du métal, recalibrez si l'aiguille semble paresseuse, et considérez la lecture bonne à quelques degrés près. Que vous ayez cherché une **flèche de direction de la Qibla**, à **trouver la direction de la Qibla** ou une **localisation de la Qibla en ligne** depuis une nouvelle ville, la réponse est la même page : gratuite, privée, sans installation.",
    ],
  },
  ],
  guidesH: "Derniers guides du blog Qibla",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Direction de la Qibla en degrés de boussole : comment le relèvement est calculé", desc: "Comment la valeur en degrés de la direction de la Qibla est obtenue : coordonnées, relèvement orthodromique, déclinaison magnétique et deux exemples à refaire." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Pourquoi ma direction de la Qibla est-elle fausse ? 7 solutions efficaces", desc: "La flèche de la Qibla semble fausse sur votre téléphone ? Sept causes, de la calibration du capteur aux murs en acier, avec des solutions en moins d’une minute." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Chercheur de Qibla : trouver la direction de la prière partout", desc: "Trouvez la direction de la Kaaba depuis n’importe quel lieu grâce à la boussole et à la localisation : le guide complet du chercheur de Qibla en ligne." },
  ],
  guidesAll: "Voir tous les guides de la Qibla en ligne →",
  faqH: "Questions fréquentes sur la Qibla en ligne",
  faq: [
    {
      q: "Comment connaître la direction de la Qibla en ligne ?",
      a: "Autorisez la page à lire votre position, puis tenez le téléphone à plat devant vous. La page calcule le relèvement depuis vos coordonnées jusqu’à la Kaaba et le dessine sous forme de flèche : tournez sur place jusqu’à ce qu’elle s’aligne. Le nombre à côté donne la direction de la Qibla en degrés depuis le nord vrai.",
    },
    {
      q: "Comment trouver la Qibla en ligne ?",
      a: "Ouvrez le chercheur de Qibla en ligne, autorisez l’accès à la position et attendez une seconde la fixation GPS. Tenez le téléphone à plat et de niveau, loin des aimants et du métal, et tournez lentement jusqu’à ce que la flèche pointe droit devant. Rien à installer, et la lecture s’actualise en direct pendant la rotation.",
    },
    {
      q: "Comment trouver la direction de la Qibla depuis ma maison en ligne ?",
      a: "Placez-vous dans la pièce où vous priez, ouvrez la page et autorisez la localisation. Si la pièce a des murs épais ou un toit en acier, approchez-vous d’une fenêtre pour une meilleure position, puis notez le relèvement. Écrivez-le ou tracez la ligne au sol : le même endroit sert chaque jour sans refaire la lecture.",
    },
    {
      q: "Comment vérifier la direction de la Qibla en ligne ?",
      a: "Comparez deux lectures dans la même pièce : une près du mur que vous croyez correct, une de l’autre côté. Si les deux concordent à quelques degrés près, la lecture est propre. Si elles diffèrent, un des endroits subit l’influence du métal ou d’aimants, et s’éloigner des appareils règle généralement la question.",
    },
    {
      q: "Comment trouver la direction de la Qibla en ligne sans application ?",
      a: "Une page de navigateur suffit. Ce chercheur de Qibla utilise la localisation et les capteurs de boussole déjà présents dans votre téléphone : aucun téléchargement, aucun compte et aucune permission en dehors de la localisation. Une fois chargée, la page continue de fonctionner même sans données mobiles.",
    },
    {
      q: "Comment vérifier la Qibla en ligne en voyage ?",
      a: "Dans une nouvelle ville, le relèvement change : prenez une nouvelle lecture plutôt que de réutiliser le chiffre de la maison. Autorisez la localisation à l’arrivée, tenez le téléphone à plat et notez les degrés. Les chambres d’hôtel et les aéroports contiennent beaucoup d’acier : éloignez-vous de la cage d’ascenseur, de la télévision et du minibar avant de faire confiance à la flèche.",
    },
    {
      q: "Où est la Qibla en ligne depuis ma position ?",
      a: "Cela dépend de l’endroit où vous vous tenez. La Qibla est la direction orthodromique vers la Kaaba, à environ 21,4225° N et 39,8262° E : la réponse diffère donc dans chaque ville — ouest-nord-ouest depuis l’Inde, sud-est depuis l’Europe, nord-ouest depuis l’Indonésie. Cette page affiche votre propre chiffre et non une estimation fixe sur une carte.",
    },
  ],
  },

  de: {
  aboutH: "Der Online-Qibla-Finder, der von Ihrem Standort aus funktioniert",
  intro: [    "Dieses **Online-Qibla**-Tool beantwortet eine einzige Frage mit einem Tippen: Wo liegt die Qibla von hier aus? Standort erlauben, das Telefon flach halten, und die Seite zeigt die **Qibla-Richtung** auf einem Live-Kompass zusammen mit dem Azimut in Grad. Nichts zu installieren, kein Konto, kein Warten auf ein App-Update — ein **Online-Qibla-Finder** für genau den Moment, in dem Sie ihn brauchen.",
    "Wenn Sie schon einmal „wo ist die Qibla“, „Qibla-Richtung finden“ oder eine *Qibla-Richtung live* in Eile gesucht haben, kennen Sie das Problem. Hotelzimmer haben einen Aufkleber an der Wand, Moschee-Apps wollen einen Download, und ein normaler Kompass zeigt Norden, aber nicht den Azimut, den Sie brauchen. Diese Seite schließt die Lücke mit einem **Qibla-Richtungspfeil** und einer Zahl, der Sie trauen können.",
  ],
  sections: [
  {
    h: "Wie die Online-Qibla-Richtung berechnet wird",
    paras: [
      "Die Kaaba liegt bei etwa 21,4225° N, 39,8262° O. Ihr Telefon meldet seine eigene Länge und Breite über den Browser, und die Seite berechnet den Großkreis-Azimut zwischen beiden Punkten — den kürzesten Weg über die Erdoberfläche. Das Ergebnis ist Ihr Wert in **Grad der Qibla-Richtung**, im Uhrzeigersinn von Nord (wahr) gemessen.",
      "Da die Rechnung Ihre echten Koordinaten nutzt, ist die Antwort in jeder Stadt anders und überall auf Reisen korrekt. Ein **Qibla-Azimut per Kompass** in Delhi ist nicht derselbe wie in London oder Jakarta, und diese Seite rechnet neu, sobald sich der Standort ändert — ein **Online-Qibla-Kompass** in einer neuen Stadt ist also nie eine Schätzung vom letzten Urlaub.",
    ],
  },
  {
    h: "So nutzen Sie den Qibla-Richtungskompass",
    paras: [
      "Seite öffnen, Standort erlauben, das Telefon flach vor sich halten, die Oberkante nach vorn. Drehen Sie sich auf der Stelle, bis der Pfeil mit der Markierung übereinstimmt — dann blicken Sie zur Qibla. Für eine Gebetsmatte zuerst den Azimut notieren und die Matte dann entlang dieser Linie auslegen.",
      "Das ist die ganze Routine für die **schnelle Qibla-Richtung**: Standort, flaches Telefon, drehen bis der Pfeil einrastet. Wenn vor dem Gebet nur ein Moment bleibt, geht das schneller als eine App-Store-Seite zu öffnen, und die **Qibla-Richtung live** aktualisiert sich beim Drehen, statt auf einer Zahl einzufrieren.",
    ],
    list: [
      "Halten Sie Abstand zu Magneten, Lautsprechern, Laptops und Metallmöbeln, bevor Sie dem Kurs trauen.",
      "Bewegen Sie das Telefon zweimal in einer Acht, wenn der Kompass träge oder sprunghaft wirkt.",
      "Vergleichen Sie den Azimut mit der Sonnenrichtung am Mittag als grobe Kontrolle.",
      "Nehmen Sie magnetische Hüllen ab — sie verfälschen den Sensor am stärksten.",
      "Nutzen Sie eine feste Unterlage für die Gebetsmatte, statt das Telefon mit der Hand zu halten.",
    ],
    listAt: 0,
  },
  {
    h: "Online-Qibla-Kompass oder Handy-App",
    paras: [
      "Eine App ist in Ordnung, wenn Sie sie täglich am selben Ort nutzen. Der Vorteil einer Seite für den **Qibla-Standort online** ist, dass sie auf jedem Telefon läuft, das Sie gerade in die Hand nehmen — ein geliehenes Gerät, ein Tablet auf dem Hoteltsch, ein Laptop in einem Raum, in dem Sie noch nie gebetet haben, ohne Installationsrechte.",
      "Sie ist auch ehrlich bei der Unsicherheit. Ein Telefonkompass trägt einige Grad Fehler, deshalb zeigt die Seite den Azimut als Zahl: Sie sehen, ob Sie 2° oder 40° daneben liegen — das ist weit wichtiger als eine Nadel, die selbstsicher aussieht. Nehmen Sie eine **Qibla-Finder**-Messung als auf wenige Grad genau und den Pfeil als praktische Antwort.",
    ],
  },
  {
    h: "Genauigkeit, Störungen und was drinnen zu erwarten ist",
    paras: [
      "Zwei Dinge bestimmen die Qualität einer Messung in **Grad der Qibla-Richtung**: das Magnetometer und Ihr Standortfix. Drinnen kann GPS um Dutzende Meter driften, was den Azimut über große Entfernungen kaum ändert, aber zählt, wenn Sie weit von der Kaaba und nahe an einer großen Stahlkonstruktion stehen. Gehen Sie für ein besseres Fix ans Fenster.",
      "Der Fehler des Magnetometers wiegt schwerer. Lautsprecher, Magnet halterungen, Stahlschreibtische, Autos und sogar ein Laptoplüfter können einen Kompass um mehrere Grad ziehen. Wenn die Zahl der **Online-Qibla-Richtung** beim langsamen Drehen schwankt, kalibrieren Sie mit der Acht-Bewegung neu und treten Sie von der Störquelle weg, bevor Sie sich festlegen.",
    ],
  },
  {
    h: "Für wen dieses Online-Qibla-Tool ist",
    paras: [
      "Reisende in einem fremden Hotelzimmer, Büroangestellte, die eine Ecke zum Beten suchen, Studierende in einem neuen Wohnheim und alle, deren Moschee außer Sicht ist. Ebenso nützlich als Gegenprobe: Wenn der Aufkleber an der Wand etwas anderes sagt als der **Online-Qibla-Kompass**, haben Sie eine zweite Meinung mit Zahl.",
      "Das Tool ist kostenlos und braucht kein Konto. Ihre Koordinaten werden im Tab zur Berechnung des Azimuts verwendet und nie gespeichert — eine Prüfung der **Online-Qibla-Richtung** hinterlässt also nichts. Erlauben Sie den Standort für einen exakten Azimut, oder lassen Sie die Seite ersatzweise eine ungefähre Stadt aus Ihrer IP-Adresse ableiten, wenn Sie ablehnen.",
    ],
  },
  {
    h: "Die Kurzfassung",
    paras: [
      "Standort erlauben, Telefon flach halten, drehen bis der Pfeil übereinstimmt, und die Grad notieren, wenn Sie eine Matte auslegen müssen. Bleiben Sie weg von Magneten und Metall, kalibrieren Sie neu, wenn die Nadel träge wirkt, und nehmen Sie die Messung als auf wenige Grad genau. Ob Sie nach einem **Qibla-Richtungspfeil**, nach **Qibla-Richtung finden** oder nach einem **Qibla-Standort online** aus einer neuen Stadt gesucht haben — die Antwort ist dieselbe Seite: kostenlos, privat und ohne Installation.",
    ],
  },
  ],
  guidesH: "Neueste Ratgeber aus dem Qibla-Blog",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Qibla-Richtung in Kompassgraden: Wie der Azimut berechnet wird", desc: "Wie der Wert der Qibla-Richtung in Kompassgraden entsteht: Koordinaten, Großkreis-Azimut, magnetische Deklination und zwei Rechenbeispiele zum Nachvollziehen." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Warum ist meine Qibla-Richtung falsch? 7 Lösungen, die wirklich helfen", desc: "Der Qibla-Pfeil wirkt auf Ihrem Telefon falsch? Sieben Ursachen, von der Sensorkalibrierung bis zu Stahlwänden, mit Lösungen in unter einer Minute." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Qibla-Finder: die Gebetsrichtung überall finden", desc: "Finden Sie die Richtung der Kaaba von jedem Ort aus mit Kompass und Standort – der vollständige Leitfaden zum Online-Qibla-Finder." },
  ],
  guidesAll: "Alle Online-Qibla-Ratgeber ansehen →",
  faqH: "Häufige Fragen zur Online-Qibla",
  faq: [
    {
      q: "Wie finde ich die Qibla-Richtung online heraus?",
      a: "Erlauben Sie der Seite, Ihren Standort zu lesen, und halten Sie das Telefon flach vor sich. Die Seite berechnet den Azimut von Ihren Koordinaten zur Kaaba und zeichnet ihn als Pfeil, sodass Sie sich auf der Stelle drehen können, bis der Pfeil übereinstimmt. Die Zahl daneben ist Ihre Qibla-Richtung in Grad von Nord (wahr).",
    },
    {
      q: "Wie finde ich die Qibla online?",
      a: "Öffnen Sie den Online-Qibla-Finder, erlauben Sie den Standortzugriff und warten Sie eine Sekunde auf das GPS-Fix. Halten Sie das Telefon flach und waagerecht, weg von Magneten und Metall, und drehen Sie langsam, bis der Pfeil geradeaus zeigt. Nichts muss installiert werden, und die Messung aktualisiert sich beim Drehen live.",
    },
    {
      q: "Wie finde ich die Qibla-Richtung von zu Hause online?",
      a: "Stellen Sie sich in den Raum, in dem Sie beten, öffnen Sie die Seite und erlauben Sie den Standort. Bei dicken Wänden oder Stahldach gehen Sie für ein besseres Fix ans Fenster und notieren dann den Azimut. Schreiben Sie ihn auf oder markieren Sie die Linie am Boden — dieselbe Stelle funktioniert jeden Tag ohne neue Messung.",
    },
    {
      q: "Wie prüfe ich die Qibla-Richtung online?",
      a: "Vergleichen Sie zwei Messungen im selben Raum: eine nahe der Wand, die Sie für richtig halten, eine auf der anderen Seite. Stimmen beide auf wenige Grad überein, ist die Messung sauber. Weichen sie ab, ist eine Stelle von Metall oder Magneten beeinflusst, und der Abstand zu Geräten löst das meistens.",
    },
    {
      q: "Wie finde ich die Qibla-Richtung online ohne App?",
      a: "Eine Browserseite genügt. Dieser Qibla-Finder nutzt den Standort und die Kompasssensoren, die Ihr Telefon bereits hat, also keinen Download, kein Konto und keine Berechtigungen außer dem Standort. Nach dem Laden funktioniert die Seite auch ohne mobile Daten weiter.",
    },
    {
      q: "Wie prüfe ich die Qibla online auf Reisen?",
      a: "In einer neuen Stadt ändert sich der Azimut, nehmen Sie also eine frische Messung statt der Zahl von zu Hause. Erlauben Sie den Standort bei der Ankunft, halten Sie das Telefon flach und notieren Sie die Grad. Hotelzimmer und Flughäfen haben viel Stahl — gehen Sie weg vom Aufzugsschacht, vom Fernseher und von der Minibar, bevor Sie dem Pfeil trauen.",
    },
    {
      q: "Wo ist die Qibla online von meinem Standort?",
      a: "Das hängt davon ab, wo Sie stehen. Die Qibla ist die Großkreisrichtung zur Kaaba bei etwa 21,4225° N, 39,8262° O, also ist die Antwort in jeder Stadt anders — west-nordwestlich von Indien, südöstlich von Europa, nordwestlich von Indonesien. Diese Seite zeigt Ihre eigene Zahl statt einer festen Kartenschätzung.",
    },
  ],
  },

  pt: {
  aboutH: "O localizador de Qibla online que funciona de onde você está",
  intro: [    "Esta ferramenta de **Qibla online** responde a uma única pergunta com um toque: para que lado fica a Qibla daqui? Permita a localização, segure o celular na horizontal e a página mostra a **direção da Qibla** numa bússola ao vivo, junto com o rumo em graus. Não há nada para instalar, nenhuma conta para criar e nenhuma espera por atualização de aplicativo — é um **localizador de Qibla online** feito para o momento em que você realmente precisa.",
    "Se você já pesquisou “onde fica a Qibla”, “encontrar a direção da Qibla” ou alguma frase de *direção da Qibla ao vivo* com pressa, já conhece o problema. Quartos de hotel têm um adesivo apontando para uma parede, aplicativos de mesquita pedem download e uma bússola comum informa o norte, mas não o rumo que você precisa. Esta página preenche essa lacuna com uma **seta da direção da Qibla** e um número confiável.",
  ],
  sections: [
  {
    h: "Como a direção da Qibla online é calculada",
    paras: [
      "A Caaba fica a cerca de 21,4225° N, 39,8262° L. O celular informa sua latitude e longitude pelo navegador, e a página calcula o rumo de grande círculo entre os dois pontos — o caminho mais curto sobre a superfície da Terra. O resultado é o valor em **graus da direção da Qibla**, medido no sentido horário a partir do norte verdadeiro.",
      "Como o cálculo usa suas coordenadas reais, a resposta é diferente em cada cidade e continua correta em qualquer viagem. Um rumo de **Qibla na bússola** em Delhi não é o mesmo de Londres ou Jacarta, e esta página recalcula assim que a localização muda, então uma **bússola de Qibla online** numa cidade nova nunca é um palpite da viagem anterior.",
    ],
  },
  {
    h: "Como usar a bússola da direção da Qibla",
    paras: [
      "Abra a página, permita a localização e segure o celular na horizontal à sua frente, com o topo apontando para longe. Gire no lugar até a seta coincidir com a marca: você está de frente para a Qibla. Para o tapete de oração, anote primeiro o rumo e depois estenda o tapete sobre essa linha.",
      "Essa é toda a rotina da **direção da Qibla rápida**: localização, celular na horizontal, girar até a seta travar. Quando você tem só um instante antes da oração, isso leva menos tempo do que abrir a página de uma loja de aplicativos, e a leitura de **direção da Qibla ao vivo** continua atualizando enquanto você gira, em vez de congelar num número.",
    ],
    list: [
      "Afaste-se de ímãs, alto-falantes, notebooks e móveis metálicos antes de confiar no rumo.",
      "Mova o celular em forma de oito duas vezes se a bússola parecer lenta ou instável.",
      "Compare o rumo com a direção do sol ao meio-dia como conferência rápida.",
      "Tire qualquer capa magnética — é o que mais desvia o sensor.",
      "Use uma superfície fixa para o tapete em vez de equilibrar o celular na mão.",
    ],
    listAt: 0,
  },
  {
    h: "Bússola de Qibla online ou aplicativo de celular",
    paras: [
      "Um aplicativo serve se você o usa todos os dias no mesmo lugar. A vantagem de uma página de **localização da Qibla online** é funcionar em qualquer celular que você pegar — um emprestado, um tablet na mesa do hotel, um notebook numa sala onde nunca orou — sem permissões de instalação para resolver.",
      "Ela também é honesta sobre a incerteza. A bússola do celular carrega alguns graus de erro, por isso a página mostra o rumo como número: você vê se está 2° ou 40° fora, o que importa muito mais do que uma agulha que parece confiante. Trate uma leitura do **localizador de Qibla** como precisa em poucos graus e use a seta como resposta prática.",
    ],
  },
  {
    h: "Precisão, interferência e o que esperar em ambientes internos",
    paras: [
      "Duas coisas definem a qualidade de uma leitura em **graus da direção da Qibla**: o magnetômetro e a sua localização. Em ambientes internos o GPS pode variar dezenas de metros, o que quase não muda o rumo a longas distâncias, mas importa se você está longe da Caaba e perto de uma grande estrutura de aço. Vá até uma janela para melhorar a localização.",
      "O erro do magnetômetro é o fator maior. Alto-falantes, suportes magnéticos, mesas de aço, carros e até a ventoinha de um notebook podem puxar a bússola vários graus. Se o número da **direção da Qibla online** oscilar quando você gira devagar, recalibre com o movimento em oito e afaste-se da interferência antes de decidir.",
    ],
  },
  {
    h: "Para quem é esta ferramenta de Qibla online",
    paras: [
      "Viajantes num quarto de hotel desconhecido, trabalhadores procurando um canto para orar, estudantes num alojamento novo e qualquer pessoa cuja mesquita não está à vista. É igualmente útil como conferência: se o adesivo na parede diz uma coisa e a **bússola de Qibla online** diz outra, agora você tem uma segunda opinião com número.",
      "A ferramenta é gratuita e não precisa de conta. Suas coordenadas são usadas na aba para calcular o rumo e nunca são armazenadas, então uma checagem de **direção da Qibla online** não deixa nada. Permita a localização para um rumo exato, ou deixe a página usar uma cidade aproximada a partir do seu IP se você recusar.",
    ],
  },
  {
    h: "A versão curta",
    paras: [
      "Permita a localização, segure o celular na horizontal, gire até a seta coincidir e anote os graus se precisar estender um tapete. Fique longe de ímãs e metal, recalibre se a agulha parecer lenta e considere a leitura boa em poucos graus. Seja qual for a busca — **seta da direção da Qibla**, **encontrar a direção da Qibla** ou **localização da Qibla online** numa cidade nova —, a resposta é a mesma página: grátis, privada e sem instalação.",
    ],
  },
  ],
  guidesH: "Guias recentes do blog da Qibla",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Direção da Qibla em graus da bússola: como o rumo é calculado", desc: "Como o valor em graus da direção da Qibla é obtido: coordenadas, rumo de grande círculo, declinação magnética e dois exemplos que você pode repetir." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Por que minha direção da Qibla está errada? 7 correções que funcionam", desc: "A seta da Qibla parece errada no seu celular? Sete causas, da calibração do sensor às paredes de aço, com correções de menos de um minuto." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Localizador de Qibla: encontre a direção da oração em qualquer lugar", desc: "Encontre a direção da Caaba de qualquer lugar com bússola e localização — o guia completo do localizador de Qibla online." },
  ],
  guidesAll: "Ver todos os guias de Qibla online →",
  faqH: "Perguntas frequentes sobre a Qibla online",
  faq: [
    {
      q: "Como saber a direção da Qibla online?",
      a: "Permita que a página leia sua localização e segure o celular na horizontal à sua frente. A página calcula o rumo das suas coordenadas até a Caaba e o desenha como seta, então você gira no lugar até a seta coincidir. O número ao lado é a sua direção da Qibla em graus a partir do norte verdadeiro.",
    },
    {
      q: "Como encontrar a Qibla online?",
      a: "Abra o localizador de Qibla online, permita o acesso à localização e espere um segundo pela localização do GPS. Segure o celular na horizontal e nivelado, longe de ímãs e metal, e gire devagar até a seta apontar em frente. Nada precisa ser instalado, e a leitura atualiza ao vivo enquanto você gira.",
    },
    {
      q: "Como encontrar a direção da Qibla da minha casa online?",
      a: "Fique no cômodo onde você ora, abra a página e permita a localização. Se o ambiente tem paredes grossas ou telhado de aço, vá até uma janela para melhorar a localização e depois anote o rumo. Escreva ou marque a linha no chão: o mesmo ponto serve todos os dias sem repetir a leitura.",
    },
    {
      q: "Como conferir a direção da Qibla online?",
      a: "Compare duas leituras no mesmo ambiente: uma perto da parede que você acredita estar certa, outra do lado oposto. Se as duas concordarem dentro de poucos graus, a leitura está limpa. Se divergirem, um dos pontos sofre influência de metal ou ímãs, e afastar-se dos aparelhos costuma resolver.",
    },
    {
      q: "Como encontrar a direção da Qibla online sem aplicativo?",
      a: "Uma página no navegador basta. Este localizador de Qibla usa a localização e os sensores de bússola que o celular já tem, então não precisa de download, conta ou permissões além da localização. Depois de carregada, a página continua funcionando mesmo sem dados móveis.",
    },
    {
      q: "Como conferir a Qibla online em viagem?",
      a: "Numa cidade nova o rumo muda, então faça uma leitura nova em vez de reutilizar o número de casa. Permita a localização ao chegar, segure o celular na horizontal e anote os graus. Quartos de hotel e aeroportos têm muito aço, então afaste-se do poço do elevador, da TV e do frigobar antes de confiar na seta.",
    },
    {
      q: "Onde fica a Qibla online a partir da minha localização?",
      a: "Depende de onde você está. A Qibla é a direção de grande círculo até a Caaba, a cerca de 21,4225° N e 39,8262° L, então a resposta é diferente em cada cidade — oeste-noroeste da Índia, sudeste da Europa, noroeste da Indonésia. Esta página mostra o seu próprio número, não um palpite fixo do mapa.",
    },
  ],
  },

  ko: {
  aboutH: "지금 서 있는 자리에서 바로 작동하는 온라인 키블라 파인더",
  intro: [    "이 **온라인 키블라** 도구는 한 번의 터치로 한 가지 질문에 답합니다. 여기서 키블라는 어느 쪽인가? 위치를 허용하고 휴대폰을 평평하게 들면, 페이지가 **키블라 방향**을 실시간 나침반과 각도로 함께 보여 줍니다. 설치할 것도, 계정을 만들 것도, 앱 업데이트를 기다릴 것도 없습니다. 정말로 필요한 그 순간을 위해 만든 **온라인 키블라 파인더**입니다.",
    "“키블라 어디”, “키블라 방향 찾기”, 혹은 *키블라 방향 실시간* 같은 말을 급히 검색해 본 적이 있다면 이미 그 문제를 아실 겁니다. 호텔 방에는 벽을 가리키는 스티커가 붙어 있고, 모스크 앱은 다운로드를 요구하며, 일반 나침반은 북쪽은 알려 주지만 필요한 방위는 알려 주지 않습니다. 이 페이지는 **키블라 방향 화살표**와 믿을 수 있는 숫자로 그 틈을 메웁니다.",
  ],
  sections: [
  {
    h: "온라인 키블라 방향은 어떻게 계산되나",
    paras: [
      "카바는 대략 북위 21.4225°, 동경 39.8262°에 있습니다. 휴대폰은 브라우저를 통해 자신의 위도와 경도를 알려 주고, 페이지는 두 지점 사이의 대권 방위를 계산합니다. 지구 표면을 따라가는 가장 짧은 경로입니다. 그 결과가 진북에서 시계 방향으로 측정한 **키블라 방향 나침반 각도** 값입니다.",
      "실제 좌표로 계산하기 때문에 답은 도시마다 다르고, 여행지에서도 정확합니다. 델리에서의 **나침반 키블라** 방위는 런던이나 자카르타와 같지 않으며, 이 페이지는 위치가 바뀌는 즉시 다시 계산합니다. 새 도시에서 쓰는 **온라인 키블라 나침반**이 지난 여행의 추측이 될 일은 없습니다.",
    ],
  },
  {
    h: "키블라 방향 나침반 사용법",
    paras: [
      "페이지를 열고 위치를 허용한 뒤, 휴대폰 위쪽을 앞으로 향하게 하여 평평하게 듭니다. 화살표가 표식과 일치할 때까지 제자리에서 돌면 키블라를 향하게 됩니다. 예배 매트를 쓸 때는 먼저 방위를 읽고 그 선에 맞춰 매트를 놓으세요.",
      "**빠른 키블라 방향** 확인은 이게 전부입니다. 위치 허용, 평평한 휴대폰, 화살표가 맞을 때까지 회전. 예배 직전에 시간이 없을 때 앱스토어 페이지를 여는 것보다 빠르고, **온라인 키블라 방향 실시간** 값은 한 숫자에 멈춰 있지 않고 돌리는 동안 계속 갱신됩니다.",
    ],
    list: [
      "방위를 믿기 전에 자석, 스피커, 노트북, 금속 가구에서 멀어지세요.",
      "나침반이 느리거나 튀면 휴대폰을 8자 모양으로 두 번 움직이세요.",
      "정오의 태양 방향과 비교해 대략적으로 확인하세요.",
      "자석 케이스는 반드시 벗기세요. 센서를 가장 크게 흔드는 원인입니다.",
      "예배 매트는 휴대폰을 손에 들고 버티기보다 평평한 곳에 두고 쓰세요.",
    ],
    listAt: 0,
  },
  {
    h: "온라인 키블라 나침반과 휴대폰 앱",
    paras: [
      "매일 같은 장소에서 쓴다면 앱도 괜찮습니다. **온라인 키블라 위치** 페이지의 장점은 손에 잡히는 아무 휴대폰에서나 작동한다는 점입니다. 빌린 휴대폰, 호텔 책상 위의 태블릿, 한 번도 예배한 적 없는 방의 노트북에서도 설치 권한과 씨름할 필요가 없습니다.",
      "불확실성에 대해서도 솔직합니다. 휴대폰 나침반에는 몇 도의 오차가 있으므로 페이지는 방위를 숫자로 보여 줍니다. 2° 벗어났는지 40° 벗어났는지 알 수 있는 것이 자신만만해 보이는 바늘보다 훨씬 중요합니다. **키블라 파인더** 판독값은 몇 도 수준의 정확도로 보고, 화살표를 실용적인 답으로 쓰세요.",
    ],
  },
  {
    h: "정확도, 간섭, 실내에서 기대할 수 있는 것",
    paras: [
      "**키블라 방향 나침반 각도** 판독값의 품질을 좌우하는 것은 두 가지입니다. 자력계와 위치 확보입니다. 실내에서 GPS는 수십 미터 흔들릴 수 있는데, 먼 거리에서는 방위가 거의 변하지 않지만 카바에서 멀고 큰 철골 구조물 근처라면 문제가 됩니다. 더 나은 측위를 위해 창가로 이동하세요.",
      "더 큰 요인은 자력계 오차입니다. 스피커, 자석 거치대, 철제 책상, 자동차, 심지어 노트북 팬도 나침반을 몇 도 끌어당길 수 있습니다. 천천히 돌릴 때 **온라인 키블라 방향** 숫자가 흔들리면 8자 동작으로 재보정하고 간섭원에서 멀어진 뒤 판단하세요.",
    ],
  },
  {
    h: "이 온라인 키블라 도구는 누구를 위한 것인가",
    paras: [
      "낯선 호텔 방에 있는 여행자, 예배할 자리를 찾는 직장인, 새 기숙사에 있는 학생, 지역 모스크가 보이지 않는 사람. 교차 확인용으로도 똑같이 유용합니다. 벽의 스티커가 한쪽을 가리키는데 **온라인 키블라 나침반**이 다른 쪽을 가리킨다면, 숫자가 붙은 두 번째 의견이 생기는 셈입니다.",
      "도구는 무료이고 계정이 필요 없습니다. 좌표는 탭 안에서 방위 계산에만 쓰이고 저장되지 않으므로 **온라인 키블라 방향** 확인은 아무것도 남기지 않습니다. 정확한 방위를 위해 위치를 허용하고, 거부하면 IP 주소로 추정한 대략적인 도시로 대신합니다.",
    ],
  },
  {
    h: "짧은 요약",
    paras: [
      "위치를 허용하고, 휴대폰을 평평하게 들고, 화살표가 맞을 때까지 돌고, 매트를 놓아야 한다면 각도를 적어 두세요. 자석과 금속에서 떨어지고, 바늘이 둔하면 재보정하며, 판독값은 몇 도 수준으로 생각하세요. **키블라 방향 화살표**, **키블라 방향 찾기**, 새 도시에서의 **온라인 키블라 위치** 중 무엇을 찾았든 답은 같은 페이지입니다. 무료이고, 개인정보를 지키며, 설치가 없습니다.",
    ],
  },
  ],
  guidesH: "키블라 블로그의 최신 가이드",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "키블라 방향을 나침반 각도로: 방위는 어떻게 계산되나", desc: "키블라 방향의 나침반 각도 값을 구하는 방법. 좌표, 대권 방위, 자기 편각, 그리고 직접 재현할 수 있는 두 가지 계산 예를 설명합니다." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "키블라 방향이 왜 틀릴까? 실제로 효과 있는 7가지 해결법", desc: "휴대폰의 키블라 방향 화살표가 이상한가요? 센서 보정부터 철제 벽까지 일곱 가지 원인과 1분 안에 해볼 수 있는 해결책을 정리했습니다." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "키블라 파인더: 어디서든 예배 방향 찾는 방법", desc: "나침반과 위치 정보를 결합해 어느 장소에서든 카바 방향을 찾는 온라인 키블라 파인더 완전 가이드." },
  ],
  guidesAll: "온라인 키블라 가이드 전체 보기 →",
  faqH: "온라인 키블라에 대한 자주 묻는 질문",
  faq: [
    {
      q: "온라인으로 키블라 방향을 아는 방법은?",
      a: "페이지에 위치 읽기를 허용한 뒤 휴대폰을 평평하게 앞으로 들어 보세요. 페이지가 내 좌표에서 카바까지의 방위를 계산해 화살표로 그려 주므로, 제자리에서 돌며 화살표를 맞추면 됩니다. 옆의 숫자가 진북 기준 키블라 방향 각도입니다.",
    },
    {
      q: "온라인으로 키블라를 찾는 방법은?",
      a: "온라인 키블라 파인더를 열고 위치 접근을 허용한 뒤 GPS 측위를 1초 기다립니다. 휴대폰을 평평하고 수평으로 들고 자석과 금속에서 떨어져, 화살표가 정면을 가리킬 때까지 천천히 돌리세요. 설치할 것이 없고 회전하는 동안 판독값이 실시간으로 갱신됩니다.",
    },
    {
      q: "집에서 온라인으로 키블라 방향을 찾는 방법은?",
      a: "예배하는 방에 서서 페이지를 열고 위치를 허용합니다. 벽이 두껍거나 철제 지붕이라면 더 나은 측위를 위해 창가로 이동한 뒤 방위를 적으세요. 적어 두거나 바닥에 선을 표시하면 같은 자리에서 매일 다시 읽지 않고도 쓸 수 있습니다.",
    },
    {
      q: "온라인으로 키블라 방향을 확인하는 방법은?",
      a: "같은 방에서 두 번 측정해 비교합니다. 맞다고 생각하는 벽 근처와 반대편에서 각각 확인하세요. 둘이 몇 도 이내로 일치하면 판독이 깨끗합니다. 다르다면 한쪽이 금속이나 자석의 영향을 받은 것이며, 가전에서 멀어지면 대개 해결됩니다.",
    },
    {
      q: "앱 없이 온라인으로 키블라 방향을 찾는 방법은?",
      a: "브라우저 페이지 하나면 충분합니다. 이 키블라 파인더는 휴대폰에 이미 있는 위치와 나침반 센서를 쓰므로 다운로드도, 계정도, 위치 외의 권한도 필요하지 않습니다. 한 번 로드되면 모바일 데이터 없이도 계속 작동합니다.",
    },
    {
      q: "여행 중에 온라인으로 키블라를 확인하는 방법은?",
      a: "새 도시에서는 방위가 달라지므로 집에서 쓰던 숫자를 재사용하지 말고 새로 측정하세요. 도착하면 위치를 허용하고 휴대폰을 평평하게 든 뒤 각도를 적습니다. 호텔 방과 공항은 철이 많으므로 엘리베이터 통로, TV, 미니바에서 멀어진 다음 화살표를 믿으세요.",
    },
    {
      q: "내 위치에서 본 키블라는 온라인으로 어디인가요?",
      a: "서 있는 위치에 따라 다릅니다. 키블라는 북위 21.4225°, 동경 39.8262°의 카바로 향하는 대권 방향이므로 도시마다 답이 다릅니다. 인도에서는 서북서, 유럽에서는 남동, 인도네시아에서는 북서입니다. 이 페이지는 지도의 고정된 추측이 아니라 내 위치의 실제 숫자를 보여 줍니다.",
    },
  ],
  },

  it: {
  aboutH: "Il cercatore di Qibla online che funziona da dove sei",
  intro: [    "Questo strumento di **Qibla online** risponde a una sola domanda con un tocco: da che parte è la Qibla da qui? Consenti la posizione, tieni il telefono in piano e la pagina mostra la **direzione della Qibla** su una bussola in tempo reale insieme al rilevamento in gradi. Niente da installare, nessun account da creare, nessuna attesa di aggiornamenti: è un **cercatore di Qibla online** pensato per il momento in cui ti serve davvero.",
    "Se hai mai cercato «dov'è la Qibla», «trovare la direzione della Qibla» o una frase come *direzione della Qibla in tempo reale* scritta di fretta, conosci già il problema. Le camere d'albergo hanno un adesivo che punta a una parete, le app delle moschee chiedono un download e una bussola normale ti dà il nord ma non il rilevamento che ti serve. Questa pagina colma quel vuoto con una **freccia della direzione della Qibla** e un numero di cui fidarti.",
  ],
  sections: [
  {
    h: "Come viene calcolata la direzione della Qibla online",
    paras: [
      "La Kaaba si trova a circa 21,4225° N, 39,8262° E. Il telefono comunica latitudine e longitudine tramite il browser e la pagina calcola il rilevamento ortodromico tra i due punti: il percorso più breve sulla superficie terrestre. Il risultato è il valore in **gradi della direzione della Qibla**, misurato in senso orario dal nord vero.",
      "Poiché il calcolo usa le tue coordinate reali, la risposta cambia in ogni città ed è corretta ovunque viaggi. Un rilevamento della **Qibla con la bussola** a Delhi non è lo stesso di Londra o Giacarta, e questa pagina ricalcola appena la posizione cambia: una **bussola Qibla online** in una città nuova non è mai una supposizione basata sul viaggio precedente.",
    ],
  },
  {
    h: "Come usare la bussola della direzione della Qibla",
    paras: [
      "Apri la pagina, consenti la posizione e tieni il telefono in piano davanti a te, con il bordo superiore rivolto in avanti. Gira su te stesso finché la freccia non si allinea al segno: stai guardando la Qibla. Per il tappeto da preghiera, annota prima il rilevamento e poi stendi il tappeto lungo quella linea.",
      "È tutta qui la routine della **direzione della Qibla rapida**: posizione, telefono in piano, girare finché la freccia non si blocca. Quando hai solo un istante prima della preghiera, ci vuole meno che aprire la pagina di uno store di app, e la **direzione della Qibla in tempo reale** si aggiorna mentre ruoti invece di fermarsi su un numero.",
    ],
    list: [
      "Allontanati da magneti, altoparlanti, portatili e mobili metallici prima di fidarti della direzione.",
      "Muovi il telefono a forma di otto due volte se la bussola sembra lenta o instabile.",
      "Confronta il rilevamento con la direzione del sole a mezzogiorno come controllo rapido.",
      "Togli qualsiasi custodia magnetica: è ciò che altera di più il sensore.",
      "Usa una superficie fissa per il tappeto invece di tenere il telefono in mano.",
    ],
    listAt: 0,
  },
  {
    h: "Bussola Qibla online o app per telefono",
    paras: [
      "Un'app va bene se la usi ogni giorno nello stesso posto. Il vantaggio di una pagina di **posizione della Qibla online** è che funziona su qualsiasi telefono ti capiti in mano: un dispositivo preso in prestito, un tablet sulla scrivania dell'albergo, un portatile in una stanza dove non hai mai pregato, senza permessi di installazione da gestire.",
      "È anche onesta sull'incertezza. Una bussola da telefono porta con sé qualche grado di errore, perciò la pagina mostra il rilevamento come numero: vedi se sei fuori di 2° o di 40°, cosa che conta molto più di un ago che sembra sicuro. Considera una lettura del **cercatore di Qibla** precisa entro un paio di gradi e usa la freccia come risposta pratica.",
    ],
  },
  {
    h: "Precisione, interferenze e cosa aspettarsi al chiuso",
    paras: [
      "Due cose decidono la qualità di una lettura in **gradi della direzione della Qibla**: il magnetometro e il fix della posizione. Al chiuso il GPS può sbagliare di decine di metri, il che cambia poco il rilevamento sulle lunghe distanze ma conta se sei lontano dalla Kaaba e vicino a una grande struttura in acciaio. Avvicinati a una finestra per un fix migliore.",
      "L'errore del magnetometro è il fattore più grande. Altoparlanti, supporti magnetici, scrivanie in acciaio, auto e persino la ventola di un portatile possono spostare una bussola di diversi gradi. Se il numero della **direzione della Qibla online** oscilla quando giri lentamente, ricalibra con il movimento a otto e allontanati dall'interferenza prima di decidere.",
    ],
  },
  {
    h: "A chi serve questo strumento di Qibla online",
    paras: [
      "A chi viaggia in una camera d'albergo sconosciuta, a chi in ufficio cerca un angolo per pregare, a chi studia in un nuovo ostello e a chiunque non abbia la moschea in vista. È altrettanto utile come controprova: se l'adesivo sulla parete dice una cosa e la **bussola Qibla online** un'altra, ora hai un secondo parere con un numero.",
      "Lo strumento è gratuito e non richiede account. Le tue coordinate servono nella scheda per calcolare il rilevamento e non vengono mai memorizzate, quindi un controllo della **direzione della Qibla online** non lascia nulla. Consenti la posizione per un rilevamento esatto, oppure lascia che la pagina usi una città approssimativa dal tuo IP se rifiuti.",
    ],
  },
  {
    h: "La versione breve",
    paras: [
      "Consenti la posizione, tieni il telefono in piano, gira finché la freccia non si allinea e annota i gradi se devi stendere un tappeto. Resta lontano da magneti e metallo, ricalibra se l'ago sembra lento e considera la lettura buona entro un paio di gradi. Che tu abbia cercato una **freccia della direzione della Qibla**, **trovare la direzione della Qibla** o una **posizione della Qibla online** da una città nuova, la risposta è la stessa pagina: gratuita, privata e senza installazione.",
    ],
  },
  ],
  guidesH: "Ultime guide dal blog della Qibla",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Direzione della Qibla in gradi di bussola: come si calcola il rilevamento", desc: "Come si ottiene il valore in gradi della direzione della Qibla: coordinate, rilevamento ortodromico, declinazione magnetica e due esempi che puoi ripetere." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Perché la mia direzione della Qibla è sbagliata? 7 soluzioni che funzionano", desc: "La freccia della Qibla sembra sbagliata sul telefono? Sette cause, dalla calibrazione del sensore ai muri in acciaio, con soluzioni in meno di un minuto." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Cercatore di Qibla: trovare la direzione della preghiera ovunque", desc: "Trova la direzione della Kaaba da qualsiasi luogo con bussola e posizione: la guida completa al cercatore di Qibla online." },
  ],
  guidesAll: "Vedi tutte le guide della Qibla online →",
  faqH: "Domande frequenti sulla Qibla online",
  faq: [
    {
      q: "Come conoscere la direzione della Qibla online?",
      a: "Consenti alla pagina di leggere la posizione, poi tieni il telefono in piano davanti a te. La pagina calcola il rilevamento dalle tue coordinate alla Kaaba e lo disegna come freccia, così puoi girare sul posto finché la freccia non si allinea. Il numero accanto è la tua direzione della Qibla in gradi dal nord vero.",
    },
    {
      q: "Come trovare la Qibla online?",
      a: "Apri il cercatore di Qibla online, consenti l'accesso alla posizione e aspetta un secondo per il fix GPS. Tieni il telefono in piano e livellato, lontano da magneti e metallo, e gira lentamente finché la freccia non punta dritto davanti a te. Niente da installare e la lettura si aggiorna in tempo reale mentre ruoti.",
    },
    {
      q: "Come trovare la direzione della Qibla da casa online?",
      a: "Mettiti nella stanza dove preghi, apri la pagina e consenti la posizione. Se la stanza ha muri spessi o un tetto in acciaio, avvicinati a una finestra per un fix migliore, poi annota il rilevamento. Scrivilo o segna la linea sul pavimento: lo stesso punto vale ogni giorno senza ripetere la lettura.",
    },
    {
      q: "Come verificare la direzione della Qibla online?",
      a: "Confronta due letture nella stessa stanza: una vicino alla parete che credi corretta, una dal lato opposto. Se concordano entro un paio di gradi, la lettura è pulita. Se differiscono, uno dei punti subisce metallo o magneti, e allontanarsi dagli elettrodomestici di solito risolve.",
    },
    {
      q: "Come trovare la direzione della Qibla online senza app?",
      a: "Basta una pagina del browser. Questo cercatore di Qibla usa la posizione e i sensori della bussola che il telefono ha già, quindi non serve download, né account, né permessi oltre alla posizione. Una volta caricata, la pagina continua a funzionare anche senza dati mobili.",
    },
    {
      q: "Come verificare la Qibla online in viaggio?",
      a: "In una città nuova il rilevamento cambia, quindi fai una lettura nuova invece di riusare il numero di casa. Consenti la posizione all'arrivo, tieni il telefono in piano e annota i gradi. Camere d'albergo e aeroporti hanno molto acciaio: allontanati dal vano ascensore, dalla TV e dal minibar prima di fidarti della freccia.",
    },
    {
      q: "Dov'è la Qibla online dalla mia posizione?",
      a: "Dipende da dove ti trovi. La Qibla è la direzione ortodromica verso la Kaaba, a circa 21,4225° N e 39,8262° E, quindi la risposta è diversa in ogni città: ovest-nord-ovest dall'India, sud-est dall'Europa, nord-ovest dall'Indonesia. Questa pagina mostra il tuo numero e non una stima fissa sulla mappa.",
    },
  ],
  },

  nl: {
  aboutH: "De online Qibla-zoeker die werkt vanaf waar je staat",
  intro: [    "Deze **online Qibla**-tool beantwoordt één vraag met één tik: welke kant is de Qibla vanaf hier? Sta locatie toe, houd de telefoon plat en de pagina toont de **Qibla-richting** op een live kompas, samen met de peiling in graden. Er is niets te installeren, geen account nodig en je hoeft niet te wachten tot een app is bijgewerkt — het is een **online Qibla-zoeker** gebouwd voor het moment waarop je hem echt nodig hebt.",
    "Heb je ooit gezocht op “waar is de qibla-richting”, “qibla-richting vinden” of een *live qibla-richting online* die je snel intypte, dan ken je het probleem. Hotelkamers hebben een sticker naar een muur, moskee-apps willen een download, en een gewoon kompas geeft je het noorden maar niet de peiling die je nodig hebt. Deze pagina dicht dat gat met een **Qibla-richtingpijl** en een getal dat je kunt vertrouwen.",
  ],
  sections: [
  {
    h: "Hoe de online Qibla-richting wordt berekend",
    paras: [
      "De Kaaba ligt op ongeveer 21,4225° N, 39,8262° O. Je telefoon geeft via de browser zijn eigen breedte- en lengtegraad door, en de pagina berekent de grootcirkelpeiling tussen de twee punten — het kortste pad over het aardoppervlak. Het resultaat is je waarde in **Qibla-richting kompasgraden**, gemeten met de klok mee vanaf het ware noorden.",
      "Omdat de berekening je echte coördinaten gebruikt, is het antwoord in elke stad anders en klopt het waar je ook reist. Een **kompas Qibla**-peiling in Delhi is niet dezelfde als in Londen of Jakarta, en deze pagina herberekent op het moment dat je locatie verandert, zodat een **online Qibla-kompas** in een nieuwe stad nooit een gok is op basis van je vorige reis.",
    ],
  },
  {
    h: "Zo gebruik je het Qibla-richtingkompas",
    paras: [
      "Open de pagina, sta locatie toe en houd de telefoon plat voor je met de bovenkant van je af. Draai op de plek rond tot de pijl gelijkloopt met de markering; dan kijk je richting de Qibla. Voor een gebedskleed noteer je eerst de peiling en leg je het kleed daarna langs die lijn.",
      "Dat is de hele routine voor een **snelle Qibla-richting**: locatie, platte telefoon, draaien tot de pijl vastklikt. Als je maar even hebt voor het gebed, kost het minder tijd dan een appstore-pagina openen, en de uitlezing van de **live Qibla-richting online** blijft verversen terwijl je draait in plaats van op één getal te bevriezen.",
    ],
    list: [
      "Blijf uit de buurt van magneten, luidsprekers, laptops en metalen meubels voordat je de richting vertrouwt.",
      "Beweeg de telefoon twee keer in een acht als het kompas traag of springerig aanvoelt.",
      "Vergelijk de peiling met de stand van de zon rond het middaguur als ruwe controle.",
      "Doe een magnetische hoes af — die beïnvloedt de sensor meer dan wat dan ook.",
      "Gebruik een vaste ondergrond voor een gebedskleed in plaats van de telefoon in de hand te balanceren.",
    ],
    listAt: 0,
  },
  {
    h: "Online Qibla-kompas versus een telefoon-app",
    paras: [
      "Een app is prima als je hem elke dag op dezelfde plek gebruikt. Het voordeel van een pagina met een **online Qibla-locatie** is dat hij werkt op elke telefoon die je oppakt — een geleende telefoon, een tablet op een hotelbureau, een laptop in een kamer waar je nooit eerder hebt gebeden — zonder installatietoestemmingen waar je doorheen moet.",
      "Hij is ook eerlijk over onzekerheid. Een telefoonkompas heeft een paar graden fout, dus de pagina toont de peiling als getal: je ziet of je 2° of 40° ernaast zit, wat veel belangrijker is dan een naald die zelfverzekerd kijkt. Behandel een uitlezing van de **Qibla-zoeker** als nauwkeurig tot een paar graden, en gebruik de pijl als het praktische antwoord.",
    ],
  },
  {
    h: "Nauwkeurigheid, storing en wat je binnenshuis kunt verwachten",
    paras: [
      "Twee dingen bepalen hoe goed een uitlezing in **Qibla-richting kompasgraden** is: de magnetometer en je locatiebepaling. Binnen kan GPS tientallen meters afwijken, wat over grote afstanden de peiling nauwelijks verandert, maar wel uitmaakt als je ver van de Kaaba bent en bij een grote staalconstructie staat. Ga naar een raam voor een betere bepaling.",
      "De fout van de magnetometer weegt zwaarder. Luidsprekers, magnetische telefoonhouders, stalen bureaus, auto's en zelfs een laptopventilator kunnen een kompas meerdere graden wegtrekken. Zwaait het getal van de **online Qibla-richting** terwijl je langzaam draait, kalibreer dan met de achtbeweging en stap weg van de storing voordat je verdergaat.",
    ],
  },
  {
    h: "Voor wie deze online Qibla-tool is",
    paras: [
      "Reizigers in een onbekende hotelkamer, kantoormedewerkers die een hoek zoeken om te bidden, studenten in een nieuw hostel, en iedereen wiens moskee buiten zicht is. Hij is net zo nuttig als tweede controle: als de sticker op de muur iets anders zegt dan het **online Qibla-kompas**, heb je nu een tweede mening met een getal erbij.",
      "De tool is gratis en vraagt geen account. Je coördinaten worden in het tabblad gebruikt om de peiling te berekenen en nooit opgeslagen, dus een controle van de **online Qibla-richting** laat niets achter: sta locatietoegang toe voor een exacte peiling, of laat de pagina terugvallen op een geschatte stad op basis van je IP-adres als je weigert.",
    ],
  },
  {
    h: "De korte versie",
    paras: [
      "Sta locatie toe, houd de telefoon plat, draai tot de pijl gelijkloopt en noteer de graden als je een kleed wilt uitleggen. Blijf uit de buurt van magneten en metaal, kalibreer opnieuw als de naald traag aanvoelt, en beschouw de uitlezing als goed tot een paar graden. Of je nu zocht op een **Qibla-richtingpijl**, **Qibla-richting vinden** of een **online Qibla-locatie** vanuit een nieuwe stad, het antwoord is dezelfde pagina — gratis, privé en zonder installatie.",
    ],
  },
  ],
  guidesH: "Nieuwste gidsen uit de Qibla-blog",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Qibla-richting in kompasgraden: hoe de peiling wordt berekend", desc: "Hoe de waarde in qibla-richting kompasgraden tot stand komt: coördinaten, de grootcirkelpeiling, magnetische declinatie en twee uitgewerkte voorbeelden om te herhalen." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Waarom is mijn Qibla-richting verkeerd? 7 oplossingen die werken", desc: "Lijkt de Qibla-richtingpijl verkeerd op je telefoon? Zeven oorzaken, van sensorkalibratie tot stalen muren, met oplossingen die je elk in minder dan een minuut probeert." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Qibla-zoeker: vind de gebedsrichting overal", desc: "Vind de richting van de Kaaba vanaf elke locatie met kompas- en locatie-integratie — de volledige gids voor de online Qibla-zoeker." },
  ],
  guidesAll: "Bekijk alle online Qibla-gidsen →",
  faqH: "Veelgestelde vragen over de online Qibla",
  faq: [
    {
      q: "Hoe weet ik de Qibla-richting online?",
      a: "Sta de pagina toe je locatie te lezen en houd de telefoon plat voor je. De pagina berekent de peiling van je eigen coördinaten naar de Kaaba en tekent die als pijl, zodat je op de plek kunt draaien tot de pijl gelijkloopt. Het getal ernaast is je Qibla-richting in graden vanaf het ware noorden.",
    },
    {
      q: "Hoe vind ik de Qibla online?",
      a: "Open de online Qibla-zoeker, sta locatietoegang toe en wacht een seconde op de GPS-bepaling. Houd de telefoon plat en waterpas, weg van magneten en metaal, en draai langzaam tot de pijl recht vooruit wijst. Er hoeft niets geïnstalleerd te worden en de uitlezing ververst live terwijl je draait.",
    },
    {
      q: "Hoe vind ik de Qibla-richting online vanuit mijn huis?",
      a: "Ga staan in de kamer waar je bidt, open de pagina en sta locatie toe. Heeft de kamer dikke muren of een stalen dak, ga dan naar een raam voor een betere bepaling en noteer daarna de peiling. Schrijf hem op of markeer de lijn op de vloer; dezelfde plek werkt elke dag zonder opnieuw te meten.",
    },
    {
      q: "Hoe controleer ik de Qibla-richting online?",
      a: "Vergelijk twee uitlezingen in dezelfde kamer: één bij de muur waarvan je denkt dat hij klopt, één aan de andere kant. Komen beide binnen een paar graden overeen, dan is de uitlezing schoon. Verschillen ze, dan wordt één plek beïnvloed door metaal of magneten, en meestal lost weglopen bij apparaten het op.",
    },
    {
      q: "Hoe vind ik de Qibla-richting online zonder app?",
      a: "Een browserpagina is genoeg. Deze Qibla-zoeker gebruikt de locatie en kompassensoren die je telefoon al heeft, dus er is geen download, geen account en geen toestemming nodig buiten locatie. Zodra de pagina geladen is blijft hij werken, ook zonder mobiele data.",
    },
    {
      q: "Hoe controleer ik de Qibla online als ik reis?",
      a: "In een nieuwe stad verandert de peiling, dus neem een nieuwe uitlezing in plaats van het getal van thuis te hergebruiken. Sta bij aankomst locatie toe, houd de telefoon plat en noteer de graden. Hotelkamers en luchthavens hebben veel staal, dus stap weg van de liftschacht, de tv en de minibar voordat je de pijl vertrouwt.",
    },
    {
      q: "Is de Qibla-richting hetzelfde voor elke kamer in mijn stad?",
      a: "In de praktijk wel. De Qibla is een grootcirkelpeiling naar de Kaaba, ongeveer 21,4225° N, 39,8262° O, en binnen één stad verandert die peiling veel minder dan de nauwkeurigheid van een telefoonsensor. Een paar kilometer verplaatsing verschuift de hoek met een fractie van een graad, dus het getal dat je thuis meet geldt ook in de moskee, op kantoor en in de buurstad.",
    },
    {
      q: "Waarom wijkt de Qibla-pijl af van de kompasapp op mijn telefoon?",
      a: "Twee redenen: ware noorden versus magnetische noorden, en sensorkalibratie. Een kompasapp toont misschien het magnetische noorden terwijl de Qibla-peiling vanaf het ware noorden wordt gemeten, en het verschil daartussen, de magnetische declinatie, loopt in sommige streken op tot 10–20°. Drift van de magnetometer voegt nog een paar graden toe. Leg de telefoon plat, beweeg hem in een acht door de lucht om opnieuw te kalibreren en vergelijk daarna opnieuw voordat je beslist welke uitlezing fout is.",
    },
    {
      q: "Wat is magnetische declinatie en waarom is die belangrijk voor de Qibla?",
      a: "Magnetische declinatie is de hoek tussen het magnetische noorden, dat een magnetometer waarneemt, en het ware noorden, dat kaarten en peilingen gebruiken. De Qibla-richting is gedefinieerd ten opzichte van het ware noorden, dus deze pagina past de declinatie van jouw locatie toe voordat de pijl wordt getekend. Kopieer je de graden en gebruik je ze met een magnetisch kompas in plaats van met een ware-noordenreferentie, dan wordt de declinatie twee keer toegepast en loopt de richting weg.",
    },
    {
      q: "Kan ik de Qibla-zoeker gebruiken zonder GPS aan te zetten?",
      a: "Dat kan, maar dan moet je de coördinaten op een andere manier aanleveren. Zonder locatietoestemming weet de pagina niet waar je bent, dus heeft de pijl niets om naar te wijzen. Wil je geen GPS delen, zoek dan je breedte- en lengtegraad op een kaart op, voer ze in waar de pagina handmatige invoer toestaat, of noteer de graden terwijl locatie even aan staat en zet hem daarna weer uit.",
    },
    {
      q: "Hoe nauwkeurig is de Qibla-richting op deze pagina?",
      a: "De wiskunde is exact tot een fractie van een graad; de beperkingen komen van GPS en de magnetometer. Een GPS-bepaling is meestal tot een paar meter nauwkeurig, wat op continentale afstanden niet uitmaakt, terwijl een telefoonkompas realistisch tot 2–5° nauwkeurig is. Dat is veel preciezer dan nodig, want zelfs één graad fout over twee meter gebedsruimte is maar drie centimeter afwijking.",
    },
    {
      q: "Waar is de Qibla online vanaf mijn locatie?",
      a: "Dat hangt af van waar je staat. De Qibla is de grootcirkelrichting naar de Kaaba op ongeveer 21,4225° N, 39,8262° O, dus het antwoord is in elke stad anders — westnoordwest vanaf India, zuidoost vanaf Europa, noordwest vanaf Indonesië. Deze pagina toont jouw eigen getal in plaats van een vaste gok van een kaart.",
    },
  ],
  },

  sv: {
  aboutH: "Online qibla-sökaren som fungerar där du står",
  intro: [    "Det här **online qibla**-verktyget svarar på en fråga med ett tryck: vilket håll är qibla åt härifrån? Tillåt plats, håll telefonen plant och sidan visar **qibla-riktningen** på en levande kompass tillsammans med bäringen i grader. Det finns inget att installera, inget konto att skapa och ingen väntan på en appuppdatering — det är en **online qibla-sökare** byggd för ögonblicket då du faktiskt behöver den.",
    "Har du någon gång sökt på “var är qibla-riktningen”, “hitta qibla-riktning” eller en *live qibla-riktning online* som du skrev i all hast, så känner du igen problemet. Hotellrum har en dekal som pekar mot en vägg, moskéappar vill laddas ner, och en vanlig kompass ger dig norr men inte den bäring du behöver. Den här sidan stänger gapet med en **qibla-riktningspil** och en siffra du kan lita på.",
  ],
  sections: [
  {
    h: "Hur online qibla-riktning beräknas",
    paras: [
      "Kaba ligger på ungefär 21,4225° N, 39,8262° Ö. Din telefon rapporterar sin egen latitud och longitud via webbläsaren, och sidan beräknar storcirkelbäringen mellan de två punkterna — den kortaste vägen över jordytan. Resultatet är ditt värde i **qibla-riktning kompassgrader**, mätt medurs från rätt norr.",
      "Eftersom matematiken använder dina verkliga koordinater är svaret olika i varje stad, och det stämmer var du än reser. En **kompass qibla**-bäring i Delhi är inte densamma som i London eller Jakarta, och den här sidan räknar om i samma stund som platsen ändras, så en **online qibla-kompass** i en ny stad aldrig är en gissning från förra resan.",
    ],
  },
  {
    h: "Så använder du qibla-riktningskompassen",
    paras: [
      "Öppna sidan, tillåt plats och håll telefonen plant framför dig med ovansidan bort från dig. Vrid dig på stället tills pilen linjerar med markören, och då är du vänd mot qibla. För en bönematta noterar du bäringen först och lägger sedan mattan längs den linjen.",
      "Det är hela rutinen för en **snabb qibla-riktning**: plats, plan telefon, vrid tills pilen låser. När du bara har en stund före bönen tar det kortare tid än att öppna en appbutikssida, och avläsningen av **live qibla-riktning online** uppdateras medan du roterar i stället för att frysa på en siffra.",
    ],
    list: [
      "Stå borta från magneter, högtalare, laptops och metallmöbler innan du litar på riktningen.",
      "Rör telefonen i en åtta två gånger om kompassen känns trög eller hackig.",
      "Jämför bäringen med solens läge vid middagstid som en grov kontroll.",
      "Ta av eventuellt magnetiskt skal — det påverkar sensorn mer än något annat.",
      "Använd ett fast underlag för bönemattan i stället för att balansera telefonen i handen.",
    ],
    listAt: 0,
  },
  {
    h: "Online qibla-kompass kontra en telefonapp",
    paras: [
      "En app är bra om du använder den varje dag på samma plats. Fördelen med en sida för **online qibla-plats** är att den fungerar på vilken telefon du än tar upp — en lånad telefon, en surfplatta på ett hotellskrivbord, en laptop i ett rum där du aldrig har bett förut — utan installationstillstånd att kämpa sig igenom.",
      "Den är också ärlig om osäkerheten. En telefonkompass har några graders fel, så sidan visar bäringen som en siffra: du ser om du ligger 2° eller 40° fel, vilket betyder långt mer än en nål som ser självsäker ut. Behandla en avläsning från **qibla-sökaren** som noggrann till ett par grader, och använd pilen som det praktiska svaret.",
    ],
  },
  {
    h: "Noggrannhet, störningar och vad du kan vänta dig inomhus",
    paras: [
      "Två saker avgör hur bra en avläsning i **qibla-riktning kompassgrader** är: magnetometern och din positionsbestämning. Inomhus kan GPS driva tiotals meter, vilket knappt ändrar bäringen över långa avstånd men spelar roll om du är långt från Kaba och nära en stor stålkonstruktion. Gå till ett fönster för en bättre bestämning.",
      "Magnetometerns fel väger tyngre. Högtalare, magnetiska telefonhållare, stålbord, bilar och till och med en laptopfläkt kan dra en kompass flera grader. Svänger siffran för **online qibla-riktning** när du roterar långsamt, kalibrera med åttarörelsen och stig bort från störningen innan du bestämmer dig.",
    ],
  },
  {
    h: "Vem det här online qibla-verktyget är för",
    paras: [
      "Resenärer i ett okänt hotellrum, kontorsarbetare som letar efter ett hörn att be i, studenter i ett nytt vandrarhem, och alla vars lokala moské är utom synhåll. Den är lika användbar som en andra kontroll: säger dekalen på väggen en sak och **online qibla-kompassen** en annan har du nu en andra åsikt med en siffra på.",
      "Verktyget är gratis och kräver inget konto. Dina koordinater används i fliken för att beräkna bäringen och sparas aldrig, så en kontroll av **online qibla-riktning** lämnar inget efter sig: tillåt platsåtkomst för en exakt bäring, eller låt sidan falla tillbaka på en ungefärlig stad från din IP-adress om du avböjer.",
    ],
  },
  {
    h: "Kortversionen",
    paras: [
      "Tillåt plats, håll telefonen plant, vrid tills pilen linjerar och notera graderna om du behöver lägga ut en matta. Håll dig borta från magneter och metall, kalibrera om om nålen känns trög, och se avläsningen som god till ett par grader. Vare sig du sökte på en **qibla-riktningspil**, **hitta qibla-riktning** eller en **online qibla-plats** från en ny stad är svaret samma sida — gratis, privat och utan installation.",
    ],
  },
  ],
  guidesH: "Senaste guiderna från qibla-bloggen",
  guides: [
    { href: "/onlineqibla/blog/qibla-direction-compass-degrees/", title: "Qibla-riktning i kompassgrader: så beräknas bäringen", desc: "Hur värdet i qibla-riktning kompassgrader tas fram: koordinater, storcirkelbäringen, magnetisk deklination och två uträknade exempel du kan upprepa." },
    { href: "/onlineqibla/blog/why-is-my-qibla-direction-wrong/", title: "Varför är min qibla-riktning fel? 7 lösningar som fungerar", desc: "Ser qibla-riktningspilen fel ut i telefonen? Sju orsaker, från sensorkalibrering till stålväggar, med lösningar du kan prova på under en minut var." },
    { href: "/onlineqibla/blog/how-to-find-qibla-direction-anywhere/", title: "Qibla-sökare: hitta bönens riktning var som helst", desc: "Hitta riktningen till Kaba från vilken position som helst med kompass- och platsintegration — den fullständiga guiden till online qibla-sökaren." },
  ],
  guidesAll: "Se alla guider för online qibla →",
  faqH: "Vanliga frågor om online qibla",
  faq: [
    {
      q: "Hur vet jag qibla-riktningen online?",
      a: "Tillåt sidan att läsa din position och håll telefonen plant framför dig. Sidan beräknar bäringen från dina egna koordinater till Kaba och ritar den som en pil, så du kan vrida dig på stället tills pilen linjerar. Siffran bredvid är din qibla-riktning i grader från rätt norr.",
    },
    {
      q: "Hur hittar jag qibla online?",
      a: "Öppna online qibla-sökaren, tillåt platsåtkomst och vänta en sekund på GPS-bestämningen. Håll telefonen plant och i våg, borta från magneter och metall, och vrid långsamt tills pilen pekar rakt fram. Inget behöver installeras och avläsningen uppdateras live medan du roterar.",
    },
    {
      q: "Hur hittar jag qibla-riktningen online från mitt hem?",
      a: "Ställ dig i rummet där du ber, öppna sidan och tillåt plats. Har rummet tjocka väggar eller ståltak går du till ett fönster för en bättre bestämning och noterar sedan bäringen. Skriv upp den eller markera linjen på golvet, och samma plats fungerar varje dag utan att du mäter igen.",
    },
    {
      q: "Hur kontrollerar jag qibla-riktningen online?",
      a: "Jämför två avläsningar i samma rum: en nära väggen du tror är rätt, en på andra sidan. Stämmer båda inom ett par grader är avläsningen ren. Skiljer de sig påverkas en av platserna av metall eller magneter, och att flytta bort från apparater brukar lösa det.",
    },
    {
      q: "Hur hittar jag qibla-riktningen online utan app?",
      a: "En webbläsarsida räcker. Den här qibla-sökaren använder den plats och de kompassensorer som telefonen redan har, så det behövs ingen nedladdning, inget konto och inga tillstånd utöver plats. När sidan väl är laddad fortsätter den fungera även utan mobildata.",
    },
    {
      q: "Hur kontrollerar jag qibla online när jag reser?",
      a: "I en ny stad ändras bäringen, så ta en ny avläsning i stället för att återanvända siffran hemifrån. Tillåt plats vid ankomst, håll telefonen plant och notera graderna. Hotellrum och flygplatser innehåller mycket stål, så stig bort från hisschaktet, tv:n och minibaren innan du litar på pilen.",
    },
    {
      q: "Är qibla-riktningen densamma för alla rum i min stad?",
      a: "I praktiken ja. Qibla är en storcirkelbäring till Kaba, ungefär 21,4225° N, 39,8262° Ö, och inom en enda stad ändras den bäringen långt mindre än noggrannheten hos en telefonsensor. Några kilometers förflyttning ändrar vinkeln med en bråkdel av en grad, så siffran du mäter hemma gäller i moskén, på kontoret och i grannstaden.",
    },
    {
      q: "Varför skiljer sig qibla-pilen från kompassappen i telefonen?",
      a: "Två skäl: rätt norr kontra magnetiskt norr, och sensorkalibrering. En kompassapp kan visa magnetiskt norr medan qibla-bäringen mäts från rätt norr, och skillnaden dem emellan, den magnetiska deklinationen, når 10–20° i vissa regioner. Drift i magnetometern lägger till några grader till. Lägg telefonen plant, rör den i en åtta i luften för att kalibrera om och jämför igen innan du avgör vilken avläsning som är fel.",
    },
    {
      q: "Vad är magnetisk deklination och varför spelar den roll för qibla?",
      a: "Magnetisk deklination är vinkeln mellan magnetiskt norr, som en magnetometer känner av, och rätt norr, som kartor och bäringar använder. Qibla-riktningen definieras mot rätt norr, så den här sidan lägger till din plats deklination innan pilen ritas. Kopierar du graderna och använder dem med en magnetisk kompass i stället för en referens mot rätt norr, appliceras deklinationen två gånger och riktningen driver iväg.",
    },
    {
      q: "Kan jag använda qibla-sökaren utan att slå på GPS?",
      a: "Det går, men då måste du ange koordinaterna på annat sätt. Utan platsbehörighet vet sidan inte var du är, så pilen har inget att peka mot. Vill du inte dela GPS kan du slå upp din latitud och longitud på en karta, ange dem där sidan tillåter manuell inmatning, eller helt enkelt notera graderna medan platsen är på en kort stund och sedan stänga av den igen.",
    },
    {
      q: "Hur noggrann är qibla-riktningen som visas här?",
      a: "Matematiken är exakt till en bråkdel av en grad; begränsningarna kommer från GPS och magnetometern. En GPS-bestämning är oftast bra till några meter, vilket saknar betydelse på kontinentala avstånd, medan en telefonkompass realistiskt är bra till 2–5°. Det är långt mer precis än nödvändigt, eftersom till och med en grads fel över två meter böneutrymme bara är tre centimeters förskjutning.",
    },
    {
      q: "Var är qibla online från min position?",
      a: "Det beror på var du står. Qibla är storcirkelriktningen till Kaba på ungefär 21,4225° N, 39,8262° Ö, så svaret är olika i varje stad — västnordväst från Indien, sydost från Europa, nordväst från Indonesien. Den här sidan visar din egen siffra i stället för en fast gissning från en karta.",
    },
  ],
  },
};
