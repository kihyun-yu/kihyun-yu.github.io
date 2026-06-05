import type { TimelineItem } from './types';

export const educationList: TimelineItem[] = [
  {
    title: 'Korea Advanced Institute of Science and Technology (KAIST)',
    location: 'South Korea',
    details: [
      {
        text: 'Integrated M.S.-Ph.D. Program in Industrial and Systems Engineering',
        date: '03/2024 - present',
      },
      {
        text: 'Advisor: Prof. Dabeen Lee',
        link: {
          label: 'Prof. Dabeen Lee',
          url: 'https://dabeenl.github.io/',
        },
      },
      { text: 'GPA: 4.2 / 4.3' },
    ],
  },
  {
    title: 'Gwangju Institute of Science and Technology (GIST)',
    location: 'South Korea',
    details: [
      {
        text: 'B.S. in Electrical Engineering and Computer Science',
        date: '03/2018 - 02/2024',
      },
      { text: 'Minor in Mathematics' },
      { text: 'GPA: 4.08 / 4.5 (cum laude)' },
      { text: 'Two-year leave for mandatory military service (2020-2021)' },
    ],
  },
];
