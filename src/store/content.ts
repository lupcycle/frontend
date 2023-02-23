import { atom } from "recoil";
import { contentUploadDummy } from "../dummy/uploadingContent";




export const contentUploadState = atom({
  key: 'contentUploadState',
  default: contentUploadDummy
})

