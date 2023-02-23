export interface contentUploadType {
  title: string;
  desc: string;
  tag: string[];

  fileList: FormData[];
  imgList: FormData[];
  thumbnail_no: Number;
}

export const contentSumm