
import { Fact, FactCategory, Comment } from '@/types/funFacts';
import { v4 as uuidv4 } from 'uuid';

// Mock facts data by category
const mockFactsData: Record<FactCategory, Fact[]> = {
  'history': [
    {
      id: uuidv4(),
      category: 'history',
      content: 'The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes.',
      source: 'Historical Archives',
      likes: 24,
      dislikes: 3,
      bookmarks: 7,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Cleopatra lived closer in time to the invention of the iPhone than to the building of the Great Pyramid of Giza.',
      source: 'Archaeological Studies Journal',
      likes: 42,
      dislikes: 5,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The ancient Romans used human urine as mouthwash.',
      source: 'Ancient Roman Health Practices',
      likes: 18,
      dislikes: 25,
      bookmarks: 4,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Napoleon was not actually short. He was 5\'7", which was average for his time.',
      source: 'French Historical Society',
      likes: 35,
      dislikes: 8,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The Great Wall of China is not visible from space with the naked eye.',
      source: 'Space Research Institute',
      likes: 29,
      dislikes: 6,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Vikings never wore horned helmets. This is a myth popularized by opera costumes.',
      source: 'Norse Archaeological Studies',
      likes: 41,
      dislikes: 4,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The first computer programmer was a woman named Ada Lovelace in 1843.',
      source: 'Computer History Museum',
      likes: 56,
      dislikes: 2,
      bookmarks: 22,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Oxford University is older than the Aztec Empire by over 200 years.',
      source: 'Educational History Journal',
      likes: 38,
      dislikes: 7,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Albert Einstein could have been the president of Israel but declined the offer in 1952.',
      source: 'Israeli Government Archives',
      likes: 45,
      dislikes: 3,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The Eiffel Tower was originally intended to be temporary and was meant to be dismantled after 20 years.',
      source: 'French Engineering History',
      likes: 52,
      dislikes: 4,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The Berlin Wall fell in 1989, but some parts still exist today as historical monuments.',
      source: 'German Historical Institute',
      likes: 33,
      dislikes: 2,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Stonehenge is older than the pyramids of Egypt by about 500 years.',
      source: 'Archaeological Dating Studies',
      likes: 47,
      dislikes: 6,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The oldest known living tree is over 4,800 years old and still growing in California.',
      source: 'Dendrochronology Research',
      likes: 61,
      dislikes: 2,
      bookmarks: 24,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Before alarm clocks, there were people called "knocker-uppers" who tapped on windows with long sticks.',
      source: 'Industrial Revolution Archives',
      likes: 39,
      dislikes: 5,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The last mammoth died only 4,000 years ago, long after the pyramids were built.',
      source: 'Paleontology Journal',
      likes: 54,
      dislikes: 3,
      bookmarks: 20,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Coca-Cola was originally marketed as a medicine and contained cocaine until 1903.',
      source: 'Pharmaceutical History',
      likes: 43,
      dislikes: 8,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The first person to survive going over Niagara Falls in a barrel was a 63-year-old schoolteacher in 1901.',
      source: 'Niagara Falls Historical Society',
      likes: 36,
      dislikes: 4,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The Library of Alexandria had an estimated 400,000 to 700,000 scrolls at its peak.',
      source: 'Ancient Library Studies',
      likes: 48,
      dislikes: 3,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'Ketchup was sold as medicine in the 1830s to cure diarrhea and indigestion.',
      source: 'Medical History Archives',
      likes: 31,
      dislikes: 12,
      bookmarks: 8,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'history',
      content: 'The youngest person to ever become a Nobel Prize winner was Malala Yousafzai at age 17.',
      source: 'Nobel Prize Committee',
      likes: 67,
      dislikes: 1,
      bookmarks: 28,
      comments: []
    }
  ],
  'math': [
    {
      id: uuidv4(),
      category: 'math',
      content: 'The sum of all numbers on a roulette wheel is 666.',
      source: 'Mathematical Facts Quarterly',
      likes: 31,
      dislikes: 7,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'If you shuffle a deck of cards properly, chances are that exact order has never been seen before in the history of the universe.',
      source: 'Probability Studies',
      likes: 56,
      dislikes: 2,
      bookmarks: 21,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'Zero is the only number that cannot be represented by Roman numerals.',
      source: 'Number Theory Journal',
      likes: 27,
      dislikes: 3,
      bookmarks: 7,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The number π (pi) contains your birthday, social security number, and every possible combination of numbers.',
      source: 'Mathematical Constants Review',
      likes: 44,
      dislikes: 5,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'A googol is 1 followed by 100 zeros, while a googolplex is 1 followed by a googol zeros.',
      source: 'Large Numbers Institute',
      likes: 33,
      dislikes: 4,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The Fibonacci sequence appears everywhere in nature, from flower petals to spiral galaxies.',
      source: 'Natural Mathematics',
      likes: 52,
      dislikes: 3,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'There are more possible games of chess than atoms in the observable universe.',
      source: 'Game Theory Research',
      likes: 67,
      dislikes: 2,
      bookmarks: 25,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The concept of infinity was so disturbing to ancient Greeks that they kept it secret.',
      source: 'Ancient Mathematical Philosophy',
      likes: 39,
      dislikes: 8,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The number 1 is neither prime nor composite - it\'s in a category of its own.',
      source: 'Prime Number Theory',
      likes: 28,
      dislikes: 6,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'If you fold a piece of paper in half 7 times, it will be 128 layers thick.',
      source: 'Mathematical Folding Studies',
      likes: 35,
      dislikes: 4,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The Monty Hall problem: switching doors gives you a 2/3 chance of winning, not 1/2.',
      source: 'Probability Paradoxes',
      likes: 41,
      dislikes: 9,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The number 9 multiplied by any number will always have digits that add up to 9 or a multiple of 9.',
      source: 'Number Patterns Research',
      likes: 46,
      dislikes: 3,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'There are exactly 177,147 ways to tie a necktie.',
      source: 'Combinatorial Clothing Studies',
      likes: 32,
      dislikes: 5,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The number 142857 is magical: multiply it by 2, 3, 4, 5, or 6 and it rearranges its digits.',
      source: 'Cyclic Number Theory',
      likes: 49,
      dislikes: 2,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'If you divide any circle\'s circumference by its diameter, you always get π (pi).',
      source: 'Geometric Constants',
      likes: 37,
      dislikes: 4,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The shortest mathematical proof ever published was just two words: "By symmetry."',
      source: 'Mathematical Proof Archives',
      likes: 53,
      dislikes: 3,
      bookmarks: 20,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'There are more ways to arrange a deck of cards than there are seconds since the Big Bang.',
      source: 'Factorial Mathematics',
      likes: 58,
      dislikes: 2,
      bookmarks: 22,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The golden ratio (1.618...) appears in art, architecture, and nature throughout history.',
      source: 'Golden Ratio Studies',
      likes: 44,
      dislikes: 4,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'A Klein bottle is a shape that has no inside or outside - it\'s all one continuous surface.',
      source: 'Topology Research',
      likes: 36,
      dislikes: 7,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'math',
      content: 'The largest known prime number has over 24 million digits.',
      source: 'Prime Number Computing',
      likes: 42,
      dislikes: 3,
      bookmarks: 15,
      comments: []
    }
  ],
  'science': [
    {
      id: uuidv4(),
      category: 'science',
      content: 'If you could fold a piece of paper 42 times, it would reach the moon.',
      source: 'Physics Today',
      likes: 47,
      dislikes: 8,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'There are more trees on Earth than stars in the Milky Way galaxy.',
      source: 'Environmental Science Review',
      likes: 39,
      dislikes: 4,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: "Bananas are berries, but strawberries aren't.",
      source: 'Botanical Classification Guide',
      likes: 52,
      dislikes: 7,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Octopuses have three hearts and blue blood.',
      source: 'Marine Biology Journal',
      likes: 61,
      dislikes: 3,
      bookmarks: 23,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'A day on Venus is longer than its year.',
      source: 'Planetary Science Institute',
      likes: 45,
      dislikes: 6,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.',
      source: 'Food Science Quarterly',
      likes: 58,
      dislikes: 2,
      bookmarks: 21,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Your body produces about 37.2 trillion cells, and you replace most of them every 7-10 years.',
      source: 'Cell Biology Research',
      likes: 43,
      dislikes: 5,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Lightning strikes the Earth about 100 times per second.',
      source: 'Atmospheric Physics',
      likes: 36,
      dislikes: 4,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'A single cloud can weigh more than a million pounds.',
      source: 'Meteorology Studies',
      likes: 41,
      dislikes: 3,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Sharks are older than trees - they\'ve been around for about 400 million years.',
      source: 'Evolutionary Biology',
      likes: 55,
      dislikes: 2,
      bookmarks: 20,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'The human brain uses about 20% of the body\'s total energy despite being only 2% of body weight.',
      source: 'Neuroscience Research',
      likes: 49,
      dislikes: 4,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Polar bears have black skin underneath their white fur.',
      source: 'Arctic Biology',
      likes: 38,
      dislikes: 3,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'A group of flamingos is called a "flamboyance".',
      source: 'Ornithology Terms',
      likes: 44,
      dislikes: 5,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Sound travels 4 times faster through water than through air.',
      source: 'Acoustic Physics',
      likes: 32,
      dislikes: 2,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Butterflies taste with their feet and smell with their antennae.',
      source: 'Insect Biology',
      likes: 47,
      dislikes: 3,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'The heart of a blue whale is so large that a small child could crawl through its arteries.',
      source: 'Marine Mammal Studies',
      likes: 53,
      dislikes: 4,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Wombat droppings are cube-shaped to prevent them from rolling away.',
      source: 'Australian Wildlife Research',
      likes: 62,
      dislikes: 1,
      bookmarks: 24,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'The speed of light is exactly 299,792,458 meters per second.',
      source: 'Physics Constants',
      likes: 35,
      dislikes: 2,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'Tardigrades can survive in space without protection for up to 10 days.',
      source: 'Astrobiology Research',
      likes: 51,
      dislikes: 3,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'science',
      content: 'The Great Barrier Reef is the largest living structure on Earth and can be seen from space.',
      source: 'Marine Ecology',
      likes: 46,
      dislikes: 2,
      bookmarks: 17,
      comments: []
    }
  ],
  'chemistry': [
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Diamonds and graphite are both made entirely out of carbon.',
      source: 'Materials Chemistry Journal',
      likes: 28,
      dislikes: 2,
      bookmarks: 8,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The human body contains enough carbon to make 9,000 pencils.',
      source: 'Human Biochemistry',
      likes: 33,
      dislikes: 6,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Gold is so malleable that it can be hammered thin enough for light to pass through it.',
      source: 'Materials Science Today',
      likes: 41,
      dislikes: 3,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Water can exist in three states simultaneously at its triple point.',
      source: 'Physical Chemistry Review',
      likes: 37,
      dislikes: 5,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Helium is the only element that was discovered in space before being found on Earth.',
      source: 'Astronomical Chemistry',
      likes: 49,
      dislikes: 4,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Glass is actually a liquid that flows extremely slowly.',
      source: 'Materials Science Quarterly',
      likes: 32,
      dislikes: 9,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Oxygen is toxic to humans in high concentrations and can cause oxygen poisoning.',
      source: 'Respiratory Chemistry',
      likes: 26,
      dislikes: 7,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The smell after rain has a name: petrichor. It comes from oils from plants and bacteria.',
      source: 'Environmental Chemistry',
      likes: 54,
      dislikes: 2,
      bookmarks: 20,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'A single drop of water contains more than a billion billion molecules.',
      source: 'Molecular Chemistry',
      likes: 38,
      dislikes: 3,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The most abundant element in the universe is hydrogen, making up about 75% of normal matter.',
      source: 'Cosmic Chemistry',
      likes: 43,
      dislikes: 2,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Pure water is actually a very poor conductor of electricity.',
      source: 'Electrochemistry Studies',
      likes: 29,
      dislikes: 4,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The element with the longest name is ununoctium, which has 118 protons.',
      source: 'Periodic Table Research',
      likes: 31,
      dislikes: 3,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Hot water freezes faster than cold water in certain conditions - this is called the Mpemba effect.',
      source: 'Thermal Chemistry',
      likes: 46,
      dislikes: 5,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Gallium is a metal that melts in your hand due to its low melting point of 85.6°F.',
      source: 'Metal Properties Research',
      likes: 42,
      dislikes: 2,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The hardest natural substance on Earth is diamond, but scientists have created harder synthetic materials.',
      source: 'Materials Hardness Studies',
      likes: 35,
      dislikes: 3,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Nitrogen makes up about 78% of Earth\'s atmosphere but is relatively unreactive.',
      source: 'Atmospheric Chemistry',
      likes: 27,
      dislikes: 2,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The pH scale ranges from 0 to 14, with 7 being neutral, below 7 acidic, and above 7 basic.',
      source: 'Acid-Base Chemistry',
      likes: 33,
      dislikes: 4,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Francium is the rarest naturally occurring element, with only about 20-30 grams in Earth\'s crust.',
      source: 'Rare Elements Research',
      likes: 39,
      dislikes: 3,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'The noble gases were called "inert" until 1962 when the first noble gas compound was created.',
      source: 'Noble Gas Chemistry',
      likes: 36,
      dislikes: 4,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'chemistry',
      content: 'Sublimation is when a solid turns directly into a gas without becoming a liquid first.',
      source: 'Phase Transition Studies',
      likes: 30,
      dislikes: 2,
      bookmarks: 10,
      comments: []
    }
  ],
  'politics': [
    {
      id: uuidv4(),
      category: 'politics',
      content: "The Liberty Bell was last rung on George Washington's birthday in 1846.",
      source: 'American Historical Review',
      likes: 19,
      dislikes: 5,
      bookmarks: 6,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: "The US Constitution doesn't set the number of Supreme Court Justices. Congress decides.",
      source: 'Constitutional Studies',
      likes: 37,
      dislikes: 9,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Wyoming was the first state to grant women the right to vote in 1869.',
      source: 'American Suffrage History',
      likes: 45,
      dislikes: 4,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The youngest elected president was John F. Kennedy at age 43.',
      source: 'Presidential History Institute',
      likes: 31,
      dislikes: 6,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Alaska and Hawaii became states in the same year: 1959.',
      source: 'Statehood Records',
      likes: 28,
      dislikes: 3,
      bookmarks: 8,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The Vice President is the only government official mentioned in both the Constitution and as a backup.',
      source: 'Government Structure Analysis',
      likes: 22,
      dislikes: 7,
      bookmarks: 5,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'New Zealand was the first country to give women the right to vote in 1893.',
      source: 'International Suffrage History',
      likes: 41,
      dislikes: 5,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The term "filibuster" comes from Dutch word meaning "pirate".',
      source: 'Political Etymology',
      likes: 34,
      dislikes: 8,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The White House has 132 rooms, including 35 bathrooms.',
      source: 'White House Architecture',
      likes: 26,
      dislikes: 4,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Only one US President has resigned from office: Richard Nixon in 1974.',
      source: 'Presidential History',
      likes: 33,
      dislikes: 6,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The word "democracy" comes from Greek words meaning "rule by the people".',
      source: 'Political Etymology',
      likes: 38,
      dislikes: 3,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Switzerland didn\'t join the United Nations until 2002.',
      source: 'International Relations',
      likes: 42,
      dislikes: 5,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The Electoral College has 538 total electors, and 270 are needed to win the presidency.',
      source: 'Electoral System Studies',
      likes: 29,
      dislikes: 8,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Vatican City is the smallest country in the world with only 0.17 square miles.',
      source: 'World Geography Politics',
      likes: 35,
      dislikes: 2,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The longest serving monarch in British history was Queen Elizabeth II, reigning for 70 years.',
      source: 'British Monarchy Records',
      likes: 44,
      dislikes: 7,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Canada has the longest coastline of any country in the world.',
      source: 'Geographic Politics',
      likes: 31,
      dislikes: 3,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The United States has never had a female president, making it one of few major democracies without one.',
      source: 'Gender in Politics Research',
      likes: 47,
      dislikes: 12,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The Berlin Wall stood for 28 years, from 1961 to 1989.',
      source: 'Cold War History',
      likes: 36,
      dislikes: 4,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'Australia is the only country that is also a continent.',
      source: 'Political Geography',
      likes: 39,
      dislikes: 3,
      bookmarks: 15,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'politics',
      content: 'The European Union has 27 member countries as of 2024.',
      source: 'European Politics',
      likes: 25,
      dislikes: 5,
      bookmarks: 8,
      comments: []
    }
  ],
  'current-events': [
    {
      id: uuidv4(),
      category: 'current-events',
      content: "More than 90% of the world's data has been created in just the last few years.",
      source: 'Digital Trends Report 2024',
      likes: 29,
      dislikes: 6,
      bookmarks: 10,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'There are more mobile devices in the world than there are people.',
      source: 'Global Technology Survey',
      likes: 36,
      dislikes: 5,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'About 8 million tons of plastic enters our oceans every year.',
      source: 'Environmental Protection Agency',
      likes: 48,
      dislikes: 2,
      bookmarks: 20,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Electric vehicle sales have grown by over 40% globally in the past year.',
      source: 'Automotive Industry Report 2024',
      likes: 42,
      dislikes: 8,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Over 5 billion people now have access to the internet worldwide.',
      source: 'Global Connectivity Statistics',
      likes: 35,
      dislikes: 4,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Renewable energy now accounts for over 30% of global electricity generation.',
      source: 'International Energy Agency',
      likes: 51,
      dislikes: 3,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'AI chatbots process over 1 billion conversations per month worldwide.',
      source: 'AI Technology Metrics 2024',
      likes: 39,
      dislikes: 7,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Space tourism has become a $400 million industry with over 600 people having been to space.',
      source: 'Commercial Space Report',
      likes: 44,
      dislikes: 6,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Social media users spend an average of 2.5 hours per day on various platforms.',
      source: 'Digital Behavior Study 2024',
      likes: 33,
      dislikes: 9,
      bookmarks: 12,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Cryptocurrency market cap reached over $2 trillion in 2024.',
      source: 'Financial Technology Report',
      likes: 37,
      dislikes: 11,
      bookmarks: 14,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Remote work has become permanent for over 30% of the global workforce.',
      source: 'Future of Work Study',
      likes: 41,
      dislikes: 5,
      bookmarks: 16,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Video streaming services have over 1.8 billion subscribers globally.',
      source: 'Entertainment Industry Analytics',
      likes: 28,
      dislikes: 4,
      bookmarks: 9,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'The global e-commerce market is expected to reach $8 trillion by 2025.',
      source: 'E-commerce Growth Report',
      likes: 34,
      dislikes: 6,
      bookmarks: 13,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Plant-based meat alternatives have grown by 300% in popularity since 2020.',
      source: 'Food Industry Trends',
      likes: 46,
      dislikes: 8,
      bookmarks: 18,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Over 100 countries have committed to net-zero carbon emissions by 2050.',
      source: 'Climate Action Tracker',
      likes: 52,
      dislikes: 3,
      bookmarks: 21,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'TikTok has over 1 billion active users worldwide as of 2024.',
      source: 'Social Media Statistics',
      likes: 31,
      dislikes: 7,
      bookmarks: 11,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'The James Webb Space Telescope has discovered over 2,000 new celestial objects.',
      source: 'NASA Space Discoveries',
      likes: 58,
      dislikes: 2,
      bookmarks: 23,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Quantum computers have achieved "quantum supremacy" in solving specific problems.',
      source: 'Quantum Computing Research',
      likes: 43,
      dislikes: 4,
      bookmarks: 17,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'Global food waste amounts to about 1.3 billion tons per year.',
      source: 'UN Food Waste Report',
      likes: 49,
      dislikes: 3,
      bookmarks: 19,
      comments: []
    },
    {
      id: uuidv4(),
      category: 'current-events',
      content: 'The metaverse market is projected to reach $800 billion by 2030.',
      source: 'Virtual Reality Industry Report',
      likes: 26,
      dislikes: 12,
      bookmarks: 8,
      comments: []
    }
  ]
};

// Mock user interaction state
const userInteractions: Record<string, { liked: boolean, disliked: boolean, bookmarked: boolean }> = {};

export const getFactsByCategory = (category: FactCategory): Promise<Fact[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const facts = mockFactsData[category].map(fact => ({
        ...fact,
        userLiked: userInteractions[fact.id]?.liked || false,
        userDisliked: userInteractions[fact.id]?.disliked || false,
        userBookmarked: userInteractions[fact.id]?.bookmarked || false
      }));
      resolve(facts);
    }, 500);
  });
};

export const likeFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Find the fact
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle like status
          if (userInteractions[factId].liked) {
            fact.likes--;
            userInteractions[factId].liked = false;
          } else {
            fact.likes++;
            userInteractions[factId].liked = true;
            
            // Remove dislike if it exists
            if (userInteractions[factId].disliked) {
              fact.dislikes--;
              userInteractions[factId].disliked = false;
            }
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const dislikeFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle dislike status
          if (userInteractions[factId].disliked) {
            fact.dislikes--;
            userInteractions[factId].disliked = false;
          } else {
            fact.dislikes++;
            userInteractions[factId].disliked = true;
            
            // Remove like if it exists
            if (userInteractions[factId].liked) {
              fact.likes--;
              userInteractions[factId].liked = false;
            }
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const bookmarkFact = (factId: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const fact = mockFactsData[category as FactCategory][factIndex];
          
          // Initialize user interaction for this fact if it doesn't exist
          if (!userInteractions[factId]) {
            userInteractions[factId] = { liked: false, disliked: false, bookmarked: false };
          }
          
          // Toggle bookmark status
          if (userInteractions[factId].bookmarked) {
            fact.bookmarks--;
            userInteractions[factId].bookmarked = false;
          } else {
            fact.bookmarks++;
            userInteractions[factId].bookmarked = true;
          }
          
          resolve({ success: true });
          return;
        }
      }
      
      resolve({ success: false });
    }, 300);
  });
};

export const addComment = (factId: string, text: string): Promise<Comment | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock user data
      const userId = "user-123";
      const username = "DemoUser";
      
      for (const category in mockFactsData) {
        const factIndex = mockFactsData[category as FactCategory].findIndex(fact => fact.id === factId);
        
        if (factIndex !== -1) {
          const newComment: Comment = {
            id: uuidv4(),
            userId,
            username,
            text,
            createdAt: new Date().toISOString()
          };
          
          mockFactsData[category as FactCategory][factIndex].comments.push(newComment);
          
          resolve(newComment);
          return;
        }
      }
      
      resolve(null);
    }, 300);
  });
};
