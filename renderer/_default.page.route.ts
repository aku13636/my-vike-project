export { onBeforeRoute }
import type { PageContextClient } from './types'
import { extractLocale } from '#root/utils/locales'

export const filesystemRoutingRoot = '/'

function onBeforeRoute(pageContext: PageContextClient) {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal)
  
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`. We can then use https://vike.dev/pageContext-anywhere to access pageContext.locale in any React/Vue component.
      locale,
      urlOriginal:urlWithoutLocale,
      urlWithoutLocale,//使用客户端路由，为实现多语言，将不带多语言的url传递到客户端，以避免匹配不到路由
    }
  }
}
