import type { HomeCopy } from './types';

export const home: HomeCopy = {
  howTitle: 'Så fungerar Instanten',
  steps: [
    {
      title: 'Välj ett Instanten-verktyg',
      body:
        'Öppna ett verktyg direkt från startsidan utan konto, tillägg eller väntetid. Varje verktyg körs i webbläsaren på telefon, surfplatta eller dator.',
    },
    {
      title: 'Kör eller konvertera direkt',
      body:
        'Klistra in text, värden eller parametrar och få ett rent resultat på millisekunder. Konvertering, formatering eller beräkning uppdateras direkt.',
    },
    {
      title: 'Kopiera resultat och få hjälp',
      body:
        'Kopiera exakta resultat med ett klick eller öppna en tydlig steg-för-steg-guide med formler och tips. Varje guide hänvisar till offentliga standarder.',
    },
  ],
  trustTitle: 'Byggt för förtroende, inte bara hastighet',
  trustLead:
    'Många verktygssajter gömmer enkla uppgifter bakom popupfönster, tunga skript och inloggningsmurar. Instanten håller varje arbetsflöde rent, transparent och utan distraktioner, med riktiga offentliga standarder.',
  trustCards: [
    {
      title: 'Direkt hjälp utan registrering',
      body:
        'Varje verktyg och guide är redo att användas. Du lämnar aldrig e-post, startar ingen provperiod och skapar inget lösenord för en snabb uppgift.',
    },
    {
      title: 'Snabb onlineleverans',
      body:
        'Sidor förrenderas statiskt med minimala skript. Varje verktyg svarar direkt, även på mobilnät, och stöder Core Web Vitals-målen.',
    },
    {
      title: 'Verifierad konverteringsprecision',
      body:
        'Mätvärden följer offentliga standarder: riktning och lutning kommer från W3C DeviceOrientation Event, qibla-bäringen från W3C Geolocation API, och hastigheter använder exakta SI-omräkningar (1 knop = 1,852 km/h).',
    },
    {
      title: 'Integritet i webbläsaren',
      body:
        'Bearbetning sker i webbläsaren när det är möjligt och temainställningar sparas lokalt på din enhet. Instanten säljer eller delar inte personuppgifter för beteendebaserad annonsering.',
    },
  ],
  explainTitle: 'Instanten förklarat',
  explainLead:
    'Hur våra direktverktyg fungerar, vad du klarar på sekunder och varför snabba webbverktyg slår tunga nedladdningar — kontrollerat mot offentliga standarder.',
  blocks: [
    {
      title: 'Vad varje instrument faktiskt mäter',
      paragraphs: [
        'Onlinekompassen omvandlar telefonens eller laptopens orienteringssensor till en riktning i grader. Det är snabbaste sättet att svara på ”vilket håll tittar jag åt” utan att öppna en andra app: skivan följer enheten när du vrider dig och siffran går att läsa medan nålen rör sig. Eftersom den läser en magnetometer påverkas resultatet av högtalare, metallramar och magnetiska skal i närheten.',
        'Vattenpasset visar lutningen på båda axlarna samtidigt, så en hylla, en tavelram eller en tvättmaskin kan kontrolleras utan ett fysiskt vattenpass i rummet. Två gradvärden och en synlig bubbla visar om ytan är vågrät både på längden och på bredden — något ett enda rör aldrig visar.',
        'Hastighetsmätaren visar farten i km/h, mph och knop samtidigt, omräknad med exakta SI-faktorer så att de tre siffrorna aldrig motsäger varandra. Den läser positionen som webbläsaren anger: användbar i bil, på cykel eller i båt, utan konto, utan spårning och utan installation.',
        'Qibla-sökaren beräknar storcirkelbäringen från dina koordinater till Mecka och visar den som kompassriktning. Det är inte samma sak som ”peka österut”: rätt bäring ändras med var du står, och sidan anger vilket värde som användes så att du kan kontrollera det.',
      ],
    },

    {
      title: 'Vad Instanten gör',
      paragraphs: [
        'Varje dag gör studenter, utvecklare, författare, formgivare och team många små digitala uppgifter: formatera data, konvertera direkt, rensa text, beräkna värden eller slå upp tekniska svar. Tunga skrivbordsprogram för trettio sekunder slösar tid.',
        'Instanten löser det på ett ställe: en snabb, modern hubb med gratis direktverktyg och praktiska handledningar, utan konto, användningsgräns eller prenumeration.',
      ],
    },
    {
      title: 'Varför Instanten känns enkelt',
      paragraphs: [
        'Hastighet är bara halva jobbet; tydlighet är lika viktig. Varje verktyg sätter in- och utdata i fokus med mobilanpassade kontroller, tangentbordsnavigering och direkt växling mellan ljust och mörkt läge.',
        'Tre tekniska regler styr hela biblioteket:',
      ],
      bullets: [
        'Direkt start utan ballast — statiska HTML-sidor laddas nästan omedelbart i moderna webbläsare.',
        'Mätvärden att lita på — riktning och lutning från W3C DeviceOrientation Event, qibla-bäringen från W3C Geolocation API och hastigheter med exakta SI-omräkningar mellan km/h, mph och knop.',
        'Praktisk kontext bredvid verktyget — guider förklarar edge cases och bästa praxis för genuin direkthjälp.',
      ],
    },
    {
      title: 'Vardagsuppgifter du klarar med Instanten',
      bullets: [
        'Snabb formatering och direktkonvertering — omvandla enheter, strukturerad text, kod eller dokumentvärden utan räknefel.',
        'Arbetsflöden för utvecklare och skapare — rensa, granska, validera och förbered resurser snabbare.',
        'Direkthjälp för studier och kontor — kontrollera beräkningar och följ guider på telefon, Chromebook eller pc.',
        'Praktiska AI- och produktivitetsguider — läs på Instanten-bloggen.',
      ],
      links: [{ label: 'Instanten-bloggen', href: '/blog/' }],
    },
    {
      title: 'Varför onlineverktyg slår tunga installationer',
      paragraphs: [
        'Inbyggda skrivbordssviter passar för videorendering på flera gigabyte, inte för snabba vardagsverktyg. En onlineverktygslåda i webbläsaren tar bort kompatibilitetsproblem, lagringsbelastning, bakgrundsuppdateringar och licensfrågor — samma verktyg fungerar på Windows, macOS, Linux, Android och iOS.',
        'Läs mer om vår filosofi och granskningen av varje instrument mot de W3C-specifikationer som anges på About-sidan.',
      ],
      links: [{ label: 'Om oss', href: '/about/' }],
    },
    {
      title: 'Så får du bäst resultat på Instanten',
      bullets: [
        'Bokmärk startsidan för åtkomst med ett tryck.',
        'Använd först ren, oformaterad indata så att dolda mellanslag inte stör resultatet.',
        'Kombinera verktyg med exempel när regler eller edge cases är okända.',
        'Byt tema vid lång läsning; ditt val sparas lokalt.',
        'Dela permanenta sidlänkar med Open Graph-förhandsvisning med teamet.',
        'Föreslå nya funktioner via Kontakt-sidan.',
      ],
      links: [{ label: 'Kontakt', href: '/contact/' }],
    },
    {
      title: 'Var mätvärdena kommer från – och var de tar slut',
      paragraphs: [
        'Varje instrument på Instanten läser något som din enhet redan mäter. Kompassen och vattenpasset läser orienteringshändelsen som webbläsaren tillhandahåller, hastighetsmätaren läser ändringar i den rapporterade positionen och qibla-sökaren kombinerar positionen med en storcirkelformel. Inget laddas upp, inget sparas mellan besök och inget resultat hämtas från en server – därför fungerar varje sida även efter att fliken stängts och öppnats.',
        'Det anger också den ärliga gränsen. En telefonsensor är inget kalibrerat mätinstrument: en magnetometer driver nära metall och magneter, en webbläsarposition kan stämma på några meter eller några hundra beroende på signal, och en sned bärbar dator rapporterar lutning annorlunda än en telefon som ligger plant. Därför anger varje sida vad som mättes i stället för att lova laboratorieprecision.',
        'Värdena visas i den enhet som passar uppgiften. Riktning och lutning i grader, hastighet samtidigt i km/h, mph och knop med exakta SI-faktorer, och qibla-sidan anger bäringen i grader från norr tillsammans med den beräknade distansen. Verkar en siffra fel, kontrollera sensorn först och inte uträkningen.',
      ],
      bullets: [
        'Inget laddas upp; varje mätvärde beräknas inuti sidan.',
        'Enheter och specifikationen bakom dem står bredvid siffran.',
        'Sensorernas gränser står på sidan, inte i en fotnot.',
      ],
    },

  ],
  faqTitle: 'Vanliga frågor',
  faqs: [],
};
