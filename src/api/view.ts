import fetchapi from "./fetchAPI";



export const fetchContentListAPI = async (status: string) : Promise<{
  contentNo: string;
  writer: string;
  group: string;
  title: string;
  desc: string;
  tag: string[];
  createdAt: string;
  modifiedAt: string;
  thumbnailNo: string;
}[]> => fetchapi.get(`/content/list?${status}`)


export const fetchContentViewAPI = async (no: number) : Promise<{
  writer: string;
  group: string;
  title: string;
  desc: string;
  tag: string[];
  createdAt: string;
  modifiedAt: string;
  filePath: string[];
  imgPath: string[];
}> => fetchapi.get(`/content/view?id${no}`)