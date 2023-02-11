import Folder from '@/components/shared/Folder/Folder'
import { Head } from '@/components/shared/Head/Head'
import Header from '@/components/shared/Header/Header'
import Search from '@/components/shared/Search/Search'
import { ContactContainer, Container, GlobalStyle, GridContainer } from '@/styles/Globals'
import { Title } from '@/styles/Texts'

const folders = [
  {
    title: 'Família',
    numberContacts: 10
  },
  {
    title: 'Trabalho',
    numberContacts: 5
  },
  {
    title: 'Amigos',
    numberContacts: 15
  },
  {
    title: 'Escola',
    numberContacts: 20
  },
  {
    title: 'Faculdade',
    numberContacts: 30
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  }
]


export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Header />
        <Container>
          <Search />
          <ContactContainer>
            <Title>
              Pastas
            </Title>
            <GridContainer>
              {
                folders.map((folder, index) => (
                  <Folder 
                    key={index}
                    title={folder.title}
                    numberContacts={folder.numberContacts}
                  />
                ))
              }
            </GridContainer>
          </ContactContainer>
        </Container>
      </main>
    </>
  )
}
