import { atom } from "recoil";
import { uploadContentDummy } from "../dummy/uploadingContent";


export interface uploadContentType {
  title: string;
  desc: string;
  tag: string[];

  fileList: FormData[];
  imgList: FormData[];
  thumbnail_no: Number;
}

export const uploadContentState = atom({
  key: 'uploadContentState',
  default: uploadContentDummy
})