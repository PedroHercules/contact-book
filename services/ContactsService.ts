import ContactData from '@/data/ContactData';
import { ContactProps } from '@/types/contact';

export default class ContactsService {
  static async addContact(contact: ContactProps) {
    console.log('contact', contact);
    await ContactData.addContact(contact);
  }

  static async getContacts(folderId: string) {
    const contacts = await ContactData.getContactByFolder(folderId);
    return contacts;
  }
}
