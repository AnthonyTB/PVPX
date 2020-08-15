interface QnA {
  Question: string;
  Answer: string;
}

export const FAQList: QnA[] = [
  { Question: 'How old are you?', Answer: '27 years old' },
  { Question: 'Occupation?', Answer: 'Full-Time streamer since 2017' },
  {
    Question: 'Education?',
    Answer: `Graduated from Univeristy of Central Florida w/ 
Bachelors in Business Management Entrepreneurial Track in 2017`,
  },
  {
    Question: 'Schedule?',
    Answer: 'N/A but I announce when I go live on most of my socials',
  },
  {
    Question: 'Settings & other?',
    Answer: `
      <a href='https://nightbot.tv/t/pvpx/commands' target='blank_'>
        Here
      </a> 
     has up to date commands of more specific questions!`,
  },
  {
    Question: 'How do I donate?',
    Answer: `Go <a href='https://streamlabs.com/pvpx/tip' target='blank_'>
        Here
      </a>`,
  },
];
