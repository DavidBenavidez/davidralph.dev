import { withPrefix } from 'gatsby';

export const TITLE = 'David Benavidez - Developer. Geek. Know-it-all.';
export const DESCRIPTION =
  'Hi there! I’m David. I’m a Software Engineer from Metro Manila, Philippines. I love developing web/desktop applications and I look forward to forging a steady career path in the field of Software Engineering.';
// For custom domain
// export const URL = 'https://davidralph.dev/';
export const URL = 'https://drbenavidez.netlify.com/';
export default (title = TITLE, description = DESCRIPTION, url = URL) => [
  {
    name: 'description',
    content: description,
  },
  {
    name: 'keywords',
    content:
      "David Ralph de Jesus Benavidez, David Ralph Benavidez, David Benavidez, Development, Software Engineer, Engineer, Computer Science, UPLB, University of the Philippines, Los Baños, UP, Cheetah Digital, Futurity Learning, UPLB SRG, UPLB Systems Research Group, YSES, Young Software Engineers' Society",
  },
  {
    name: 'author',
    content: 'David Ralph de Jesus Benavidez, radicalralphhh@gmail.org',
  },
  {
    name: 'url',
    content: url,
  },
  {
    name: 'theme-color',
    content: '#001D25',
  },
  // Twitter
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: '@RadicalRalph',
  },
  {
    name: 'twitter:url',
    content: url,
  },
  {
    name: 'description',
    content: description,
  },
];

export const link = [
  {
    rel: 'shortcut icon',
    type: 'image/ico',
    sizes: '64x64',
    href: withPrefix('/icons/64x64.ico'),
  },
  {
    rel: 'shortcut icon',
    type: 'image/ico',
    sizes: '256x256',
    href: withPrefix('/icons/256x256.ico'),
  },
];
