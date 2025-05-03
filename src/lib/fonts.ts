import { Dancing_Script, Great_Vibes, Lora } from 'next/font/google';

export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
});

export const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

export const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
}); 