import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useContentHook from "../../context/useContentHook";
import { contentSummaryListState } from "../../store/content";


const ContentSummaryCardGrid = () => {
  
  const { loadContentList } = useContentHook;

  useEffect(() => {
    loadContentList();
  })

  const contentSummaryList = useRecoilValue(contentSummaryListState)

  return (
    <>
    {contentSummaryList.map((contentSummary) => {
    
    })}
    </>
  )
}

export default ContentSummaryCardGrid;