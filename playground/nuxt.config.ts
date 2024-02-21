
import LayerModule from './layer-module'

// import { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  extends: ['layers/vuetify-layer'],
  // ssr: false,
  sourcemap: true,
  imports: {
    autoImport: true,
    injectAtEnd: true,
  },
  modules: ['@unocss/nuxt', LayerModule, 'vuetify-nuxt-module'],
   vuetify: {
    moduleOptions: {
      includeTransformAssetsUrls: {
        'v-card': [
          'image',
          'prepend-avatar',
          'append-avatar',
        ],
      },
      ssrClientHints: {
        reloadOnFirstRequest: false,
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
        viewportSize: true,
      },
      // styles: { configFile: 'assets/custom-vuetify.scss' },
    },
  },
  vite: {
    clearScreen: false,
    define: {
      'process.env.DEBUG': false,
    },
    build: {
      target: 'esnext',
    },
    vue: {
      // template: { transformAssetUrls },
      script: {
        propsDestructure: true,
      },
    },
  },
  routeRules: {
    '/no-ssr': { ssr: false },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { charset: 'utf-8' },
      ],
    },
  },
  // css: ['vuetify/styles'],
  // css: ['~/assets/main.scss'],
  future: {
    typescriptBundlerResolution: false,
  },
  features: {
    inlineStyles: false,
  },
  experimental: {
    payloadExtraction: false,
    typedPages: false,
    watcher: 'chokidar-granular',
  },
  devtools: {
    enabled: true,
  },
})
