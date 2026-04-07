import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Effective AI Coding for SDS',
    template: '%s | Effective AI Coding',
  },
  description:
    '개발자가 AI 코드 에이전트를 "감"이 아닌 "원칙"으로 다루는 법 — Context · Plan · Token · Quality · Multi-Agent',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<strong>Effective AI Coding</strong>}
            >
              <Search placeholder="검색..." />
            </Navbar>
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/imakerjun/effective-ai-coding-sds"
          footer={
            <Footer>
              <p>
                멀티캠퍼스 × 삼성SDS 온라인 강의 — 임동준(makerjun)
              </p>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
