import { contentInfoType, contentSummaryType, contentUploadType } from "../type/content";




export let contentUploadDummy: contentUploadType = {
  title: "Title",
  desc: "수련회 준비",
  tag: ["가", "나", "다"],
  fileList: [],
  imgList: [],
  thumbnail_no: -1,
}

export let contentSummaryListDummy: contentSummaryType[] = [
  {
    title: "title",
    desc: "수련회 준비",
    tag: ["가", "나", "다"],

    username: "오규민",
    group: "서울시민교회"
  },

  {
    title: "title",
    desc: "수련회 준비",
    tag: ["가", "나", "다"],

    username: "오규민",
    group: "서울시민교회"
  },
]

export let contentInfoDummy: contentInfoType = {
  title: "title",
  desc: "수련회 준비",
  tag: ["가", "나", "다"],

  username: "오규민",
  group: "서울시민교회"
}