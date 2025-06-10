import type { StarlightPlugin } from '@astrojs/starlight/types'

import { overrideComponents } from './libs/starlight'

export default function starlightThemeSparkiumPlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-sparkium',
    hooks: {
      'config:setup'({ config, logger, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true ? {} : config.expressiveCode

        updateConfig({
          components: overrideComponents(config, ['LanguageSelect', 'Pagination', 'ThemeSelect'], logger),
          customCss: [
            ...(config.customCss ?? []),
            'starlight-theme-sparkium/styles/layers',
            'starlight-theme-sparkium/styles/theme',
            'starlight-theme-sparkium/styles/base',
            ...(config.markdown?.headingLinks === false ? [] : ['starlight-theme-sparkium/styles/anchors']),
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ['vitesse-dark', 'vitesse-light'],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: 'var(--sl-sparkium-ui-border-color)',
                    borderRadius: '0.5rem',
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: 'unset',
                      editorActiveTabIndicatorBottomColor: 'var(--sl-color-gray-3)',
                      editorTabBarBorderBottomColor: 'var(--sl-sparkium-ui-border-color)',
                      frameBoxShadowCssValue: 'unset',
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                    textMarkers: {
                      backgroundOpacity: '40%',
                      markBackground: 'var(--sl-sparkium-ec-marker-bg-color)',
                      markBorderColor: 'var(--sl-sparkium-ec-marker-border-color)',
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers,
                    },
                  },
                },
        })
      },
    },
  }
}
