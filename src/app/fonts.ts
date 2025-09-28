import { Manrope, Lora } from 'next/font/google';

export const fontSans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});
