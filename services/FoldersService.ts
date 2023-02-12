import FolderData from '../data/FolderData';

export default class FolderService {
  static async getFolders() {
    const folders = await FolderData.getFolderData();
    return folders;
  }
}