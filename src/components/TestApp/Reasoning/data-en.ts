const names = [
  "James",
  "Mary",
  "Michael",
  "Patricia",
  "Robert",
  "Jennifer",
  "John",
  "Linda",
  "David",
  "Elizabeth",
  "William",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Karen",
  "Christopher",
  "Sarah",
  "Charles",
  "Lisa",
  "Daniel",
  "Nancy",
  "Matthew",
  "Sandra",
  "Anthony",
  "Betty",
  "Mark",
  "Ashley",
  "Donald",
  "Emily",
  "Steven",
  "Kimberly",
  "Andrew",
  "Margaret",
  "Paul",
  "Donna",
  "Joshua",
  "Michelle",
  "Kenneth",
  "Carol",
  "Kevin",
  "Amanda",
  "Brian",
  "Melissa",
  "Timothy",
  "Deborah",
  "Ronald",
  "Stephanie",
  "George",
  "Rebecca",
  "Jason",
  "Sharon",
  "Edward",
  "Laura",
  "Jeffrey",
  "Cynthia",
  "Ryan",
  "Dorothy",
  "Jacob",
  "Amy",
  "Nicholas",
  "Kathleen",
  "Gary",
  "Angela",
  "Eric",
  "Shirley",
  "Jonathan",
  "Emma",
  "Stephen",
  "Brenda",
  "Larry",
  "Pamela",
  "Justin",
  "Nicole",
  "Scott",
  "Anna",
  "Brandon",
  "Samantha",
  "Benjamin",
  "Katherine",
  "Samuel",
  "Christine",
  "Gregory",
  "Debra",
  "Alexander",
  "Rachel",
  "Patrick",
  "Carolyn",
  "Frank",
  "Janet",
  "Raymond",
  "Maria",
  "Jack",
  "Olivia",
  "Dennis",
  "Heather",
  "Jerry",
  "Helen",
];

const comparisons = [
  {
    s: [
      ["is stronger than", "not as weak as"],
      ["is weaker than", "not as strong as"],
    ],
    q: [
      ["stronger", "less weak"],
      ["weaker", "less strong"],
    ],
  },
  {
    s: [
      ["is smarter than", "not as dumb as"],
      ["is dumber than", "not as smart as"],
    ],
    q: [
      ["smarter", "less dumb"],
      ["dumber", "less smart"],
    ],
  },
  {
    s: [
      ["is taller than", "not as short as"],
      ["is shorter than", "not as tall as"],
    ],
    q: [
      ["taller", "less short"],
      ["shorter", "less tall"],
    ],
  },
  {
    s: [
      ["is braver than", "not as cowardly as"],
      ["is more cowardly than", "not as brave as"],
    ],
    q: [
      ["braver", "less cowardly"],
      ["more cowardly", "less brave"],
    ],
  },
  {
    s: [
      ["is kinder than", "not as cruel as"],
      ["is crueler than", "not as kind as"],
    ],
    q: [
      ["kinder", "less cruel"],
      ["crueler", "less kind"],
    ],
  },
  {
    s: [
      ["is funnier than", "not as serious as"],
      ["is more serious than", "not as funny as"],
    ],
    q: [
      ["funnier", "less serious"],
      ["more serious", "less funny"],
    ],
  },
  {
    s: [
      ["is friendlier than", "not as hostile as"],
      ["is more hostile than", "not as friendly as"],
    ],
    q: [
      ["friendlier", "less hostile"],
      ["more hostile", "less friendly"],
    ],
  },
  {
    s: [
      ["is more generous than", "not as selfish as"],
      ["is more selfish than", "not as generous as"],
    ],
    q: [
      ["more generous", "less selfish"],
      ["more selfish", "less generous"],
    ],
  },
  {
    s: [
      ["is more confident than", "not as insecure as"],
      ["is more insecure than", "not as confident as"],
    ],
    q: [
      ["more confident", "less insecure"],
      ["more insecure", "less confident"],
    ],
  },
  {
    s: [
      ["is calmer than", "not as anxious as"],
      ["is more anxious than", "not as calm as"],
    ],
    q: [
      ["calmer", "less anxious"],
      ["more anxious", "less calm"],
    ],
  },
  {
    s: [
      ["is more optimistic than", "not as pessimistic as"],
      ["is more pessimistic than", "not as optimistic as"],
    ],
    q: [
      ["more optimistic", "less pessimistic"],
      ["more pessimistic", "less optimistic"],
    ],
  },
  {
    s: [
      ["is more ambitious than", "not as lazy as"],
      ["is lazier than", "not as ambitious as"],
    ],
    q: [
      ["more ambitious", "less lazy"],
      ["lazier", "less ambitious"],
    ],
  },
  {
    s: [
      ["is more responsible than", "not as careless as"],
      ["is more careless than", "not as responsible as"],
    ],
    q: [
      ["more responsible", "less careless"],
      ["more careless", "less responsible"],
    ],
  },
  {
    s: [
      ["is more empathetic than", "not as insensitive as"],
      ["is more insensitive than", "not as empathetic as"],
    ],
    q: [
      ["more empathetic", "less insensitive"],
      ["more insensitive", "less empathetic"],
    ],
  },
  {
    s: [
      ["is more creative than", "not as unimaginative as"],
      ["is more unimaginative than", "not as creative as"],
    ],
    q: [
      ["more creative", "less unimaginative"],
      ["more unimaginative", "less creative"],
    ],
  },
  {
    s: [
      ["is more disciplined than", "not as reckless as"],
      ["is more reckless than", "not as disciplined as"],
    ],
    q: [
      ["more disciplined", "less reckless"],
      ["more reckless", "less disciplined"],
    ],
  },
  {
    s: [
      ["is more attractive than", "not as unattractive as"],
      ["is more unattractive than", "not as attractive as"],
    ],
    q: [
      ["more attractive", "less unattractive"],
      ["more unattractive", "less attractive"],
    ],
  },
  {
    s: [
      ["is more honest than", "not as deceitful as"],
      ["is more deceitful than", "not as honest as"],
    ],
    q: [
      ["more honest", "less deceitful"],
      ["more deceitful", "less honest"],
    ],
  },
  {
    s: [
      ["is more patient than", "not as impatient as"],
      ["is more impatient than", "not as patient as"],
    ],
    q: [
      ["more patient", "less impatient"],
      ["more impatient", "less patient"],
    ],
  },
  {
    s: [
      ["is more open-minded than", "not as close-minded as"],
      ["is more close-minded than", "not as open-minded as"],
    ],
    q: [
      ["more open-minded", "less close-minded"],
      ["more close-minded", "less open-minded"],
    ],
  },
  {
    s: [
      ["is more polite than", "not as rude as"],
      ["is ruder than", "not as polite as"],
    ],
    q: [
      ["more polite", "less rude"],
      ["ruder", "less polite"],
    ],
  },
  {
    s: [
      ["is more organized than", "not as chaotic as"],
      ["is more chaotic than", "not as organized as"],
    ],
    q: [
      ["more organized", "less chaotic"],
      ["more chaotic", "less organized"],
    ],
  },
  {
    s: [
      ["is more mature than", "not as immature as"],
      ["is more immature than", "not as mature as"],
    ],
    q: [
      ["more mature", "less immature"],
      ["more immature", "less mature"],
    ],
  },
  {
    s: [
      ["is more flexible than", "not as rigid as"],
      ["is more rigid than", "not as flexible as"],
    ],
    q: [
      ["more flexible", "less rigid"],
      ["more rigid", "less flexible"],
    ],
  },
  {
    s: [
      ["is more courageous than", "not as fearful as"],
      ["is more fearful than", "not as courageous as"],
    ],
    q: [
      ["more courageous", "less fearful"],
      ["more fearful", "less courageous"],
    ],
  },
  {
    s: [
      ["is more humble than", "not as arrogant as"],
      ["is more arrogant than", "not as humble as"],
    ],
    q: [
      ["more humble", "less arrogant"],
      ["more arrogant", "less humble"],
    ],
  },
  {
    s: [
      ["is more charismatic than", "not as dull as"],
      ["is duller than", "not as charismatic as"],
    ],
    q: [
      ["more charismatic", "less dull"],
      ["duller", "less charismatic"],
    ],
  },
  {
    s: [
      ["is more dependable than", "not as unreliable as"],
      ["is more unreliable than", "not as dependable as"],
    ],
    q: [
      ["more dependable", "less unreliable"],
      ["more unreliable", "less dependable"],
    ],
  },
  {
    s: [
      ["is more passionate than", "not as indifferent as"],
      ["is more indifferent than", "not as passionate as"],
    ],
    q: [
      ["more passionate", "less indifferent"],
      ["more indifferent", "less passionate"],
    ],
  },
  {
    s: [
      ["is more understanding than", "not as judgmental as"],
      ["is more judgmental than", "not as understanding as"],
    ],
    q: [
      ["more understanding", "less judgmental"],
      ["more judgmental", "less understanding"],
    ],
  },
  {
    s: [
      ["is more tolerant than", "not as intolerant as"],
      ["is more intolerant than", "not as tolerant as"],
    ],
    q: [
      ["more tolerant", "less intolerant"],
      ["more intolerant", "less tolerant"],
    ],
  },
  {
    s: [
      ["is more forgiving than", "not as resentful as"],
      ["is more resentful than", "not as forgiving as"],
    ],
    q: [
      ["more forgiving", "less resentful"],
      ["more resentful", "less forgiving"],
    ],
  },
  {
    s: [
      ["is more energetic than", "not as lethargic as"],
      ["is more lethargic than", "not as energetic as"],
    ],
    q: [
      ["more energetic", "less lethargic"],
      ["more lethargic", "less energetic"],
    ],
  },
  {
    s: [
      ["is more modest than", "not as boastful as"],
      ["is more boastful than", "not as modest as"],
    ],
    q: [
      ["more modest", "less boastful"],
      ["more boastful", "less modest"],
    ],
  },
  {
    s: [
      ["is more reliable than", "not as inconsistent as"],
      ["is more inconsistent than", "not as reliable as"],
    ],
    q: [
      ["more reliable", "less inconsistent"],
      ["more inconsistent", "less reliable"],
    ],
  },
  {
    s: [
      ["is more thoughtful than", "not as thoughtless as"],
      ["is more thoughtless than", "not as thoughtful as"],
    ],
    q: [
      ["more thoughtful", "less thoughtless"],
      ["more thoughtless", "less thoughtful"],
    ],
  },
  {
    s: [
      ["is more sincere than", "not as insincere as"],
      ["is more insincere than", "not as sincere as"],
    ],
    q: [
      ["more sincere", "less insincere"],
      ["more insincere", "less sincere"],
    ],
  },
  {
    s: [
      ["is more proactive than", "not as reactive as"],
      ["is more reactive than", "not as proactive as"],
    ],
    q: [
      ["more proactive", "less reactive"],
      ["more reactive", "less proactive"],
    ],
  },
  {
    s: [
      ["is more determined than", "not as hesitant as"],
      ["is more hesitant than", "not as determined as"],
    ],
    q: [
      ["more determined", "less hesitant"],
      ["more hesitant", "less determined"],
    ],
  },
  {
    s: [
      ["is more genuine than", "not as fake as"],
      ["is faker than", "not as genuine as"],
    ],
    q: [
      ["more genuine", "less fake"],
      ["faker", "less genuine"],
    ],
  },
  {
    s: [
      ["is more enthusiastic than", "not as apathetic as"],
      ["is more apathetic than", "not as enthusiastic as"],
    ],
    q: [
      ["more enthusiastic", "less apathetic"],
      ["more apathetic", "less enthusiastic"],
    ],
  },
  {
    s: [
      ["is more attentive than", "not as distracted as"],
      ["is more distracted than", "not as attentive as"],
    ],
    q: [
      ["more attentive", "less distracted"],
      ["more distracted", "less attentive"],
    ],
  },
  {
    s: [
      ["is more respectful than", "not as disrespectful as"],
      ["is more disrespectful than", "not as respectful as"],
    ],
    q: [
      ["more respectful", "less disrespectful"],
      ["more disrespectful", "less respectful"],
    ],
  },
  {
    s: [
      ["is more approachable than", "not as intimidating as"],
      ["is more intimidating than", "not as approachable as"],
    ],
    q: [
      ["more approachable", "less intimidating"],
      ["more intimidating", "less approachable"],
    ],
  },
  {
    s: [
      ["is more resourceful than", "not as wasteful as"],
      ["is more wasteful than", "not as resourceful as"],
    ],
    q: [
      ["more resourceful", "less wasteful"],
      ["more wasteful", "less resourceful"],
    ],
  },
  {
    s: [
      ["is more persuasive than", "not as unconvincing as"],
      ["is more unconvincing than", "not as persuasive as"],
    ],
    q: [
      ["more persuasive", "less unconvincing"],
      ["more unconvincing", "less persuasive"],
    ],
  },
  {
    s: [
      ["is more spontaneous than", "not as predictable as"],
      ["is more predictable than", "not as spontaneous as"],
    ],
    q: [
      ["more spontaneous", "less predictable"],
      ["more predictable", "less spontaneous"],
    ],
  },
  {
    s: [
      ["is more ambitious than", "not as complacent as"],
      ["is more complacent than", "not as ambitious as"],
    ],
    q: [
      ["more ambitious", "less complacent"],
      ["more complacent", "less ambitious"],
    ],
  },
  {
    s: [
      ["is more diplomatic than", "not as blunt as"],
      ["is blunter than", "not as diplomatic as"],
    ],
    q: [
      ["more diplomatic", "less blunt"],
      ["blunter", "less diplomatic"],
    ],
  },
  {
    s: [
      ["is more loyal than", "not as disloyal as"],
      ["is more disloyal than", "not as loyal as"],
    ],
    q: [
      ["more loyal", "less disloyal"],
      ["more disloyal", "less loyal"],
    ],
  },
  {
    s: [
      ["is more articulate than", "not as inarticulate as"],
      ["is more inarticulate than", "not as articulate as"],
    ],
    q: [
      ["more articulate", "less inarticulate"],
      ["more inarticulate", "less articulate"],
    ],
  },
  {
    s: [
      ["is more vigilant than", "not as oblivious as"],
      ["is more oblivious than", "not as vigilant as"],
    ],
    q: [
      ["more vigilant", "less oblivious"],
      ["more oblivious", "less vigilant"],
    ],
  },
  {
    s: [
      ["is more prudent than", "not as reckless as"],
      ["is more reckless than", "not as prudent as"],
    ],
    q: [
      ["more prudent", "less reckless"],
      ["more reckless", "less prudent"],
    ],
  },
  {
    s: [
      ["is more cooperative than", "not as uncooperative as"],
      ["is more uncooperative than", "not as cooperative as"],
    ],
    q: [
      ["more cooperative", "less uncooperative"],
      ["more uncooperative", "less cooperative"],
    ],
  },
  {
    s: [
      ["is more diligent than", "not as negligent as"],
      ["is more negligent than", "not as diligent as"],
    ],
    q: [
      ["more diligent", "less negligent"],
      ["more negligent", "less diligent"],
    ],
  },
  {
    s: [
      ["is more affectionate than", "not as cold as"],
      ["is colder than", "not as affectionate as"],
    ],
    q: [
      ["more affectionate", "less cold"],
      ["colder", "less affectionate"],
    ],
  },
  {
    s: [
      ["is more trustworthy than", "not as untrustworthy as"],
      ["is more untrustworthy than", "not as trustworthy as"],
    ],
    q: [
      ["more trustworthy", "less untrustworthy"],
      ["more untrustworthy", "less trustworthy"],
    ],
  },
  {
    s: [
      ["is more sensible than", "not as irrational as"],
      ["is more irrational than", "not as sensible as"],
    ],
    q: [
      ["more sensible", "less irrational"],
      ["more irrational", "less sensible"],
    ],
  },
];

export default {
  names,
  comparisons,
  question: "Who is",
};
