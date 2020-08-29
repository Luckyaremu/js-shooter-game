const dialogues = () => {
  const terrains = ['desert', 'oasis', 'swamp', 'forest', 'river', 'warzone'];
  const initialDialogues = [`'This is it, the beginning of my mission,\n
I will never give up, I need to save him!'`,
  '\'Let\'s keep on moving, hang in there, dad!',
  '\'It\'s only the beginning, let\'s move!\'',
  '\'Almost there, I must not fail!\'',
  `'This is the last command post,\n
this must contain the final piece of the puzzle!'`,
  '\'Dad, I\'m coming, hang in there!\''];
  const bossDialogues = [`Philip (Boss): 'How dare you invade my outpost?\n
Who are you?'\n
Alex: 'Where's him?'\n
Philip (Boss): 'Who are you talking about?\n
Get him!'`,
  `Karl (boss): 'Welcome, this will be the end,\n
prepare yourself!'\n
Alex: 'I'm ready to rumble!!'`,
  `Robert (boss): 'Give up already,\n
you won't get past me!'\n
Alex: 'Don't flatter yourself, come on!'`,
  `Hermann (boss): 'This is the end of the road\n
for you!' Alex: 'It is the end of the road,\n
but not for me!'`,
  `Heinrich (boss): 'You have finally arrived,\n
let me give you a very warm welcome!'\n
Alex: 'This is for my father, be gone!'`,
  `Adolf (boss): 'I can't believe you defeated\n
my commanders!' Martha: 'Release my father\n
and give up right now if you want\n
to live.' Adolf (Boss): 'Unfortunately\n
for you, this fight won't be as easy\n
as the previous ones!'`];
  const endDialogues = [`'I guess he didn't know where\n
my father is, but I found a\n
note here!' Note: 'Find the\n
giant' Alex: 'What does that mean?'`,
  '\'Tell me where he is now!\'\nKarl (Boss): \'You won\'t get away with this,\nthe seven must live!\'\nAlex: \'What do you mean?\'\nAlex: \'He\'s gone...\'',
  '\'This is the third one and\nI still got nothing.Huh, what\'s\nthat written on the wall?\'\nWall: \'Your destiny is in the sleepless mountain\'\nAlex: \'Hmmm\'',
  '\'What is that? A chest?\'\n** opens the chest **\nAlex: \'There\'s a toy castle inside,\nvery curious.\'',
  '\'I have destroyed the last outpost\nand found nothing.\' Alex: \'Wait a minute,\nthe clues must mean something.\'\nNigel: \'That\'s right, Alex, put\nthem together!\' Alex: \'The sleepless\nmountain, it must be the Owl Mountains!\'',
  '\'The toy castle, could it be\nKsiąż Castle?\'Nigel: \'Yes, and I\nheard the boko-haram are building\nseven massive underground bases\nin that location!\'Alex: \'Wait\na minute, the \'Giant\'! It must\nbe Project Riese, that\'s where my\nfather is! We must not waste time,\nlet\'s go!\'',
  '\'He\'s unconscious, I must find\nmy father and leave as fast as possible.\'\nFather: \'Alex, in here!\'\nAlex: \'I have finally found you,\ncome on, we don\'t have much time!\'\n** huge explosion **',
  '\'I am so happy I found you,\nyou must go back to your home,\nyou will be safe there.\'\nFather: \'Alex, this war is far\nfrom over, I won\'t stop fighting\'\nAlex: \'How did you end up being\ncaptured?\' Father: \'It\'s a long story,\nbut a very good one,\nit all began when I...\''];
  return [terrains, initialDialogues, bossDialogues, endDialogues];
};

export default dialogues;