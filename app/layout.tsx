import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full flex flex-col">
        <div className="overflow-x-auto flex-1 flex flex-col">
          <div className="w-screen flex-1 min-w-[300px] overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
