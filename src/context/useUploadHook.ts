import fetchapi from "../api/fetchAPI";
import { uploadContentAPI, uploadContentFileAPI } from "../api/list";
import { uploadContentType } from "../store/content";




const useUploadHook = {

  uploadContent : async (uploadContent: uploadContentType) => {

    const { title, desc, tag, fileList, imgList } = uploadContent;

    const path = await uploadContentAPI({
      title, desc, tag,
      fileCnt: fileList.length,
      imgCnt: imgList.length
    })
    
    path.imgPath.map((path, idx) => {
      uploadContentFileAPI({
        path,
        file: imgList[idx]
      })
    })

    path.filePath.map((path, idx) => {
      uploadContentFileAPI({
        path,
        file: fileList[idx]
      })
    })

  },

  updateContent : async (uploadContent: uploadContentType) => {}

}

export default useUploadHook;