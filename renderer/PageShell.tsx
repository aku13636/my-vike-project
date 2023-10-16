import React, { useState,useEffect } from 'react'
import logo from './avatar.jpg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import './PageShell.css'
import { Link } from './Link'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  
  
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <I18nProvider i18n={i18n}>
          <Layout locale='zhCN' >
            <Sidebar>
              <Logo />
              <Link className='navitem' href="/" >
                Home
              </Link>
              <Link className='navitem' href="/about">
                About
              </Link>
            </Sidebar>
            <Content>{children}</Content>
          </Layout>
        </I18nProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({locale, children }: {locale:any, children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
      
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
