import fetchapi from "./fetchAPI";



export const uploadContentAPI = async (input : {
  title: string;
  desc: string;
  tag: string[];
  fileCnt: number;
  imgCnt: number;
}) : Promise<{
  filePath: string[];
  imgPath: string[];
}> => {
  return fetchapi.post("/content/upload", {
    ...input
  })
}

export const uploadContentFileAPI = async ({path, file} : {
  path: string;
  file: FormData;
}) : Promise<void> => {
  fetch(`/asset/upload?${path}`, {
    method: 'POST',
    body: file,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
