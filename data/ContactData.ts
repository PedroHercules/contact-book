import { ContactProps } from '@/types/contact';
import axios from 'axios';

export default class ContactData {
  static async addContact(contact: ContactProps) {
    await axios.post(
      'http://localhost:3333/contacts',
      {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        folderId: contact.folderId
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Allow-Control-Allow-Origin': '*'
        }
      }
    );
  }

  static async getContactByFolder(folderId: string) {
    const response = await axios.get('http://localhost:3333/contacts');
    const contacts = response.data;
    const contactsByFolder = contacts.filter((contact: ContactProps) => {
      return contact.folderId === folderId;
    });

    return contactsByFolder;
  }
}
