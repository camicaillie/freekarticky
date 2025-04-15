export interface Flashcard {
  front: string;
  back: string;
  favorite?: boolean;
  lastReviewed?: Date;
  timesReviewed?: number;
  successRate?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  condition: string;
  unlocked: boolean;
  unlockedDate?: Date;
}

export interface LearningPath {
  currentStage: number;
  stages: {
    level: number;
    requiredCards: number;
    requiredSuccessRate: number;
    completed: boolean;
    completionDate?: Date;
  }[];
}

export interface ReviewSchedule {
  nextReviewDate: Date;
  reviewHistory: {
    date: Date;
    successRate: number;
    cardsReviewed: number;
  }[];
  spacedRepetitionLevel: number;
}

export interface PerformanceAnalytics {
  bestTimeOfDay: string;
  averageSessionLength: number;
  mostChallengingCards: string[];
  improvementRate: number;
  studyPatterns: {
    dayOfWeek: string;
    averageTimeSpent: number;
    averageSuccessRate: number;
  }[];
}

export interface SubcategoryStats {
  totalCards: number;
  cardsStudied: number;
  averageSuccessRate: number;
  lastStudyDate?: Date;
  totalStudyTime: number; // in minutes
  masteryLevel: 'beginner' | 'intermediate' | 'advanced' | 'master';
  streak: number; // Consecutive days studied
  weeklyProgress: {
    date: Date;
    cardsStudied: number;
    successRate: number;
    timeSpent: number;
  }[];
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  lastWeekProgress: {
    cardsStudied: number;
    averageSuccessRate: number;
    timeSpent: number;
  };
  achievements: Achievement[];
  learningPath: LearningPath;
  reviewSchedule: ReviewSchedule;
  analytics: PerformanceAnalytics;
}

export interface Subcategory {
  id: string;
  name: string;
  cards: Flashcard[];
  stats: SubcategoryStats;
}

export interface FlashcardSet {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export const flashcardSets: FlashcardSet[] = [
  {
    id: 'general',
    name: 'Člověk a společnost',
    subcategories: [
      {
        id: 'filosofie',
        name: 'Filosofie',
        cards: [
          { front: 'Od kdy do kdy mluvíme o středověké filosofii?', back: 'Od rozpadu Západořímské říše do počátku humanismu' },
          { front: 'Kdo byl nejdůležitějším představitelem patristiky?', back: 'Sv. Augustýn' },
          { front: 'Co znamená "creatio ex nihilo"?', back: 'Stvoření z ničeho' },
          { front: 'Kdo uznal svébytnost filosofie vůči teologii?', back: 'Tomáš Akvinský' },
          { front: 'Jaký proud tvrdí, že univerzálie jsou pouze jazykový nástroj?', back: 'Nominalismus' },
          { front: 'Kdo z následujících filosofů napsal dílo "O obci boží"?', back: 'Sv. Augustýn' },
          { front: 'Co bylo cílem apologetů?', back: 'Obhajoba křesťanství' },
          { front: 'Jak nazýváme filosofii inspirovanou Tomášem Akvinským?', back: 'Tomismus' },
          { front: 'Kdo byl muslimským filosofem z doby mezidobí, který komentoval Aristotela?', back: 'Averroes' },
          { front: 'Který směr zdůrazňuje, že základním zdrojem poznání je rozum?', back: 'Racionalismus' },
          { front: 'Kdo je nejvýznamnějším představitelem Kantovského kriticismu?', back: 'Immanuel Kant' },
          { front: 'Jaký směr tvrdí, že všechno poznání vychází ze zkušenosti?', back: 'Empirismus' },
          { front: 'Který směr kladl důraz na rozum a kritizoval církevní dogmata?', back: 'Osvícenství' },
          { front: 'Který směr tvrdí, že Bůh stvořil svět, ale do něj dále nezasahuje?', back: 'Deismus' },
          { front: 'Který směr je známý kategoriálním imperativem a spojením racionalismu a empirismu?', back: 'Kantovský kriticismus' },
          { front: 'Kdo je nejvýznamnějším představitelem materialismu?', back: 'Karl Marx' },
          { front: 'Který směr tvrdí, že hmota je odvozená od idejí?', back: 'Idealismus' },
          { front: 'Který směr měří morální hodnotu činu podle jeho důsledků?', back: 'Utilitarismus' },
          { front: 'Který směr zdůrazňuje, že rozum není hlavním nástrojem poznání?', back: 'Iracionalismus' },
          { front: 'Kdo je představitelem voluntarismu?', back: 'Friedrich Nietzsche' },
          { front: 'Který směr odmítá metafyzické spekulace a zaměřuje se na empirická fakta?', back: 'Pozitivismus' },
          { front: 'Jaký směr tvrdí, že dějiny jsou poháněny třídním bojem?', back: 'Marxismus' },
          { front: 'Který směr tvrdí, že tradiční hodnoty a smysl života jsou iluzí?', back: 'Nihilismus' },
          { front: 'Jaký pojem používá Henri Bergson k popisu živého času?', back: 'Trvání' },
          { front: 'Který směr považuje pravdu za to, co funguje v praxi?', back: 'Pragmatismus' },
          { front: 'Kdo je zakladatelem fenomenologie?', back: 'Edmund Husserl' },
          { front: 'Který směr zdůrazňuje individuální svobodu a smysl existence?', back: 'Existencialismus' },
          { front: 'Co zkoumá hermeneutika?', back: 'Teorii interpretace textů' },
          { front: 'Kdo je autorem výroku "O čem nelze mluvit, o tom se musí mlčet"?', back: 'Ludwig Wittgenstein' },
          { front: 'Co je klíčovým kritériem vědeckosti podle Karla Poppera?', back: 'Falsifikace' },
          { front: 'Jaká je hlavní myšlenka stoicismus?', back: 'Dosažení vnitřního klidu a harmonického života skrze ovládání emocí' },
          { front: 'Jaká je hlavní myšlenka epikureismu?', back: 'Nejvyšším cílem je dosažení "atarxie" a potěšení, které je dosažitelné skrze rozumné uspokojování potřeb' },
          { front: 'Jaká je hlavní myšlenka skepticizmu?', back: 'Skeptici tvrdí, že člověk nemůže dosáhnout definitivní jistoty a měl by se vyhýbat absolutním tvrzením' },
          { front: 'Jaká je hlavní myšlenka novoplatonismu?', back: 'Vše ve světě je propojeno skrze "Jedno", a člověk může dosáhnout osvícení a sjednocení s tímto absolutním principem' },
          { front: 'Jaká je hlavní myšlenka novopýthagoreismu?', back: 'Vesmír je řízen matematickými zákony, které ovlivňují přírodu i duši člověka' },
          { front: 'Jaká byla hlavní myšlenka Sokratovy filosofie?', back: 'Etika a sebepoznání skrze dialektiku' },
          { front: 'Jaká je hlavní myšlenka platónismu?', back: 'Existuje dokonalý svět idejí' },
          { front: 'Co je hlavní myšlenka Aristotelismu?', back: 'Vše má svůj účel (telos) a cílem života je eudaimonie' },
          { front: 'Jaký je Platónův pohled na univerzálie?', back: 'Jsou nezávislé na konkrétních věcech a existují jako ideje ve světě idejí' },
          { front: 'Jaký je Aristotelův pohled na univerzálie?', back: 'Existují pouze ve věcech samotných' },
          { front: 'Jaký základní princip (arché) hledali myslitelé Míletské školy?', back: 'Voda' },
          { front: 'Co je hlavní myšlenkou Pythagorejské školy?', back: 'Vesmír je uspořádán podle matematických zákonů' },
          { front: 'Co zdůraznil Herakleitos o světě?', back: 'Svět je v neustálém pohybu a změně' },
          { front: 'Co tvrdili představitelé Eléjské školy o realitě?', back: 'Realita je neměnná a nehybná' },
          { front: 'Co věřili Sofisté o pravdě?', back: 'Pravda je relativní a závisí na názoru jednotlivce' },
          { front: 'Jaký názor měli atomisté na svět?', back: 'Vše se skládá z malých, nedělitelných částic - atomů' }
        ],
        stats: {
          totalCards: 40,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 40,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'psychologie',
        name: 'Psychologie',
        cards: [
          { front: 'Kdo přišel s termínem "introspekce"?', back: 'Wilhelm Wundt' },
          { front: 'Co zkoumá gnoseologie?', back: 'Vztah mezi vědomím a objekty, které jsou poznávány' },
          { front: 'Co je cílem introspekce?', back: 'Analyzovat vnitřní prožitky a mentální stavy' },
          { front: 'Kdo přišel s termínem "kolektivní nevědomí"?', back: 'Carl Gustav Jung' },
          { front: 'Co je kolektivní nevědomí?', back: 'Soubor nevědomých obsahů, které jsou sdílené mezi jednotlivci' },
          { front: 'Kdo přišel s termínem "psychika"?', back: 'Sigmund Freud' },
          { front: 'Co zahrnuje psychika podle Freuda?', back: 'Vědomí, předvědomí a nevědomí' },
          { front: 'Kdo přišel s termínem "chování a prožívání"?', back: 'B.F. Skinner' },
          { front: 'Co zahrnuje termín "chování a prožívání"?', back: 'Externí jednání a vnitřní prožitky, které nelze pozorovat' }
        ],
        stats: {
          totalCards: 9,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 9,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'sociologie',
        name: 'Sociologie',
        cards: [
          { front: 'Kdo je považován za zakladatele pozitivismu?\na) Karl Marx\nb) Herbert Spencer\nc) Auguste Comte\nd) Émile Durkheim', back: 'c) Auguste Comte' },
          { front: 'Jaký filozofický směr byl spojen s Herbertem Spencerem?\na) Pozitivismus\nb) Elitismus\nc) Sociální darwinismus\nd) Feminismus', back: 'c) Sociální darwinismus' },
          { front: 'Který filozof tvrdil, že historie je dějinami třídního boje?\na) Karl Marx\nb) Auguste Comte\nc) Émile Durkheim\nd) Max Weber', back: 'a) Karl Marx' },
          { front: 'Kdo je považován za jednoho z hlavních zakladatelů moderní sociologie?\na) Karl Marx\nb) Émile Durkheim\nc) Herbert Spencer\nd) Auguste Comte', back: 'b) Émile Durkheim' },
          { front: 'Co je hlavní myšlenkou sociálního darwinismu?\na) Třídy by měly spolupracovat pro společný prospěch.\nb) Stát by měl regulovat trhy a zásahy do ekonomiky.\nc) Vykořisťování dělníků je nezbytné pro rozvoj společnosti.\nd) Společnost se vyvíjí přirozeným výběrem, stejně jako příroda.', back: 'd) Společnost se vyvíjí přirozeným výběrem, stejně jako příroda.' },
          { front: 'Jaký směr je spojen s Paretovým pravidlem 80/20?\na) Marxismus\nb) Sociální darwinismus\nc) Elitismus\nd) Kapitalismus', back: 'c) Elitismus' },
          { front: 'Kdo spojil protestantskou etiku s rozvojem kapitalismu?\na) Max Weber\nb) Auguste Comte\nc) Émile Durkheim\nd) Herbert Spencer', back: 'a) Max Weber' },
          { front: 'Co bylo hlavním zaměřením Georga Simmela v sociologii?\na) Studování makro-sociálních změn.\nb) Analýza mikro-sociálních interakcí.\nc) Zkoumání politických systémů.\nd) Rozvoj teorie společenského pokroku.', back: 'b) Analýza mikro-sociálních interakcí.' },
          { front: 'Jakou metodu vyvinul Jacob L. Moreno pro studium sociálních vztahů?\na) Sociometrie\nb) Etologii\nc) Psychoanalýzu\nd) Behaviorismus', back: 'a) Sociometrie' },
          { front: 'Jaký je význam Paretova pravidla 80/20?\na) 80 % bohatství je rozděleno mezi 80 % lidí.\nb) 20 % lidí vlastní 80 % bohatství.\nc) 80 % lidí je bez práce.\nd) 20 % populace ovládá 80 % rozhodnutí.', back: 'b) 20 % lidí vlastní 80 % bohatství.' },
          { front: 'Kdo byl jedním z hlavních představitelů Chicagské školy sociologie?\na) Karl Marx\nb) Jacob L. Moreno\nc) Robert Park\nd) Tomáš Garrigue Masaryk', back: 'c) Robert Park' },
          { front: 'Kdo byl zastáncem pozitivismu a věřil, že veškeré poznání musí být vědecké?\na) Karl Marx\nb) Auguste Comte\nc) Max Weber\nd) Émile Durkheim', back: 'b) Auguste Comte' },
          { front: 'Kdo vyvinul sociometrické metody pro studium vztahů ve skupinách?\na) Karl Marx\nb) Max Weber\nc) Jacob L. Moreno\nd) Émile Durkheim', back: 'c) Jacob L. Moreno' },
          { front: 'Jaký směr se zaměřoval na analýzu vlivu městského života na jednotlivce?\na) Sociální darwinismus\nb) Sociologie\nc) Marxismus\nd) Elitismus', back: 'b) Sociologie' },
          { front: 'Který filozof je spojen s teorií o "beztřídní společnosti"?\na) Karl Marx\nb) Auguste Comte\nc) Max Weber\nd) Herbert Spencer', back: 'a) Karl Marx' },
          { front: 'Kdo se zaměřil na analýzu vlivu náboženství na rozvoj kapitalismu?\na) Émile Durkheim\nb) Max Weber\nc) Auguste Comte\nd) Herbert Spencer', back: 'b) Max Weber' },
          { front: 'Kdo považoval vědecké metody za klíčové pro zlepšení lidské společnosti?\na) Karl Marx\nb) Herbert Spencer\nc) Auguste Comte\nd) Émile Durkheim', back: 'c) Auguste Comte' },
          { front: 'Kdo byl známý svou teorií o tom, že v každé společnosti existuje malá skupina elit?\na) Herbert Spencer\nb) Karl Marx\nc) Vilfredo Pareto\nd) Max Weber', back: 'c) Vilfredo Pareto' },
          { front: 'Co byl hlavní cíl Durkheimova výzkumu o sebevraždách?\na) Analýza příčin válek.\nb) Zkoumání vlivu rodiny na jednotlivce.\nc) Studium vlivu sociálních faktorů na jednotlivce.\nd) Porozumění náboženským rituálům.', back: 'c) Studium vlivu sociálních faktorů na jednotlivce.' },
          { front: 'Kdo tvrdil, že lidské vztahy jsou určovány přirozenými zákony evoluce?\na) Max Weber\nb) Auguste Comte\nc) Herbert Spencer\nd) Émile Durkheim', back: 'c) Herbert Spencer' },
          { front: 'Jaký sociální směr je spojený s Durkheimovou studií náboženství?\na) Pozitivismus\nb) Sociální darwinismus\nc) Funkcionalismus\nd) Marxismus', back: 'c) Funkcionalismus' },
          { front: 'Kdo je spojen s myšlenkou, že neexistuje žádná jednotná pravda o společnosti, ale pouze různé interpretace?\na) Max Weber\nb) Émile Durkheim\nc) Robert Park\nd) Auguste Comte', back: 'a) Max Weber' },
          { front: 'Kdo věřil, že ekonomická nerovnost ve společnosti je nezbytná pro pokrok?\na) Karl Marx\nb) Vilfredo Pareto\nc) Émile Durkheim\nd) Tomáš Garrigue Masaryk', back: 'b) Vilfredo Pareto' },
          { front: 'Který filozof kritizoval stát za přílišné zasahování do ekonomiky?\na) Herbert Spencer\nb) Auguste Comte\nc) Karl Marx\nd) Max Weber', back: 'a) Herbert Spencer' },
          { front: 'Kdo vnímal sociální vědy jako nástroj pro zlepšení společnosti?\na) Vilfredo Pareto\nb) Herbert Spencer\nc) Auguste Comte\nd) Robert Park', back: 'c) Auguste Comte' },
          { front: 'Kdo ve svých studiích sociálních vztahů v městském prostředí poukazoval na roli anonymity a odloučení?\na) Karl Marx\nb) Max Weber\nc) Robert Park\nd) Georg Simmel', back: 'd) Georg Simmel' },
          { front: 'Kdo zkoumal vztah mezi ekonomikou a náboženstvím v kontextu protestantské etiky?\na) Émile Durkheim\nb) Max Weber\nc) Auguste Comte\nd) Karl Marx', back: 'b) Max Weber' },
          { front: 'Kdo tvrdil, že stát a společnost musí vycházet z vědeckého poznání pro svou organizaci?\na) Karl Marx\nb) Auguste Comte\nc) Émile Durkheim\nd) Max Weber', back: 'b) Auguste Comte' },
          { front: 'Kdo byl známý svou teorií o společenských elitách a jejich vlivu na politiku?\na) Karl Marx\nb) Herbert Spencer\nc) Vilfredo Pareto\nd) Max Weber', back: 'c) Vilfredo Pareto' },
          { front: 'Kdo považoval sociální vědy za nezbytné pro praktické zlepšení života jednotlivců?\na) Auguste Comte\nb) Karl Marx\nc) Max Weber\nd) Vilfredo Pareto', back: 'a) Auguste Comte' }
        ],
        stats: {
          totalCards: 30,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 30,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
    ],
  },
  {
    id: 'pravo-politologie',
    name: 'Právo a politologie',
    subcategories: [
      {
        id: 'pravo',
        name: 'Právo',
        cards: [
          { front: 'Jaké jsou základní principy ústavního práva?\na) Rozdělení moci, právní jistota, suverenita státu\nb) Vytváření zákonů, výkon soudní moci\nc) Suverenita jednotlivců, volební právo\nd) Práva menšin, rovnost práv', back: 'a) Rozdělení moci, právní jistota, suverenita státu' },
          { front: 'Kdo je hlavním představitelem výkonné moci v ČR?\na) Prezident\nb) Parlament\nc) Soudy\nd) Poslanci', back: 'a) Prezident' },
          { front: 'Co znamená princip dělby moci v ústavním právu?\na) Rozdělení pravomocí mezi prezidenta, parlament a soudy\nb) Nezávislost soudů na zákonodárné moci\nc) Předání moci pouze jednomu subjektu\nd) Ovládání státu vojenskou mocí', back: 'a) Rozdělení pravomocí mezi prezidenta, parlament a soudy' },
          { front: 'Jaké jsou podmínky pro uzavření manželství v ČR?\na) Plnoletost, svobodná vůle, souhlas obou stran\nb) Dědičnost, souhlas rodičů, plnoletost\nc) Svoboda, dědictví, přítomnost svědka\nd) Svědecká přítomnost, plnoletost, cizí souhlas', back: 'a) Plnoletost, svobodná vůle, souhlas obou stran' },
          { front: 'Co je to právo občanského soudního řízení?\na) Zákony upravující civilní spory\nb) Zákony o právu na náboženskou svobodu\nc) Zákony o pracovních podmínkách\nd) Zákony o právu na ochranu životního prostředí', back: 'a) Zákony upravující civilní spory' },
          { front: 'Co je to zákonný zástupce?\na) Osoba, která může právně jednat za jiného\nb) Osoba, která zastupuje stát v soudních sporech\nc) Osoba volená do parlamentu\nd) Osoba vykonávající veřejnou funkci', back: 'a) Osoba, která může právně jednat za jiného' },
          { front: 'Co je právní úprava dědictví?\na) Určení práv a povinností dědiců\nb) Úprava práv k nemovitostem\nc) Zákony upravující rodinné vztahy\nd) Určení výše daně z příjmu', back: 'a) Určení práv a povinností dědiců' },
          { front: 'Kdy je smlouva považována za platně uzavřenou?\na) Pokud byly splněny podmínky zákona a obě strany se dohodly\nb) Pokud je podepsána jednou stranou\nc) Pokud je schválena státem\nd) Pokud je potvrzena ústně', back: 'a) Pokud byly splněny podmínky zákona a obě strany se dohodly' },
          { front: 'Co znamená „nullum crimen sine lege"?\na) Neexistuje zločin bez zákona\nb) Neexistuje trest bez viníka\nc) Neexistuje obhájce bez obvinění\nd) Neexistuje trest bez důkazu', back: 'a) Neexistuje zločin bez zákona' },
          { front: 'Co je právní odpovědnost?\na) Povinnost odpovědět za jednání, které porušuje zákon\nb) Povinnost hlásit všechny zákony\nc) Právo jednat bez omezení\nd) Povinnost požádat o pomoc právníka', back: 'a) Povinnost odpovědět za jednání, které porušuje zákon' },
          { front: 'Co je to nutná obrana?\na) Ochrana sebe nebo jiných před útokem\nb) Použití síly v reakci na porušení zákona\nc) Porušení zákona za účelem zisku\nd) Porušení práva k ochraně soukromí', back: 'a) Ochrana sebe nebo jiných před útokem' },
          { front: 'Co je krajní nouze?\na) Ochrana sebe nebo jiných, když není jiná možnost\nb) Útok na nevinného člověka\nc) Porušení zákona pro vlastní zisk\nd) Ochrana soukromí před vládními zásahy', back: 'a) Ochrana sebe nebo jiných, když není jiná možnost' },
          { front: 'Co znamená zásada legality v trestním právu?\na) Trestání pouze za činy definované zákonem\nb) Trestání za činy podle individuálních rozhodnutí soudů\nc) Trestání pouze za porušení etických norem\nd) Trestání pouze pro závažné trestné činy', back: 'a) Trestání pouze za činy definované zákonem' },
          { front: 'Kdy je použití síly v nutné obraně považováno za přiměřené?\na) Pokud je síla odpovídající útoku\nb) Pokud je síla nadměrná\nc) Pokud je síla nelegální\nd) Pokud je síla podporována svědky', back: 'a) Pokud je síla odpovídající útoku' },
          { front: 'Co je to retroaktivita v trestním právu?\na) Použití zákonů na činy spáchané před jejich účinností\nb) Použití nových trestů na všechny zločince\nc) Použití zákonů na základě rozhodnutí soudů\nd) Změna trestů na základě politických rozhodnutí', back: 'a) Použití zákonů na činy spáchané před jejich účinností' },
          { front: 'Co je zákaz retroaktivity v trestním právu?\na) Zákony nemohou být použity zpětně na činy spáchané před jejich účinností\nb) Zákony mohou být aplikovány na minulost, ale pouze po schválení soudem\nc) Zákony jsou zpětně aplikovány na všechny spáchané zločiny\nd) Zákony nemohou být změněny po spáchání činu', back: 'a) Zákony nemohou být použity zpětně na činy spáchané před jejich účinností' },
          { front: 'Co znamená princip "lex mitior"?\na) Použití mírnějších trestů v případě změny zákona\nb) Použití tvrdších trestů na závažné trestné činy\nc) Odložení trestního řízení až do změny zákona\nd) Možnost využít trestů pouze v případě porušení zákona', back: 'a) Použití mírnějších trestů v případě změny zákona' },
          { front: 'Co je to právní zástupce?\na) Osoba, která jedná za jiného v právních záležitostech\nb) Osoba, která poskytuje poradenství v trestních věcech\nc) Osoba, která je volena do veřejné funkce\nd) Osoba, která řídí soudní proces', back: 'a) Osoba, která jedná za jiného v právních záležitostech' },
          { front: 'Co je to právní moc rozhodnutí soudu?\na) Rozhodnutí, které se stalo závazným pro všechny strany\nb) Rozhodnutí, které je provizorní\nc) Rozhodnutí, které může být později zrušeno\nd) Rozhodnutí, které není povinné pro strany', back: 'a) Rozhodnutí, které se stalo závazným pro všechny strany' },
          { front: 'Jaký je účel občanského práva?\na) Upravuje vztahy mezi jednotlivci a jejich majetkové a osobní vztahy\nb) Upravuje vztahy mezi státem a jednotlivci\nc) Upravuje vztahy mezi státy a jejich územími\nd) Upravuje vztahy mezi národy a kulturami', back: 'a) Upravuje vztahy mezi jednotlivci a jejich majetkové a osobní vztahy' },
          { front: 'Co je to právní norma?\na) Pravidlo chování stanovené státem\nb) Doporučení pro občany, které není závazné\nc) Rozhodnutí soudu v konkrétní věci\nd) Doporučení pro podniky, jak postupovat', back: 'a) Pravidlo chování stanovené státem' },
          { front: 'Co znamená zásada "nullum crimen sine lege"?\na) Neexistuje zločin bez zákona\nb) Neexistuje trest bez důkazu\nc) Neexistuje zločin bez viníka\nd) Neexistuje obhájce bez obvinění', back: 'a) Neexistuje zločin bez zákona' },
          { front: 'Co je to právní stát?\na) Stát, kde jsou právní normy nadřazeny nad ostatními pravidly\nb) Stát, kde je právo podřízeno vládě\nc) Stát, kde občané nemají právo na ochranu práv\nd) Stát, který neuznává žádné právní normy', back: 'a) Stát, kde jsou právní normy nadřazeny nad ostatními pravidly' },
          { front: 'Co je to právní jistota?\na) Záruka, že právní předpisy budou jasné, stabilní a aplikovány spravedlivě\nb) Jistota, že soudní rozhodnutí budou respektována\nc) Jistota, že každý občan má právo na právní poradenství\nd) Jistota, že všechny právní záležitosti budou vyřešeny do jednoho roku', back: 'a) Záruka, že právní předpisy budou jasné, stabilní a aplikovány spravedlivě' },
          { front: 'Co je to smlouva podle občanského práva?\na) Dohoda mezi dvěma nebo více stranami, která zakládá, mění nebo ruší právní vztahy\nb) Právní norma vydaná státem, která upravuje chování občanů\nc) Rozhodnutí soudu ve sporech mezi jednotlivci\nd) Zákon, který upravuje pracovní vztahy mezi zaměstnavatelem a zaměstnancem', back: 'a) Dohoda mezi dvěma nebo více stranami, která zakládá, mění nebo ruší právní vztahy' },
          { front: 'Jaké jsou základní podmínky pro platnost smlouvy?\na) Svobodná vůle stran, plnoletost, způsobilost k právním úkonům\nb) Povolení státu, písemná forma, souhlas třetí strany\nc) Písemná forma, registrace u soudu, svědecká přítomnost\nd) Kmenová tradice, souhlas zástupce státu, stanovení výše pokuty', back: 'a) Svobodná vůle stran, plnoletost, způsobilost k právním úkonům' },
          { front: 'Co je to právní jednání?\na) Každý projev vůle, který má za následek vznik, změnu nebo zánik právních vztahů\nb) Jakýkoliv projev, který neovlivňuje právní vztahy mezi osobami\nc) Projev, který je v rozporu s právem\nd) Projev vůle, který nevede k žádným právním následkům', back: 'a) Každý projev vůle, který má za následek vznik, změnu nebo zánik právních vztahů' },
          { front: 'Co znamená způsobilost k právním úkonům?\na) Schopnost osoby vykonávat právní jednání a být za ně odpovědná\nb) Povinnost osoby dodržovat všechny právní předpisy\nc) Právo na obranu proti státnímu zásahu\nd) Možnost obdržet dědictví nebo dary', back: 'a) Schopnost osoby vykonávat právní jednání a být za ně odpovědná' },
          { front: 'Co je to právní osoba?\na) Subjekt, který může mít právní povinnosti a práva, například společnost nebo stát\nb) Osoba, která se účastní občanského soudního řízení\nc) Osoba, která vykonává veřejnou funkci\nd) Osoba, která vykonává profesní činnost', back: 'a) Subjekt, který může mít právní povinnosti a práva, například společnost nebo stát' },
          { front: 'Co je odpovědnost za škodu?\na) Povinnost nahradit škodu, kterou někdo způsobil jinému\nb) Povinnost platit daně státu\nc) Právo na odškodnění v případě nezákonného jednání\nd) Povinnost vrátit půjčené peníze', back: 'a) Povinnost nahradit škodu, kterou někdo způsobil jinému' },
          { front: 'Co je to dědická smlouva?\na) Smlouva, která upravuje dědictví mezi jednotlivci\nb) Smlouva mezi podniky o podmínkách spolupráce\nc) Smlouva o převodu nemovitosti\nd) Smlouva o koupi zboží', back: 'a) Smlouva, která upravuje dědictví mezi jednotlivci' },
          { front: 'Co je to závěť?\na) Právní úkon, kterým člověk určuje, jak naloží se svým majetkem po smrti\nb) Písemný souhlas pro uzavření smlouvy\nc) Dohoda o dělení majetku mezi dědici\nd) Právní dokument potvrzující majetkové právo', back: 'a) Právní úkon, kterým člověk určuje, jak naloží se svým majetkem po smrti' },
          { front: 'Co znamená nárok na vrácení věci?\na) Právo požadovat vrácení věci, která byla někomu neoprávněně odevzdána\nb) Právo na odškodnění za ztrátu věci\nc) Právo na prodej věci, kterou vlastním\nd) Právo na zničení věci, která je ve vlastnictví jiného', back: 'a) Právo požadovat vrácení věci, která byla někomu neoprávněně odevzdána' },
          { front: 'Co je to výpověď ze smlouvy?\na) Jednostranné zrušení smlouvy ze strany jedné strany\nb) Dohoda obou stran o ukončení smlouvy\nc) Prohlášení o plnění smlouvy\nd) Ukončení smlouvy z rozhodnutí soudu', back: 'a) Jednostranné zrušení smlouvy ze strany jedné strany' },
          { front: 'Co je to veřejná nabídka?\na) Projev vůle, kterým jedna strana nabízí plnění určité smlouvy veřejně\nb) Nabídka na výměnu zboží mezi podniky\nc) Nabídka na uzavření smlouvy v soukromí\nd) Nabídka, kterou je možné uzavřít pouze s právním zástupcem', back: 'a) Projev vůle, kterým jedna strana nabízí plnění určité smlouvy veřejně' },
          { front: 'Co je to konkludentní jednání?\na) Jednání, které vyjadřuje vůli osoby, i když není výslovně vyjádřeno slovy\nb) Jednání, které je povoleno pouze soudem\nc) Jednání, které musí být prováděno písemně\nd) Jednání, které se vztahuje pouze na právnické osoby', back: 'a) Jednání, které vyjadřuje vůli osoby, i když není výslovně vyjádřeno slovy' },
          { front: 'Co znamená „koupě" podle občanského práva?\na) Smlouva, kterou se prodávající zavazuje převést vlastnické právo k věci kupujícímu\nb) Smlouva, kterou se převádí nájemní právo k nemovitosti\nc) Smlouva, kterou se podnik zavazuje k prodeji zboží na splátky\nd) Smlouva, která se vztahuje pouze na movité věci', back: 'a) Smlouva, kterou se prodávající zavazuje převést vlastnické právo k věci kupujícímu' },
          { front: 'Co je to „věcná práva"?\na) Práva, která se vztahují k určité věci, jako je vlastnictví nebo zástavní právo\nb) Práva týkající se práce a zaměstnání\nc) Práva k nehmotným věcem, jako jsou patenty a autorská práva\nd) Práva týkající se ochrany soukromí', back: 'a) Práva, která se vztahují k určité věci, jako je vlastnictví nebo zástavní právo' },
          { front: 'Co znamená „nemovitost" podle občanského práva?\na) Věci, které jsou pevně spojeny s pozemkem, jako jsou budovy a stavby\nb) Věci, které mohou být pohybovány z místa na místo\nc) Zboží, které je určeno k prodeji\nd) Zvířata, která jsou ve vlastnictví člověka', back: 'a) Věci, které jsou pevně spojeny s pozemkem, jako jsou budovy a stavby' },
          { front: 'Co je to záruka za jakost?\na) Odpovědnost prodávajícího za vady, které se projeví u prodaného zboží\nb) Záruka, že zboží bude doručeno včas\nc) Záruka, že zboží bude prodáno za nízkou cenu\nd) Záruka, že zboží bude odpovídat přání kupujícího', back: 'a) Odpovědnost prodávajícího za vady, které se projeví u prodaného zboží' },
          { front: 'Co znamená „společná a nerozdílná odpovědnost"?\na) Když více lidí odpovídá za jednu povinnost, každý z nich může být povolán k plnění celé povinnosti\nb) Když více lidí odpovídá za různé povinnosti\nc) Když každý z účastníků smlouvy je odpovědný pouze za svoji část povinnosti\nd) Když zodpovídají pouze ti, kteří podepsali smlouvu', back: 'a) Když více lidí odpovídá za jednu povinnost, každý z nich může být povolán k plnění celé povinnosti' },
          { front: 'Co je to vlastnické právo?\na) Právo osoby nakládat s věcí podle své vůle, včetně jejího prodeje, darování či zničení\nb) Právo na užívání věci bez omezení\nc) Právo na náhradu škody způsobené jinou osobou\nd) Právo užívat věc pouze po dobu nájmu', back: 'a) Právo osoby nakládat s věcí podle své vůle, včetně jejího prodeje, darování či zničení' },
          { front: 'Co je to Ústava České republiky?\na) Nejvyšší právní předpis, který určuje státní zřízení, práva a svobody občanů\nb) Právní předpis, který upravuje obchodní vztahy\nc) Smlouva mezi Českou republikou a jinými státy\nd) Zákon, který upravuje volební právo', back: 'a) Nejvyšší právní předpis, který určuje státní zřízení, práva a svobody občanů' },
          { front: 'Co znamená princip dělby moci v ústavním právu?\na) Rozdělení pravomocí mezi různé orgány státní moci, aby se zabránilo koncentraci moci\nb) Právo prezidenta určovat zákony\nc) Právo občanů volit zákonodárce\nd) Právo vlády vydávat rozhodnutí bez souhlasu parlamentu', back: 'a) Rozdělení pravomocí mezi různé orgány státní moci, aby se zabránilo koncentraci moci' },
          { front: 'Jaké jsou hlavní složky státní moci v České republice?\na) Legislativa, exekutiva a judikativa\nb) Prezident, senát a poslanecká sněmovna\nc) Vláda, politické strany a parlament\nd) Soudy, státní zástupci a ombudsman', back: 'a) Legislativa, exekutiva a judikativa' },
          { front: 'Co je to legislativa?\na) Orgány, které vytvářejí a schvalují právní normy, jako je parlament\nb) Orgán, který vykonává rozhodnutí soudu\nc) Právo jednotlivců vyjadřovat své názory\nd) Organizační složky vlády', back: 'a) Orgány, které vytvářejí a schvalují právní normy, jako je parlament' },
          { front: 'Jaká je role prezidenta České republiky podle Ústavy?\na) Zastupuje stát navenek a vykonává některé pravomoci v rámci exekutivy\nb) Vydává zákony a rozhoduje o legislativních změnách\nc) Řídí soudní procesy a zajišťuje spravedlnost\nd) Určuje složení vlády a přijímá rozhodnutí o zahraniční politice', back: 'a) Zastupuje stát navenek a vykonává některé pravomoci v rámci exekutivy' },
          { front: 'Kdo je oprávněn vyhlašovat zákony v České republice?\na) Parlament, konkrétně Poslanecká sněmovna a Senát\nb) Prezident a vláda\nc) Občané na základě referenda\nd) Soudci a státní zástupci', back: 'a) Parlament, konkrétně Poslanecká sněmovna a Senát' },
          { front: 'Co je to referendum podle Ústavy České republiky?\na) Přímo rozhodnutí občanů o určitém státním nebo politickém otázce\nb) Písemné rozhodnutí soudů o ústavní otázce\nc) Způsob volby prezidenta\nd) Forma rozhodování vlády o politických otázkách', back: 'a) Přímo rozhodnutí občanů o určitém státním nebo politickém otázce' },
          { front: 'Kdo zajišťuje ústavní soudnictví v České republice?\na) Ústavní soud České republiky\nb) Nejvyšší soud\nc) Nejvyšší správní soud\nd) Obvodní soudy', back: 'a) Ústavní soud České republiky' },
          { front: 'Co je to Ústavní soud?\na) Orgán, který rozhoduje o souladu právních předpisů s Ústavou\nb) Orgán, který určuje meze pravomocí jednotlivých vládních složek\nc) Orgán, který je zodpovědný za implementaci zákonů\nd) Orgán, který schvaluje volby a výsledky voleb', back: 'a) Orgán, který rozhoduje o souladu právních předpisů s Ústavou' },
          { front: 'Co znamená pojem "neústavnost"?\na) Protiprávní stav, kdy právní předpisy nebo rozhodnutí odporují Ústavě\nb) Stav, kdy právní předpisy nejsou v souladu s mezinárodními smlouvami\nc) Stav, kdy vláda vydává zákony bez parlamentního schválení\nd) Když právní normy nejsou dostatečně chráněny před změnami', back: 'a) Protiprávní stav, kdy právní předpisy nebo rozhodnutí odporují Ústavě' },
          { front: 'Jaké jsou hlavní záruky základních práv a svobod podle Ústavy?\na) Důsledná ochrana práv jednotlivců před nelegálními zásahy státu\nb) Zajištění volného pohybu osob v rámci Evropské unie\nc) Zaručení práva na práci a platby z daní\nd) Zajištění státního financování vzdělávacích institucí', back: 'a) Důsledná ochrana práv jednotlivců před nelegálními zásahy státu' },
          { front: 'Co znamená princip "suverenity lidu"?\na) Vláda je odvozena z vůle a moci občanů, kteří mají právo rozhodovat o svém státě\nb) Politická strana určuje, kdo bude vládnout\nc) Prezident má pravomoc rozhodovat o všech klíčových otázkách\nd) Soudy jsou nezávislé a nemohou být ovlivněny vládou', back: 'a) Vláda je odvozena z vůle a moci občanů, kteří mají právo rozhodovat o svém státě' },
          { front: 'Jaké je postavení vlády podle Ústavy?\na) Je orgánem, který vykonává výkonnou moc a je odpovědný parlamentu\nb) Je nezávislá a nemůže být kontrolována parlamentem\nc) Je zodpovědná pouze prezidentovi\nd) Je volena přímo občany', back: 'a) Je orgánem, který vykonává výkonnou moc a je odpovědný parlamentu' },
          { front: 'Co je to "parlamentní kontrola"?\na) Sledování a ověřování činnosti vlády a dalších orgánů výkonné moci parlamentem\nb) Schvalování rozhodnutí prezidenta\nc) Oprávnění vlády vydávat předpisy bez schválení parlamentem\nd) Právo občanů zasahovat do rozhodování vlády', back: 'a) Sledování a ověřování činnosti vlády a dalších orgánů výkonné moci parlamentem' },
          { front: 'Co znamená pojem "neodvolatelnost soudců"?\na) Soudci jsou chráněni před odvoláním z funkce, pokud neporuší zákony\nb) Soudci mohou být odvoláni na žádost vlády\nc) Soudci musí být voleni občany\nd) Soudci mohou být odvoláni pouze rozhodnutím prezidenta', back: 'a) Soudci jsou chráněni před odvoláním z funkce, pokud neporuší zákony' },
          { front: 'Co je to "politická odpovědnost" vlády podle Ústavy?\na) Vláda je odpovědná parlamentu a může být odvolána v případě nedůvěry\nb) Vláda musí každý měsíc podávat zprávy prezidentovi\nc) Vláda je odpovědná pouze za plnění rozpočtu\nd) Vláda může být odvolána na základě výsledků referenda', back: 'a) Vláda je odpovědná parlamentu a může být odvolána v případě nedůvěry' },
          { front: 'Co znamená pojem "zásada legality"?\na) Veškeré jednání státní moci musí být v souladu s právními předpisy a Ústavou\nb) Soudci mají právo rozhodovat na základě své osobní morálky\nc) Stát může jednat bez ohledu na právní rámec\nd) Legislativa může měnit ústavu podle aktuální politické situace', back: 'a) Veškeré jednání státní moci musí být v souladu s právními předpisy a Ústavou' },
          { front: 'Co znamená "nerozlučitelnost ústavního pořádku"?\na) Ústava je základním a neměnným právním dokumentem, který nelze měnit bez široké shody\nb) Ústava může být změněna jednoduchým hlasováním parlamentu\nc) Ústava je zodpovědná pouze za občanské právo\nd) Ústava je pouze rámcový dokument a může být často měněna', back: 'a) Ústava je základním a neměnným právním dokumentem, který nelze měnit bez široké shody' },
          { front: 'Co znamená pojem "právo na život" podle Ústavy?\na) Základní právo každého jednotlivce na ochranu života a tělesné integrity\nb) Právo na ochranu soukromí v domácnosti\nc) Právo na svobodu slova\nd) Právo na přístup k informacím', back: 'a) Základní právo každého jednotlivce na ochranu života a tělesné integrity' }
        ],
        stats: {
          totalCards: 50,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 50,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'politologie',
        name: 'Politologie',
        cards: [
          { front: 'Co je to "dělba moci"?', back: 'Rozdělení státní moci na zákonodárnou, výkonnou a soudní' },
          { front: 'Co je to "demokracie"?', back: 'Forma vlády, kde moc vychází z lidu' },
          { front: 'Co je to "ústava"?', back: 'Základní zákon státu, který určuje jeho uspořádání' },
          { front: 'Jaký volební systém se používá v České republice pro volby do Poslanecké sněmovny?\na) Dvoukolový většinový\nb) Proporční systém\nc) Kombinovaný systém\nd) Smíšený většinový', back: 'b) Proporční systém' },
          { front: 'Která z následujících institucí v České republice vykonává zákonodárnou moc?\na) Prezident\nb) Poslanecká sněmovna\nc) Ústavní soud\nd) Vláda', back: 'b) Poslanecká sněmovna' },
          { front: 'Kdo je hlavou státní moci v České republice?\na) Premiér\nb) Prezident\nc) Předseda Ústavního soudu\nd) Předseda vlády', back: 'b) Prezident' },
          { front: 'Co je podle Ústavy ČR hlavním úkolem Poslanecké sněmovny?\na) Vytvářet legislativu\nb) Vykonávat soudní moc\nc) Zajišťovat ekonomické plánování\nd) Udržovat bezpečnostní politiku', back: 'a) Vytvářet legislativu' },
          { front: 'Kdo v České republice jmenuje vládu?\na) Parlament\nb) Prezident\nc) Senát\nd) Soudy', back: 'b) Prezident' },
          { front: 'Jaký je rozdíl mezi ústavou, zákonem a vyhláškou v České republice?\na) Ústava je nejvyšší právní normou, zákon je nižší a vyhláška je podzákonný právní předpis\nb) Vyhláška je nad zákonem a ústava je podzákonný právní předpis\nc) Zákon je nejvyšší právní normou\nd) Neexistují žádné rozdíly', back: 'a) Ústava je nejvyšší právní normou, zákon je nižší a vyhláška je podzákonný právní předpis' },
          { front: 'Kdo může v České republice navrhovat zákony?\na) Pouze prezident\nb) Pouze členové vlády\nc) Poslanci, vláda a Senát\nd) Pouze občané', back: 'c) Poslanci, vláda a Senát' },
          { front: 'Co je to "smíšený volební systém"?\na) Volební systém, který kombinuje většinový a poměrný systém\nb) Volební systém, kde jsou všechny hlasy sečítány stejně\nc) Volební systém používaný pouze ve volbách do Evropského parlamentu\nd) Volební systém, který je používán pouze v senátních volbách', back: 'a) Volební systém, který kombinuje většinový a poměrný systém' },
          { front: 'Jaký typ vlády je v České republice?\na) Prezidentská demokracie\nb) Poloprezidentská demokracie\nc) Parlamentní demokracie\nd) Monarchie', back: 'c) Parlamentní demokracie' },
          { front: 'Který orgán v České republice vykonává výkonnou moc?\na) Prezident\nb) Parlament\nc) Vláda\nd) Ústavní soud', back: 'c) Vláda' },
          { front: 'Jaké jsou základní pravomoci prezidenta České republiky?\na) Vydávat zákony\nb) Mít pravomoc v oblasti armády, jmenování soudců a vyhlašování voleb\nc) Ovládat vládu\nd) Řídit parlament', back: 'b) Mít pravomoc v oblasti armády, jmenování soudců a vyhlašování voleb' },
          { front: 'Kdo schvaluje zákony v České republice?\na) Prezident\nb) Senát a Poslanecká sněmovna\nc) Vláda\nd) Ústavní soud', back: 'b) Senát a Poslanecká sněmovna' },
          { front: 'Jaký typ politického systému je v České republice?\na) Totalitarismus\nb) Parlamentní demokracie\nc) Monarchie\nd) Teokracie', back: 'b) Parlamentní demokracie' },
          { front: 'Co znamená pojem "proporční volební systém"?\na) Každý volič má jednu hlasovací možnost, a to pro jednu politickou stranu\nb) Počet mandátů se přiděluje podle procenta hlasů, které strany získají\nc) Počet mandátů je určen pouze na základě geografických oblastí\nd) Volební systém, kde se hlasy sčítají pouze na území hlavního města', back: 'b) Počet mandátů se přiděluje podle procenta hlasů, které strany získají' },
          { front: 'Kdo má právo odvolat prezidenta v České republice?\na) Vláda\nb) Parlament\nc) Ústavní soud\nd) Občané prostřednictvím referenda', back: 'c) Ústavní soud' },
          { front: 'Která forma vlády je charakteristická pro Českou republiku?\na) Poloprezidentská demokracie\nb) Parlamentní demokracie\nc) Prezidentská demokracie\nd) Diktatura', back: 'b) Parlamentní demokracie' },
          { front: 'Co je to "konsensuální demokracie"?\na) Demokracie, kde vláda funguje na základě souhlasu všech politických stran\nb) Demokracie, kde většina strany v parlamentu může rozhodovat bez ohledu na opozici\nc) Demokracie, kde vláda rozhoduje bez jakéhokoli souhlasu s opozicí\nd) Demokracie s jedinou politickou stranou', back: 'a) Demokracie, kde vláda funguje na základě souhlasu všech politických stran' },
          { front: 'Co je charakteristické pro "prezidentskou demokracii"?\na) Prezident má absolutní moc ve všech oblastech vlády\nb) Prezident je hlavou vlády a může vládnout bez parlamentu\nc) Prezident je volen přímo a vykonává výkonnou moc\nd) Prezident je volen parlamentem', back: 'c) Prezident je volen přímo a vykonává výkonnou moc' },
          { front: 'Co charakterizuje "totalitní režim"?\na) Omezené politické svobody a silná kontrola státem\nb) Silný parlament a demokratické volby\nc) Minimální vládní zásahy do osobních práv\nd) Nepřítomnost voleb a politických stran', back: 'a) Omezené politické svobody a silná kontrola státem' },
          { front: 'Který z těchto politických směrů usiluje o zrušení státu a jeho nahrazení svobodnými komunitami?\na) Anarchismus\nb) Liberalismus\nc) Socialismus\nd) Konservatismus', back: 'a) Anarchismus' },
          { front: 'Co je hlavním cílem komunismu?\na) Vytvoření společnosti bez třídních rozdílů a státního vlastnictví výrobních prostředků\nb) Zajištění individuálních práv a svobod\nc) Vytvoření silného tržního hospodářství\nd) Podpora tradičních hodnot', back: 'a) Vytvoření společnosti bez třídních rozdílů a státního vlastnictví výrobních prostředků' },
          { front: 'Co charakterizuje liberalismus?\na) Podporu rovnosti a zásah státu do ekonomiky\nb) Ochranu osobních svobod a minimální zásahy státu do ekonomiky\nc) Plnou kontrolu nad hospodářským sektorem\nd) Zaměření na ideály národní tradice', back: 'b) Ochranu osobních svobod a minimální zásahy státu do ekonomiky' },
          { front: 'Která ideologie usiluje o rovnost, zajištění minimálních práv a státní podporu pro každého občana?\na) Liberalismus\nb) Komunismus\nc) Sociální demokracie\nd) Fašismus', back: 'c) Sociální demokracie' },
          { front: 'Co charakterizuje fašismus?\na) Národní hrdost, silná autoritářská vláda a potlačování opozice\nb) Rovnost mezi občany a podpora osobní svobody\nc) Ochranu přírody a udržitelnost\nd) Minimální zásahy státu do ekonomiky', back: 'a) Národní hrdost, silná autoritářská vláda a potlačování opozice' },
          { front: 'Co je charakteristické pro teokracii?\na) Vláda, kterou tvoří náboženští vůdci\nb) Vláda, kde je náboženské vyznání odděleno od politických rozhodnutí\nc) Ovládání státu prostřednictvím vojenské síly\nd) Přímá demokracie, kde všichni občané mají právo hlasovat', back: 'a) Vláda, kterou tvoří náboženští vůdci' },
          { front: 'Co znamená "syndikalismus"?\na) Politická ideologie, která usiluje o zajištění moci prostřednictvím odborů\nb) Politický systém, který podporuje státní kontrolu ekonomiky\nc) Soubor idejí zaměřený na absolutní individuální svobodu\nd) Systém vlády založený na náboženských principech', back: 'a) Politická ideologie, která usiluje o zajištění moci prostřednictvím odborů' },
          { front: 'Co je hlavní myšlenkou marxismu?\na) Rovnost pro všechny prostřednictvím státního vlastnictví výrobních prostředků\nb) Individuální svoboda a minimální stát\nc) Silný národní stát, který má kontrolu nad všemi oblastmi života\nd) Přímá demokracie bez jakýchkoliv politických stran', back: 'a) Rovnost pro všechny prostřednictvím státního vlastnictví výrobních prostředků' },
          { front: 'Co je cílem politického směru nacionalismus?\na) Zavést úplnou rovnost mezi všemi národy\nb) Posílit národní stát a jeho kulturní identitu\nc) Podpořit globalizaci a mezinárodní spolupráci\nd) Usilovat o zrušení států a přechod k anarchii', back: 'b) Posílit národní stát a jeho kulturní identitu' },
          { front: 'Co charakterizuje politický směr konzervatismus?\na) Usiluje o revoluci a rychlé změny ve společnosti\nb) Podporuje tradiční hodnoty a postupné změny\nc) Zaměřuje se na individualismus a minimalizaci státní moci\nd) Podporuje plnou kontrolu státu nad ekonomikou', back: 'b) Podporuje tradiční hodnoty a postupné změny' },
          { front: 'Kdo jsou hlavní představitelé anarchismu?\na) Karl Marx a Friedrich Engels\nb) Thomas Hobbes a John Locke\nc) Pierre-Joseph Proudhon a Mikhail Bakunin\nd) John Stuart Mill a Adam Smith', back: 'c) Pierre-Joseph Proudhon a Mikhail Bakunin' },
          { front: 'Jaké je hlavní zaměření pragmatismu v politické teorii?\na) Důraz na ideologické čistoty a teoretické principy\nb) Řešení problémů podle jejich praktických důsledků a účinnosti\nc) Posilování státní kontroly nad každou oblastí života\nd) Snaha o utopické změny v společnosti', back: 'b) Řešení problémů podle jejich praktických důsledků a účinnosti' },
          { front: 'Která země byla příkladem komunistického režimu v 20. století?\na) USA\nb) Sovětský svaz\nc) Spojené království\nd) Švédsko', back: 'b) Sovětský svaz' },
          { front: 'Jaký je hlavní princip socialismus?\na) Volný trh bez státní regulace\nb) Státní kontrola nad všemi aspekty ekonomiky\nc) Rovnost ve společnosti a redistribuce bohatství\nd) Silná moc jednotlivých států bez vlivu na ostatní', back: 'c) Rovnost ve společnosti a redistribuce bohatství' },
          { front: 'Co je základním principem liberalismu?\na) Posílení národních států a jejich nezávislosti\nb) Ochrana osobních svobod a práv jednotlivců\nc) Úplná státní kontrola nad ekonomikou a výrobními prostředky\nd) Zajištění rovnosti skrze zásahy vlády', back: 'b) Ochrana osobních svobod a práv jednotlivců' },
          { front: 'Který politický směr je zaměřen na maximální rovnost mezi jednotlivci, bez třídních rozdílů?\na) Anarchismus\nb) Socialismus\nc) Konzervatismus\nd) Liberalismus', back: 'b) Socialismus' },
          { front: 'Jaké jsou hlavní charakteristiky teokracie?\na) Oddělení náboženství od státu\nb) Vláda je vykonávána podle náboženských zásad a vedení náboženských představitelů\nc) Moc je v rukou armády\nd) Vláda je založena na demokratických volbách', back: 'b) Vláda je vykonávána podle náboženských zásad a vedení náboženských představitelů' },
          { front: 'Jaký politický směr podporuje volný trh, osobní svobody a minimální stát?\na) Marxismus\nb) Anarchismus\nc) Liberalismus\nd) Totalitarismus', back: 'c) Liberalismus' },
          { front: 'Co znamená "diktatura" v politologii?\na) Forma vlády, kde je moci soustředěna do rukou jednoho nebo několika jednotlivců\nb) Forma vlády, kde vládne parlament\nc) Vláda založená na volbách a pluralitě politických stran\nd) Vláda, kde mají občané právo přímo hlasovat o všech rozhodnutích', back: 'a) Forma vlády, kde je moci soustředěna do rukou jednoho nebo několika jednotlivců' },
          { front: 'Který politický směr se zaměřuje na silný centralizovaný stát a nacionalismus?\na) Fašismus\nb) Liberalismus\nc) Socialismus\nd) Anarchismus', back: 'a) Fašismus' },
          { front: 'Jaký politický směr usiluje o zrušení státních institucí a vytvoření společnosti založené na svobodných komunitách?\na) Socialismus\nb) Liberalismus\nc) Anarchismus\nd) Fašismus', back: 'c) Anarchismus' },
          { front: 'Co je to "demokratický centralismus"?\na) Politický systém, ve kterém je centralizována moc v jednom centru, ale zaručena svoboda projevu\nb) Systém, ve kterém je řízení strany zcela centralizováno, ale s otevřeným diskurzem v rámci stranických sborů\nc) Forma vlády, kde občané přímo volí všechny zákony\nd) Demokracie, která zajišťuje centralizovanou kontrolu médií a politiky', back: 'b) Systém, ve kterém je řízení strany zcela centralizováno, ale s otevřeným diskurzem v rámci stranických sborů' },
          { front: 'Kdo byl hlavním představitelem komunistické ideologie?\na) Karl Marx\nb) Winston Churchill\nc) Friedrich Hayek\nd) John Stuart Mill', back: 'a) Karl Marx' },
          { front: 'Jaký je hlavní princip fašismu?\na) Rovnost a zajištění práv menšin\nb) Silná národní identita a autoritářská moc\nc) Ochrana osobních svobod a práv\nd) Odmítnutí všech náboženství a jejich vlivu na politiku', back: 'b) Silná národní identita a autoritářská moc' },
          { front: 'Který směr podporuje individuální práva a minimální zásahy státu do osobního života?\na) Socialismus\nb) Fašismus\nc) Liberalismus\nd) Totalitarismus', back: 'c) Liberalismus' },
          { front: 'Co znamená pojem "proporcionalita" ve volebních systémech?\na) Počet mandátů je udělován podle velikosti volebních obvodů\nb) Počet mandátů je rozdělován mezi politické strany na základě procenta získaných hlasů\nc) Počet mandátů je rozdělován mezi strany rovnoměrně\nd) Počet mandátů se přiděluje podle výše volební účasti', back: 'b) Počet mandátů je rozdělován mezi politické strany na základě procenta získaných hlasů' },
          { front: 'Co charakterizuje politickou ideologii libertarianismu?\na) Zajištění rovnosti prostřednictvím státní intervence\nb) Podpora minimálního státu a maximálních osobních svobod\nc) Zajištění politické stability prostřednictvím centralizované moci\nd) Podpora kolektivismu a společenské rovnosti', back: 'b) Podpora minimálního státu a maximálních osobních svobod' },
          { front: 'Co je hlavní myšlenkou ekologismu?\na) Zajištění rovnosti prostřednictvím zásahů vlády do ekonomiky\nb) Ochrana přírody a udržitelnost životního prostředí\nc) Silný stát, který reguluje trhy a pracovní vztahy\nd) Zvýšení spotřeby pro zajištění hospodářského růstu', back: 'b) Ochrana přírody a udržitelnost životního prostředí' },
          { front: 'Která ideologie usiluje o vytvoření společnosti bez jakýchkoli třídních rozdílů a státního vlastnictví výrobních prostředků?\na) Anarchismus\nb) Konservatismus\nc) Komunismus\nd) Liberalismus', back: 'c) Komunismus' },
          { front: 'Který směr prosazuje ideál společenské rovnosti prostřednictvím demokratických prostředků?\na) Fašismus\nb) Socialismus\nc) Liberalismus\nd) Anarchismus', back: 'b) Socialismus' },
          { front: 'Který politický směr je spojen s ideologií "silného státu" a kontrolou občanů?\na) Anarchismus\nb) Totalitarismus\nc) Liberalismus\nd) Socialismus', back: 'b) Totalitarismus' },
          { front: 'Jaký je hlavní rozdíl mezi demokratickým a autokratickým režimem?\na) Demokracie je založena na vládě jednoho jednotlivce, zatímco autokracie zajišťuje svobodu projevu.\nb) Demokracie vyžaduje pravidelné volby a pluralismus, autokracie má centralizovanou moc v rukou jediné osoby nebo malé skupiny.\nc) Demokracie zajišťuje absolutní kontrolu nad ekonomikou, autokracie podporuje tržní ekonomiku.\nd) Neexistuje žádný rozdíl mezi demokratickým a autokratickým režimem.', back: 'b) Demokracie vyžaduje pravidelné volby a pluralismus, autokracie má centralizovanou moc v rukou jediné osoby nebo malé skupiny.' },
          { front: 'Kdo je považován za hlavního představitele klasického liberalismu?\na) Friedrich Engels\nb) John Locke\nc) Thomas Hobbes\nd) Karl Marx', back: 'b) John Locke' },
          { front: 'Který z následujících režimů je příkladem prezidentské demokracie?\na) Spojené státy americké\nb) Francie\nc) Švýcarsko\nd) Velká Británie', back: 'a) Spojené státy americké' },
          { front: 'Co je charakteristické pro politickou ideologii neokonzervatismu?\na) Podpora minimálního státu a maximálních osobních svobod.\nb) Podpora silné role státu v oblasti sociálních a ekonomických záležitostí.\nc) Důraz na vojenskou intervenci a ochranu tradičních hodnot.\nd) Usilování o rovnost mezi různými skupinami ve společnosti.', back: 'c) Důraz na vojenskou intervenci a ochranu tradičních hodnot.' },
          { front: 'Který politický směr odmítá všechny formy vlády a usiluje o zrušení státu?\na) Libertarianismus\nb) Anarchismus\nc) Socialismus\nd) Liberalismus', back: 'b) Anarchismus' },
          { front: 'Jaké je hlavní zaměření politické ideologie feminizmu?\na) Podpora rovnosti mezi pohlavími a práv žen.\nb) Zajištění rovnosti mezi národy a rasami.\nc) Posílení mocenské struktury státu a jeho autority.\nd) Zajištění maximální svobody jednotlivce bez zásahů státu.', back: 'a) Podpora rovnosti mezi pohlavími a práv žen.' },
          { front: 'Co je hlavním zaměřením politické ideologie populismu?\na) Ochrana elit a zavedení přísných pravidel pro politické strany.\nb) Posílení role politiky ve vědeckém výzkumu a inovacích.\nc) Obhajoba zájmů "obyčejných lidí" proti elitám a establishmentu.\nd) Podpora vlády v rukou malé skupiny odborníků.', back: 'c) Obhajoba zájmů "obyčejných lidí" proti elitám a establishmentu.' },
          { front: 'Co znamená termín "demokratická centralizace"?\na) Demokracie bez jakékoliv centralizované moci.\nb) Centralizace moci v jednom politickém centru, přičemž se zachovává kontrola skrze demokratické volby.\nc) Společenský systém, který neumožňuje žádnou formu veřejného hlasování.\nd) Systém, kde jsou všechny politické strany stejného významu a moci.', back: 'b) Centralizace moci v jednom politickém centru, přičemž se zachovává kontrola skrze demokratické volby.' },
          { front: 'Co je charakteristické pro politickou ideologii liberalismu?\na) Důraz na zajištění rovnosti mezi jednotlivci a sociální spravedlnost.\nb) Podpora osobních svobod a minimálního zásahu státu do života jednotlivců.\nc) Zavedení přísné státní kontroly nad ekonomikou.\nd) Silná podpora centralizované moci ve státní sféře.', back: 'b) Podpora osobních svobod a minimálního zásahu státu do života jednotlivců.' },
          { front: 'Který z následujících politických směrů usiluje o úplnou rovnost a bezstátní společnost?\na) Komunismus\nb) Socialismus\nc) Anarchismus\nd) Konzervatismus', back: 'c) Anarchismus' },
          { front: 'Co je hlavní ideou teokracie?\na) Vláda je určena náboženskými autoritami a náboženskými zákony.\nb) Vláda je vykonávána demokracií bez jakékoliv náboženské kontroly.\nc) Vláda se zaměřuje na plnou rovnost mezi všemi občany bez ohledu na náboženské přesvědčení.\nd) Vláda je založena na vojenské autoritě a silném státním aparátu.', back: 'a) Vláda je určena náboženskými autoritami a náboženskými zákony.' },
          { front: 'Která země je příkladem konstituční monarchie?\na) Spojené státy americké\nb) Velká Británie\nc) Kuba\nd) Čína', back: 'b) Velká Británie' },
          { front: 'Co je typickým znakem fašismu?\na) Podpora demokratického pluralismu a ochrany osobních svobod.\nb) Silná centralizovaná moc, agresivní nacionalismus a autoritářské tendence.\nc) Zajištění rovnosti prostřednictvím redistribuce bohatství.\nd) Ochrana pracovních práv a zájmů menšin.', back: 'b) Silná centralizovaná moc, agresivní nacionalismus a autoritářské tendence.' },
          { front: 'Kdo z následujících je příkladem politického smýšlení marxismu?\na) Adam Smith\nb) Karl Marx\nc) John Locke\nd) John Stuart Mill', back: 'b) Karl Marx' },
          { front: 'Který politický směr se zaměřuje na úplnou rovnost a kolektivistické uspořádání společnosti?\na) Kapitalismus\nb) Anarchismus\nc) Komunismus\nd) Liberalismus', back: 'c) Komunismus' },
          { front: 'Který z těchto politických směrů usiluje o minimalizaci vládní moci a maximální svobodu jednotlivce?\na) Anarchismus\nb) Komunismus\nc) Konzervatismus\nd) Liberalismus', back: 'd) Liberalismus' },
          { front: 'Kdo je považován za zakladatele moderního liberalismu?\na) Friedrich Engels\nb) Thomas Hobbes\nc) John Locke\nd) Karl Marx', back: 'c) John Locke' }
        ],
        stats: {
          totalCards: 50,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 50,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      }
    ],
  },
  {
    id: 'historie-ekonomie',
    name: 'Moderní historie a ekonomie',
    subcategories: [
      {
        id: 'ekonomie',
        name: 'Ekonomie',
        cards: [
          { front: 'Co zdůrazňuje klasická ekonomie?\na) Význam vlády v regulaci trhů\nb) Minimalizaci zásahu státu do ekonomiky\nc) Důraz na centralizovanou ekonomiku\nd) Přímé ovládání ekonomiky vládou', back: 'b) Minimalizaci zásahu státu do ekonomiky' },
          { front: 'Kdo je hlavním představitelem monetarismu?\na) John Maynard Keynes\nb) Friedrich Hayek\nc) Milton Friedman\nd) Karl Marx', back: 'c) Milton Friedman' },
          { front: 'Co je klíčovým prvkem keynesiánství?\na) Minimalizace vládních výdajů\nb) Vládní zásahy na podporu poptávky v recesi\nc) Zvýšení nabídky na trhu\nd) Neomezený trh bez regulace', back: 'b) Vládní zásahy na podporu poptávky v recesi' },
          { front: 'Co tvrdí rakouská škola ekonomie?\na) Ekonomika je řízena centrálními plány\nb) Trhy se vždy automaticky stabilizují bez vládní pomoci\nc) Ekonomika je řízena vysokou inflací\nd) Významný je zásah státu do ekonomiky', back: 'b) Trhy se vždy automaticky stabilizují bez vládní pomoci' },
          { front: 'Co zdůrazňuje neoliberalismus?\na) Zvýšení daní pro bohaté\nb) Stát by měl výrazně zasahovat do ekonomiky\nc) Minimalizace role státu v ekonomice a volný trh\nd) Redistribuci bohatství prostřednictvím daní', back: 'c) Minimalizace role státu v ekonomice a volný trh' },
          { front: 'Jaké je hlavní téma marxismu?\na) Ekonomické zisky z efektivního využívání trhů\nb) Třídní boj mezi buržoazií a proletariátem\nc) Vládní zásahy k zajištění rovnosti\nd) Růst prostřednictvím inovací', back: 'b) Třídní boj mezi buržoazií a proletariátem' },
          { front: 'Co je hlavním zaměřením postkeynesiánství?\na) Omezování vládních výdajů\nb) Stabilizace trhů bez vládních zásahů\nc) Racionalizace ekonomiky za pomoci tržního řízení\nd) Očekávání a nejistota jako klíčové faktory pro ekonomiku', back: 'd) Očekávání a nejistota jako klíčové faktory pro ekonomiku' },
          { front: 'Co se zaměřuje na psychologické faktory ovlivňující ekonomická rozhodnutí?\na) Behavioralní ekonomie\nb) Keynesiánství\nc) Monetarismus\nd) Rakouská škola', back: 'a) Behavioralní ekonomie' },
          { front: 'Co je kladeno za základ ekonomie nabídky?\na) Zvýšení daní pro firmy\nb) Minimalizace zásahů státu a stimulace podnikání\nc) Zajistit rovnost příjmů mezi bohatými a chudými\nd) Zvýšení vládní kontroly nad trhem', back: 'b) Minimalizace zásahů státu a stimulace podnikání' },
          { front: 'Co se zaměřuje na analýzu poptávky v ekonomice?\na) Ekonomie poptávky\nb) Neoliberalismus\nc) Fiskální politika\nd) Behaviorální ekonomie', back: 'a) Ekonomie poptávky' },
          { front: 'Jaký je hlavní zaměřením institucionální ekonomie?\na) Význam institucí jako právní systémy nebo politické struktury\nb) Omezení vlády na regulaci ekonomiky\nc) Minimalizace tržních výkyvů\nd) Rozvoj ekonomiky prostřednictvím rozpočtových deficitů', back: 'a) Význam institucí jako právní systémy nebo politické struktury' },
          { front: 'Co tvrdí evoluční ekonomie?\na) Ekonomické systémy se neustále vyvíjejí a mění v čase\nb) Vždy je potřeba stabilizace ekonomiky prostřednictvím vlády\nc) Ekonomika by měla být plánována na centrální úrovni\nd) Ekonomické výsledky jsou zcela určeny tržními silami', back: 'a) Ekonomické systémy se neustále vyvíjejí a mění v čase' },
          { front: 'Co je hlavním zájmem ekonomiky blahobytu?\na) Zajištění efektivity ekonomiky na úkor spravedlnosti\nb) Optimální alokace zdrojů mezi jednotlivci\nc) Rovnováha mezi efektivitou a spravedlivým rozdělením bohatství\nd) Snížení daní pro bohaté vrstvy', back: 'c) Rovnováha mezi efektivitou a spravedlivým rozdělením bohatství' },
          { front: 'Co je základem korporativismu?\na) Vláda by měla řídit všechny ekonomické aktivity\nb) Ekonomické a sociální zájmy by měly být zastupovány organizacemi\nc) Ekonomika by měla být zcela tržní a nezávislá na vládních zásazích\nd) Stát by měl plně privatizovat všechny sektorové aktivity', back: 'b) Ekonomické a sociální zájmy by měly být zastupovány organizacemi' },
          { front: 'Co charakterizuje teorii racionální volby?\na) Ekonomická rozhodnutí jsou založena na emočních reakcích jednotlivců\nb) Jednotlivci činí rozhodnutí na základě racionální analýzy a maximalizace užitku\nc) Stát určuje ekonomická rozhodnutí pro jednotlivce\nd) Ekonomické rozhodnutí jsou založena na náhodných faktorech', back: 'b) Jednotlivci činí rozhodnutí na základě racionální analýzy a maximalizace užitku' },
          { front: 'Co je cílem feministické ekonomie?\na) Podpora tržní ekonomiky pro všechny\nb) Analyzovat, jak ekonomické systémy ovlivňují muže a ženy různě\nc) Zajištění rovnosti mezi třídami\nd) Snížení významu institucí v ekonomice', back: 'b) Analyzovat, jak ekonomické systémy ovlivňují muže a ženy různě' },
          { front: 'Co tvrdí přístup lidského kapitálu?\na) Lidská práce je nezbytná pro zajištění rovnosti v ekonomice\nb) Investice do vzdělání a školení zvyšují produktivitu a růst\nc) Ekonomika by měla být regulována vládními zásahy\nd) Trhy se stabilizují bez jakéhokoli zásahu', back: 'b) Investice do vzdělání a školení zvyšují produktivitu a růst' },
          { front: 'Co zkoumá ekonomika nelegálních trhů?\na) Vliv vládních regulací na ekonomiku\nb) Studuje trhy, které jsou nelegální, jako obchod s drogami\nc) Jak fungují trhy v ideálním hospodářství\nd) Způsoby, jak zvýšit výrobu zboží a služeb', back: 'b) Studuje trhy, které jsou nelegální, jako obchod s drogami' },
          { front: 'Co je cílem kreativní ekonomiky?\na) Snížení státní regulace v ekonomice\nb) Podpora růstu prostřednictvím technologických inovací\nc) Zvýšení kreativity a kulturního obsahu v ekonomice\nd) Podpora rozvoje těžkého průmyslu', back: 'c) Zvýšení kreativity a kulturního obsahu v ekonomice' },
          { front: 'Co popisuje kruh chudoby?\na) Cyklus, kdy chudoba vede k nižšímu vzdělání a nižším příjmům\nb) Růst ekonomiky díky inovacím a investicím\nc) Stabilní rozvoj ekonomiky, který nezahrnuje chudé regiony\nd) Snižování chudoby prostřednictvím rovných příležitostí', back: 'a) Cyklus, kdy chudoba vede k nižšímu vzdělání a nižším příjmům' },
          { front: 'Co podporuje ekonomika poptávky?\na) Snížení daní pro firmy\nb) Zvýšení vládní regulace trhů\nc) Zvyšování poptávky v ekonomice prostřednictvím vládních stimulů\nd) Zaměření na nabídku a výrobu zboží', back: 'c) Zvyšování poptávky v ekonomice prostřednictvím vládních stimulů' },
          { front: 'Co doporučuje rakouská škola ekonomie?\na) Regulace trhů a centrální řízení ekonomiky\nb) Trhy by měly být řízeny podle vládních plánů\nc) Volné trhy s minimálním vládním zásahem\nd) Zajištění rovnosti ve všech oblastech ekonomiky', back: 'c) Volné trhy s minimálním vládním zásahem' },
          { front: 'Co je hlavním cílem monetární politiky?\na) Zvýšení vládních výdajů\nb) Snížení úrokových sazeb pro stimulaci ekonomiky\nc) Kontrola inflace prostřednictvím řízení peněžní zásoby\nd) Regulace ceny zboží a služeb na trhu', back: 'c) Kontrola inflace prostřednictvím řízení peněžní zásoby' },
          { front: 'Co znamená termín „poptávka" v mikroekonomii?\na) Celkový objem vyrobených výrobků\nb) Schopnost a ochota spotřebitelů nakupovat zboží a služby za určitou cenu\nc) Celkový objem peněz v oběhu\nd) Množství zboží, které je k dispozici na trhu', back: 'b) Schopnost a ochota spotřebitelů nakupovat zboží a služby za určitou cenu' },
          { front: 'Co je příkladem pozitivní externality?\na) Znečištění ovzduší automobilovými emisemi\nb) Vzdělání, které zvyšuje produktivitu pracovních sil\nc) Ztráta pracovních míst v důsledku automatizace\nd) Zvýšení ceny ropy na světových trzích', back: 'b) Vzdělání, které zvyšuje produktivitu pracovních sil' },
          { front: 'Co zkoumá mikroekonomie?\na) Vládní regulace trhů\nb) Chování jednotlivců a firem na trzích\nc) Makroekonomické faktory jako inflace a nezaměstnanost\nd) Role státu v rozdělování bohatství', back: 'b) Chování jednotlivců a firem na trzích' },
          { front: 'Co je to tržní selhání?\na) Případ, kdy trhy automaticky vyrovnávají nabídku a poptávku\nb) Situace, kdy trhy neprodukují efektivní nebo spravedlivé výsledky\nc) Situace, kdy vláda plně reguluje trhy\nd) Proces, kdy ceny na trzích stoupají, ale ekonomika zůstává stabilní', back: 'b) Situace, kdy trhy neprodukují efektivní nebo spravedlivé výsledky' },
          { front: 'Co je definováno jako inflace?\na) Pokles cen zboží a služeb\nb) Stabilní růst ekonomiky bez výkyvů\nc) Růst cen zboží a služeb v ekonomice\nd) Stabilita měnového kurzu', back: 'c) Růst cen zboží a služeb v ekonomice' },
          { front: 'Co znamená termín „neelastická poptávka"?\na) Když poptávka na změnu ceny reaguje silně\nb) Když poptávka na změnu ceny reaguje minimálně\nc) Když nabídka a poptávka jsou v rovnováze\nd) Když cena zboží není ovlivněna poptávkou', back: 'b) Když poptávka na změnu ceny reaguje minimálně' },
          { front: 'Co je charakteristické pro monopol?\na) Trh je tvořen velkým počtem malých firem\nb) Jedna firma dominuje na trhu a kontroluje cenu\nc) Trh je zcela volný a neexistují žádné regulace\nd) Poptávka je zcela nezávislá na cenách', back: 'b) Jedna firma dominuje na trhu a kontroluje cenu' },
          { front: 'Co je to „marginalní užitek"?\na) Úplný užitek z celkového množství spotřebovaného zboží\nb) Užitek získaný z poslední jednotky spotřebovaného zboží\nc) Celkový užitek všech spotřebovaných statků\nd) Množství zboží, které je poptáváno na určité cenové úrovni', back: 'b) Užitek získaný z poslední jednotky spotřebovaného zboží' },
          { front: 'Co je základním cílem fiskální politiky?\na) Zvýšení úrokových sazeb\nb) Snížení vládních výdajů\nc) Stabilizace ekonomiky prostřednictvím vládních výdajů a daní\nd) Kontrola peněžní zásoby v ekonomice', back: 'c) Stabilizace ekonomiky prostřednictvím vládních výdajů a daní' },
          { front: 'Co je to „cena elasticity" v ekonomii?\na) Míra citlivosti poptávky na změnu ceny\nb) Míra stability ceny na trhu\nc) Rychlost růstu ceny zboží\nd) Míra nabídky na trhu v reakci na změnu ceny', back: 'a) Míra citlivosti poptávky na změnu ceny' },
          { front: 'Co se stane, pokud se zvýší nabídka na trhu?\na) Ceny na trhu obvykle vzrostou\nb) Poptávka klesne, protože cena stoupne\nc) Ceny na trhu obvykle klesnou, pokud poptávka zůstane stejná\nd) Poptávka se vůbec nezmění', back: 'c) Ceny na trhu obvykle klesnou, pokud poptávka zůstane stejná' },
          { front: 'Co je to „případný zisk" v mikroekonomii?\na) Zisk, který firma získá během krátkodobé recese\nb) Zisk, který firma získá pouze tehdy, když pokryje všechny své náklady\nc) Zisk, který firma dosahuje bez ohledu na konkurenci\nd) Zisk, který může firma získat pouze po pokrytí fixních nákladů', back: 'b) Zisk, který firma získá pouze tehdy, když pokryje všechny své náklady' },
          { front: 'Co je to „tržní rovnováha"?\na) Situace, kdy nabídka je vyšší než poptávka\nb) Situace, kdy poptávka je vyšší než nabídka\nc) Situace, kdy nabídka a poptávka jsou vyváženy a cena se stabilizuje\nd) Situace, kdy cena na trhu neustále roste', back: 'c) Situace, kdy nabídka a poptávka jsou vyváženy a cena se stabilizuje' },
          { front: 'Co je klíčovým prvkem teorií o řízení ekonomiky podle rakouské školy?\na) Důraz na centrální plánování\nb) Volný trh, který se stabilizuje sám\nc) Zásah vlády pro zajištění rovnosti\nd) Důraz na zvyšování výdajů státního rozpočtu', back: 'b) Volný trh, který se stabilizuje sám' },
          { front: 'Co je hlavní myšlenkou teorie lidského kapitálu?\na) Lidé jsou jen pracovním nástrojem pro výrobu zboží\nb) Lidé by neměli investovat do vlastního vzdělání\nc) Investice do vzdělání a školení zvyšují produktivitu a ekonomický růst\nd) Vzdělání je irrelevantní pro ekonomický růst', back: 'c) Investice do vzdělání a školení zvyšují produktivitu a ekonomický růst' },
          { front: 'Co je to „neviditelná ruka" v ekonomii?\na) Přímý zásah státu do tržního mechanismu\nb) Metafora pro nevysvětlitelné tržní fluktuace\nc) Tržní mechanismus, který vede k rovnováze prostřednictvím individuálních rozhodnutí\nd) Zákon, který reguluje ceny na trhu', back: 'c) Tržní mechanismus, který vede k rovnováze prostřednictvím individuálních rozhodnutí' },
          { front: 'Co znamená termín „zákon nabídky"?\na) Snižování nabídky způsobí růst cen\nb) Zvýšení nabídky vede k růstu cen\nc) Zvýšení nabídky vede ke snížení cen\nd) Cena nezávisí na nabídce', back: 'c) Zvýšení nabídky vede ke snížení cen' },
          { front: 'Co je „cena elasticity" v nabídce?\na) Míra, jak se mění nabídka zboží v reakci na změnu ceny\nb) Míra, jak se mění poptávka na trhu\nc) Snížení nabídky při poklesu ceny\nd) Jaké množství zboží je dostupné za stabilní cenu', back: 'a) Míra, jak se mění nabídka zboží v reakci na změnu ceny' },
          { front: 'Co je hlavní výhodou konkurence na trhu?\na) Zaručuje stabilní ceny pro výrobce\nb) Zvyšuje efektivitu a inovace, což vede ke zlepšení služeb a cen\nc) Umožňuje monopolům kontrolovat trh\nd) Snižuje výběr pro spotřebitele', back: 'b) Zvyšuje efektivitu a inovace, což vede ke zlepšení služeb a cen' },
          { front: 'Co znamená pojem „alternativní náklady"?\na) Náklady spojené s výrobou produktu pro konkurenci\nb) Hodnota nejlepší alternativy, kterou obětujeme při rozhodování\nc) Skrytá cena, která není vyjádřena v penězích\nd) Náklady na zajištění úvěru', back: 'b) Hodnota nejlepší alternativy, kterou obětujeme při rozhodování' },
          { front: 'Co je charakteristické pro oligopol?\na) Trh je dominován mnoha malými firmami\nb) Existuje pouze jeden dominantní producent\nc) Trh je tvořen malým počtem velkých firem, které mají značnou tržní sílu\nd) Ceny na trhu jsou zcela nezávislé na nabídce a poptávce', back: 'c) Trh je tvořen malým počtem velkých firem, které mají značnou tržní sílu' },
          { front: 'Co je to „křivka nabídky"?\na) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou spotřebitelé ochotni koupit\nb) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou výrobci ochotni nabídnout\nc) Graf zobrazující růst ekonomiky\nd) Graf zobrazující výdaje vlády', back: 'b) Graf zobrazující vztah mezi cenou a množstvím zboží, které jsou výrobci ochotni nabídnout' },
          { front: 'Co je „opportunity cost"?\na) Příležitost, kterou ztratíte při investování\nb) Cena, kterou zaplatíte za špatné rozhodnutí\nc) Alternativní hodnota příležitosti, kterou musíte obětovat\nd) Výnosy z investice do nemovitosti', back: 'c) Alternativní hodnota příležitosti, kterou musíte obětovat' }
        ],
        stats: {
          totalCards: 50,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 50,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'moderni-historie',
        name: 'Moderní historie',
        cards: [
          { front: 'Kdo byl britským premiérem během první světové války?\na) Neville Chamberlain\nb) Winston Churchill\nc) David Lloyd George\nd) Clement Attlee', back: 'c) David Lloyd George' },
          { front: 'Co znamenal Versailský mír?\na) Ukončil druhou světovou válku\nb) Stanovil podmínky míru mezi Německem a jeho spojenci\nc) Stanovil podmínky míru mezi Německem a Spojenci po první světové válce\nd) Uzavřel pakt mezi USA a Sovětským svazem', back: 'c) Stanovil podmínky míru mezi Německem a Spojenci po první světové válce' },
          { front: 'Kdo byl hlavním představitelem bolševiků během ruské revoluce v roce 1917?\na) Lev Trockij\nb) Josif Stalin\nc) Vladimir Lenin\nd) Nikita Chruščov', back: 'c) Vladimir Lenin' },
          { front: 'Kdy vypukla první světová válka?\na) 1912\nb) 1914\nc) 1916\nd) 1918', back: 'b) 1914' },
          { front: 'Co byla Sdružení národů (SN)?\na) Mezinárodní organizace pro rozvoj ekonomických vztahů\nb) Politická organizace pro udržení míru a bezpečnosti po první světové válce\nc) Organizace pro pomoc uprchlíkům po druhé světové válce\nd) Mezinárodní banka pro obnovu a rozvoj', back: 'b) Politická organizace pro udržení míru a bezpečnosti po první světové válce' },
          { front: 'Kdo byl hlavním autorem "Mein Kampf"?\na) Hermann Göring\nb) Joseph Goebbels\nc) Adolf Hitler\nd) Rudolf Hess', back: 'c) Adolf Hitler' },
          { front: 'Kdy byla podepsána Mnichovská dohoda?\na) 1935\nb) 1938\nc) 1940\nd) 1945', back: 'b) 1938' },
          { front: 'Co způsobilo vypuknutí první světové války?\na) Napoleonovy vojenské výpravy\nb) Rozdělení Evropy mezi velmoci\nc) Atentát na Františka Ferdinanda d\'Este\nd) Vznik Sdružení národů', back: 'c) Atentát na Františka Ferdinanda d\'Este' },
          { front: 'Kdo byl předsedou vlády během velké hospodářské krize ve Spojených státech?\na) Harry S. Truman\nb) Franklin D. Roosevelt\nc) Herbert Hoover\nd) Lyndon B. Johnson', back: 'b) Franklin D. Roosevelt' },
          { front: 'Co znamená termín "New Deal"?\na) Nový hospodářský pakt mezi USA a Sovětským svazem\nb) Sada ekonomických a sociálních reforem během velké hospodářské krize v USA\nc) Plán pro obnovu Evropy po druhé světové válce\nd) Politika západních států vůči Číně v 30. letech', back: 'b) Sada ekonomických a sociálních reforem během velké hospodářské krize v USA' },
          { front: 'Kdy byla podepsána Locarnská dohoda?\na) 1919\nb) 1925\nc) 1932\nd) 1939', back: 'b) 1925' },
          { front: 'Co znamenal Pakt Molotov-Ribbentrop?\na) Spojenectví mezi Německem a Itálií\nb) Pakt mezi Německem a Sovětským svazem o neútočení a o rozdělení Polska\nc) Dohoda o rozdělení Rakouska mezi Německo a Sovětský svaz\nd) Politická dohoda o podpoře Velké Británie', back: 'b) Pakt mezi Německem a Sovětským svazem o neútočení a o rozdělení Polska' },
          { front: 'Kdo byl "muž v černém" v první světové válce?\na) Ludendorff\nb) Winston Churchill\nc) Erwin Rommel\nd) Paul von Hindenburg', back: 'd) Paul von Hindenburg' },
          { front: 'Co byla "Velká červená" revoluce?\na) Občanská válka v Rusku\nb) Revoluce v Mexiku\nc) Komunistická revoluce v Číně\nd) Německá revoluce v roce 1918', back: 'a) Občanská válka v Rusku' },
          { front: 'Kdo byl francouzským prezidentem během první světové války?\na) Georges Clemenceau\nb) Charles de Gaulle\nc) René Coty\nd) François Hollande', back: 'a) Georges Clemenceau' },
          { front: 'Kdy byla podepsána Versailleská mírová smlouva?\na) 1919\nb) 1923\nc) 1930\nd) 1945', back: 'a) 1919' },
          { front: 'Která země se připojila k Trojitému paktu v roce 1940?\na) Československo\nb) Polsko\nc) Maďarsko\nd) Rakousko', back: 'c) Maďarsko' },
          { front: 'Co byla hlavní příčina vypuknutí druhé světové války?\na) Nacistická expanze a invaze do Polska\nb) Atentát na Františka Ferdinanda\nc) Pád Berlínské zdi\nd) Krize v Africe', back: 'a) Nacistická expanze a invaze do Polska' },
          { front: 'Co bylo Mnichovskou dohodou?\na) Politické uspořádání po první světové válce\nb) Dohoda o rozdělění Československa mezi Německo, Itálii a Francii\nc) Dohoda, která měla zachovat mír v Evropě, ale umožnila Německu anektovat Sudety\nd) Smlouva, která vyústila ve vznik Varšavské smlouvy', back: 'c) Dohoda, která měla zachovat mír v Evropě, ale umožnila Německu anektovat Sudety' },
          { front: 'Kdy začala druhá světová válka?\na) 1938\nb) 1939\nc) 1940\nd) 1941', back: 'b) 1939' },
          { front: 'Která organizace vznikla po první světové válce s cílem udržet mír v Evropě?\na) OSN\nb) NATO\nc) Sdružení národů\nd) WTO', back: 'c) Sdružení národů' },
          { front: 'Kdy se konal první "Zimní konflikt" mezi Sovětským svazem a Finskem?\na) 1939-1940\nb) 1941-1945\nc) 1929-1931\nd) 1914', back: 'a) 1939-1940' },
          { front: 'Kdo byl autorem knihy "Mein Kampf"?\na) Heinrich Himmler\nb) Adolf Hitler\nc) Joseph Goebbels\nd) Albert Speer', back: 'b) Adolf Hitler' },
          { front: 'Které zemi patřil Mandát nad Palestinou?\na) Velká Británie\nb) Francie\nc) Německo\nd) Spojené státy', back: 'a) Velká Británie' },
          { front: 'Co bylo výsledkem Versailleské smlouvy?\na) Potrestání Německa a rozdělení jeho území\nb) Vytvoření Evropské unie\nc) Spojení Německa a Rakouska\nd) Vznik Německé říše', back: 'a) Potrestání Německa a rozdělení jeho území' },
          { front: 'Co znamená "Münchenský diktát"?\na) Diktát v roce 1939, který zavedl Nacistickou vládu\nb) Pakt, který povolil Hitlerovi anektovat část Československa\nc) Dohoda, která vedla k ukončení první světové války\nd) Příkaz, který vyhlásil druhou světovou válku', back: 'b) Pakt, který povolil Hitlerovi anektovat část Československa' },
          { front: 'Co znamená pojem "Velká hospodářská krize"?\na) Doba rychlého hospodářského růstu ve 30. letech\nb) Krize způsobená kolapsem akciového trhu v roce 1929\nc) Krize spojená s výbuchem evropské ekonomiky\nd) Období, kdy byla světová ekonomika stabilní', back: 'b) Krize způsobená kolapsem akciového trhu v roce 1929' },
          { front: 'Kdo byl hlavním představitelem "Nového Údělu"?\na) Herbert Hoover\nb) Franklin D. Roosevelt\nc) Winston Churchill\nd) George Marshall', back: 'b) Franklin D. Roosevelt' },
          { front: 'Kdy došlo k vypuknutí Korejské války?\na) 1945\nb) 1950\nc) 1955\nd) 1960', back: 'b) 1950' },
          { front: 'Co bylo výsledkem Korejské války?\na) Korejský poloostrov byl sjednocen pod komunistickým režimem\nb) Korejský poloostrov byl sjednocen pod kapitalistickým režimem\nc) Korejský poloostrov zůstal rozdělen na Severní a Jižní Koreu\nd) Korea byla rozdělená mezi USA a Sovětský svaz', back: 'c) Korejský poloostrov zůstal rozdělen na Severní a Jižní Koreu' },
          { front: 'Kdy byla postavena Berlínská zeď?\na) 1949\nb) 1955\nc) 1961\nd) 1975', back: 'c) 1961' },
          { front: 'Co symbolizovala Berlínská zeď?\na) Rozdělení světa mezi kapitalismus a socialismus\nb) Sjednocení Německa\nc) Vznik Evropské unie\nd) Mír mezi východním a západním blokem', back: 'a) Rozdělení světa mezi kapitalismus a socialismus' },
          { front: 'Kdy byla podepsána Helsinská dohoda?\na) 1972\nb) 1975\nc) 1980\nd) 1985', back: 'b) 1975' },
          { front: 'Co znamenala Helsinská dohoda?\na) Mírovou dohodu mezi USA a Sovětským svazem\nb) Dohodu o evropské bezpečnosti a spolupráci\nc) Dohodu o rozdělení Evropy mezi východní a západní blok\nd) Dohodu o vstupu Británie do Evropské unie', back: 'b) Dohodu o evropské bezpečnosti a spolupráci' },
          { front: 'Kdo byl lídrem Sovětského svazu během Kubánské raketové krize?\na) Leonid Brežněv\nb) Nikita Chruščov\nc) Josef Stalin\nd) Mikhail Gorbačov', back: 'b) Nikita Chruščov' },
          { front: 'Kdy došlo k kubánské raketové krizi?\na) 1960\nb) 1962\nc) 1965\nd) 1970', back: 'b) 1962' },
          { front: 'Co bylo příčinou kubánské raketové krize?\na) Sovětský svaz umístil jaderné rakety na Kubě\nb) USA napadly Kubu\nc) Kuba uzavřela pakt s NATO\nd) Sovětský svaz anektoval Kubu', back: 'a) Sovětský svaz umístil jaderné rakety na Kubě' },
          { front: 'Kdy se k vietnamské válce připojilo USA?\na) 1950\nb) 1960\nc) 1965\nd) 1970', back: 'c) 1965' },
          { front: 'Co bylo výsledkem vietnamské války?\na) Vietnam zůstal rozdělený mezi Severní a Jižní Vietnam\nb) Jižní Vietnam padl a Vietnam se sjednotil pod komunistickou vládou\nc) Jižní Vietnam se stal americkým protektorátem\nd) Vietnam se připojil k Sovětskému svazu', back: 'b) Jižní Vietnam padl a Vietnam se sjednotil pod komunistickou vládou' },
          { front: 'Kdy skončila vietnamská válka?\na) 1973\nb) 1975\nc) 1980\nd) 1985', back: 'b) 1975' },
          { front: 'Co znamenal pád Berlínské zdi v roce 1989?\na) Konec studené války a začátek sjednocení Německa\nb) Začátek studené války\nc) Založení Evropské unie\nd) Vytvoření Varšavské smlouvy', back: 'a) Konec studené války a začátek sjednocení Německa' },
          { front: 'Co bylo cílem Marshallova plánu?\na) Podpora rozvoje socialistických států\nb) Obnova ekonomiky po druhé světové válce v západní Evropě\nc) Vytvoření nové vojenské aliance\nd) Rozdělení Německa', back: 'b) Obnova ekonomiky po druhé světové válce v západní Evropě' },
          { front: 'Kdy byla podepsána Pařížská dohoda o Vietnamu?\na) 1965\nb) 1970\nc) 1973\nd) 1975', back: 'c) 1973' },
          { front: 'Kdo byl prvním prezidentem Francie po druhé světové válce?\na) Charles de Gaulle\nb) François Mitterrand\nc) Jacques Chirac\nd) Georges Pompidou', back: 'a) Charles de Gaulle' },
          { front: 'Kdy začala studená válka?\na) 1945\nb) 1947\nc) 1950\nd) 1960', back: 'b) 1947' },
          { front: 'Kdy byl založen NATO?\na) 1945\nb) 1949\nc) 1955\nd) 1960', back: 'b) 1949' },
          { front: 'Co bylo cílem NATO?\na) Zajistit hospodářský rozvoj\nb) Zajistit vojenskou ochranu západních států před sovětskou hrozbou\nc) Vytvoření jednotného evropského trhu\nd) Sjednocení západní Evropy', back: 'b) Zajistit vojenskou ochranu západních států před sovětskou hrozbou' },
          { front: 'Kdy došlo k vypuknutí vojenské intervence v Koreji?\na) 1950\nb) 1953\nc) 1955\nd) 1960', back: 'a) 1950' },
          { front: 'Co byla Kultura a politika Khrushchova?\na) Nastolení mírové politiky a uvolnění napětí mezi Východem a Západem\nb) Příprava na jadernou válku\nc) Zhoršení vztahů mezi USA a Sovětským svazem\nd) Uzavření hranic a totalitní režim', back: 'a) Nastolení mírové politiky a uvolnění napětí mezi Východem a Západem' },
          { front: 'Kdy byla podepsána Charta OSN?\na) 1945\nb) 1950\nc) 1955\nd) 1960', back: 'a) 1945' },
          { front: 'Kdy vznikla Evropská hospodářská společenství (EHS)?\na) 1947\nb) 1957\nc) 1961\nd) 1967', back: 'b) 1957' },
          { front: 'Co znamenala termín "perestrojka"?\na) Program pro rozvoj jaderné energetiky v Sovětském svazu\nb) Ekonomické a politické reformy iniciované Michalem Gorbačovem\nc) Změna názvu pro Sovětský svaz\nd) Nová vojenská doktrína Sovětského svazu', back: 'b) Ekonomické a politické reformy iniciované Michalem Gorbačovem' },
          { front: 'Co znamenala termín "glasnosť"?\na) Zvýšení vojenské výkonnosti Sovětského svazu\nb) Politika většího otevření a svobody projevu v Sovětském svazu\nc) Zavedení nové hospodářské politiky v Sovětském svazu\nd) Zahraniční politika Sovětského svazu vůči Západu', back: 'b) Politika většího otevření a svobody projevu v Sovětském svazu' },
          { front: 'Co bylo záměrem Brežněvovy doktríny?\na) Podpora komunistických revolucí v západních zemích\nb) Osvobození států pod sovětskou nadvládou\nc) Právo Sovětského svazu zasahovat v socialistických zemích, pokud dojde k ohrožení socialismu\nd) Zabránění šíření kapitalismu východní Evropou', back: 'c) Právo Sovětského svazu zasahovat v socialistických zemích, pokud dojde k ohrožení socialismu' },
          { front: 'Co bylo příčinou války ve Vietnamu?\na) Konflikt mezi komunistickým severem a antikomunistickým jihem Vietnamu\nb) Německý útok na Vietnam\nc) Boj o nezávislost mezi Vietnamem a Francií\nd) Zásah USA proti čínské invazi', back: 'a) Konflikt mezi komunistickým severem a antikomunistickým jihem Vietnamu' },
          { front: 'Kdy došlo k pádu Sovětského svazu?\na) 1985\nb) 1991\nc) 1995\nd) 2000', back: 'b) 1991' }
        ],
        stats: {
          totalCards: 50,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 50,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      },
      {
        id: 'evropska-integrace',
        name: 'Evropská integrace',
        cards: [
          { front: 'Kdy byla založena Evropská hospodářská společenství (EHS)?\na) 1957\nb) 1960\nc) 1950\nd) 1965', back: 'a) 1957' },
          { front: 'Kdy byl podepsán Maastrichtský smlouva?\na) 1992\nb) 1990\nc) 1995\nd) 1989', back: 'a) 1992' },
          { front: 'Kdy vstoupilo Československo do EU?\na) 2004\nb) 2000\nc) 2008\nd) 2010', back: 'a) 2004' },
          { front: 'Kdy byl zaveden euro?\na) 2002\nb) 2000\nc) 2005\nd) 1999', back: 'a) 2002' },
          { front: 'Kdy byla podepsána Lisabonská smlouva?\na) 2007\nb) 2005\nc) 2010\nd) 2009', back: 'a) 2007' },
          { front: 'Kdy vstoupilo Chorvatsko do EU?\na) 2013\nb) 2010\nc) 2015\nd) 2012', back: 'a) 2013' },
          { front: 'Kdy Velká Británie opustila EU?\na) 2020\nb) 2019\nc) 2021\nd) 2018', back: 'a) 2020' },
          { front: 'Kdy byla podepsána Schengenská dohoda?\na) 1985\nb) 1990\nc) 1980\nd) 1995', back: 'a) 1985' },
          { front: 'Kdy vstoupily Bulharsko a Rumunsko do EU?\na) 2007\nb) 2005\nc) 2010\nd) 2009', back: 'a) 2007' },
          { front: 'Kdy byla podepsána Římská smlouva?\na) 1957\nb) 1960\nc) 1950\nd) 1965', back: 'a) 1957' }
        ],
        stats: {
          totalCards: 10,
          cardsStudied: 0,
          averageSuccessRate: 0,
          totalStudyTime: 0,
          masteryLevel: 'beginner',
          streak: 0,
          weeklyProgress: [],
          difficultyDistribution: {
            easy: 0,
            medium: 0,
            hard: 0
          },
          lastWeekProgress: {
            cardsStudied: 0,
            averageSuccessRate: 0,
            timeSpent: 0
          },
          achievements: [],
          learningPath: {
            currentStage: 1,
            stages: [
              {
                level: 1,
                requiredCards: 10,
                requiredSuccessRate: 70,
                completed: false
              }
            ]
          },
          reviewSchedule: {
            nextReviewDate: new Date(),
            reviewHistory: [],
            spacedRepetitionLevel: 1
          },
          analytics: {
            bestTimeOfDay: '',
            averageSessionLength: 0,
            mostChallengingCards: [],
            improvementRate: 0,
            studyPatterns: []
          }
        }
      }
    ],
  },
]; 