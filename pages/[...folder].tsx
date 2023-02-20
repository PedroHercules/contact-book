import { useEffect } from 'react';
import AddContact from '@/components/Modal/AddContact/AddContact';
import ContactCard from '@/components/shared/ContactCard/ContactCard';
import { Head } from '@/components/shared/Head/Head';
import Header from '@/components/shared/Header/Header';
import Search from '@/components/shared/Search/Search';
import ContactsService from '@/services/ContactsService';
import { ContactContainer, Container, GridContainer } from '@/styles/Globals';
import { Paragraph, Title } from '@/styles/Texts';
import { ContactProps } from '@/types/contact';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface FolderProps {
  contacts: ContactProps[];
  folderId: string;
}

export default function Folder({ contacts, folderId }: FolderProps) {
  const router = useRouter();
  const { folderTitle } = router.query;

  useEffect(() => {}, [contacts]);
  return (
    <>
      <Head />
      <main>
        <Header />
        <Container>
          <Search search="" setSearch={() => {}} />
          <ContactContainer>
            <Title>Contatos</Title>
            <Paragraph>/{folderTitle}</Paragraph>
            <GridContainer>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <ContactCard
                    key={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                  />
                ))
              ) : (
                <Paragraph>Esta pasta não possui contatos!</Paragraph>
              )}
            </GridContainer>
          </ContactContainer>
          <AddContact folderId={folderId} />
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const folderId = ctx.query.folderId as string;
  const contacts = await ContactsService.getContacts(folderId);
  return {
    props: {
      contacts,
      folderId
    }
  };
};
