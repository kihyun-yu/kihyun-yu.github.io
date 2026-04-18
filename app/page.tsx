import AboutSection from '@/components/AboutSection';
import SelectedPublicationsSection from '@/components/SelectedPublicationsSection';
import bibtex from '@/data/publications/Publications.bib';
import { homepageSection } from '@/data/website.config';

interface DetailItem {
  text: string;
  date?: string;
  advisorLink?: boolean;
}

const educationList = [
  {
    institution: 'Korea Advanced Institute of Science and Technology (KAIST)',
    location: 'South Korea',
    details: [
      {
        text: 'Integrated M.S.-Ph.D. Program in Industrial and Systems Engineering',
        date: '03/2024 - present',
      },
      { text: 'Advisor: Prof. Dabeen Lee', advisorLink: true },
      { text: 'GPA: 4.2 / 4.3' },
    ] as DetailItem[],
  },
  {
    institution: 'Gwangju Institute of Science and Technology (GIST)',
    location: 'South Korea',
    details: [
      {
        text: 'B.S. in Electrical Engineering and Computer Science',
        date: '03/2018 - 02/2024',
      },
      { text: 'Minor in Mathematics' },
      { text: 'GPA: 4.08 / 4.5 (cum laude)' },
      { text: 'Two-year leave for mandatory military service (2020-2021)' },
    ] as DetailItem[],
  },
];

const academicServicesList = [
  'Conference Reviewer: ICML 2026, NeurIPS 2026, IEEE CDC 2026',
];

const teachingExperienceList = [
  {
    text: 'Teaching Assistant, Operations Research: Optimization (KAIST)',
    date: '03/2024 - 06/2024',
  },
  {
    text: 'Teaching Assistant, Differential Equations (GIST)',
    date: '09/2023 - 12/2023',
  },
  {
    text: 'Teaching Assistant, Single Variable Calculus (GIST)',
    date: '03/2023 - 06/2023',
  },
];

const honorsList = [
  {
    title: 'Scholarship for Academic Excellence',
    details: [
      'Awarded for 6 semesters: Spring 2018, Fall 2018, Spring 2019, Fall 2019, Spring 2022, Spring 2023',
    ],
  },
];

const experienceList = [
  {
    lab: 'Information Processing, Controlling, and Network Lab (GIST)',
    location: 'South Korea',
    details: [
      {
        text: 'Undergraduate Research Intern (Advisor: Prof. Heung-No Lee)',
        date: '01/2023 - 12/2023',
      },
      { text: 'Conducted research on lattice-based cryptography' },
    ] as DetailItem[],
  },
  {
    lab: 'Artificial Intelligence Lab (GIST)',
    location: 'South Korea',
    details: [
      {
        text: 'Undergraduate Research Intern (Advisor: Prof. Kyoobin Lee)',
        date: '07/2022 - 12/2022',
      },
      { text: 'Conducted research on robust image classification under noisy labels' },
    ] as DetailItem[],
  },
  {
    lab: 'University of Cambridge',
    location: 'United Kingdom',
    details: [
      {
        text: 'Summer Session Programme (Machine Learning)',
        date: '07/2019 - 08/2019',
      },
    ] as DetailItem[],
  },
];

const languagesAndTechnicalSkillsList = [
  'Korean (native), English (conversational)',
  'C/C++, Python, PyTorch, LaTeX',
];

const otherActivitiesList = [
  {
    text: 'Volunteer Math Mentor',
    date: '03/2018 - 12/2018',
    details: ['Provided small-group math mentoring for middle and high school students'],
  },
];

export default function Page() {
  return (
    <main className='md:w-[48rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.EducationSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Education</h1>
          <div className='flex flex-col gap-4'>
            {educationList.map((item) => (
              <div key={item.institution} className='flex flex-col gap-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='text-base font-medium'>{item.institution}</h2>
                  <span className='text-sm text-neutral-500'>{item.location}</span>
                </div>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={`${detail.text}-${detail.date || ''}`}>
                      <div className='flex items-start justify-between gap-2'>
                        <span>
                          {detail.advisorLink ? (
                            <>
                              Advisor:{' '}
                              <a
                                href='https://dabeenl.github.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline'
                              >
                                Prof. Dabeen Lee
                              </a>
                            </>
                          ) : (
                            detail.text
                          )}
                        </span>
                        {detail.date && (
                          <span className='text-neutral-500 whitespace-nowrap'>
                            {detail.date}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      {homepageSection.SelectedPublicationsSection && (
        <SelectedPublicationsSection bibtex={bibtex} />
      )}
      {homepageSection.AcademicServicesSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Academic Services</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {academicServicesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.TeachingExperienceSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Teaching Experience</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {teachingExperienceList.map((item) => (
              <li key={item.text}>
                <div className='flex items-start justify-between gap-2'>
                  <span>{item.text}</span>
                  <span className='text-neutral-500 whitespace-nowrap'>{item.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.HonorsSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Honors</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {honorsList.map((item) => (
              <li key={item.title}>
                {item.title}
                <ul className='list-disc pl-5 mt-1'>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.ExperienceSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Experience</h1>
          <div className='flex flex-col gap-4'>
            {experienceList.map((item) => (
              <div key={item.lab} className='flex flex-col gap-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='text-base font-medium'>{item.lab}</h2>
                  <span className='text-sm text-neutral-500'>{item.location}</span>
                </div>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={`${detail.text}-${detail.date || ''}`}>
                      <div className='flex items-start justify-between gap-2'>
                        <span>{detail.text}</span>
                        {detail.date && (
                          <span className='text-neutral-500 whitespace-nowrap'>
                            {detail.date}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      {homepageSection.LanguagesAndTechnicalSkillsSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Languages and Technical Skills</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {languagesAndTechnicalSkillsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
      {homepageSection.OtherActivitiesSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Other Activities</h1>
          <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
            {otherActivitiesList.map((item) => (
              <li key={item.text}>
                <div className='flex items-start justify-between gap-2'>
                  <span>{item.text}</span>
                  <span className='text-neutral-500 whitespace-nowrap'>{item.date}</span>
                </div>
                <ul className='list-disc pl-5'>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
