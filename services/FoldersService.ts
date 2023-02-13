import { FolderProps } from '@/types/folder';
import FolderData from '../data/FolderData';

export default class FolderService {
  static async addFolder(folder: any) {
    await FolderData.addFolder(folder);
  }

  static async getFolders() {
    const folders = await FolderData.getFolderData();
    return folders;
  }

  static async getFolderByTitle(title: string) {
    const folders = await FolderData.getFolderData();
    const folder = folders.filter((folder: FolderProps) => folder.title?.toLowerCase().includes(title.toLowerCase()));
    return folder;
  }
}