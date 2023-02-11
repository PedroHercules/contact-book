import { Head } from '@/components/shared/Head/Head'
import Header from '@/components/shared/Header/Header'
import { GlobalStyle } from '@/styles/Globals'
import { Paragraph, Title } from '@/styles/Texts'

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Header />
      </main>
    </>
  )
}
