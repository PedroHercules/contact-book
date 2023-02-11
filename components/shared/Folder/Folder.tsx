import { Paragraph, Subtitle } from "@/styles/Texts";
import { FolderContainer } from "./Styles";

interface FolderProps {
  title: string
  numberContacts: number
}

export default function Folder({ title, numberContacts }: FolderProps) {
  return (
    <FolderContainer>
      <Subtitle>
        { title }
      </Subtitle>
      <Paragraph>
        { numberContacts } contatos
      </Paragraph>
    </FolderContainer>
  )
}