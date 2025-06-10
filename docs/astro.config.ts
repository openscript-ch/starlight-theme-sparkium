import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeSparkium from 'starlight-theme-sparkium'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-theme-sparkium/edit/main/docs/',
      },
      plugins: [starlightThemeSparkium()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://bsky.app/profile/hideoo.dev', icon: 'blueSky', label: 'Bluesky' },
        { href: 'https://github.com/HiDeoo/starlight-theme-sparkium', icon: 'github', label: 'GitHub' },
      ],
      title: 'Starlight Sparkium',
    }),
  ],
  site: 'https://starlight-theme-sparkium.vercel.app',
})
