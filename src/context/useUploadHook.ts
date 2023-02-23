import fetchapi from "../api/fetchAPI";
import { contentUploadAPI, contentUploadFileAPI, contentUploadResultAPI } from "../api/list";
import { contentUploadType } from "../type/content";




const useUploadHook = {

  contentUpload : async (contentUpload: contentUploadType) => {

    const { title, desc, tag, fileList, imgList } = contentUpload;

    const path = await contentUploadAPI({
      title, desc, tag,
      fileCnt: fileList.length,
      imgCnt: imgList.length
    })

    try {
      await Promise.all([
        ...path.imgPath.map((path, idx) => {
          contentUploadFileAPI({
            path,
            file: imgList[idx]
          })
        }),
  
        ...path.filePath.map((path, idx) => {
          contentUploadFileAPI({
            path,
            file: fileList[idx]
          })
        })
      ])

      contentUploadResultAPI(true)

    } catch {
      contentUploadResultAPI(false)
    }

  },

  updateContent : async (contentUpload: contentUploadType) => {}

}

export default useUploadHook;