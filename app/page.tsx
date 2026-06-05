import AboutSection from '@/components/AboutSection';
import SelectedPublicationsSection from '@/components/SelectedPublicationsSection';
import { academicServicesList } from '@/data/home/academic-services';
import { educationList } from '@/data/home/education';
import { experienceList } from '@/data/home/experience';
import { honorsList } from '@/data/home/honors';
import { teachingExperienceList } from '@/data/home/teaching';
import type { DetailItem } from '@/data/home/types';
import bibtex from '@/data/publications/Publications.bib';
import { homepageSection } from '@/data/website.config';

function DetailRow({ detail }: { detail: DetailItem }) {
  const labelPrefix = detail.link
    ? detail.text.replace(detail.link.label, '')
    : detail.text;

  return (
    <div className='flex items-start justify-between gap-2'>
      <span>
        {detail.link ? (
          <>
            {labelPrefix}
            <a
              href={detail.link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              {detail.link.label}
            </a>
          </>
        ) : (
          detail.text
        )}
      </span>
      {detail.date && (
        <span className='text-neutral-500 whitespace-nowrap'>{detail.date}</span>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className='md:w-[52rem] m-auto px-8 mt-32 mb-20 flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700 [&>*]:py-8 [&>*:first-child]:pt-0'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.EducationSection && (
        <section className='flex flex-col gap-3'>
          <h1 className='text-2xl font-semibold'>Education</h1>
          <div className='flex flex-col gap-4'>
            {educationList.map((item) => (
              <div key={item.title} className='flex flex-col gap-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='text-base font-normal'>{item.title}</h2>
                  <span className='text-sm text-neutral-500'>{item.location}</span>
                </div>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={`${detail.text}-${detail.date || ''}`}>
                      <DetailRow detail={detail} />
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
                <DetailRow detail={item} />
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
              <div key={item.title} className='flex flex-col gap-1'>
                <div className='flex items-start justify-between gap-2'>
                  <h2 className='text-base font-medium'>{item.title}</h2>
                  <span className='text-sm text-neutral-500'>{item.location}</span>
                </div>
                <ul className='list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300'>
                  {item.details.map((detail) => (
                    <li key={`${detail.text}-${detail.date || ''}`}>
                      <DetailRow detail={detail} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
