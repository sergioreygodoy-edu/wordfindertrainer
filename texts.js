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
];
