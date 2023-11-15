export type OneFolderType = {
  folderId: number;
  folderName: string;
  folderOwnerNickname: string;
};

export type MyFolderType = Omit<OneFolderType, 'folderOwnerNickname'>;
