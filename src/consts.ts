// src/consts.ts

export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  POSTS_PER_PAGE: number;
  SITEURL: string;
};

export type Link = {
  href: string;
  label: string;
};

export const SITE: Site = {
  TITLE: "Mehrab Mahmud Udoy",
  DESCRIPTION: "Welcome to my website.",
  EMAIL: "rimehrab@pissmail.com",
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 5,
  SITEURL: "https://rimehrab.github.io",
};

export const NAV_LINKS: Link[] = [
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
  { href: "/credit", label: "credit" },
  { href: "/tags", label: "tags" },
  { href: "/webring", label: "webring" },
];

export const SOCIAL_LINKS: Link[] = [
  { href: "https://github.com/rimehrab", label: "GitHub" },
  { href: "https://t.me/rimehrab", label: "Telegram" },
  { href: "rimehrab@pissmail.com", label: "Email" },
  { href: "/rss.xml", label: "RSS" },
];
