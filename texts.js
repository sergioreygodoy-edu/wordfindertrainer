/* =====================================================================
   HOW TO ADD A NEW TEXT (no coding needed)
   ---------------------------------------------------------------------
   1. Copy a whole block from "{" to "}," (including the final comma).
   2. Paste it right after the line "const EXERCISES_DATA = [".
      Texts at the TOP of the list appear FIRST for students.
   3. Change the id, title, paragraphs and questions.
        - "id" must be unique, lowercase, no spaces (e.g. "text-3").
          Direct link for students: index.html?text=text-3
        - "answers" must be copied EXACTLY from the text.
          Add several if more than one is acceptable.
        - "paragraphHint" is the paragraph number (1, 2, 3...).
   4. Check that every line inside { } ends with a comma, and that
      every quote " is closed. A missing comma is the #1 mistake!
   ===================================================================== */

const EXERCISES_DATA = [
  {
    id: "digital-minimalism",
    title: "The Rise of Digital Minimalism",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Over the past decade, smartphones have become so deeply woven into daily life that many people feel anxious without them. Notifications arrive constantly, and the endless scroll of social media is designed to keep users hooked for hours. It is hardly surprising that a growing number of individuals are now questioning how much time they really want to spend online.",
      "Digital minimalism is a philosophy that encourages people to cut down on technology use and to focus on tools that genuinely add value to their lives. Followers of this approach often delete apps, switch off alerts and set aside fixed periods of the day for checking email. Some even decide to give up their smartphones altogether in favour of basic phones.",
      "Critics argue that the movement is unrealistic, since many jobs and friendships now depend on being permanently connected. However, supporters point out that the aim is not to reject technology but to take back control over it. Many report that, after a few weeks, they feel calmer, sleep better and are able to concentrate on demanding tasks without distractions.",
      "Experts warn that there is no one-size-fits-all solution. What works for a freelance writer may be impossible for a nurse on call. Nevertheless, even small changes, such as leaving the phone in another room during meals, can bring noticeable benefits."
    ],
    questions: [
      {
        id: 1,
        definition: "to stop using or having something that you used to have",
        answers: ["give up"],
        wordCount: 2,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Renunciar a / dejar». El clue empieza con «to» + verbo, así que la respuesta es un infinitivo sin «to»: give up."
      },
      {
        id: 2,
        definition: "to use or do less of something",
        answers: ["cut down"],
        wordCount: 2,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Reducir». Phrasal verb en infinitivo (aparece tras «to» en el texto: «cut down on»). Se copian solo las dos palabras que piden."
      },
      {
        id: 3,
        definition: "unable to stop using or doing something; addicted",
        answers: ["hooked"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Enganchado». Es un adjetivo (participio usado como adjetivo) que describe a los usuarios: keep users hooked."
      },
      {
        id: 4,
        definition: "to keep or reserve something for a particular purpose",
        answers: ["set aside"],
        wordCount: 2,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Reservar / apartar». En el texto aparece en forma base (sujeto plural): set aside. Coincide con el infinitivo del clue."
      },
      {
        id: 5,
        definition: "to get something again that you had lost",
        answers: ["take back"],
        wordCount: 2,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Recuperar». Infinitivo tras «to» en el texto: «to take back control». El clue pide infinitivo, no «took back» ni «taking back»."
      },
      {
        id: 6,
        definition: "needing a lot of effort, skill or attention",
        answers: ["demanding"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Exigente / que requiere mucho esfuerzo». Adjetivo que va delante del sustantivo «tasks»: demanding tasks."
      }
    ]
  },
  {
    id: "green-cities",
    title: "Why Cities Are Going Green",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Urban planners around the world are rethinking how cities should look. Instead of concrete and traffic jams, many councils now dream of tree-lined streets, rooftop gardens and pedestrian zones. The idea has gained momentum as summers become hotter and air pollution reaches alarming levels.",
      "Research shows that green spaces do much more than improve the scenery. Trees provide shade, absorb carbon dioxide and reduce the so-called heat island effect, which makes city centres several degrees warmer than the surrounding countryside. Parks also give residents a place to relax, which has been linked to lower stress levels.",
      "Of course, turning these plans into reality is far from simple. Land in the centre of a city is extremely expensive, and local businesses sometimes worry that banning cars will drive customers away. Moreover, wealthier neighbourhoods tend to benefit first, leaving poorer districts behind.",
      "Despite these obstacles, cities such as Barcelona and Paris have carried out ambitious projects that have won the approval of most citizens. Their experience suggests that, with careful planning and public support, greener cities are well within reach."
    ],
    questions: [
      {
        id: 1,
        definition: "completed or performed a plan, project or task",
        answers: ["carried out"],
        wordCount: 2,
        posHint: "Verb (past participle)",
        paragraphHint: 4,
        explanation: "«Llevado a cabo». Participio pasado tras «have» (present perfect): have carried out. El clue está en pasado, así que no vale «carry out»."
      },
      {
        id: 2,
        definition: "causing worry or fear because something is serious",
        answers: ["alarming"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Alarmante». Adjetivo en -ing que describe «levels»: alarming levels."
      },
      {
        id: 3,
        definition: "the natural features of a place, such as trees and hills, seen as a view",
        answers: ["scenery"],
        wordCount: 1,
        posHint: "Noun (uncountable)",
        paragraphHint: 2,
        explanation: "«Paisaje». Sustantivo incontable (no tiene plural): improve the scenery."
      },
      {
        id: 4,
        definition: "to take in a liquid, gas or other substance",
        answers: ["absorb"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Absorber». En el texto va en forma base porque el sujeto es plural (Trees ... absorb), igual que el infinitivo del clue."
      },
      {
        id: 5,
        definition: "officially forbidding something",
        answers: ["banning"],
        wordCount: 1,
        posHint: "Verb (-ing form)",
        paragraphHint: 3,
        explanation: "«Prohibir (prohibiendo)». Forma -ing usada como sujeto de la oración: «banning cars will...». El clue en -ing exige gerundio."
      },
      {
        id: 6,
        definition: "possible to achieve",
        answers: ["within reach"],
        wordCount: 2,
        posHint: "Prepositional phrase",
        paragraphHint: 4,
        explanation: "«Al alcance». Expresión formada por preposición + sustantivo; en el texto: «are well within reach»."
      }
    ]
  },
   {
    id: "dollar-princesses",
    title: "Dollar Princesses",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "During the late 1800s, a period also known as The Gilded Age, the US experienced rapid economic growth following the Civil War. Although some American families became insanely wealthy, they still considered themselves \"commoners\", lacking the exquisite titles of European aristocracy, such as Dukes, Barons, and the like. This became unacceptable to many of them who wanted an aristocratic identity to accompany their newfound fortunes.",
      "Meanwhile, British noblemen represented \"old world charm\" on the other side of the Atlantic. They were sophisticated, cultured, and aristocratic, with noble titles passed down through their family legacies. However, they were desperate for cash due to economic pressures mostly caused by rural populations moving to the cities and the costly maintenance of their aging mansions.",
      "The answer to the problems of the American millionaires and the British aristocracy can be summed up in two words: dollar princesses. Dollar Princess was a term referring to an American heiress, a woman from a newly wealthy family. The fathers of these \"princesses\" believed that a title would provide a shortcut to social acceptance. Since the American Constitution forbade the government from giving out titles of nobility, they \"sold\" their daughters to British aristocrats in exchange for titles.",
      "In a short time, more than $25 billion was sent to Britain, rejuvenating dying aristocratic families and boosting the European economy. If these marriages seem like cold, hard contractual negotiations, it's because they were. Very often, the future husbands were complete strangers to the young heiresses, who led hopeless and miserable lives with no support.",
      "Once in Britain, most dollar princesses found their majestic homes terribly dark and cold, as they were in desperate need of repair. Soon, the new wives remodeled their homes, but they were often judged, and even mocked, for doing so. To make matters worse, they were marginalized by high society for their non-aristocratic roots.",
      "In 1880, railway heiress Frances Ellen Work married the future Baron Fermoy. Like many dollar-princess matches, it was an unhappy one. The baron blew Frances's $2.5 million fortune on gambling, and the couple divorced in 1891. Frances's story might suggest that dollar princesses were but an anecdote in the history of Britain. However, just over a century after she traded her money for aristocracy, her great-granddaughter Diana Spencer became the Princess of Wales and later, the mother of Prince William, now first in line to the British throne."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"origin\"",
        answers: ["roots"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 5,
        explanation: "«Raíces / orígenes». Sustantivo en plural que aparece al final del párrafo: «for their non-aristocratic roots»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"ridicule\"",
        answers: ["mocked"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 5,
        explanation: "«Burlarse de / ridiculizar». Aparece en voz pasiva en el texto: «they were often judged, and even mocked». Se copia exactamente como figura en el texto."
      },
      {
        id: 3,
        definition: "WORD MEANING: change the structure or form of something, especially a building.",
        answers: ["remodeled"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 5,
        explanation: "«Remodelar / reformar». Verbo en pasado simple (ortografía americana en el texto): «the new wives remodeled their homes»."
      },
      {
        id: 4,
        definition: "WORD MEANING: the activity of betting money in a game.",
        answers: ["gambling"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 6,
        explanation: "«Juego / apuestas». Sustantivo (gerundio sustantivado) que aparece tras la preposición «on»: «blew Frances's $2.5 million fortune on gambling»."
      }
    ]
  },
   {
    id: "forgotten-habit-two-sleeps",
    title: "The Forgotten Habit of Two Sleeps",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "For millennia, people slept in two shifts between nightfall and dawn. But why did this habit disappear?",
      "On 13 April 1699, in northern England, nine-year-old Jane Rowth and her mother woke up from their first sleep of the evening, just before two men came to their window. Mrs. Rowth whispered to Jane to stay quiet and promised to return in the morning, but she never came back; she was later found murdered. This story struck historian Roger Ekirch when he discovered Jane's testimony in the judicial archives in the early 1990s, where she casually referenced her \"first sleep.\"",
      "Intrigued, Ekirch researched the phenomenon of biphasic sleep, finding that it was widely practiced throughout the preindustrial world. References to first and second sleeps appeared in various texts, including Chaucer's The Canterbury Tales and works by notable figures such as Plutarch and Virgil. The habit was not limited to England; it appeared in cultures across Africa, South America, and Asia. The system of two sleeps was around for centuries, with the first mention dating back to the 8th century BC in Homer's Odyssey. Evidence of biphasic sleep can be found throughout history. For example, Christian monks adopted it for prayers in the 6th century.",
      "In the 17th century, a typical night involved going to bed from 9:00 to 11:00 pm, with people sleeping in shared spaces. Then, they would naturally wake up for a period known as the watch, which lasted until about 1:00 am. The watch was used for various activities, including household chores, socializing, and even sexual intimacy. This interval was also often a time for reflection, prayer, or simply chatting with bed companions.",
      "Ekirch's research reached a crucial moment in 1995 when he read about a sleep experiment by Thomas Wehr. The study involved men who, after weeks of limited light exposure, reverted to biphasic sleep, confirming Ekirch's hypothesis about the biological basis for this practice. More recent studies, including one in Madagascar, found that certain communities still follow biphasic sleep patterns.",
      "The shift away from this natural rhythm began with the Industrial Revolution, which introduced artificial lighting and altered diurnal rhythms, leading to the consolidation of sleep into a single uninterrupted period. Although we may have lost the social and philosophical aspects of biphasic sleep, modern conditions provide a different but arguably healthier sleeping experience."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"murmur\"",
        answers: ["whispered"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 2,
        explanation: "«Susurrar / murmurar». Aparece en pasado simple en el texto: «Mrs. Rowth whispered to Jane». Se copia tal cual figura."
      },
      {
        id: 2,
        definition: "SYNONYM for \"mate\"",
        answers: ["companions"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Compañeros». Sustantivo en plural al final del párrafo: «chatting with bed companions»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a formal statement or account given as evidence to support a fact or claim.",
        answers: ["testimony"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Testimonio / declaración». Sustantivo que aparece en el contexto judicial: «when he discovered Jane's testimony in the judicial archives»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to engage in informal conversation, typically in a relaxed or friendly manner.",
        answers: ["chatting"],
        wordCount: 1,
        posHint: "Verb (gerund)",
        paragraphHint: 4,
        explanation: "«Charlar». Aparece en gerundio en el texto: «or simply chatting with bed companions»."
      }
    ]
  },
  {
    id: "conspiracy-theories",
    title: "Conspiracy Theories",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Conspiracy theories have existed throughout history, with some people more inclined to believe in them than others. A conspiracy theory is defined as an explanation that rejects the official narrative of an event, instead attributing it to a covert group or organization carrying out a secret plot. Since these theories often center on the idea that powerful groups are hiding their actions from the public, they can be extremely difficult to disprove. Conspiracy theorists may even see anyone who tries to refute their theory as part of the conspiracy themselves.",
      "The success of conspiracy theories largely derives from the exploitation of fundamental aspects of the human mind, such as trying to make sense of the world and connect with other people. Their explanations about the world create a sense of security. However, these theories are false and can range from harmless rumors to, very frequently, dangerous beliefs that can cause people's deaths.",
      "Take the rumors surrounding the 1969 moon landing, for example. Some people believe that humanity never actually went to the Moon, and that the iconic televised moment when Neil Armstrong set foot on the lunar surface never happened. Instead, conspiracy theorists believe the event was filmed on a studio. The theory originated with a former NASA engineer, Bill Kaysing, who published a book claiming the entire mission was fake. Those who believed in and promoted the theory pointed to the immense pressure that NASA faced to fulfill President Kennedy's mandate to reach the Moon by 1970. Over the years, many conspiracy theorists have continued to argue that there is \"evidence\" that the moon landing was fabricated and part of a misinformation campaign. However, scientists have disproved all these claims.",
      "The Salem Witch Trials is one of the most well-known historical examples of how conspiratory theories can have lethal consequences. The trials began in 1692, when a group of women in Salem, Massachusetts, believed other women were demon-possessed and accused them of witchcraft. Soon, people became convinced that their neighbors were witches. The belief wasn't temporary—the trials continued for over a year. The supposed witches were put in front of a judge and jury, and thirty of them were sentenced to hanging. The witch trials serve as a clear example of the immense harm that can be caused by a group of people convinced that a more powerful group is conspiring with evil intentions."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"gossip\"",
        answers: ["rumors"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Rumores / cotilleos». Aparece en plural (ortografía americana) tanto en el párrafo 2 («harmless rumors») como al inicio del párrafo 3 («Take the rumors»)."
      },
      {
        id: 2,
        definition: "SYNONYM for \"whole\"",
        answers: ["entire"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Entero / completo». Adjetivo que modifica a «mission»: «claiming the entire mission was fake»."
      },
      {
        id: 3,
        definition: "WORD MEANING: use of magic or supernatural powers to inflict harm or misfortune on others.",
        answers: ["witchcraft"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 4,
        explanation: "«Brujería». Sustantivo incontable que aparece en el contexto de los juicios de Salem: «accused them of witchcraft»."
      },
      {
        id: 4,
        definition: "WORD MEANING: the top layer of an area of water or land.",
        answers: ["surface"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Superficie». Sustantivo que aparece referido a la Luna: «set foot on the lunar surface»."
      }
    ]
  },
  {
    id: "michelin-stars",
    title: "The Ingenious Story Behind Michelin Stars",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "If you made a reservation at a Michelin-starred restaurant, you might wonder why an elite restaurant guide has the same name as Michelin, a company that makes tires. The roots of what became an incredibly influential ranking system did not begin with the intent of recommending the highest-quality restaurants. Actually, it was a clever publicity campaign now legendary for its success.",
      "The origin of the Michelin Star goes back to the early days of the automobile. French brothers André and Édouard Michelin founded their self-named tire company in 1889. It was a pioneering move considering that there were fewer than 3,000 automobiles in France at the time. Soon the brothers realized that if people drove more, the tires would eventually deteriorate, which would, as a result, increase Michelin's sales. So, much like bloggers do today, they launched the Michelin Guide in 1900 to achieve that goal.",
      "The guide contained information that any motorist would need: a detailed map, a compendium of mechanics and fuel stations, instructions on how to replace a flat tire, and suitable restaurants and hotels to eat and stay while journeying across France. There was nothing quite like that in the market, so it became an instant hit.",
      "In 1926, the Michelins introduced the concept of using a Michelin Star to rank restaurants. Most of this information came from the company's traveling salesmen, who spent much of their time on the roads and were, therefore, highly reliable sources. By the late 1920s, Michelin's restaurant recommendations had become so influential that the brothers started to use undercover reviewers, now known as inspectors, to determine if a restaurant was a fine dining establishment. The ratings put in place in the 1930s stand to this day: one star means the restaurant is \"worth a stop,\" two means it's \"worth taking a side trip,\" and three means it's \"worth a special journey.\"",
      "Any restaurant under consideration will have served multiple inspectors, who decide whether the establishment delivers a consistent experience in terms of product quality, mastery of cooking techniques and the personality of the chef. What's more, a restaurant can lose the stars if it doesn't maintain Michelin Star-worthy standards.",
      "Surprisingly, there's no evidence that the Michelin Guide ever increased tire sales. However, the brothers made Michelin prestigious not only for tires but also for travel and gourmet cuisine."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"trustworthy\"",
        answers: ["reliable"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 4,
        explanation: "«Fiable / de confianza». Adjetivo que describe a las fuentes de información: «highly reliable sources»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"secret\"",
        answers: ["undercover"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 4,
        explanation: "«Encubierto / secreto». Adjetivo que modifica a «reviewers»: «started to use undercover reviewers»."
      },
      {
        id: 3,
        definition: "WORD MEANING: not containing enough air.",
        answers: ["flat"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Pinchado / desinflado». Adjetivo usado en la colocación «a flat tire» (una rueda pinchada)."
      },
      {
        id: 4,
        definition: "WORD MEANING: the features that form an individual's distinctive character.",
        answers: ["personality"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 5,
        explanation: "«Personalidad». Sustantivo que aparece como uno de los criterios de evaluación: «and the personality of the chef»."
      }
    ]
  },
  {
    id: "proper-halloween",
    title: "A Proper Halloween",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "\"What are you going as this Halloween?\" The discussion at home starts in the spring, takes all the summer, and usually settles towards the end of September. This year we have been through John Lennon, a clown, and Pikachu. We have finally settled on Willy Wonka for my son and Snow White for me. As for my daughter, you can bet she will be wearing the same costume she wore last year. In a moment of weakness at an American shopping centre, I had bought her a $40 inflatable costume of a \"dark spirit riding a dinosaur,\" and she loved it. She was really excited at the school's Halloween fair surrounded by kids disguised as sumo wrestlers, aliens, Wednesday Addamses or the occasional inanimate object, a popular subcategory of costume in the US.",
      "This year is the first time in almost two decades that we will be in the UK for Halloween, and most people I talk to seem to suggest that Halloween preparations here are out of control. Current research proves that Halloween spending has tripled since 2013, with an average spend of £25 a person, rising to £43 in London. And while these increases are predominantly pushed by gen Z and millennials, the data suggests that their elders are being brought along to the party behind them.",
      "However, Americans still take Halloween much more seriously than the British. Every year entire streets in our Manhattan neighbourhood are transformed, culminating in the Hollywood-level effects and decorations put into the houses on 69th Street, which annually draws crowds from across the city. As far as I can tell, Britain has not gone this far yet. Most houses aren't decorated, and it's common to see online warnings against knocking on houses without clear signs that the occupants are into Halloween. Also, the costumes in Britain are still based on the conventionally spooky rather than on funny or outrageous images that pop into your head and that you spend weeks trying to make wearable. Shops are another story: In the supermarkets pumpkin spice and similar products can be found everywhere.",
      "My American children have no doubt about it: Halloween in Britain cannot compare yet. When I asked if they thought British Halloween had caught up with its American equivalent, my daughter gave me the same pitying look she used the day she asked me: \"You really don't know what a meme is?\""
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"scary\"",
        answers: ["spooky"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Espeluznante / que da miedo». Adjetivo típico de Halloween que aparece en el texto: «based on the conventionally spooky»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"living\"",
        answers: ["inanimate"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Inanimado / sin vida». Adjetivo opuesto a «living» que modifica a «object»: «the occasional inanimate object»."
      },
      {
        id: 3,
        definition: "WORD MEANING: an idea, image, video or piece of content that spreads very quickly on the Internet.",
        answers: ["meme"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 4,
        explanation: "«Meme». Sustantivo que aparece al final del texto en la pregunta de la hija: «You really don't know what a meme is?»."
      },
      {
        id: 4,
        definition: "WORD MEANING: an entertainer who makes people laugh by behaving in a playful or silly way.",
        answers: ["clown"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Payaso». Sustantivo que aparece en la lista de disfraces barajados: «we have been through John Lennon, a clown, and Pikachu»."
      }
    ]
  },
];
