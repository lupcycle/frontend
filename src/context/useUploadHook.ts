import fetchapi from "../api/fetchAPI";
import { contentUploadAPI, contentUploadFileAPI, contentUploadResultAPI } from "../api/upload";
import { contentUploadType } from "../type/content";




const useUploadHook = () => {

  const contentUpload = async (contentUpload: contentUploadType) => {

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

  }

  const updateContent = async (contentUpload: contentUploadType) => {}

  return {
    contentUpload,
    updateContent
  }
}

export default useUploadHook;