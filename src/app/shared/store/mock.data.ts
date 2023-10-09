export interface taskInterface {
  id: number;
  task: string;
  description: string;
  time: string;
  priority: boolean;
}

export const tasks = [
  {
    id: 1,
    task: 'Clean the room',
    description: 'Include the living room and parking store.',
    time: '9:00 pm',
    priority: false,
  },
  {
    id: 2,
    task: 'Finish code test',
    description: 'Complete code test and save on public repo.',
    time: '13:00 pm',
    priority: true,
  },
  {
    id: 3,
    task: 'Send completed test to company',
    description: 'Deploy code test and share the url.',
    time: '20:00 pm',
    priority: false,
  },
  {
    id: 4,
    task: 'Take a break and continue learning',
    description: 'Continue my courses on Youtube.',
    time: '1:00 am',
    priority: false,
  },
  {
    id: 5,
    task: 'Add two material dialogs',
    description: 'Add and edit task dialogs with passed data.',
    time: '5:00 am',
    priority: false,
  },
];
