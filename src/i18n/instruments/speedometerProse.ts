/**
 * Localised body copy for the speedometer tool page (/onlinespeedometer/ and
 * its seven locale copies). English lives at the root URL, the others at
 * /es/onlinespeedometer/, /ja/onlinespeedometer/ and so on.
 *
 * The markup convention is the one CopyText already understands:
 *   **bold**    → <strong>
 *   *italic*    → <em>
 * Keeping the original English paragraphs and their bolded key phrases means a
 * translated page still ranks for the same long-tail queries, just in the
 * reader's language.
 */
import type { SpeedProse } from './speedometerProseTypes';

export type { SpeedProse, SpeedSection } from './speedometerProseTypes';

export const en: SpeedProse = {
  aboutH: "The free online speedometer that reads your real speed",
  intro: [    "This **online speedometer** turns the phone in your hand into a working speed readout in one tap. There is nothing to install, no account to create and no download waiting time — you open the page, allow location once, and the number on screen is your speed right now. It is a **free online speedometer** built for one job: telling you how fast you are actually moving, on a bike, in a car, on a train, or on foot.",
    "If you have ever searched for “speedometer online”, “live speedometer” or “gps speedometer”, you already know the problem. Your car dashboard is optimistic by a few percent, your bike computer needs mounting, and you just want an answer. A **live speed test** removes the guesswork in two seconds, with a number instead of a needle you have to squint at.",
  ],
  sections: [
  {
    h: "What this speedometer online actually shows you",
    paras: [      "The **speedometer digital** readout is the headline: one large number that updates as you move. Under it you get the trip figures that make the tool genuinely useful — your maximum speed, your average speed, the distance covered, the altitude you are at and how long the trip has been running. The unit button switches between km/h, mph, m/s and knots, so the same page answers “my speed km/h” on a road in India and mph on a motorway abroad without a second tool.",
      "Everything comes from the GPS chip your phone already has. The page reads your position once a second, works out how far you moved, and converts that into speed. That is why a **GPS speedometer online** can be more honest than a dashboard: it measures your movement over the ground rather than counting wheel rotations against an assumed tyre size.",
    ],
  },
  {
    h: "How to run a speedometer test online",
    paras: [      "Open the page outdoors with a clear view of the sky — GPS needs to see satellites, and a reading taken indoors or in a tunnel will stall or jump. Allow location when the browser asks, then press Start and begin moving. The first few seconds are the sensor settling; after that the number tracks smoothly.",
      "That is the whole **online speedometer test**: no cables, no OBD reader, no subscription. A **speedometer test online** also gives you a second opinion when a dashboard looks wrong after a wheel or tyre change, because the number comes from movement rather than from a calibrated instrument.",
    ],
    list: [      "Take the phone out of a metal case and keep it near a window or on a dash mount.",
      "Press Reset before a run so max and average belong to that trip only.",
      "Switch the unit first — km/h for road use, mph for UK and US speed limits.",
      "Keep the screen awake; a locked phone can pause GPS updates on some browsers.",
      "Compare the reading with a fixed distance and a stopwatch if you want to check accuracy.",
    ],
    listAt: 0,
  },
  {
    h: "Speedometer online, offline and everything between",
    paras: [      "The tool is **online speedometer free** of charge, but once the page has loaded it keeps working without a data connection — the GPS receiver does the work, not a server. If what you want is a **speedometer online train** check on a route with patchy signal, that matters: the page stays open and keeps counting while the signal drops.",
      "On a train, a bus or a long drive it is also the only speed readout you get as a passenger. Look for a straight stretch, note the number, and compare it with the route timetable if you are curious. Anything searched as *zspeed* or similar brand names does the same thing; this page simply does it without an app, which is why people keep it in a tab.",
    ],
  },
  {
    h: "Accuracy you can expect from a phone speedometer",
    paras: [      "A phone GPS reads speed to within roughly 1–2 km/h in open sky, which is tighter than most car dashes. Dashes are deliberately optimistic — manufacturers allow a few percent, and tyre wear or a different wheel size adds more. So if the numbers disagree, run an **online speedometer mph** reading on the same stretch and trust the one that repeats itself.",
      "Expect two limits. Tall buildings, trees and tunnels cause dropouts, and the reading holds for a few seconds before it drops back to zero until the fix returns. And rapid acceleration can lag by a second, because the chip averages positions. Neither matters for normal use, but do not treat any **HardSpeedometer test** at high speed as a precision measurement — for that a calibrated unit still wins.",
    ],
  },
  {
    h: "Who the free speedometer is for",
    paras: [      "Cyclists use it to confirm a bike computer. Drivers use it to check a dashboard after changing wheels. Passengers use it out of curiosity on a highway or a train. Runners and walkers use the average speed figure as a pace check. And anyone comparing a car with a hire car, a parent's car or a new purchase gets a neutral number without installing anything.",
      "Because the tool is browser based, it works the same on Android, iPhone, tablet or laptop (laptops rarely have GPS, so a phone is the practical choice). Your location is used to calculate speed and is never uploaded, so a **speedometer digital** check on a borrowed phone leaves nothing behind.",
    ],
  },
  {
    h: "The short version",
    paras: [      "Open the page, allow location, press Start, and read your speed in km/h or mph. Reset between trips so max and average stay honest, keep the phone outdoors for a clean signal, and expect a phone GPS to be slightly more accurate than a car dash. Whether you came here from a *speedometer online* search, a *live speed test* query or a **speedometer test online** on a resale car, the answer is the same page — free, private, and no install.",
    ],
  },
  ],
  guidesH: "Latest guides from the Speedometer blog",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "How to Use an Online Speedometer (Step-by-Step)", desc: "Allow location, press Start, choose km/h or mph, and read your live speed." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "How Accurate Is a Phone Speedometer?", desc: "Typical GPS error, how it compares with a dashboard, and three tests to run." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Speedometer Units: km/h, mph, m/s and Knots", desc: "When to use each unit, and how to convert in your head." },
  ],
  guidesAll: "See all Online Speedometer guides →",
  faqH: "Frequently asked questions about the online speedometer",
  faq: [
    {
      q: "Online speedometer — how fast am I going right now?",
      a: "The large number on the page is your current speed in the unit you selected, usually km/h or mph. Allow location access, press Start, and the figure updates once a second from GPS. If the number sits at 0 while you are moving, the location permission was blocked or the phone has no satellite fix yet.",
    },
    {
      q: "How to check current speed with an online speedometer?",
      a: "Open the page outdoors, allow location access, press Start and begin moving. Keep the phone near a window, on a dash mount or in your hand, and read the number after a few seconds while the GPS settles. Press Reset between trips so the maximum and average speeds belong to that trip only.",
    },
    {
      q: "Is this online speedometer free and does it need an app?",
      a: "It is free and it runs entirely in the browser, so there is nothing to install and no account to create. Once the page has loaded it keeps working without mobile data, because the speed comes from the phone GPS receiver rather than from a server.",
    },
    {
      q: "How accurate is a phone speedometer compared with a car dashboard?",
      a: "In open sky a phone GPS reads within about 1–2 km/h, which is usually tighter than a car dashboard. Dashboards are deliberately optimistic by a few percent and drift further after a wheel or tyre change. When the two disagree on a steady stretch, the phone reading over the ground is normally the more honest one.",
    },
    {
      q: "Why does the speed stay at 0 or freeze?",
      a: "Almost always the GPS fix. Buildings, tunnels, multi-storey car parks, dense trees and metal roofs block satellites, and the reading holds its last value until the fix returns. Allow location first, move outdoors, keep the screen awake and reload the page if the number never starts moving.",
    },
    {
      q: "Can I see my speed in mph, km/h, m/s and knots?",
      a: "Yes. Use the unit button next to the readout to switch between km/h, mph, m/s and knots at any time. Changing the unit does not reset the trip, so the maximum and average figures convert with it.",
    },
    {
      q: "Can I use an online speedometer on a train, bus or as a passenger?",
      a: "Yes, that is one of the most common uses. As a passenger you have no dashboard, so a live speed test is the only readout available. Keep the phone near a window on a train, and expect dropouts in tunnels and deep cuttings.",
    },
  ],
};

export const es: SpeedProse = {
  aboutH: "El velocímetro online gratis que lee tu velocidad real",
  intro: [    "Este **velocímetro online** convierte el móvil que tienes en la mano en un lector de velocidad en un solo toque. No hay nada que instalar, ni cuenta que crear, ni descarga que esperar: abres la página, permites la ubicación una vez y el número en pantalla es tu velocidad ahora mismo. Es un **velocímetro online gratis** hecho para una sola cosa: decirte a qué velocidad te mueves de verdad, en bici, en coche, en tren o a pie.",
    "Si alguna vez has buscado «velocímetro online», «velocímetro en vivo» o «velocímetro GPS», ya conoces el problema. El cuadro de tu coche es optimista en unos puntos porcentuales, el cuentakilómetros de la bici hay que montarlo y tú solo quieres una respuesta. Un **test de velocidad en vivo** quita la duda en dos segundos, con un número en lugar de una aguja que hay que mirar con lupa.",
  ],
  sections: [
  {
    h: "Qué te muestra realmente este velocímetro online",
    paras: [      "La lectura del **velocímetro digital** es lo principal: un número grande que se actualiza mientras te mueves. Debajo tienes las cifras del viaje que hacen la herramienta realmente útil: velocidad máxima, velocidad media, distancia recorrida, altitud en la que estás y cuánto lleva corriendo el viaje. El botón de unidades alterna entre km/h, mph, m/s y nudos, así que la misma página responde a «mi velocidad km/h» en una carretera de India y en mph en una autopista extranjera sin una segunda herramienta.",
      "Todo sale del chip GPS que tu móvil ya tiene. La página lee tu posición una vez por segundo, calcula cuánto te has movido y lo convierte en velocidad. Por eso un **velocímetro GPS online** puede ser más honesto que un cuadro: mide tu movimiento sobre el terreno en lugar de contar vueltas de rueda con una medida de neumático supuesta.",
    ],
  },
  {
    h: "Cómo hacer un test de velocímetro online",
    paras: [      "Abre la página al aire libre, con el cielo despejado: el GPS necesita ver satélites, y una lectura tomada bajo techo o en un túnel se atasca o salta. Permite la ubicación cuando el navegador lo pida y pulsa Iniciar para empezar a moverte. Los primeros segundos son de asentamiento del sensor; después el número sigue con suavidad.",
      "Ese es todo el **test de velocímetro online**: sin cables, sin lector OBD y sin suscripción. Un **velocímetro test online** también te da una segunda opinión cuando un cuadro parece ir mal tras cambiar una rueda o un neumático, porque el número viene del movimiento y no de un instrumento calibrado.",
    ],
    list: [      "Saca el móvil de una funda metálica y mantenlo cerca de la ventanilla o en un soporte de salpicadero.",
      "Pulsa Reiniciar antes de salir para que el máximo y la media pertenezcan solo a ese viaje.",
      "Cambia la unidad primero: km/h para carretera, mph para los límites del Reino Unido y Estados Unidos.",
      "Mantén la pantalla encendida; un móvil bloqueado puede pausar las actualizaciones de GPS en algunos navegadores.",
      "Compara la lectura con una distancia fija y un cronómetro si quieres comprobar la exactitud.",
    ],
    listAt: 0,
  },
  {
    h: "Velocímetro online, sin conexión y todo lo de en medio",
    paras: [      "La herramienta es **velocímetro online gratis**, pero una vez cargada la página sigue funcionando sin conexión de datos: el trabajo lo hace el receptor GPS, no un servidor. Si lo que quieres es un **velocímetro para tren** en una ruta con mala cobertura, eso importa: la página sigue abierta y contando mientras la señal cae.",
      "En un tren, un autobús o un viaje largo es además el único velocímetro que tienes como pasajero. Busca un tramo recto, apunta el número y compáralo con el horario de la ruta si tienes curiosidad. Lo que se busca como *zspeed* u otras marcas hace lo mismo; esta página simplemente lo hace sin app, y por eso la gente la deja en una pestaña.",
    ],
  },
  {
    h: "Precisión que puedes esperar de un velocímetro de móvil",
    paras: [      "Un GPS de móvil lee la velocidad con un margen de unos 1–2 km/h a cielo abierto, más ajustado que la mayoría de los cuadros. Los cuadros son optimistas a propósito: los fabricantes permiten unos puntos porcentuales, y el desgaste del neumático o una rueda distinta añaden más. Así que si los números no coinciden, haz una lectura de **velocímetro online mph** en el mismo tramo y confía en la que se repita.",
      "Cuenta con dos límites. Los edificios altos, los árboles y los túneles provocan cortes, y la lectura se mantiene unos segundos antes de volver a cero hasta que vuelve la señal. Y una aceleración fuerte puede ir un segundo por detrás, porque el chip promedia posiciones. Nada de eso importa en un uso normal, pero no tomes ningún **test HardSpeedometer** a alta velocidad como una medición de precisión: para eso sigue ganando un equipo calibrado.",
    ],
  },
  {
    h: "Para quién es el velocímetro gratis",
    paras: [      "Los ciclistas lo usan para confirmar el cuentakilómetros de la bici. Los conductores, para revisar el cuadro después de cambiar ruedas. Los pasajeros, por curiosidad en una autopista o en un tren. Los corredores y caminantes usan la velocidad media como control del ritmo. Y quien compara un coche con uno de alquiler, con el de sus padres o con una compra nueva obtiene un número neutro sin instalar nada.",
      "Como la herramienta funciona en el navegador, va igual en Android, iPhone, tablet u ordenador portátil (los portátiles rara vez tienen GPS, así que el móvil es la opción práctica). Tu ubicación se usa para calcular la velocidad y nunca se sube, así que una comprobación de **velocímetro digital** en un móvil prestado no deja nada.",
    ],
  },
  {
    h: "La versión corta",
    paras: [      "Abre la página, permite la ubicación, pulsa Iniciar y lee tu velocidad en km/h o mph. Reinicia entre viajes para que máximo y media sean honestos, mantén el móvil al aire libre para una señal limpia y espera que un GPS de móvil sea algo más preciso que el cuadro de un coche. Vengas de una búsqueda de *velocímetro online*, de una consulta de *test de velocidad en vivo* o de un **velocímetro test online** en un coche de segunda mano, la respuesta es la misma página: gratis, privada y sin instalar nada.",
    ],
  },
  ],
  guidesH: "Últimas guías del blog del velocímetro",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "Cómo usar un velocímetro online (paso a paso)", desc: "Permite la ubicación, pulsa Iniciar, elige km/h o mph y lee tu velocidad en vivo." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "¿Qué precisión tiene el velocímetro de un móvil?", desc: "Error típico del GPS, cómo se compara con un cuadro y tres pruebas que puedes hacer." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Unidades del velocímetro: km/h, mph, m/s y nudos", desc: "Cuándo usar cada unidad y cómo convertir de cabeza." },
  ],
  guidesAll: "Ver todas las guías del velocímetro online →",
  faqH: "Preguntas frecuentes sobre el velocímetro online",
  faq: [
    {
      q: "Velocímetro online: ¿a qué velocidad voy ahora mismo?",
      a: "El número grande de la página es tu velocidad actual en la unidad que hayas elegido, normalmente km/h o mph. Permite el acceso a la ubicación, pulsa Iniciar y la cifra se actualiza una vez por segundo desde el GPS. Si el número se queda en 0 mientras te mueves, el permiso de ubicación estaba bloqueado o el móvil aún no tiene señal de satélites.",
    },
    {
      q: "¿Cómo comprobar la velocidad actual con un velocímetro online?",
      a: "Abre la página al aire libre, permite el acceso a la ubicación, pulsa Iniciar y empieza a moverte. Mantén el móvil junto a la ventanilla, en un soporte o en la mano, y lee el número a los pocos segundos, cuando el GPS se asiente. Pulsa Reiniciar entre viajes para que las velocidades máxima y media correspondan solo a ese trayecto.",
    },
    {
      q: "¿Este velocímetro online es gratis y necesita una app?",
      a: "Es gratis y funciona entero en el navegador, así que no hay nada que instalar ni cuenta que crear. Una vez cargada la página sigue funcionando sin datos móviles, porque la velocidad viene del receptor GPS del móvil y no de un servidor.",
    },
    {
      q: "¿Qué precisión tiene el velocímetro de un móvil frente al cuadro de un coche?",
      a: "A cielo abierto un GPS de móvil lee con unos 1–2 km/h de margen, normalmente más ajustado que el cuadro de un coche. Los cuadros son optimistas a propósito en unos puntos porcentuales y se desvían más tras cambiar rueda o neumáticos. Cuando no coinciden en un tramo estable, la lectura del móvil sobre el terreno suele ser la más honesta.",
    },
    {
      q: "¿Por qué la velocidad se queda en 0 o se congela?",
      a: "Casi siempre es la señal GPS. Los edificios, los túneles, los aparcamientos de varias plantas, los árboles densos y los tejados metálicos bloquean los satélites, y la lectura mantiene su último valor hasta que vuelve la señal. Permite primero la ubicación, sal al exterior, mantén la pantalla encendida y recarga la página si el número no empieza a moverse.",
    },
    {
      q: "¿Puedo ver mi velocidad en mph, km/h, m/s y nudos?",
      a: "Sí. Usa el botón de unidades junto a la lectura para cambiar entre km/h, mph, m/s y nudos en cualquier momento. Cambiar de unidad no reinicia el viaje, así que el máximo y la media se convierten con ella.",
    },
    {
      q: "¿Puedo usar un velocímetro online en un tren, un autobús o como pasajero?",
      a: "Sí, es uno de los usos más comunes. Como pasajero no tienes cuadro, así que un test de velocidad en vivo es la única lectura disponible. Mantén el móvil junto a la ventanilla en el tren y cuenta con cortes en túneles y desmontes profundos.",
    },
  ],
};

export const ja: SpeedProse = {
  aboutH: "実際の速度がわかる無料のオンラインスピードメーター",
  intro: [    "この**オンラインスピードメーター**は、手元のスマートフォンをワンタップで速度計に変えます。インストールも、アカウント作成も、ダウンロード待ちもありません。ページを開いて位置情報を一度許可すれば、画面の数字が今のあなたの速度です。自転車でも車でも電車でも徒歩でも、実際にどれくらいの速さで動いているかを伝えるためだけに作られた**無料のオンラインスピードメーター**です。",
    "「スピードメーター オンライン」「ライブ スピードメーター」「GPS スピードメーター」で検索したことがあるなら、問題はもう分かっているはずです。車のメーターは数パーセント高めに出て、自転車のサイクルコンピューターは取り付けが必要で、あなたはただ答えがほしいだけ。**ライブ速度テスト**なら2秒で迷いが消えます。目を細めて針を読む代わりに、数字が出ます。",
  ],
  sections: [
  {
    h: "このオンラインスピードメーターが表示するもの",
    paras: [      "主役は**デジタルスピードメーター**の表示です。動くたびに更新される大きな数字がひとつ。その下に、このツールを本当に役立つものにする走行データが並びます。最高速度、平均速度、移動距離、現在の高度、そして走行時間です。単位ボタンで km/h・mph・m/s・ノットを切り替えられるので、同じページがインドの道路では「自分の速度 km/h」の答えになり、海外の高速道路では mph の答えになります。別のツールは要りません。",
      "データはすべて、スマートフォンにもともと入っている GPS チップから来ます。ページは1秒に1回位置を読み取り、どれだけ動いたかを計算して速度に変換します。だから**GPS スピードメーター オンライン**は車のメーターより正直なことがあります。想定したタイヤ径で車輪の回転を数えるのではなく、地面の上を実際にどれだけ動いたかを測っているからです。",
    ],
  },
  {
    h: "オンラインでスピードメーター テストを行う方法",
    paras: [      "空がよく見える屋外でページを開いてください。GPS は衛星を見る必要があり、屋内やトンネルで取った値は止まったり跳ねたりします。ブラウザが確認したら位置情報を許可し、開始を押して動き始めます。最初の数秒はセンサーが落ち着く時間で、そのあとは数字が滑らかに追従します。",
      "**オンライン スピードメーター テスト**はこれだけです。ケーブルも OBD リーダーも月額料金も不要。**スピードメーター テスト オンライン**は、タイヤやホイールを交換したあとにメーターがおかしいと感じたときの第二の意見にもなります。数字が「校正された計器」ではなく「実際の移動」から来ているからです。",
    ],
    list: [      "金属製のケースから出し、窓の近くかダッシュボードのマウントに置きます。",
      "走行前にリセットを押して、最高速度と平均をその走行だけの値にします。",
      "先に単位を切り替えます。道路では km/h、英国・米国の制限速度なら mph。",
      "画面は消さないでください。端末をロックすると GPS の更新が止まるブラウザがあります。",
      "精度を確かめたいときは、決まった距離とストップウォッチで読み取りと比べます。",
    ],
    listAt: 0,
  },
  {
    h: "オンラインでもオフラインでも使えるスピードメーター",
    paras: [      "このツールは**オンラインスピードメーター 無料**ですが、ページを読み込んだあとはデータ通信なしでも動き続けます。仕事をしているのはサーバーではなく GPS 受信機だからです。電波が不安定な路線で**電車 スピードメーター オンライン**を使いたい場合、これは大きな意味があります。電波が落ちてもページは開いたままカウントを続けます。",
      "電車でもバスでも長距離ドライブでも、助手席のあなたにとっては唯一の速度計になります。直線の区間で数字を確認し、気になれば路線の時刻表と比べてみてください。*zspeed* などのブランド名で検索されるものも同じことをしています。このページはそれをアプリなしで行うだけで、だからこそタブに残されるのです。",
    ],
  },
  {
    h: "スマホのスピードメーターに期待できる精度",
    paras: [      "見通しのよい空の下では、スマートフォンの GPS はおよそ 1〜2 km/h の誤差で速度を読み取ります。これは多くの車のメーターより厳しい精度です。車のメーターは意図的に数パーセント高めに出ており、タイヤの摩耗やホイールサイズの変更でさらにずれます。数字が食い違うときは、同じ区間で**オンライン スピードメーター mph** の値を取り、繰り返し同じ値が出るほうを信じてください。",
      "制約は2つあります。高い建物、木、トンネルでは受信が途切れ、値は数秒そのまま保持されたあと、衛星が戻るまでゼロに戻ります。また急な加速は1秒ほど遅れます。チップが位置を平均しているためです。通常の利用ではどちらも問題ありませんが、高速域での **HardSpeedometer テスト**を精密測定として扱わないでください。そこでは校正済みの機器が勝ります。",
    ],
  },
  {
    h: "無料スピードメーターが向いている人",
    paras: [      "自転車に乗る人はサイクルコンピューターの確認に使います。運転する人はホイール交換後のメーター確認に。助手席の人は高速道路や電車で好奇心から。ランナーやウォーカーは平均速度をペース確認に使います。レンタカー、親の車、新車を自分の車と比べたい人も、何もインストールせずに中立な数字を得られます。",
      "ブラウザで動くので、Android・iPhone・タブレット・ノート PC で同じように使えます（ノート PC に GPS はほぼないので、実際にはスマートフォンが現実的です）。位置情報は速度の計算にだけ使われ、アップロードされることはありません。借りた端末で**デジタルスピードメーター**を確認しても、何も残りません。",
    ],
  },
  {
    h: "短くまとめると",
    paras: [      "ページを開き、位置情報を許可し、開始を押して km/h か mph で速度を読みます。走行ごとにリセットして最高速度と平均を正しく保ち、きれいな信号のためにスマートフォンは屋外で使い、スマートフォンの GPS は車のメーターより少し正確だと見込んでください。*スピードメーター オンライン*で検索して来た人も、*ライブ速度テスト*で来た人も、中古車で**スピードメーター テスト オンライン**をしたい人も、答えは同じページです。無料で、プライベートで、インストール不要。",
    ],
  },
  ],
  guidesH: "スピードメーターのブログ最新ガイド",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "オンラインスピードメーターの使い方（手順つき）", desc: "位置情報を許可し、開始を押し、km/h か mph を選んでライブ速度を読みます。" },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "スマホのスピードメーターはどれくらい正確？", desc: "一般的な GPS 誤差、車のメーターとの比較、試せる3つの確認方法。" },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "スピードメーターの単位：km/h・mph・m/s・ノット", desc: "どの場面でどの単位を使うか、頭の中で換算する方法。" },
  ],
  guidesAll: "オンラインスピードメーターのガイドをすべて見る →",
  faqH: "オンラインスピードメーターについてよくある質問",
  faq: [
    {
      q: "オンラインスピードメーターで今の速度は分かりますか？",
      a: "ページの大きな数字が、選んだ単位での現在の速度です。通常は km/h か mph。位置情報を許可し、開始を押すと、GPS から1秒に1回更新されます。動いているのに0のままなら、位置情報がブロックされているか、まだ衛星を捉えていない状態です。",
    },
    {
      q: "オンラインスピードメーターで現在の速度を確認するには？",
      a: "屋外でページを開き、位置情報を許可し、開始を押して動き始めます。端末は窓の近く、ダッシュボードのマウント、または手に持って、GPS が落ち着く数秒後に数字を読みます。走行の区切りでリセットを押すと、最高速度と平均がその走行だけの値になります。",
    },
    {
      q: "このオンラインスピードメーターは無料ですか？アプリは必要ですか？",
      a: "無料で、すべてブラウザ内で動きます。インストールするものも、作るアカウントもありません。ページを読み込んだあとはモバイルデータなしでも動き続けます。速度はサーバーではなく端末の GPS 受信機から来るためです。",
    },
    {
      q: "スマホのスピードメーターは車のメーターと比べてどれくらい正確ですか？",
      a: "見通しのよい空の下では、スマホの GPS はおよそ 1〜2 km/h の誤差で読み取ります。多くの場合、車のメーターより厳しい精度です。車のメーターは意図的に数パーセント高めで、タイヤやホイールを変えるとさらにずれます。安定した区間で両者が食い違うとき、地面の上の移動を測るスマホの値のほうが正直です。",
    },
    {
      q: "なぜ速度が0のまま、または固まってしまうのですか？",
      a: "ほとんどは GPS の受信の問題です。建物、トンネル、立体駐車場、密集した木、金属屋根は衛星を遮り、値は受信が戻るまで最後の値を保持します。まず位置情報を許可し、屋外に移動し、画面を消さずに、数字が動かない場合はページを再読み込みしてください。",
    },
    {
      q: "mph・km/h・m/s・ノットで速度を見られますか？",
      a: "はい。読み取りの横の単位ボタンで、いつでも km/h・mph・m/s・ノットを切り替えられます。単位を変えても走行はリセットされないので、最高速度と平均もそのまま換算されます。",
    },
    {
      q: "電車やバス、助手席でも使えますか？",
      a: "はい、もっとも多い使い方のひとつです。助手席にはメーターがないので、ライブ速度テストが唯一の読み取り手段になります。電車では端末を窓の近くに置き、トンネルや深い切り通しでは受信が切れることを見込んでおいてください。",
    },
  ],
};

export const fr: SpeedProse = {
  aboutH: "Le tachymètre en ligne gratuit qui lit votre vitesse réelle",
  intro: [    "Ce **tachymètre en ligne** transforme le téléphone que vous tenez en indicateur de vitesse en un geste. Rien à installer, aucun compte à créer, aucun téléchargement à attendre : vous ouvrez la page, vous autorisez la localisation une fois, et le chiffre affiché est votre vitesse maintenant. C’est un **tachymètre en ligne gratuit** conçu pour une seule tâche : vous dire à quelle vitesse vous vous déplacez vraiment, à vélo, en voiture, en train ou à pied.",
    "Si vous avez déjà cherché « tachymètre en ligne », « tachymètre en direct » ou « tachymètre GPS », vous connaissez le problème. Le compteur de votre voiture est optimiste de quelques pour cent, le compteur de vélo demande un montage, et vous voulez juste une réponse. Un **test de vitesse en direct** supprime le doute en deux secondes, avec un chiffre au lieu d’une aiguille qu’il faut déchiffrer en plissant les yeux.",
  ],
  sections: [
  {
    h: "Ce que ce tachymètre en ligne affiche vraiment",
    paras: [      "L’affichage du **tachymètre numérique** est la vedette : un grand chiffre qui se met à jour pendant que vous avancez. En dessous viennent les données de trajet qui rendent l’outil vraiment utile : vitesse maximale, vitesse moyenne, distance parcourue, altitude à laquelle vous êtes et durée du trajet. Le bouton d’unité bascule entre km/h, mph, m/s et nœuds, donc la même page répond à « ma vitesse km/h » sur une route indienne et en mph sur une autoroute étrangère, sans second outil.",
      "Tout vient de la puce GPS déjà présente dans votre téléphone. La page lit votre position une fois par seconde, calcule la distance parcourue et la convertit en vitesse. C’est pourquoi un **tachymètre GPS en ligne** peut être plus honnête qu’un tableau de bord : il mesure votre déplacement au sol plutôt que de compter des tours de roue selon une taille de pneu supposée.",
    ],
  },
  {
    h: "Comment faire un test de tachymètre en ligne",
    paras: [      "Ouvrez la page dehors, avec une vue dégagée du ciel : le GPS doit voir les satellites, et une mesure prise à l’intérieur ou dans un tunnel se bloque ou saute. Autorisez la localisation quand le navigateur le demande, puis appuyez sur Démarrer et commencez à bouger. Les premières secondes servent au capteur à se stabiliser ; ensuite le chiffre suit en douceur.",
      "C’est tout le **test de tachymètre en ligne** : pas de câble, pas de lecteur OBD, pas d’abonnement. Un **test de tachymètre numérique en ligne** donne aussi un deuxième avis quand un compteur semble faux après un changement de roue ou de pneu, parce que le chiffre vient du mouvement et non d’un instrument étalonné.",
    ],
    list: [      "Sortez le téléphone d’une coque métallique et gardez-le près d’une vitre ou sur un support de tableau de bord.",
      "Appuyez sur Réinitialiser avant un trajet pour que le maximum et la moyenne ne concernent que ce trajet.",
      "Changez d’unité d’abord : km/h pour la route, mph pour les limitations britanniques et américaines.",
      "Gardez l’écran allumé ; un téléphone verrouillé peut suspendre les mises à jour GPS sur certains navigateurs.",
      "Comparez la mesure avec une distance fixe et un chronomètre si vous voulez vérifier l’exactitude.",
    ],
    listAt: 0,
  },
  {
    h: "Tachymètre en ligne, hors ligne et tout le reste",
    paras: [      "L’outil est **tachymètre en ligne gratuit**, mais une fois la page chargée il continue de fonctionner sans connexion de données : c’est le récepteur GPS qui travaille, pas un serveur. Si vous voulez un **tachymètre en ligne train** sur une ligne où le réseau est capricieux, cela compte : la page reste ouverte et continue de compter quand le signal tombe.",
      "Dans un train, un bus ou sur un long trajet, c’est aussi le seul indicateur de vitesse dont dispose un passager. Cherchez une portion droite, notez le chiffre et comparez-le à l’horaire de la ligne si la curiosité vous prend. Ce qui se cherche sous *zspeed* ou d’autres marques fait la même chose ; cette page le fait simplement sans application, et c’est pourquoi on la garde dans un onglet.",
    ],
  },
  {
    h: "La précision à attendre d’un tachymètre de téléphone",
    paras: [      "À ciel ouvert, un GPS de téléphone lit la vitesse à environ 1–2 km/h près, ce qui est plus serré que la plupart des compteurs de voiture. Ces compteurs sont volontairement optimistes : les constructeurs tolèrent quelques pour cent, et l’usure des pneus ou une taille de roue différente en ajoute. Donc si les chiffres divergent, faites une mesure en **tachymètre en ligne mph** sur la même portion et faites confiance à celle qui se répète.",
      "Attendez-vous à deux limites. Les grands bâtiments, les arbres et les tunnels provoquent des coupures, et la mesure tient quelques secondes avant de retomber à zéro jusqu’au retour du signal. Et une accélération brutale peut accuser un seconde de retard, car la puce moyenne les positions. Ni l’un ni l’autre ne gêne un usage normal, mais ne traitez pas un **test HardSpeedometer** à haute vitesse comme une mesure de précision : pour cela un appareil étalonné reste devant.",
    ],
  },
  {
    h: "À qui sert le tachymètre gratuit",
    paras: [      "Les cyclistes s’en servent pour confirmer un compteur de vélo. Les conducteurs pour vérifier un tableau de bord après un changement de roues. Les passagers par curiosité sur une autoroute ou dans un train. Les coureurs et les marcheurs utilisent la vitesse moyenne comme contrôle d’allure. Et quiconque compare sa voiture à une location, à celle de ses parents ou à un nouvel achat obtient un chiffre neutre sans rien installer.",
      "Comme l’outil fonctionne dans le navigateur, il se comporte pareil sur Android, iPhone, tablette ou ordinateur portable (les portables ont rarement un GPS, le téléphone est donc le choix pratique). Votre position sert à calculer la vitesse et n’est jamais envoyée, donc un contrôle au **tachymètre numérique** sur un téléphone emprunté ne laisse aucune trace.",
    ],
  },
  {
    h: "La version courte",
    paras: [      "Ouvrez la page, autorisez la localisation, appuyez sur Démarrer et lisez votre vitesse en km/h ou mph. Réinitialisez entre deux trajets pour que le maximum et la moyenne restent honnêtes, gardez le téléphone dehors pour un signal propre, et attendez-vous à ce qu’un GPS de téléphone soit un peu plus précis qu’un compteur de voiture. Que vous veniez d’une recherche *tachymètre en ligne*, d’une requête *test de vitesse en direct* ou d’un **test de tachymètre en ligne** sur une voiture d’occasion, la réponse est la même page : gratuite, privée et sans installation.",
    ],
  },
  ],
  guidesH: "Les derniers guides du blog du tachymètre",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "Comment utiliser un tachymètre en ligne (pas à pas)", desc: "Autorisez la localisation, appuyez sur Démarrer, choisissez km/h ou mph et lisez votre vitesse en direct." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "Quelle précision pour un tachymètre de téléphone ?", desc: "L’erreur GPS typique, la comparaison avec un tableau de bord et trois tests à faire." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Unités du tachymètre : km/h, mph, m/s et nœuds", desc: "Quand utiliser chaque unité et comment convertir de tête." },
  ],
  guidesAll: "Voir tous les guides du tachymètre en ligne →",
  faqH: "Questions fréquentes sur le tachymètre en ligne",
  faq: [
    {
      q: "Tachymètre en ligne — à quelle vitesse je vais là, maintenant ?",
      a: "Le grand chiffre de la page est votre vitesse actuelle dans l’unité choisie, généralement km/h ou mph. Autorisez la localisation, appuyez sur Démarrer, et le chiffre se met à jour une fois par seconde depuis le GPS. Si le chiffre reste à 0 alors que vous avancez, l’autorisation de localisation a été bloquée ou le téléphone n’a pas encore de signal satellite.",
    },
    {
      q: "Comment vérifier sa vitesse actuelle avec un tachymètre en ligne ?",
      a: "Ouvrez la page dehors, autorisez la localisation, appuyez sur Démarrer et commencez à bouger. Gardez le téléphone près d’une vitre, sur un support ou dans la main, et lisez le chiffre après quelques secondes, le temps que le GPS se stabilise. Appuyez sur Réinitialiser entre deux trajets pour que les vitesses maximale et moyenne n’appartiennent qu’à ce trajet.",
    },
    {
      q: "Ce tachymètre en ligne est-il gratuit et faut-il une application ?",
      a: "Il est gratuit et fonctionne entièrement dans le navigateur : rien à installer, aucun compte à créer. Une fois la page chargée, il continue de fonctionner sans données mobiles, car la vitesse vient du récepteur GPS du téléphone et non d’un serveur.",
    },
    {
      q: "Quelle est la précision d’un tachymètre de téléphone face à un compteur de voiture ?",
      a: "À ciel ouvert, un GPS de téléphone lit à environ 1–2 km/h près, souvent plus serré qu’un compteur de voiture. Ces compteurs sont volontairement optimistes de quelques pour cent et dérivent davantage après un changement de roue ou de pneu. Quand les deux divergent sur une portion stable, la mesure du téléphone au sol est normalement la plus honnête.",
    },
    {
      q: "Pourquoi la vitesse reste-t-elle à 0 ou se fige-t-elle ?",
      a: "Presque toujours à cause du signal GPS. Les bâtiments, tunnels, parkings à étages, arbres denses et toits métalliques bloquent les satellites, et la mesure conserve sa dernière valeur jusqu’au retour du signal. Autorisez d’abord la localisation, sortez, gardez l’écran allumé et rechargez la page si le chiffre ne démarre jamais.",
    },
    {
      q: "Puis-je voir ma vitesse en mph, km/h, m/s et nœuds ?",
      a: "Oui. Utilisez le bouton d’unité à côté de l’affichage pour basculer à tout moment entre km/h, mph, m/s et nœuds. Changer d’unité ne réinitialise pas le trajet : le maximum et la moyenne sont convertis avec elle.",
    },
    {
      q: "Puis-je utiliser un tachymètre en ligne dans un train, un bus ou comme passager ?",
      a: "Oui, c’est l’un des usages les plus courants. Comme passager, vous n’avez pas de tableau de bord : un test de vitesse en direct est la seule mesure disponible. Gardez le téléphone près d’une vitre dans le train et attendez-vous à des coupures dans les tunnels et les tranchées profondes.",
    },
  ],
};

export const de: SpeedProse = {
  aboutH: "Das kostenlose Online-Tachometer, das deine echte Geschwindigkeit anzeigt",
  intro: [    "Dieses **Online-Tachometer** macht aus dem Handy in deiner Hand mit einem Tippen eine funktionierende Geschwindigkeitsanzeige. Nichts zu installieren, kein Konto, keine Download-Wartezeit: Seite öffnen, einmal den Standort erlauben, und die Zahl auf dem Bildschirm ist deine Geschwindigkeit genau jetzt. Es ist ein **kostenloses Online-Tachometer** für eine einzige Aufgabe: dir zu sagen, wie schnell du wirklich unterwegs bist — mit dem Rad, im Auto, im Zug oder zu Fuß.",
    "Wenn du schon einmal nach „Tachometer online“, „Live-Tachometer“ oder „GPS-Tachometer“ gesucht hast, kennst du das Problem. Dein Auto-Tacho ist um ein paar Prozent zu optimistisch, dein Fahrradcomputer muss montiert werden, und du willst einfach eine Antwort. Ein **Live-Geschwindigkeitstest** nimmt die Unsicherheit in zwei Sekunden weg — mit einer Zahl statt einer Nadel, die du mit zusammengekniffenen Augen ablesen musst.",
  ],
  sections: [
  {
    h: "Was dieses Tachometer online wirklich anzeigt",
    paras: [      "Die Anzeige des **digitalen Tachometers** ist die Hauptsache: eine große Zahl, die sich beim Fahren aktualisiert. Darunter stehen die Fahrtwerte, die das Werkzeug wirklich nützlich machen — Höchstgeschwindigkeit, Durchschnittsgeschwindigkeit, zurückgelegte Strecke, die aktuelle Höhe und die laufende Fahrtzeit. Die Einheitentaste wechselt zwischen km/h, mph, m/s und Knoten, sodass dieselbe Seite auf einer Straße in Indien „meine Geschwindigkeit km/h“ beantwortet und auf einer Autobahn im Ausland mph — ohne zweites Werkzeug.",
      "Alles kommt vom GPS-Chip, den dein Handy ohnehin hat. Die Seite liest deine Position einmal pro Sekunde, berechnet die zurückgelegte Strecke und rechnet sie in Geschwindigkeit um. Deshalb kann ein **GPS-Tachometer online** ehrlicher sein als ein Tacho: Es misst deine Bewegung über den Boden, statt Radumdrehungen gegen eine angenommene Reifengröße zu zählen.",
    ],
  },
  {
    h: "So führst du einen Tachometer-Test online durch",
    paras: [      "Öffne die Seite draußen mit freiem Blick zum Himmel — GPS braucht Satelliten, und eine Messung drinnen oder im Tunnel stockt oder springt. Erlaube den Standort, wenn der Browser fragt, tippe dann auf Start und beginne, dich zu bewegen. Die ersten Sekunden sind das Einpendeln des Sensors; danach folgt die Zahl sauber.",
      "Das ist der ganze **Online-Tachometer-Test**: keine Kabel, kein OBD-Lesegerät, kein Abo. Ein **Tachometer-Test online** gibt dir außerdem eine zweite Meinung, wenn ein Tacho nach einem Rad- oder Reifenwechsel falsch wirkt, denn die Zahl kommt aus der Bewegung und nicht aus einem kalibrierten Messgerät.",
    ],
    list: [      "Nimm das Handy aus einer Metallhülle und halte es ans Fenster oder in eine Dashcam-Halterung.",
      "Tippe vor der Fahrt auf Zurücksetzen, damit Maximum und Durchschnitt nur zu dieser Fahrt gehören.",
      "Stelle zuerst die Einheit ein — km/h für den Straßenverkehr, mph für britische und US-Tempolimits.",
      "Lass den Bildschirm an; ein gesperrtes Handy kann GPS-Updates in manchen Browsern pausieren.",
      "Vergleiche die Anzeige mit einer festen Strecke und einer Stoppuhr, wenn du die Genauigkeit prüfen willst.",
    ],
    listAt: 0,
  },
  {
    h: "Tachometer online, offline und alles dazwischen",
    paras: [      "Das Werkzeug ist **Online-Tachometer kostenlos**, aber nach dem Laden der Seite arbeitet es ohne Datenverbindung weiter — der GPS-Empfänger erledigt die Arbeit, kein Server. Wenn du einen **Tachometer online Zug** auf einer Strecke mit lückenhaftem Empfang brauchst, ist das wichtig: Die Seite bleibt offen und zählt weiter, während das Signal abbricht.",
      "Im Zug, im Bus oder auf einer langen Fahrt ist es außerdem die einzige Geschwindigkeitsanzeige, die du als Mitfahrer hast. Suche eine gerade Strecke, notiere die Zahl und vergleiche sie mit dem Fahrplan, wenn du neugierig bist. Was unter *zspeed* oder ähnlichen Markennamen gesucht wird, macht dasselbe; diese Seite macht es ohne App, deshalb bleibt sie im Tab.",
    ],
  },
  {
    h: "Welche Genauigkeit ein Handy-Tachometer hat",
    paras: [      "Unter freiem Himmel liest ein Handy-GPS die Geschwindigkeit auf etwa 1–2 km/h genau, enger als die meisten Auto-Tachos. Tachos sind absichtlich optimistisch — Hersteller erlauben ein paar Prozent, und Reifenverschleiß oder eine andere Radgröße kommen dazu. Wenn die Zahlen nicht übereinstimmen, fahre dieselbe Strecke mit einer **Tachometer online mph**-Messung und vertraue der, die sich wiederholt.",
      "Zwei Grenzen solltest du erwarten. Hohe Gebäude, Bäume und Tunnel verursachen Aussetzer, und der Wert bleibt einige Sekunden stehen, bevor er bis zum nächsten Fix auf null zurückfällt. Und starke Beschleunigung kann eine Sekunde nachhinken, weil der Chip Positionen mittelt. Beides stört den normalen Gebrauch nicht, aber behandle keinen **HardSpeedometer-Test** bei hoher Geschwindigkeit als Präzisionsmessung — dafür gewinnt weiterhin ein kalibriertes Gerät.",
    ],
  },
  {
    h: "Für wen das kostenlose Tachometer gedacht ist",
    paras: [      "Radfahrer nutzen es, um den Fahrradcomputer zu prüfen. Autofahrer, um den Tacho nach einem Radwechsel zu kontrollieren. Mitfahrer aus Neugier auf der Autobahn oder im Zug. Läufer und Spaziergänger nehmen den Durchschnitt als Tempo-Kontrolle. Und wer sein Auto mit einem Mietwagen, dem Elternauto oder einem Neuwagen vergleichen will, bekommt eine neutrale Zahl, ohne etwas zu installieren.",
      "Weil das Werkzeug im Browser läuft, funktioniert es gleich auf Android, iPhone, Tablet oder Laptop (Laptops haben selten GPS, das Handy ist also die praktische Wahl). Dein Standort dient nur der Geschwindigkeitsberechnung und wird nie hochgeladen, sodass eine Prüfung mit dem **digitalen Tachometer** auf einem geliehenen Handy nichts hinterlässt.",
    ],
  },
  {
    h: "Die Kurzfassung",
    paras: [      "Seite öffnen, Standort erlauben, auf Start tippen und die Geschwindigkeit in km/h oder mph ablesen. Setze zwischen Fahrten zurück, damit Maximum und Durchschnitt ehrlich bleiben, halte das Handy draußen für ein sauberes Signal und rechne damit, dass ein Handy-GPS etwas genauer ist als ein Auto-Tacho. Ob du über eine *Tachometer online*-Suche kommst, über eine *Live-Geschwindigkeitstest*-Anfrage oder über einen **Tachometer-Test online** an einem Gebrauchtwagen — die Antwort ist dieselbe Seite: kostenlos, privat und ohne Installation.",
    ],
  },
  ],
  guidesH: "Neueste Guides aus dem Tachometer-Blog",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "Online-Tachometer benutzen (Schritt für Schritt)", desc: "Standort erlauben, Start drücken, km/h oder mph wählen und die Live-Geschwindigkeit ablesen." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "Wie genau ist ein Handy-Tachometer?", desc: "Typischer GPS-Fehler, der Vergleich mit dem Tacho und drei Tests, die du machen kannst." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Tachometer-Einheiten: km/h, mph, m/s und Knoten", desc: "Wann welche Einheit sinnvoll ist und wie du im Kopf umrechnest." },
  ],
  guidesAll: "Alle Guides zum Online-Tachometer ansehen →",
  faqH: "Häufige Fragen zum Online-Tachometer",
  faq: [
    {
      q: "Online-Tachometer — wie schnell bin ich gerade?",
      a: "Die große Zahl auf der Seite ist deine aktuelle Geschwindigkeit in der gewählten Einheit, meist km/h oder mph. Erlaube den Standortzugriff, tippe auf Start, und der Wert aktualisiert sich einmal pro Sekunde aus dem GPS. Bleibt die Zahl bei 0, während du dich bewegst, wurde die Standortfreigabe blockiert oder das Handy hat noch keinen Satellitenfix.",
    },
    {
      q: "Wie prüfe ich die aktuelle Geschwindigkeit mit einem Online-Tachometer?",
      a: "Öffne die Seite draußen, erlaube den Standortzugriff, tippe auf Start und beginne, dich zu bewegen. Halte das Handy am Fenster, in einer Halterung oder in der Hand und lies die Zahl nach einigen Sekunden ab, wenn sich das GPS eingependelt hat. Tippe zwischen Fahrten auf Zurücksetzen, damit Höchst- und Durchschnittsgeschwindigkeit nur zu dieser Fahrt gehören.",
    },
    {
      q: "Ist dieses Online-Tachometer kostenlos und braucht es eine App?",
      a: "Es ist kostenlos und läuft komplett im Browser: nichts zu installieren, kein Konto nötig. Nach dem Laden der Seite funktioniert es auch ohne mobile Daten weiter, weil die Geschwindigkeit vom GPS-Empfänger des Handys kommt und nicht von einem Server.",
    },
    {
      q: "Wie genau ist ein Handy-Tachometer im Vergleich zum Auto-Tacho?",
      a: "Unter freiem Himmel liest ein Handy-GPS auf etwa 1–2 km/h genau, meist enger als ein Auto-Tacho. Tachos sind absichtlich um ein paar Prozent optimistisch und weichen nach einem Rad- oder Reifenwechsel weiter ab. Wenn beide auf einer gleichmäßigen Strecke nicht übereinstimmen, ist die Handymessung über den Boden normalerweise die ehrlichere.",
    },
    {
      q: "Warum bleibt die Geschwindigkeit bei 0 oder friert ein?",
      a: "Fast immer der GPS-Fix. Gebäude, Tunnel, Parkhäuser, dichte Bäume und Metalldächer blockieren Satelliten, und der Wert bleibt stehen, bis der Fix zurückkommt. Erlaube zuerst den Standort, geh nach draußen, lass den Bildschirm an und lade die Seite neu, wenn die Zahl nie losläuft.",
    },
    {
      q: "Kann ich die Geschwindigkeit in mph, km/h, m/s und Knoten sehen?",
      a: "Ja. Über die Einheitentaste neben der Anzeige wechselst du jederzeit zwischen km/h, mph, m/s und Knoten. Der Wechsel setzt die Fahrt nicht zurück, Maximum und Durchschnitt werden mit umgerechnet.",
    },
    {
      q: "Funktioniert ein Online-Tachometer im Zug, im Bus oder als Mitfahrer?",
      a: "Ja, das ist eine der häufigsten Anwendungen. Als Mitfahrer hast du keinen Tacho, ein Live-Geschwindigkeitstest ist also die einzige Anzeige. Halte das Handy im Zug am Fenster und rechne in Tunneln und tiefen Einschnitten mit Aussetzern.",
    },
  ],
};

export const pt: SpeedProse = {
  aboutH: "O velocímetro online grátis que mostra sua velocidade real",
  intro: [    "Este **velocímetro online** transforma o celular na sua mão em uma leitura de velocidade com um toque. Não há nada para instalar, nenhuma conta para criar e nenhuma espera de download: você abre a página, permite a localização uma vez e o número na tela é a sua velocidade agora. É um **velocímetro online grátis** feito para uma tarefa só: dizer a que velocidade você está de verdade, de bike, de carro, de trem ou a pé.",
    "Se você já pesquisou “velocímetro online”, “velocímetro ao vivo” ou “velocímetro GPS”, conhece o problema. O painel do seu carro é otimista em alguns por cento, o ciclocomputador precisa ser instalado e você só quer uma resposta. Um **teste de velocidade ao vivo** tira a dúvida em dois segundos, com um número em vez de um ponteiro que você precisa apertar os olhos para ler.",
  ],
  sections: [
  {
    h: "O que este velocímetro online realmente mostra",
    paras: [      "A leitura do **velocímetro digital** é o destaque: um número grande que se atualiza enquanto você se move. Abaixo vêm os dados do trajeto que tornam a ferramenta realmente útil: velocidade máxima, velocidade média, distância percorrida, altitude em que você está e há quanto tempo o trajeto está rodando. O botão de unidade alterna entre km/h, mph, m/s e nós, então a mesma página responde “minha velocidade km/h” numa estrada no Brasil e mph numa rodovia no exterior, sem uma segunda ferramenta.",
      "Tudo vem do chip GPS que o celular já tem. A página lê a sua posição uma vez por segundo, calcula o quanto você se moveu e converte em velocidade. É por isso que um **velocímetro GPS online** pode ser mais honesto que um painel: ele mede o seu deslocamento sobre o solo em vez de contar voltas de roda com um tamanho de pneu presumido.",
    ],
  },
  {
    h: "Como fazer um teste de velocímetro online",
    paras: [      "Abra a página ao ar livre, com boa visão do céu: o GPS precisa ver satélites, e uma leitura feita dentro de casa ou num túnel trava ou pula. Permita a localização quando o navegador pedir, toque em Iniciar e comece a se mover. Os primeiros segundos são o sensor se acomodando; depois o número acompanha suavemente.",
      "Esse é todo o **teste de velocímetro online**: sem cabos, sem leitor OBD e sem assinatura. Um **teste de velocímetro online** também dá uma segunda opinião quando o painel parece errado depois de trocar uma roda ou um pneu, porque o número vem do movimento e não de um instrumento calibrado.",
    ],
    list: [      "Tire o celular de uma capa metálica e mantenha perto da janela ou num suporte de painel.",
      "Toque em Reiniciar antes de sair para que máxima e média pertençam só àquele trajeto.",
      "Troque a unidade primeiro: km/h para estrada, mph para os limites do Reino Unido e dos Estados Unidos.",
      "Mantenha a tela ligada; um celular bloqueado pode pausar as atualizações de GPS em alguns navegadores.",
      "Compare a leitura com uma distância fixa e um cronômetro se quiser conferir a exatidão.",
    ],
    listAt: 0,
  },
  {
    h: "Velocímetro online, offline e tudo no meio",
    paras: [      "A ferramenta é **velocímetro online grátis**, mas depois que a página carrega ela continua funcionando sem conexão de dados: quem faz o trabalho é o receptor GPS, não um servidor. Se o que você quer é um **velocímetro para trem** numa rota com sinal irregular, isso importa: a página fica aberta e continua contando enquanto o sinal cai.",
      "Num trem, num ônibus ou numa viagem longa é também o único velocímetro que você tem como passageiro. Procure um trecho reto, anote o número e compare com o horário da linha se tiver curiosidade. O que se pesquisa como *zspeed* ou outras marcas faz a mesma coisa; esta página simplesmente faz sem app, e é por isso que as pessoas a mantêm numa aba.",
    ],
  },
  {
    h: "Precisão que você pode esperar de um velocímetro de celular",
    paras: [      "Com céu aberto, o GPS do celular lê a velocidade com cerca de 1–2 km/h de margem, mais apertado que a maioria dos painéis. Painéis são otimistas de propósito: os fabricantes permitem alguns por cento, e o desgaste do pneu ou uma roda diferente somam mais. Então, se os números discordarem, faça uma leitura de **velocímetro online mph** no mesmo trecho e confie na que se repete.",
      "Conte com dois limites. Prédios altos, árvores e túneis causam cortes, e a leitura se mantém por alguns segundos antes de voltar a zero até o sinal retornar. E uma aceleração forte pode atrasar um segundo, porque o chip faz média das posições. Nada disso importa no uso normal, mas não trate nenhum **teste HardSpeedometer** em alta velocidade como medição de precisão: para isso um equipamento calibrado continua ganhando.",
    ],
  },
  {
    h: "Para quem é o velocímetro grátis",
    paras: [      "Ciclistas usam para confirmar o ciclocomputador. Motoristas, para conferir o painel depois de trocar rodas. Passageiros, por curiosidade numa rodovia ou num trem. Corredores e caminhantes usam a velocidade média como controle de ritmo. E quem compara um carro com um alugado, com o dos pais ou com uma compra nova obtém um número neutro sem instalar nada.",
      "Como a ferramenta funciona no navegador, ela é igual no Android, no iPhone, no tablet ou no notebook (notebooks raramente têm GPS, então o celular é a escolha prática). Sua localização é usada para calcular a velocidade e nunca é enviada, então uma checagem de **velocímetro digital** num celular emprestado não deixa nada.",
    ],
  },
  {
    h: "A versão curta",
    paras: [      "Abra a página, permita a localização, toque em Iniciar e leia sua velocidade em km/h ou mph. Reinicie entre trajetos para que máxima e média fiquem honestas, mantenha o celular ao ar livre para um sinal limpo e espere que um GPS de celular seja um pouco mais preciso que o painel de um carro. Venha de uma busca por *velocímetro online*, de uma consulta por *teste de velocidade ao vivo* ou de um **teste de velocímetro online** num carro usado, a resposta é a mesma página: grátis, privada e sem instalação.",
    ],
  },
  ],
  guidesH: "Últimos guias do blog do velocímetro",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "Como usar um velocímetro online (passo a passo)", desc: "Permita a localização, toque em Iniciar, escolha km/h ou mph e leia sua velocidade ao vivo." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "Qual a precisão do velocímetro de um celular?", desc: "Erro típico do GPS, comparação com o painel e três testes que você pode fazer." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Unidades do velocímetro: km/h, mph, m/s e nós", desc: "Quando usar cada unidade e como converter de cabeça." },
  ],
  guidesAll: "Ver todos os guias do velocímetro online →",
  faqH: "Perguntas frequentes sobre o velocímetro online",
  faq: [
    {
      q: "Velocímetro online: a que velocidade estou agora?",
      a: "O número grande na página é a sua velocidade atual na unidade escolhida, normalmente km/h ou mph. Permita o acesso à localização, toque em Iniciar e o valor se atualiza uma vez por segundo a partir do GPS. Se o número fica em 0 enquanto você se move, a permissão de localização foi bloqueada ou o celular ainda não tem sinal de satélite.",
    },
    {
      q: "Como conferir a velocidade atual com um velocímetro online?",
      a: "Abra a página ao ar livre, permita o acesso à localização, toque em Iniciar e comece a se mover. Mantenha o celular perto da janela, num suporte ou na mão, e leia o número alguns segundos depois, quando o GPS estabilizar. Toque em Reiniciar entre trajetos para que as velocidades máxima e média pertençam só àquele trajeto.",
    },
    {
      q: "Este velocímetro online é grátis e precisa de app?",
      a: "É grátis e roda inteiro no navegador, então não há nada para instalar nem conta para criar. Depois que a página carrega, ele continua funcionando sem dados móveis, porque a velocidade vem do receptor GPS do celular e não de um servidor.",
    },
    {
      q: "Qual a precisão de um velocímetro de celular comparado ao painel do carro?",
      a: "Com céu aberto, o GPS do celular lê com cerca de 1–2 km/h de margem, normalmente mais apertado que o painel de um carro. Painéis são otimistas de propósito em alguns por cento e se desviam mais depois de trocar roda ou pneu. Quando os dois discordam num trecho estável, a leitura do celular sobre o solo costuma ser a mais honesta.",
    },
    {
      q: "Por que a velocidade fica em 0 ou congela?",
      a: "Quase sempre é o sinal do GPS. Prédios, túneis, estacionamentos de vários andares, árvores densas e telhados metálicos bloqueiam os satélites, e a leitura mantém o último valor até o sinal voltar. Permita a localização primeiro, vá para o ar livre, mantenha a tela ligada e recarregue a página se o número nunca começar a se mover.",
    },
    {
      q: "Posso ver a velocidade em mph, km/h, m/s e nós?",
      a: "Sim. Use o botão de unidade ao lado da leitura para alternar entre km/h, mph, m/s e nós a qualquer momento. Trocar a unidade não reinicia o trajeto, então o máximo e a média são convertidos junto.",
    },
    {
      q: "Posso usar um velocímetro online num trem, ônibus ou como passageiro?",
      a: "Sim, é um dos usos mais comuns. Como passageiro você não tem painel, então um teste de velocidade ao vivo é a única leitura disponível. Mantenha o celular perto da janela no trem e conte com cortes em túneis e cortes profundos.",
    },
  ],
};

export const ko: SpeedProse = {
  aboutH: "실제 속도를 보여 주는 무료 온라인 속도계",
  intro: [    "이 **온라인 속도계**는 손에 든 스마트폰을 한 번의 탭으로 속도 표시기로 바꿉니다. 설치할 것도, 만들 계정도, 기다릴 다운로드도 없습니다. 페이지를 열고 위치를 한 번 허용하면 화면의 숫자가 지금의 속도입니다. 자전거든 자동차든 기차든 도보든, 실제로 얼마나 빠르게 움직이는지 알려 주는 한 가지 일만 하는 **무료 온라인 속도계**입니다.",
    "“온라인 속도계”, “실시간 속도계”, “GPS 속도계”를 검색해 본 적이 있다면 문제를 이미 알고 있을 겁니다. 자동차 계기판은 몇 퍼센트 높게 표시되고, 자전거 속도계는 장착이 필요하며, 당신은 그냥 답이 필요합니다. **실시간 속도 테스트**는 2초 만에 추측을 없애 줍니다. 눈을 가늘게 뜨고 바늘을 읽는 대신 숫자가 나옵니다.",
  ],
  sections: [
  {
    h: "이 온라인 속도계가 실제로 보여 주는 것",
    paras: [      "**디지털 속도계** 숫자가 중심입니다. 움직일 때마다 갱신되는 큰 숫자 하나. 그 아래에는 이 도구를 정말 쓸모 있게 만드는 주행 수치가 이어집니다. 최고 속도, 평균 속도, 이동 거리, 현재 고도, 주행 시간입니다. 단위 버튼으로 km/h, mph, m/s, 노트를 전환할 수 있어, 같은 페이지가 인도 도로에서는 “내 속도 km/h”의 답이 되고 해외 고속도로에서는 mph의 답이 됩니다. 두 번째 도구가 필요 없습니다.",
      "모든 값은 스마트폰에 이미 있는 GPS 칩에서 나옵니다. 페이지는 1초에 한 번 위치를 읽고, 얼마나 움직였는지 계산해 속도로 바꿉니다. 그래서 **GPS 속도계 온라인**이 계기판보다 정직할 수 있습니다. 가정한 타이어 크기로 바퀴 회전을 세는 대신, 지면 위에서 실제로 얼마나 이동했는지를 측정하기 때문입니다.",
    ],
  },
  {
    h: "온라인 속도계 테스트를 하는 방법",
    paras: [      "하늘이 잘 보이는 야외에서 페이지를 여세요. GPS는 위성을 봐야 하고, 실내나 터널에서 잰 값은 멈추거나 튑니다. 브라우저가 요청하면 위치를 허용한 뒤 시작을 누르고 움직이기 시작하세요. 처음 몇 초는 센서가 안정되는 시간이고, 그 뒤에는 숫자가 부드럽게 따라옵니다.",
      "**온라인 속도계 테스트**는 이게 전부입니다. 케이블도, OBD 리더도, 구독도 없습니다. **속도계 테스트 온라인**은 바퀴나 타이어를 교체한 뒤 계기판이 이상해 보일 때 두 번째 의견이 되기도 합니다. 숫자가 “보정된 계기”가 아니라 움직임에서 나오기 때문입니다.",
    ],
    list: [      "금속 케이스에서 꺼내 창가나 대시보드 마운트에 두세요.",
      "주행 전에 재설정을 눌러 최고 속도와 평균이 그 주행에만 해당되게 하세요.",
      "단위를 먼저 바꾸세요. 도로에서는 km/h, 영국·미국 제한 속도는 mph.",
      "화면을 켜 두세요. 일부 브라우저에서는 잠긴 휴대폰이 GPS 갱신을 멈춥니다.",
      "정확도를 확인하려면 정해진 거리와 스톱워치로 값을 비교하세요.",
    ],
    listAt: 0,
  },
  {
    h: "온라인과 오프라인, 그 사이의 모든 것",
    paras: [      "이 도구는 **온라인 속도계 무료**이지만, 페이지를 한 번 불러오면 데이터 연결 없이도 계속 작동합니다. 일하는 것은 서버가 아니라 GPS 수신기이기 때문입니다. 신호가 불안정한 노선에서 **기차 속도계 온라인**을 쓰고 싶다면 이 점이 중요합니다. 신호가 끊겨도 페이지는 열린 채로 계속 셉니다.",
      "기차, 버스, 긴 드라이브에서는 승객인 당신이 가진 유일한 속도 표시이기도 합니다. 직선 구간에서 숫자를 확인하고, 궁금하면 노선 시간표와 비교해 보세요. *zspeed* 같은 브랜드로 검색되는 것들도 같은 일을 합니다. 이 페이지는 앱 없이 할 뿐이고, 그래서 사람들이 탭에 남겨 둡니다.",
    ],
  },
  {
    h: "휴대폰 속도계에 기대할 수 있는 정확도",
    paras: [      "하늘이 열린 곳에서 휴대폰 GPS는 약 1~2 km/h 오차로 속도를 읽습니다. 대부분의 자동차 계기판보다 엄격합니다. 계기판은 의도적으로 몇 퍼센트 높게 나오고, 타이어 마모나 다른 휠 크기가 오차를 더합니다. 숫자가 어긋나면 같은 구간에서 **온라인 속도계 mph** 값을 재고, 반복해서 같은 값이 나오는 쪽을 믿으세요.",
      "한계는 두 가지입니다. 높은 건물, 나무, 터널은 수신을 끊고, 값은 몇 초 유지되다가 위성이 돌아올 때까지 0으로 돌아갑니다. 그리고 급가속은 1초 정도 늦게 반영됩니다. 칩이 위치를 평균 내기 때문입니다. 일상 사용에는 둘 다 문제가 없지만, 고속에서의 **HardSpeedometer 테스트**를 정밀 측정으로 다루지는 마세요. 그런 경우에는 보정된 장비가 여전히 앞섭니다.",
    ],
  },
  {
    h: "무료 속도계가 필요한 사람",
    paras: [      "자전거를 타는 사람은 속도계를 확인하는 데 씁니다. 운전자는 바퀴 교체 후 계기판을 확인하는 데, 승객은 고속도로나 기차에서 호기심으로 씁니다. 러너와 걷는 사람은 평균 속도를 페이스 확인에 씁니다. 렌터카, 부모님 차, 새로 산 차를 내 차와 비교하려는 사람도 아무것도 설치하지 않고 중립적인 숫자를 얻습니다.",
      "브라우저에서 돌아가므로 Android, iPhone, 태블릿, 노트북에서 똑같이 작동합니다(노트북에는 GPS가 거의 없어 휴대폰이 현실적인 선택입니다). 위치는 속도 계산에만 쓰이고 업로드되지 않으므로, 빌린 휴대폰에서 **디지털 속도계**를 확인해도 아무것도 남지 않습니다.",
    ],
  },
  {
    h: "짧게 정리하면",
    paras: [      "페이지를 열고, 위치를 허용하고, 시작을 누른 뒤 km/h나 mph로 속도를 읽으세요. 주행 사이에 재설정해 최고 속도와 평균을 정직하게 유지하고, 깨끗한 신호를 위해 휴대폰을 야외에 두세요. 휴대폰 GPS는 자동차 계기판보다 조금 더 정확하다고 보면 됩니다. *온라인 속도계* 검색으로 왔든, *실시간 속도 테스트*로 왔든, 중고차에서 **속도계 테스트 온라인**을 하려는 사람이든, 답은 같은 페이지입니다. 무료이고, 개인정보가 지켜지고, 설치가 필요 없습니다.",
    ],
  },
  ],
  guidesH: "속도계 블로그의 최신 가이드",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "온라인 속도계 사용법 (단계별)", desc: "위치를 허용하고 시작을 누른 뒤 km/h나 mph를 골라 실시간 속도를 읽으세요." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "휴대폰 속도계는 얼마나 정확한가?", desc: "일반적인 GPS 오차, 자동차 계기판과의 비교, 직접 해볼 수 있는 세 가지 테스트." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "속도계 단위: km/h, mph, m/s, 노트", desc: "각 단위를 언제 쓰는지, 머릿속으로 환산하는 방법." },
  ],
  guidesAll: "온라인 속도계 가이드 모두 보기 →",
  faqH: "온라인 속도계에 관한 자주 묻는 질문",
  faq: [
    {
      q: "온라인 속도계로 지금 속도를 알 수 있나요?",
      a: "페이지의 큰 숫자가 선택한 단위의 현재 속도이며 보통 km/h나 mph입니다. 위치 접근을 허용하고 시작을 누르면 GPS에서 1초에 한 번 갱신됩니다. 움직이는데도 숫자가 0에 머물면 위치 권한이 차단되었거나 아직 위성 신호를 잡지 못한 상태입니다.",
    },
    {
      q: "온라인 속도계로 현재 속도를 확인하는 방법은?",
      a: "야외에서 페이지를 열고 위치 접근을 허용한 뒤 시작을 눌러 움직이기 시작하세요. 휴대폰을 창가나 마운트, 또는 손에 두고 GPS가 안정되는 몇 초 뒤 숫자를 읽으세요. 주행 사이에 재설정을 눌러 최고 속도와 평균이 그 주행에만 해당되게 하세요.",
    },
    {
      q: "이 온라인 속도계는 무료인가요? 앱이 필요한가요?",
      a: "무료이며 전부 브라우저에서 실행되므로 설치할 것도, 만들 계정도 없습니다. 페이지를 불러온 뒤에는 모바일 데이터 없이도 계속 작동합니다. 속도는 서버가 아니라 휴대폰의 GPS 수신기에서 나오기 때문입니다.",
    },
    {
      q: "휴대폰 속도계는 자동차 계기판과 비교해 얼마나 정확한가요?",
      a: "하늘이 열린 곳에서 휴대폰 GPS는 약 1~2 km/h 오차로 읽으며, 대부분 자동차 계기판보다 엄격합니다. 계기판은 의도적으로 몇 퍼센트 높게 나오고 바퀴나 타이어를 바꾸면 더 벌어집니다. 안정된 구간에서 둘이 어긋나면 지면 위 이동을 재는 휴대폰 쪽이 보통 더 정직합니다.",
    },
    {
      q: "속도가 0에 머물거나 멈추는 이유는 무엇인가요?",
      a: "거의 항상 GPS 신호 문제입니다. 건물, 터널, 여러 층 주차장, 빽빽한 나무, 금속 지붕은 위성을 막고, 값은 신호가 돌아올 때까지 마지막 값을 유지합니다. 먼저 위치를 허용하고, 야외로 나가고, 화면을 켜 두고, 숫자가 전혀 움직이지 않으면 페이지를 새로 고치세요.",
    },
    {
      q: "mph, km/h, m/s, 노트로 속도를 볼 수 있나요?",
      a: "네. 숫자 옆의 단위 버튼으로 언제든 km/h, mph, m/s, 노트를 전환할 수 있습니다. 단위를 바꿔도 주행이 초기화되지 않으므로 최고 속도와 평균도 함께 환산됩니다.",
    },
    {
      q: "기차나 버스, 승객으로도 온라인 속도계를 쓸 수 있나요?",
      a: "네, 가장 흔한 용도 중 하나입니다. 승객은 계기판이 없으므로 실시간 속도 테스트가 유일한 표시입니다. 기차에서는 휴대폰을 창가에 두고, 터널과 깊은 절개지에서는 수신이 끊긴다고 생각하세요.",
    },
  ],
};

export const it: SpeedProse = {
  aboutH: "Il tachimetro online gratuito che legge la tua velocità reale",
  intro: [    "Questo **tachimetro online** trasforma il telefono che hai in mano in un indicatore di velocità con un tocco. Niente da installare, nessun account da creare, nessuna attesa di download: apri la pagina, consenti la posizione una volta e il numero sullo schermo è la tua velocità adesso. È un **tachimetro online gratuito** costruito per un solo compito: dirti quanto veloce ti stai muovendo davvero, in bici, in auto, in treno o a piedi.",
    "Se hai mai cercato «tachimetro online», «tachimetro in tempo reale» o «tachimetro GPS», conosci già il problema. Il cruscotto dell’auto è ottimista di qualche punto percentuale, il ciclocomputer va montato e tu vuoi solo una risposta. Un **test di velocità in tempo reale** toglie il dubbio in due secondi, con un numero invece di una lancetta da leggere strizzando gli occhi.",
  ],
  sections: [
  {
    h: "Cosa mostra davvero questo tachimetro online",
    paras: [      "La lettura del **tachimetro digitale** è la protagonista: un numero grande che si aggiorna mentre ti muovi. Sotto ci sono i dati del viaggio che rendono lo strumento davvero utile: velocità massima, velocità media, distanza percorsa, altitudine a cui ti trovi e durata del viaggio. Il pulsante delle unità alterna km/h, mph, m/s e nodi, quindi la stessa pagina risponde a «la mia velocità km/h» su una strada in India e in mph su un’autostrada all’estero, senza un secondo strumento.",
      "Tutto arriva dal chip GPS che il telefono ha già. La pagina legge la posizione una volta al secondo, calcola quanto ti sei spostato e lo converte in velocità. Per questo un **tachimetro GPS online** può essere più onesto di un cruscotto: misura il tuo movimento sul terreno invece di contare i giri delle ruote su una misura di pneumatico presunta.",
    ],
  },
  {
    h: "Come eseguire un test del tachimetro online",
    paras: [      "Apri la pagina all’aperto, con una buona visuale del cielo: il GPS deve vedere i satelliti, e una lettura presa al chiuso o in galleria si blocca o salta. Consenti la posizione quando il browser lo chiede, poi premi Start e inizia a muoverti. I primi secondi servono al sensore per assestarsi; dopo, il numero segue in modo fluido.",
      "Questo è tutto il **test del tachimetro online**: niente cavi, niente lettore OBD, niente abbonamento. Un **test tachimetro online** dà anche una seconda opinione quando un cruscotto sembra sbagliato dopo aver cambiato ruota o pneumatico, perché il numero viene dal movimento e non da uno strumento tarato.",
    ],
    list: [      "Togli il telefono da una custodia metallica e tienilo vicino al finestrino o su un supporto da cruscotto.",
      "Premi Reimposta prima di partire, così massima e media appartengono solo a quel viaggio.",
      "Cambia prima l’unità: km/h per la strada, mph per i limiti britannici e statunitensi.",
      "Tieni lo schermo acceso; un telefono bloccato può sospendere gli aggiornamenti GPS su alcuni browser.",
      "Confronta la lettura con una distanza fissa e un cronometro se vuoi verificare l’esattezza.",
    ],
    listAt: 0,
  },
  {
    h: "Tachimetro online, offline e tutto il resto",
    paras: [      "Lo strumento è **tachimetro online gratuito**, ma una volta caricata la pagina continua a funzionare senza connessione dati: il lavoro lo fa il ricevitore GPS, non un server. Se vuoi un **tachimetro per treno** su una linea con segnale a singhiozzo, questo conta: la pagina resta aperta e continua a contare mentre il segnale cade.",
      "In treno, in autobus o su un lungo viaggio è anche l’unico indicatore di velocità che hai come passeggero. Cerca un tratto rettilineo, annota il numero e confrontalo con l’orario della linea se sei curioso. Ciò che si cerca come *zspeed* o altri marchi fa la stessa cosa; questa pagina lo fa semplicemente senza app, ed è per questo che la gente la tiene in una scheda.",
    ],
  },
  {
    h: "La precisione che puoi aspettarti da un tachimetro del telefono",
    paras: [      "A cielo aperto un GPS del telefono legge la velocità con circa 1–2 km/h di margine, più stretto della maggior parte dei cruscotti. I cruscotti sono volutamente ottimisti di qualche punto percentuale, e l’usura degli pneumatici o una ruota diversa aggiungono altro. Quindi, se i numeri non coincidono, fai una lettura in **tachimetro online mph** sullo stesso tratto e fidati di quella che si ripete.",
      "Aspettati due limiti. Edifici alti, alberi e gallerie causano interruzioni, e la lettura resta per qualche secondo prima di tornare a zero finché il segnale non rientra. E un’accelerazione brusca può arrivare con un secondo di ritardo, perché il chip fa la media delle posizioni. Nessuno dei due conta nell’uso normale, ma non trattare un **test HardSpeedometer** ad alta velocità come misura di precisione: per quello vince ancora uno strumento tarato.",
    ],
  },
  {
    h: "A chi serve il tachimetro gratuito",
    paras: [      "I ciclisti lo usano per confermare il ciclocomputer. Gli automobilisti per controllare il cruscotto dopo aver cambiato ruote. I passeggeri per curiosità in autostrada o in treno. Chi corre e chi cammina usa la velocità media come controllo del passo. E chi confronta la propria auto con una a noleggio, con quella dei genitori o con un acquisto nuovo ottiene un numero neutro senza installare nulla.",
      "Poiché lo strumento funziona nel browser, si comporta allo stesso modo su Android, iPhone, tablet o portatile (i portatili raramente hanno il GPS, quindi il telefono è la scelta pratica). La tua posizione serve a calcolare la velocità e non viene mai caricata, quindi un controllo con il **tachimetro digitale** su un telefono preso in prestito non lascia nulla.",
    ],
  },
  {
    h: "La versione breve",
    paras: [      "Apri la pagina, consenti la posizione, premi Start e leggi la velocità in km/h o mph. Reimposta tra un viaggio e l’altro perché massima e media restino oneste, tieni il telefono all’aperto per un segnale pulito e aspettati che un GPS del telefono sia un po’ più preciso del cruscotto di un’auto. Che tu arrivi da una ricerca *tachimetro online*, da una query *test di velocità in tempo reale* o da un **test tachimetro online** su un’auto usata, la risposta è la stessa pagina: gratuita, privata e senza installazione.",
    ],
  },
  ],
  guidesH: "Le ultime guide del blog del tachimetro",
  guides: [
    { href: "/onlinespeedometer/blog/how-to-use-an-online-speedometer/", title: "Come usare un tachimetro online (passo dopo passo)", desc: "Consenti la posizione, premi Start, scegli km/h o mph e leggi la velocità in tempo reale." },
    { href: "/onlinespeedometer/blog/how-accurate-is-a-phone-speedometer/", title: "Quanto è preciso il tachimetro di un telefono?", desc: "Errore GPS tipico, confronto con il cruscotto e tre test che puoi fare." },
    { href: "/onlinespeedometer/blog/speedometer-units-kmh-mph-knots/", title: "Unità del tachimetro: km/h, mph, m/s e nodi", desc: "Quando usare ogni unità e come convertire a mente." },
  ],
  guidesAll: "Vedi tutte le guide del tachimetro online →",
  faqH: "Domande frequenti sul tachimetro online",
  faq: [
    {
      q: "Tachimetro online — quanto sto andando adesso?",
      a: "Il numero grande sulla pagina è la tua velocità attuale nell’unità scelta, di solito km/h o mph. Consenti l’accesso alla posizione, premi Start e il valore si aggiorna una volta al secondo dal GPS. Se il numero resta a 0 mentre ti muovi, il permesso di localizzazione è stato bloccato o il telefono non ha ancora un fix satellitare.",
    },
    {
      q: "Come controllare la velocità attuale con un tachimetro online?",
      a: "Apri la pagina all’aperto, consenti l’accesso alla posizione, premi Start e inizia a muoverti. Tieni il telefono vicino al finestrino, su un supporto o in mano, e leggi il numero dopo qualche secondo, quando il GPS si stabilizza. Premi Reimposta tra un viaggio e l’altro perché le velocità massima e media appartengano solo a quel viaggio.",
    },
    {
      q: "Questo tachimetro online è gratuito e serve un’app?",
      a: "È gratuito e funziona interamente nel browser: niente da installare e nessun account da creare. Una volta caricata la pagina continua a funzionare senza dati mobili, perché la velocità viene dal ricevitore GPS del telefono e non da un server.",
    },
    {
      q: "Quanto è preciso il tachimetro di un telefono rispetto al cruscotto di un’auto?",
      a: "A cielo aperto un GPS del telefono legge con circa 1–2 km/h di margine, di solito più stretto di un cruscotto. I cruscotti sono volutamente ottimisti di qualche punto percentuale e si scostano di più dopo aver cambiato ruota o pneumatici. Quando i due non coincidono su un tratto stabile, la lettura del telefono sul terreno è di norma la più onesta.",
    },
    {
      q: "Perché la velocità resta a 0 o si blocca?",
      a: "Quasi sempre è il fix GPS. Edifici, gallerie, parcheggi a più piani, alberi fitti e tetti metallici bloccano i satelliti, e la lettura mantiene l’ultimo valore finché il fix non torna. Consenti prima la posizione, esci all’aperto, tieni lo schermo acceso e ricarica la pagina se il numero non inizia mai a muoversi.",
    },
    {
      q: "Posso vedere la velocità in mph, km/h, m/s e nodi?",
      a: "Sì. Usa il pulsante delle unità accanto alla lettura per passare in qualsiasi momento tra km/h, mph, m/s e nodi. Cambiare unità non azzera il viaggio, quindi massima e media vengono convertite insieme.",
    },
    {
      q: "Posso usare un tachimetro online in treno, in autobus o come passeggero?",
      a: "Sì, è uno degli usi più comuni. Come passeggero non hai un cruscotto, quindi un test di velocità in tempo reale è l’unica lettura disponibile. Tieni il telefono vicino al finestrino in treno e aspettati interruzioni in galleria e nei tratti in trincea.",
    },
  ],
};

export const speedometerProse: Record<string, SpeedProse> = {
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it,
};
