
import {
  Contents1,
  OverlapGroup4,
  Picture,
  ContentBackground,
  Like,
  Save,
  User,
  FlexRow,
  User1,
  FlexCol,
  UserName,
  Team,
  Tagtagtag,
  Title,
  OverlapGroupContainer,
  FlexCol1,
  FlexRow1,
  User2,
  FlexCol2,
  DawitKwak,
  Text3,
  IconBookmark,
  FlexCol3,
  SSGQT,
  Text4,
  IconHeart,
  FlexCol4,
  FlexRow2,
  FlexCol5,
  Ohgyumin83,
  IconBookmark1,
  FlexCol6,
  Text5,
  Text6,
  IconHeart1,
  OverlapGroupContainer1,
  OverlapGroup,
  Picture1,
  Unlike,
  Unsave,
  CoolWon,
  SFC,
  Text1,
  Text2,
  User3,
  Text7,
} from "./screen";


function Contents(props: any) {
  const {
    iconHeart1,
    iconBookmark1,
    user1,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    user2,
    spanText5,
    spanText6,
    iconBookmark2,
    spanText7,
    spanText8,
    iconHeart2,
    user3,
    spanText9,
    spanText10,
    iconBookmark3,
    spanText11,
    spanText12,
    iconHeart3,
    picture2,
    unlike,
    iconBookmark4,
    spanText13,
    spanText14,
    spanText15,
    user4,
    spanText16,
    user5,
    spanText17,
    spanText18,
    iconBookmark5,
    spanText19,
    spanText20,
    iconHeart4,
  } = props;

  return (
    <Contents1>
      <OverlapGroup4>
        <Picture src="picture-2.png" alt="picture" />
        <ContentBackground></ContentBackground>
        <Like src={iconHeart1} alt="like" />
        <Save src={iconBookmark1} alt="save" />
        <User>
          <FlexRow>
            <User1 src={user1} alt="user" />
            <FlexCol>
              <UserName>
                <span>
                  <span className="inter-medium-black-15px">{spanText1}</span>
                </span>
              </UserName>
              <Team>
                <span>
                  <span className="inter-medium-black-15px">{spanText2}</span>
                </span>
              </Team>
            </FlexCol>
          </FlexRow>
          <Tagtagtag>
            <span>
              <span className="inter-medium-jordy-blue-15px">{spanText3}</span>
            </span>
          </Tagtagtag>
        </User>
        <Title>
          <span className="inter-bold-black-20px">{spanText4}</span>
        </Title>
      </OverlapGroup4>
      <OverlapGroupContainer>
        <FlexCol1>
          <FlexRow1>
            <User2 src={user2} alt="user" />
            <FlexCol2>
              <DawitKwak>
                <span>
                  <span className="inter-medium-black-15px">{spanText5}</span>
                </span>
              </DawitKwak>
              <Text3>
                <span>
                  <span className="inter-medium-black-15px">{spanText6}</span>
                </span>
              </Text3>
            </FlexCol2>
            <IconBookmark src={iconBookmark2} alt="icon-bookmark" />
          </FlexRow1>
          <FlexCol3>
            <SSGQT>
              <span className="inter-bold-black-36px">{spanText7}</span>
            </SSGQT>
            <Text4>
              <span>
                <span className="inter-medium-jordy-blue-15px">{spanText8}</span>
              </span>
            </Text4>
            <IconHeart src={iconHeart2} alt="icon-heart" />
          </FlexCol3>
        </FlexCol1>
        <FlexCol4>
          <FlexRow2>
            <User2 src={user3} alt="user" />
            <FlexCol5>
              <Ohgyumin83>
                <span>
                  <span className="inter-medium-black-15px">{spanText9}</span>
                </span>
              </Ohgyumin83>
              <UserName>
                <span>
                  <span className="inter-medium-black-15px">{spanText10}</span>
                </span>
              </UserName>
            </FlexCol5>
            <IconBookmark1 src={iconBookmark3} alt="icon-bookmark" />
          </FlexRow2>
          <FlexCol6>
            <Text5>
              <span className="inter-bold-black-36px">{spanText11}</span>
            </Text5>
            <Text6>
              <span>
                <span className="inter-medium-jordy-blue-15px">{spanText12}</span>
              </span>
            </Text6>
            <IconHeart1 src={iconHeart3} alt="icon-heart" />
          </FlexCol6>
        </FlexCol4>
      </OverlapGroupContainer>
      <OverlapGroupContainer1>
        <OverlapGroup>
          <Picture1 src={picture2} alt="picture" />
          <ContentBackground></ContentBackground>
          <Unlike src={unlike} alt="unlike" />
          <Unsave src={iconBookmark4} alt="unsave" />
          <CoolWon>
            <span>
              <span className="inter-medium-black-15px">{spanText13}</span>
            </span>
          </CoolWon>
          <SFC>
            <span>
              <span className="inter-medium-black-15px">{spanText14}</span>
            </span>
          </SFC>
          <Text1>
            <span className="inter-bold-black-20px">{spanText15}</span>
          </Text1>
          <User3 src={user4} alt="user" />
          <Text2>
            <span>
              <span className="inter-medium-jordy-blue-15px">{spanText16}</span>
            </span>
          </Text2>
        </OverlapGroup>
        <FlexCol1>
          <FlexRow2>
            <User2 src={user5} alt="user" />
            <FlexCol5>
              <Ohgyumin83>
                <span>
                  <span className="inter-medium-black-15px">{spanText17}</span>
                </span>
              </Ohgyumin83>
              <UserName>
                <span>
                  <span className="inter-medium-black-15px">{spanText18}</span>
                </span>
              </UserName>
            </FlexCol5>
            <IconBookmark1 src={iconBookmark5} alt="icon-bookmark" />
          </FlexRow2>
          <FlexCol6>
            <Text7>
              <span className="inter-bold-black-20px">{spanText19}</span>
            </Text7>
            <Text6>
              <span>
                <span className="inter-medium-jordy-blue-15px">{spanText20}</span>
              </span>
            </Text6>
            <IconHeart1 src={iconHeart4} alt="icon-heart" />
          </FlexCol6>
        </FlexCol1>
      </OverlapGroupContainer1>
    </Contents1>
  );
}

export default Contents;