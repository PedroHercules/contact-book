import FolderData from '../data/FolderData';

export default class FolderService {
  static async getFolders() {
    const folders = await FolderData.getFolderData();
    return folders;
  }

  static async getFolderByTitle(title: string) {
    const folders = await FolderData.getFolderData();
    const folder = folders.filter((folder) => folder.title.toLowerCase().includes(title.toLowerCase()));
    return folder;
  }
}