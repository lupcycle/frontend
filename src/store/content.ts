import { atom } from "recoil";
import { contentInfoDummy, contentSummaryListDummy, contentUploadDummy } from "../dummy/content";




export const contentUploadState = atom({
  key: 'contentUploadState',
  default: contentUploadDummy
})



export const isContentListLoadedState = atom({
  key: 'isContentListLoadedState',
  default: false
})

export const contentSummaryListState = atom({
  key: 'contentSummaryListState',
  default: contentSummaryListDummy
})



export const isContentLoadedState = atom({
  key: 'isContentLoadedState',
  default: false
})

export const contentInfoState = atom({
  key: 'contentSummaryList',
  default: contentInfoDummy
})