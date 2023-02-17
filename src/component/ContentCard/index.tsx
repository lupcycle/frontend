

export interface ContentCardProps {
  title: string;
  date: string;
  tag: string[];
  content: string;
  img: string[];

  username: string;
  team: string;

  like: number;
  isLiked: boolean;
  isBookmarked: boolean;
}



const ContentCard = ({title, date}: ContentCardProps) => {
  return (
    <>
    </>
  )
}

export default ContentCard;