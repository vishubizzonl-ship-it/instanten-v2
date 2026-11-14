/**
 * Localised long-form copy for the compass silo.
 *
 * Why this file exists: the UI strings in ui.ts covered buttons, labels and
 * FAQ headings, but the SEO body of each page was hardcoded English. A Japanese
 * visitor got a Japanese nav above thirteen paragraphs of English, and the page
 * could never rank for Japanese keywords.
 *
 * Rules followed here:
 *  - English is the source of truth and the fallback. A locale that is missing a
 *    key falls back to English rather than rendering nothing.
 *  - Paragraphs are HTML strings so the <strong> keyword emphasis survives; the
 *    content is static and authored here, never user input.
 *  - The emphasised phrase in each translation is the term people actually
 *    search for in that language, not a word-for-word copy of the English one.
 */

export type CompassProse = {
  h2: string;
  intro: string[];
  sections: { h3: string; paras: string[] }[];
};

const en: CompassProse = {
  h2: 'The free online compass that works in your browser',
  intro: [
    'This <strong>online compass</strong> turns any phone, tablet or laptop into a working <strong>compass tool</strong> in a single tap. There is nothing to download, no account to create and no app store waiting time — you open the page and the dial starts tracking the direction you are facing. It is a <strong>free online compass</strong> built for one job: telling you where north is, right now, wherever you happen to be standing.',
    'If you have ever searched for “<em>where is north</em>”, “<em>north direction</em>” or “<em>compass to find north</em>”, you already know the problem. You are in a new street, a parked car, a hotel room or a campsite, and your sense of direction has stopped helping. A <strong>mobile compass</strong> on a screen solves that in seconds. The <strong>compass online</strong> reading updates as you turn, so the needle never lies about which way you are pointing.',
  ],
  sections: [
    {
      h3: 'What an online compass actually shows you',
      paras: [
        'The dial shows a <strong>compass direction</strong> in degrees and in words. Degrees run from 0° at north, clockwise through 90° at east, 180° at south and 270° at west. The words split the circle into eight named directions, so you see north, north-east, east, south-east, south, south-west, west and north-west without doing any arithmetic. When people ask for a <strong>directions compass</strong>, this is what they mean: a reading you can act on immediately, in the same language you would use to give someone instructions.',
        'Because the dial is live, this is a <strong>live compass</strong> rather than a picture of one. Rotate your device and the needle holds its bearing while the bezel turns. That single behaviour is what separates a real <strong>compass digital</strong> readout from a static illustration, and it is why the page works as an <strong>online compass direction</strong> guide while you walk.',
      ],
    },
    {
      h3: 'How to find north with an online compass',
      paras: [
        'To use this <strong>online compass to find north</strong>, hold the device flat and away from metal, magnets and laptop speakers. Tap the enable button so the browser can read the magnetometer, then turn slowly on the spot. The needle settles within a second or two. The red tip marks north; everything else — south, east and west — follows from it. If the value jumps around, lift the phone away from the desk, take a step outside and try again.',
        'Browsers only share sensor data after you allow it, which is why the tool asks once and then remembers. That permission prompt is also the reason a <strong>free online compass</strong> like this one can run entirely on your device: the reading is calculated locally, so no location history is uploaded and nothing is stored on a server. The same page keeps working with a weak signal, and once it has loaded it will keep showing a heading even if you lose data in the middle of a field.',
      ],
    },
    {
      h3: 'Online compass tool vs a physical compass',
      paras: [
        'A traditional baseplate compass is dependable, silent and never runs out of battery. It also asks you to hold it level, line up the bezel and read a scale. An <strong>online compass tool</strong> replaces that ritual with a number. For a quick “which way am I facing” check it is faster; for a multi-hour hike in poor weather, a physical compass plus a paper map is still the safer pairing. Many people carry both and treat the <strong>compass online</strong> page as the fast second opinion.',
        'It is also worth knowing what the tool cannot do. A phone compass reads magnetic north, which drifts from true north by an amount that depends on where you are — a difference called magnetic declination. Near large metal structures, in a car, or next to a magnet, the reading can be off by several degrees until you recalibrate by moving the device in a figure-eight. Treat the <strong>online compass direction</strong> as a strong hint rather than a survey instrument, and it will serve you well.',
      ],
    },
    {
      h3: 'Who uses a free online compass every day',
      paras: [
        'City walkers use it to get their bearings after leaving a metro station. Drivers use it to confirm which end of a car park they entered. Photographers use it to note the direction of the light. Hikers, surveyors, delivery riders, birdwatchers and students on a field trip all reach for the same thing: a <strong>compass free</strong> of installers, ads in the way of the dial, and sign-up screens. That is the whole design brief here — one dial, one heading, no clutter.',
        'On a desktop or laptop, the page still loads and still explains the reading, but the needle needs a magnetometer that most computers do not have. On those devices the tool is best used as a reference: read about the <strong>north direction</strong>, then open the same page on your phone when you step outside. Nothing is lost — the layout is responsive and the dial scales to whatever screen you are holding.',
      ],
    },
    {
      h3: 'Reading compass directions without guessing',
      paras: [
        'The four cardinal points are easy: <strong>north</strong> ahead of the needle, <strong>south</strong> behind it, <strong>east</strong> to your right and <strong>west</strong> to your left — as long as the device is flat and the dial is not upside down. The four in-between points cover the gaps, and a degree reading covers everything else. Once you know that a bearing of 135° is south-east, you can translate any number the <strong>online compass</strong> shows into a direction you can say out loud, which is exactly what you need when you are the one giving directions.',
        'Practise once at home. Stand still, note the heading, turn ninety degrees and note it again. If the second reading is roughly the first plus or minus ninety, your <strong>mobile compass</strong> is behaving. If it is not, calibrate and repeat. Two minutes of that makes every later reading trustworthy, whether you are finding <strong>north</strong> in an unfamiliar city or checking that a tent door faces the sunrise.',
      ],
    },
  ],
};

const ja: CompassProse = {
  h2: 'ブラウザでそのまま使える無料のオンラインコンパス',
  intro: [
    'この<strong>オンラインコンパス</strong>は、スマートフォン・タブレット・ノートPCをワンタップで使える<strong>コンパスツール</strong>に変えます。ダウンロードもアカウント登録もアプリストアでの待ち時間もありません。ページを開けば、<strong>方位磁針</strong>が今向いている方角を追い始めます。<strong>無料のオンラインコンパス</strong>としての役割はただ一つ、立っているその場所で北がどちらかを、その場で示すことです。',
    '「<em>北はどっち</em>」「<em>方角 調べる</em>」「<em>方位磁針 スマホ</em>」で検索したことがあるなら、困りごとはもう分かっているはずです。初めての通り、駐車場、ホテルの部屋、キャンプ場——自分の方向感覚が頼りにならない場面です。画面の中の<strong>スマホのコンパス</strong>なら、それが数秒で解決します。回転すれば<strong>方位磁石</strong>の表示もすぐ更新されるので、向いている方角を針が誤って示すことはありません。',
  ],
  sections: [
    {
      h3: 'オンラインコンパスで実際に分かること',
      paras: [
        '文字盤は<strong>方角</strong>を度数と漢字の両方で表示します。度数は北が0°、時計回りに東が90°、南が180°、西が270°です。文字盤は円を八方位に分けているので、北・北東・東・南東・南・南西・西・北西が計算なしで読み取れます。<strong>方位磁針 アプリ</strong>を求める人が欲しいのはまさにこれで、そのまま人に道を教えられる言葉で方角が分かります。',
        '文字盤が動き続けるので、これは絵ではなく<strong>ライブコンパス</strong>です。端末を回すと外枠が回り、針は方位を保ちます。この動きが、静止画と本物の<strong>デジタルコンパス</strong>を分けるポイントであり、歩きながら<strong>方角 アプリ</strong>として使える理由でもあります。',
      ],
    },
    {
      h3: 'オンラインコンパスで北を見つける方法',
      paras: [
        'この<strong>北を探すコンパス</strong>を使うときは、端末を平らに持ち、金属・磁石・ノートPCのスピーカーから離してください。有効化ボタンを押してブラウザに磁気センサーの利用を許可し、その場でゆっくり回ります。針は1〜2秒で落ち着きます。赤い先端が北で、南・東・西はそこから決まります。数値が大きく揺れるときは、机から離れて外に出てやり直してください。',
        'センサーの値は許可したあとにしか共有されないため、このツールは一度だけ確認して以後は記憶します。この許可のおかげで<strong>無料の方位磁針</strong>が端末だけで動きます。計測は端末内で完結し、位置履歴の送信もサーバーへの保存もありません。電波が弱くても同じページは動き続け、読み込み済みなら電波が途切れても方位を表示し続けます。',
      ],
    },
    {
      h3: 'オンラインコンパスと実物のコンパス',
      paras: [
        '昔ながらのプレートコンパスは、壊れにくく、音も出ず、電池も要りません。ただし水平に保ち、外枠を合わせ、目盛りを読む手間がかかります。<strong>オンラインコンパスツール</strong>はその手間を数字一つに置き換えます。「今どっち向きか」を知りたいだけなら断然速く、悪天候の中で何時間も歩くなら実物のコンパスと紙の地図のほうが安全です。両方を持ち、<strong>ネットのコンパス</strong>を素早い第二の意見として使う人が多いのも納得です。',
        'できないことも知っておきましょう。スマホのコンパスは磁北を読むため、真北とは場所に応じた差（磁気偏角）があります。大きな金属構造物の近く、車内、磁石のそばでは、端末を8の字に動かして再調整するまで数度ずれることがあります。<strong>オンラインのコンパス</strong>は測量器ではなく強い手がかりとして使えば、十分に役立ちます。',
      ],
    },
    {
      h3: '無料オンラインコンパスを毎日使う人たち',
      paras: [
        '地下鉄を出たあとに方角をつかむ街歩きの人。駐車場のどちら側から入ったかを確かめるドライバー。光の向きを記録する写真家。登山者、測量士、配達ライダー、バードウォッチャー、校外学習の学生——みなが同じものを求めています。インストール不要、文字盤を邪魔する広告なし、登録画面なしの<strong>無料コンパス</strong>です。ここでの設計方針はそれだけ、文字盤ひとつ、方位ひとつ、余計なものなし。',
        'デスクトップやノートPCではページは開き、読み方の説明も表示されますが、磁気センサーがないため針は動きません。そうした端末では<strong>北の方角</strong>の解説を読むための道具として使い、外に出たら同じページをスマホで開いてください。レイアウトはレスポンシブで、文字盤は画面の大きさに合わせて広がります。',
      ],
    },
    {
      h3: '勘に頼らず方角を読む',
      paras: [
        '四方位は簡単です。端末が平らで文字盤が逆さまになっていなければ、針の先が<strong>北</strong>、後ろが<strong>南</strong>、右が<strong>東</strong>、左が<strong>西</strong>です。間の四方位がすき間を埋め、度数表示がそれ以外すべてをカバーします。135°が南東だと分かれば、<strong>オンラインコンパス</strong>が出す数字を口に出せる方角に変換できます。道案内をする側になったとき、これがそのまま役に立ちます。',
        '自宅で一度練習してみてください。立ったまま方位を読み、90度回ってまた読みます。二度目の値が最初の値プラスマイナス90度程度なら、<strong>スマホの方位磁針</strong>は正しく動いています。ずれていれば再調整して繰り返します。この2分間で、慣れない街で<strong>北</strong>を探すときも、テントの入口が日の出の方向を向いているか確かめるときも、その後の読み取りが信用できるものになります。',
      ],
    },
  ],
};

const es: CompassProse = {
  h2: 'La brújula online gratis que funciona en tu navegador',
  intro: [
    'Esta <strong>brújula online</strong> convierte cualquier móvil, tablet o portátil en una <strong>herramienta de brújula</strong> que funciona con un toque. No hay nada que descargar, no hay cuenta que crear y no hay esperas de tienda de aplicaciones: abres la página y la esfera empieza a seguir la dirección hacia la que miras. Es una <strong>brújula online gratis</strong> hecha para una sola cosa: decirte dónde está el norte, ahora mismo, estés donde estés.',
    'Si alguna vez has buscado «<em>dónde está el norte</em>», «<em>dirección norte</em>» o «<em>brújula para orientarme</em>», ya conoces el problema. Estás en una calle nueva, en un coche aparcado, en la habitación de un hotel o en un camping, y tu sentido de la orientación ha dejado de ayudar. Una <strong>brújula para móvil</strong> en la pantalla lo resuelve en segundos. La lectura de la <strong>brújula en línea</strong> se actualiza al girar, así que la aguja nunca miente sobre hacia dónde apuntas.',
  ],
  sections: [
    {
      h3: 'Qué te muestra realmente una brújula online',
      paras: [
        'La esfera muestra la <strong>dirección de la brújula</strong> en grados y en palabras. Los grados van de 0° en el norte, en sentido horario, a 90° en el este, 180° en el sur y 270° en el oeste. Las palabras dividen el círculo en ocho rumbos, así que ves norte, noreste, este, sureste, sur, suroeste, oeste y noroeste sin hacer ninguna cuenta. Cuando alguien pide una <strong>brújula con direcciones</strong> quiere esto: una lectura que pueda usar de inmediato, con las mismas palabras que usaría para indicarle el camino a otra persona.',
        'Como la esfera está viva, esto es una <strong>brújula en vivo</strong> y no un dibujo. Gira el dispositivo y la aguja mantiene su rumbo mientras el bisel gira. Ese detalle es lo que separa una <strong>brújula digital</strong> real de una ilustración estática, y es la razón por la que la página sirve como guía de <strong>direcciones de brújula</strong> mientras caminas.',
      ],
    },
    {
      h3: 'Cómo encontrar el norte con una brújula online',
      paras: [
        'Para usar esta <strong>brújula online para encontrar el norte</strong>, sujeta el dispositivo plano y lejos de metales, imanes y altavoces de portátil. Pulsa el botón de activación para que el navegador pueda leer el magnetómetro y gira despacio sobre ti mismo. La aguja se estabiliza en uno o dos segundos. La punta roja marca el norte; el sur, el este y el oeste salen de ahí. Si el valor salta, aleja el móvil de la mesa, sal un momento y vuelve a probar.',
        'Los navegadores solo comparten datos de sensores después de que lo autorices, por eso la herramienta pregunta una vez y luego lo recuerda. Ese permiso es también la razón por la que una <strong>brújula online gratis</strong> como esta puede funcionar solo en tu dispositivo: la lectura se calcula localmente, no se sube el historial de ubicación y no se guarda nada en un servidor. La misma página sigue funcionando con poca señal y, una vez cargada, seguirá mostrando un rumbo aunque pierdas los datos en medio del campo.',
      ],
    },
    {
      h3: 'Brújula online frente a una brújula física',
      paras: [
        'Una brújula de placa tradicional es fiable, silenciosa y nunca se queda sin batería. También te pide sujetarla nivelada, alinear el bisel y leer una escala. Una <strong>herramienta de brújula online</strong> sustituye ese ritual por un número. Para comprobar rápido «hacia dónde miro» es más rápida; para una caminata de varias horas con mal tiempo, una brújula física y un mapa de papel siguen siendo la pareja más segura. Mucha gente lleva las dos y usa la página de <strong>brújula en línea</strong> como segunda opinión rápida.',
        'También conviene saber qué no puede hacer. La brújula de un móvil lee el norte magnético, que se separa del norte geográfico según el lugar donde estés: es la llamada declinación magnética. Cerca de grandes estructuras metálicas, dentro de un coche o junto a un imán, la lectura puede desviarse varios grados hasta que recalibres moviendo el dispositivo en forma de ocho. Trata la <strong>dirección de brújula online</strong> como una pista muy útil y no como un instrumento topográfico, y te dará buen servicio.',
      ],
    },
    {
      h3: 'Quién usa una brújula online gratis a diario',
      paras: [
        'Quien camina por la ciudad la usa para orientarse al salir del metro. Los conductores, para confirmar por qué extremo entraron al aparcamiento. Los fotógrafos, para anotar la dirección de la luz. Senderistas, topógrafos, repartidores, observadores de aves y estudiantes de excursión buscan lo mismo: una <strong>brújula gratis</strong> sin instaladores, sin anuncios tapando la esfera y sin pantallas de registro. Ese es todo el objetivo de diseño aquí: una esfera, un rumbo, sin ruido.',
        'En un ordenador o portátil la página carga y sigue explicando la lectura, pero la aguja necesita un magnetómetro que la mayoría de los equipos no tienen. En esos dispositivos conviene usarla como referencia: lee sobre la <strong>dirección norte</strong> y abre la misma página en el móvil cuando salgas. No se pierde nada: el diseño es responsive y la esfera se adapta a cualquier pantalla.',
      ],
    },
    {
      h3: 'Leer rumbos sin adivinar',
      paras: [
        'Los cuatro puntos cardinales son fáciles: el <strong>norte</strong> delante de la aguja, el <strong>sur</strong> detrás, el <strong>este</strong> a tu derecha y el <strong>oeste</strong> a tu izquierda, siempre que el dispositivo esté plano y la esfera no esté al revés. Los cuatro puntos intermedios cubren los huecos y la lectura en grados cubre todo lo demás. Cuando sabes que un rumbo de 135° es sureste, puedes traducir cualquier número que muestre la <strong>brújula online</strong> en una dirección que puedas decir en voz alta, justo lo que necesitas cuando eres tú quien indica el camino.',
        'Practica una vez en casa. Quédate quieto, apunta el rumbo, gira noventa grados y vuelve a apuntarlo. Si la segunda lectura es más o menos la primera más o menos noventa, tu <strong>brújula para móvil</strong> funciona bien. Si no, calibra y repite. Dos minutos así hacen fiables todas las lecturas posteriores, ya sea para encontrar el <strong>norte</strong> en una ciudad desconocida o para comprobar que la puerta de la tienda mira al amanecer.',
      ],
    },
  ],
};

const de: CompassProse = {
  h2: 'Der kostenlose Online-Kompass, der im Browser läuft',
  intro: [
    'Dieser <strong>Online-Kompass</strong> macht aus jedem Smartphone, Tablet oder Laptop mit einem Tippen ein funktionierendes <strong>Kompass-Tool</strong>. Es gibt nichts zu installieren, kein Konto anzulegen und keine Wartezeit im App Store — du öffnest die Seite und die Skala verfolgt die Richtung, in die du schaust. Er ist ein <strong>kostenloser Online-Kompass</strong> mit genau einer Aufgabe: dir zu sagen, wo Norden ist, jetzt gerade, wo immer du stehst.',
    'Wer schon einmal nach „<em>wo ist Norden</em>“, „<em>Himmelsrichtung bestimmen</em>“ oder „<em>Kompass im Handy</em>“ gesucht hat, kennt das Problem. Du stehst in einer fremden Straße, in einem geparkten Auto, in einem Hotelzimmer oder auf einem Campingplatz, und dein Orientierungssinn hilft nicht mehr. Ein <strong>Kompass auf dem Handy</strong> löst das in Sekunden. Die Anzeige des <strong>Online-Kompasses</strong> aktualisiert sich beim Drehen, die Nadel liegt also nie falsch.',
  ],
  sections: [
    {
      h3: 'Was ein Online-Kompass tatsächlich anzeigt',
      paras: [
        'Die Skala zeigt die <strong>Himmelsrichtung</strong> in Grad und in Worten. Die Grade laufen von 0° im Norden im Uhrzeigersinn über 90° im Osten und 180° im Süden bis 270° im Westen. Die Worte teilen den Kreis in acht Richtungen, du siehst also Nord, Nordost, Ost, Südost, Süd, Südwest, West und Nordwest, ohne rechnen zu müssen. Wer einen <strong>Kompass mit Richtungen</strong> sucht, meint genau das: eine Anzeige, mit der man sofort etwas anfangen kann, in denselben Worten, mit denen man anderen den Weg beschreibt.',
        'Weil die Skala lebt, ist das ein <strong>Live-Kompass</strong> und kein Bild davon. Drehst du das Gerät, behält die Nadel ihre Peilung, während sich die Scheibe dreht. Genau das unterscheidet eine echte <strong>digitale Kompassanzeige</strong> von einer statischen Grafik — und deshalb taugt die Seite beim Gehen als <strong>Kompass zur Orientierung</strong>.',
      ],
    },
    {
      h3: 'So findest du mit einem Online-Kompass den Norden',
      paras: [
        'Halte das Gerät für diesen <strong>Online-Kompass zum Norden finden</strong> flach und fern von Metall, Magneten und Laptop-Lautsprechern. Tippe auf die Aktivieren-Schaltfläche, damit der Browser den Magnetometer lesen darf, und dreh dich langsam auf der Stelle. Die Nadel beruhigt sich nach ein bis zwei Sekunden. Die rote Spitze zeigt Norden; Süden, Osten und Westen ergeben sich daraus. Springt der Wert, nimm das Handy vom Tisch, geh einen Schritt nach draußen und versuch es erneut.',
        'Browser geben Sensordaten erst nach deiner Erlaubnis weiter, deshalb fragt das Tool einmal und merkt es sich. Diese Freigabe ist auch der Grund, warum ein <strong>kostenloser Online-Kompass</strong> wie dieser vollständig auf deinem Gerät läuft: die Peilung wird lokal berechnet, es wird kein Standortverlauf hochgeladen und nichts auf einem Server gespeichert. Die Seite funktioniert auch bei schwachem Signal weiter und zeigt nach dem Laden selbst dann eine Richtung, wenn mitten im Feld die Daten abbrechen.',
      ],
    },
    {
      h3: 'Online-Kompass oder echter Kompass',
      paras: [
        'Ein klassischer Plattenkompass ist zuverlässig, lautlos und hat nie einen leeren Akku. Er verlangt aber, ihn waagerecht zu halten, die Scheibe auszurichten und eine Skala zu lesen. Ein <strong>Online-Kompass-Tool</strong> ersetzt dieses Ritual durch eine Zahl. Für ein schnelles „wohin schaue ich gerade“ ist er schneller; für eine mehrstündige Wanderung bei schlechtem Wetter bleiben ein physischer Kompass und eine Papierkarte die sicherere Kombination. Viele führen beides mit und nutzen die Seite als schnelle zweite Meinung.',
        'Wichtig ist auch, was das Tool nicht kann. Ein Handy-Kompass liest den magnetischen Norden, der je nach Standort vom geografischen Norden abweicht — die sogenannte Missweisung. In der Nähe großer Metallbauten, im Auto oder neben einem Magneten kann die Anzeige um mehrere Grad danebenliegen, bis du das Gerät in Achterbewegungen neu kalibrierst. Behandle die <strong>Online-Himmelsrichtung</strong> als starken Hinweis und nicht als Messinstrument, dann leistet sie gute Dienste.',
      ],
    },
    {
      h3: 'Wer einen kostenlosen Online-Kompass täglich nutzt',
      paras: [
        'Stadtspaziergänger orientieren sich damit nach dem Verlassen der U-Bahn. Autofahrer prüfen, an welchem Ende sie das Parkhaus betreten haben. Fotografen notieren die Richtung des Lichts. Wanderer, Vermesser, Lieferfahrer, Vogelbeobachter und Schulklassen greifen alle nach demselben: einem <strong>Kompass ohne Installation</strong>, ohne Werbung vor der Skala und ohne Anmeldebildschirme. Das ist die ganze Designvorgabe hier — eine Skala, eine Peilung, kein Ballast.',
        'Auf einem Desktop oder Laptop lädt die Seite und erklärt die Anzeige weiterhin, aber die Nadel braucht einen Magnetometer, den die meisten Rechner nicht haben. Dort ist das Tool vor allem eine Referenz: lies über die <strong>Himmelsrichtung Norden</strong> und öffne dieselbe Seite auf dem Handy, wenn du nach draußen gehst. Es geht nichts verloren — das Layout ist responsiv und die Skala passt sich jedem Bildschirm an.',
      ],
    },
    {
      h3: 'Richtungen lesen, ohne zu raten',
      paras: [
        'Die vier Himmelsrichtungen sind einfach: <strong>Norden</strong> vor der Nadel, <strong>Süden</strong> dahinter, <strong>Osten</strong> rechts und <strong>Westen</strong> links — solange das Gerät flach liegt und die Skala nicht auf dem Kopf steht. Die vier Zwischenrichtungen füllen die Lücken, und die Gradzahl deckt alles andere ab. Wenn du weißt, dass 135° Südost bedeutet, kannst du jede Zahl des <strong>Online-Kompasses</strong> in eine Richtung übersetzen, die du aussprechen kannst — genau das brauchst du, wenn du anderen den Weg beschreibst.',
        'Übe einmal zu Hause. Steh still, merke dir die Peilung, dreh dich neunzig Grad und merke sie dir erneut. Liegt der zweite Wert etwa neunzig Grad neben dem ersten, arbeitet dein <strong>Kompass am Handy</strong> richtig. Wenn nicht, kalibriere und wiederhole es. Zwei Minuten davon machen jede spätere Anzeige verlässlich, ob du nun <strong>Norden</strong> in einer fremden Stadt suchst oder prüfst, ob die Zelttür zum Sonnenaufgang zeigt.',
      ],
    },
  ],
};

const fr: CompassProse = {
  h2: 'La boussole en ligne gratuite qui fonctionne dans votre navigateur',
  intro: [
    "Cette <strong>boussole en ligne</strong> transforme n'importe quel téléphone, tablette ou ordinateur portable en <strong>outil boussole</strong> opérationnel en un seul geste. Rien à télécharger, aucun compte à créer, aucune attente sur une boutique d'applications : vous ouvrez la page et le cadran suit la direction vers laquelle vous regardez. C'est une <strong>boussole en ligne gratuite</strong> conçue pour une seule chose : vous dire où se trouve le nord, maintenant, où que vous soyez.",
    "Si vous avez déjà cherché « <em>où est le nord</em> », « <em>trouver le nord</em> » ou « <em>boussole pour s'orienter</em> », vous connaissez le problème. Vous êtes dans une rue inconnue, une voiture garée, une chambre d'hôtel ou un camping, et votre sens de l'orientation ne sert plus à rien. Une <strong>boussole sur téléphone</strong> à l'écran règle cela en quelques secondes. L'affichage de la <strong>boussole en ligne</strong> se met à jour quand vous tournez, l'aiguille ne se trompe donc jamais de direction.",
  ],
  sections: [
    {
      h3: "Ce qu'affiche réellement une boussole en ligne",
      paras: [
        "Le cadran affiche le <strong>point cardinal</strong> en degrés et en mots. Les degrés partent de 0° au nord, puis 90° à l'est, 180° au sud et 270° à l'ouest dans le sens horaire. Les mots divisent le cercle en huit directions : nord, nord-est, est, sud-est, sud, sud-ouest, ouest et nord-ouest, sans aucun calcul. Quand on cherche une <strong>boussole avec directions</strong>, c'est exactement cela : une lecture utilisable immédiatement, dans les mots que vous emploieriez pour expliquer le chemin à quelqu'un.",
        "Comme le cadran est vivant, il s'agit d'une <strong>boussole en temps réel</strong> et non d'une image. Tournez l'appareil : l'aiguille garde son cap pendant que le cadran pivote. C'est ce comportement qui distingue une vraie <strong>boussole numérique</strong> d'une illustration figée, et c'est pourquoi la page sert de guide d'<strong>orientation boussole</strong> pendant la marche.",
      ],
    },
    {
      h3: 'Comment trouver le nord avec une boussole en ligne',
      paras: [
        "Pour utiliser cette <strong>boussole en ligne pour trouver le nord</strong>, tenez l'appareil à plat, loin du métal, des aimants et des haut-parleurs d'ordinateur. Appuyez sur le bouton d'activation pour que le navigateur lise le magnétomètre, puis tournez lentement sur vous-même. L'aiguille se stabilise en une à deux secondes. La pointe rouge indique le nord ; le sud, l'est et l'ouest en découlent. Si la valeur saute, éloignez le téléphone du bureau, faites un pas dehors et réessayez.",
        "Les navigateurs ne partagent les données des capteurs qu'après votre autorisation : l'outil demande donc une fois, puis s'en souvient. Cette autorisation explique aussi pourquoi une <strong>boussole en ligne gratuite</strong> comme celle-ci fonctionne entièrement sur votre appareil : la lecture est calculée localement, aucun historique de position n'est envoyé et rien n'est stocké sur un serveur. La page continue de fonctionner avec un signal faible et, une fois chargée, elle affiche encore un cap même si vous perdez le réseau en pleine campagne.",
      ],
    },
    {
      h3: 'Boussole en ligne ou boussole physique',
      paras: [
        "Une boussole à plaquette classique est fiable, silencieuse et ne tombe jamais en panne de pile. Elle demande en revanche de la tenir à plat, d'aligner le limbe et de lire une graduation. Un <strong>outil boussole en ligne</strong> remplace ce rituel par un chiffre. Pour un rapide « dans quelle direction je regarde », c'est plus rapide ; pour une randonnée de plusieurs heures par mauvais temps, une boussole physique et une carte papier restent la combinaison la plus sûre. Beaucoup emportent les deux et considèrent la page de <strong>boussole en ligne</strong> comme un second avis immédiat.",
        "Il vaut aussi la peine de savoir ce que l'outil ne peut pas faire. La boussole d'un téléphone lit le nord magnétique, qui s'écarte du nord géographique selon l'endroit où vous êtes : c'est la déclinaison magnétique. Près de grandes structures métalliques, dans une voiture ou à côté d'un aimant, la lecture peut dévier de plusieurs degrés jusqu'à ce que vous recalibriez en déplaçant l'appareil en huit. Considérez l'<strong>orientation boussole en ligne</strong> comme un indice solide plutôt qu'un instrument de mesure, et elle vous rendra service.",
      ],
    },
    {
      h3: 'Qui utilise une boussole en ligne gratuite chaque jour',
      paras: [
        "Les citadins s'orientent en sortant du métro. Les automobilistes vérifient par quel bout ils sont entrés dans le parking. Les photographes notent la direction de la lumière. Randonneurs, géomètres, livreurs, ornithologues et étudiants en sortie scolaire cherchent tous la même chose : une <strong>boussole gratuite</strong> sans installation, sans publicité devant le cadran et sans écran d'inscription. Tout le cahier des charges est là : un cadran, un cap, aucun encombrement.",
        "Sur un ordinateur de bureau ou portable, la page se charge et explique toujours la lecture, mais l'aiguille a besoin d'un magnétomètre que la plupart des ordinateurs n'ont pas. Sur ces appareils, l'outil sert surtout de référence : lisez la partie sur la <strong>direction du nord</strong>, puis ouvrez la même page sur votre téléphone en sortant. Rien n'est perdu : la mise en page est adaptative et le cadran s'ajuste à l'écran.",
      ],
    },
    {
      h3: 'Lire les directions sans deviner',
      paras: [
        "Les quatre points cardinaux sont faciles : le <strong>nord</strong> devant l'aiguille, le <strong>sud</strong> derrière, l'<strong>est</strong> à droite et l'<strong>ouest</strong> à gauche, tant que l'appareil est à plat et que le cadran n'est pas à l'envers. Les quatre points intermédiaires comblent les écarts et la valeur en degrés couvre tout le reste. Une fois que vous savez qu'un cap de 135° correspond au sud-est, vous pouvez traduire n'importe quel nombre affiché par la <strong>boussole en ligne</strong> en une direction que vous pouvez dire à voix haute — exactement ce qu'il faut quand c'est vous qui guidez.",
        "Entraînez-vous une fois chez vous. Restez immobile, notez le cap, tournez de quatre-vingt-dix degrés et notez-le à nouveau. Si la seconde lecture vaut à peu près la première plus ou moins quatre-vingt-dix, votre <strong>boussole sur téléphone</strong> se comporte bien. Sinon, recalibrez et recommencez. Deux minutes de cet exercice rendent toutes les lectures suivantes fiables, que vous cherchiez le <strong>nord</strong> dans une ville inconnue ou que vous vérifiiez que la porte de la tente regarde le lever du soleil.",
      ],
    },
  ],
};

const pt: CompassProse = {
  h2: 'A bússola online gratuita que funciona no seu navegador',
  intro: [
    'Esta <strong>bússola online</strong> transforma qualquer celular, tablet ou notebook em uma <strong>ferramenta de bússola</strong> pronta para usar com um toque. Não há nada para baixar, nenhuma conta para criar e nenhuma espera de loja de aplicativos: você abre a página e o mostrador começa a acompanhar a direção para a qual está olhando. É uma <strong>bússola online grátis</strong> feita para uma única coisa: dizer onde fica o norte, agora, onde quer que você esteja.',
    'Se você já pesquisou “<em>onde fica o norte</em>”, “<em>direção norte</em>” ou “<em>bússola para se orientar</em>”, já conhece o problema. Você está numa rua nova, num carro estacionado, num quarto de hotel ou num camping, e seu senso de direção parou de ajudar. Uma <strong>bússola no celular</strong> na tela resolve isso em segundos. A leitura da <strong>bússola online</strong> se atualiza quando você gira, então a agulha nunca erra a direção para onde você aponta.',
  ],
  sections: [
    {
      h3: 'O que uma bússola online realmente mostra',
      paras: [
        'O mostrador mostra a <strong>direção da bússola</strong> em graus e em palavras. Os graus vão de 0° no norte, no sentido horário, até 90° no leste, 180° no sul e 270° no oeste. As palavras dividem o círculo em oito rumos, então você vê norte, nordeste, leste, sudeste, sul, sudoeste, oeste e noroeste sem fazer nenhuma conta. Quando alguém procura uma <strong>bússola com direções</strong>, é exatamente isto: uma leitura que dá para usar na hora, com as mesmas palavras que usaria para explicar o caminho a outra pessoa.',
        'Como o mostrador é vivo, esta é uma <strong>bússola em tempo real</strong> e não uma imagem dela. Gire o aparelho e a agulha mantém o rumo enquanto a moldura gira. Esse comportamento é o que separa uma <strong>bússola digital</strong> de verdade de uma ilustração estática, e é por isso que a página funciona como guia de <strong>direção da bússola</strong> enquanto você caminha.',
      ],
    },
    {
      h3: 'Como encontrar o norte com uma bússola online',
      paras: [
        'Para usar esta <strong>bússola online para encontrar o norte</strong>, segure o aparelho plano e longe de metal, ímãs e alto-falantes de notebook. Toque no botão de ativar para o navegador poder ler o magnetômetro e gire devagar no mesmo lugar. A agulha se estabiliza em um ou dois segundos. A ponta vermelha marca o norte; sul, leste e oeste saem daí. Se o valor ficar pulando, afaste o celular da mesa, dê um passo para fora e tente de novo.',
        'Os navegadores só compartilham dados dos sensores depois que você autoriza, por isso a ferramenta pede uma vez e depois lembra. Essa permissão também é o motivo pelo qual uma <strong>bússola online grátis</strong> como esta pode rodar inteiramente no seu aparelho: a leitura é calculada localmente, nenhum histórico de localização é enviado e nada é guardado num servidor. A mesma página continua funcionando com sinal fraco e, depois de carregada, segue mostrando um rumo mesmo sem dados no meio do campo.',
      ],
    },
    {
      h3: 'Bússola online ou bússola física',
      paras: [
        'Uma bússola de placa tradicional é confiável, silenciosa e nunca fica sem bateria. Também exige mantê-la nivelada, alinhar a moldura e ler uma escala. Uma <strong>ferramenta de bússola online</strong> troca esse ritual por um número. Para conferir rapidamente “para onde estou olhando” ela é mais rápida; para uma trilha de várias horas com tempo ruim, uma bússola física e um mapa de papel continuam sendo a dupla mais segura. Muita gente leva as duas e usa a página de <strong>bússola online</strong> como segunda opinião imediata.',
        'Também vale saber o que a ferramenta não faz. A bússola do celular lê o norte magnético, que se afasta do norte geográfico conforme o lugar onde você está — é a chamada declinação magnética. Perto de grandes estruturas metálicas, dentro de um carro ou ao lado de um ímã, a leitura pode errar vários graus até você recalibrar movendo o aparelho em forma de oito. Trate a <strong>direção da bússola online</strong> como uma pista forte e não como instrumento topográfico, e ela vai te servir bem.',
      ],
    },
    {
      h3: 'Quem usa uma bússola online grátis todos os dias',
      paras: [
        'Quem caminha pela cidade se orienta ao sair do metrô. Motoristas confirmam por qual lado entraram no estacionamento. Fotógrafos anotam a direção da luz. Trilheiros, topógrafos, entregadores, observadores de pássaros e estudantes em excursão procuram a mesma coisa: uma <strong>bússola grátis</strong> sem instalador, sem anúncio na frente do mostrador e sem tela de cadastro. Esse é todo o projeto aqui: um mostrador, um rumo, sem bagunça.',
        'Num computador ou notebook a página carrega e continua explicando a leitura, mas a agulha precisa de um magnetômetro que a maioria dos computadores não tem. Nesses aparelhos a ferramenta serve como referência: leia sobre a <strong>direção norte</strong> e abra a mesma página no celular quando sair. Nada se perde — o layout é responsivo e o mostrador se ajusta a qualquer tela.',
      ],
    },
    {
      h3: 'Ler direções sem adivinhar',
      paras: [
        'Os quatro pontos cardeais são fáceis: o <strong>norte</strong> à frente da agulha, o <strong>sul</strong> atrás, o <strong>leste</strong> à direita e o <strong>oeste</strong> à esquerda — desde que o aparelho esteja plano e o mostrador não esteja de cabeça para baixo. Os quatro pontos intermediários cobrem as lacunas e a leitura em graus cobre todo o resto. Quando você sabe que 135° é sudeste, pode traduzir qualquer número que a <strong>bússola online</strong> mostre numa direção que consiga falar em voz alta, exatamente o que precisa quando é você quem orienta alguém.',
        'Pratique uma vez em casa. Fique parado, anote o rumo, gire noventa graus e anote de novo. Se a segunda leitura for mais ou menos a primeira mais ou menos noventa, sua <strong>bússola no celular</strong> está se comportando. Se não for, calibre e repita. Dois minutos disso tornam toda leitura seguinte confiável, seja para achar o <strong>norte</strong> numa cidade desconhecida, seja para conferir se a porta da barraca dá para o nascer do sol.',
      ],
    },
  ],
};

const ko: CompassProse = {
  h2: '브라우저에서 바로 쓰는 무료 온라인 나침반',
  intro: [
    '이 <strong>온라인 나침반</strong>은 스마트폰, 태블릿, 노트북을 한 번의 탭으로 쓸 수 있는 <strong>나침반 도구</strong>로 바꿔 줍니다. 내려받을 것도, 계정을 만들 필요도, 앱스토어에서 기다릴 필요도 없습니다. 페이지를 열면 다이얼이 지금 바라보는 방향을 따라가기 시작합니다. <strong>무료 온라인 나침반</strong>으로서의 역할은 하나입니다. 지금 서 있는 곳에서 북쪽이 어디인지 바로 알려 주는 것.',
    '“<em>북쪽 어디</em>”, “<em>방향 찾기</em>”, “<em>핸드폰 나침반</em>”을 검색해 본 적이 있다면 이미 그 문제를 아실 겁니다. 낯선 거리, 주차된 차 안, 호텔 방, 캠핑장에서 방향 감각이 더 이상 도움이 되지 않는 상황입니다. 화면 속 <strong>휴대폰 나침반</strong>은 그 문제를 몇 초 만에 해결합니다. 돌리면 <strong>온라인 나침반</strong>의 표시가 바로 갱신되므로 바늘이 방향을 잘못 알려 줄 일이 없습니다.',
  ],
  sections: [
    {
      h3: '온라인 나침반이 실제로 보여 주는 것',
      paras: [
        '다이얼은 <strong>방위</strong>를 도수와 방향 이름으로 함께 보여 줍니다. 도수는 북쪽 0°에서 시계 방향으로 동쪽 90°, 남쪽 180°, 서쪽 270°입니다. 이름은 원을 여덟 방향으로 나누므로 북, 북동, 동, 남동, 남, 남서, 서, 북서를 계산 없이 읽을 수 있습니다. <strong>방향 나침반</strong>을 찾는 사람이 원하는 것이 바로 이것입니다. 다른 사람에게 길을 알려 줄 때 쓰는 말 그대로, 바로 활용할 수 있는 값입니다.',
        '다이얼이 계속 움직이기 때문에 이것은 그림이 아니라 <strong>실시간 나침반</strong>입니다. 기기를 돌리면 테두리는 회전하고 바늘은 방위를 유지합니다. 이 동작 하나가 정지된 그림과 진짜 <strong>디지털 나침반</strong>을 구분하며, 걷는 동안 <strong>나침반 방향</strong> 안내로 쓸 수 있는 이유이기도 합니다.',
      ],
    },
    {
      h3: '온라인 나침반으로 북쪽 찾는 방법',
      paras: [
        '이 <strong>북쪽을 찾는 온라인 나침반</strong>을 쓰려면 기기를 평평하게 들고 금속, 자석, 노트북 스피커에서 떨어뜨리세요. 활성화 버튼을 눌러 브라우저가 자기 센서를 읽도록 허용한 다음 제자리에서 천천히 돌아보세요. 바늘은 1~2초 안에 안정됩니다. 빨간 끝이 북쪽을 가리키고, 남쪽과 동쪽과 서쪽은 거기서 정해집니다. 값이 크게 흔들리면 책상에서 멀어져 밖으로 나가 다시 시도하세요.',
        '브라우저는 허용한 뒤에만 센서 값을 공유하므로 이 도구는 한 번 묻고 기억합니다. 이 허용 덕분에 <strong>무료 온라인 나침반</strong>이 기기 안에서만 동작합니다. 값은 기기에서 계산되고 위치 기록이 전송되지 않으며 서버에 아무것도 저장되지 않습니다. 신호가 약해도 같은 페이지가 계속 동작하고, 한 번 불러온 뒤에는 들판 한가운데에서 데이터가 끊겨도 방위를 계속 표시합니다.',
      ],
    },
    {
      h3: '온라인 나침반과 실물 나침반',
      paras: [
        '전통적인 플레이트 나침반은 믿음직하고 소리가 없으며 배터리도 필요 없습니다. 대신 수평을 맞추고 테두리를 정렬해 눈금을 읽어야 합니다. <strong>온라인 나침반 도구</strong>는 그 절차를 숫자 하나로 바꿉니다. “지금 어느 쪽을 보고 있나”를 빠르게 확인할 때는 훨씬 빠르고, 날씨가 나쁜 날 몇 시간씩 걷는 산행에서는 실물 나침반과 종이 지도가 여전히 더 안전합니다. 두 가지를 모두 챙기고 <strong>인터넷 나침반</strong>을 빠른 참고용으로 쓰는 사람이 많습니다.',
        '하지 못하는 일도 알아 두면 좋습니다. 휴대폰 나침반은 자북을 읽기 때문에 위치에 따라 진북과 차이가 생깁니다. 이를 자기 편각이라고 합니다. 큰 금속 구조물 근처, 차 안, 자석 옆에서는 기기를 8자로 움직여 다시 보정할 때까지 몇 도씩 틀릴 수 있습니다. <strong>온라인 나침반 방향</strong>을 측량기가 아니라 강력한 힌트로 다루면 충분히 쓸모 있습니다.',
      ],
    },
    {
      h3: '무료 온라인 나침반을 매일 쓰는 사람들',
      paras: [
        '지하철에서 나온 뒤 방향을 잡는 도시 보행자. 주차장 어느 쪽으로 들어왔는지 확인하는 운전자. 빛의 방향을 기록하는 사진가. 등산객, 측량사, 배달 라이더, 탐조가, 현장 학습을 나온 학생까지 모두 같은 것을 찾습니다. 설치 프로그램도, 다이얼을 가리는 광고도, 가입 화면도 없는 <strong>무료 나침반</strong>입니다. 이 도구의 설계 목표는 그것뿐입니다. 다이얼 하나, 방위 하나, 군더더기 없음.',
        '데스크톱이나 노트북에서도 페이지는 열리고 설명은 그대로 보이지만, 바늘은 대부분의 컴퓨터에 없는 자기 센서가 필요합니다. 그런 기기에서는 참고용으로 쓰는 것이 좋습니다. <strong>북쪽 방향</strong> 설명을 읽고, 밖으로 나갈 때 같은 페이지를 휴대폰으로 여세요. 잃는 것은 없습니다. 레이아웃은 반응형이고 다이얼은 화면 크기에 맞춰 조정됩니다.',
      ],
    },
    {
      h3: '추측 없이 방위 읽기',
      paras: [
        '네 방위는 쉽습니다. 기기가 평평하고 다이얼이 거꾸로 되어 있지 않다면 바늘 앞이 <strong>북쪽</strong>, 뒤가 <strong>남쪽</strong>, 오른쪽이 <strong>동쪽</strong>, 왼쪽이 <strong>서쪽</strong>입니다. 사이의 네 방위가 빈틈을 메우고 도수 값이 나머지 전부를 덮습니다. 135°가 남동쪽임을 알면 <strong>온라인 나침반</strong>이 보여 주는 어떤 숫자든 소리 내어 말할 수 있는 방향으로 바꿀 수 있습니다. 길을 알려 주는 사람이 바로 당신일 때 필요한 것이 이것입니다.',
        '집에서 한 번 연습해 보세요. 가만히 서서 방위를 확인하고, 90도 돌아 다시 확인합니다. 두 번째 값이 첫 값에서 90도 안팎이라면 <strong>휴대폰 나침반</strong>이 제대로 동작하는 것입니다. 아니라면 보정하고 반복하세요. 이 2분이면 낯선 도시에서 <strong>북쪽</strong>을 찾을 때도, 텐트 입구가 해 뜨는 쪽을 향하는지 확인할 때도 이후의 모든 값이 믿을 만해집니다.',
      ],
    },
  ],
};

const it: CompassProse = {
  h2: 'La bussola online gratuita che funziona nel browser',
  intro: [
    "Questa <strong>bussola online</strong> trasforma qualsiasi telefono, tablet o portatile in uno <strong>strumento bussola</strong> funzionante con un solo tocco. Non c'è nulla da scaricare, nessun account da creare e nessuna attesa negli store: apri la pagina e il quadrante inizia a seguire la direzione verso cui guardi. È una <strong>bussola online gratis</strong> pensata per una cosa sola: dirti dov'è il nord, adesso, ovunque tu sia.",
    "Se hai mai cercato «<em>dov'è il nord</em>», «<em>trovare il nord</em>» o «<em>bussola per orientarsi</em>», conosci già il problema. Sei in una strada nuova, in un'auto parcheggiata, in una camera d'albergo o in un campeggio, e il senso dell'orientamento ha smesso di aiutarti. Una <strong>bussola sul telefono</strong> sullo schermo risolve tutto in pochi secondi. La lettura della <strong>bussola online</strong> si aggiorna mentre ruoti, così l'ago non sbaglia mai la direzione.",
  ],
  sections: [
    {
      h3: 'Che cosa mostra davvero una bussola online',
      paras: [
        "Il quadrante mostra la <strong>direzione della bussola</strong> in gradi e a parole. I gradi vanno da 0° a nord, in senso orario, a 90° a est, 180° a sud e 270° a ovest. Le parole dividono il cerchio in otto direzioni, così vedi nord, nord-est, est, sud-est, sud, sud-ovest, ovest e nord-ovest senza fare alcun calcolo. Quando qualcuno cerca una <strong>bussola con direzioni</strong> intende proprio questo: una lettura utilizzabile subito, con le stesse parole che useresti per spiegare la strada a un'altra persona.",
        "Poiché il quadrante è vivo, questa è una <strong>bussola in tempo reale</strong> e non un disegno. Ruota il dispositivo e l'ago mantiene la sua direzione mentre la ghiera gira. È questo comportamento a distinguere una vera <strong>bussola digitale</strong> da un'illustrazione statica, ed è il motivo per cui la pagina funziona come guida all'<strong>orientamento con bussola</strong> mentre cammini.",
      ],
    },
    {
      h3: 'Come trovare il nord con una bussola online',
      paras: [
        "Per usare questa <strong>bussola online per trovare il nord</strong>, tieni il dispositivo piatto e lontano da metallo, calamite e altoparlanti del portatile. Tocca il pulsante di attivazione perché il browser possa leggere il magnetometro, poi ruota lentamente sul posto. L'ago si stabilizza in uno o due secondi. La punta rossa indica il nord; sud, est e ovest ne derivano. Se il valore salta, allontana il telefono dal tavolo, fai un passo fuori e riprova.",
        "I browser condividono i dati dei sensori solo dopo la tua autorizzazione, per questo lo strumento chiede una volta e poi ricorda. Quel consenso è anche il motivo per cui una <strong>bussola online gratis</strong> come questa funziona interamente sul tuo dispositivo: la lettura è calcolata in locale, nessuna cronologia delle posizioni viene inviata e nulla è salvato su un server. La stessa pagina continua a funzionare con segnale debole e, una volta caricata, mostra ancora una direzione anche se perdi la rete in mezzo ai campi.",
      ],
    },
    {
      h3: 'Bussola online o bussola fisica',
      paras: [
        "Una bussola a piastra tradizionale è affidabile, silenziosa e non resta mai senza batteria. Però richiede di tenerla in piano, allineare la ghiera e leggere una scala. Uno <strong>strumento bussola online</strong> sostituisce quel rituale con un numero. Per un rapido «verso dove sono girato» è più veloce; per un'escursione di più ore con brutto tempo, una bussola fisica e una carta cartacea restano la combinazione più sicura. Molti portano entrambe e trattano la pagina di <strong>bussola online</strong> come seconda opinione immediata.",
        "Vale anche la pena sapere cosa lo strumento non può fare. La bussola del telefono legge il nord magnetico, che si discosta dal nord geografico di una quantità che dipende dal luogo in cui ti trovi: è la declinazione magnetica. Vicino a grandi strutture metalliche, in auto o accanto a una calamita, la lettura può sbagliare di diversi gradi finché non ricalibri muovendo il dispositivo a otto. Considera l'<strong>orientamento con bussola online</strong> un indizio forte e non uno strumento topografico, e ti servirà bene.",
      ],
    },
    {
      h3: 'Chi usa ogni giorno una bussola online gratuita',
      paras: [
        "Chi cammina in città si orienta uscendo dalla metro. Gli automobilisti verificano da che parte sono entrati nel parcheggio. I fotografi annotano la direzione della luce. Escursionisti, geometri, rider per le consegne, birdwatcher e studenti in gita cercano tutti la stessa cosa: una <strong>bussola gratis</strong>, senza installazioni, senza pubblicità davanti al quadrante e senza schermate di registrazione. Tutto il progetto è qui: un quadrante, una direzione, niente confusione.",
        "Su un computer desktop o portatile la pagina si carica e spiega ancora la lettura, ma l'ago ha bisogno di un magnetometro che la maggior parte dei computer non ha. Su quei dispositivi lo strumento serve soprattutto come riferimento: leggi la parte sulla <strong>direzione nord</strong>, poi apri la stessa pagina sul telefono quando esci. Non si perde nulla: il layout è responsive e il quadrante si adatta a qualsiasi schermo.",
      ],
    },
    {
      h3: 'Leggere le direzioni senza indovinare',
      paras: [
        "I quattro punti cardinali sono facili: il <strong>nord</strong> davanti all'ago, il <strong>sud</strong> dietro, l'<strong>est</strong> a destra e l'<strong>ovest</strong> a sinistra, purché il dispositivo sia piatto e il quadrante non sia capovolto. I quattro punti intermedi coprono gli spazi e la lettura in gradi copre tutto il resto. Quando sai che 135° è sud-est, puoi tradurre qualsiasi numero mostrato dalla <strong>bussola online</strong> in una direzione che sai dire ad alta voce: esattamente ciò che serve quando sei tu a dare indicazioni.",
        "Esercitati una volta a casa. Resta fermo, annota la direzione, ruota di novanta gradi e annotala di nuovo. Se la seconda lettura è all'incirca la prima più o meno novanta, la tua <strong>bussola sul telefono</strong> si comporta bene. Altrimenti ricalibra e ripeti. Due minuti così rendono affidabile ogni lettura successiva, che tu stia cercando il <strong>nord</strong> in una città sconosciuta o verificando che la porta della tenda sia rivolta verso l'alba.",
      ],
    },
  ],
};

export const compassProse: Record<string, CompassProse> = {
  en,
  ja,
  es,
  de,
  fr,
  pt,
  ko,
  it,
};

