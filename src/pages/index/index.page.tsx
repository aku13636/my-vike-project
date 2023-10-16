
import { setLocale } from '#root/utils/locales'
import { t } from '@lingui/macro'
import { usePageContext } from 'renderer/usePageContext'
export { Page }

function Page() {
  const pageContext = usePageContext()
  const { locale } = pageContext
  return (
    <>
      <h1>{t`greeting1`}！</h1>
      <h1>{t`greeting2`}！</h1>
      <button onClick={()=>{
        console.log('locale',locale)
        debugger
        setLocale(locale==='en'?'zh':'en')
    }}>切换</button>
    </>
  )
}
