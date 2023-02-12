import Folder from '@/components/shared/Folder/Folder'
import { Head } from '@/components/shared/Head/Head'
import Header from '@/components/shared/Header/Header'
import Search from '@/components/shared/Search/Search'
import { ContactContainer, Container, GlobalStyle, GridContainer } from '@/styles/Globals'
import { Title } from '@/styles/Texts'
import { GetServerSideProps } from 'next'
import FolderService from '@/services/FoldersService'
import { FolderProps } from '@/types/folder'

interface HomeProps {
  folders: FolderProps[]
}


export default function Home({ folders }: HomeProps) {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const folders = await FolderService.getFolders()

  return {
    props: {
      folders
    }
  }
}
