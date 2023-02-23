export interface contentUploadType {
  title: string;
  desc: string;
  tag: string[];

  fileList: FormData[];
  imgList: FormData[];
  thumbnail_no: Number;
}

export interface contentSummaryType {
  title: string;
  desc: string;
  tag: string[];

  username: string;
  group: string;
}

export interface contentInfoType {
  title: string;
  desc: string;
  tag: string[];

  username: string;
  group: string;
}

// 미완성, 필요한 인자들 추가 필요