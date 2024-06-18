// Define the song map based on dance style and genre
const songMap = {
  "Jazz": {
    "JazzBluesIndieClassical": ["Song A - Alright- Couch", "Song B - Anesthesia- Us The Duo", "Song C - Jalapeno- Janelle Monae, Pharrell Williams"],
    "PopHouseElectronicHipHopR&BRock": ["Song D - Black and Gold- Breanna Whitaker", "Song E - Work For It- Daphne Willis"]
  },
  "Contemporary": {
    "JazzBluesIndieClassical": ["Song F - Youth - Daughter", "Song G - Show Me Love - Same Feldt"],
    "PopHouseElectronicHipHopR&BRock": ["Song H - This Life - Josef", "Song I - When you break - Bear's Den"]
  },
  "Ballet": {
    "JazzBluesIndieClassical": ["Song J - Ballet", "Song K - Ballet"],
    "PopHouseElectronicHipHopR&BRock": ["Song L - Sawdust & Diamonds - Joanna Newson", "Song M - Ballet"]
  },
  "Modern": {
    "JazzBluesIndieClassical": ["Song N - Modern", "Song O - Modern"],
    "PopHouseElectronicHipHopR&BRock": ["Song P - Anything's Possible  - Kastle", "Song Q - "]
  },
  "Lyrical": {
    "JazzBluesIndieClassical": ["Song R - Lyrical", "Song S - Lyrical"],
    "PopHouseElectronicHipHopR&BRock": ["Song T - Wanderlust - Bjork", "Song U - Starstruck - Santigold"]
  },
  "Cha-Cha": {
    "JazzBluesIndieClassical": ["Song V - Cha-Cha", "Song W - Cha-Cha"],
    "PopHouseElectronicHipHopR&BRock": ["Song X - Cha-Cha", "Song Y - Cha-Cha"]
  },
  "Tap": {
    "JazzBluesIndieClassical": ["Song Z - Tap", "Song AA - Tap"],
    "PopHouseElectronicHipHopR&BRock": ["Song BB - Tap", "Song CC - Tap"]
  },
  "Capoeira": {
    "JazzBluesIndieClassical": ["Song DD - Capoeira", "Song EE - Capoeira"],
    "PopHouseElectronicHipHopR&BRock": ["Song FF - Capoeira", "Song GG - Capoeira"]
  },
  "Locking": {
    "JazzBluesIndieClassical": ["Song HH - Locking", "Song II - Locking"],
    "PopHouseElectronicHipHopR&BRock": ["Song JJ - Locking", "Song KK - Locking"]
  },
  "Hip-Hop": {
    "JazzBluesIndieClassical": ["Song LL - Hip-Hop", "Song MM - Hip-Hop"],
    "PopHouseElectronicHipHopR&BRock": ["Song NN - Hip-Hop", "Song OO - Hip-Hop"]
  },
  "House": {
    "JazzBluesIndieClassical": ["Song PP - House", "Song QQ - House"],
    "PopHouseElectronicHipHopR&BRock": ["Song RR - House", "Song SS - House"]
  },
  "Street Jazz": {
    "JazzBluesIndieClassical": ["Song TT - Street Jazz", "Song UU - Street Jazz"],
    "PopHouseElectronicHipHopR&BRock": ["Song VV - Street Jazz", "Song WW - Street Jazz"]
  },
  "Boogie-woogie": {
    "JazzBluesIndieClassical": ["Song XX - Boogie-woogie", "Song YY - Boogie-woogie"],
    "PopHouseElectronicHipHopR&BRock": ["Song ZZ - Boogie-woogie", "Song AAA - Boogie-woogie"]
  },
  "Popping": {
    "JazzBluesIndieClassical": ["Song BBB - Popping", "Song CCC - Popping"],
    "PopHouseElectronicHipHopR&BRock": ["Song DDD - Popping", "Song EEE - Popping"]
  },
  "Voguing": {
    "JazzBluesIndieClassical": ["Song FFF - Autopilot (Nachtfahrt Remix", "Song GGG - Voguing"],
    "PopHouseElectronicHipHopR&BRock": ["Song HHH - Skinny Patrini-you suck my face (Adriano Canzian Remix)", "Song III - Colors - Solar"]
  },
  "Krump": {
    "JazzBluesIndieClassical": ["Song JJJ - Krump", "Song KKK - Krump"],
    "PopHouseElectronicHipHopR&BRock": ["Song LLL - Krump", "Song MMM - Krump"]
  }
};

// Define the dance style map based on mood, energy, and genre
const danceStyleMap = {
  "Calm-LowEnergy-Jazz": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, relaxed mood.",
    imageURL:"Jazz img.png",
  },
  "Calm-LowEnergy-Blues": {
    danceStyle: "Blues",
    description: "Blues dance is a family of dances that reflect the emotions evoked by blues music. It is often characterized by slow, expressive movements.",
    imageURL: "Blues.jpg",
  },
  "Calm-LowEnergy-Classical": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, relaxed mood",
    imageURL: "Jazz img.png",
  },
  "Calm-LowEnergy-R&B": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  }, 
  "Calm-LowEnergy-Indie": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and medium energy levels",
    imageURL: "contemporary.jpg",
  },"Calm-MediumEnergy-Jazz": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-MediumEnergy-Blues": {
    danceStyle: "Lyrical",
    description: "Lyrical dance is a graceful and expressive style that combines elements of ballet, jazz, and contemporary dance. It allows dancers to convey deep emotions and inspiration through fluid movements.",
    imageURL: "lyrical.jpg",
  },
  "Calm-MediumEnergy-Classical": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-MediumEnergy-Indie": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-HighEnergy-Jazz": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  "Calm-HighEnergy-Blues": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  "Calm-HighEnergy-Classical": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  "Calm-HighEnergy-Indie": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  "Calm-LowEnergy-Pop": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-LowEnergy-House": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-LowEnergy-Electronic": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-LowEnergy-HipHop": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for a calm mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  "Calm-MediumEnergy-Pop": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  },
  "Calm-MediumEnergy-House": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  },
  "Calm-MediumEnergy-Electronic": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  },
  "Calm-MediumEnergy-HipHop": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  },
  "Calm-HighEnergy-Pop": {
    danceStyle: "Lyrical",
    description: "Lyrical dance is a graceful and expressive style that combines elements of ballet, jazz, and contemporary dance. It allows dancers to convey deep emotions and inspiration through fluid movements.",
    imageURL: "lyrical.jpg",
  },
  "Calm-HighEnergy-House": {
    danceStyle: "Lyrical",
    description: "Lyrical dance is a graceful and expressive style that combines elements of ballet, jazz, and contemporary dance. It allows dancers to convey deep emotions and inspiration through fluid movements.",
    imageURL: "lyrical.jpg",
  },
  "Calm-HighEnergy-Electronic": {
    danceStyle: "Lyrical",
    description: "Lyrical dance is a graceful and expressive style that combines elements of ballet, jazz, and contemporary dance. It allows dancers to convey deep emotions and inspiration through fluid movements.",
    imageURL: "lyrical.jpg",
  },
  "Calm-HighEnergy-HipHop": {
    danceStyle: "Lyrical",
    description: "Lyrical dance is a graceful and expressive style that combines elements of ballet, jazz, and contemporary dance. It allows dancers to convey deep emotions and inspiration through fluid movements.",
    imageURL: "lyrical.jpg",
  },
  "Happy-LowEnergy-Jazz": {
    danceStyle: "Cha-Cha",
    description: "Cha-Cha is a fun and lively dance that perfectly matches a happy mood with low energy. It is characterized by its syncopated rhythm and playful steps.",
    imageURL: "cha cha.jpeg",
  },
  "Happy-LowEnergy-Blues": {
    danceStyle: "Cha-Cha",
    description: "Cha-Cha is a fun and lively dance that perfectly matches a happy mood with low energy. It is characterized by its syncopated rhythm and playful steps.",
    imageURL: "cha cha.jpeg",
  },
  "Happy-LowEnergy-Indie": {
    danceStyle: "Cha-Cha",
    description: "Cha-Cha is a fun and lively dance that perfectly matches a happy mood with low energy. It is characterized by its syncopated rhythm and playful steps.",
    imageURL: "cha cha.jpeg",
  },
  "Happy-LowEnergy-Classical": {
    danceStyle: "Cha-Cha",
    description: "Cha-Cha is a fun and lively dance that perfectly matches a happy mood with low energy. It is characterized by its syncopated rhythm and playful steps.",
    imageURL: "cha cha.jpeg",
  },
  "Happy-MediumEnergy-Jazz": {
    danceStyle: "Tap",
    description: "Tap dance uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music.",
    imageURL: "tap.jpg",
  },
  "Happy-MediumEnergy-Blues": {
    danceStyle: "Tap",
    description: "Tap dance uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music.",
    imageURL: "tap.jpg",
  },
  "Happy-MediumEnergy-Indie": {
    danceStyle: "Tap",
    description: "Tap dance uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music.",
    imageURL: "tap.jpg",
  },
  "Happy-MediumEnergy-Classical": {
    danceStyle: "Tap",
    description: "Tap dance uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music.",
    imageURL: "tap.jpg",
  },
  "Happy-HighEnergy-Jazz": {
    danceStyle: "Capoeira",
    description: "Capoeira dance is a unique dance found in the combat moves of the Afro-Brazilian martial art of the same name, inspired by music, dance, and acrobatics.",
    imageURL: "capoeira.jpeg",
  },
  "Happy-HighEnergy-Blues": {
    danceStyle: "Capoeira",
    description: "Capoeira dance is a unique dance found in the combat moves of the Afro-Brazilian martial art of the same name, inspired by music, dance, and acrobatics.",
    imageURL: "capoeira.jpeg",
  },
  "Happy-HighEnergy-Indie": {
    danceStyle: "Capoeira",
    description: "Capoeira dance is a unique dance found in the combat moves of the Afro-Brazilian martial art of the same name, inspired by music, dance, and acrobatics.",
    imageURL: "capoeira.jpeg",
  },
  "Happy-HighEnergy-Classical": {
    danceStyle: "Capoeira",
    description: "Capoeira dance is a unique dance found in the combat moves of the Afro-Brazilian martial art of the same name, inspired by music, dance, and acrobatics.",
    imageURL: "capoeira.jpeg",
  },
  "Happy-LowEnergy-Pop": {
    danceStyle: "Locking",
    description: "Locking is a style of funk dance, associated with hip hop, characterized by its playful and lively movements.",
    imageURL: "locking.jpg",
  },
  "Happy-LowEnergy-House": {
    danceStyle: "Locking",
    description: "Locking is a style of funk dance, associated with hip hop, characterized by its playful and lively movements.",
    imageURL: "locking.jpg",
  },
  "Happy-LowEnergy-Electronic": {
    danceStyle: "Locking",
    description: "Locking is a style of funk dance, associated with hip hop, characterized by its playful and lively movements.",
    imageURL: "locking.jpg",
  },
  "Happy-LowEnergy-HipHop": {
    danceStyle: "Locking",
    description: "Locking is a style of funk dance, associated with hip hop, characterized by its playful and lively movements.",
    imageURL: "locking.jpg",
  },
  "Happy-LowEnergy-R&B": {
    danceStyle: "Locking",
    description: "Locking is a style of funk dance, associated with hip hop, characterized by its playful and lively movements.",
    imageURL: "locking.jpg",
  },
  "Happy-MediumEnergy-Pop": {
    danceStyle: "Hip-Hop",
    description: "Hip-Hop is a high-energy dance style perfect for expressing happiness and enthusiasm.",
    imageURL: "hip hop.jpg",
  },
  "Happy-MediumEnergy-House": {
    danceStyle: "Hip-Hop",
    description: "Hip-Hop is a high-energy dance style perfect for expressing happiness and enthusiasm.",
    imageURL: "hip hop.jpg",
  },
  "Happy-MediumEnergy-Electronic": {
    danceStyle: "Hip-Hop",
    description: "Hip-Hop is a high-energy dance style perfect for expressing happiness and enthusiasm.",
    imageURL: "hip hop.jpg",
  },
  "Happy-MediumEnergy-HipHop": {
    danceStyle: "Hip-Hop",
    description: "Hip-Hop is a high-energy dance style perfect for expressing happiness and enthusiasm.",
    imageURL: "hip hop.jpg",
  },
  "Happy-MediumEnergy-R&B": {
    danceStyle: "Hip-Hop",
    description: "Hip-Hop is a high-energy dance style perfect for expressing happiness and enthusiasm.",
    imageURL: "hip hop.jpg",
  },
  "Happy-HighEnergy-Pop": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork, fast-paced rhythms, and influences from various dance styles such as salsa, African, Latin, jazz, and tap. It is perfect for energetic and expressive movements.",
    imageURL: "House.jpeg",
  },
  "Happy-HighEnergy-House": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork, fast-paced rhythms, and influences from various dance styles such as salsa, African, Latin, jazz, and tap. It is perfect for energetic and expressive movements.",
    imageURL: "House.jpeg",
  },
  "Happy-HighEnergy-Electronic": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork, fast-paced rhythms, and influences from various dance styles such as salsa, African, Latin, jazz, and tap. It is perfect for energetic and expressive movements.",
    imageURL: "House.jpeg",
  },
  "Happy-HighEnergy-HipHop": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork, fast-paced rhythms, and influences from various dance styles such as salsa, African, Latin, jazz, and tap. It is perfect for energetic and expressive movements.",
    imageURL: "House.jpeg",
  },
  "Happy-HighEnergy-R&B": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork, fast-paced rhythms, and influences from various dance styles such as salsa, African, Latin, jazz, and tap. It is perfect for energetic and expressive movements.",
    imageURL: "House.jpeg",
  },
  "Mad-LowEnergy-Jazz": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  "Mad-LowEnergy-Blues": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Mad-LowEnergy-Indie": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Mad-LowEnergy-Classical": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "",
  },
  "Mad-MediumEnergy-Jazz": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Mad-MediumEnergy-Blues": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Mad-MediumEnergy-Indie": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Mad-MediumEnergy-Classical": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  "Mad-HighEnergy-Jazz": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Mad-HighEnergy-Blues": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Mad-HighEnergy-Indie": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Mad-HighEnergy-Classical": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Mad-LowEnergy-Pop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Mad-LowEnergy-House": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Mad-LowEnergy-Electronic": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Mad-LowEnergy-HipHop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  "Mad-LowEnergy-R&B": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  "Mad-LowEnergy-Rock": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Mad-MediumEnergy-Pop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-MediumEnergy-House": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-MediumEnergy-Electronic": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-MediumEnergy-HipHop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-MediumEnergy-R&B": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-MediumEnergy-Rock": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Mad-HighEnergy-Pop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Mad-HighEnergy-House": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Mad-HighEnergy-Electronic": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Mad-HighEnergy-HipHop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Mad-HighEnergy-R&B": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Mad-HighEnergy-Rock": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-LowEnergy-Jazz": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Sad-LowEnergy-Blues": {
    danceStyle: "Blues",
    description: "This style is deeply emotional and intimate, making it perfect for expressing feelings of sadness or loneliness through slow, soulful movements.",
    imageURL: "Blues.jpg",
  },
  
  "Sad-LowEnergy-Indie": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Sad-LowEnergy-Classical": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Sad-MediumEnergy-Jazz": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Sad-MediumEnergy-Blues": {
    danceStyle: "Blues",
    description: "This style is deeply emotional and intimate, making it perfect for expressing feelings of sadness or loneliness through slow, soulful movements.",
    imageURL: "Blues.jpg",
  },
  
  "Sad-MediumEnergy-Indie": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Sad-MediumEnergy-Classical": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Sad-HighEnergy-Jazz": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Sad-HighEnergy-Blues": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Sad-HighEnergy-Indie": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Sad-HighEnergy-Classical": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Sad-LowEnergy-Pop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-LowEnergy-House": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-LowEnergy-Electronic": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-LowEnergy-HipHop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-LowEnergy-R&B": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-LowEnergy-Rock": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Sad-MediumEnergy-Pop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-MediumEnergy-House": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-MediumEnergy-Electronic": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-MediumEnergy-HipHop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-MediumEnergy-R&B": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-MediumEnergy-Rock": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Sad-HighEnergy-Pop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-HighEnergy-House": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-HighEnergy-Electronic": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-HighEnergy-HipHop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-HighEnergy-R&B": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Sad-HighEnergy-Rock": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-LowEnergy-Jazz": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Lonely-LowEnergy-Blues": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Lonely-LowEnergy-Indie": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Lonely-LowEnergy-Classical": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Lonely-MediumEnergy-Jazz": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Lonely-MediumEnergy-Blues": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Lonely-MediumEnergy-Indie": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Lonely-MediumEnergy-Classical": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Lonely-HighEnergy-Jazz": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Lonely-HighEnergy-Blues": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Lonely-HighEnergy-Indie": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },

  "Lonely-HighEnergy-Classical": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Lonely-LowEnergy-Pop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-LowEnergy-House": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-LowEnergy-Electronic": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-LowEnergy-HipHop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-LowEnergy-R&B": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-LowEnergy-Rock": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Lonely-MediumEnergy-Pop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-MediumEnergy-House": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-MediumEnergy-Electronic": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-MediumEnergy-HipHop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-MediumEnergy-R&B": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-MediumEnergy-Rock": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Lonely-HighEnergy-Pop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-HighEnergy-House": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-HighEnergy-Electronic": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-HighEnergy-HipHop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-HighEnergy-R&B": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Lonely-HighEnergy-Rock": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Energetic-LowEnergy-Jazz": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Energetic-LowEnergy-Blues": {
    danceStyle: "Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "Jazz img.png",
  },
  
  "Energetic-LowEnergy-Indie": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Energetic-LowEnergy-Classical": {
    danceStyle: "Street Jazz",
    description: "Street Jazz is highly improvisational and freeform, emulating elements of ballet.",
    imageURL: "street jazz.jpeg",
  },
  
  "Energetic-MediumEnergy-Jazz": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Energetic-MediumEnergy-Blues": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Energetic-MediumEnergy-Indie": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Energetic-MediumEnergy-Classical": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Energetic-HighEnergy-Jazz": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "",
  },
  
  "Energetic-HighEnergy-Blues": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Energetic-HighEnergy-Indie": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Energetic-HighEnergy-Classical": {
    danceStyle: "Boogie-woogie",
    description: "Boogie-woogie is a quick and energetic dance style, popular in the 1930s and 1940s.",
    imageURL: "boogie-woogie.png",
  },
  
  "Energetic-LowEnergy-Pop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "boogie-woogie.png",
  },
  
  "Energetic-LowEnergy-House": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Energetic-LowEnergy-Electronic": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Energetic-LowEnergy-HipHop": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Energetic-LowEnergy-R&B": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Energetic-LowEnergy-Rock": {
    danceStyle: "Popping",
    description: "Popping is a funk-themed street dance characterized by quick contrasting and relaxing of muscles to create a jerking effect.",
    imageURL: "popping.jpeg",
  },
  
  "Energetic-MediumEnergy-Pop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-MediumEnergy-House": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-MediumEnergy-Electronic": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-MediumEnergy-HipHop": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-MediumEnergy-R&B": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-MediumEnergy-Rock": {
    danceStyle: "Voguing",
    description: "Voguing is a dynamic and expressive dance style that channels intense emotions through sharp, dramatic movements.",
    imageURL: "vouging.jpg",
  },
  
  "Energetic-HighEnergy-Pop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "",
  },
  
  "Energetic-HighEnergy-House": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "",
  },
  
  "Energetic-HighEnergy-Electronic": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Energetic-HighEnergy-HipHop": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Energetic-HighEnergy-R&B": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Energetic-HighEnergy-Rock": {
    danceStyle: "Krump",
    description: "Krump is a highly energetic and expressive dance style that channels intense emotions through powerful and exaggerated movements.",
    imageURL: "krump.jpg",
  },
  
  "Inspired-LowEnergy-Jazz": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, inspired mood.",
    imageURL: "Jazz img.png",
  },
  
  "Inspired-LowEnergy-Blues": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, inspired mood.",
    imageURL: "Jazz img.png",
  },
  
  "Inspired-LowEnergy-Indie": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, inspired mood.",
    imageURL: "Jazz img.png",
  },
  
  "Inspired-LowEnergy-Classical": {
    danceStyle: "Jazz",
    description: "Jazz dance is smooth and relaxing, ideal for a low-energy, inspired mood.",
    imageURL: "Jazz img.png",
  },
  
  "Inspired-MediumEnergy-Jazz": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and medium energy levels.",
    imageURL: "Jazz img.png",
  },
  
  "Inspired-MediumEnergy-Blues": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-MediumEnergy-Indie": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-MediumEnergy-Classical": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and medium energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-HighEnergy-Jazz": {
    danceStyle: "Afro",
    description: "Afro dance is characterized by its high energy, rhythmic movements, and fluidity. Dancers engage their entire bodies, from arms and legs to hips and torso, expressing intricate rhythms and emotions through their dance.",
    imageURL: "afro dance.jpg",
  },
  
  "Inspired-HighEnergy-Blues": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  
  "Inspired-HighEnergy-Indie": {
    danceStyle: "Afro",
    description: "Afro dance is characterized by its high energy, rhythmic movements, and fluidity. Dancers engage their entire bodies, from arms and legs to hips and torso, expressing intricate rhythms and emotions through their dance.",
    imageURL: "afro dance.jpg",
  },
  
  "Inspired-HighEnergy-Classical": {
    danceStyle: "Ballet",
    description: "Ballet is a highly structured and technical dance form that requires strength, flexibility, and precision. While it can be performed at various energy levels, its classical roots and intricate movements make it well-suited for expressing energy with grace and elegance.",
    imageURL: "ballet.jpg",
  },
  
  "Inspired-LowEnergy-Pop": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "",
  },
  
  "Inspired-LowEnergy-House": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "",
  },
  
  "Inspired-LowEnergy-Electronic": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-LowEnergy-HipHop": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-LowEnergy-R&B": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-LowEnergy-Rock": {
    danceStyle: "Contemporary",
    description: "Contemporary is expressive and fluid, making it perfect for an inspired mood and low energy levels.",
    imageURL: "contemporary.jpg",
  },
  
  "Inspired-MediumEnergy-Pop": {
    danceStyle: "Afro",
    description: "Afro dance is characterized by its high energy, rhythmic movements, and fluidity. Dancers engage their entire bodies, from arms and legs to hips and torso, expressing intricate rhythms and emotions through their dance.",
    imageURL: "afro dance.jpg",
  },
  
  "Inspired-MediumEnergy-House": {
    danceStyle: "Tap",
    description: "Tap is a form of dance that uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music",
    imageURL: "tap.jpg",
  },
  
  "Inspired-MediumEnergy-Electronic": {
    danceStyle: "waacking",
    description: "You can recognize this special flavor of street dancing by its intricate and fast arm movements and freezes. Most of the movements will originate in the shoulders of the dancer.",
    imageURL: "waacking.png",
  },
  
  "Inspired-MediumEnergy-HipHop": {
    danceStyle: "Breaking",
    description: "Breakdancing consists mainly of four kinds of movement—toprock, downrock, power moves, and freezes—and is typically set to songs containing drum breaks, especially in funk, soul, and hip-hop.",
    imageURL: "breakdance.jpg",
  },
  
  "Inspired-MediumEnergy-R&B": {
    danceStyle: "Hip Hop",
    description: "Hip hop dance is a range of street dance styles primarily performed to hip hop music or that have evolved as part of hip hop culture.",
    imageURL: "hip hop.jpg",
  },
  
  "Inspired-MediumEnergy-Rock": {
    danceStyle: "Modern",
    description: "Modern dance is a broad genre of western concert or theatrical dance which includes various dance styles. It is perfect for medium energy levels.",
    imageURL: "modern.jpg",
  },
  
  "Inspired-HighEnergy-Pop": {
    danceStyle: "Commercial",
    description: "Commercial dance is a dance style usually performed in a theatre or on a stage. It is often characterised by its flashy, high-energy moves and its use of props and costumes. .",
    imageURL: "commercial.jpg",
  },
  
  "Inspired-HighEnergy-House": {
    danceStyle: "House",
    description: "House dance is characterized by its fluid footwork and fast-paced rhythms, perfect for expressing medium energy levels.",
    imageURL: "House.jpeg",
  },
  
  "Inspired-HighEnergy-Electronic": {
    danceStyle: "waacking",
    description: "You can recognize this special flavor of street dancing by its intricate and fast arm movements and freezes. Most of the movements will originate in the shoulders of the dancer.",
    imageURL: "waacking.png",
  },
  
  "Inspired-HighEnergy-HipHop": {
    danceStyle: "Hip Hop",
    description: "Perfect for high energy and happy moods, hip-hop is vibrant and expressive, allowing you to showcase your enthusiasm and rhythm. ",
    imageURL: "hip hop.jpg",
  },
  
  "Inspired-HighEnergy-R&B": {
    danceStyle: "Afro",
    description: "Afro dance is characterized by its high energy, rhythmic movements, and fluidity. Dancers engage their entire bodies, from arms and legs to hips and torso, expressing intricate rhythms and emotions through their dance.",
    imageURL: "afro dance.jpg",
  },
  
  "Inspired-HighEnergy-Rock": {
    danceStyle: "Tap",
    description: "Tap is a form of dance that uses the sounds of tap shoes striking the floor as a form of percussion; it is often accompanied by music. ",
    imageURL: "tap.jpg",
  },
  
};


// Function to get the selected rating
function getSelectedRating() {
  // Call on the 'energy' element in HTML by name to determine the energy level selected
  const ratings = document.getElementsByName("energy");
  // create a loop that iterates through the energy numbers 1-10
  for (let i = 0; i < ratings.length; i++) {
   // if the number is selected return the value of the number (.checked = selected number/ also see CSS checked) 
    if (ratings[i].checked) {
      return parseInt(ratings[i].value);
    }
  }
  return null;
}

// Function to get the selected music genres
function getSelectedMusicGenres() {
  // Call on the 'music' element in HTML by name to determine the genre chosen
  const genres = document.getElementsByName("music");
  // initializes an empty array selectedGenres that will store the values of the selected genres. 
  let selectedGenres = [];
  // create a loop that iterates through each genre to determine the selected genre
  for (let i = 0; i < genres.length; i++) {
   // conditional statement checks if the current checkbox is checked (i.e., selected). If it is, the code inside the if block is executed
    if (genres[i].checked) {
     //  If the checkbox is selected, this line adds the value of the checkbox (e.g., "rock", "pop", etc.) to the selectedGenres array using the push method.
      selectedGenres.push(genres[i].value);
    }
  }//the function returns a string containing all the selected genres, concatenated together using the join method with an empty separator (""). This means that if multiple genres are selected, they will be returned as a single string, separated by nothing (e.g., "rockpop").
  return selectedGenres.join("");
}

// create a function to get the suggested Dance style by the mood, energy and genre choosen
function suggestDanceStyle() {
 // initialize variables by getting element from HTML 
  const mood = document.getElementById("mood").value;
  //retrieves the values of energy + genre selected from the functions in js 
  const energy = getSelectedRating();
  const genre = getSelectedMusicGenres();
// log the options to check it runs
  console.log("Mood:", mood);
  console.log("Energy:", energy);
  console.log("Genre:", genre);
// create and conditional statement that creates an alert if no options are selected
  if (mood === "select" || energy === null || genre === "") {
    alert("Please select your mood, energy level, and at least one music genre.");
    return;
  }
// Determine the user's energy level based on the value of the energy variable. If the energy level is less than or equal to 3,
// the energyLevel variable is set to "LowEnergy". If the energy level is greater than or equal to 7, the energyLevel variable is set to "HighEnergy". Otherwise, the energyLevel variable is set to "MediumEnergy".
  let energyLevel = energy <= 3 ? "LowEnergy" : energy >= 7 ? "HighEnergy" : "MediumEnergy";
  //create a unique key based on the selected mood, energy level, and genre.
  let key = `${mood}-${energyLevel}-${genre}`;
  console.log("Generated Key:", key);

  //retrieves the dance style data associated with the unique key. the danceStyleMap object contains dance style data for various combinations of mood, energy level, and genre.
  let danceStyleData = danceStyleMap[key];
 // conditional statement to check whether a particular unique key from the dance style data does not exist and will alert if no key exists
  if (!danceStyleData) {
    alert("No dance style found for the selected mood, energy level, and music genre combination.");
    return;
  }

  //retrieve the dance style, description and image URL from the dance style data
  let danceStyle = danceStyleData.danceStyle;
  let description = danceStyleData.description;
  let imageURL = danceStyleData.imageURL;

  // retrieves the suggested songs for the dance style and genre.the songMap object contains song data for various dance styles and genres. If the suggested songs do not exist, the default songs "Song N - You Pick" and "Song O - Default" are used.
  let songs = songMap[danceStyle] && songMap[danceStyle][genre] ? songMap[danceStyle][genre] : ["Song N - You Pick", "Song O - Shuffle"];
  //creates an HTML list of the suggested songs. (this is not working!!!)
  let songList = songs.map(Song => `<li>${Song}</li>`).join("");
 // sets the HTML content of the element with the id "result" to display the suggested dance style, description, image, and suggested songs.
  const result = document.getElementById("result");
  result.innerHTML = `
    <h2>Suggested Dance Style: ${danceStyle}</h2>
    <p>${description}</p>
    <img src="${imageURL}" alt="${danceStyle} Dance Style">
    <h3>Suggested Songs:</h3>
    <ul>${songList}</ul>
  `;
}
//  created a function to reset the form and input new selected options
function resetSuggestions() {
  document.getElementById("styleform").reset();
  document.getElementById("result").innerHTML = "";
}

//-------------------------------------- Event listener for theme toggle------------------------------------
localStorage.getItem("theme");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const toggle = document.querySelector("[data-theme-toggle]");

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

toggle.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  const newCta = newTheme === "dark" ? "Change to light theme" : "change to dark theme";
  toggle.setAttribute("aria-label", newCta);

  // update theme attribute on HTML to switch theme in CSS
  document.querySelector("html").setAttribute("data-theme", newTheme);

  // update in local storage
  localStorage.setItem("theme", newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});
