import { usePageContext } from './usePageContext'
import type { PageContext } from './types'

export { Link }

function Link(props: { href?: string; className?: string; children: React.ReactNode }) {
  const pageContext:PageContext = usePageContext()
  //通过全局urlWithoutLocale判断哪个导航栏激活
  const { locale } = pageContext
  console.log('link',locale)
  const className = [props.className, pageContext.urlWithoutLocale === props.href && 'is-active'].filter(Boolean).join(' ')

  return <a {...props} href={(locale==='zh'?'':'/'+locale)+props.href}  className={className} />
}
