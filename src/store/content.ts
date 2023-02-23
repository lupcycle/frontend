import { atom } from "recoil";
import { uploadContentDummy } from "../dummy/uploadingContent";




export const uploadContentState = atom({
  key: 'uploadContentState',
  default: uploadContentDummy
})