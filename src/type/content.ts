export interface uploadContentType {
  title: string;
  desc: string;
  tag: string[];

  fileList: FormData[];
  imgList: FormData[];
  thumbnail_no: Number;
}