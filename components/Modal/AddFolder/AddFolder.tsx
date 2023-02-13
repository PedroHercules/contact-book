import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import AddButton from '@/components/shared/AddButton/AddButton';
import AddFolderIcon from "@/components/shared/Svg/AddFolderIcon";
import TextInput from '@/components/shared/Inputs/TextInput/TextInput';
import Button from '@/components/shared/Button/Button';
import { ButtonContainer, ContentContainer } from './Styles';

export default function AddFolder() {
  const [opened, setOpened] = useState(false);
  const [folderName, setFolderName] = useState('');

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Adicionar pasta"
      >
        <ContentContainer>
          <TextInput 
            placeholder='Nome da pasta'
            value={folderName}
            setFunction={(e) => setFolderName(e.target.value)}
          />

          <ButtonContainer> 
            <Button 
              text='Cancelar'
              onClick={() => setOpened(false)}
              variant='secondary'
            />
            <Button 
              text='Adicionar'
              onClick={() => {}}
              variant='primary'
            />
          </ButtonContainer>
        </ContentContainer>
      </Modal>

      <Group position="center">
        <AddButton 
          onClick={() => setOpened(true)} 
          icon={ <AddFolderIcon width={50}/> }
        />
      </Group>
    </>
  );
}