import Image from 'next/image';

const projects = [
  {
    id: crypto.randomUUID(),
    title: 'Tecnological',
    skills: ['❤', '🧡', '💛', '💚', '💙', '💜'],
    img: '/img/projects/tecnological.png',
    urlDeploy: 'urlDeploy',
    urlGithub: 'urlGithub',
  },
];

export default function Projects() {
  return (
    <>
      {projects.map(({ id, title, skills, img, urlDeploy, urlGithub }) => (
        <div
          key={id}
          className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
        >
          <a href='#'>
            <Image
              width='500'
              height='500'
              priority={true}
              style={{ objectFit: 'contain' }}
              className='rounded-t-lg'
              src={img}
              alt='Ecommerce project Tecnological'
            />
          </a>
          <div className='p-5'>
            <a href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {title}
              </h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href='#'
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

