import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Coyote Game Hub',
  description: '郊狼战败惩罚控制器',

  theme: defaultTheme({
    logo: 'images/screenshot-widget.png',

    navbar: [
      '/',
      '/get-started',
      '/configuration.md',
      '/api.md',
      { text: '下载插件', link: 'https://cgh-download.hyperz.top/%E6%B8%B8%E6%88%8F%E6%8F%92%E4%BB%B6' }
    ],
  }),

  bundler: viteBundler(),
})
