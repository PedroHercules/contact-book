const folders = [
  {
    title: 'Família',
    numberContacts: 10
  },
  {
    title: 'Trabalho',
    numberContacts: 5
  },
  {
    title: 'Amigos',
    numberContacts: 15
  },
  {
    title: 'Escola',
    numberContacts: 20
  },
  {
    title: 'Faculdade',
    numberContacts: 30
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  },
  {
    title: 'Contas',
    numberContacts: 5
  },
  {
    title: 'Outros',
    numberContacts: 50
  },
]


export default class FolderData {
    public static async addFolder(folder: any) {
      folders.push(folder);
    }
    public static async getFolderData() {
        return folders;
    }
}