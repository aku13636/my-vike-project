import { i18n } from '@lingui/core'
export { extractLocale }
export const locales = ['zh', 'en']
export const localeDefault = locales[0]
export async function dynamicActivate(locale: string) {
  
  const { messages } = await import(`#root/locales/${locale}/messages.ts`)
/*   debugger */
  i18n.load(locale, messages)
  i18n.activate(locale)
}

function extractLocale(url:any) {
  const urlPaths = url.split('/')

  let locale
  let urlWithoutLocale
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1]
  if (locales.filter((locale) => locale !== localeDefault).includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = '/' + urlPaths.slice(2).join('/')
  } else {
    locale = localeDefault
    urlWithoutLocale = url
  }
  return { locale, urlWithoutLocale }
}


export function setLocale(lang:string,path?:string){
  path = path ?? ''
  const _lang = lang===localeDefault?'':lang
  document.location.assign(`//${location.host}/${_lang}`)
}

