import Folder from '@/components/shared/Folder/Folder';
import { Head } from '@/components/shared/Head/Head';
import Header from '@/components/shared/Header/Header';
import Search from '@/components/shared/Search/Search';
import { ContactContainer, Container, GridContainer } from '@/styles/Globals';
import { Title } from '@/styles/Texts';
import { GetServerSideProps } from 'next';
import FolderService from '@/services/FoldersService';
import { FolderProps } from '@/types/folder';
import { useEffect, useState } from 'react';
import AddFolder from '@/components/Modal/AddFolder/AddFolder';
import Link from 'next/link';

interface HomeProps {
  folders: FolderProps[];
}

export default function Home({ folders }: HomeProps) {
  const [foldersList, setFoldersList] = useState<FolderProps[]>(folders);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    async function searchFolders() {
      if (search.length > 0) {
        const filteredFolders = await FolderService.getFolderByTitle(search);
        setFoldersList(filteredFolders);
      } else {
        setFoldersList(folders);
      }
    }
    searchFolders();
  }, [search, folders]);

  return (
    <>
      <Head />
      <main>
        <Header />
        <Container>
          <Search search={search} setSearch={setSearch} />
          <ContactContainer>
            <Title>Suas Pastas</Title>
            <GridContainer>
              {foldersList.map((folder, index) => (
                <Link
                  href={{
                    pathname: `${folder.title}`,
                    query: {
                      folderId: folder.id,
                      folderTitle: folder.title
                    }
                  }}
                  key={folder.id}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Folder title={folder.title} numberContacts={folder.numberContacts} />
                </Link>
              ))}
            </GridContainer>
          </ContactContainer>

          <AddFolder />
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const folders = await FolderService.getFolders();

  return {
    props: {
      folders
    }
  };
};
