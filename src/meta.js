import { withPrefix } from 'gatsby';
import preview from 'assets/images/bg.png';

export const TITLE = 'David Benavidez - Developer. Geek. Know-it-all.';
export const DESCRIPTION =
  'Hi there! I’m David. I’m a Software Engineer from Metro Manila, Philippines. I love developing web/desktop applications and I look forward to forging a steady career path in the field of Software Engineering.';
export const URL = 'https://davidralph.dev/';
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
  // Open Grraph Meta tags: https://www.addtoany.com/ext/meta-tags/
  {
    name: 'og:title',
    content: title,
  },
  {
    name: 'og:image',
    content: preview,
  },
  {
    name: 'og:description',
    content: description,
  },
  // Facebook
  {
    name: 'fb:page_id',
    content: 'davidralph',
  },
  {
    name: 'og:type',
    content: 'website',
  },
  {
    name: 'og:site_name',
    content: title,
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
