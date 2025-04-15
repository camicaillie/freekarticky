import { IntroductionSlide } from '../components/IntroductionCourse';

export const introductionCourses: Record<string, Record<string, IntroductionSlide[]>> = {
  'general': {
    'filosofie': [
    {
      title: 'Míletská škola',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Thales, Anaximandros, Anaximenés. 

Hlavní myšlenka: Míletská škola hledala základní princip (arché), který by vysvětlil vznik a povahu světa. Thales tvrdil, že základem všeho je voda, Anaximandros mluvil o neomezeném (apeiron), a Anaximenés o vzduchu. 

Příklad: Thalesovo tvrzení, že voda je základem všeho, je viditelné i v přírodních jevech, jako je kondenzace vody nebo vznik života v moři.`
    },
    {
      title: 'Pythagorejská škola',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Pythagoras.

Hlavní myšlenka: Pythagorejská škola věřila, že matematika a čísla jsou klíčové pro pochopení vesmíru. Pythagoras tvrdil, že všechny věci jsou uspořádány podle matematických zákonů, přičemž čísla jsou jejich podstatou.

Příklad: Pythagorejská věta, která říká, že součet čtverců délek obou kratších stran pravoúhlého trojúhelníku se rovná čtverci délky přepony (a² + b² = c²), je příkladem jeho myšlenky, že matematika je základem reality.`
    },
    {
      title: 'Herakleitos',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Herakleitos z Efesu.

Hlavní myšlenka: Herakleitos zdůraznil, že svět je v neustálém pohybu a změně, a že změna je základní charakteristikou reality. Proslul svým výrokem: "Nikdy nevstoupíš do téže řeky".

Příklad: Tento výrok ilustruje, že i když vstoupíme do stejné řeky, její voda už bude jiná, protože se neustále mění. Stejně tak i v životě je vše v neustálém pohybu a nic není trvalé.`
    },
    {
      title: 'Eléjská škola',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Parmenidés, Zenón.

Hlavní myšlenka: Eléjská škola tvrdila, že realita je jedna, neměnná a nehybná. Parmenidés říkal, že změna a pohyb jsou iluze. Zenón formuloval paradoxy, které měly ukázat, že pohyb je nesmyslný.

Příklad: Zenónův paradox "Achilles a želva" ukazuje, že Achilles, i když běží rychleji než želva, ji nikdy nedohoní, protože vždy bude muset uběhnout vzdálenost, kterou želva již ušla.`
    },
    {
      title: 'Sofisté',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Protagoras, Gorgias.

Hlavní myšlenka: Sofisté věřili, že pravda je relativní a závisí na lidském názoru. Protagoras proslul svým výrokem: "Člověk je mírou všech věcí", což znamená, že vše je subjektivní a závisí na člověku.

Příklad: Když dva lidé mají různé názory na nějakou událost, sofisté by řekli, že oba mají pravdu, protože pravda je relativní a závisí na jejich osobních perspektivách.`
    },
    {
      title: 'Atomisté',
      content: `Období: Předsokratovské období.

Hlavní představitelé: Leukippos, Demokritos.

Hlavní myšlenka: Atomisté tvrdili, že vše se skládá z malých, nedělitelných částic - atomů, které se pohybují v prázdnu. Tyto atomy se spojováním vytvářejí různé věci a objekty.

Příklad: Pokud rozbijeme sklenici, podle atomistů se rozbije na mnoho malých atomů, které dříve tvořily celistvou sklenici, ale nyní jsou rozmístěny v prostoru jako samostatné částice.`
    },
    {
      title: 'Sokratova filosofie',
      content: `Období: Klasické období (5. století př. n. l.).

Hlavní představitelé: Sókratés.

Hlavní myšlenka: Sókratés zdůrazňoval význam etiky a sebepoznání, věřil, že „nezkoumaný život nestojí za to žít". Používal dialog (dialektiku) jako metodu zkoumání pravdy.

Příklad: V rozhovoru s mladým mužem by se Sókratés ptal na definici spravedlnosti a postupně by odhaloval rozpory v jeho odpovědích, čímž by ho vedl k hlubšímu zamyšlení a vlastnímu poznání.`
    },
    {
      title: 'Platonismus',
      content: `Období: Klasické období (4. století př. n. l.).

Hlavní představitelé: Platón.

Hlavní myšlenka: Platón rozvinul teorii idejí, podle které existuje dokonalý svět idejí, jehož nedokonalým odrazem je svět, který vidíme. Lidská duše má schopnost tento svět idejí poznávat.

Příklad: Platónova alegorie jeskyně popisuje lidi připoutané v jeskyni, kteří vidí pouze stíny na stěně, a ukazuje, že poznání idejí je jako vyjít z jeskyně na světlo.`
    },
    {
      title: 'Aristotelismus',
      content: `Období: Klasické období (4. století př. n. l.).

Hlavní představitelé: Aristotelés.

Hlavní myšlenka: Aristotelés zdůrazňoval empirické pozorování a logiku. Tvrdil, že vše má svůj účel (telos) a že cílem lidského života je dosažení eudaimonie (štěstí a naplnění).

Příklad: Aristotelés by například zkoumal vlastnosti rostliny a na základě pozorování určil její účel, což by aplikoval i na etické otázky, například jak člověk může dosáhnout svého potenciálu.`
    },
    {
      title: 'Spor o univerzálie',
      content: `Období: Klasické období (4. století př. n. l.).

Pohled Platóna: Platón tvrdil, že univerzálie (obecné pojmy, např. "krása" nebo "dobro") existují samostatně jako reálné ideje ve světě idejí, nezávislé na konkrétních věcech.

Pohled Aristotela: Aristotelés naopak věřil, že univerzálie existují pouze ve věcech samotných, jako jejich podstatné vlastnosti, a mimo ně nemají žádnou nezávislou existenci.

Příklad: Představme si "kruh". Platón by řekl, že existuje dokonalý kruh ve světě idejí, který všechny konkrétní kruhy (např. namalované kruhy na papíře) pouze napodobují. Aristotelés by naopak tvrdil, že vlastnost "kruhovitosti" existuje v každém konkrétním kruhu a není oddělená od dané věci.`
    },
    {
      title: 'Stoicismus',
      content: `Období: Helenistické období (3. století př. n. l. - 2. století n. l.).

Hlavní představitelé: Zénón z Kitia, Epiktétos, Seneca, Marcus Aurelius.

Hlavní myšlenka: Stoicismus se zaměřuje na dosažení vnitřního klidu a harmonického života skrze ovládání emocí a rozpoznání toho, co je v našem životě skutečně pod naší kontrolou. Stoici věřili, že rozum a ctnost jsou klíčem k dosažení „eudaimonie" (šťastného a naplněného života).

Příklad: Stoik Marcus Aurelius ve své knize Meditace zdůrazňuje, jak se vyrovnávat s nepřízní osudu a zaměřovat se na vlastní ctnosti.`
    },
    {
      title: 'Epikureismus',
      content: `Období: Helenistické období (4. století př. n. l. - 1. století n. l.).

Hlavní představitelé: Epikuros, Metrodóros.

Hlavní myšlenka: Epikureismus učí, že nejvyšším cílem je dosáhnout „atarxie" (vnitřního klidu) a potěšení, které je přirozené a dosažitelné skrze rozumné uspokojování základních potřeb, odmítání nadměrných touh a vyhýbání se bolesti.

Příklad: Epikuros tvrdil, že přátelství je největším potěšením, protože přátelé pomáhají zmírnit strach a bolest, což vede k trvalé radosti.`
    },
    {
      title: 'Skepticismus',
      content: `Období: Helenistické období (3. století př. n. l. - 2. století n. l.).

Hlavní představitelé: Pyrrhón z Elidy, Aenesidémos.

Hlavní myšlenka: Skepticismus je filozofický směr, který se zaměřuje na pochybování o schopnosti lidského rozumu dosáhnout jistých a objektivních pravd. Skeptici tvrdí, že člověk nemůže dosáhnout definitivní jistoty a měl by se vyhýbat absolutním tvrzením.

Příklad: Pyrrhón doporučoval, aby se člověk vyhýbal soudům a soudil věci pouze podle přirozených vjemů, což vedlo k tomu, že neexistuje žádný důvod pro negativní emoce.`
    },
    {
      title: 'Novoplatonismus',
      content: `Období: Helenistické období (3. století n. l. - 6. století n. l.).

Hlavní představitelé: Plotínos, Porfyrios, Jamblichos.

Hlavní myšlenka: Novoplatonismus je vývoj a reinterpretace platonismu, který zdůrazňuje existenci jediného, absolutního „Jedna", z něhož pochází vše ostatní. Tento směr se zaměřuje na duchovní očistu a návrat k „Jednu" skrze meditaci, introspekci a filozofii.

Příklad: Plotínos tvrdil, že vše ve světě je propojeno skrze „Jedno", a člověk může dosáhnout osvícení a sjednocení s tímto absolutním principem.`
    },
    {
      title: 'Novopýthagoreismus',
      content: `Období: Helenistické období (3. století př. n. l. - 1. století n. l.).

Hlavní představitelé: Philolaos, Archytas.

Hlavní myšlenka: Novopýthagoreismus zdůrazňuje matematické a harmonické principy jako základ pro porozumění vesmíru. Novopýthagorejci věřili, že vesmír je řízen matematickými zákony, které ovlivňují vše od přírody po duši člověka.

Příklad: Philolaos tvrdil, že vesmír není centrální, ale je uspořádán kolem ohně, což bylo jeho filozofickým pokusem propojit matematiku s cosmologií.`
    }
  ],
    'psychologie': [
      {
        title: 'Psychoanalýza',
        content: `Období: Konec 19. a začátek 20. století.

Hlavní představitelé: Sigmund Freud.

Hlavní myšlenka: Psychoanalýza je teorie a terapeutická metoda, která se zaměřuje na studium nevědomí a vliv nevědomých procesů na chování a myšlení člověka. Freud se domníval, že nevědomé konflikty, potlačené vzpomínky a zranění mají zásadní vliv na duševní zdraví.

Příklad: Freudovo teoretické vysvětlení záměn v jazyce, například, když člověk místo "krásná dívka" řekne "krásná svině", což má být podle něj projev nevědomého přání nebo strachu.`
      },
      {
        title: 'Analytická psychologie',
        content: `Období: Počátek 20. století.

Hlavní představitelé: Carl Gustav Jung.

Hlavní myšlenka: Analytická psychologie se zaměřuje na studium individuace a symboliky. Jung se soustředil na rozvoj jednotlivce, který je schopen dosáhnout plné seberealizace a rovnováhy mezi vědomými a nevědomými částmi psychiky.

Příklad: Jungovy analýzy snů, kde se objevují univerzální symboly (archetypy) jako matka, hrdina nebo stín, které jsou pro všechny kultury a jednotlivce stejné.`
      },
      {
        title: 'Individuální psychologie',
        content: `Období: Počátek 20. století.

Hlavní představitelé: Alfred Adler.

Hlavní myšlenka: Individuální psychologie se zaměřuje na studium jedinečnosti každého člověka a jeho snahy o dosažení nadřazenosti. Adler věřil, že každý člověk má svůj vlastní životní styl a cíle, které se snaží dosáhnout.

Příklad: Adlerova teorie o pocitu méněcennosti a kompenzaci, kde člověk, který se cítí méněcenný v určité oblasti, se snaží tuto nevýhodu kompenzovat rozvojem jiných schopností.`
      },
      {
        title: 'Behaviorismus',
        content: `Období: Začátek 20. století.

Hlavní představitelé: John B. Watson, B. F. Skinner.

Hlavní myšlenka: Behaviorismus je teorie, která tvrdí, že chování je výsledkem podnětů a reakcí (stimulus-response). Tento směr se soustředí na pozorovatelné chování a vychází z přesvědčení, že psychologii lze studovat pouze na základě měřitelných a objektivních faktorů.

Příklad: Skinnerova teorie operantního podmiňování, kdy se chování jedince formuje prostřednictvím pozitivního nebo negativního posílení.`
      },
      {
        title: 'Gestalt psychologie',
        content: `Období: Začátek 20. století.

Hlavní představitelé: Max Wertheimer, Wolfgang Köhler, Kurt Koffka.

Hlavní myšlenka: Gestalt psychologie se zaměřuje na studium vnímání a myšlení jako celků, které jsou více než pouhým součtem jejich částí. Tento směr zdůrazňuje, že člověk vnímá svět v celcích a vzorcích, ne jako izolované prvky.

Příklad: Gestalt zákon blízkosti, který říká, že prvky blízko sebe vnímáme jako celek, například tečky uspořádané do kruhu vnímáme jako kruh, ne jako jednotlivé tečky.`
      },
      {
        title: 'Humanistická psychologie',
        content: `Období: 50. a 60. léta 20. století.

Hlavní představitelé: Abraham Maslow, Carl Rogers.

Hlavní myšlenka: Humanistická psychologie se zaměřuje na studium lidského potenciálu a seberealizace. Tento směr zdůrazňuje svobodu volby, kreativitu a osobní růst člověka.

Příklad: Maslowova pyramida potřeb, která ukazuje hierarchii lidských potřeb od základních fyziologických potřeb až po seberealizaci.`
      },
      {
        title: 'Kognitivní psychologie',
        content: `Období: 60. léta 20. století.

Hlavní představitelé: Jean Piaget, Ulric Neisser.

Hlavní myšlenka: Kognitivní psychologie se zaměřuje na studium mentálních procesů, jako je myšlení, paměť, vnímání a učení. Tento směr zdůrazňuje, že člověk aktivně zpracovává informace a vytváří mentální reprezentace světa.

Příklad: Piagetova teorie kognitivního vývoje, která popisuje, jak se děti vyvíjejí od senzomotorického stádia až po formální operace.`
      },
      {
        title: 'Transpersonální psychologie',
        content: `Období: 60. léta 20. století.

Hlavní představitelé: Stanislav Grof, Abraham Maslow.

Hlavní myšlenka: Transpersonální psychologie se zaměřuje na studium transcendentních a spirituálních aspektů lidské psychiky. Tento směr zkoumá stavy vědomí, které přesahují běžné ego a osobní identitu.

Příklad: Grofovo zkoumání holotropního dýchání a jeho vlivu na změny vědomí a přístup k nevědomému materiálu.`
      },
      {
        title: 'Gnoseologie',
        content: `Období: Od starověku po současnost.

Hlavní představitelé: René Descartes, Immanuel Kant.

Hlavní myšlenka: Gnoseologie je teorie poznání, která se zabývá otázkami, jak člověk poznává svět a jaké jsou hranice lidského poznání. Tento obor zkoumá povahu poznání, jeho zdroje a kritéria pravdivosti.

Příklad: Kantovo rozlišení mezi analytickými a syntetickými soudy, které ukazuje rozdíl mezi definičním poznáním a poznáním, které přidává novou informaci.`
      },
      {
        title: 'Introspekce',
        content: `Období: 19. století.

Hlavní představitelé: Wilhelm Wundt, Edward Titchener.

Hlavní myšlenka: Introspekce je metoda zkoumání vlastních mentálních procesů a stavů. Tato metoda se zaměřuje na systematické pozorování a popis vlastních myšlenek, pocitů a vjemů.

Příklad: Wundtův experimentální přístup k introspekci, kde cvičení pozorovatelé popisovali své vjemy při vystavení různým podnětům.`
      },
      {
        title: 'Kolektivní nevědomí',
        content: `Období: Počátek 20. století.

Hlavní představitelé: Carl Gustav Jung.

Hlavní myšlenka: Kolektivní nevědomí je koncept, který popisuje sdílené nevědomé obsahy, které jsou dědictvím celého lidstva. Jung věřil, že tyto obsahy se projevují v mýtech, symbolech a archetypech.

Příklad: Jungova analýza mýtů a pohádek, kde identifikoval univerzální archetypy jako hrdina, stín nebo moudrý stařec, které se objevují v různých kulturách.`
      }
    ],
    'sociologie': [
      {
        title: 'Auguste Comte',
        content: `Období: 19. století.

Myšlenkový směr: Pozitivismus.

Hlavní myšlenka: Comte je zakladatelem pozitivismu, směru, který tvrdí, že všechny skutečnosti je možné studovat vědeckými metodami, podobně jako v přírodních vědách. Uvedl teorii tří stádií vývoje lidského poznání, která postupuje od teologického, přes metafyzické, až k vědeckému (pozitivnímu) stádiu. Vědecký přístup podle něj měl přinést objektivní porozumění sociálním jevům a tím i zlepšení lidské společnosti.

Příklad: Comteho práce „Systém pozitivní filozofie", která klade důraz na vědecké metody a aplikace na analýzu společenských jevů.`
      },
      {
        title: 'Herbert Spencer',
        content: `Období: 19. století.

Myšlenkový směr: Sociální darwinismus.

Hlavní myšlenka: Spencer přinesl teorii sociálního darwinismu, která tvrdí, že stejně jako v přírodě, i v lidské společnosti přežívají nejschopnější a nejadaptabilnější jedinci. Tvrdil, že lidské společnosti a jejich instituce se vyvíjejí přirozeným výběrem, což znamená, že silnější skupiny a jednotlivci by měli mít svobodu prosperovat bez zásahů zvenčí. Tento přístup odmítal regulace státu a podporoval laissez-faire ekonomiku, která umožňuje přirozený výběr ve všech oblastech života.

Příklad: Spencerovo tvrzení, že jakýkoliv zásah státu do sociálních procesů, například pomoc chudým, brání přirozenému výběru a pokroku společnosti.`
      },
      {
        title: 'Karl Marx',
        content: `Období: 19. století.

Myšlenkový směr: Marxismus.

Hlavní myšlenka: Marxismus tvrdí, že historie lidstva je historií třídních bojů, kde dominantní třídy vykořisťují nižší třídy. Marx rozpracoval teorii o tom, jak kapitalismus vede k exploataci pracujících a jak je tento systém neudržitelný. Předpověděl, že proletariát (dělnická třída) nakonec povstane proti buržoazii (vlastníkům výrobních prostředků), což povede k revoluci a vzniku beztřídní socialistické společnosti.

Příklad: Marxova analýza kapitalismu a jeho teorie přebírání moci proletariátem během proletářské revoluce.`
      },
      {
        title: 'Émile Durkheim',
        content: `Období: 19. - 20. století.

Myšlenkový směr: Jeden ze zakladatelů moderní sociologie (ovlivnil mnoho směrů).

Hlavní myšlenka: Durkheim byl zakladatelem moderní sociologie, který věřil, že společnost by měla být studována jako objektivní realita, která ovlivňuje chování jednotlivců. Zajímal se o to, jak sociální struktury, jako náboženství nebo dělba práce, udržují sociální řád a stabilitu. Durkheim také tvrdil, že společenské jevy musí být vysvětlovány podle jejich funkce v rámci širší sociální struktury, a že společnost je více než souhrn jednotlivců.

Příklad: Durkheimova studie sebevraždy, která ukázala, že sebevraždy nejsou jen individuálními činy, ale jsou ovlivněny širšími sociálními faktory, jako je integrace jednotlivce do společnosti.`
      },
      {
        title: 'Vilfredo Pareto',
        content: `Období: 19. - 20. století.

Myšlenkový směr: Elitismus.

Hlavní myšlenka: Pareto formuloval teorii, podle které v každé společnosti existují dvě hlavní kategorie: elity a masy. Elity jsou ti, kteří kontrolují moc a bohatství, zatímco masy jsou pasivní a podřízené. Pareto věřil, že změny ve společnosti jsou důsledkem boje mezi různými elitami a že změna moci mezi elitami vede k postupnému rozvoji společnosti. Dále tvrdil, že mocné elity vždy udržují svou pozici, ale mění se jednotliví členové elitních skupin. Zneužito nacismem.

Příklad: Paretoho „princip 80/20", který ukazuje, že 80 % zdrojů a moci je soustředěno v rukou 20 % lidí ve společnosti.`
      },
      {
        title: 'Max Weber',
        content: `Období: 19. - 20. století.

Myšlenkový směr: Chápající sociologie.

Hlavní myšlenka: Weber se zabýval tím, jak sociální činy jednotlivců, jejich motivy a hodnoty ovlivňují vznik a fungování institucí a organizací. Na rozdíl od Marxovy ekonomické determinace, Weber tvrdil, že různé hodnoty a ideologie, například protestantská etika, mohou mít zásadní vliv na vznik kapitalismu. Zajímal se také o byrokracii jako jednu z klíčových struktur moderní společnosti, která, i když zajišťuje efektivitu, může vést k odcizení a ztrátě individuality.

Příklad: Weberova teorie o protestantské etice a jejím vlivu na vznik kapitalismu, kde tvrdil, že určité hodnoty spojené s protestantským náboženstvím vedly k etice tvrdé práce, šetření a racionality, které jsou základem kapitalistické ekonomiky.`
      },
      {
        title: 'Georg Simmel',
        content: `Období: 19. - 20. století.

Myšlenkový směr: Sociologie.

Hlavní myšlenka: Simmel se zaměřoval na studium malých skupin a interakcí mezi jednotlivci, čímž se stal průkopníkem mikro-sociologie. Jeho teorie říká, že každé jednotlivé setkání a vztah mezi lidmi má vliv na širší sociální strukturu. Zkoumal také vliv moderního městského života na jednotlivce, přičemž tvrdil, že anonymita velkých měst může vést k rozpadu tradičních společenských vazeb.

Příklad: Simmelova analýza vztahů mezi jednotlivci v moderním městském prostředí, kde anonymita a rychlý životní styl mohou vést k izolaci a ztrátě osobních kontaktů.`
      },
      {
        title: 'Robert Park',
        content: `Období: 20. století.

Myšlenkový směr: Chicago School.

Hlavní myšlenka: Park byl klíčovým představitelem Chicagské školy sociologie, která se zaměřila na studium městského života a jeho vlivu na sociální interakce. Zabýval se tím, jak městské prostředí formuje chování a vztahy mezi lidmi, přičemž zdůrazňoval význam prostředí a sociálních faktorů v rozvoji jednotlivců. Dále se věnoval analýze procesů migrace a urbanizace, které byly v té době významnými tématy.

Příklad: Parkova studie městských komunit v Chicagu, kde zkoumal, jak různé etnické a sociální skupiny spolu koexistují v městském prostoru.`
      },
      {
        title: 'Jacob Moreno',
        content: `Období: 20. století.

Myšlenkový směr: Psychodrama.

Hlavní myšlenka: Moreno je zakladatelem psychodramy, terapeutické metody, která používá dramatizaci osobních konfliktů a zkušeností jako způsob psychoterapie. Psychodrama umožňuje jednotlivcům prožít a analyzovat své emoce a vztahy v simulovaných situacích, což jim pomáhá lépe porozumět jejich vnitřním prožitkům a konfliktům. Moreno věřil, že pomocí tohoto přístupu je možné dosáhnout hlubšího sebepoznání a uzdravení.

Příklad: Morenoho psychodramatické sezení, kdy účastníci hrají různé role, aby se vyrovnali se svými vnitřními problémy nebo vztahovými konflikty.`
      },
      {
        title: 'Tomáš Garrigue Masaryk',
        content: `Období: 19. - 20. století.

Myšlenkový směr: Humanismus, sociologie.

Hlavní myšlenka: Masaryk se zasazoval o humanistické hodnoty, které kladly důraz na rozum, vědu a etiku v politice. V jeho filozofii se prolínaly prvky sociologie a politiky, přičemž jeho hlavním cílem bylo zajištění demokratických a svobodných principů pro nově vzniklou Československou republiku. Masaryk měl rovněž významný podíl na formování politických institucí a rozvoji občanské společnosti v Československu.

Příklad: Masarykovo dílo „Česká otázka", kde se zaměřil na národní identitu a roli vědy a rozumu v politickém životě.`
      },
      {
        title: 'Edvard Beneš',
        content: `Období: 20. století.

Myšlenkový směr: Diplomacie, politika.

Hlavní myšlenka: Beneš byl významnou osobností české diplomacie, který se podílel na vzniku Československé republiky a byl klíčovým diplomatem v období první a druhé světové války. Byl obhájcem mírové politiky a přičinil se o vznik mezinárodních paktů, které měly zajistit bezpečnost střední Evropy. Ve své politické kariéře se věnoval především zahraniční politice a ochraně suverenity Československa.

Příklad: Benešovo zapojení do vzniku Mnichovské dohody a jeho role v diplomatických jednáních během druhé světové války.`
      },
      {
        title: 'Jan Bláha',
        content: `Období: 20. století.

Myšlenkový směr: Sociologie, politika.

Hlavní myšlenka: Bláha se soustředil na otázky politické a sociální změny, přičemž se věnoval zejména studiu transformace politických a sociálních struktur ve 20. století. Jeho přístup zahrnoval analýzu modernizačních procesů, které ovlivnily rozvoj demokratických institucí. Bláha rovněž zdůrazňoval roli politických elit a jejich vliv na vývoj státních a politických systémů.

Příklad: Bláhova analýza politických a sociálních změn v Československu během 20. století, přičemž se zaměřoval na procesy modernizace.`
      }
    ]
  },
  'pravo-politologie': {
    'pravo': [
      {
        title: 'Ústavní právo',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci a teoretici.

Hlavní myšlenka: Ústavní právo je soubor právních norem, které upravují základní principy organizace státu, postavení jednotlivců ve společnosti a vztahy mezi státními orgány. Je to nejvyšší právní normativní soustava v právním systému každého státu.

Příklad: Ústava České republiky, která definuje základní strukturu státu, práva a svobody občanů a vztahy mezi státními orgány.`
      },
      {
        title: 'Význam ústavy',
        content: `Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a teoretici.

Hlavní myšlenka: Ústava je základní právní dokument státu, který vymezuje strukturu a kompetence státních orgánů, práva a svobody občanů a principy fungování právního a politického systému. Má nejvyšší právní sílu.

Příklad: Ústava USA, která je nejstarší psanou ústavou na světě a slouží jako model pro mnoho dalších demokratických států.`
      },
      {
        title: 'Princip dělby moci',
        content: `Období: Moderní doba.

Hlavní představitelé: Montesquieu, John Locke.

Hlavní myšlenka: Princip dělby moci je základní zásada ústavního práva, podle které je moc ve státě rozdělena mezi tři nezávislé složky: zákonodárnou, výkonnou a soudní. Tento princip má zajistit kontrolu a vyváženost mezi jednotlivými složkami.

Příklad: V České republice je moc rozdělena mezi Parlament (zákonodárná), Vládu (výkonná) a soudy (soudní moc).`
      },
      {
        title: 'Princip právního státu',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Princip právního státu znamená, že veškerá činnost státu je podřízena právu, což znamená, že stát a jeho orgány mohou jednat pouze v mezích práva. Každý občan je chráněn před svévolným rozhodováním státní moci.

Příklad: Ústavní soud, který kontroluje, zda zákony a rozhodnutí státních orgánů jsou v souladu s ústavou.`
      },
      {
        title: 'Suverenita lidu',
        content: `Období: Moderní doba.

Hlavní představitelé: Jean-Jacques Rousseau, moderní demokratičtí teoretici.

Hlavní myšlenka: Suverenita lidu je základní zásada demokratických států, podle které veškerá politická moc pochází od občanů. Lidé mají právo rozhodovat o svém politickém systému prostřednictvím voleb a dalších demokratických nástrojů.

Příklad: Volební právo, které umožňuje občanům volit své zástupce do parlamentu a dalších orgánů.`
      },
      {
        title: 'Psaná a nepsaná ústava',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci.

Hlavní myšlenka: Psaná ústava je formálně sepsána v jednom nebo několika dokumentech (např. Ústava USA nebo ČR). Nepsaná ústava je soubor tradic, zvyků a precedensů, které nejsou sepsány v jednom dokumentu, ale tvoří ústavní rámec (např. ve Velké Británii).

Příklad: Velká Británie, která nemá psanou ústavu, ale má dlouholeté ústavní tradice a zvyklosti.`
      },
      {
        title: 'Základní práva a svobody',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Základní práva a svobody jsou práva, která mají všichni občané podle ústavy a mezinárodních dohod. Tato práva chrání jednotlivce před nadměrným zásahem státu do jejich života a zahrnují práva na svobodu, rovnost, ochranu soukromí a další.

Příklad: Listina základních práv a svobod v České republice, která garantuje občanům základní práva a svobody.`
      },
      {
        title: 'Princip subsidiarity',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Princip subsidiarity znamená, že úkoly by měly být řešeny na nejnižší možné úrovni vlády. To znamená, že vyšší orgány by měly zasahovat pouze tehdy, když nižší úroveň není schopná efektivně problém vyřešit.

Příklad: V Evropské unii, kde se princip subsidiarity používá k určení, kdy by měla EU zasahovat do záležitostí členských států.`
      },
      {
        title: 'Kontrolní role ústavního soudu',
        content: `Období: Moderní doba.

Hlavní představitelé: Ústavní soudci a právní teoretici.

Hlavní myšlenka: Ústavní soud má za úkol kontrolovat, zda zákony a jiné právní předpisy nejsou v rozporu s ústavou. Tato kontrola je důležitá pro ochranu ústavního pořádku a základních práv občanů.

Příklad: Rozhodnutí Ústavního soudu České republiky, která mohou zrušit zákony, které jsou v rozporu s ústavou.`
      },
      {
        title: 'Základní normy ústavního pořádku',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí ústavní právníci.

Hlavní myšlenka: Základní normy ústavního pořádku jsou právní normy, které upravují fundamentální právní strukturu státu. Tyto normy jsou chráněny vyšší právní sílou a jejich změna je obvykle složitější než u běžných právních předpisů.

Příklad: Ústavní zákony v České republice, které mají vyšší právní sílu než běžné zákony.`
      },
      {
        title: 'Právní norma',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní norma je pravidlo chování, které je vymezeno právním systémem. Normy jsou vynutitelné státem, což znamená, že porušení těchto norem může vést k právním sankcím.

Příklad: Ustanovení občanského zákoníku, která upravují vztahy mezi občany.`
      },
      {
        title: 'Právní subjektivita',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní subjektivita je schopnost být nositelem práv a povinností. Fyzické osoby mají právní subjektivitu od narození, právnické osoby ji získávají zápisem do obchodního rejstříku.

Příklad: Dítě, které má právní subjektivitu od narození, může být nositelem práv a povinností.`
      },
      {
        title: 'Způsobilost k právním úkonům',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Způsobilost k právním úkonům je schopnost jednotlivce právně jednat, tedy uzavírat platné smlouvy a vykonávat jiná právní jednání.

Příklad: Plnoletý člověk má plnou způsobilost k právním úkonům, zatímco nezletilý má omezenou způsobilost.`
      },
      {
        title: 'Práva a povinnosti',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Práva a povinnosti jsou právní vztahy mezi subjekty, které vznikají na základě právních norem. Práva jsou oprávnění jedince vykonávat určité činnosti nebo se domáhat něčeho, zatímco povinnosti vyžadují určité chování nebo zdržení se činnosti.

Příklad: Vlastnické právo dává vlastníkovi právo nakládat s věcí, zatímco povinnost platit daně vyžaduje určité chování.`
      },
      {
        title: 'Občanská smlouva',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Občanská smlouva je právní úkon, kterým si strany vzájemně ujednají práva a povinnosti. Smlouva je závazná pro obě strany a její porušení může vést k právním důsledkům.

Příklad: Kupní smlouva, kde prodávající se zavazuje předat věc a kupující zaplatit cenu.`
      },
      {
        title: 'Absolutní a relativní právo',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Absolutní právo je takové právo, které může být uplatněno vůči každému (např. vlastnické právo). Relativní právo je právo, které se uplatňuje pouze vůči konkrétní osobě nebo osobám (např. nárok na plnění z konkrétní smlouvy).

Příklad: Vlastnické právo je absolutní, protože může být uplatněno vůči komukoliv, zatímco nárok na zaplacení dluhu je relativní, protože se týká pouze konkrétního dlužníka.`
      },
      {
        title: 'Vlastnictví',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Vlastnictví je právní vztah, který dává vlastníkovi právo nakládat s věcí podle svého uvážení, v mezích zákona. Vlastník může věc užívat, měnit, zcizit, nebo zničit.

Příklad: Vlastník domu může s ním nakládat podle svého uvážení, ale musí respektovat stavební předpisy a práva sousedů.`
      },
      {
        title: 'Závazkové právo',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Závazkové právo je část občanského práva, která se zabývá vztahy mezi osobami, které jsou vzájemně vázány závazky. Závazky mohou vznikat ze smluv nebo z jiných právních jednání.

Příklad: Smlouva o dílo, kde se jedna strana zavazuje vykonat určitou práci a druhá strana zaplatit odměnu.`
      },
      {
        title: 'Odpovědnost za škodu',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Odpovědnost za škodu je právní závazek nahradit škodu způsobenou jednáním, které bylo nezákonné, nebo které porušilo smluvní podmínky. Může být založena na zavinění nebo objektivní odpovědnosti.

Příklad: Odpovědnost za škodu způsobenou dopravní nehodou, kde viník musí nahradit škodu poškozenému.`
      },
      {
        title: 'Právní jednání',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Právní jednání je úkon, kterým osoba vyjadřuje svůj právní záměr, aby vyvolala právní následky. Může jít o uzavření smlouvy, podání žaloby nebo zřízení závěti.

Příklad: Podpis smlouvy, který je právním jednáním vedoucím k vzniku právních vztahů mezi stranami.`
      },
      {
        title: 'Trestní právo',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní právo je soubor právních norem, které stanoví, jaké jednání je považováno za trestné, jaké jsou tresty za jeho spáchání a jak se trestní řízení provádí. Jeho cílem je chránit veřejný zájem a zajistit spravedlivý postih pachatelů trestných činů.

Příklad: Trestní zákoník, který definuje trestné činy a jejich tresty.`
      },
      {
        title: 'Přestupek a trestný čin',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Přestupek je méně závažné porušení právních předpisů, které je sankcionováno mírnějším trestem (pokutou, napomenutím), zatímco trestný čin je závažnější protiprávní jednání, které může vést k vyšším trestům, jako je odnětí svobody.

Příklad: Přestupek může být překročení rychlosti, zatímco trestným činem je krádež nebo vražda.`
      },
      {
        title: 'Trestní odpovědnost',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní odpovědnost znamená, že osoba, která spáchá trestný čin, je právně zodpovědná za svůj čin a může být potrestána podle trestního zákona. Osoba musí být v době spáchání trestného činu způsobilá k trestní odpovědnosti.

Příklad: Plnoletý člověk, který spáchá trestný čin, je trestně odpovědný, zatímco dítě mladší 15 let není.`
      },
      {
        title: 'Druhy trestů',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Tresty v trestním právu se dělí na hlavní (např. odnětí svobody, peněžité tresty) a vedlejší (např. ztráta občanských práv, zákaz činnosti). Hlavní tresty jsou vážnější a mají dlouhodobější dopad na život pachatele.

Příklad: Za vraždu může být uložen trest odnětí svobody, zatímco za přestupek může být uložena pokuta.`
      },
      {
        title: 'Trestní řízení',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní řízení je proces, při kterém se zjišťuje, zda byla spáchána trestná činnost a zda je obviněná osoba vinná. Trestní řízení zahrnuje vyšetřování, obžalobu, soudní řízení a případně odvolání.

Příklad: Proces od zadržení podezřelého až po vynesení rozsudku.`
      },
      {
        title: 'Obvinění a vyšetřování',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Obvinění je oficiální obvinění osoby z toho, že spáchala trestný čin. Vyšetřování je fáze trestního řízení, kdy orgány činné v trestním řízení shromažďují důkazy, provádějí výslechy a zjišťují okolnosti trestného činu.

Příklad: Policie provádí vyšetřování a shromažďuje důkazy, které pak předkládá státnímu zástupci k podání obžaloby.`
      },
      {
        title: 'Soudní řízení',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Soudní řízení je fáze trestního řízení, kdy soud rozhoduje o vině nebo nevině obviněné osoby. Soud zkoumá důkazy, vyslechne obžalovaného a svědky a na základě toho vynáší rozsudek.

Příklad: Veřejné soudní líčení, kde soud zkoumá všechny důkazy a vyslechne všechny zúčastněné strany.`
      },
      {
        title: 'Trestní zákoník',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Trestní zákoník je soubor právních předpisů, které definují trestné činy, stanoví tresty a upravují postupy v trestním řízení. V České republice je to zákon č. 40/2009 Sb., který upravuje veškerou trestní problematiku.

Příklad: Definice trestných činů a jejich trestních sazeb v trestním zákoníku.`
      },
      {
        title: 'Podmíněné odsouzení',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Podmíněné odsouzení znamená, že osoba je uznána vinnou, ale soud odkládá výkon trestu na zkušební dobu. Pokud obviněný v této době neudělá žádný další trestný čin, trest nebude vykonán.

Příklad: Soud může uložit podmíněný trest odnětí svobody na zkušební dobu tří let.`
      },
      {
        title: 'Amnestie',
        content: `Období: Moderní doba.

Hlavní představitelé: Různí právní teoretici.

Hlavní myšlenka: Amnestie je rozhodnutí vlády nebo prezidenta, které znamená zproštění trestu pro určitou skupinu osob, které byly odsouzeny za trestné činy. Amnestie může být udělena za zvláštních okolností a obvykle se vztahuje na menší trestné činy.

Příklad: Prezidentská amnestie u příležitosti významného výročí státu.`
      }
    ],
    'politologie': [
      {
        title: 'Ústava ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a teoretici.

Hlavní myšlenka: Ústava ČR je základní zákon státu, který určuje strukturu a fungování státní moci. Stanovuje rozdělení moci na zákonodárnou, výkonnou a soudní a definuje práva a svobody občanů.

Příklad: Ústava ČR definuje základní strukturu státu, včetně pravomocí jednotlivých orgánů a základních práv občanů.`
      },
      {
        title: 'Zákon',
        content: `Období: Moderní doba.

Hlavní představitelé: Zákonodárci a právní teoretici.

Hlavní myšlenka: Zákon je právní norma schválená Parlamentem ČR, která má obecnou závaznost a upravuje důležité oblasti života ve státě.

Příklad: Občanský zákoník, který upravuje vztahy mezi občany a jejich práva a povinnosti.`
      },
      {
        title: 'Vyhláška',
        content: `Období: Moderní doba.

Hlavní představitelé: Ministerstva a obce.

Hlavní myšlenka: Vyhláška je podzákonný předpis vydávaný ministerstvy nebo obcemi, který detailněji upravuje zákony a jejich praktickou aplikaci.

Příklad: Vyhláška ministerstva školství o organizaci školního roku.`
      },
      {
        title: 'Volební systém pro Poslaneckou sněmovnu ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a volební komise.

Hlavní myšlenka: Volby do Poslanecké sněmovny ČR probíhají podle poměrného volebního systému, kde voliči hlasují pro politické strany. Mandáty jsou rozdělovány podle volebních výsledků stran, které překročily 5% hranici.

Příklad: Volební systém umožňuje menším stranám získat zastoupení v parlamentu, pokud překročí 5% hranici.`
      },
      {
        title: 'Volební systém pro Senát ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Ústavní právníci a volební komise.

Hlavní myšlenka: Volby do Senátu ČR probíhají podle většinového systému. Každý volič hlasuje pro konkrétního kandidáta ve svém obvodě, a pokud žádný nezíská nadpoloviční většinu, koná se druhé kolo.

Příklad: Volební obvody pro senátory jsou menší a umožňují osobnější kontakt voličů s kandidáty.`
      },
      {
        title: 'Prezident ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Prezidenti ČR.

Hlavní myšlenka: Prezident ČR je hlavou státu, volený přímo občany na pětileté období. Má spíše reprezentativní roli, ale také jmenuje vládu, soudce a další klíčové činitele.

Příklad: Prezident reprezentuje stát navenek a má pravomoc jmenovat předsedu vlády.`
      },
      {
        title: 'Poslanecká sněmovna ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Poslanci a předsedové sněmovny.

Hlavní myšlenka: Poslanecká sněmovna je dolní komora Parlamentu ČR, která schvaluje zákony, rozpočet a kontroluje vládu. Má 200 poslanců volených na čtyři roky.

Příklad: Poslanecká sněmovna je hlavním zákonodárným orgánem a může vyslovit nedůvěru vládě.`
      },
      {
        title: 'Senát ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Senátoři a předsedové senátu.

Hlavní myšlenka: Senát je horní komora Parlamentu ČR, která má 81 senátorů volených na šest let. Funguje jako kontrolní orgán při přijímání zákonů.

Příklad: Senát může vrátit zákony Poslanecké sněmovně s pozměňovacími návrhy.`
      },
      {
        title: 'Vláda ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Členové vlády a premiér.

Hlavní myšlenka: Vláda ČR je výkonným orgánem státu, který řídí činnost ministerstev a odpovídá Poslanecké sněmovně. Jejím předsedou je premiér.

Příklad: Vláda navrhuje zákony a řídí státní správu.`
      },
      {
        title: 'Soudní moc v ČR',
        content: `Období: Moderní doba.

Hlavní představitelé: Soudci a ústavní soudci.

Hlavní myšlenka: Soudní moc v ČR je nezávislá a zahrnuje obecné soudy, nejvyšší soudy a Ústavní soud, který dohlíží na dodržování ústavy.

Příklad: Ústavní soud může zrušit zákony, které jsou v rozporu s ústavou.`
      },
      {
        title: 'Poloprezidentská demokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Poloprezidentská demokracie je systém, ve kterém se o moc dělí přímo volený prezident a vláda, která je odpovědná parlamentu. Prezident má významné pravomoci, jako je jmenování premiéra, zatímco vláda spravuje každodenní chod státu.

Příklad: Francie, kde prezident jmenuje premiéra a má pravomoc rozpustit parlament.`
      },
      {
        title: 'Prezidentská demokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Prezidentská demokracie je systém, ve kterém je prezident hlavou státu i vlády. Je přímo volen občany a nemůže být odvolán parlamentem. Prezident má výkonnou moc a parlament zákonodárnou.

Příklad: Spojené státy americké, kde prezident je hlavou výkonné moci a nemůže být odvolán Kongresem.`
      },
      {
        title: 'Parlamentní demokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Parlamentní demokracie je systém, kde vláda vzniká a odpovídá parlamentu. Hlavou státu je prezident nebo monarcha, ale výkonnou moc vykonává premiér a vláda.

Příklad: Česká republika, kde vláda je odpovědná Poslanecké sněmovně.`
      },
      {
        title: 'Ústavní monarchie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Ústavní monarchie je forma vlády, kde monarcha funguje jako reprezentativní hlava státu a jeho pravomoci jsou omezeny ústavou. Skutečnou moc mají volení zástupci.

Příklad: Spojené království, kde královna je hlavou státu, ale skutečnou moc má parlament a vláda.`
      },
      {
        title: 'Absolutní monarchie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a ústavní teoretici.

Hlavní myšlenka: Absolutní monarchie je systém, ve kterém má monarcha neomezenou moc a vládne bez ústavních omezení. Jeho rozhodnutí jsou konečná.

Příklad: Saúdská Arábie, kde král má absolutní moc nad státem.`
      },
      {
        title: 'Theokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a náboženští teoretici.

Hlavní myšlenka: Theokracie je forma vlády, ve které je moc v rukou náboženských vůdců nebo institucí, které interpretují božské zákony jako základ vládnutí.

Příklad: Írán, kde nejvyšší náboženský vůdce má významnou politickou moc.`
      },
      {
        title: 'Autokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Autokracie je systém, kde veškerou moc drží jedna osoba nebo úzká skupina lidí. Neexistuje účinná kontrola moci občany nebo institucemi.

Příklad: Severní Korea, kde jediná strana a její vůdce mají absolutní kontrolu nad státem.`
      },
      {
        title: 'Diktatura',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Diktatura je systém vlády, ve kterém je moc soustředěna v rukou jedné osoby nebo úzké skupiny, často se opírá o vojenskou sílu a potlačuje opozici.

Příklad: Bělorusko, kde prezident má neomezenou moc a potlačuje opozici.`
      },
      {
        title: 'Oligarchie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a teoretici moci.

Hlavní myšlenka: Oligarchie je vláda malé skupiny lidí, kteří kontrolují stát na základě svého bohatství, postavení nebo vojenské síly. Občané nemají vliv na rozhodování.

Příklad: Rusko, kde malá skupina bohatých lidí má významný vliv na politiku.`
      },
      {
        title: 'Aristokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a historici.

Hlavní myšlenka: Aristokracie je systém vlády, kde moc drží privilegovaná vrstva, obvykle šlechta, na základě svého postavení, dědičnosti nebo majetku.

Příklad: Spojené království v minulosti, kde šlechta měla významný vliv na vládu.`
      },
      {
        title: 'Demokracie',
        content: `Období: Moderní doba.

Hlavní představitelé: Politologové a demokratičtí teoretici.

Hlavní myšlenka: Demokracie je systém vlády, kde moc vychází z lidu a občané mají možnost se podílet na rozhodování. Je založena na svobodných volbách, právním státě a ochraně lidských práv.

Příklad: Česká republika, kde občané volí své zástupce a mají ústavou garantovaná práva.`
      },
      {
        title: 'Liberalismus',
        content: `Období: Moderní doba.

Hlavní představitelé: John Locke, Adam Smith, John Stuart Mill.

Hlavní myšlenka: Liberalismus je politická ideologie, která klade důraz na svobodu jednotlivce, tržní hospodářství a omezenou roli státu. Věří v přirozená práva člověka a svobodné podnikání.

Příklad: Spojené státy americké, kde je silná tradice individuální svobody a tržního hospodářství.`
      },
      {
        title: 'Konzervatismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Edmund Burke, Roger Scruton.

Hlavní myšlenka: Konzervatismus je ideologie, která klade důraz na tradici, stabilitu a postupnou změnu. Váží si zavedených institucí a opatrně přistupuje k reformám.

Příklad: Konzervativní strany v Evropě, které hájí tradiční hodnoty a opatrné reformy.`
      },
      {
        title: 'Socialismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Karl Marx, Friedrich Engels.

Hlavní myšlenka: Socialismus je ideologie, která klade důraz na sociální spravedlnost, rovnost a kolektivní vlastnictví. Věří v aktivní roli státu při zajišťování blahobytu občanů.

Příklad: Skandinávské země, kde je silný sociální stát a vysoká míra přerozdělování.`
      },
      {
        title: 'Komunismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Karl Marx, Vladimir Lenin.

Hlavní myšlenka: Komunismus je radikální forma socialismu, která usiluje o beztřídní společnost a společenské vlastnictví výrobních prostředků. V praxi často vede k totalitnímu režimu.

Příklad: Sovětský svaz, kde byla zavedena centrálně plánovaná ekonomika a diktatura proletariátu.`
      },
      {
        title: 'Fascismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Benito Mussolini, Adolf Hitler.

Hlavní myšlenka: Fascismus je autoritářská ideologie, která klade důraz na národ, rasu a silného vůdce. Odmítá demokracii a lidská práva, propaguje násilí a expanzi.

Příklad: Itálie za Mussoliniho a Německo za Hitlera.`
      },
      {
        title: 'Nacionalismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Ernest Renan, Johann Gottlieb Fichte.

Hlavní myšlenka: Nacionalismus je ideologie, která klade důraz na národ a jeho zájmy. Může mít demokratickou formu (kulturní nacionalismus) nebo autoritářskou formu (etnický nacionalismus).

Příklad: Maďarsko, kde je silná tradice kulturního nacionalismu.`
      },
      {
        title: 'Anarchismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Pierre-Joseph Proudhon, Michail Bakunin.

Hlavní myšlenka: Anarchismus je ideologie, která odmítá státní moc a usiluje o společnost bez hierarchie a autority. Věří v dobrovolnou spolupráci a samosprávu.

Příklad: Anarchistické komuny a hnutí v 19. a 20. století.`
      },
      {
        title: 'Environmentalismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Rachel Carson, Al Gore.

Hlavní myšlenka: Environmentalismus je ideologie, která klade důraz na ochranu životního prostředí a udržitelný rozvoj. Usiluje o změnu společenského a ekonomického systému ve prospěch přírody.

Příklad: Zelené strany v Evropě, které prosazují ekologickou politiku.`
      },
      {
        title: 'Feminismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Mary Wollstonecraft, Simone de Beauvoir.

Hlavní myšlenka: Feminismus je ideologie, která usiluje o rovnost pohlaví a odstranění patriarchálních struktur ve společnosti. Prosazuje práva žen a jejich plnou participaci ve společnosti.

Příklad: Feministická hnutí v 20. století, která dosáhla volebního práva pro ženy a další práva.`
      }
    ]
  },
  'historie-ekonomie': {
    'ekonomie': [
      {
        title: 'Základy ekonomie',
        content: `Období: Od starověku po současnost.

Hlavní představitelé: Adam Smith, John Maynard Keynes, Milton Friedman.

Hlavní myšlenka: Ekonomie je věda o tom, jak společnost využívá omezené zdroje k uspokojení neomezených potřeb. Zabývá se výrobou, distribucí a spotřebou statků a služeb.

Příklad: Smithova teorie "neviditelné ruky trhu", která ukazuje, jak individuální zájmy mohou vést k celkovému prospěchu společnosti.`
      },
      {
        title: 'Ekonomické systémy',
        content: `Období: Moderní doba.

Hlavní představitelé: Karl Marx, Friedrich Hayek.

Hlavní myšlenka: Ekonomické systémy se liší podle toho, jak je organizována výroba a distribuce statků. Základní dělení je na tržní a plánované hospodářství.

Příklad: Porovnání kapitalistického a socialistického systému, kde se liší role státu a soukromého vlastnictví.`
      },
      {
        title: 'Hrubý domácí produkt (HDP)',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a statistici.

Hlavní myšlenka: HDP je celková peněžní hodnota všech finálních výrobků a služeb vyprodukovaných v určité zemi během určitého období. Je to jeden z hlavních ukazatelů ekonomické výkonnosti a zdraví ekonomiky. HDP se měří buď výrobní, výdajovou, nebo příjmovou metodou.

Příklad: HDP České republiky v roce 2023, který měří celkovou ekonomickou produkci země.`
      },
      {
        title: 'Inflace',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Inflace je proces, při kterém se zvyšují ceny zboží a služeb v ekonomice, což vede ke snížení kupní síly peněz. Vysoká inflace může destabilizovat ekonomiku, zatímco nízká a stabilní inflace je považována za znak zdravé ekonomiky.

Příklad: Růst cen potravin a energií v důsledku inflace, který snižuje kupní sílu spotřebitelů.`
      },
      {
        title: 'Deflace',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Deflace je opakem inflace, tedy pokles cen zboží a služeb v ekonomice. Může signalizovat ekonomický pokles a vést k recesi, protože spotřebitelé a firmy odkládají výdaje v očekávání, že ceny budou klesat i nadále.

Příklad: Japonsko v 90. letech 20. století, kde dlouhodobá deflace vedla k ekonomické stagnaci.`
      },
      {
        title: 'Nerovnováha v hospodářství',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Nerovnováha v hospodářství nastává, když mezi nabídkou a poptávkou vznikne disproporce, což může vést k ekonomickým problémům jako jsou nezaměstnanost, vysoká inflace nebo recese. Cílem makroekonomické politiky je tuto nerovnováhu odstranit.

Příklad: Ekonomická krize v roce 2008, kdy nerovnováha na finančních trzích vedla k globální recesi.`
      },
      {
        title: 'Poptávková inflace',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Poptávková inflace nastává, když celkový poptávkový tlak v ekonomice (tedy poptávka po zboží a službách) převyšuje nabídku. To může vést k růstu cen a inflaci, která je podporována nadměrným výdajovým tlakem.

Příklad: Růst cen nemovitostí v důsledku vysoké poptávky po bydlení.`
      },
      {
        title: 'Nabídková inflace',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Nabídková inflace vzniká, když náklady na výrobu (například ceny surovin nebo práce) vzrostou, což vede ke zvýšení cen zboží a služeb. Tento typ inflace je často spojen s rostoucími cenami surovin nebo energií.

Příklad: Růst cen ropy v 70. letech 20. století, který vedl k celosvětové stagflaci.`
      },
      {
        title: 'Cyklická nezaměstnanost',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Cyklická nezaměstnanost je forma nezaměstnanosti, která se vyskytuje v důsledku ekonomických cyklů. Během recese nebo poklesu ekonomické aktivity roste nezaměstnanost, protože poptávka po zboží a službách klesá a firmy omezují výrobu.

Příklad: Vysoká nezaměstnanost během ekonomické krize v roce 2008.`
      },
      {
        title: 'Strukturální nezaměstnanost',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Strukturální nezaměstnanost vzniká, když jsou pracovní síly v určitém sektoru neadekvátní potřebám trhu práce, což může být důsledkem technologických změn, změn ve struktuře ekonomiky nebo geografických faktorů.

Příklad: Nezaměstnanost v důsledku automatizace výroby, kdy pracovníci nemají potřebné dovednosti pro nové technologie.`
      },
      {
        title: 'Frikční nezaměstnanost',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Frikční nezaměstnanost se vyskytuje, když lidé mezi zaměstnáními mění práci, nebo když se čerství absolventi škol poprvé hledají práci. Je to přirozený typ nezaměstnanosti, který je součástí každé ekonomiky.

Příklad: Absolventi vysokých škol, kteří hledají své první zaměstnání.`
      },
      {
        title: 'Makroekonomická rovnováha',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Makroekonomická rovnováha je stav, kdy v ekonomice dochází k vyrovnání mezi celkovou nabídkou (výrobou) a celkovou poptávkou. V tomto stavu neexistují žádné silné inflační nebo deflační tlaky a ekonomika roste stabilním tempem.

Příklad: Stabilní růst HDP s nízkou inflací a přirozenou mírou nezaměstnanosti.`
      },
      {
        title: 'Monetární politika',
        content: `Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Monetární politika je soubor opatření, která centrální banka používá k řízení nabídky peněz, úrokových sazeb a kreditní politiky s cílem ovlivnit ekonomiku. Cílem je obvykle dosažení stabilní inflace a podpora ekonomického růstu.

Příklad: Změny úrokových sazeb Českou národní bankou pro kontrolu inflace.`
      },
      {
        title: 'Fiskální politika',
        content: `Období: Moderní doba.

Hlavní představitelé: Vlády a ekonomové.

Hlavní myšlenka: Fiskální politika se týká rozhodnutí vlády o výdajích a daních, která mají vliv na ekonomickou aktivitu. Fiskální politika může být expanzivní (zvýšení výdajů nebo snížení daní) nebo restriktivní (snížení výdajů nebo zvýšení daní), aby se podpořil růst nebo snížil deficit.

Příklad: Vládní stimulační balíčky v době ekonomické krize.`
      },
      {
        title: 'Kapitálová forma výroby',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a podnikatelé.

Hlavní myšlenka: Kapitálová forma výroby označuje využívání strojů, zařízení a technologických inovací při produkci. Tento faktor přispívá k produktivitě práce a růstu ekonomiky.

Příklad: Automatizované výrobní linky v moderních továrnách.`
      },
      {
        title: 'Přirozená míra nezaměstnanosti',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Přirozená míra nezaměstnanosti je míra nezaměstnanosti, která je považována za optimální v ekonomice, která je stabilní a v rovnováze. Zahrnuje frikční a strukturální nezaměstnanost, ale ne cyklickou nezaměstnanost způsobenou recesí.

Příklad: Přirozená míra nezaměstnanosti v rozvinutých ekonomikách se pohybuje kolem 4-6%.`
      },
      {
        title: 'Hrubý národní produkt (HNP)',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a statistici.

Hlavní myšlenka: HNP je měřítko celkové ekonomické produkce, které zahrnuje všechny příjmy získané obyvateli dané země, včetně těch, které byly získány v zahraničí. HNP je užitečné pro analýzu ekonomického blahobytu v širším měřítku.

Příklad: HNP zahrnuje příjmy českých občanů pracujících v zahraničí.`
      },
      {
        title: 'Otevřená ekonomika',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Otevřená ekonomika je ekonomika, která umožňuje volný obchod se zahraničím, včetně importu a exportu zboží, služeb a kapitálu. Otevřenost ekonomiky má vliv na její růst a integraci do světového hospodářství.

Příklad: Česká republika jako součást Evropské unie a světového obchodu.`
      },
      {
        title: 'Uzavřená ekonomika',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Uzavřená ekonomika je ekonomika, která neprovádí mezinárodní obchod a omezuje export i import. Tento model je dnes velmi vzácný, protože většina zemí je integrována do globálního hospodářství.

Příklad: Severní Korea jako příklad relativně uzavřené ekonomiky.`
      },
      {
        title: 'Úroková sazba',
        content: `Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Úroková sazba je cena, kterou platí dlužníci za půjčení peněz, nebo výnos, který získávají věřitelé. Úrokové sazby mají velký vliv na ekonomickou aktivitu, protože ovlivňují spotřebitelskou poptávku a podnikové investice.

Příklad: Změny úrokových sazeb hypoték vlivem rozhodnutí centrální banky.`
      },
      {
        title: 'Poptávka po penězích',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Poptávka po penězích označuje množství peněz, které si jednotlivci a firmy přejí držet v hotovosti, místo toho, aby je investovali nebo použili k nákupu zboží a služeb. Poptávka po penězích závisí na úrokových sazbách, inflaci a očekávání ekonomického vývoje.

Příklad: Zvýšení poptávky po hotovosti v době ekonomické nejistoty.`
      },
      {
        title: 'Nabídka peněz',
        content: `Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a ekonomové.

Hlavní myšlenka: Nabídka peněz je množství peněz v oběhu v ekonomice, které je k dispozici pro obchody a transakce. Tento ukazatel je kontrolován centrální bankou prostřednictvím nástrojů monetární politiky, jako jsou úrokové sazby a kvantitativní uvolňování.

Příklad: Kvantitativní uvolňování v době ekonomické krize, kdy centrální banka nakupuje státní dluhopisy.`
      },
      {
        title: 'Mezinárodní obchod',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Mezinárodní obchod zahrnuje výměnu zboží a služeb mezi zeměmi. Tento obchod přináší výhody díky specializaci a komparativním výhodám, což vede k efektivnějšímu využití zdrojů a růstu světového blahobytu.

Příklad: Export českých automobilů do zahraničí a import surovin.`
      },
      {
        title: 'Devizový kurz',
        content: `Období: Moderní doba.

Hlavní představitelé: Centrální bankéři a forex obchodníci.

Hlavní myšlenka: Devizový kurz je cena jedné měny vyjádřená v jiné měně. Kurzy měn jsou důležité pro mezinárodní obchod a investice, protože ovlivňují konkurenceschopnost exportérů a náklady importérů.

Příklad: Fluktuace kurzu koruny vůči euru a jeho vliv na český export.`
      },
      {
        title: 'Platební bilance',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Platební bilance je přehled všech ekonomických transakcí mezi rezidenty dané země a zbytkem světa za určité období. Zahrnuje obchodní bilanci, bilanci služeb, bilanci výnosů a kapitálové toky.

Příklad: Přebytek obchodní bilance České republiky díky silnému exportu.`
      },
      {
        title: 'Ekonomický růst',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a politici.

Hlavní myšlenka: Ekonomický růst je dlouhodobé zvyšování produkce zboží a služeb v ekonomice. Růst je měřen změnami reálného HDP a je klíčovým ukazatelem ekonomického rozvoje a zvyšování životní úrovně.

Příklad: Růst české ekonomiky po vstupu do Evropské unie.`
      },
      {
        title: 'Ekonomický rozvoj',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Ekonomický rozvoj zahrnuje nejen růst HDP, ale také zlepšování kvality života, vzdělání, zdravotní péče a infrastruktury. Rozvoj je komplexní proces, který zahrnuje sociální, kulturní a environmentální aspekty.

Příklad: Transformace České republiky z centrálně plánované na tržní ekonomiku.`
      },
      {
        title: 'Hospodářský cyklus',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a centrální bankéři.

Hlavní myšlenka: Hospodářský cyklus je opakující se kolísání ekonomické aktivity mezi obdobími růstu (expanze) a poklesu (recese). Cyklus zahrnuje čtyři fáze: expanzi, vrchol, recesi a dno, po kterém následuje nová expanze.

Příklad: Globální finanční krize 2008-2009 a následné oživení.`
      },
      {
        title: 'Ekonomická integrace',
        content: `Období: Moderní doba.

Hlavní představitelé: Politici a mezinárodní organizace.

Hlavní myšlenka: Ekonomická integrace je proces, při kterém se země spojují do větších ekonomických celků, aby zvýšily efektivitu obchodu a produkce. Integrace může mít různé formy, od zón volného obchodu až po měnové unie.

Příklad: Evropská unie jako příklad hluboké ekonomické integrace.`
      },
      {
        title: 'Globalizace',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Globalizace je proces rostoucí propojenosti světových ekonomik, kultur a společností. Zahrnuje mezinárodní obchod, investice, migraci a šíření technologií, což vede k vytváření globálního trhu a společnosti.

Příklad: Globální dodavatelské řetězce v automobilovém průmyslu.`
      },
      {
        title: 'Protekcionismus',
        content: `Období: Moderní doba.

Hlavní představitelé: Politici a ekonomové.

Hlavní myšlenka: Protekcionismus je hospodářská politika, která omezuje mezinárodní obchod pomocí cel, kvót a dalších bariér. Cílem je chránit domácí průmysl a zaměstnanost, ale může vést k vyšším cenám a nižší efektivitě.

Příklad: Obchodní války mezi USA a Čínou.`
      },
      {
        title: 'Volný obchod',
        content: `Období: Moderní doba.

Hlavní představitelé: Ekonomové a mezinárodní organizace.

Hlavní myšlenka: Volný obchod je hospodářská politika, která odstraňuje bariéry v mezinárodním obchodu. Teorie komparativních výhod ukazuje, že volný obchod vede k efektivnějšímu využití zdrojů a růstu blahobytu všech zúčastněných zemí.

Příklad: Evropský jednotný trh jako příklad volného obchodu.`
      }
    ],
    'moderni-historie': [
      {
        title: 'Moderní dějiny',
        content: `Období: Od 18. století po současnost.

Hlavní události: Průmyslová revoluce, světové války, studená válka.

Hlavní myšlenka: Moderní dějiny jsou charakterizovány rychlým technologickým pokrokem, globalizací a významnými společenskými změnami.

Příklad: Průmyslová revoluce v 18. a 19. století, která změnila způsob výroby a život společnosti.`
      },
      {
        title: 'Světové války',
        content: `Období: 20. století.

Hlavní události: První světová válka (1914-1918), Druhá světová válka (1939-1945).

Hlavní myšlenka: Světové války měly zásadní vliv na vývoj moderního světa, vedly k vytvoření nového světového řádu a urychlily technologický pokrok.

Příklad: Vznik Spojených národů po druhé světové válce jako pokus o zajištění světového míru.`
      },
      {
        title: 'Hitlerův první pokus o moc',
        content: `Období: 1923

Vysvětlení: Pivní puč - neúspěšný pokus o převrat, za který byl Hitler odsouzen a poslán do vězení.`
      },
      {
        title: 'Smrt Vladimira Iljiče Lenina',
        content: `Období: 21. ledna 1924

Vysvětlení: Lenin zemřel 21. ledna 1924, což vedlo k boji o moc v Sovětském svazu.`
      },
      {
        title: 'Nástup Hitlera k moci',
        content: `Období: 30. ledna 1933

Vysvětlení: Adolf Hitler byl jmenován německým říšským kancléřem prezidentem Paulem von Hindenburgem.`
      },
      {
        title: 'Požár Říšského sněmu',
        content: `Období: 27. února 1933

Vysvětlení: Hitler využil této události k prosazení zákonů omezujících občanské svobody a k potlačení politické opozice, zejména komunistů.`
      },
      {
        title: 'Zmocňovací zákon',
        content: `Období: 23. března 1933

Vysvětlení: Tento zákon umožnil Hitlerově vládě obcházet parlament a vydávat zákony samostatně, což de facto znamenalo konec demokratického systému Výmarské republiky.`
      },
      {
        title: 'Hitler neomezeným vůdcem',
        content: `Období: 2. srpna 1934

Vysvětlení: Po smrti prezidenta Hindenburga Hitler spojil funkce prezidenta a kancléře a stal se neomezeným vůdcem Německa.`
      },
      {
        title: 'Mnichovská dohoda',
        content: `Období: 30. září 1938

Vysvětlení: Mezinárodní smlouva podepsaná mezi Německem, Itálií, Francií a Velkou Británií. Dohoda umožnila nacistickému Německu anektovat pohraniční oblasti Československa (Sudety) bez souhlasu československé vlády.`
      },
      {
        title: 'Signatáři Mnichovské dohody',
        content: `Vysvětlení: Mnichovskou dohodu podepsali:
1. Adolf Hitler (Německo)
2. Benito Mussolini (Itálie)
3. Neville Chamberlain (Velká Británie)
4. Édouard Daladier (Francie)`
      },
      {
        title: 'Pochod na Řím',
        content: `Období: 27. - 29. října 1922

Vysvětlení: Klíčová událost, během níž fašisté vedení Benitem Mussolinim přinutili italského krále Viktora Emanuela III., aby Mussoliniho jmenoval předsedou vlády.`
      },
      {
        title: 'Stalinův nástup k moci',
        content: `Období: 1922-1953

Vysvětlení: Stalin se stal generálním tajemníkem KSSS v roce 1922, plnou kontrolu získal v roce 1929 a udržel si ji až do své smrti v roce 1953.`
      },
      {
        title: 'Bitva u Jutska',
        content: `Období: 31. května - 1. června 1916

Vysvětlení: Největší námořní bitva války mezi britským a německým námořnictvem.`
      },
      {
        title: 'Bitva u Verdunu',
        content: `Období: 21. února - 18. prosince 1916

Vysvětlení: Nejdelší bitva války, kde Německo usilovalo o vyčerpání francouzských sil (tzv. strategie "vykrvácení"). Francie nakonec Verdun uhájila.`
      },
      {
        title: 'Korejská válka',
        content: `Období: 1950-1953

Vysvětlení: Vojenský konflikt mezi Severní Koreou, podporovanou Sovětským svazem a Čínou, a Jižní Koreou, podporovanou Spojenými státy a dalšími členy OSN.`
      },
      {
        title: 'Sovětská invaze do Afghánistánu',
        content: `Období: 1979-1989

Vysvětlení: Sovětská invaze do Afghánistánu byla vojenská operace, kdy SSSR poslal své vojenské jednotky na podporu komunistického režimu v Afghánistánu.`
      },
      {
        title: 'Válka ve Vietnamu',
        content: `Období: 1955-1975

Vysvětlení: Ozbrojený konflikt mezi komunistickým Severním Vietnamem a nekomunistickým Jižním Vietnamem, podporovaným Spojenými státy a jejich spojenci.`
      },
      {
        title: 'Pád Berlínské zdi',
        content: `Období: 1989

Vysvětlení: Symbolizoval konec studené války a rozpad východního bloku. Zed byla fyzickou a ideologickou bariérou mezi komunistickým východním Berlínem a kapitalistickým západním Berlínem.`
      },
      {
        title: 'Válka v Perském zálivu',
        content: `Období: 1990-1991

Vysvětlení: Konflikt začal, když Irák pod vedením Saddáma Husajna napadl Kuvajt. Koalice vedená Spojenými státy zahájila vojenskou intervenci, která vedla k porážce Iráku a osvobození Kuvajtu.`
      },
      {
        title: 'Kubánská raketová krize',
        content: `Období: 1962

Vysvětlení: Kuba přijala sovětské rakety na své území, což vedlo k dramatickému napětí mezi Spojenými státy a Sovětským svazem.`
      },
      {
        title: 'Sovětská revoluce',
        content: `Období: 1917

Vysvětlení: Revoluce v Rusku, která vyústila v pád carismu a vznik komunistické vlády. Sovětská revoluce znamenala konec ruské monarchie a začátek vlády bolševiků vedených Vladimirem Leninem.`
      },
      {
        title: 'Vietnamizace',
        content: `Období: 1969-1973

Vysvětlení: Politický proces, během kterého USA začaly předávat odpovědnost za válku ve Vietnamu na jiho-vietnamskou armádu, s cílem postupně stáhnout americké síly z tohoto konfliktu.`
      },
      {
        title: 'Korean Armistice Agreement',
        content: `Období: 1953

Vysvětlení: Dohoda o příměří, která ukončila aktivní boje v Korejské válce. Nezaručila však oficiální mír, takže Korejský poloostrov zůstal rozdělený na dva státy.`
      },
      {
        title: 'Politické strany v Československu po 2. světové válce',
        content: `Vysvětlení: Po druhé světové válce v Československu dominovaly čtyři hlavní politické strany:
1. KSČ (Komunistická strana Československa)
2. ČSNS (Československá strana národně socialistická)
3. ČSL (Československá strana lidová)
4. ČSSD (Československá sociálně demokratická strana)`
      },
      {
        title: 'Únor 1948 v Československu',
        content: `Období: 25. února 1948

Vysvětlení: Komunistický převrat v Československu, který vedl k nastolení totalitního režimu. KSČ převzala moc a začala období komunistické diktatury.`
      },
      {
        title: 'Pražské jaro',
        content: `Období: 1968

Vysvětlení: Období politického uvolnění v Československu, které bylo ukončeno invazí vojsk Varšavské smlouvy v srpnu 1968.`
      },
      {
        title: 'Sametová revoluce',
        content: `Období: 17. listopadu - 29. prosince 1989

Vysvětlení: Neozbrojená revoluce, která vedla k pádu komunistického režimu v Československu.`
      },
      {
        title: 'Rozdělení Československa',
        content: `Období: 1. ledna 1993

Vysvětlení: Československo se rozdělilo na dva samostatné státy: Českou republiku a Slovensko.`
      },
      {
        title: 'Vstup České republiky do EU',
        content: `Období: 1. května 2004

Vysvětlení: Česká republika se stala členským státem Evropské unie spolu s dalšími devíti zeměmi.`
      },
      {
        title: 'Vstup České republiky do NATO',
        content: `Období: 12. března 1999

Vysvětlení: Česká republika se stala členským státem Severoatlantické aliance.`
      },
      {
        title: 'Vznik České republiky',
        content: `Období: 1. ledna 1993

Vysvětlení: Po rozdělení Československa vznikla samostatná Česká republika jako nástupnický stát.`
      },
      {
        title: 'Vznik Slovenské republiky',
        content: `Období: 1. ledna 1993

Vysvětlení: Po rozdělení Československa vznikla samostatná Slovenská republika jako nástupnický stát.`
      },
      {
        title: 'Vznik Československa',
        content: `Období: 28. října 1918

Vysvětlení: Vznik samostatného československého státu po rozpadu Rakousko-Uherska.`
      },
      {
        title: 'Vznik Rakouska-Uherska',
        content: `Období: 1867

Vysvětlení: Rakousko-Uhersko vzniklo jako dualistická monarchie po rakousko-uherském vyrovnání.`
      },
      {
        title: 'Vznik Rakouského císařství',
        content: `Období: 1804

Vysvětlení: František II. Habsburský vyhlásil Rakouské císařství jako reakci na Napoleonovu korunovaci.`
      },
      {
        title: 'Vznik Svaté říše římské',
        content: `Období: 962

Vysvětlení: Ota I. Veliký byl korunován císařem Svaté říše římské.`
      },
      {
        title: 'Vznik Svaté říše římské národa německého',
        content: `Období: 1512

Vysvětlení: Oficiální název Svaté říše římské byl změněn na Svatou říši římskou národa německého.`
      },
      {
        title: 'Vznik Svaté aliance',
        content: `Období: 1815

Vysvětlení: Vznik protinapoleonské koalice mezi Rakouskem, Pruskem a Ruskem.`
      },
      {
        title: 'Vznik Společnosti národů',
        content: `Období: 1920

Vysvětlení: Vznik mezinárodní organizace, která měla zajistit mír a spolupráci mezi státy.`
      },
      {
        title: 'Vznik OSN',
        content: `Období: 1945

Vysvětlení: Vznik Organizace spojených národů jako nástupkyně Společnosti národů.`
      },
      {
        title: 'Vznik NATO',
        content: `Období: 1949

Vysvětlení: Vznik Severoatlantické aliance jako vojensko-politické organizace západních států.`
      },
      {
        title: 'Vznik Varšavské smlouvy',
        content: `Období: 1955

Vysvětlení: Vznik vojensko-politické organizace východního bloku jako protiváha NATO.`
      },
      {
        title: 'Vznik Evropského hospodářského společenství',
        content: `Období: 1957

Vysvětlení: Vznik předchůdce Evropské unie, který měl zajistit hospodářskou spolupráci mezi evropskými státy.`
      }
    ],
    'evropska-integrace': [
      {
        title: 'Historie Evropské unie',
        content: `Období: Po druhé světové válce

Vysvětlení: Evropská unie (EU) vznikla z touhy po míru, stabilitě a hospodářské spolupráci v Evropě po druhé světové válce. Prvním krokem bylo vytvoření Evropského společenství uhlí a oceli (ESUO) v roce 1951, které zahrnovalo šest zakládajících států: Belgii, Francii, Itálii, Lucembursko, Nizozemsko a Německo.`
      },
      {
        title: 'Římská smlouva',
        content: `Období: 1957

Vysvětlení: Římská smlouva byla podepsána v roce 1957 a vytvořila Evropské hospodářské společenství (EHS) a Evropské atomové společenství (EURATOM). Tato smlouva položila základy pro společný trh a postupnou integraci evropských ekonomik.`
      },
      {
        title: 'První rozšíření Evropské unie',
        content: `Období: 1973

Vysvětlení: V roce 1973 přistoupily k EHS tři nové státy: Dánsko, Irsko a Spojené království. Toto rozšíření bylo důležité pro rozšíření Evropské spolupráce a upevnění politické a hospodářské stability.`
      },
      {
        title: 'Jednotný evropský akt',
        content: `Období: 1986

Vysvětlení: Jednotný evropský akt (JEA) z roku 1986 byl první revizí Římské smlouvy a měl za cíl vytvořit jednotný vnitřní trh. Zahrnoval také politické cíle, jako je posílení spolupráce v oblasti zahraniční politiky.`
      },
      {
        title: 'Pád Berlínské zdi a nový směr pro EU',
        content: `Období: 1989-1990

Vysvětlení: Pád Berlínské zdi v roce 1989 a konec studené války otevřely nové možnosti pro expanze EU na východ. Byly zahájeny přípravy na rozšíření EU o státy střední a východní Evropy.`
      },
      {
        title: 'Maastrichtská smlouva',
        content: `Období: 1992

Vysvětlení: Maastrichtská smlouva z roku 1992 ustanovila Evropskou unii a stanovila základní principy pro její politickou a hospodářskou integraci. Zavedla euro jako společnou měnu a položila základy pro společnou zahraniční a bezpečnostní politiku.`
      },
      {
        title: 'První vlna rozšíření po pádu železné opony',
        content: `Období: 2004

Vysvětlení: V roce 2004 se Evropská unie rozšířila o 10 nových členských států, včetně zemí bývalého východního bloku, jako jsou Polsko, Maďarsko, Česká republika, Slovensko, Slovinsko, Estonsko, Litva, Lotyšsko, Kypr a Malta. Tento krok znamenal významnou změnu v geopolitické mapě Evropy.`
      },
      {
        title: 'Lisabonská smlouva',
        content: `Období: 2009

Vysvětlení: Lisabonská smlouva, která vstoupila v platnost v roce 2009, posílila fungování EU tím, že zjednodušila rozhodovací procesy a poskytla větší pravomoci Evropskému parlamentu. Vytvořila také novou funkci předsedy Evropské rady a zavedla institut evropského občanství.`
      },
      {
        title: 'Druhá vlna rozšíření Evropské unie',
        content: `Období: 1973-1986

Vysvětlení: V roce 1986 přistoupily Španělsko a Portugalsko. Tento krok měl velký význam pro stabilizaci a demokratizaci jižní Evropy po pádu diktatur.`
      },
      {
        title: 'Třetí vlna rozšíření EU',
        content: `Období: 1995

Vysvětlení: V roce 1995 přistoupily Rakousko, Finsko a Švédsko. Tato vlna rozšíření byla zaměřena na země, které byly již vyspělé a připravené na integraci do EU.`
      },
      {
        title: 'Kypr a Malta se stávají členy EU',
        content: `Období: 2004

Vysvětlení: Kypr a Malta se staly součástí Evropské unie v roce 2004, což rozšířilo EU na Středozemí. Tato expanze byla součástí širšího procesu integrace středoevropských a východoevropských států.`
      },
      {
        title: 'Konsolidace měnové unie',
        content: `Období: 1999-2002

Vysvětlení: V roce 1999 byla zahájena měnová unie, když byla eurozóna vytvořena pro 11 států, které přijaly euro. V roce 2002 byly bankovky a mince euro zavedeny do oběhu.`
      },
      {
        title: 'Balkánské rozšíření EU',
        content: `Období: 2007

Vysvětlení: V roce 2007 přistoupily Bulharsko a Rumunsko, což znamenalo pokračování rozšíření EU na Balkán. Tento krok měl za cíl stabilizovat a demokratizovat region po dlouhém období konfliktů.`
      },
      {
        title: 'Vstup Chorvatska do EU',
        content: `Období: 2013

Vysvětlení: Chorvatsko se stalo 28. členem EU v roce 2013, což znamenalo poslední vlnu rozšíření před tím, než došlo k britskému referendu o vystoupení z EU (Brexit).`
      },
      {
        title: 'Brexit',
        content: `Období: 2016-2020

Vysvětlení: V roce 2016 se konalo referendum ve Spojeném království, ve kterém se většina obyvatel rozhodla pro odchod z EU. Tento proces, známý jako Brexit, skončil formálním vystoupením Spojeného království z EU v roce 2020.`
      },
      {
        title: 'Evropský hospodářský prostor (EHP)',
        content: `Období: 1994

Vysvětlení: Evropský hospodářský prostor (EHP) vznikl v roce 1994 jako způsob, jak umožnit evropským státům mimo EU přístup na jednotný trh. Zahrnoval země jako Norsko, Island a Lichtenštejnsko.`
      },
      {
        title: 'Vznik eurozóny',
        content: `Období: 1999

Vysvětlení: V roce 1999 byla zřízena eurozóna, která začala fungovat s 11 zeměmi, které přijaly euro jako svou měnu. Tento krok byl klíčovým momentem pro integraci ekonomických politik v rámci EU.`
      },
      {
        title: 'Smlouva o fungování Evropské unie',
        content: `Období: 1957

Vysvětlení: Smlouva o fungování Evropské unie (SFEU), původně známá jako Římská smlouva, byla jedním ze základních dokumentů, který vytvořil Evropské hospodářské společenství a položil základy pro fungování vnitřního trhu EU.`
      },
      {
        title: 'Vstup Švédska, Finska a Rakouska do EU',
        content: `Období: 1995

Vysvětlení: V roce 1995 se Švédsko, Finsko a Rakousko připojily k EU, což rozšířilo unii o tři severské a středoevropské země.`
      },
      {
        title: 'Úmluva o přistoupení Španělska a Portugalska',
        content: `Období: 1986

Vysvětlení: Španělsko a Portugalsko se staly členy EU v roce 1986, čímž došlo k rozšíření o dvě jihoevropské země po skončení jejich diktatur.`
      },
      {
        title: 'Integrace po pádu Berlínské zdi',
        content: `Období: 1989-1990

Vysvětlení: Pád Berlínské zdi a zánik Sovětského svazu znamenaly možnost integrace bývalých komunistických států do EU. Tento proces zahrnoval státy střední a východní Evropy.`
      },
      {
        title: 'Evropská unie a její expanze do střední Evropy',
        content: `Období: 2004

Vysvětlení: V roce 2004 EU přistoupily nové členské státy z bývalého východního bloku, čímž se posílila stabilita a demokracie v regionu. Tento krok znamenal i nové geopolitické uspořádání v Evropě.`
      },
      {
        title: 'Vstup Rumunska a Bulharska do EU',
        content: `Období: 2007

Vysvětlení: V roce 2007 přistoupily k EU Rumunsko a Bulharsko, což posílilo regionální stabilitu a demokratické procesy v jihovýchodní Evropě.`
      },
      {
        title: 'Vstup Chorvatska do EU',
        content: `Období: 2013

Vysvětlení: Chorvatsko se stalo členem EU v roce 2013, což bylo poslední rozšíření unie v 21. století před krizí související s odchodem Spojeného království.`
      },
      {
        title: 'Evropský parlament',
        content: `Vysvětlení: Evropský parlament je jedním z hlavních orgánů Evropské unie, který reprezentuje občany EU. Je složen z poslanců volených každých pět let ve všech členských státech. Parlament schvaluje legislativní návrhy, rozpočet EU a má významnou roli při rozhodování o mezinárodních dohodách a politice Unie. Poslanci jsou rozděleni podle politických frakcí a hlasují o důležitých otázkách týkajících se práv a politiky EU.`
      },
      {
        title: 'Evropská komise',
        content: `Vysvětlení: Evropská komise je výkonným orgánem EU, který zajišťuje implementaci politik a rozhodnutí přijatých EU. Je složena z komisařů, kteří jsou jmenováni členskými státy a odpovídají za jednotlivé oblasti politiky, jako jsou obchod, životní prostředí nebo konkurence. Komise má právo navrhovat legislativu, což je klíčová součást její role v evropském legislativním procesu.`
      },
      {
        title: 'Legislativní proces v EU',
        content: `Vysvětlení: Legislativní proces v Evropské unii začíná obvykle návrhem Evropské komise. Tento návrh je následně projednáván Evropským parlamentem a Radou Evropské unie, která představuje vlády členských států. Pro schválení legislativy je potřebná součinnost Parlamentu a Rady. Parlament může navrhnout změny k textu, který byl předložen, a rozhodující rozhodnutí jsou přijímána na základě většiny hlasů. Proces může zahrnovat několik čtení a vyjednávání, než se dosáhne konečné dohody.`
      },
      {
        title: 'Rada Evropské unie',
        content: `Vysvětlení: Rada Evropské unie, známá také jako Rada ministrů, je složena z ministrů členských států a je spolu s Evropským parlamentem klíčovým legislativním orgánem EU. Rada se schází na různých úrovních podle zaměření (např. ministři financí, ministři zahraničních věcí) a její hlavní úkoly zahrnují schvalování legislativy, vyjednávání o rozpočtu EU a koordinaci politiky mezi členskými státy.`
      },
      {
        title: 'Právní základ legislativy EU',
        content: `Vysvětlení: Právní základ legislativy EU se nachází v zakládajících smlouvách, především ve Smlouvě o Evropské unii a Smlouvě o fungování Evropské unie. Tyto smlouvy stanovují rámec pro fungování institucí EU, včetně podmínek pro tvorbu nových právních předpisů, které mají platnost v členských státech. Legislativní aktivity EU vycházejí z těchto základních právních dokumentů.`
      },
      {
        title: 'Rozhodovací proces v Evropské komisi',
        content: `Vysvětlení: Evropská komise rozhoduje na základě kolektivní odpovědnosti, což znamená, že komisaři jako celek nesou odpovědnost za její rozhodnutí. Když Komise připravuje návrhy legislativních aktů, může také konzultovat odborníky z členských států nebo veřejnost. Většina rozhodnutí, zejména legislativních, musí být schválena kolegiálně, což zajišťuje jednotný přístup a zohledňuje všechny členské státy.`
      },
      {
        title: 'Role Evropské komise při kontrole implementace politiky EU',
        content: `Vysvětlení: Evropská komise má klíčovou roli při sledování, zda členské státy plní závazky podle právních předpisů EU. Komise má pravomoc zahájit řízení proti členským státům, pokud poruší pravidla EU, a může je podrobit soudnímu řízení u Soudního dvora EU. Tento dohled zajišťuje, že pravidla EU jsou aplikována rovnoměrně ve všech členských státech.`
      },
      {
        title: 'Základní rozhodovací proces v Evropském parlamentu',
        content: `Vysvětlení: Evropský parlament rozhoduje o většině legislativních návrhů, které mu předloží Evropská komise, prostřednictvím několika čtení a hlasování. V průběhu procesu může Parlament navrhovat změny, které musí být dohodnuty s Radou Evropské unie. Pokud obě instituce dospějí k dohodě, legislativní akt může být přijat. Pokud ne, návrh je obvykle vrácen ke zpracování.`
      },
      {
        title: 'Přímé a nepřímé hlasování v Evropském parlamentu',
        content: `Vysvětlení: Evropský parlament používá různé metody hlasování v závislosti na povaze rozhodování. V některých případech se hlasuje přímo, což znamená, že každý poslanec hlasuje individuálně. V jiných případech, zejména u technických nebo procedurálních rozhodnutí, může být použito nepřímé hlasování, kde hlasování probíhá na základě frakcí nebo zástupců výborů.`
      },
      {
        title: 'Výbor pro právní záležitosti Evropského parlamentu',
        content: `Vysvětlení: Tento výbor se zaměřuje na právní aspekty legislativních návrhů v Evropském parlamentu. Je odpovědný za hodnocení právní kvality návrhů a jejich souladu s pravidly EU. Výbor pro právní záležitosti může navrhovat úpravy, které zajišťují, že všechny legislativní akty budou v souladu s právem EU a mezinárodními závazky.`
      },
      {
        title: 'Legislativní proces v Evropském parlamentu',
        content: `Vysvětlení: Legislativní proces v Evropském parlamentu je založen na principu spolurozhodování mezi Parlamentem a Radou Evropské unie. Tento proces zahrnuje několik čtení, kdy Parlament a Rada mohou vznést návrhy na změny legislativních textů. Pokud se strany dohodnou, návrh je přijat. Pokud ne, návrh může být vrácen k dalšímu projednání.`
      },
      {
        title: 'Evropská rada a její role v legislativním procesu',
        content: `Vysvětlení: Evropská rada je složena z hlav států a předsedů vlád členských států. Ačkoli Evropská rada nemá přímou legislativní pravomoc, její rozhodnutí a závěry mohou mít zásadní vliv na směr politiky EU. Evropská rada stanoví hlavní politické cíle a priority, které pak ovlivňují práci Evropské komise a Evropského parlamentu.`
      },
      {
        title: 'Rozdíl mezi Evropskou komisí a Evropskou radou',
        content: `Vysvětlení: Evropská komise je výkonným orgánem EU, který navrhuje legislativní opatření a implementuje rozhodnutí EU. Evropská rada je naopak orgánem, který definuje obecné politické směřování a priority EU, ale není přímo zapojena do denní legislativní práce.`
      },
      {
        title: 'Právní akty Evropské unie',
        content: `Vysvětlení: Právní akty EU jsou rozděleny na nařízení, směrnice a rozhodnutí. Nařízení jsou závazná pro všechny členské státy a přímo aplikována v národních právních systémech. Směrnice vyžadují, aby členské státy dosáhly určitých cílů, ale umožňují jim vybrat způsob, jak to provést. Rozhodnutí jsou závazná pro jednotlivé příjemce (státy nebo firmy), kterým jsou adresována.`
      },
      {
        title: 'Evropský soudní dvůr a jeho role',
        content: `Vysvětlení: Evropský soudní dvůr zajišťuje, že právo EU je správně interpretováno a aplikováno ve všech členských státech. Může rozhodovat o žalobách podaných členskými státy proti Komisi, o sporech mezi institucemi EU a jednotlivými členskými státy nebo jednotlivci, a zajišťuje, že evropské právo má přednost před národními právními předpisy.`
      },
      {
        title: 'Význam subsidiarity v legislativním procesu EU',
        content: `Vysvětlení: Princip subsidiarity znamená, že EU by měla jednat pouze v oblastech, kde jsou cíle předpisu lépe dosaženy na úrovni Unie než na úrovni členských států. Tento princip chrání národní suverenitu a zajišťuje, že EU nezasahuje do oblastí, které mohou být lépe řešeny na národní úrovni.`
      },
      {
        title: 'Legislativa v oblasti životního prostředí',
        content: `Vysvětlení: Evropská unie má rozsáhlou legislativu zaměřenou na ochranu životního prostředí, která zahrnuje normy pro kvalitu vzduchu, vody, odpadového hospodářství a ochrany biodiverzity. Legislativa v této oblasti se vyvíjí v reakci na environmentální výzvy a má za cíl harmonizovat ekologické standardy mezi členskými státy.`
      },
      {
        title: 'Vliv veřejného mínění na legislativní proces EU',
        content: `Vysvětlení: Veřejné mínění má vliv na legislativní proces v EU, protože Evropský parlament je přímo volený občany členských států. Politické strany se snaží brát v úvahu názory voličů, což může ovlivnit jejich hlasování o legislativních návrzích. Veřejná diskuse a konzultace mohou také pomoci formovat politiku a přitáhnout pozornost k důležitým tématům.`
      },
      {
        title: 'Které země patří do eurozóny?',
        content: `Vysvětlení: Eurozóna je skupina evropských zemí, které používají euro jako svou oficiální měnu. V současnosti do eurozóny patří 20 zemí: Belgie, Estonsko, Irsko, Řecko, Španělsko, Francie, Itálie, Kypr, Lotyšsko, Litva, Lucembursko, Malta, Nizozemsko, Portugalsko, Slovensko, Slovinsko, Finsko, Německo, Rakousko a Belgii. Země, které nejsou v eurozóně, mají svou vlastní měnu nebo zůstávají v přechodné fázi přijetí eura.`
      },
      {
        title: 'Rozšíření eurozóny',
        content: `Vysvětlení: Vzhledem k tomu, že eurozóna je součástí širšího ekonomického a měnového společenství Evropské unie, mohou členské státy EU přistupovat k euru, pokud splní ekonomické podmínky stanovené Maastrichtskými kritérii. Tyto kritéria zahrnují stabilitu cen, veřejné finance a směnný kurz. Po splnění těchto podmínek mohou země požádat o přijetí eura.`
      },
      {
        title: 'Které země patří do Schengenské zóny?',
        content: `Vysvětlení: Schengenská zóna je prostor, ve kterém bylo zrušeno hraniční kontroly mezi většinou evropských států. Mezi země, které patří do Schengenu, patří všechny členské státy EU kromě Irska, Rumunska, Bulharska, Chorvatska a Kypru. Dále do Schengenu patří i některé země, které nejsou součástí EU, jako například Norsko, Island, Švýcarsko a Lichtenštejnsko.`
      },
      {
        title: 'Rozšíření Schengenské zóny',
        content: `Vysvětlení: Schengenská zóna se postupně rozšiřovala a zahrnovala jak členské státy EU, tak i některé země mimo ni. Důležité pro rozšíření je splnění bezpečnostních, právních a administrativních podmínek, které umožní zrušení hraničních kontrol. Některé země, jako například Rumunsko a Bulharsko, čekají na přistoupení do Schengenu, protože ještě nesplnily všechny podmínky.`
      },
      {
        title: 'Rozdíl mezi eurozónou a Schengenem',
        content: `Vysvětlení: Eurozóna a Schengen jsou dva různé procesy v rámci Evropské unie. Eurozóna je zaměřena na jednotnou měnu, euro, a jejími členy jsou pouze země, které používají euro. Schengen se týká zrušení hraničních kontrol mezi státy a je zaměřen na volný pohyb osob, což se netýká měny. Některé země jsou členy Schengenu, ale ne eurozóny, a naopak.`
      },
      {
        title: 'Země EU mimo Schengenskou zónu',
        content: `Vysvětlení: Některé členské státy Evropské unie nejsou součástí Schengenské zóny. Patří sem Irsko, Rumunsko, Bulharsko, Chorvatsko a Kypr. Tyto země buď nemají zavedený Schengenský prostor, nebo stále pracují na splnění podmínek pro připojení k této zóně.`
      },
      {
        title: 'Země mimo EU, které patří do Schengenu',
        content: `Vysvětlení: Některé země mimo Evropskou unii jsou součástí Schengenské zóny. Patří sem Norsko, Island, Švýcarsko a Lichtenštejnsko. Tyto země souhlasily se zrušením hraničních kontrol a koordinováním svých vízových politik, i když nejsou členy EU.`
      },
      {
        title: 'Kdy došlo k rozšíření Schengenské zóny na východní Evropu?',
        content: `Vysvětlení: Schengenská zóna se začala rozšiřovat na východní Evropu po rozšíření EU v roce 2004. Nové členské státy, které vstoupily do EU, začaly postupně splňovat podmínky pro vstup do Schengenu. K tomu došlo v roce 2007 a 2008, kdy země jako Česká republika, Polsko, Maďarsko a další bývalé komunistické státy střední a východní Evropy přistoupily k Schengenu.`
      },
      {
        title: 'Země, které nepatří do Schengenu',
        content: `Vysvětlení: Některé členské státy EU nejsou součástí Schengenské zóny, například Irsko, Rumunsko, Bulharsko, Chorvatsko a Kypr. Tyto země si zachovávají vlastní hraniční kontroly a nevstoupily do Schengenu kvůli různým právním, bezpečnostním nebo administrativním důvodům.`
      },
      {
        title: 'Význam Schengenské zóny pro cestování',
        content: `Vysvětlení: Schengenská zóna umožňuje volný pohyb osob mezi členskými státy, což znamená, že lidé mohou cestovat bez nutnosti procházet hraničními kontrolami. To usnadňuje obchod, turismus a pracovní mobilitu mezi státy. Schengen také zahrnuje spolupráci v oblasti bezpečnosti, jako je výměna informací o kriminalitě a migraci.`
      },
      {
        title: 'Vztah mezi Schengenem a vízovou politikou EU',
        content: `Vysvětlení: V rámci Schengenské zóny platí jednotná vízová politika. Osoba, která získá vízum pro jeden členský stát, má právo cestovat i do dalších států Schengenské zóny. Toto usnadňuje cestování pro turisty, obchodníky a pracovníky, ale zároveň zajišťuje bezpečnostní kontrolu a ochranu hranic EU.`
      },
      {
        title: 'Země, které mají euro, ale nejsou v Schengenu',
        content: `Vysvětlení: Existují země, které používají euro, ale nejsou členy Schengenské zóny. Mezi ně patří například Kypr, který používá euro jako svou měnu, ale stále nepatří do Schengenu. Tento rozdíl v členství ukazuje, že přijetí eura a připojení k Schengenské zóně jsou oddělené procesy.`
      },
      {
        title: 'Přístupové podmínky pro Schengen',
        content: `Vysvětlení: Země, které chtějí přistoupit k Schengenské zóně, musí splnit určité podmínky, jako je zajištění bezpečných vnějších hranic, fungující migrační politika, spolupráce v oblasti justice a policejní spolupráce. Tyto podmínky jsou hodnoceny před tím, než může stát být přijat do Schengenu.`
      },
      {
        title: 'Schengen a bezpečnostní spolupráce',
        content: `Vysvětlení: Schengenská zóna zahrnuje spolupráci v oblasti bezpečnosti, což zahrnuje sdílení informací o trestné činnosti, podezřelých osobách a migrantech. Tato spolupráce pomáhá zajišťovat bezpečnost v Evropě, protože umožňuje lepší monitorování a kontrolu pohybu osob na vnějších hranicích EU.`
      },
      {
        title: 'Vliv Schengenu na obchod',
        content: `Vysvětlení: Schengenská zóna podporuje obchod v Evropě tím, že usnadňuje pohyb zboží a osob mezi členskými státy. Zrušení hraničních kontrol znamená rychlejší a efektivnější transport a logistiku, což přispívá k ekonomické integraci a snižuje náklady na obchodní operace.`
      },
      {
        title: 'Schengen a migrace',
        content: `Vysvětlení: Schengenská zóna zahrnuje politiky pro kontrolu migrace, včetně pravidel pro udělování víz a ochrany vnějších hranic. Cílem je umožnit volný pohyb občanům členských států a zajištění bezpečnosti tím, že se kontrolují nelegální migranti, kteří se pokoušejí vstoupit do EU.`
      },
      {
        title: 'Vytvoření Schengenské zóny',
        content: `Vysvětlení: Schengenská zóna byla původně vytvořena v roce 1985 jako dohoda mezi pěti zeměmi (Belgie, Francie, Lucembursko, Nizozemsko a Německo), které se rozhodly zrušit hraniční kontroly. Postupně se rozšiřovala na další evropské země a dnes zahrnuje většinu států EU, stejně jako některé země mimo EU.`
      },
      {
        title: 'Přistupování zemí k eurozóně',
        content: `Vysvětlení: Země přistupují k eurozóně, když splní ekonomické a měnové podmínky stanovené Maastrichtskými kritérii, která zahrnují stabilitu cen, veřejné finance a směnný kurz. Jakmile jsou tyto podmínky splněny, mohou se země rozhodnout o přijetí eura jako své oficiální měny.`
      }
    ]
  }
};