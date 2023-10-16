import { usePageContext } from './usePageContext'

export { Link }

function Link(props: { href?: string; className?: string; children: React.ReactNode }) {
  const pageContext = usePageContext()
  //通过全局urlWithoutLocale判断哪个导航栏激活
  const className = [props.className, pageContext.urlWithoutLocale === props.href && 'is-active'].filter(Boolean).join(' ')
  
  return <a {...props} className={className} />
}
