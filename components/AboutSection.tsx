import AboutMd from '@/data/home/About.mdx';
import { personalInfo } from '@/data/website.config';

export default function AboutSection() {
  return (
    <section className='flex flex-col gap-8'>
      <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-semibold'>{personalInfo.name}</h1>
          <h2 className='text-xl font-medium'>
            {personalInfo.role}{' '}
            <a
              href={personalInfo.universityWebsite}
              className='hover:underline'
            >
              @{personalInfo.university}
            </a>
          </h2>
          <div className='text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed'>
            <p>Email: {personalInfo.email}</p>
            <p>
              <a
                href='/cv/cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-2'
              >
                cv
              </a>{' '}
              <a
                href='https://scholar.google.com/citations?user=ya1HqdsAAAAJ&hl=en'
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-2'
              >
                google scholar
              </a>
            </p>
          </div>
        </div>
      </div>
      <article className='flex flex-col gap-2 text-pretty'>
        <AboutMd />
      </article>
    </section>
  );
}
