import ContactData from '@/data/ContactData';

export default class ContactsService {
  static async getContacts(folderId: string) {
    const contacts = await ContactData.getContactByFolder(folderId);
    return contacts;
  }
}
