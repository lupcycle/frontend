

export interface ContentCardProps {
  title: string;
  date: string;
  tag: string[];
  content: string;

  imgurl: string[];
  fileurl: string[];

  username: string;
  group: string;

  like?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}



const ContenSummaryCard = ({title, date}: ContentCardProps) => {
  return (
    <>
    </>
  )
}

export default ContenSummaryCard;