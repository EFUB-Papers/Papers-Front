export type OneFolderType = {
  folderId: number;
  folderName: string;
  folderOwnerNickname: string;
};

export type OneFolderTypeWithoutUser = Omit<
  OneFolderType,
  'folderOwnerNickname'
>;
