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
  }
];
