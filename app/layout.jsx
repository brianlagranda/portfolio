import '../styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Brian Lagranda ● Portfolio',
  description: 'Designed and coded by Brian Lagranda',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <body className='px-4 md:w-3/4 md:mx-auto  z-10'>{children}</body>
    </html>
  );
}

