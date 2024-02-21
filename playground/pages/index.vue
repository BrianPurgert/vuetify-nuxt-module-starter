<script setup lang="ts">

import { ssrClientHintsConfiguration } from 'virtual:vuetify-ssr-client-hints-configuration'
import prependAvatar from '~/assets/logo.svg'

definePageMeta({
  middleware: 'vuetify',
})

const value = reactive<{
  name1?: string
  name2?: string
  name3?: string
}>({
  name1: undefined,
  name2: undefined,
  name3: undefined,
})


const { isRtl } = useRtl()
const x = useDate()
// eslint-disable-next-line no-console
console.log(x.date)

// eslint-disable-next-line n/prefer-global/process
if (process.client) {
  // eslint-disable-next-line no-console
  console.log(useNuxtApp().$vuetify.icons)
}

const ssrClientHints = useNuxtApp().$ssrClientHints
const { width, height, md } = useDisplay()
const theme = useTheme()

const enableToggleTheme = computed(() => {
  if (ssrClientHintsConfiguration.prefersColorScheme && ssrClientHintsConfiguration.prefersColorSchemeOptions)
    return !ssrClientHintsConfiguration.prefersColorSchemeOptions.useBrowserThemeOnly

  return false
})

function toogleTheme() {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}

// const rtl = ref(isRtl.value)

watch(isRtl, (x) => {
  // eslint-disable-next-line no-console
  console.log('isRtl', x)
  // rtl.value = x
}, { immediate: true })


</script>

<template>
  <div>
    <NuxtLink to="/no-ssr">
      Go To No-SSR Page
    </NuxtLink>
    <v-img src="~/assets/logo.svg" width="48" height="48" />
    <v-card prepend-avatar="~/assets/logo.svg" width="48" height="48" />
    <v-card :prepend-avatar="prependAvatar" width="48" height="48" />
    <div>
      <h2>SSR Client Hints Headers:</h2>
      <pre class="text-body-2">{{ ssrClientHints }}</pre>
      <h2>useDisplay</h2>
      <div>Resize the screen and refresh the page</div>
      <pre>{{ width }} x {{ height }} (md {{ md }}?)</pre>
      <div>
        <h2>useTheme: {{ theme.global.name }}</h2>
        <v-btn v-if="enableToggleTheme" @click="toogleTheme">
          toogle theme
        </v-btn>
      </div>
    </div>










        <v-icon icon="fas fa-home" />

    <v-icon class="i-mdi:account" />
    <i class="i-mdi:account block" />
    <v-checkbox v-model="isRtl" label="isRtl" readonly :true-value="true" :false-value="false" />
    <v-checkbox v-model="isRtl" label="isRtl" readonly :true-value="true" :false-value="false" false-icon="i-mdi:account" />
    <div style="display: flex">
      <v-date-picker />

    </div>
  </div>
</template>
