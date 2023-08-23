import { DISCORD_LINK, TWITTER_LINK, TELEGRAM_LINK, GITHUB_LINK } from '~envs'

export const PAGES = {
  HOME: {
    path: '/',
    title: 'WAGMI comics',
  },
  COMICS: {
    path: '/comics',
    title: 'Comic list',
  },
  ABOUT: {
    path: '/about',
    title: 'About',
  },
  TOS: {
    path: '/tos',
    title: 'Terms of Service',
  },
  PRIVACY: {
    path: '/privacy',
    title: 'Privacy Policy',
  },
}

export const SOCIAL_LINKS = {
  DISCORD: DISCORD_LINK,
  GITHUB_LINK: GITHUB_LINK,
  TELEGRAM: TELEGRAM_LINK,
  TWITTER_LINK: TWITTER_LINK,
}
