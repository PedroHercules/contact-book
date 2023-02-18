const contacts = [
  {
    id: '1',
    folderId: '1',
    name: 'João da Silva',
    email: 'joao@example.com',
    phone: '(11) 99999-9999'
  },
  {
    id: '2',
    folderId: '1',
    name: 'Maria da Silva',
    email: 'maria@example.com',
    phone: '(11) 99999-8888'
  },
  {
    id: '3',
    folderId: '2',
    name: 'José da Silva',
    email: 'jose@email.com',
    phone: '(11) 99999-7777'
  },
  {
    id: '4',
    folderId: '2',
    name: 'Ana da Silva',
    email: 'ana@gmail.com',
    phone: '(11) 99999-6666'
  },
  {
    id: '5',
    folderId: '3',
    name: 'Pedro',
    email: 'pedro@gmail.com',
    phone: '(11) 99999-5555'
  }
];

export default class ContactData {
  static async getContactByFolder(folderId: string) {
    const contactsByFolder = contacts.filter((contact) => {
      return contact.folderId === folderId;
    });

    return contactsByFolder;
  }
}
