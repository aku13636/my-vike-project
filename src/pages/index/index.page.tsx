
import { setLocale } from '#root/utils/locales'
import { t } from '@lingui/macro'
export { Page }

function Page() {
  return (
    <>
      <h1>{t`greeting1`}！</h1>
      <h1>{t`greeting2`}！</h1>
      <button onClick={()=>{
        setLocale('en')
    }}>切换</button>
    </>
  )
}
