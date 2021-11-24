## Nextjs
### Pros
  - getStaticProps henter data fra CMS og gør den tilgængelig til ens view/side som en prop. Dette gør at man ikke skal bekymre sig om data er tilgengængelig, når man tilgår den på sin side. Man sparer nogle conditions i sin kode.
  - Image komponent som dynamisk kan komprimere og lazy loade billeder. 
## Typescript
### Pros
  - Funktioner bliver dokumenteret via typescript typer og interfaces. Man kan let se hvilke argumenter funktionen forventer og hvad den evt. returnere. Dette gør det nemere, når man ikke kender funktionen. Hvis man alligevel bruger funktionen forkert vil typescript smide en fejl.
  - Får dokumenteret hvordan mit selvoprettede produkt-objekt er struktureret. Både med key navngivning og data typer. Hvis andre arbejder på mit projekt vil de hurtigt kunne se hvad et produkt er. 
  - Typescript gør en opmærksom på om data potientielt kan være undefined. Med type guards gør man sin kode mere sikker, da man med conditions kun kører koden, hvis data er tilgengængelig. (eksemple med env i createClient)
  - Intelligence på objekter. Man får præsenteret en dropdown-menu når man tilgår objektet.   
