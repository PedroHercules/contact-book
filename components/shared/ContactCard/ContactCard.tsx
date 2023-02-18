import {
  Paragraph,
  Subtitle
} from '@/styles/Texts';
import { ContactCardContainer } from './Styles';

interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
}

export default function ContactCard({
  email,
  name,
  phone
}: ContactCardProps) {
  return (
    <ContactCardContainer>
      <Subtitle>{name}</Subtitle>
      <Paragraph>
        <strong>Tel</strong>: {phone}
      </Paragraph>
      <Paragraph>
        <strong>E-mail</strong>: {email}
      </Paragraph>
    </ContactCardContainer>
  );
}
