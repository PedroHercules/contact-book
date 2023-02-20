import { useState } from 'react';
import { Modal, Group } from '@mantine/core';
import AddButton from '@/components/shared/AddButton/AddButton';
import { ButtonContainer, FormContainer } from '@/styles/modal';
import { InputStyled } from '@/styles/modal';
import Button from '@/components/shared/Button/Button';
import AddContactIcon from '@/components/shared/Svg/AddContactIcon';
import { useForm } from 'react-hook-form';
import ContactsService from '@/services/ContactsService';
import Router from 'next/router';

interface AddContactProps {
  folderId: string;
}

export default function AddContact({ folderId }: AddContactProps) {
  const [opened, setOpened] = useState(false);
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const contactData = {
      ...data,
      folderId
    };
    await ContactsService.addContact(contactData);
    setOpened(false);
    Router.reload();
  }
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Adicionar contato">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputStyled placeholder="Nome" {...register('name')} />
          <InputStyled placeholder="Telefone" {...register('phone')} />
          <InputStyled placeholder="email" {...register('email')} />

          <ButtonContainer>
            <Button text="Cancelar" onClick={() => setOpened(false)} variant="secondary" />
            <Button text="Adicionar" variant="primary" type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Modal>

      <Group position="center">
        <AddButton onClick={() => setOpened(true)} icon={<AddContactIcon width={50} />} />
      </Group>
    </>
  );
}
