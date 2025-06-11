# starlight-theme-sparkium

A theme for documenting classes and courses. This is a fork of the [Starlight Theme Rapide](https://github.com/HiDeoo/starlight-theme-rapide).

## Usage

1. Initialize a new Astro Starlight project:

   ```bash
   pnpm create astro --template starlight
   ```

1. Add the theme to your project:

   ```bash
   pnpm add starlight-theme-sparkium
   ```

1. Update your `starlight.config.mjs` to use the theme:

   ```javascript
   import starlight from '@astrojs/starlight'
   import { defineConfig } from 'astro/config'
   import starlightThemeSparkium from 'starlight-theme-sparkium'

   export default defineConfig({
     integrations: [
       starlight({
         plugins: [starlightThemeSparkium()],
         title: 'My Course',
       }),
     ],
   })
   ```
