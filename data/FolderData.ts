const folders = [
  {
    id: "1",
    title: 'Família',
    numberContacts: 10
  },
  {
    id: "2",
    title: 'Trabalho',
    numberContacts: 5
  },
  {
    id: "3",
    title: 'Amigos',
    numberContacts: 15
  },
  {
    id: "4",
    title: 'Escola',
    numberContacts: 20
  },
  {
    id: "5",
    title: 'Faculdade',
    numberContacts: 30
  },
  {
    id: "6",
    title: 'Contas',
    numberContacts: 5
  },
  {
    id: "7",
    title: 'Outros',
    numberContacts: 50
  },
  {
    id: "8",
    title: 'Contas',
    numberContacts: 5
  },
  {
    id: "9",
    title: 'Outros',
    numberContacts: 50
  },
  {
    id: "10",
    title: 'Contas',
    numberContacts: 5
  },
  {
    id: "11",
    title: 'Outros',
    numberContacts: 50
  },
  {
    id: "12",
    title: 'Contas',
    numberContacts: 5
  },
  {
    id: "13",
    title: 'Outros',
    numberContacts: 50
  },
  {
    id: "14",
    title: 'Contas',
    numberContacts: 5
  },
  {
    id: "15",
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