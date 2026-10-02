import bibtexParse from 'bibtex-parse-js';
import { personalInfo } from '@/data/website.config';
import { CustomMDX } from '@/components/mdx';

function authorProcess(authorsStr: string, personalInfoName: string, equalContribution?: string): string {
  const authors = authorsStr.split('and');
  const equalContributors = equalContribution?.split(',').map((position) => Number(position.trim())) || [];

  const boldedAuthors = authors.map((author, index) => {
    author = author.trim().split(', ').reverse().join(' ').trim();
    const marker = equalContributors.includes(index + 1) ? '<sup>*</sup>' : '';

    if (author === personalInfoName) {
      return `**${personalInfoName}**${marker}`;
    }

    return `${author}${marker}`;
  });

  return boldedAuthors.join(', ');
}

interface BibtexEntry {
  entryKey: string;
  entryTags: {
    author?: string;
    title?: string;
    url?: string;
    journal?: string;
    booktitle?: string;
    year?: string;
    award?: string;
    equalcontribution?: string;
  };
}

interface ParsedBibtex {
  entryKey: string;
  citationKey: string;
  entryType: string;
  entryTags: BibtexEntry['entryTags'];
}

interface PublicationsProps {
  bibtex: string;
}

export default function Publications({ bibtex }: PublicationsProps) {
  const parsed = bibtexParse.toJSON(bibtex) as ParsedBibtex[];

  return (
    <ol className='flex flex-col gap-4'>
      {parsed.map((item) => {
        const processedAuthors = authorProcess(
          item.entryTags.author || '',
          personalInfo.name,
          item.entryTags.equalcontribution
        );
        return (
          <li key={item.entryTags.title} className=' list-decimal'>
            <h2 className='text-base font-normal dark:text-neutral-50'>
              {item.entryTags.url ? (
                <a
                  href={item.entryTags.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline'
                >
                  {item.entryTags.title?.replace(/{|}/g, '')}
                </a>
              ) : (
                item.entryTags.title?.replace(/{|}/g, '')
              )}
            </h2>

            <div className=' font-light text-neutral-600 dark:text-neutral-300'>
              {<CustomMDX source={processedAuthors} />}
              {item.entryTags.equalcontribution && (
                <p className='text-sm'>* Equal contribution</p>
              )}

              <span className=' mr-2 italic font-normal'>
                {item.entryTags.journal?.replace(/{|}/g, '') ||
                  item.entryTags.booktitle?.replace(/{|}/g, '')}
              </span>
              <span className='mr-2'>{item.entryTags.year}</span>
              <span className='font-bold h-5'>{item.entryTags.award}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
