/**
 * Speedometer-specific clauses for the Privacy and Terms pages.
 *
 * The legal pages are shared with the rest of the site (src/i18n/supportCopy.ts),
 * but a speedometer needs clauses a compass does not: what the page does with GPS
 * coordinates, and why a GPS speed reading is never a legal or safety reference.
 * These strings are spliced into the shared section list by the two pages, so the
 * numbered sections stay identical across the whole site.
 */
export type SpeedLegal = {
  /** Heading of the extra privacy section, numbered "1a" to keep the order intact. */
  privacyExtraH: string;
  /** Paragraphs of that extra privacy section. */
  privacyExtra: string[];
  /** Terms intro, naming the speedometer instead of "the service". */
  termsIntro: string;
  /** First paragraph of "1. Use of the Service". */
  termsUse: string;
  /** GPS caveats inserted into "2. Accuracy Disclaimer", after the bullet list. */
  termsAccuracy: string[];
};

export const speedometerLegal: Record<string, SpeedLegal> = {
  en: {
    privacyExtraH: "1a. What the tool does with GPS",
    privacyExtra: [
      "A **gps speedometer** needs your position, and that is the one sensitive input this page asks for. The browser hands your coordinates to the page, the page turns movement between two fixes into a speed, and the coordinate is then discarded. Nothing is written to a database, no trip log is created, and there is no way for us to see a **live speedometer** session after you close the tab.",
      "The same applies to the trip figures. Max speed, average speed, distance and altitude are calculated in the tab and reset when you press Reset or reload. An **online speedometer free** of accounts means there is no profile to attach them to, and a **speedometer digital** reading is never linked to an identity. That is what makes the **free online speedometer** useful on a borrowed phone: start a **live speed test**, close the tab, and nothing about the trip remains on our side.",
    ],
    termsIntro: "Please read these Terms and Conditions (\"Terms\") carefully before using the online speedometer (\"the Service\"). By accessing or using the Service, you agree to be bound by these Terms.",
    termsUse: "This free online speedometer is provided free of charge for personal and professional use. You may use the Service to measure speed, distance and trip statistics, so a **live speed test** costs nothing and needs no registration or payment.",
    termsAccuracy: [
      "A **gps speedometer online** reading is only as good as the satellite fix behind it. Under trees, in tunnels, in multi-storey car parks and inside buildings the position drifts or stalls, and the number shown can lag or freeze. Treat any **online speedometer mph** figure taken in those conditions as indicative, not evidential.",
      "Do not use a **speedometer test online** result as a legal or safety reference. Speed limits must be judged from the vehicle's own instruments and from road signage, and a **live speed test** on a phone is a convenience measurement, not a calibrated one.",
    ],
  },
  es: {
    privacyExtraH: "1a. Qué hace la herramienta con el GPS",
    privacyExtra: [
      "Un **velocímetro GPS** necesita tu posición, y esa es la única entrada sensible que pide esta página. El navegador entrega tus coordenadas a la página, la página convierte el movimiento entre dos mediciones en una velocidad y la coordenada se descarta. No se escribe nada en una base de datos, no se crea un registro de viaje y no hay forma de que veamos una sesión de **velocímetro en vivo** después de que cierres la pestaña.",
      "Lo mismo vale para las cifras del viaje. La velocidad máxima, la media, la distancia y la altitud se calculan en la pestaña y se reinician al pulsar Reiniciar o recargar. Un **velocímetro online gratis** y sin cuentas significa que no hay perfil al que asociarlas, y una lectura de **velocímetro digital** nunca se vincula a una identidad. Por eso el **velocímetro online gratis** sirve en un móvil prestado: lanza un **test de velocidad en vivo**, cierra la pestaña y no queda nada del viaje de nuestro lado.",
    ],
    termsIntro: "Lee con atención estos Términos y Condiciones («Términos») antes de usar el velocímetro online («el Servicio»). Al acceder o usar el Servicio aceptas quedar vinculado por estos Términos.",
    termsUse: "Este velocímetro online gratis se ofrece sin coste para uso personal y profesional. Puedes usar el Servicio para medir velocidad, distancia y estadísticas del viaje, así que un **test de velocidad en vivo** no cuesta nada y no requiere registro ni pago.",
    termsAccuracy: [
      "La lectura de un **velocímetro GPS online** vale lo que vale la señal de satélites que tiene detrás. Bajo los árboles, en túneles, en aparcamientos de varias plantas y dentro de edificios la posición se desvía o se atasca, y el número puede retrasarse o congelarse. Toma cualquier cifra de **velocímetro online mph** obtenida en esas condiciones como orientativa, no como prueba.",
      "No uses el resultado de un **velocímetro test online** como referencia legal o de seguridad. Los límites de velocidad deben juzgarse con los instrumentos del propio vehículo y con la señalización de la vía, y un **test de velocidad en vivo** en un móvil es una medición de comodidad, no una medición calibrada.",
    ],
  },
  ja: {
    privacyExtraH: "1a. このツールが GPS で行うこと",
    privacyExtra: [
      "**GPS スピードメーター**には位置情報が必要で、それがこのページが求める唯一の機微な入力です。ブラウザが座標をページに渡し、ページは2つの測位の間の移動を速度に変換し、座標はそのあと破棄されます。データベースに書き込むことも、走行ログを作ることもなく、タブを閉じたあとに**ライブスピードメーター**のセッションを見る手段はありません。",
      "走行の数値も同じです。最高速度、平均速度、距離、高度はタブ内で計算され、リセットを押すか再読み込みすると消えます。アカウントのない**オンラインスピードメーター 無料**なので関連づけるプロフィールがなく、**デジタルスピードメーター**の値が身元と結びつくこともありません。だから**無料のオンラインスピードメーター**は借りた端末でも使えます。**ライブ速度テスト**を始めてタブを閉じれば、走行について當社側に何も残りません。",
    ],
    termsIntro: "オンラインスピードメーター（以下「本サービス」）をご利用になる前に、この利用規約（以下「本規約」）をよくお読みください。本サービスにアクセスまたは利用することで、本規約に拘束されることに同意したものとみなされます。",
    termsUse: "この無料のオンラインスピードメーターは、個人利用・業務利用を問わず無償で提供されます。速度、距離、走行統計の計測に利用できるため、**ライブ速度テスト**に費用も登録も支払いも必要ありません。",
    termsAccuracy: [
      "**GPS スピードメーター オンライン**の値は、その背後にある衛星測位の質を超えることはありません。木の下、トンネル内、立体駐車場、建物の中では位置がずれたり止まったりし、表示される数字が遅れたり固まったりします。そのような条件で得た**オンライン スピードメーター mph** の値は、証拠ではなく目安として扱ってください。",
      "**スピードメーター テスト オンライン**の結果を法的または安全上の基準として使わないでください。制限速度は車両の計器と道路標識で判断するものであり、スマートフォンでの**ライブ速度テスト**は手軽な測定であって校正された測定ではありません。",
    ],
  },
  fr: {
    privacyExtraH: "1a. Ce que l’outil fait avec le GPS",
    privacyExtra: [
      "Un **tachymètre GPS** a besoin de votre position, et c’est la seule donnée sensible que cette page demande. Le navigateur transmet vos coordonnées à la page, la page transforme le déplacement entre deux mesures en vitesse, puis la coordonnée est abandonnée. Rien n’est écrit dans une base de données, aucun journal de trajet n’est créé, et il nous est impossible de consulter une session de **tachymètre en direct** après la fermeture de l’onglet.",
      "Il en va de même pour les chiffres du trajet. Vitesse maximale, vitesse moyenne, distance et altitude sont calculées dans l’onglet et remises à zéro quand vous appuyez sur Réinitialiser ou rechargez la page. Un **tachymètre en ligne gratuit** sans compte signifie qu’aucun profil ne peut y être associé, et une lecture de **tachymètre numérique** n’est jamais liée à une identité. C’est ce qui rend le **tachymètre en ligne gratuit** utile sur un téléphone emprunté : lancez un **test de vitesse en direct**, fermez l’onglet, et rien du trajet ne reste de notre côté.",
    ],
    termsIntro: "Veuillez lire attentivement ces Conditions Générales (« Conditions ») avant d’utiliser le tachymètre en ligne (« le Service »). En accédant au Service ou en l’utilisant, vous acceptez d’être lié par ces Conditions.",
    termsUse: "Ce tachymètre en ligne gratuit est fourni gratuitement pour un usage personnel et professionnel. Vous pouvez utiliser le Service pour mesurer la vitesse, la distance et les statistiques de trajet : un **test de vitesse en direct** ne coûte donc rien et ne demande ni inscription ni paiement.",
    termsAccuracy: [
      "Une lecture de **tachymètre GPS en ligne** ne vaut que ce que vaut le fix satellite derrière elle. Sous les arbres, dans les tunnels, dans les parkings à étages et à l’intérieur des bâtiments, la position dérive ou se bloque, et le chiffre affiché peut accuser un retard ou se figer. Considérez toute valeur en **tachymètre en ligne mph** prise dans ces conditions comme indicative, non comme une preuve.",
      "N’utilisez pas le résultat d’un **test de tachymètre en ligne** comme référence légale ou de sécurité. Les limitations de vitesse doivent être appréciées à partir des instruments du véhicule et de la signalisation, et un **test de vitesse en direct** sur un téléphone est une mesure de confort, pas une mesure étalonnée.",
    ],
  },
  de: {
    privacyExtraH: "1a. Was das Werkzeug mit GPS macht",
    privacyExtra: [
      "Ein **GPS-Tachometer** braucht deine Position, und das ist die einzige sensible Eingabe, die diese Seite anfragt. Der Browser übergibt deine Koordinaten an die Seite, die Seite rechnet die Bewegung zwischen zwei Messungen in eine Geschwindigkeit um, danach wird die Koordinate verworfen. Nichts wird in eine Datenbank geschrieben, kein Fahrtenprotokoll entsteht, und wir können eine Sitzung des **Live-Tachometers** nach dem Schließen des Tabs nicht sehen.",
      "Dasselbe gilt für die Fahrtwerte. Höchstgeschwindigkeit, Durchschnitt, Strecke und Höhe werden im Tab berechnet und beim Zurücksetzen oder Neuladen verworfen. Ein **Online-Tachometer kostenlos** und ohne Konten bedeutet, dass es kein Profil gibt, dem man sie zuordnen könnte, und ein Wert des **digitalen Tachometers** wird nie mit einer Identität verknüpft. Deshalb ist das **kostenlose Online-Tachometer** auf einem geliehenen Handy nützlich: **Live-Geschwindigkeitstest** starten, Tab schließen, und auf unserer Seite bleibt nichts von der Fahrt.",
    ],
    termsIntro: "Bitte lies diese Allgemeinen Geschäftsbedingungen („Bedingungen“) sorgfältig, bevor du das Online-Tachometer („der Dienst“) nutzt. Mit dem Zugriff auf den Dienst oder seiner Nutzung erklärst du dich an diese Bedingungen gebunden.",
    termsUse: "Dieses kostenlose Online-Tachometer wird für private und berufliche Nutzung kostenlos bereitgestellt. Du darfst den Dienst nutzen, um Geschwindigkeit, Strecke und Fahrtstatistiken zu messen — ein **Live-Geschwindigkeitstest** kostet also nichts und verlangt weder Registrierung noch Zahlung.",
    termsAccuracy: [
      "Ein Wert des **GPS-Tachometers online** ist nur so gut wie der Satellitenfix dahinter. Unter Bäumen, in Tunneln, in Parkhäusern und in Gebäuden driftet oder stockt die Position, und die angezeigte Zahl kann nachhinken oder einfrieren. Betrachte jeden **Tachometer online mph**-Wert aus solchen Bedingungen als Richtwert, nicht als Beweis.",
      "Verwende das Ergebnis eines **Tachometer-Tests online** nicht als rechtliche oder sicherheitsrelevante Referenz. Tempolimits sind anhand der Fahrzeuginstrumente und der Beschilderung zu beurteilen, und ein **Live-Geschwindigkeitstest** auf dem Handy ist eine Komfortmessung, keine kalibrierte Messung.",
    ],
  },
  pt: {
    privacyExtraH: "1a. O que a ferramenta faz com o GPS",
    privacyExtra: [
      "Um **velocímetro GPS** precisa da sua posição, e essa é a única entrada sensível que esta página pede. O navegador entrega suas coordenadas à página, a página transforma o movimento entre duas medições em velocidade e a coordenada é descartada. Nada é gravado num banco de dados, nenhum registro de trajeto é criado, e não há como vermos uma sessão de **velocímetro ao vivo** depois que você fecha a aba.",
      "O mesmo vale para os números do trajeto. Velocidade máxima, média, distância e altitude são calculadas na aba e zeradas quando você toca em Reiniciar ou recarrega. Um **velocímetro online grátis** e sem contas significa que não há perfil ao qual associá-los, e uma leitura de **velocímetro digital** nunca é ligada a uma identidade. É por isso que o **velocímetro online grátis** é útil num celular emprestado: inicie um **teste de velocidade ao vivo**, feche a aba e nada do trajeto fica do nosso lado.",
    ],
    termsIntro: "Leia estes Termos e Condições («Termos») com atenção antes de usar o velocímetro online («o Serviço»). Ao acessar ou usar o Serviço, você concorda em ficar vinculado a estes Termos.",
    termsUse: "Este velocímetro online grátis é oferecido sem custo para uso pessoal e profissional. Você pode usar o Serviço para medir velocidade, distância e estatísticas do trajeto, então um **teste de velocidade ao vivo** não custa nada e não exige cadastro nem pagamento.",
    termsAccuracy: [
      "A leitura de um **velocímetro GPS online** vale apenas o que vale o sinal de satélite por trás dela. Sob árvores, em túneis, em estacionamentos de vários andares e dentro de prédios a posição se desvia ou trava, e o número pode atrasar ou congelar. Trate qualquer valor em **velocímetro online mph** obtido nessas condições como indicativo, não como prova.",
      "Não use o resultado de um **teste de velocímetro online** como referência legal ou de segurança. Os limites de velocidade devem ser julgados pelos instrumentos do próprio veículo e pela sinalização da via, e um **teste de velocidade ao vivo** no celular é uma medição de conveniência, não uma medição calibrada.",
    ],
  },
  ko: {
    privacyExtraH: "1a. 이 도구가 GPS로 하는 일",
    privacyExtra: [
      "**GPS 속도계**는 위치가 필요하고, 그것이 이 페이지가 요청하는 유일한 민감한 입력입니다. 브라우저가 좌표를 페이지에 넘기고, 페이지는 두 측정 사이의 이동을 속도로 바꾼 뒤 좌표를 버립니다. 데이터베이스에 기록하지 않고, 주행 로그도 만들지 않으며, 탭을 닫은 뒤 **실시간 속도계** 세션을 볼 방법이 없습니다.",
      "주행 수치도 마찬가지입니다. 최고 속도, 평균 속도, 거리, 고도는 탭 안에서 계산되고 재설정을 누르거나 새로 고치면 사라집니다. 계정이 없는 **온라인 속도계 무료**이므로 연결할 프로필이 없고, **디지털 속도계** 값이 신원과 연결되지도 않습니다. 그래서 **무료 온라인 속도계**는 빌린 휴대폰에서도 쓸 만합니다. **실시간 속도 테스트**를 시작하고 탭을 닫으면 주행에 관한 어떤 것도 저희 쪽에 남지 않습니다.",
    ],
    termsIntro: "온라인 속도계(이하 “서비스”)를 사용하기 전에 이 이용약관(이하 “약관”)을 주의 깊게 읽어 주세요. 서비스에 접근하거나 사용하면 이 약관에 구속되는 데 동의한 것으로 간주됩니다.",
    termsUse: "이 무료 온라인 속도계는 개인적·업무적 사용을 위해 무료로 제공됩니다. 속도, 거리, 주행 통계를 측정하는 데 사용할 수 있으므로 **실시간 속도 테스트**에 비용도, 가입도, 결제도 필요하지 않습니다.",
    termsAccuracy: [
      "**GPS 속도계 온라인** 값은 그 뒤에 있는 위성 측위 품질을 넘지 못합니다. 나무 아래, 터널, 여러 층 주차장, 건물 안에서는 위치가 흔들리거나 멈추고, 표시되는 숫자가 늦거나 멈출 수 있습니다. 그런 조건에서 얻은 **온라인 속도계 mph** 값은 증거가 아니라 참고로 보세요.",
      "**속도계 테스트 온라인** 결과를 법적 또는 안전 기준으로 사용하지 마세요. 제한 속도는 차량 자체 계기와 도로 표지로 판단해야 하며, 휴대폰에서의 **실시간 속도 테스트**는 편의를 위한 측정이지 보정된 측정이 아닙니다.",
    ],
  },
  it: {
    privacyExtraH: "1a. Cosa fa lo strumento con il GPS",
    privacyExtra: [
      "Un **tachimetro GPS** ha bisogno della tua posizione, ed è l’unico dato sensibile che questa pagina richiede. Il browser passa le coordinate alla pagina, la pagina trasforma il movimento tra due letture in una velocità e la coordinata viene poi scartata. Nulla viene scritto in un database, nessun registro di viaggio viene creato, e non ci è possibile vedere una sessione di **tachimetro in tempo reale** dopo che chiudi la scheda.",
      "Lo stesso vale per i numeri del viaggio. Velocità massima, media, distanza e altitudine sono calcolate nella scheda e azzerate quando premi Reimposta o ricarichi. Un **tachimetro online gratuito** senza account significa che non esiste un profilo a cui associarli, e una lettura del **tachimetro digitale** non viene mai collegata a un’identità. È questo che rende il **tachimetro online gratuito** utile su un telefono preso in prestito: avvia un **test di velocità in tempo reale**, chiudi la scheda e nulla del viaggio resta dalla nostra parte.",
    ],
    termsIntro: "Leggi con attenzione questi Termini e Condizioni («Termini») prima di usare il tachimetro online («il Servizio»). Accedendo al Servizio o utilizzandolo accetti di essere vincolato da questi Termini.",
    termsUse: "Questo tachimetro online gratuito è fornito gratuitamente per uso personale e professionale. Puoi usare il Servizio per misurare velocità, distanza e statistiche del viaggio, quindi un **test di velocità in tempo reale** non costa nulla e non richiede registrazione né pagamento.",
    termsAccuracy: [
      "La lettura di un **tachimetro GPS online** vale quanto il fix satellitare che ha dietro. Sotto gli alberi, nelle gallerie, nei parcheggi a più piani e dentro gli edifici la posizione deriva o si blocca, e il numero mostrato può arrivare in ritardo o congelarsi. Considera qualsiasi valore in **tachimetro online mph** rilevato in quelle condizioni come indicativo, non probatorio.",
      "Non usare il risultato di un **test tachimetro online** come riferimento legale o di sicurezza. I limiti di velocità vanno valutati con gli strumenti del veicolo e con la segnaletica, e un **test di velocità in tempo reale** su un telefono è una misura di comodità, non una misura tarata.",
    ],
  },
};
