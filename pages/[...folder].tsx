import AddButton from '@/components/shared/AddButton/AddButton';
import ContactCard from '@/components/shared/ContactCard/ContactCard';
import { Head } from '@/components/shared/Head/Head';
import Header from '@/components/shared/Header/Header';
import Search from '@/components/shared/Search/Search';
import AddContactIcon from '@/components/shared/Svg/AddContactIcon';
import ContactsService from '@/services/ContactsService';
import { ContactContainer, Container, GridContainer } from '@/styles/Globals';
import { Paragraph, Title } from '@/styles/Texts';
import { ContactProps } from '@/types/contact';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface FolderProps {
  contacts: ContactProps[];
}

export default function Folder({ contacts }: FolderProps) {
  const router = useRouter();
  const { folderId, folderTitle } = router.query;
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
          <AddButton icon={<AddContactIcon width={50} />} />
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
      contacts
    }
  };
};
