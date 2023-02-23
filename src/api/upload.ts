import { useNavigate } from "react-router-dom";
import fetchapi from "./fetchAPI";



export const contentUploadAPI = async (input : {
  title: string;
  desc: string;
  tag: string[];
  fileCnt: number;
  imgCnt: number;
}) : Promise<{
  filePath: string[];
  imgPath: string[];
}> => fetchapi.post("/content/upload", input)



export const contentUploadFileAPI = async ({path, file} : {
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

export const contentUploadResultAPI = async (result: boolean) : Promise<void> =>
  fetchapi.post(`/content/upload/result?${result ? 'true' : 'false'}`)



