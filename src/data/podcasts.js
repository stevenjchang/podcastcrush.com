const getImagePath = (fileName) => `/images/podcast_cover_art/${fileName}`;

export const podcasts = [
  {
    name: "The Bill Simmons Podcast",
    about: `HBO and The Ringer's Bill Simmons hosts the most downloaded sports podcast of all time, with a rotating crew of celebrities, athletes, and media staples, as well as mainstays like Cousin Sal, Joe House, and a slew of other friends and family members who always happen to be suspiciously available.`,
    description: `HBO and The Ringer's Bill Simmons hosts the most downloaded sports podcast of all time, with a rotating crew of celebrities, athletes, and media staples, as well as mainstays like Cousin Sal, Joe House, and a slew of other friends and family members who always happen to be suspiciously available.`,
    imageUrl: getImagePath("bill_simmons.jpg"),
    categories: ["sports"],
  },
  {
    name: "The Mina Kimes Show",
    description:
      "Mina talks all things football with her unique brand of humor and insight. Her friends join each episode to talk about the NFL's latest storylines along with her football loving dog, Lenny, making frequent contributions.",
    imageUrl: getImagePath("mina_kimes.jpg"),
    categories: ["sports"],
  },
  {
    name: "Pivot",
    description:
      "Every Tuesday and Friday, Recode’s Kara Swisher and NYU Professor Scott Galloway offer sharp, unfiltered insights into the biggest stories in tech, business, and politics. They make bold predictions, pick winners and losers, and bicker and banter like no one else. After all, with great power comes great scrutiny. From New York Magazine and the Vox Media Podcast Network.",
    imageUrl: getImagePath("pivot.jpg"),
    categories: ["general"],
  },
  {
    name: "The Press Box",
    description:
      "The Ringer’s Bryan Curtis and David Shoemaker catch you up on the biggest media stories, from sports to politics and everything in between.",
    imageUrl: getImagePath("press_box.jpg"),
    categories: ["politics"],
  },

  {
    name: "Against the Rules with Michael Lewis",
    description:
      "Journalist and bestselling author Michael Lewis (Liar's Poker, Moneyball) takes a searing look at what’s happened to fairness. It feels like there's less of it every day—whether it comes to lending practices, college admissions, professional sports, or psychological well-being. Who are the people trying to level the playing field, and are they making an impact?",
    imageUrl: getImagePath("michael_lewis.jpg"),
    categories: ["general"],
  },
  {
    name: "Planet Money",
    descriptionOriginal: "desc",
    description: `The economy explained. Imagine you could call up a friend and say, "Meet me at the bar and tell me what's going on with the economy." Now imagine that's actually a fun evening.`,
    imageUrl: getImagePath("planet_money.jpg"),
    categories: ["economics"],
  },
  {
    name: "The Ringer NFL Show",
    description:
      "The Ringer NFL Show features a rotating group of Ringer NFL experts, including Robert Mays, Kevin Clark, and Danny Kelly. The show will also feature ex-players and coaches, among others, as guests.",
    imageUrl: getImagePath("ringer_nfl.jpg"),
    categories: ["sports"],
  },
  {
    name: "The Stack Overflow Podcast",
    description:
      "The Stack Overflow podcast is a weekly conversation about working in software development, learning to code, and the art and culture of computer programming.",
    imageUrl: getImagePath("stack_overflow.jpg"),
    categories: ["coding"],
  },
  {
    name: "Software Engineering Unlocked",
    description:
      "In this show, I open you the doors to companies and thought leaders around the world. With my guests, I discuss software engineering best practices and pitfalls, and how they strive to build software people love.",
    imageUrl: getImagePath("software_engineering_unlocked.jpg"),
    categories: ["coding"],
  },
  {
    name: "The Weeds",
    description:
      "In politics, you’re often told not to get lost in the weeds. But we love the weeds! That’s where politics becomes policy – the stuff that shapes our lives. Every Tuesday and Friday, Matthew Yglesias is joined by Ezra Klein, Dara Lind, Jane Coaston and other Vox voices to dig into the weeds on important national issues, including healthcare, immigration, housing, and everything else that matters. Produced by Vox and the Vox Media Podcast Network.",
    imageUrl: getImagePath("the_weeds.jpg"),
    categories: ["politics"],
  },
  {
    name: "How I Built This",
    description:
      "Guy Raz dives into the stories behind some of the world's best known companies. How I Built This weaves a narrative journey about innovators, entrepreneurs and idealists—and the movements they built.",
    imageUrl: getImagePath("how_i_built_this.jpg"),
    categories: ["economics", "startup"],
  },
  {
    name: "Acquired",
    description:
      "Every company has a story. Acquired goes behind the scenes of the biggest tech acquisitions and IPOs of all time.",
    imageUrl: getImagePath("acquired.jpg"),
    categories: ["tech"],
  },
  {
    name: "Equity",
    description:
      "Equity is TechCrunch’s venture capital podcast. In each episode, we bring you the numbers behind the headlines in Venture Captial. TechCrunch reporter Alex Wilhelm teams up with Danny Crichton and Natasha Mascarenhas to give a window into startup land.",
    imageUrl: getImagePath("equity.jpg"),
    categories: ["tech"],
  },
  {
    name: "Anna Faris Is Unqualified",
    description:
      "Relationship advice from completely unqualified Hollywood types. Join me on a mission to create a community where those of us who have no idea what the f*ck we’re doing can find comfort, support and laughter.",
    imageUrl: getImagePath("anna.jpg"),
    categories: ["entertainment"],
  },
  {
    name: "Boom/Bust: HQ Trivia",
    description:
      "The live trivia app 'HQ Trivia' was once the obsession of the internet, garnering millions of players and an international spotlight. But then it all went wrong. From 'The Ringer' Podcast Network, ‘Boom/Bust: HQ Trivia’ is an exploration of the spectacular rise and fall of the massively popular app, reported and hosted by Alyssa Bereznak.",
    imageUrl: getImagePath("boom_bust_hq_trivia.jpg"),
    categories: ["tech"],
  },

  {
    name: "Smart Passive Income",
    description: `Pat Flynn from The Smart Passive Income Blog reveals all of his online business and blogging strategies, income sources and killer marketing tips and tricks so you can be ahead of the curve with your online business or blog. Discover how you can create multiple passive income streams that work for you so that you can have the time and freedom to do what you love, whether it's traveling the world, or just living comfortably at home. `, //Although Pat confesses he is not a millionaire, he's been supporting his family 100% with passive income generated online, easily earning a six-figure salary while working only a few hours a week. Automation, outsourcing, crowdsourcing, search engine optimization, building authority and trust, niche sites, social media,
    imageUrl: getImagePath("smart_passive_income.jpg"),
    categories: ["economics", "startup", "entrepreneur"],
  },
  {
    name: "The Indicator from Planet Money",
    description:
      "A little show about big ideas. From the people who make Planet Money, The Indicator helps you make sense of what's happening today. It's a quick hit of insight into work, business, the economy, and everything else. Listen weekday afternoons.",
    imageUrl: getImagePath("indicator.jpg"),
    categories: ["economics"],
  },
  {
    name: "The Herd with Colin Cowherd",
    description:
      "The Herd with Colin Cowherd is a thought-provoking, opinionated, and topic-driven journey through the top sports stories of the day.",
    imageUrl: getImagePath("herd.jpg"),
    categories: ["sports"],
  },
  {
    name: "Ringer Dish + Jam Session + Tea Time",
    description:
      "Ringer Dish is the place for all things celebrity. From major celebrity moments like the Met Gala and the Oscars, to the weird habits of the stars you love, to refreshers on the biggest tabloid stories from the last twenty years, Ringer Dish has all the vital details. On Mondays, join a rotating cast of Ringer staffers for deep dives on famous families like the Richies or to learn more about your favorite internet boyfriend (looking at you, Zac Efron). On Wednesdays, catch ‘Jam Session’ with Juliet Litman and Amanda Dobbins for royal family rumors, celebrity real estate, and industry analysis. And on Fridays, listen to ‘Tea Time’ with Liz Kelly, Kate Halliwell, and Amelia Wedemeyer for lightening-fast coverage of pressing celebrity news and gossip.",
    imageUrl: getImagePath("ringer_dish.jpg"),
    categories: ["entertainment"],
  },
  {
    name: "The Ringer NBA Show",
    description:
      "A daily breakdown of the latest story lines, trends, and important developments in the NBA. We promise to keep the Sixers and Celtics discussion to a reasonable amount … or to at least try.",
    imageUrl: getImagePath("ringer_nba.jpg"),
    categories: ["sports"],
  },
  {
    name: "Accidental Tech Podcast",
    description:
      "Three nerds discussing tech, Apple, programming, and loosely related matters.",
    imageUrl: getImagePath("atp.jpg"),
    categories: ["tech"],
  },
  // {
  //   name: "ESPN Daily",
  //   description: "des",
  //   imageUrl: getImagePath("espn_daily.jpg"),
  //   categories: ["sports"],
  // },
  // {
  //   name: "Business Schooled",
  //   description: "des",
  //   imageUrl: getImagePath("business_schooled.jpg"),
  //   categories: ["entrepreneur"],
  // },
  // {
  //   name: "Online Marketing Made Easy",
  //   description: "des",
  //   imageUrl: getImagePath("online_marketing_made_easy.jpg"),
  //   categories: ["entrepreneur"],
  // },
  // {
  //   name:
  //     "Broken Record with Rick Rubin, Malcolm Gladwell, Bruce Headlam and Justin Richmond",
  //   description: "des",
  //   imageUrl: getImagePath("malcolm_gladwell.jpg"),
  //   categories: ["general"],
  // },
  {
    name: "Throughline",
    description:
      "The past is never past. Every headline has a history. Join us every week as we go back in time to understand the present. These are stories you can feel and sounds you can see from the moments that shaped our world.",
    imageUrl: getImagePath("throughline.jpg"),
    categories: [""],
  },
  {
    name: "Fantasy Footballers - Fantasy Football Podcast",
    description: `Fantasy Football at it's very best. Say goodbye to the talking heads of Fantasy Football and hello to The Fantasy Footballers. The expert trio of Andy Holloway, Jason Moore, and Mike "The Fantasy Hitman" Wright break down the world of Fantasy Football with astute analysis, strong opinions, and matchup-winning advice you can't get anywhere else. A high quality and entertaining show that will win you your Fantasy Football league -- in style. The ONE Fantasy Football Podcast you can't leave off your roster.`,
    imageUrl: getImagePath("fantasy_footballers.jpg"),
    categories: ["fantasy sports"],
  },
  {
    name: "Harris Fantasy Football Podcast",
    description:
      "Christopher Harris's fantasy football podcast. We ignore the box score and watch game film. Draft better. Manage smarter. Win.",
    imageUrl: getImagePath("harris.jpg"),
    categories: ["fantasy sports"],
  },
  {
    name: "Flying Coach With Steve Kerr and Pete Carroll",
    description:
      "Steve Kerr and Pete Carroll discuss their respective coaching and leadership experiences, how they run their teams, where the NBA and NFL overlap and differ, and the formative influences in their careers.",
    imageUrl: getImagePath("flying_coach.jpg"),
    categories: ["sports"],
  },
  {
    name: "",
    description: "des",
    imageUrl: "",
    categories: [""],
  },
  {
    name: "",
    description: "des",
    imageUrl: "",
    categories: [""],
  },
  {
    name: "",
    description: "des",
    imageUrl: "",
    categories: [""],
  },
];

// binge mode
// personality hacker podcast
// up first
// fantasy sports

/*
Podcasts
  name
  description
  image
  categories
  headline

Episode 
  podcast_name
  episode_name
  timeStamp
  summary_of_point
  commentary
  podcast_url
  
*/