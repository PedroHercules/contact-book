import axios from 'axios';

export default class FolderData {
  public static async addFolder(folderName: string) {
    await axios.post(
      'http://localhost:3333/folders',
      {
        name: folderName
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Allow-Control-Allow-Origin': '*'
        }
      }
    );
  }
  public static async getFolderData() {
    const response = await axios.get('http://localhost:3333/folders');
    return response.data;
  }
}
