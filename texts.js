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
   {
    id: "saving-abu-simbel",
    title: "Saving Abu Simbel",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "In the early 1960s, Egypt had to improve agriculture and provide electricity for its increasing population. In order to do so, the country planned to build a huge dam across the Nile River that would flood an area with important archaeological sites. In the eyes of the Egyptian government, the destruction of the treasures, while regrettable, was necessary. Christiane Desroches-Noblecourt, the female chief curator of Egyptian antiquities at the Louvre Museum, appealed to Egyptian officials not to resign themselves to this catastrophic loss of their cultural heritage.",
      "Christiane proposed to them the most difficult archaeological rescue in history—a project of almost unthinkable magnitude and complexity consisting in moving the fragile sandstone temple of Abu Simbel to higher ground. On top of the enormous engineering problems, the project required cooperation among countries at a time of escalating global political tensions. But that didn't stop her.",
      "After months of countless meetings, Christiane eventually won the support of UNESCO and Egypt's Minister of Culture, who persuaded the Egyptian president to approve the rescue plan. This was a major step, but the project was doomed to fail without massive financial help from Western countries, particularly the United States. It was then that an unexpected saviour, Jacqueline Kennedy, appeared on the scene. Thanks to her influence, her husband, President John F. Kennedy, called on US Congress to authorise money to ensure the rescue.",
      "Ironically, the two women who played crucial roles in this landmark rescue apparently had no idea of each other's moves. Both Christiane and Jacqueline had worked behind the scenes. Neither of them ever sought or received public attention for their achievement, caring less about the credit than getting the job done."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"lamentable\"",
        answers: ["regrettable"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Lamentable». Adjetivo que describe la destrucción de los tesoros: «the destruction of the treasures, while regrettable, was necessary»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"gain\"",
        answers: ["loss"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Pérdida». Sustantivo opuesto a «gain» (ganancia): «this catastrophic loss of their cultural heritage»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to make certain, guarantee.",
        answers: ["ensure"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Asegurar / garantizar». Verbo en infinitivo tras «to»: «to authorise money to ensure the rescue»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a person who rescues another person or a thing from danger or harm.",
        answers: ["saviour"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Salvador/a». Sustantivo (con ortografía británica en el texto) referido a Jacqueline Kennedy: «an unexpected saviour»."
      }
    ]
  },
  {
    id: "weak-social-ties",
    title: "The Strength of Weak Social Ties",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "I've been working as a psychotherapist since 1988. Through the years, I've dealt with hundreds of patients who come to my practice because they feel lonely. Many report finding relief in brief, casual encounters. That's the case of Alice, who lived alone for years after a divorce. Her family lived away from her, and she described feeling terribly lonesome, especially during the holidays. One day, I asked her what helped cheer her up. \"I love going to the library and chatting with Maria, the librarian, about historical novels or cozy mysteries. I always leave feeling a warm connection with her.\"",
      "Another patient, Sherry, gets great joy from her Sunday breakfasts at a local diner: \"The manager's so nice. She calls me 'Sweety' and brings me extra whipped cream for my pancakes. I feel uplifted.\"",
      "As for me, when I shop for groceries, I always go to a cashier I've chatted with for years. Our shared kindness and familiarity give me a sense of community. What's more, even those we meet only once can leave a lasting impression. I'll never forget discussing Don Quixote on an airplane with a well-read economics professor.",
      "Relationships like these, generally referred to as \"weak social ties\", have been proved to be just as important to life satisfaction as core or strong ties. When we feel blue or lonely, we tend to turn down social engagements, usually to avoid the imagined embarrassment of being the only sad person in a group. But saying yes, despite the hesitation, offers an opportunity to feel less isolated. Staying mindful of our strong and weak ties allows us to benefit from the comfort and the sense of community they provide."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"awfully\"",
        answers: ["terribly"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 1,
        explanation: "«Terriblemente / enormemente». Adverbio que intensifica al adjetivo «lonesome»: «feeling terribly lonesome»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"determination\"",
        answers: ["hesitation"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 4,
        explanation: "«Vacilación / duda». Sustantivo opuesto a «determination»: «saying yes, despite the hesitation»."
      },
      {
        id: 3,
        definition: "WORD MEANING: someone whose job is to receive or pay out money in a shop.",
        answers: ["cashier"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Cajero/a». Sustantivo que aparece al hablar de hacer la compra: «I always go to a cashier I've chatted with for years»."
      },
      {
        id: 4,
        definition: "WORD MEANING: food and other goods sold in a shop or at a supermarket.",
        answers: ["groceries"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Comestibles / la compra». Sustantivo en plural en la expresión «shop for groceries»."
      }
    ]
  },
  {
    id: "daylight-saving-time",
    title: "Daylight Saving Time",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Spring marks many changes and, for many people around the world, the beginning of Daylight Saving Time (DST). The idea behind the clock shift is to make better use of sunlight.",
      "Benjamin Franklin is often credited as the first to suggest the change in 1784. When he was an American delegate in Paris, he felt he was wasting his Parisian mornings by staying in bed after the sun had come up. He ironically proposed that the French should fire cannons at sunrise to wake up people, so that they would go to bed earlier and use fewer candles at night.",
      "It wasn't until resources became limited during World War I that Germany decided to go ahead with a clock-changing plan, implementing the first DST in 1916. Most of Europe followed their example in a matter of weeks, and the United States did the same in 1918.",
      "Nowadays, DST still has fervent supporters who claim that it helps drive the economy. Conversely, it's often argued that, apart from the legion of missed meetings and sleepy citizens, DST causes adverse effects on our health and safety. Studies reveal that changing clocks brings about an increase in heart attacks and fatal car accidents. DST opponents even question whether there have ever been energy savings at all.",
      "All in all, the time shift is becoming more and more unpopular around the world, since people today are fond of going out after work and it's obviously nicer doing so when it's lighter outside. Recently, a survey showed 80% of Europeans were against DST, and every October the matter is a controversial topic, with people either expressing enthusiasm about sunny mornings or complaining about shorter days."
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"sunset\"",
        answers: ["sunrise"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Amanecer / salida del sol». Sustantivo opuesto a «sunset» (atardecer): «fire cannons at sunrise»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"crash\"",
        answers: ["accidents"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Accidentes / choques». Sustantivo en plural en el texto: «an increase in heart attacks and fatal car accidents»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to shoot ammunition from a weapon.",
        answers: ["fire"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Disparar». Verbo en infinitivo tras el modal «should»: «the French should fire cannons»."
      },
      {
        id: 4,
        definition: "WORD MEANING: in a forward direction, onwards.",
        answers: ["ahead"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 3,
        explanation: "«Adelante». Adverbio que forma parte de la expresión «go ahead with» (seguir adelante con)."
      }
    ]
  },
  {
    id: "juneteenth",
    title: "Juneteenth",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "On June 17th, 2021, President Biden signed into law the bill that established as a national public holiday June 19th, Juneteenth National Independence Day. Despite Juneteenth's storied history, the holiday had largely gone unnoticed by non-Black Americans for long. It was the Black Lives Matter movement that pushed Juneteenth into the national spotlight, following decades of activists' calls for recognition of the landmark occasion.",
      "In 1863, during the American Civil War between the Union and the Confederacy, President Lincoln issued the Emancipation Proclamation, which declared free more than three million slaves living in the Confederate States. More than two years would pass, however, before the news reached African Americans living in Texas. It was not until Union soldiers arrived in Galveston, Texas, on June 19th, 1865 that the town's residents finally learned that slavery had been abolished. The former slaves immediately began to celebrate with prayer, feasting, song and dance.",
      "The following year, on June 19th, the first official Juneteenth celebrations took place in Texas. They included prayer meetings and the singing of spirituals, and celebrants wore new clothes as a way of representing their newfound freedom.",
      "Since African Americans were prohibited from using public facilities, they often held their annual celebration of freedom at their churches or out in rural areas around rivers and streams, which could provide for additional activities such as fishing, horseback riding and barbecues. There were also visits to the cemeteries to reunite the freed and living with their dead and enslaved ancestors.",
      "Having been commemorated for more than 160 years, Juneteenth has now become a date representing African Americans' struggle for freedom and equality, as well as an occasion for family and community celebration."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"ban\"",
        answers: ["prohibited"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 4,
        explanation: "«Prohibir». Aparece en voz pasiva en el texto: «African Americans were prohibited from using public facilities»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"fight\"",
        answers: ["struggle"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 5,
        explanation: "«Lucha». Sustantivo que aparece en el último párrafo: «African Americans' struggle for freedom and equality»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a place used for a particular activity.",
        answers: ["facilities"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Instalaciones». Sustantivo en plural referido a espacios públicos: «using public facilities»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a social gathering where people come together to enjoy grilled food.",
        answers: ["barbecues"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Barbacoas». Sustantivo en plural en la enumeración de actividades: «fishing, horseback riding and barbecues»."
      }
    ]
  },
  {
    id: "30-million-dollar-sandwich",
    title: "The 30-Million-Dollar Sandwich",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "During the sixties, the United States was locked in a race with the Soviet Union for dominance in space. The question became who would get to the Moon first. In March 1965, NASA launched the spaceship Gemini 3 to develop space travel techniques in weightless conditions. It was the first U.S. mission to carry two astronauts—John Young and his crewmate, Gus Grissom.",
      "As the frozen meals that NASA had selected were not exactly appetizing to Young's palate, he slipped a beef sandwich into his pocket just before the spaceship was launched. Two days later at lunchtime, Young shared a bite of his hidden sandwich with Grissom. Suddenly, breadcrumbs started floating around due to the lack of gravity, putting at risk the pieces of equipment that kept the 30-million spacecraft running. Aware of the serious threat, the astronauts opted to put the sandwich away and continued their mission with crumbs floating around the cabin.",
      "Young's special menu didn't cause any harm but it became a bigger issue back on Earth, resulting in an official review to discuss the incident. Young was given an official reprimand, the first ever for a NASA member. He eventually regretted taking the sandwich to space, but he later wrote that he didn't think it was such a big deal. Firstly, because to his knowledge, it wasn't even the first \"illegal\" sandwich but the third. And secondly, he joked, it didn't even have mustard!",
      "While the infamous sandwich is no longer available, a similar one, preserved in acrylic, is on display at the Grissom Memorial Museum. It immortalizes the historic moment when an astronaut dared to eat a beef sandwich in space."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"yummy\"",
        answers: ["appetizing"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 2,
        explanation: "«Apetitoso». Adjetivo (ortografía americana) que describe la comida congelada de la NASA: «were not exactly appetizing»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"conscious\"",
        answers: ["aware"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 2,
        explanation: "«Consciente». Adjetivo que encabeza la oración al final del párrafo: «Aware of the serious threat»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to cause someone or something to be remembered for a very long time.",
        answers: ["immortalizes"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 4,
        explanation: "«Inmortaliza». Verbo en tercera persona del singular del presente simple: «It immortalizes the historic moment»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to say something funny to make people laugh.",
        answers: ["joked"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 3,
        explanation: "«Bromeó». Verbo en pasado simple al final del párrafo: «And secondly, he joked, it didn't even have mustard!»."
      }
    ]
  },
  {
    id: "your-nose-knows",
    title: "Your Nose Knows",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Smell is a powerful sense. Why can a particular smell take us immediately to a vivid moment of our past? Smell and memory are so closely linked because, according to Harvard professor Venkatesh Murthy, \"olfactory signals have direct access to the limbic system—the brain centre of emotion and memory.\" Smell also plays a huge role in taste. When you chew, food molecules \"make their way back to your nasal epithelium, so what you consider flavour is really smell.\" Murthy says you can check this by pinching your nose when eating chocolate. With your nose passageway blocked, you'll just taste sweetness instead of chocolate's distinctive flavour.",
      "History confirms the importance of smell. Hieroglyphics show Ancient Egyptians making perfume as long ago as 3,000 BC. Egyptian priests burnt aromatic resins to sweeten the air in holy ceremonials and burials because they believed that this ritual connected humans with the gods. When those tombs were opened in the 1800s, the perfumes still maintained their original smells. There are also references to perfume in the Bible, and Chinese writings on aromatic products date even further back. So, when was perfumery born? Well, Stone Age humans had fire and could burn fragrant woods, but until archaeologists come across new evidence, we can only guess.",
      "In 16th- and 17th-century Europe, people associated unpleasant smells with disease. Wealthy people used scented things like cosmetics or perfumed gloves in the hope that their pleasant aroma could protect them against infection.",
      "Unsurprisingly, today's perfume industry is a multi-million market. The latest thing: exclusive stores and hotels which have their own signature scents to make a lasting impression on customers through the power of perfume."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"speculate\"",
        answers: ["guess"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Adivinar / suponer». Verbo en infinitivo tras el modal «can»: «we can only guess»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"sacred\"",
        answers: ["holy"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 2,
        explanation: "«Sagrado / santo». Adjetivo que modifica a «ceremonials»: «in holy ceremonials and burials»."
      },
      {
        id: 3,
        definition: "WORD MEANING: seeming like real life because it is very clear or detailed.",
        answers: ["vivid"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Vívido / claro». Adjetivo que describe un recuerdo: «to a vivid moment of our past»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to bite and crush with your teeth.",
        answers: ["chew"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 1,
        explanation: "«Masticar». Verbo en presente simple (forma base): «When you chew, food molecules...»."
      }
    ]
  },
  {
    id: "young-peoples-screen-time",
    title: "Young People's Screen Time",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "As we can attest from firsthand experience, regular TV viewership has been decreasing as streaming services like Netflix are becoming increasingly popular. The amount of time kids and teens spend watching TV has dropped. In 2013, young people spent an average of 3 hours per day in front of the television screen; today, it's an hour and 12 minutes. So, have youth reduced their screen time? Not really. Studies show that they have rather traded the TV screen for their phone and laptop. Now the average youth watches 97 minutes of YouTube and 95 minutes of TikTok per day.",
      "A few years ago, two Oxford researchers captured the media's attention by concluding that screen time was as bad for teen mental health as... potatoes! Their paper even stated that social media had no psychological negative effects. However, most evidence points to the contrary. Two Spanish researchers argued that the Oxford study's conclusions were \"extremely misleading\", after they found that the use of social media was strongly linked to mental health issues, while TV and gaming were only weakly related. Other studies confirmed this and added that the worst effects impacted girls 50% more than boys.",
      "It's time to abandon the idea that screen time doesn't matter for mental health. It does. It's just that some screen time matters more than others. Social media seems the most problematic. For practical purposes, that's good news. Parents, policymakers, and teens themselves don't need to consider giving up technology; instead, they can focus on cutting back on social media time. There are other ways teens can stay in touch with friends virtually, like texting, gaming together or meeting on FaceTime or Zoom."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"change\"",
        answers: ["traded"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 1,
        explanation: "«Cambiar / intercambiar». Participio pasado tras «have»: «they have rather traded the TV screen for their phone»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"audience\"",
        answers: ["viewership"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Audiencia / telespectadores». Sustantivo en la primera oración del texto: «regular TV viewership has been decreasing»."
      },
      {
        id: 3,
        definition: "WORD MEANING: someone responsible for making new rules, laws, etc.",
        answers: ["policymakers"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Legisladores / responsables políticos». Sustantivo compuesto en plural: «Parents, policymakers, and teens themselves»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to send a message from one mobile phone to another.",
        answers: ["texting"],
        wordCount: 1,
        posHint: "Verb (gerund)",
        paragraphHint: 3,
        explanation: "«Enviar mensajes de texto». Aparece en gerundio en el texto: «like texting, gaming together...»."
      }
    ]
  },
  {
    id: "charles-dickens",
    title: "Charles Dickens",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Charles Dickens is one of the greatest writers in English literature. His stories such as Great Expectations and Oliver Twist continue to shape the way in which we understand nineteenth-century England.",
      "Forget the idea that Dickens was always a rich, benevolent gentleman. His family moved around a lot in Dickens's youth, from Portsmouth to Kent, and from there to London. Dickens's father was getting deeper and deeper into debt, and the family were literally running away from their creditors. When he was 12, Dickens was sent to live with a family friend and to work at Warren's shoe polish factory. In his youth, Dickens thought of becoming an actor. However, he fell in love with a woman whose parents were middle-class and disapproved of her association with an aspiring actor—actors being seen as of a low social status at the time.",
      "Once he was a famous writer, Dickens became a well-known philanthropist who committed himself to many charities, particularly focusing on issues of child poverty and education. On the same altruistic note, Dickens was also the editor of magazines that, at popular prices, brought literature to everybody. They featured stories by different writers, established novelists, including himself, and also women, like the first salaried female journalist, Eliza Lynn Linton.",
      "Dickens wrote A Christmas Carol rapidly, taking just six weeks from beginning to end. He was forced to pay half the publication costs himself as his publishers failed to see the value of a Christmas story. Ironically, it's never been out of print since its publication in 1843 and it's been considered one of Dickens's finest literary achievements, as well as an inspiration for numerous films."
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"consent\"",
        answers: ["disapproved"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 2,
        explanation: "«Desaprobar / oponerse». Verbo en pasado simple opuesto a «consent»: «disapproved of her association with an aspiring actor»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"wealth\"",
        answers: ["poverty"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Pobreza». Sustantivo incontable opuesto a «wealth» (riqueza): «issues of child poverty and education»."
      },
      {
        id: 3,
        definition: "WORD MEANING: something done successfully with effort, skill or courage.",
        answers: ["achievements"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Logros». Sustantivo en plural que aparece al final del texto: «one of Dickens's finest literary achievements»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a person to whom money is owed.",
        answers: ["creditors"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Acreedores». Sustantivo en plural relacionado con las deudas del padre: «running away from their creditors»."
      }
    ]
  },
  {
    id: "la-catrina",
    title: "La Catrina",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Mexicans have an exceptional relationship with death and the afterlife because they are quite unique in taking it good-humoredly and passionately. That doesn't mean that Mexicans don't grieve or miss those who have passed away—they just choose to remember them by celebrating their lives and memories. On November 2nd, the Day of the Dead, families gather in cemeteries to feast while they clean tombstones, sing songs, and talk to their ancestors. Parents might even introduce a baby to a grandparent who died before the baby was born.",
      "One of the most recognizable symbols of the Day of the Dead celebrations is La Catrina, a female skeleton wearing a fancy hat. Her striking makeup has become trendy worldwide. The essence of La Catrina's story goes deep into Mexican roots as the Aztecs worshipped Mictecacihuatl, a goddess of death that protected and helped their departed loved ones into the next stages. However, the skull that we see today was created in the early 1900s by José Guadalupe Posada. This cartoonist drew calaveras in a satirical way to urge people to stop pretending to be something that they weren't, for they would all die someday.",
      "Later, famous artist and husband of Frida Kahlo, Diego Rivera, immortalized Posada's Catrina in one of his murals. He painted her wearing sophisticated clothing and an extravagant hat with feathers, thus creating the multicolored look that she's well-known for today. From there, La Catrina became a powerful symbol for the numerous Day of the Dead events. Women use colorful makeup and wear lively outfits evoking the famous skeleton.",
      "Tourists find La Catrina fascinating and many purchase Catrina figurines as souvenirs. La Catrina is definitely a Mexican icon!"
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"predecessor\"",
        answers: ["ancestors"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 1,
        explanation: "«Antepasados». Sustantivo en plural en el primer párrafo: «sing songs, and talk to their ancestors»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"phase\"",
        answers: ["stages"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Etapas / fases». Sustantivo en plural en el texto: «helped their departed loved ones into the next stages»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a hair-like structure that grows on the bodies of birds.",
        answers: ["feathers"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Plumas». Sustantivo en plural que describe el sombrero de La Catrina: «an extravagant hat with feathers»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to give a false appearance.",
        answers: ["pretending"],
        wordCount: 1,
        posHint: "Verb (gerund)",
        paragraphHint: 2,
        explanation: "«Fingir / aparentar». Gerundio tras el verbo «stop»: «to urge people to stop pretending to be something that they weren't»."
      }
    ]
  },
  {
    id: "michael-rockefeller",
    title: "The Disappearance of Michael Rockefeller",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Michael Rockefeller, great-grandson of the founder of the wealthy Rockefeller dynasty, was deeply impressed when his father opened the Museum of Primitive Art in 1960. He decided there and then to devote his life to finding \"primitive\" art—a term no longer used today due to its implications that non-Western cultures are inferior. Within months of the museum launch, Michael went on an expedition trip to New Guinea—ruled by the Netherlands at the time—to collect art from the native Asmat people.",
      "Michael learned on arrival that Asmat warriors took the heads of their enemies in battle and that they practised cannibalism. He was fascinated by these people, who represented such an intriguing violation of the norms of Western society.",
      "When Michael returned to the island one year later, his boat sank. The Rockefellers spent a small fortune supporting the Dutch's search for Michael. Despite all efforts, the search was called off barely two weeks after the boating accident. Michael was never seen again. The official cause of death was filed as drowning, but the news and rumours about it spread like wildfire in tabloids and newspapers.",
      "In 2014, reporter Carl Hoffman revealed in a book that the Netherlands' inquiries into the matter had concluded, shortly after the disappearance, that the Asmat had killed Michael. But why would the Dutch bury those files? According to Hoffman, Michael couldn't have arrived at a worst time: the Netherlands was losing the colony to Indonesia, and the scandal would have exposed their lack of control. So, they denied the murder rumours even to the Rockefellers, who to this day refuse to accept any other version of events than that Michael drowned."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"inauguration\"",
        answers: ["launch"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Lanzamiento / inauguración». Sustantivo referido a la apertura del museo: «Within months of the museum launch»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"dedicate\"",
        answers: ["devote"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 1,
        explanation: "«Dedicar». Verbo en infinitivo tras «to»: «decided there and then to devote his life to finding...»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to govern people or a political unit.",
        answers: ["ruled"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 1,
        explanation: "«Gobernado / regido». Participio pasado en el inciso sobre Nueva Guinea: «ruled by the Netherlands at the time»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a powerful group or family that maintains its position for a considerable time.",
        answers: ["dynasty"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Dinastía». Sustantivo que aparece en la primera línea: «the wealthy Rockefeller dynasty»."
      }
    ]
  },
  {
    id: "ethics-of-true-crime",
    title: "The Ethics of True Crime",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "True crime TV shows have been so popular in the past few years that they have become the object of academic study. Professor of Media Ethics Whitney Phillips claims that the reason for the current success of this genre, as compared to novels and movies, is the reality factor: audiences enjoy feeling engaged in an actual mystery happening before them.",
      "Research has found that white women are the largest demographic group consuming true crime. The explanation is that, since white women have anxiety about potential threats, they turn to true crime to feel better prepared in case anything violent were to happen to them. The fact that the target audience is basically white women determines the profile of typical victims in true crime—white and female. After all, audiences prefer to watch cases they can relate to. Phillips argues that this produces the \"missing white woman syndrome,\" that is, the idea that there's only one type of victim whose story matters. The media reinforce this with many stories and updates about white female victims, while stories about marginalized groups like Indigenous women are rarely shown, if at all. Even white women who are missing or murdered receive little media attention when they're sex workers, because they're perceived as less valuable than \"innocent\" white women.",
      "Another harmful effect resulting from the boom of true crime is the dehumanization of victims when their tragedies become marketable content. As one victim said, \"My trauma's not your entertainment. Awareness is a whole different story.\"",
      "Fortunately, there's an alternative: ethical true crime, which avoids sensationalising the narrative and honours victims. Further still, it seeks a way to help their case and alert to social inequalities."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"seldom\"",
        answers: ["rarely"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 2,
        explanation: "«Rara vez». Adverbio de frecuencia sinónimo de «seldom»: «are rarely shown, if at all»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"worthy\"",
        answers: ["valuable"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 2,
        explanation: "«Valioso / digno». Adjetivo que aparece al final del párrafo: «perceived as less valuable than \"innocent\" white women»."
      },
      {
        id: 3,
        definition: "WORD MEANING: the most recent news or information about something.",
        answers: ["updates"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Actualizaciones / novedades». Sustantivo en plural: «many stories and updates about white female victims»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a danger that something unpleasant might happen.",
        answers: ["threats"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Amenazas». Sustantivo en plural que aparece tras «potential»: «anxiety about potential threats»."
      }
    ]
  },
  {
    id: "pomfret-vermont-viral",
    title: "Pomfret, Vermont: The Town That Went Viral",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "With a mere handful of businesses, Pomfret, located in Vermont (US), is generally a quiet place. But in autumn, as \"leaf-peepers\" from everywhere descend on the region's hills to witness its multicolored leaves, all that changes.",
      "Ever since images of Sleepy Hollow Farm, a private property set on a rustic road, began going viral on social media a few years ago, locals say that things have gotten out of hand. A quick look on Instagram reveals thousands of images of the farm's winding road lined by trees lit up in autumnal reds and pumpkin oranges. It's no wonder then that this unlikely farm has become known as one of \"the most photographed places in the state.\"",
      "Unfortunately, social media influencers regularly climb over gates covered with \"No Trespassing\" signs, get their \"city cars\" stuck on the narrow country road, and leave bodily waste by the roadside. \"It's a hotel and amusement park—bring all your friends,\" laughed out an Instagrammer with 20,000 followers.",
      "\"It's a beautiful spot. It's too bad that it's been ruined for everybody,\" said Deborah Goodwin, a local councilwoman. \"Tour buses are constantly unloading crowds of people out there. We can't have this anymore.\" In 2022, town officials finally voted to close the roads leading to the farm to non-residents during the autumn season, which annoyed the travelers who had come hoping to capture a perfect autumnal photo.",
      "\"We enjoy having tourists. It's a big part of the Vermont economy, and we want people to enjoy its bucolic beauty and visit the shops,\" Goodwin says. Her call is for responsible tourism that enjoys Pomfret's beauty without ruining what makes it special—its peaceful charm."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"spoil\"",
        answers: ["ruined", "ruining"],
        wordCount: 1,
        posHint: "Verb (past participle / gerund)",
        paragraphHint: 4,
        explanation: "«Arruinar / estropear». Aparece en participio en el párrafo 4 («it's been ruined for everybody») y en gerundio en el párrafo 5 («without ruining what makes it special»)."
      },
      {
        id: 2,
        definition: "ANTONYM for \"wide\"",
        answers: ["narrow"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Estrecho». Adjetivo opuesto a «wide» (ancho): «stuck on the narrow country road»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to move upwards, especially by using the hands and feet.",
        answers: ["climb"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 3,
        explanation: "«Trepar / escalar». Verbo en forma base (presente simple): «influencers regularly climb over gates»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a large gathering of people.",
        answers: ["crowds"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 4,
        explanation: "«Multitudes». Sustantivo en plural en el texto: «Tour buses are constantly unloading crowds of people»."
      }
    ]
  },
  {
    id: "iceland-elves",
    title: "Iceland Elves: Real or Imaginary?",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Iceland is filled with legends and all sorts of mythical creatures. None of them are better known than Iceland elves. They are present everywhere in the local culture. In Iceland, you leave food outside for the elves during Christmas. You also keep the house neat and tidy. This way, the elves have enough space to dance around while the family living in the house attends the Christmas church service. In addition, the elves are on their annual moving day on New Year's Eve, so people light candles to help them on their way to their new residence.",
      "Mentions of Icelandic elves can be found in Viking poems dating back to 1,000 years ago. Today elves are believed to be real by 62% of Icelanders, according to official studies by the University of Iceland. You only have to stop to have a chat with any Iceland road worker to hear many \"true\" stories. One of these legendary testimonies comes straight out of the 1930s. Attempts were made to build a road through a rock known as Elf Hill in the south of Kopavogur. Despite numerous efforts, all attempts were pointless due to unexplained occurrences. The project had to be abandoned and workers have refused to go anywhere near the site ever since. Also, in 2013 Iceland's supreme court stopped a highway project near Reykjavik because it would disturb a protected area where there was an elf \"church\". Roadwork could only start again once the church was safely relocated.",
      "Elves have even inspired an actual ecological movement in Iceland. There are organizations and protesters actively campaigning against the development of certain areas of the island because they are supposedly inhabited by elves."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"type\"",
        answers: ["sorts"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 1,
        explanation: "«Tipos / clases». Sustantivo en plural en la primera frase: «all sorts of mythical creatures»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"conversation\"",
        answers: ["chat"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Charla / conversación». Sustantivo en la expresión «have a chat with»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to organize a series of activities to achieve a goal.",
        answers: ["campaigning"],
        wordCount: 1,
        posHint: "Verb (gerund)",
        paragraphHint: 3,
        explanation: "«Hacer campaña». Verbo en gerundio en el último párrafo: «protesters actively campaigning against»."
      },
      {
        id: 4,
        definition: "WORD MEANING: an important road that joins cities or towns together.",
        answers: ["highway"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Autopista / carretera principal». Sustantivo que aparece modificando a «project»: «stopped a highway project near Reykjavik»."
      }
    ]
  },
  {
    id: "please-dont-stop-the-music",
    title: "Please Don't Stop the Music",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "As a child, Steve Howgego loved to sing. His favourite teacher at primary school told him he did it beautifully. He once overheard his father say: \"We should send him to Durham Chorister School.\" His mother said he sang awfully and didn't let him go. It took Steve years to find his true voice. Now, at 66, Steve makes a living off music despite having received no music education as a kid.",
      "In his youth, Steve dropped out of his degree course and got a job as a trainee computer programmer. He got promoted and moved to France, where he worked for Citicorp and bought himself some singing lessons. But he eventually lost interest in programming and quit.",
      "Back in London, someone suggested Howgego should try gospel singing. At 33, he joined London Community Gospel Choir. Singing with other singers helped him boost his confidence and vocal ability. But when his sister, to whom he was close, died at the start of the century, Howgego had a breakdown. His voice left him for five years.",
      "His second turning point came during therapy sessions, where he made a friend who also sang. His friend suggested Steve should try singing in the streets—opera seemed the best option. Steve was unemployed and struggling to pay his mortgage. He thought, \"Why don't I have a go?\" Donations from passers-by enabled him to keep his home. But it was their appreciation that reaffirmed him and opened up other possibilities. \"What I have found by trusting in my abilities is that one positive thing leads to another,\" Steve says. At present, he collaborates with other creatives and is working on a play about his experiences."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"apprentice\"",
        answers: ["trainee"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Aprendiz / becario». Sustantivo que aparece en el segundo párrafo: «got a job as a trainee computer programmer»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"jobless\"",
        answers: ["unemployed"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 4,
        explanation: "«Desempleado / en paro». Adjetivo sinónimo de «jobless»: «Steve was unemployed and struggling to pay his mortgage»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a bank loan for the purchase of a house.",
        answers: ["mortgage"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 4,
        explanation: "«Hipoteca». Sustantivo que aparece en el último párrafo: «struggling to pay his mortgage»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to resign from a job voluntarily.",
        answers: ["quit"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 2,
        explanation: "«Dimitir / dejar un trabajo». Verbo irregular (pasado simple igual al infinitivo): «lost interest in programming and quit»."
      }
    ]
  },
   {
    id: "anime-global-pop-culture-phenomenon",
    title: "Anime: A Global Pop Culture Phenomenon",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "The origin of anime can be traced back to the beginning of the 20th century. However, it wasn't until 1958 that Hiroshi Okawa, president of the Toei Doga production company, decided to turn it into the \"Disney of the East.\" His efforts were worth it, and anime gradually became a global cultural phenomenon. In order to understand how significant this phenomenon is we can travel back to 2004, when Japan sent trucks to Iraq to help reconstruction. The Japanese feared that the local population would not recognize their flag stamped on the trucks' sides. To avoid this, they decorated the trucks with posters of Captain Tsubasa, a popular anime character.",
      "One reason why anime gained such popularity internationally in the 90s was its distinctive style, easily recognizable by its simplified animation and its characters' disproportionately big eyes. The animation style was basic because reducing the number of frames helped to save money. The second trait, the huge eyes, responds to multiple factors. Big eyes make it easier for animators to express emotions powerfully by concentrating on just one body part. At the same time, audiences are positively drawn to big round eyes, which make characters look innocent and young. Japanese culture also plays a part in anime's expressive eyes, since the polite thing in Japan is not to show emotions openly through body language but through subtle eye expressions.",
      "Anime has stayed hugely successful worldwide because it appeals to a wide range of people of all ages and nationalities who keep loyal to their cartoons for years. The emotional soundtracks and eye-catching colours keep hooking fans today."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"firm\"",
        answers: ["company"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Empresa / compañía». Sustantivo que aparece en el primer párrafo: «president of the Toei Doga production company»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"lose\"",
        answers: ["save", "gained"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Ahorrar / ganar». Verbo en infinitivo opuesto a «lose» (perder dinero): «helped to save money» (también aparece «gained» al inicio del mismo párrafo)."
      },
      {
        id: 3,
        definition: "WORD MEANING: a piece of cloth with distinctive colors used as an emblem",
        answers: ["flag"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Bandera». Sustantivo que aparece en el primer párrafo: «would not recognize their flag stamped on the trucks' sides»."
      },
      {
        id: 4,
        definition: "WORD MEANING: the music that is recorded for a film",
        answers: ["soundtracks"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Bandas sonoras». Sustantivo en plural en la última oración del texto: «The emotional soundtracks and eye-catching colours»."
      }
    ]
  },
  {
    id: "this-job-is-a-piece-of-cake",
    title: "This Job Is a Piece of Cake!",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "It turns out you might be able to eat candy for a living and make thousands in the process. Canada's Candy Funhouse is hiring a chief candy officer, according to a recent job posting.",
      "\"Do you love candy and chocolate? Are you passionate about sweet treats and exploring unreleased and existing products? If so, this is the perfect position for you!\" the description reads. The Ontario-based company says the position pays 100,000 Canadian dollars annually. The job can be remote or based in its Canada or New Jersey offices.",
      "The chief candy officer will serve as head taste tester and try over 3,500 products monthly. Besides eating about 113 pieces of candy a day, the chief candy officer will lead the company's candy strategy, run candy board meetings and have a say in which products Candy Funhouse will release into the market. Applicants can be as young as 5 years old and must reside in North America.",
      "\"All you need is a passion for candy and pop culture, and obviously a sweet tooth!\" According to the job description, the chief candy officer will also undergo \"extensive palate training,\" which will be provided by the company. No previous experience is necessary. So far, nearly 6,500 people have applied for the job. Inquiries on the job are so numerous that the company has admitted that its usual response time is delayed.",
      "The position no doubt involves excessive consumption of sugar, which the World Health Organization recommends limiting to 10% of the daily calorie intake. Too much sugar can increase the risk of Type-2 diabetes and heart disease. At least, the job posting specifies that the position comes with an \"extensive dental plan.\""
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"fire\"",
        answers: ["hiring"],
        wordCount: 1,
        posHint: "Verb (-ing form)",
        paragraphHint: 1,
        explanation: "«Contratar». Verbo opuesto a «fire» (despedir) en forma continua: «Canada's Candy Funhouse is hiring a chief candy officer»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"launch\"",
        answers: ["release"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Lanzar / sacar al mercado». Verbo en infinitivo tras el auxiliar «will»: «which products Candy Funhouse will release into the market»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a plan of action intended to accomplish a specific goal",
        answers: ["strategy"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Estrategia». Sustantivo que aparece en el tercer párrafo: «will lead the company's candy strategy»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a situation involving exposure to danger",
        answers: ["risk"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 5,
        explanation: "«Riesgo». Sustantivo en el último párrafo: «Too much sugar can increase the risk of Type-2 diabetes»."
      }
    ]
  },
  {
    id: "history-of-tattoos",
    title: "The History of Tattoos",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "In 1991 two Germans hiking in the Alps found by chance what they initially believed to be a modern corpse frozen in the ice. Later, authorities discovered that it was anything but modern. The mummy, nicknamed Ötzi after the valley where it lay, had survived in the ice for 5,300 years. Mystery surrounds the exact circumstances of Ötzi's death although data suggest a violent end. However, this isn't the only secret Ötzi hides. He has over fifty lines and crosses tattooed onto his body—the earliest known evidence of tattooing in the world. The locations of the markings are consistent with traditional Chinese acupuncture points. So, Ötzi's tattoos probably played a therapeutic role.",
      "Before Ötzi, the first conclusive evidence of tattoos came from a handful of Egyptian mummies dating back to the construction of the great pyramids, over 4,000 years ago. Historical texts reveal that tattooing has been practiced by almost every human culture. For instance, the ancient Greeks used tattoos to communicate among spies. Later, the Romans marked criminals and slaves with tattoos. During the crusades, Europeans tattooed a cross on their hands or arms to show that they had participated in the war and indicate their desire for a Christian burial.",
      "The popularity of tattoos has risen and fallen over time. Currently, the practice is booming. The reasons for getting tattoos vary: religion, status or artistic expression. Now, a new one can be added: a webpage designer recently sold his forehead as advertising space on eBay. He got $37,000 in return for having a pharmaceutical brand logo tattooed for one month. If Ötzi weren't in deep freeze at a museum, I'm sure he'd be rolling in his grave."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"differ\"",
        answers: ["vary"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 3,
        explanation: "«Variar / diferir». Verbo en presente simple: «The reasons for getting tattoos vary: religion, status or artistic expression»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"wish\"",
        answers: ["desire"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Deseo». Sustantivo al final del segundo párrafo: «indicate their desire for a Christian burial»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a long way down from the surface",
        answers: ["deep"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Profundo». Adjetivo que aparece en la última oración del texto: «If Ötzi weren't in deep freeze at a museum»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a trademark or distinctive name identifying a product or company",
        answers: ["brand"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Marca». Sustantivo que modifica a «logo»: «having a pharmaceutical brand logo tattooed»."
      }
    ]
  },
  {
    id: "all-uk-number-1-hits",
    title: "All UK Number 1 Hits",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "The UK singles chart, a weekly countdown of the most popular songs on the radio, has been a constant in our lives for seventy years. But to Dave Watson, it's a lifestyle. Watson has been collecting copies of UK Number 1 hits since the late 1980s; today, he owns all 1,404 UK Number 1 singles, reaching back to the birth of the charts in 1952. He believes it's the only complete collection of its kind.",
      "Watson's devotion to music charts began more than thirty years ago. Starting a collection made sense: his mother had worked in a record store, and he enjoyed collecting things. When he started his mission in 1988, the charts had already seen 605 Number 1 singles. With the single \"Don't Turn Around\" under his arm, he decided to find the previous 604 releases.",
      "In his treasure hunt, Watson used to get trains to London to visit music fairs and second-hand record shops. He also responded to selling adverts in Time Out and Loot magazines and wrote to record dealers. \"I spent endless hours searching through dealers' stock,\" he says. \"I had a handwritten list that I photocopied and took around with me to spread the word. Some sellers answered back saying which singles they had and how much they would be.\" His first wish list was already several pages long. Then he started crossing titles out and he told himself, \"Well, I have a chance of doing all this.\"",
      "Discovering eBay around the millennium was a turning point. With a mouse click, Watson found there the last ten singles he needed. With the 1953 single \"Doggy in the Window\" Watson brought the collection up to date."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"used\"",
        answers: ["second-hand"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«De segunda mano / usado». Adjetivo compuesto con guion que aparece en el texto: «visit music fairs and second-hand record shops»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"possibility\"",
        answers: ["chance"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Oportunidad / posibilidad». Sustantivo al final del tercer párrafo: «Well, I have a chance of doing all this»."
      },
      {
        id: 3,
        definition: "WORD MEANING: an event where people show and sell goods",
        answers: ["fairs"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Ferias / mercadillos». Sustantivo en plural: «visit music fairs and second-hand record shops»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a supply of something for use or sale",
        answers: ["stock"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Existencias / mercancía». Sustantivo incontable en el texto: «searching through dealers' stock»."
      }
    ]
  },
  {
    id: "something-borrowed-something-blue",
    title: "Something Borrowed, Something Blue...",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Last August, a 911 operator came to the rescue of a desperate bride, but not in the way you would expect. A bride named Amanda had her wedding dress stolen on the morning of her nuptials! She had been packing her car when, upon returning from a quick trip to the house, she discovered the dress had gone missing. Panicking, she called 911 to report the theft.",
      "Candice, the 911 dispatcher answering the call, couldn't help but sympathize with Amanda. She said that all she kept thinking was \"I have a wedding gown. Maybe she could wear that. Here we go, let's see if she wants it.\"",
      "On an impulse, Candice asked her supervisor if she could offer the bride her dress. Of course, she had no idea if the dress would fit, much less if Amanda would even want to give it a try. Luckily, her supervisor agreed and let her do it. Though grateful for the offer, the traumatized bride asked to see a picture of the gown first. Candice completely understood. She texted the police officer on the scene a picture of the gown and, thankfully, Amanda loved it.",
      "The operator then asked her husband to pick up the dress, which was in her parents' attic. After overcoming a series of obstacles, including discovering that he had taken the wrong keys, Candice's husband successfully delivered the dress to the bride in time, and the wedding went off without any further incidents.",
      "Some days later, newlywed Amanda surprised Candice at her office to return her dress. She wanted to say a personal and heartfelt thank you to the woman that she believes saved her wedding."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"perhaps\"",
        answers: ["maybe"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 2,
        explanation: "«Quizás / tal vez». Adverbio sinónimo de «perhaps»: «Maybe she could wear that»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"sincere\"",
        answers: ["heartfelt"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 5,
        explanation: "«Sincero / sentido». Adjetivo que aparece en el último párrafo: «say a personal and heartfelt thank you»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to be of the right size",
        answers: ["fit"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Quedar bien / servir de talla». Verbo en infinitivo tras el modal «would»: «she had no idea if the dress would fit»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to understand and care about someone's problem",
        answers: ["sympathize"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 2,
        explanation: "«Compadecerse / empatizar». Verbo en infinitivo en el segundo párrafo: «couldn't help but sympathize with Amanda»."
      }
    ]
  },
  {
    id: "sanas-can-change-your-accent",
    title: "Sanas Can Change Your Accent",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "English is the world's most widely used language. An estimated 1.5 billion people speak it, and most of them aren't native speakers. In the United States alone, millions of people speak English as a second language. A new company called Sanas is testing out artificial intelligence-powered software that aims to eliminate miscommunication by changing people's accents in real time. A call center worker in the Philippines, for example, could speak normally into the microphone and end up sounding more like someone from Kansas to a customer on the other end. The American accent sounds somewhat artificial, Siri-like, but they are working on improving the technology. The idea is that, rather than learning to pronounce words differently, you could have technology do it for you. And understanding would be nearly instantaneous.",
      "The three founders of Sanas met at Stanford University, but they're all from different countries originally. All three say they've experienced over the years how accents can get in the way. \"We all come from international backgrounds. We've seen firsthand how people treat you differently just because of the way you speak,\" Maxim Serebryakov, one of the founders, says. He also remarks that people's accents and identities can be closely linked, and he stresses that the company isn't trying to erase accents or imply that one way of speaking is better than another.",
      "Eventually, they hope the app they're developing will be used by a variety of industries and individuals. It could help doctors better understand patients. Someday, they say, it could also assist language learners and improve dubbing in movies. It could even help smart speakers in homes and voice assistants in cars understand different accents."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"emphasize\"",
        answers: ["stresses"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 2,
        explanation: "«Recalcar / enfatizar». Verbo en presente simple (3.ª persona): «and he stresses that the company isn't trying to erase accents»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"client\"",
        answers: ["customer"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Cliente». Sustantivo en el primer párrafo: «sounding more like someone from Kansas to a customer on the other end»."
      },
      {
        id: 3,
        definition: "WORD MEANING: failure to transmit information successfully to somebody",
        answers: ["miscommunication"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Falta de comunicación / malentendido». Sustantivo incontable en el texto: «aims to eliminate miscommunication»."
      },
      {
        id: 4,
        definition: "WORD MEANING: obtained or experienced by direct personal observation",
        answers: ["firsthand"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 2,
        explanation: "«De primera mano». Adverbio que aparece en el segundo párrafo: «We've seen firsthand how people treat you differently»."
      }
    ]
  },
  {
    id: "pink-sauce-disaster",
    title: "The Pink Sauce Disaster",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "If you logged onto TikTok or Twitter recently, you might have seen people talking about something called Pink Sauce. No, it's not pasta made with cream and tomatoes, but a condiment made by a TikTok user named Chef Pii. Pii advertises Pink Sauce by dumping it on tacos, wings, egg rolls, salads and more. The bottle has an adorable design, and she's shipping it everywhere. The problem? Almost everything.",
      "Consumers are reporting all kinds of issues, ranging from misleading nutritional information to a spoiled smell. The chef posted videos of her preparing the sauce without gloves on. Once the negative reviews started pouring in, people realized that nobody knew what the actual ingredients were. In fact, Pink Sauce is unregulated and could likely make you sick. In a statement, Pii said \"I guess when you're great, you can't make a mistake. My team's working quickly to fix the issues.\"",
      "Pink Sauce is not the only food product created by a TikTok user which has gone viral for the wrong reasons. Earlier this year, someone called Deva Tillis posted a video complaining about a \"spicy bowl\" containing crawfish and eggs that she ordered from a small business on the platform. The bowl took nine days to reach her, and the fish was rotten by the time it arrived. The product was falsely advertised as being shipped with dry ice to preserve the seafood.",
      "Small businesses selling unregulated food online isn't new, according to an expert. \"It's not a TikTok phenomenon, but what's different is that TikTok is really good at small consumption and making things go viral. However, just because it's on TikTok, that doesn't mean that it's safe,\" she concluded."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"suppose\"",
        answers: ["guess"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 2,
        explanation: "«Suponer / imaginar». Verbo en presente simple en el segundo párrafo: «I guess when you're great, you can't make a mistake»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"probably\"",
        answers: ["likely"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 2,
        explanation: "«Probablemente». Adverbio sinónimo de «probably»: «Pink Sauce is unregulated and could likely make you sick»."
      },
      {
        id: 3,
        definition: "WORD MEANING: quickly and widely spread or popularized, especially by means of social media",
        answers: ["viral"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 3,
        explanation: "«Viral». Adjetivo que aparece tanto en el párrafo 3 («gone viral») como en el párrafo 4 («making things go viral»)."
      },
      {
        id: 4,
        definition: "WORD MEANING: to prevent from decomposition",
        answers: ["preserve"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Conservar / preservar». Verbo en infinitivo tras «to»: «shipped with dry ice to preserve the seafood»."
      }
    ]
  },
  {
    id: "no-more-mondays",
    title: "No More Mondays",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "For some US schools, the pandemic created an opportunity to try new things. One of them was to make four-day school weeks the norm. As teachers' salaries cannot be raised, shortening the school week is a bonus which has allowed administrators to retain and attract experienced teachers. Besides, a shorter school week may alleviate some of the workload on teachers and improve their mental health. Schools can also save money. However, since teachers are not receiving any pay cuts, savings are typically only between zero and three percent of the schools' budget.",
      "Currently, more than 1,600 schools across 24 US states have a four-day school week, and the trend is growing, giving students and teachers either Fridays or Mondays off. To make up for the time missed, the new model's school day is, on average, about an hour longer than the traditional one.",
      "Superintendents in districts which have transitioned to four-day weeks say that the vast majority of teachers, students, administrators and parents actually love the model, an assertion backed by research and surveys.",
      "It is a fact that absenteeism and discipline have seen a marked improvement in most of these districts. As regards students' academic performance, results are varied. For example, students in Colorado had higher scores in Maths and English, whereas students in Oregon got poorer results. Still, graduation rates, particularly among Latino students, have increased since the model began.",
      "The four-day week is still limited to small, rural schools in US states where travel distances are greater and hiring qualified educators is a challenge. Current research is giving rise to more innovative ways of schooling which work better for teachers, students and families."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"rule\"",
        answers: ["norm"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Norma / regla habitual». Sustantivo en la segunda oración: «make four-day school weeks the norm»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"support\"",
        answers: ["backed"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 3,
        explanation: "«Respaldado / apoyado». Participio pasado en el tercer párrafo: «an assertion backed by research and surveys»."
      },
      {
        id: 3,
        definition: "WORD MEANING: an examination of opinions made by asking people questions",
        answers: ["surveys"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 3,
        explanation: "«Encuestas». Sustantivo en plural al final del tercer párrafo: «backed by research and surveys»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a prevailing tendency or a current style",
        answers: ["trend"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Tendencia». Sustantivo que aparece en el segundo párrafo: «and the trend is growing»."
      }
    ]
  },
  {
    id: "war-letters",
    title: "War Letters",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Sharon Taylor has no firsthand memories of her father. The World War II fighter pilot was shot down over Germany in April 1945, when Taylor was three weeks old. The war ended less than a month later, and the letters that the 22-year-old pilot had exchanged with his wife Mary since they were high school sweethearts stopped coming. Taylor's father was eventually listed as killed in action, although his body was never recovered.",
      "One day, when Taylor was seven years old, she was sipping a hot chocolate while her paternal grandmother shared stories about their fallen hero, crying as she remembered her son. \"Nana, I'm going to find him and bring him home.\" It was a promise Taylor, now a 77-year-old author and retired professor, would keep. In 2006 she concluded a multi-decade mission to recover her father's remains and bring them home. She did it guided by clues that she had put together from her parents' wartime letters along with help from historians, eyewitnesses, and an excavation team.",
      "Now, through a sound and light show at the National World War II Museum in New Orleans, she's bringing to new generations her parents' experience and a larger story of war casualties and their families. Taylor shares her story widely, raising awareness of soldiers who never returned from war and emphasizing the importance of recovery efforts. An estimated 81,000 American soldiers' bodies remain missing, and she wants people to know there are ongoing efforts to locate them.",
      "Taylor will never know exactly what her father's final moments were like. But as she previews the Expressions of America exhibition in New Orleans, she somehow feels that he has come home at last."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"lover\"",
        answers: ["sweethearts"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 1,
        explanation: "«Novios / enamorados». Sustantivo en plural en el primer párrafo: «since they were high school sweethearts»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"consciousness\"",
        answers: ["awareness"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Conciencia / sensibilización». Sustantivo en el tercer párrafo: «raising awareness of soldiers who never returned from war»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a piece of evidence that leads one toward the solution of a problem",
        answers: ["clues"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Pistas / indicios». Sustantivo en plural en el segundo párrafo: «guided by clues that she had put together»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a person who has seen something happen",
        answers: ["eyewitnesses"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Testigos presenciales». Sustantivo compuesto en plural: «along with help from historians, eyewitnesses, and an excavation team»."
      }
    ]
  },
  {
    id: "is-world-heritage-in-danger",
    title: "Is World Heritage in Danger?",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "In 2016 the city government of Vienna announced that a public-private partnership would build a new ice-skating rink just outside the city's century-old concert hall.",
      "Anyone visiting the place where Beethoven and Mozart met will notice two things immediately. First, the core of Vienna is an architectural fantasy of baroque palaces, immaculate courtyards, and a neo-Gothic city hall. Second, Austrians love winter sports, and ice-skating is as typically Viennese as symphonies and sausages. Therefore, the idea of a permanent ice rink would not have been expected to cause controversy. However, the UNESCO World Heritage Committee decreed that the rink would undermine the \"outstanding universal value\" of central Vienna.",
      "Since 2001, Vienna's city center has been a World Heritage site, that is, one of the organization's 1,154 unique landmarks around the globe. Since announcing its objection to the rink, the World Heritage Committee has kept Vienna on its \"in danger\" list, joining fifty other sites, from the ancient villages of Syria to Everglades National Park in Florida. If the city fails to address the committee's concerns satisfactorily, it risks being permanently \"de-listed\" as a UNESCO landmark.",
      "UNESCO has recently had to confront a newer enemy: climate change. Here the organisation's resources to tackle the problem are limited too. Last year, UNESCO was forced to threaten Australia with placing its legendary Great Barrier Reef on the \"in danger\" list if its government did not work hard enough to reduce its greenhouse gas emissions.",
      "Even though the World Heritage program may be imperfect and at times powerless, it remains relevant because of its main philosophy: the world's diverse treasures require protection, since they cannot protect themselves."
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"approval\"",
        answers: ["objection"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Objeción / oposición». Sustantivo opuesto a «approval» (aprobación): «Since announcing its objection to the rink»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"succeed\"",
        answers: ["fails"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 3,
        explanation: "«Fracasar / no lograr». Verbo opuesto a «succeed» en presente simple (3.ª persona): «If the city fails to address the committee's concerns»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to state one's intention to take hostile action against someone",
        answers: ["threaten"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 4,
        explanation: "«Amenazar». Verbo en infinitivo tras «to»: «UNESCO was forced to threaten Australia»."
      },
      {
        id: 4,
        definition: "WORD MEANING: something considered especially valuable, like a precious possession",
        answers: ["treasures"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 5,
        explanation: "«Tesoros». Sustantivo en plural en el último párrafo: «the world's diverse treasures require protection»."
      }
    ]
  },
  {
    id: "staying-active-in-later-life",
    title: "Staying Active in Later Life",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "A healthy lifestyle matters at all ages but probably more as we get older. However, many old people feel that they have reached an age when exercise is too tiring, and that it is too late to worry about dietary problems. Nevertheless, those who are active into older age see a reduced risk of developing heart disease, obesity or diabetes. Doctors recommend that old people should quit smoking, eat a healthy diet and practise some light activity, such as daily walking, to improve their quality of life.",
      "Paul, an 82-year-old Englishman who has lived in southern Spain for 40 years, believes it is imperative to fight obesity with a healthy diet and regular exercise: \"The only time I go to a fast-food restaurant is when I am in England visiting my grandchildren.\" Additionally, he has never smoked and rarely eats meat, adhering to a diet of fish, lentils and salad instead.",
      "Paul has two young grandchildren who do not fully understand the importance of healthy habits. Concerned about their wellbeing, he says, \"it's complicated to tell my grandchildren not to eat junk food or explain to them the importance of exercise, but fortunately my daughter exercises a lot, so maybe they will follow our example.\"",
      "Himself a very active man, Paul is no stranger to physical exercise: \"I began boxing in my youth, and then I was the proud owner of a rather successful fitness centre in Birkenhead for over 30 years,\" he states. \"Now I keep myself fit working out at home, in my little basement gym. I also walk twelve kilometres along the beach every other day, and use the exercise apparatus installed close to the beach.\""
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"trash\"",
        answers: ["junk"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Basura / porquería». Sustantivo que forma parte de la colocación «junk food» (comida basura) en el tercer párrafo."
      },
      {
        id: 2,
        definition: "SYNONYM for \"infrequently\"",
        answers: ["rarely"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 2,
        explanation: "«Rara vez / con poca frecuencia». Adverbio en el segundo párrafo: «has never smoked and rarely eats meat»."
      },
      {
        id: 3,
        definition: "WORD MEANING: feeling satisfaction for something done or achieved",
        answers: ["proud"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 4,
        explanation: "«Orgulloso». Adjetivo en el último párrafo: «I was the proud owner of a rather successful fitness centre»."
      },
      {
        id: 4,
        definition: "WORD MEANING: to stop doing something",
        answers: ["quit"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 1,
        explanation: "«Dejar de / abandonar». Verbo en infinitivo tras el modal «should»: «Doctors recommend that old people should quit smoking»."
      }
    ]
  },
  {
    id: "history-of-jeans",
    title: "The History of Jeans",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "The word jeans started out in the 1800s, in reference to a cotton cloth used for trousers. Blue jeans, now also called denim, were originally made from this fabric and manufactured in the French town of Nîmes. By the 20th century, jeans was the term for denim informal trousers.",
      "The most recognizable, classic jeans were patented in 1873 by Jacob Davis, a tailor, and Levi Strauss, owner of a fabric house in San Francisco. Strauss and Davis initially made jeans in two types of fabric, brown cotton and blue denim, but the creation of the denim 501 style in 1890 helped the latter fabric take off.",
      "Hollywood helped romanticize blue jeans in the 1920s and 1930s by putting the trousers on handsome cowboy types played by actors John Wayne and Gary Cooper. This glamorous new image appealed to consumers who sought casual leisurewear for the weekends and holidays. Publicity photos of famous actresses like Ginger Rogers and Carole Lombard wearing jeans helped convince women that the style was for them too. In the 1930s, Vogue gave their approval, calling jeans \"Western chic\".",
      "Yet, it wasn't until the 1950s that jeans came to be associated with rebellious youth. Hippies wore jeans in the 1960s and early 1970s as a way to show support for the working class, while feminists and women's rights activists chose blue jeans as a way to demonstrate gender equality.",
      "\"I have often said that I wish I had invented blue jeans,\" Yves Saint Laurent told New York Magazine in November 1983. \"They have expression, modesty, sex appeal, simplicity... all that I hope for in my clothes.\""
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"look for\"",
        answers: ["sought"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 3,
        explanation: "«Buscaron». Pasado simple del verbo irregular «seek»: «appealed to consumers who sought casual leisurewear»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"persuade\"",
        answers: ["convince"],
        wordCount: 1,
        posHint: "Verb (infinitive)",
        paragraphHint: 3,
        explanation: "«Convencer / persuadir». Verbo en infinitivo en el tercer párrafo: «helped convince women that the style was for them too»."
      },
      {
        id: 3,
        definition: "WORD MEANING: informal clothing which you wear when you are not working",
        answers: ["leisurewear"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Ropa informal / de ocio». Sustantivo incontable en el texto: «who sought casual leisurewear for the weekends and holidays»."
      },
      {
        id: 4,
        definition: "WORD MEANING: the belief that someone or something is good or acceptable",
        answers: ["approval"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Aprobación / visto bueno». Sustantivo al final del tercer párrafo: «Vogue gave their approval, calling jeans \"Western chic\"»."
      }
    ]
  },
  {
    id: "mysterious-stranger",
    title: "Mysterious Stranger",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "The customer sat on the terrace, sipping lemonade and pretending to look at a holiday brochure. His sunglasses masked his eyes, but I knew he wasn't reading it: he hadn't turned a page for the last fifteen minutes.",
      "As I brought him his order of grilled beef, he coughed up a simple \"thank you\" and hardly paid attention to me. I tried not to stare at the tiny scar across his cheek. I walked back inside with my empty tray, shaking my head. He seemed familiar, but I couldn't quite remember where from.",
      "Then it hit me. The car accident. The mysterious stranger who had helped me out of my smashed car, just before it exploded on that crucial night. I rushed back to his table. He was gone. As I was removing the remains of his lunch, I lifted his plate and found a small envelope underneath, along with a card: \"I am deeply grateful to you. The night of your accident, I was on my way to rob a jewelry store. Saving your life brought things back in perspective. I now live an honest life, thanks to you.\"",
      "I shivered. The night of my car accident I was heading for an interview in a dance club that had a terrible reputation. Missing that job interview and seeing human kindness through his heroic gesture made me see things differently and change my life.",
      "I opened the envelope. Among a bunch of one-dollar bills, there was a brand-new thousand-dollar bill with a pen mark underlining the printed words \"In God We Trust.\" I said a silent prayer for him and got back to work, smiling."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"blow up\"",
        answers: ["exploded"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 3,
        explanation: "«Explotó / estalló». Verbo en pasado simple en el tercer párrafo: «just before it exploded on that crucial night»."
      },
      {
        id: 2,
        definition: "ANTONYM for \"lower\"",
        answers: ["lifted"],
        wordCount: 1,
        posHint: "Verb (past simple)",
        paragraphHint: 3,
        explanation: "«Levantó». Verbo en pasado simple opuesto a «lower» (bajar): «I lifted his plate and found a small envelope underneath»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to take something or somebody away from a place",
        answers: ["removing"],
        wordCount: 1,
        posHint: "Verb (-ing form)",
        paragraphHint: 3,
        explanation: "«Retirar / quitar». Verbo en forma continua en el tercer párrafo: «As I was removing the remains of his lunch»."
      },
      {
        id: 4,
        definition: "WORD MEANING: the quality of being friendly, generous, and considerate",
        answers: ["kindness"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 4,
        explanation: "«Amabilidad / bondad». Sustantivo en el cuarto párrafo: «seeing human kindness through his heroic gesture»."
      }
    ]
  },
  {
    id: "can-dogs-talk",
    title: "Can Dogs Talk?",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "Throughout human history, storytellers and scientists alike have wondered what it would be like if we could talk to animals, and what animals would say if they could talk back. And some people, both fictional (Dr. Dolittle) and real (Francine Patterson, who taught sign language to gorillas), have tried to bridge our communicative gaps.",
      "Dogs certainly have ways to interact with us—they scratch at the door when they want to go out or they make puppy-dog eyes at us to beg for a bite of whatever we're eating. But instead of learning their language, humans want them to learn ours.",
      "First came Christina Smith, a speech-language pathologist, who taught her dog Stella to express herself using alternative communication devices. Smith inspired Alexis Devine to teach her dog Bunny how to use buttons to communicate. \"I didn't really know what I was doing,\" says Devine, speaking from home while her famous dog sleeps on the couch nearby. She modeled the buttons for Bunny, starting with one meaning 'outside', which eventually worked for the dog. When Bunny pressed it on her own for the first time, \"her ears flipped up and she seemed so proud of herself,\" Devine says. \"If she can understand one button, then she can understand them all,\" she adds.",
      "When professor Federico Rossano, who studies dogs and primates within the field of cognitive science at the University of California, saw the Bunny and Stella videos, his reaction was entirely skeptical. Despite that, he considers that whether or not they can learn to talk, the dogs will inevitably develop close bonds with their owners because of the many hours of training. And maybe that's a reward in itself."
    ],
    questions: [
      {
        id: 1,
        definition: "SYNONYM for \"sofa\"",
        answers: ["couch"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Sofá». Sustantivo sinónimo de «sofa» en el tercer párrafo: «while her famous dog sleeps on the couch nearby»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"ask oneself\"",
        answers: ["wondered"],
        wordCount: 1,
        posHint: "Verb (past participle)",
        paragraphHint: 1,
        explanation: "«Preguntarse». Participio pasado tras «have» en la primera oración: «storytellers and scientists alike have wondered»."
      },
      {
        id: 3,
        definition: "WORD MEANING: to make a mark on a surface using nails or claws",
        answers: ["scratch"],
        wordCount: 1,
        posHint: "Verb (present simple)",
        paragraphHint: 2,
        explanation: "«Arañar / rascar». Verbo en presente simple en el segundo párrafo: «they scratch at the door when they want to go out»."
      },
      {
        id: 4,
        definition: "WORD MEANING: in the end, especially after a series of difficulties",
        answers: ["eventually"],
        wordCount: 1,
        posHint: "Adverb",
        paragraphHint: 3,
        explanation: "«Finalmente / al final». Adverbio (falso amigo, no significa «eventualmente»): «which eventually worked for the dog»."
      }
    ]
  },
  {
    id: "how-king-tut-conquered-pop-culture",
    title: "How King Tut Conquered Pop Culture",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "In late 1922 the British archaeologist Howard Carter discovered a royal tomb untouched for 3,300 years in Egypt's Valley of the Kings. The occupant, teenage pharaoh Tutankhamun, became an instant media sensation. Newspapers couldn't get enough of him or his wealth, exemplified by his solid gold death mask. As Carter carefully removed and catalogued the contents of his tomb, the king, who had died at the age of 19 without accomplishing much in real life, resurrected into a trend-setting superstar. Tutmania had arrived.",
      "Fashion and ancient Egyptian history don't seem like a natural mix, but after Tut's discovery the two converged. Fabrics for dresses and coats displayed motifs such as palm trees, lotus blossoms and sphinxes. Famous jewelers fashioned Egyptian-themed adornments. Handbags, umbrellas, and cigarette cases were Egyptianized. Beauty products also followed the trend, establishing a link to Egypt's exotic royals. For instance, women began to line their eyes with Nile-inspired Kohl eyeliner even though makeup had been associated with sex workers until recently.",
      "The Egyptian discovery also inspired performers, writers and artists. Author Richard Goyne made a youthful King Tut the main character of his 1923 book entitled The Kiss of Pharaoh: The Love Story of Tut-Ankh-Amen. Fighting his way to the throne, Tut encounters many obstacles, such as the disappearance of the royal bride.",
      "In the movie world, The Mummy, starring Boris Karloff in 1932, told the story of an archaeologist, a linen-wrapped mummy and a curse. The idea for the plot arose from the series of strange deaths that occurred after the discovery of Tut's tomb. These included Lord Carnarvon's, the excavation's aristocratic sponsor, who died less than five months after the discovery."
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"poverty\"",
        answers: ["wealth"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 1,
        explanation: "«Riqueza». Sustantivo incontable opuesto a «poverty» (pobreza): «Newspapers couldn't get enough of him or his wealth»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"intact\"",
        answers: ["untouched"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 1,
        explanation: "«Intacto». Adjetivo en la primera oración del texto: «discovered a royal tomb untouched for 3,300 years»."
      },
      {
        id: 3,
        definition: "WORD MEANING: a connection between two things or situations",
        answers: ["link"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 2,
        explanation: "«Vínculo / conexión». Sustantivo en el segundo párrafo: «establishing a link to Egypt's exotic royals»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a container used to store and protect things",
        answers: ["cases"],
        wordCount: 1,
        posHint: "Noun (plural)",
        paragraphHint: 2,
        explanation: "«Estuches / pitilleras». Sustantivo en plural en el segundo párrafo: «Handbags, umbrellas, and cigarette cases were Egyptianized»."
      }
    ]
  },
  {
    id: "buzzing-for-life",
    title: "Buzzing for Life",
    level: "1º Bachillerato · B2",
    paragraphs: [
      "More than 50 years after Rachel Carson's illuminating study of pesticides in Silent Spring, we're still dealing with chemicals and their effects on ecosystems. The latest perpetrator: sulfoxaflor, a bug and plant killer recently reapproved by the Environmental Protection Agency. The latest victim: bees.",
      "We're losing billions of bees each year due to complex factors like decreasing agricultural diversity, habitat loss and climate change. However, one threat to bees remains under our control: pesticides. While pesticides are designed to kill pests and insects that damage crops, they also have unintended consequences like eradicating entire harmless species. These include bees, which are essential for harvests.",
      "Besides vegetables and fruit trees, bees fertilize other crops that don't instantly come to mind when we think of bees—cotton, coffee, tea and chocolate. Moreover, there are whole industries that produce various beeswax and honey-based goods. Together, they are multibillion-dollar industries whose collapse could seriously impact on the economy by putting tens of thousands out of work. Bees alone contribute $15 billion annually to U.S. agriculture, and pollinators in general contribute $24 billion to the country's economy. Moreover, since the U.S. is the largest food exporter in the world and as the global population keeps rising, bees' survival is essential not only for the U.S. but also for fighting world hunger. Globally, it's estimated that pollinators, including bees, affect one-third of the world's food supply.",
      "Bees have evolved into mega-pollinators over millions of years, and plants have adapted to incorporate them into their life cycle. If bees disappeared quickly, plants wouldn't have time to adjust. Many plant species would simply die off, including not only crops but also flowers and trees, which also need pollinators."
    ],
    questions: [
      {
        id: 1,
        definition: "ANTONYM for \"damaging\"",
        answers: ["harmless"],
        wordCount: 1,
        posHint: "Adjective",
        paragraphHint: 2,
        explanation: "«Inofensivo». Adjetivo opuesto a «damaging» (perjudicial): «like eradicating entire harmless species»."
      },
      {
        id: 2,
        definition: "SYNONYM for \"starvation\"",
        answers: ["hunger"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Hambre / hambruna». Sustantivo incontable en el tercer párrafo: «essential not only for the U.S. but also for fighting world hunger»."
      },
      {
        id: 3,
        definition: "WORD MEANING: the sudden failure of an entire system, organization or business",
        answers: ["collapse"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Colapso / quiebra». Sustantivo que aparece en el tercer párrafo: «whose collapse could seriously impact on the economy»."
      },
      {
        id: 4,
        definition: "WORD MEANING: a continuation of life despite difficult conditions",
        answers: ["survival"],
        wordCount: 1,
        posHint: "Noun",
        paragraphHint: 3,
        explanation: "«Supervivencia». Sustantivo en el tercer párrafo: «bees' survival is essential not only for the U.S.»."
      }
    ]
  },
];
