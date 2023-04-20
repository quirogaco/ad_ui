import { defineConfig } from 'vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        VueMacros({
            plugins: {
                vue: Vue()
            },
        }),

        vuetify({
            autoImport: true
        })
    ],
  })