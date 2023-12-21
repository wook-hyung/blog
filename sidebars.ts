import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'study/introduction',
    {
      type: 'category',
      label: 'React',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/react',
        },
      ],
    },
    {
      type: 'category',
      label: 'TypeScript',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/typescript',
        },
      ],
    },
    {
      type: 'category',
      label: 'Next.js',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'study/next-js',
        },
      ],
    },
  ],
  book: [
    'book/introduction',
    {
      type: 'category',
      label: '모던 리액트 Deep Dive',
      link: {
        type: 'generated-index',
        description: '모던 리액트 Deep Dive 스터디 (진행중, 2023.12 ~ )',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'book/modern-react-deep-dive',
        },
      ],
    },
    {
      type: 'category',
      label: '모던 자바스크립트 Deep Dive',
      link: {
        type: 'generated-index',
        description: '모던 자바스크립트 Deep Dive 스터디 (진행예정, 2024.01 ~ )',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'book/modern-javascript-deep-dive',
        },
      ],
    },
  ],
  article: [
    'article/introduction',
    {
      type: 'category',
      label: 'React',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'article/react',
        },
      ],
    },
  ],
};

export default sidebars;
