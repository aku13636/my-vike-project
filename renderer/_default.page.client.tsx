export { render }
// 自定义页面过渡动画
export { onPageTransitionStart }
export { onPageTransitionEnd }

//To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting
export const hydrationCanBeAborted = true


import { PageShell } from './PageShell'
import ReactDOM from 'react-dom/client'
import type { PageContextClient } from './types'
import {dynamicActivate} from '#root/utils/locales'

let root: ReactDOM.Root
// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: PageContextClient) {
  
  const { Page,locale, pageProps } = pageContext
 
  
  //动态激活多语言
  await dynamicActivate(locale)
  if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  const container = document.getElementById('react-root')
  
  if (!container) throw new Error('DOM element #react-root not found')
  const appLayout = 
     <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell> 
  // `pageContext.isHydration` 由 `vite-plugin-ssr` 设置，
  // 当页面已经渲染为 HTML 时为 `true`
  if (pageContext.isHydration) {
    // 我们给第一个页面 hydrate（由于我们做首屏 SSR，
    // 第一个页面已经渲染为 HTML，我们只需要对其 hydrate）
    root = ReactDOM.hydrateRoot(container, appLayout)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(appLayout)
  }
    
}


function onPageTransitionStart(pageContext) {

  console.log('Page transition start',pageContext.locale)
  // `pageContext.isBackwardNavigation` 也在 `render(pageContext)`
  // 和 `onPageTransitionEnd(pageContext)` 中设置。
  console.log('Is backwards navigation?', pageContext.isBackwardNavigation)
  // 例如：
  document.body.classList.add('page-transition')
}
function onPageTransitionEnd(pageContext) {
  console.log('Page transition end')
  // 例如：
  document.body.classList.remove('page-transition')
}