/**
 * Qibla clauses spliced into the shared Privacy and Terms pages, in all eight
 * languages. See qiblaLegalTypes.ts for why these sections exist.
 */
import type { QiblaLegal } from './qiblaLegalTypes';

export const qiblaLegal: Record<string, QiblaLegal> = {

  en: {
  privacy1aH: "1a. What the tool does with your location",
  privacy1a: [
      "A Qibla finder cannot work without knowing roughly where you are, and that is the one sensitive input this page asks for. The browser hands your coordinates to the page, the page computes the bearing to the Kaaba, and the coordinate is then discarded. No location history is written, no coordinate is stored in a database, and there is no way for us to see where you prayed.",
    "The compass heading is treated the same way. Your phone's magnetometer feeds the **Qibla direction arrow** inside the tab, and nothing about your heading leaves the device. Because there is no account, an **online Qibla location** check cannot be tied back to you even in principle.",
  ],
  privacy1bH: "1b. The location prompt and the IP fallback",
  privacy1b: [
      "Opening the Qibla finder triggers the browser's own location prompt. If you allow it, your coordinates are read inside the tab, the bearing is computed locally, and nothing is sent anywhere. If you decline, or your device cannot get a fix, the page requests a city-level location from a third-party IP lookup service so it can still show a **Qibla direction** instead of an empty dial. In that single case your IP address is sent to that service for the request; the result is used once, in the tab, and is not logged or stored by us. The fallback is skipped completely when location access is granted.",
    "The fallback is deliberately labelled on screen as approximate, because an IP lookup resolves to a city rather than a street. If the **online Qibla compass** says \"approximate\", the number can be a degree or two out — allow location access and reload for an exact **online Qibla location**.",
  ],
  privacy2aH: "2a. What is never collected",
  privacy2a: [
      "There is no location history, no saved prayer direction and no account that could hold either — whether you used it to **find Qibla direction** once or every day. A **compass qibla** reading is computed once per page load and forgotten. If you close the tab, the **qibla direction compass** value is gone, and reopening the page means a fresh fix rather than a stored answer.",
    "The same applies to a **quick Qibla direction** check made on a shared phone: nothing on the device records that you used it, apart from your browser's ordinary cache. If you would rather not leave even that, use a private window — the **online Qibla direction** still works, because the calculation runs on your own device.",
    "We cannot see a **qibla direction arrow** you were shown, a **qibla direction compass degrees** figure you read, or the fact that you searched for *where is qibla direction* at all. Only aggregate page views reach our analytics, and those carry a page path, not a coordinate. Anyone can verify the same behaviour with a **live gibla direction online** check in a private window and a network inspector. One practical consequence: because there is no stored last location, this **online Qibla finder** always asks the browser for a fresh fix (or, if you decline, for a fresh IP-based estimate). That is deliberately less convenient than an app and considerably more private — the **online Qibla compass** has no memory to leak if the phone changes hands.",
  ],
  termsIntro: "Please read these Terms and Conditions (\"Terms\") carefully before using the online Qibla finder (\"the Service\"). By accessing or using the Service, you agree to be bound by these Terms.",
  termsUse: "This online Qibla finder is provided free of charge for personal use. You may use the Service to calculate the Qibla direction for your location, so a **quick Qibla direction** check before prayer costs nothing and needs no registration.",
  termsAccuracy: [
      "A **Qibla direction** shown here is a calculation plus a phone sensor, not a surveyed bearing. Magnetometer error of two to five degrees is normal, and it grows near speakers, magnetic mounts, cars and steel structures. Treat the **Qibla direction compass degrees** figure as a good guide and confirm with a local marker where one exists.",
    "A **compass Qibla** reading is also personal to the device. Two phones in the same room can differ by a few degrees, and asking “where is Qibla direction” of this page is not the same as commissioning a survey. Where accuracy matters, use a device with a recent calibration and accept that an **online Qibla direction** figure is a guide rather than a ruling.",
    "Do not rely on this **online Qibla compass** where a legal or structural decision depends on exact orientation — for mosque construction or a permanent Qibla wall, use a qualified survey. For everyday prayer in an unfamiliar room, the bearing here is intended to be enough.",
    "Concretely: a **Qibla direction arrow** drawn from a phone reading may be off by a few degrees, and an **online Qibla location** fix indoors can be worse still. Where you need certainty, **find Qibla direction** twice from two different spots in the room, and if the **Qibla direction compass** readings agree, the interference is probably low. If they disagree, one of the spots is compromised.",
    "We also do not warrant that a **quick Qibla direction** check will match a local mosque's own marker. Where a community has surveyed a Qibla wall, that surveyed bearing takes precedence over any **online Qibla compass** reading, including ours. The tool is offered as a convenience, and a **live gibla direction online** result should be treated as guidance rather than as a ruling.",
  ],
  },

  es: {
  privacy1aH: "1a. Qué hace la herramienta con tu ubicación",
  privacy1a: [
      "Un buscador de alquibla no puede funcionar sin saber más o menos dónde estás, y esa es la única entrada sensible que pide esta página. El navegador entrega tus coordenadas a la página, la página calcula el rumbo hacia la Kaaba y la coordenada se descarta después. No se escribe ningún historial de ubicación, no se guarda ninguna coordenada en una base de datos y no hay forma de que veamos dónde rezaste.",
    "El rumbo de la brújula se trata igual. El magnetómetro del móvil alimenta la **flecha de la alquibla** dentro de la pestaña y nada sobre tu orientación sale del dispositivo. Como no hay cuenta, una comprobación de **ubicación de la alquibla online** no puede vincularse a ti ni en teoría.",
  ],
  privacy1bH: "1b. El aviso de ubicación y la alternativa por IP",
  privacy1b: [
      "Abrir el buscador de alquibla lanza el aviso de ubicación del propio navegador. Si lo permites, tus coordenadas se leen dentro de la pestaña, el rumbo se calcula localmente y no se envía nada a ninguna parte. Si lo rechazas, o tu dispositivo no consigue señal, la página solicita una ubicación a nivel de ciudad a un servicio externo de búsqueda de IP para poder seguir mostrando una **dirección de la alquibla** en lugar de un dial vacío. Solo en ese caso tu dirección IP se envía a ese servicio para la consulta; el resultado se usa una vez, en la pestaña, y no lo registramos ni lo guardamos. La alternativa se omite por completo cuando se concede el acceso a la ubicación.",
    "La alternativa se etiqueta en pantalla como aproximada a propósito, porque una consulta de IP resuelve una ciudad, no una calle. Si la **brújula de alquibla online** dice «aproximada», el número puede fallar uno o dos grados: permite el acceso a la ubicación y recarga para una **ubicación de la alquibla online** exacta.",
  ],
  privacy2aH: "2a. Qué no se recoge nunca",
  privacy2a: [
      "No hay historial de ubicación, ni dirección de rezo guardada, ni cuenta que pueda contener ninguna de las dos cosas, tanto si lo usaste para **encontrar la dirección de la alquibla** una vez como todos los días. Una lectura de **alquibla con brújula** se calcula una vez por carga de página y se olvida. Si cierras la pestaña, el valor de la **brújula de la dirección de la alquibla** desaparece, y volver a abrir la página significa una señal nueva en lugar de una respuesta guardada.",
    "Lo mismo vale para una comprobación de **dirección de la alquibla rápida** hecha en un móvil compartido: nada en el dispositivo registra que la usaste, aparte de la caché normal del navegador. Si prefieres no dejar ni eso, usa una ventana privada: la **dirección de la alquibla online** sigue funcionando porque el cálculo se ejecuta en tu propio dispositivo.",
    "No podemos ver una **flecha de la alquibla** que se te mostró, un valor en **grados de la dirección de la alquibla** que leíste, ni el hecho de que buscaras *dónde está la alquibla*. Solo llegan a nuestras analíticas páginas vistas agregadas, y llevan una ruta, no una coordenada. Cualquiera puede verificar el mismo comportamiento con una comprobación de **alquibla en vivo** en una ventana privada y un inspector de red. Una consecuencia práctica: como no hay última ubicación guardada, este **buscador de alquibla online** siempre pide al navegador una señal nueva (o, si lo rechazas, una estimación nueva por IP). Es a propósito menos cómodo que una app y bastante más privado: la **brújula de alquibla online** no tiene memoria que filtrar si el móvil cambia de manos.",
  ],
  termsIntro: "Lee con atención estos Términos y Condiciones («Términos») antes de usar el buscador de alquibla online («el Servicio»). Al acceder o usar el Servicio aceptas quedar vinculado por estos Términos.",
  termsUse: "Este buscador de alquibla online se ofrece gratis para uso personal. Puedes usar el Servicio para calcular la dirección de la alquibla de tu ubicación, así que una comprobación de **dirección de la alquibla rápida** antes del rezo no cuesta nada y no necesita registro.",
  termsAccuracy: [
      "La **dirección de la alquibla** que se muestra aquí es un cálculo más un sensor de móvil, no un rumbo topográfico. Un error de magnetómetro de dos a cinco grados es normal, y crece cerca de altavoces, soportes magnéticos, coches y estructuras de acero. Trata el valor en **grados de la dirección de la alquibla** como una buena guía y confírmalo con una marca local cuando exista.",
    "Una lectura de **alquibla con brújula** también es personal del dispositivo. Dos móviles en la misma habitación pueden diferir unos grados, y preguntar «dónde está la alquibla» a esta página no es lo mismo que encargar un estudio topográfico. Cuando la precisión importa, usa un dispositivo con calibración reciente y acepta que un valor de **dirección de la alquibla online** es una guía y no un dictamen.",
    "No te fíes de esta **brújula de alquibla online** cuando una decisión legal o estructural dependa de la orientación exacta: para construir una mezquita o un muro de alquibla permanente, usa un estudio cualificado. Para el rezo diario en una habitación desconocida, el rumbo que damos pretende ser suficiente.",
    "En concreto: una **flecha de la alquibla** dibujada a partir de un móvil puede desviarse unos grados, y una señal de **ubicación de la alquibla online** en interiores puede ser peor. Cuando necesites certeza, **encuentra la dirección de la alquibla** dos veces desde dos puntos distintos de la habitación, y si las lecturas de la **brújula de la dirección de la alquibla** coinciden, la interferencia es probablemente baja. Si no coinciden, uno de los puntos está comprometido.",
    "Tampoco garantizamos que una comprobación de **dirección de la alquibla rápida** coincida con la marca de la mezquita local. Donde una comunidad ha estudiado un muro de alquibla, ese rumbo estudiado prevalece sobre cualquier lectura de **brújula de alquibla online**, incluida la nuestra. La herramienta se ofrece como comodidad, y un resultado de **alquibla en vivo** debe tomarse como orientación y no como dictamen.",
  ],
  },

  ja: {
  privacy1aH: "1a. ツールが位置情報で行うこと",
  privacy1a: [
      "キブラファインダーは、おおよその現在地を知らなければ動作しません。それがこのページが求める唯一の機微な入力です。ブラウザがページに座標を渡し、ページがカアバへの方位を計算し、座標はそのあと破棄されます。位置履歴は書き込まれず、座標がデータベースに保存されることもなく、どこで礼拝したかを私たちが見る方法はありません。",
    "コンパスの方位も同じ扱いです。スマホの磁気センサーがタブ内の**キブラ方向の矢印**に反映され、向きに関する情報が端末の外に出ることはありません。アカウントがないため、**オンラインキブラの位置情報**の確認を原理的にもあなたに結びつけることはできません。",
  ],
  privacy1bH: "1b. 位置情報の確認とIPフォールバック",
  privacy1b: [
      "キブラファインダーを開くとブラウザ自身の位置情報確認が表示されます。許可すれば座標はタブ内で読まれ、方位はローカルで計算され、どこにも送信されません。拒否した場合や端末が位置を取得できない場合、ページは空の文字盤の代わりに**キブラ方向**を示せるよう、第三者IP照会サービスに都市レベルの位置を問い合わせます。その場合に限り、そのリクエストのためにIPアドレスが当該サービスへ送信されます。結果はタブ内で一度使われるだけで、当方で記録や保存はしません。位置情報へのアクセスが許可されているときは、フォールバックは完全に省略されます。",
    "IP照会は通りではなく都市を返すため、フォールバックは画面上で意図的に「おおよそ」と表示されます。**オンラインキブラコンパス**が「おおよそ」と示すとき、数字は1〜2度ずれる可能性があります。正確な**オンラインキブラの位置情報**には、位置情報を許可して再読み込みしてください。",
  ],
  privacy2aH: "2a. 決して収集しないもの",
  privacy2a: [
      "位置履歴も、保存された礼拝方向も、それを保持しうるアカウントもありません。**キブラ方向を調べる**のに一度使った場合も毎日使う場合も同じです。**コンパスによるキブラ**の読みはページ読み込みごとに計算され、忘れられます。タブを閉じれば**キブラ方向コンパス**の値は消え、開き直すと保存された答えではなく新しい測位になります。",
    "共有のスマホで**手早いキブラ方向**を確認した場合も同じです。ブラウザの通常のキャッシュ以外に、使用の記録は端末に残りません。それさえ残したくない場合はプライベートウィンドウを使ってください。計算は自分の端末で行われるため、**オンラインのキブラ方向**はそのまま動作します。",
    "表示された**キブラ方向の矢印**、読み取った**キブラ方向のコンパス度数**、*キブラはどこか*と検索した事実を、私たちが見ることはできません。分析に届くのは集計されたページビューだけで、そこに含まれるのはページのパスであり座標ではありません。同じ挙動はプライベートウィンドウとネットワーク検査ツールで**オンラインのライブキブラ方向**を確認して誰でも検証できます。実務上の帰結として、保存された前回位置がないため、この**オンラインキブラファインダー**は常にブラウザへ新しい測位を求めます（拒否した場合は新しいIPベースの推定を求めます）。これはアプリより意図的に不便で、はるかにプライベートです。スマホが他人の手に渡っても、**オンラインキブラコンパス**には漏れる記憶がありません。",
  ],
  termsIntro: "オンラインキブラファインダー（以下「本サービス」）をご利用になる前に、この利用規約（以下「本規約」）をよくお読みください。本サービスにアクセスまたは利用することで、本規約に拘束されることに同意したものとみなされます。",
  termsUse: "このオンラインキブラファインダーは個人利用のために無料で提供されます。本サービスを使って現在地のキブラ方向を計算できるため、礼拝前の**手早いキブラ方向**の確認に費用も登録も必要ありません。",
  termsAccuracy: [
      "ここに表示される**キブラ方向**は計算とスマホのセンサーによるもので、測量された方位ではありません。磁気センサーの2〜5度の誤差は正常で、スピーカー、マグネット式ホルダー、車、鉄骨構造の近くでは大きくなります。**キブラ方向のコンパス度数**は良い目安として扱い、地域の目印がある場合はそれで確認してください。",
    "**コンパスによるキブラ**の読みは端末ごとの個人差もあります。同じ部屋の2台のスマホが数度違うこともあり、このページに「キブラはどこか」と尋ねるのは測量を発注するのとは違います。精度が重要な場合は最近調整した端末を使い、**オンラインのキブラ方向**の値は裁定ではなく目安だと理解してください。",
    "法的または構造上の判断が正確な方位に依存する場合、この**オンラインキブラコンパス**に頼らないでください。モスクの建設や恒久的なキブラ壁には資格ある測量を用いてください。見知らぬ部屋での日常の礼拝には、ここで示す方位で足りることを意図しています。",
    "具体的には、スマホの読みから描いた**キブラ方向の矢印**は数度ずれることがあり、屋内での**オンラインキブラ位置情報**はさらに悪化することがあります。確実性が必要なときは、部屋の2か所から**キブラ方向を調べ**、**キブラ方向コンパス**の読みが一致すれば干渉は少ないと判断できます。一致しない場合、どちらかの地点が影響を受けています。",
    "また、**手早いキブラ方向**の確認が地元モスクの目印と一致することも保証しません。地域が測量したキブラ壁がある場合、その測量方位が当方を含むいかなる**オンラインキブラコンパス**の読みより優先されます。本ツールは利便性のために提供され、**オンラインのライブキブラ方向**の結果は裁定ではなく指針として扱ってください。",
  ],
  },

  fr: {
  privacy1aH: "1a. Ce que l’outil fait de votre position",
  privacy1a: [
      "Un chercheur de Qibla ne peut pas fonctionner sans savoir à peu près où vous êtes, et c’est la seule donnée sensible que cette page demande. Le navigateur transmet vos coordonnées à la page, la page calcule le relèvement vers la Kaaba, puis la coordonnée est écartée. Aucun historique de position n’est écrit, aucune coordonnée n’est stockée en base, et il nous est impossible de voir où vous avez prié.",
    "Le cap de la boussole est traité de la même manière. Le magnétomètre de votre téléphone alimente la **flèche de direction de la Qibla** dans l’onglet, et rien sur votre orientation ne quitte l’appareil. Comme il n’y a pas de compte, une vérification de **localisation de la Qibla en ligne** ne peut pas être reliée à vous, même en théorie.",
  ],
  privacy1bH: "1b. La demande de localisation et le repli par IP",
  privacy1b: [
      "Ouvrir le chercheur de Qibla déclenche la demande de localisation du navigateur. Si vous l’acceptez, vos coordonnées sont lues dans l’onglet, le relèvement est calculé localement et rien n’est envoyé. Si vous refusez, ou si votre appareil ne parvient pas à se localiser, la page demande une position au niveau de la ville à un service tiers de géolocalisation par IP afin de pouvoir afficher une **direction de la Qibla** plutôt qu’un cadran vide. Dans ce seul cas, votre adresse IP est envoyée à ce service pour la requête ; le résultat sert une fois, dans l’onglet, et n’est ni journalisé ni stocké par nous. Le repli est totalement omis lorsque l’accès à la position est accordé.",
    "Le repli est volontairement étiqueté à l’écran comme approximatif, car une recherche par IP résout une ville et non une rue. Si la **boussole Qibla en ligne** indique « approximative », le chiffre peut être faux d’un ou deux degrés : autorisez la localisation et rechargez pour une **localisation de la Qibla en ligne** exacte.",
  ],
  privacy2aH: "2a. Ce qui n’est jamais collecté",
  privacy2a: [
      "Aucun historique de position, aucune direction de prière enregistrée et aucun compte pouvant contenir l’un ou l’autre — que vous ayez utilisé l’outil pour **trouver la direction de la Qibla** une seule fois ou chaque jour. Une lecture de **Qibla à la boussole** est calculée à chaque chargement de page puis oubliée. Si vous fermez l’onglet, la valeur de **boussole de direction de la Qibla** disparaît, et rouvrir la page signifie une nouvelle mesure plutôt qu’une réponse stockée.",
    "Il en va de même pour une vérification de **direction de la Qibla rapide** faite sur un téléphone partagé : rien sur l’appareil ne garde trace de votre usage, hormis le cache ordinaire du navigateur. Si vous préférez ne pas laisser même cela, utilisez une fenêtre privée : la **direction de la Qibla en ligne** fonctionne toujours, car le calcul s’exécute sur votre propre appareil.",
    "Nous ne pouvons pas voir une **flèche de direction de la Qibla** qui vous a été montrée, une valeur en **degrés de direction de la Qibla** que vous avez lue, ni le fait que vous ayez cherché *où est la Qibla*. Seules des pages vues agrégées parviennent à nos statistiques, et elles portent un chemin de page, pas une coordonnée. Chacun peut vérifier ce comportement avec une **Qibla en direct** dans une fenêtre privée et un inspecteur réseau. Une conséquence pratique : comme aucune dernière position n’est stockée, ce **chercheur de Qibla en ligne** demande toujours au navigateur une mesure fraîche (ou, si vous refusez, une nouvelle estimation par IP). C’est volontairement moins pratique qu’une application et bien plus confidentiel — la **boussole Qibla en ligne** n’a aucune mémoire qui pourrait fuiter si le téléphone change de mains.",
  ],
  termsIntro: "Veuillez lire attentivement les présentes Conditions générales (« Conditions ») avant d’utiliser le chercheur de Qibla en ligne (le « Service »). En accédant au Service ou en l’utilisant, vous acceptez d’être lié par ces Conditions.",
  termsUse: "Ce chercheur de Qibla en ligne est fourni gratuitement pour un usage personnel. Vous pouvez utiliser le Service pour calculer la direction de la Qibla de votre position : une vérification de **direction de la Qibla rapide** avant la prière ne coûte donc rien et ne demande aucune inscription.",
  termsAccuracy: [
      "La **direction de la Qibla** affichée ici est un calcul plus un capteur de téléphone, pas un relèvement de géomètre. Une erreur de magnétomètre de deux à cinq degrés est normale, et elle augmente près des haut-parleurs, supports magnétiques, voitures et structures métalliques. Traitez la valeur en **degrés de direction de la Qibla** comme un bon repère et confirmez-la avec un marqueur local lorsqu’il en existe un.",
    "Une lecture de **Qibla à la boussole** est aussi propre à l’appareil. Deux téléphones dans la même pièce peuvent différer de quelques degrés, et demander « où est la Qibla » à cette page n’est pas la même chose que commander un relevé. Là où la précision compte, utilisez un appareil récemment calibré et acceptez qu’une valeur de **direction de la Qibla en ligne** soit un repère et non une sentence.",
    "Ne vous fiez pas à cette **boussole Qibla en ligne** lorsqu’une décision juridique ou structurelle dépend d’une orientation exacte : pour la construction d’une mosquée ou d’un mur de Qibla permanent, faites appel à un géomètre qualifié. Pour la prière quotidienne dans une pièce inconnue, le relèvement donné ici se veut suffisant.",
    "Concrètement : une **flèche de direction de la Qibla** tracée à partir d’un téléphone peut être décalée de quelques degrés, et une **localisation de la Qibla en ligne** en intérieur peut être pire encore. Si vous avez besoin de certitude, **trouvez la direction de la Qibla** deux fois depuis deux endroits de la pièce, et si les lectures de la **boussole de direction de la Qibla** concordent, l’interférence est probablement faible. Si elles diffèrent, l’un des endroits est compromis.",
    "Nous ne garantissons pas non plus qu’une vérification de **direction de la Qibla rapide** corresponde au repère de la mosquée locale. Lorsqu’une communauté a relevé un mur de Qibla, ce relèvement relevé prime sur toute lecture de **boussole Qibla en ligne**, y compris la nôtre. L’outil est offert par commodité, et un résultat de **Qibla en direct** doit être pris comme une indication et non comme une sentence.",
  ],
  },

  de: {
  privacy1aH: "1a. Was das Tool mit Ihrem Standort macht",
  privacy1a: [
      "Ein Qibla-Finder kann nicht arbeiten, ohne ungefähr zu wissen, wo Sie sind, und das ist die einzige sensible Eingabe, die diese Seite verlangt. Der Browser übergibt Ihre Koordinaten an die Seite, die Seite berechnet den Azimut zur Kaaba, danach wird die Koordinate verworfen. Es wird kein Standortverlauf geschrieben, keine Koordinate in einer Datenbank gespeichert, und wir können nicht sehen, wo Sie gebetet haben.",
    "Der Kompasskurs wird genauso behandelt. Das Magnetometer Ihres Telefons speist den **Qibla-Richtungspfeil** im Tab, und nichts über Ihre Blickrichtung verlässt das Gerät. Da es kein Konto gibt, lässt sich eine Prüfung des **Qibla-Standorts online** auch theoretisch nicht Ihnen zuordnen.",
  ],
  privacy1bH: "1b. Die Standortabfrage und der IP-Ersatz",
  privacy1b: [
      "Beim Öffnen des Qibla-Finders erscheint die Standortabfrage des Browsers. Wenn Sie zustimmen, werden Ihre Koordinaten im Tab gelesen, der Azimut lokal berechnet und nichts gesendet. Wenn Sie ablehnen oder Ihr Gerät kein Fix bekommt, fragt die Seite einen Standort auf Stadtebene bei einem externen IP-Dienst ab, damit sie trotzdem eine **Qibla-Richtung** statt eines leeren Zifferblatts zeigen kann. Nur in diesem einen Fall wird Ihre IP-Adresse für die Anfrage an diesen Dienst gesendet; das Ergebnis wird einmal im Tab genutzt und von uns weder protokolliert noch gespeichert. Bei erteiltem Standortzugriff entfällt der Ersatz vollständig.",
    "Der Ersatz wird auf dem Bildschirm bewusst als ungefähr gekennzeichnet, weil eine IP-Abfrage eine Stadt und keine Straße auflöst. Wenn der **Online-Qibla-Kompass** „ungefähr“ anzeigt, kann die Zahl ein bis zwei Grad danebenliegen — erlauben Sie den Standort und laden Sie neu für einen exakten **Qibla-Standort online**.",
  ],
  privacy2aH: "2a. Was niemals erfasst wird",
  privacy2a: [
      "Es gibt keinen Standortverlauf, keine gespeicherte Gebetsrichtung und kein Konto, das beides enthalten könnte — egal, ob Sie das Tool einmal oder täglich zum **Qibla-Richtung finden** genutzt haben. Eine Messung mit dem **Qibla-Azimut per Kompass** wird pro Seitenaufruf berechnet und vergessen. Wenn Sie den Tab schließen, ist der Wert des **Qibla-Richtungskompasses** fort, und ein erneutes Öffnen bedeutet ein frisches Fix statt einer gespeicherten Antwort.",
    "Dasselbe gilt für eine Prüfung der **schnellen Qibla-Richtung** auf einem geteilten Telefon: Auf dem Gerät wird außer dem normalen Browsercache nichts festgehalten. Wenn Sie auch das vermeiden wollen, nutzen Sie ein privates Fenster — die **Online-Qibla-Richtung** funktioniert weiterhin, weil die Berechnung auf Ihrem eigenen Gerät läuft.",
    "Wir können keinen **Qibla-Richtungspfeil** sehen, der Ihnen gezeigt wurde, keinen abgelesenen Wert in **Grad der Qibla-Richtung** und auch nicht, dass Sie überhaupt nach *wo ist die Qibla* gesucht haben. In unsere Statistik gelangen nur aggregierte Seitenaufrufe, und die tragen einen Pfad, keine Koordinate. Jeder kann dasselbe Verhalten mit einer **Qibla-Richtung live** in einem privaten Fenster und einem Netzwerk-Inspektor prüfen. Eine praktische Folge: Weil kein letzter Standort gespeichert ist, fordert dieser **Online-Qibla-Finder** vom Browser immer ein frisches Fix an (oder, bei Ablehnung, eine neue IP-Schätzung). Das ist bewusst unbequemer als eine App und deutlich privater — der **Online-Qibla-Kompass** hat kein Gedächtnis, das lecken könnte, wenn das Telefon den Besitzer wechselt.",
  ],
  termsIntro: "Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen („Bedingungen“) sorgfältig, bevor Sie den Online-Qibla-Finder („der Dienst“) nutzen. Mit dem Zugriff auf den Dienst oder dessen Nutzung erklären Sie sich an diese Bedingungen gebunden.",
  termsUse: "Dieser Online-Qibla-Finder wird für die persönliche Nutzung kostenlos bereitgestellt. Sie dürfen den Dienst nutzen, um die Qibla-Richtung für Ihren Standort zu berechnen; eine Prüfung der **schnellen Qibla-Richtung** vor dem Gebet kostet also nichts und erfordert keine Registrierung.",
  termsAccuracy: [
      "Eine hier angezeigte **Qibla-Richtung** ist eine Berechnung plus ein Telefonsensor, kein vermessener Azimut. Ein Magnetometerfehler von zwei bis fünf Grad ist normal und wächst in der Nähe von Lautsprechern, Magnethalterungen, Autos und Stahlkonstruktionen. Behandeln Sie den Wert in **Grad der Qibla-Richtung** als guten Anhaltspunkt und bestätigen Sie ihn, wo es eine lokale Markierung gibt.",
    "Eine Messung mit dem **Qibla-Azimut per Kompass** ist zudem gerätespezifisch. Zwei Telefone im selben Raum können um einige Grad abweichen, und diese Seite nach „wo ist die Qibla“ zu fragen ist nicht dasselbe wie eine Vermessung in Auftrag zu geben. Wo Genauigkeit zählt, nutzen Sie ein frisch kalibriertes Gerät und akzeptieren Sie, dass eine **Online-Qibla-Richtung** eine Orientierung und kein Richterspruch ist.",
    "Verlassen Sie sich nicht auf diesen **Online-Qibla-Kompass**, wenn eine rechtliche oder bauliche Entscheidung von der exakten Ausrichtung abhängt — für einen Moscheebau oder eine dauerhafte Qibla-Wand nutzen Sie eine qualifizierte Vermessung. Für das alltägliche Gebet in einem fremden Raum soll der Azimut hier ausreichen.",
    "Konkret: Ein aus einer Telefonmessung gezeichneter **Qibla-Richtungspfeil** kann um einige Grad danebenliegen, und ein **Qibla-Standort online** drinnen kann noch schlechter sein. Wenn Sie Sicherheit brauchen, **finden Sie die Qibla-Richtung** zweimal von zwei verschiedenen Stellen im Raum, und stimmen die Messungen des **Qibla-Richtungskompasses** überein, ist die Störung wahrscheinlich gering. Weichen sie ab, ist eine der Stellen beeinträchtigt.",
    "Wir garantieren auch nicht, dass eine Prüfung der **schnellen Qibla-Richtung** mit der Markierung der örtlichen Moschee übereinstimmt. Wo eine Gemeinde eine Qibla-Wand vermessen hat, hat dieser vermessene Azimut Vorrang vor jeder Messung mit einem **Online-Qibla-Kompass**, auch vor unserer. Das Tool ist eine Erleichterung, und ein Ergebnis der **Qibla-Richtung live** sollte als Orientierung und nicht als Richterspruch gelten.",
  ],
  },

  pt: {
  privacy1aH: "1a. O que a ferramenta faz com a sua localização",
  privacy1a: [
      "Um localizador de Qibla não funciona sem saber aproximadamente onde você está, e essa é a única entrada sensível que esta página pede. O navegador entrega suas coordenadas à página, a página calcula o rumo até a Caaba e a coordenada é descartada em seguida. Nenhum histórico de localização é gravado, nenhuma coordenada é armazenada em banco de dados e não há como vermos onde você orou.",
    "O rumo da bússola é tratado do mesmo jeito. O magnetômetro do celular alimenta a **seta da direção da Qibla** dentro da aba, e nada sobre a sua orientação sai do aparelho. Como não há conta, uma checagem de **localização da Qibla online** não pode ser ligada a você nem em teoria.",
  ],
  privacy1bH: "1b. O aviso de localização e a alternativa por IP",
  privacy1b: [
      "Abrir o localizador de Qibla dispara o aviso de localização do próprio navegador. Se você permitir, suas coordenadas são lidas dentro da aba, o rumo é calculado localmente e nada é enviado a lugar nenhum. Se recusar, ou se o aparelho não conseguir se localizar, a página pede uma localização em nível de cidade a um serviço externo de consulta de IP para ainda mostrar uma **direção da Qibla** em vez de um mostrador vazio. Só nesse caso seu endereço IP é enviado a esse serviço para a requisição; o resultado é usado uma vez, na aba, e não é registrado nem armazenado por nós. A alternativa é totalmente ignorada quando o acesso à localização é concedido.",
    "A alternativa é rotulada na tela como aproximada de propósito, porque uma consulta de IP resolve uma cidade, não uma rua. Se a **bússola de Qibla online** disser “aproximada”, o número pode errar um ou dois graus — permita o acesso à localização e recarregue para uma **localização da Qibla online** exata.",
  ],
  privacy2aH: "2a. O que nunca é coletado",
  privacy2a: [
      "Não há histórico de localização, direção de oração salva nem conta que possa guardar qualquer uma das duas — seja você usou para **encontrar a direção da Qibla** uma vez ou todos os dias. Uma leitura de **Qibla na bússola** é calculada uma vez por carregamento e esquecida. Se você fechar a aba, o valor da **bússola da direção da Qibla** se perde, e reabrir a página significa uma localização nova em vez de uma resposta guardada.",
    "O mesmo vale para uma checagem de **direção da Qibla rápida** feita num celular compartilhado: nada no aparelho registra que você usou, além do cache normal do navegador. Se preferir não deixar nem isso, use uma janela privada — a **direção da Qibla online** continua funcionando, porque o cálculo roda no seu próprio aparelho.",
    "Não podemos ver uma **seta da direção da Qibla** que foi mostrada a você, um valor em **graus da direção da Qibla** que você leu, nem o fato de você ter pesquisado *onde fica a Qibla*. Só chegam à nossa analítica visualizações agregadas, e elas levam um caminho de página, não uma coordenada. Qualquer pessoa pode verificar o mesmo comportamento com uma checagem de **Qibla ao vivo** numa janela privada e um inspetor de rede. Uma consequência prática: como não há última localização guardada, este **localizador de Qibla online** sempre pede ao navegador uma localização nova (ou, se você recusar, uma nova estimativa por IP). Isso é de propósito menos prático que um aplicativo e bem mais privado — a **bússola de Qibla online** não tem memória que possa vazar se o celular mudar de mãos.",
  ],
  termsIntro: "Leia estes Termos e Condições (“Termos”) com atenção antes de usar o localizador de Qibla online (“o Serviço”). Ao acessar ou usar o Serviço, você concorda em ficar vinculado a estes Termos.",
  termsUse: "Este localizador de Qibla online é oferecido gratuitamente para uso pessoal. Você pode usar o Serviço para calcular a direção da Qibla da sua localização, então uma checagem de **direção da Qibla rápida** antes da oração não custa nada e não exige cadastro.",
  termsAccuracy: [
      "A **direção da Qibla** mostrada aqui é um cálculo mais um sensor de celular, não um rumo de levantamento topográfico. Um erro de magnetômetro de dois a cinco graus é normal, e cresce perto de alto-falantes, suportes magnéticos, carros e estruturas de aço. Trate o valor em **graus da direção da Qibla** como um bom guia e confirme com uma marcação local quando existir.",
    "Uma leitura de **Qibla na bússola** também é pessoal do aparelho. Dois celulares no mesmo cômodo podem diferir alguns graus, e perguntar “onde fica a Qibla” a esta página não é o mesmo que contratar um levantamento. Onde a precisão importa, use um aparelho com calibração recente e aceite que um valor de **direção da Qibla online** é orientação e não sentença.",
    "Não confie nesta **bússola de Qibla online** quando uma decisão legal ou estrutural depender da orientação exata — para construir uma mesquita ou uma parede da Qibla permanente, use um levantamento qualificado. Para a oração diária num cômodo desconhecido, o rumo mostrado aqui pretende ser suficiente.",
    "Concretamente: uma **seta da direção da Qibla** desenhada a partir de um celular pode errar alguns graus, e uma **localização da Qibla online** em ambiente interno pode ser pior. Quando precisar de certeza, **encontre a direção da Qibla** duas vezes em dois pontos do cômodo, e se as leituras da **bússola da direção da Qibla** concordarem, a interferência provavelmente é baixa. Se divergirem, um dos pontos está comprometido.",
    "Também não garantimos que uma checagem de **direção da Qibla rápida** coincida com a marcação da mesquita local. Onde uma comunidade levantou uma parede da Qibla, esse rumo levantado tem precedência sobre qualquer leitura da **bússola de Qibla online**, inclusive a nossa. A ferramenta é oferecida por conveniência, e um resultado de **Qibla ao vivo** deve ser tratado como orientação e não como sentença.",
  ],
  },

  ko: {
  privacy1aH: "1a. 이 도구가 위치 정보로 하는 일",
  privacy1a: [
      "키블라 파인더는 대략적인 위치를 모르면 작동할 수 없고, 그것이 이 페이지가 요청하는 유일한 민감한 입력입니다. 브라우저가 페이지에 좌표를 넘기고, 페이지가 카바까지의 방위를 계산한 뒤 좌표는 버려집니다. 위치 기록은 남지 않고, 좌표가 데이터베이스에 저장되지 않으며, 우리가 어디서 예배했는지 볼 방법은 없습니다.",
    "나침반 방위도 같은 방식입니다. 휴대폰의 자력계가 탭 안의 **키블라 방향 화살표**에 쓰이고, 방향에 관한 정보는 기기 밖으로 나가지 않습니다. 계정이 없으므로 **온라인 키블라 위치** 확인은 원칙적으로도 사용자와 연결될 수 없습니다.",
  ],
  privacy1bH: "1b. 위치 요청과 IP 대체값",
  privacy1b: [
      "키블라 파인더를 열면 브라우저 자체의 위치 요청이 뜹니다. 허용하면 좌표는 탭 안에서 읽히고 방위는 로컬에서 계산되며 어디에도 전송되지 않습니다. 거부하거나 기기가 측위에 실패하면, 페이지는 빈 눈금판 대신 **키블라 방향**을 보여 줄 수 있도록 제3자 IP 조회 서비스에 도시 수준의 위치를 요청합니다. 이 경우에만 해당 요청을 위해 IP 주소가 그 서비스로 전송됩니다. 결과는 탭 안에서 한 번 쓰이고 우리가 기록하거나 저장하지 않습니다. 위치 접근이 허용되면 대체 조회는 완전히 생략됩니다.",
    "IP 조회는 거리가 아니라 도시를 알려 주므로 대체값은 화면에 의도적으로 ‘대략’으로 표시됩니다. **온라인 키블라 나침반**이 ‘대략’이라고 하면 숫자가 1~2도 어긋날 수 있습니다. 정확한 **온라인 키블라 위치**가 필요하면 위치를 허용하고 새로고침하세요.",
  ],
  privacy2aH: "2a. 절대 수집하지 않는 것",
  privacy2a: [
      "위치 기록도, 저장된 예배 방향도, 그 둘을 담을 수 있는 계정도 없습니다. **키블라 방향을 찾는** 데 한 번 썼든 매일 썼든 마찬가지입니다. **나침반 키블라** 판독값은 페이지 로드마다 한 번 계산되고 잊힙니다. 탭을 닫으면 **키블라 방향 나침반** 값은 사라지고, 페이지를 다시 열면 저장된 답이 아니라 새로운 측위가 이루어집니다.",
    "공유 휴대폰에서 **빠른 키블라 방향**을 확인한 경우도 같습니다. 브라우저의 일반 캐시 외에는 사용 기록이 기기에 남지 않습니다. 그것조차 남기기 싫다면 시크릿 창을 쓰세요. 계산이 내 기기에서 실행되므로 **온라인 키블라 방향**은 그대로 작동합니다.",
    "보여 드린 **키블라 방향 화살표**, 읽으신 **키블라 방향 나침반 각도** 값, *키블라 어디*를 검색했다는 사실을 우리는 볼 수 없습니다. 분석 도구에는 집계된 페이지뷰만 도달하며 거기에는 페이지 경로가 담기고 좌표는 담기지 않습니다. 같은 동작은 시크릿 창과 네트워크 검사 도구로 **실시간 키블라 방향**을 확인해 누구나 검증할 수 있습니다. 실무적 결과 하나: 마지막 위치를 저장하지 않으므로 이 **온라인 키블라 파인더**는 항상 브라우저에 새 측위를 요청합니다(거부하면 새로운 IP 기반 추정을 요청합니다). 앱보다 의도적으로 불편하고 훨씬 더 사적입니다. 휴대폰이 다른 사람 손에 넘어가도 **온라인 키블라 나침반**에는 새어 나갈 기억이 없습니다.",
  ],
  termsIntro: "온라인 키블라 파인더(이하 “서비스”)를 사용하기 전에 이 이용약관(이하 “약관”)을 주의 깊게 읽어 주세요. 서비스에 접속하거나 사용하면 이 약관에 구속되는 것에 동의한 것으로 봅니다.",
  termsUse: "이 온라인 키블라 파인더는 개인 사용을 위해 무료로 제공됩니다. 서비스를 사용해 내 위치의 키블라 방향을 계산할 수 있으므로, 예배 전 **빠른 키블라 방향** 확인에는 비용도 등록도 필요하지 않습니다.",
  termsAccuracy: [
      "여기 표시되는 **키블라 방향**은 계산과 휴대폰 센서의 결과이며 측량된 방위가 아닙니다. 자력계의 2~5도 오차는 정상이며 스피커, 자석 거치대, 자동차, 철골 구조물 근처에서 커집니다. **키블라 방향 나침반 각도** 값은 좋은 안내로 삼고, 지역 표시가 있으면 그것으로 확인하세요.",
    "**나침반 키블라** 판독값은 기기마다 다릅니다. 같은 방의 두 휴대폰이 몇 도 차이 날 수 있고, 이 페이지에 “키블라 어디”를 묻는 것은 측량을 의뢰하는 것과 다릅니다. 정확도가 중요할 때는 최근에 보정한 기기를 쓰고, **온라인 키블라 방향** 값은 판정이 아니라 안내로 받아들이세요.",
    "법적 또는 구조적 판단이 정확한 방향에 달려 있다면 이 **온라인 키블라 나침반**에 의존하지 마세요. 모스크 건축이나 영구적인 키블라 벽에는 자격을 갖춘 측량을 이용하세요. 낯선 방에서의 일상 예배에는 여기 제시하는 방위로 충분하도록 의도했습니다.",
    "구체적으로, 휴대폰 판독값으로 그린 **키블라 방향 화살표**는 몇 도 어긋날 수 있고, 실내에서의 **온라인 키블라 위치**는 더 나쁠 수 있습니다. 확실성이 필요하면 방의 서로 다른 두 지점에서 **키블라 방향을 찾아** 보고, **키블라 방향 나침반** 판독값이 일치하면 간섭이 적다고 볼 수 있습니다. 다르다면 두 지점 중 하나가 영향을 받은 것입니다.",
    "또한 **빠른 키블라 방향** 확인이 지역 모스크의 표시와 일치한다고 보증하지 않습니다. 지역 공동체가 키블라 벽을 측량했다면 그 측량 방위가 우리를 포함한 어떤 **온라인 키블라 나침반** 판독값보다 우선합니다. 이 도구는 편의를 위해 제공되며, **실시간 키블라 방향** 결과는 판정이 아니라 지침으로 다루어야 합니다.",
  ],
  },

  it: {
  privacy1aH: "1a. Cosa fa lo strumento con la tua posizione",
  privacy1a: [
      "Un cercatore di Qibla non può funzionare senza sapere all'incirca dove sei, e questo è l'unico dato sensibile che la pagina chiede. Il browser passa le coordinate alla pagina, la pagina calcola il rilevamento verso la Kaaba e poi la coordinata viene scartata. Nessuno storico delle posizioni viene scritto, nessuna coordinata è salvata in un database e non possiamo vedere dove hai pregato.",
    "La direzione della bussola è trattata allo stesso modo. Il magnetometro del telefono alimenta la **freccia della direzione della Qibla** nella scheda e nulla del tuo orientamento lascia il dispositivo. Poiché non esiste un account, un controllo della **posizione della Qibla online** non può essere ricondotto a te nemmeno in teoria.",
  ],
  privacy1bH: "1b. La richiesta di posizione e il ripiego sull'IP",
  privacy1b: [
      "Aprire il cercatore di Qibla attiva la richiesta di posizione del browser. Se la consenti, le coordinate vengono lette nella scheda, il rilevamento è calcolato localmente e nulla viene inviato. Se rifiuti, o se il dispositivo non ottiene un fix, la pagina richiede una posizione a livello di città a un servizio esterno di geolocalizzazione IP per poter comunque mostrare una **direzione della Qibla** invece di un quadrante vuoto. Solo in quel caso il tuo indirizzo IP viene inviato a quel servizio per la richiesta; il risultato è usato una volta, nella scheda, e non viene registrato né memorizzato da noi. Il ripiego è del tutto omesso quando l'accesso alla posizione è concesso.",
    "Il ripiego è etichettato sullo schermo come approssimativo di proposito, perché una ricerca IP risolve una città e non una via. Se la **bussola Qibla online** dice «approssimativa», il numero può sbagliare di un grado o due: consenti la posizione e ricarica per una **posizione della Qibla online** esatta.",
  ],
  privacy2aH: "2a. Cosa non viene mai raccolto",
  privacy2a: [
      "Non c'è storico delle posizioni, né direzione di preghiera salvata, né un account che possa contenerli: sia che tu abbia usato lo strumento per **trovare la direzione della Qibla** una volta sola sia ogni giorno. Una lettura della **Qibla con la bussola** è calcolata a ogni caricamento e poi dimenticata. Se chiudi la scheda, il valore della **bussola della direzione della Qibla** sparisce, e riaprire la pagina significa un fix nuovo invece di una risposta conservata.",
    "Lo stesso vale per un controllo della **direzione della Qibla rapida** fatto su un telefono condiviso: sul dispositivo non resta nulla, a parte la normale cache del browser. Se preferisci non lasciare nemmeno quella, usa una finestra privata: la **direzione della Qibla online** funziona comunque, perché il calcolo gira sul tuo dispositivo.",
    "Non possiamo vedere una **freccia della direzione della Qibla** che ti è stata mostrata, un valore in **gradi della direzione della Qibla** che hai letto, né il fatto che tu abbia cercato *dov'è la Qibla*. Alle nostre statistiche arrivano solo visualizzazioni aggregate, che portano un percorso di pagina e non una coordinata. Chiunque può verificare lo stesso comportamento con un controllo della **Qibla in tempo reale** in una finestra privata e un inspector di rete. Una conseguenza pratica: poiché non esiste un'ultima posizione salvata, questo **cercatore di Qibla online** chiede sempre al browser un fix nuovo (o, se rifiuti, una nuova stima basata sull'IP). È volutamente meno comodo di un'app e molto più riservato: la **bussola Qibla online** non ha memoria che possa trapelare se il telefono cambia mano.",
  ],
  termsIntro: "Leggi con attenzione questi Termini e condizioni («Termini») prima di usare il cercatore di Qibla online («il Servizio»). Accedendo o usando il Servizio accetti di essere vincolato da questi Termini.",
  termsUse: "Questo cercatore di Qibla online è fornito gratuitamente per uso personale. Puoi usare il Servizio per calcolare la direzione della Qibla della tua posizione, quindi un controllo della **direzione della Qibla rapida** prima della preghiera non costa nulla e non richiede registrazione.",
  termsAccuracy: [
      "La **direzione della Qibla** mostrata qui è un calcolo più un sensore del telefono, non un rilevamento topografico. Un errore del magnetometro di due-cinque gradi è normale, e cresce vicino ad altoparlanti, supporti magnetici, auto e strutture in acciaio. Tratta il valore in **gradi della direzione della Qibla** come una buona indicazione e confermalo con un segno locale quando esiste.",
    "Una lettura della **Qibla con la bussola** è anche personale del dispositivo. Due telefoni nella stessa stanza possono differire di qualche grado, e chiedere «dov'è la Qibla» a questa pagina non è come commissionare un rilievo. Dove conta la precisione, usa un dispositivo calibrato di recente e accetta che un valore della **direzione della Qibla online** sia un'indicazione e non una sentenza.",
    "Non affidarti a questa **bussola Qibla online** quando una decisione legale o strutturale dipende dall'orientamento esatto: per la costruzione di una moschea o di una parete della Qibla permanente, usa un rilievo qualificato. Per la preghiera quotidiana in una stanza sconosciuta, il rilevamento indicato qui vuole essere sufficiente.",
    "In concreto: una **freccia della direzione della Qibla** tracciata da una lettura del telefono può essere fuori di qualche grado, e una **posizione della Qibla online** al chiuso può essere peggio. Quando ti serve certezza, **trova la direzione della Qibla** due volte da due punti diversi della stanza, e se le letture della **bussola della direzione della Qibla** concordano, l'interferenza è probabilmente bassa. Se non concordano, uno dei punti è compromesso.",
    "Non garantiamo inoltre che un controllo della **direzione della Qibla rapida** coincida con il segno della moschea locale. Dove una comunità ha rilevato una parete della Qibla, quel rilevamento prevale su qualsiasi lettura della **bussola Qibla online**, compresa la nostra. Lo strumento è offerto come comodità, e un risultato della **Qibla in tempo reale** va preso come orientamento e non come sentenza.",
  ],
  },

};
