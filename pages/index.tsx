import { Head } from '@/components/shared/Head/Head'
import Header from '@/components/shared/Header/Header'
import Search from '@/components/shared/Search/Search'
import { Container, GlobalStyle } from '@/styles/Globals'
import { Paragraph, Title } from '@/styles/Texts'

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Header />
        <Container>
          <Search />
        </Container>
      </main>
    </>
  )
}
