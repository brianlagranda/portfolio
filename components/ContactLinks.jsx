import Link from 'next/link';
import Image from 'next/image';

export default function ContactLinks() {
  return (
    <>
      <Link href='https://www.linkedin.com/in/brianlagranda/'>
        <Image
          src='/img/icons/linkedin.svg'
          width='0'
          height='0'
          alt='Linkedin icon'
          className='w-10 h-auto hover:scale-110'
        />
      </Link>

      <Link href='https://github.com/brianlagranda'>
        <Image
          src='/img/icons/github.svg'
          width='0'
          height='0'
          alt='Github icon'
          className='w-10 h-auto hover:scale-110'
        />
      </Link>

      <Link href='mailto:brianlagranda@gmail.com'>
        <Image
          src='/img/icons/mail.svg'
          width='0'
          height='0'
          alt='Mail icon'
          className='w-10 h-auto hover:scale-110'
        />
      </Link>
    </>
  );
}

