import styled, { css } from "styled-components";
import React from "react";
import Contents from "./contents";
import { InterBoldBlack20px, InterBoldBlack36px, InterBoldMilanoRed36px, InterMediumBlack15px, InterMediumJordyBlue15px, ValignTextMiddle } from "./style";


function Screen() {
  return (
    <div className="container-center-horizontal">
      <div className="meinpeijiscreen">
        <OverlapGroup6>
          <Background></Background>
          <Footer />
          <WritingButton src="writing-button-1.png" alt="writing button" />
          <Contents
            iconHeart1="like-1.png"
            iconBookmark1="save-1.png"
            user1="user-5.png"
            spanText1="@user_name"
            spanText2="• team"
            spanText3="#tag #tag #tag"
            spanText4="Title"
            user2="user-2.png"
            spanText5="@dawit_kwak"
            spanText6="• 서울시민교회"
            iconBookmark2="unsave-2.png"
            spanText7={
              <React.Fragment>
                수련회 준비,
                <br />
                SSG QT로!
              </React.Fragment>
            }
            spanText8="#스가랴큐티 #큐티챌린지 #수련회준비 #수련회큐티"
            iconHeart2="unlike-2.png"
            user3="user-3.png"
            spanText9="@ohgyumin83"
            spanText10="• ESF"
            iconBookmark3="unsave-2.png"
            spanText11="동아리 신입생들 나눔 질문지 공유!"
            spanText12="#나눔지 #아이스브레이킹 #신입생 #소그룹나눔"
            iconHeart3="unlike-4.png"
            picture2="picture-1.png"
            unlike="unlike-4.png"
            iconBookmark4="unsave-2.png"
            spanText13="@cool_won"
            spanText14="• SFC"
            spanText15="추수감사제 청년부 합창곡 편곡노래, 안.."
            user4="user-1.png"
            spanText16="#특송 #합창 #밝은찬양 #추수감사절행사 #청년부합창"
            user5="user-4.png"
            spanText17="@window6r"
            spanText18="• CCC"
            iconBookmark5="unsave-2.png"
            spanText19="수련회에서 조별모임 할 때 나눔하기 좋은소그룹 나눔 질문지들 입니다.  교회모임 때 유용하게 쓰일 나눔지들 공유해드립..."
            spanText20="#나눔지 #수련회조모임 #공과지 #소그룹나눔"
            iconHeart4="unlike-4.png"
          />
          <View />
          <Header>
            <LogoContainer>
              <Logo />
              <Logo />
            </LogoContainer>
            <IconUser src="account-1.png" alt="icon-user" />
          </Header>
          <ScrollBar></ScrollBar>
        </OverlapGroup6>
      </div>
    </div>
  );
}

export const OverlapGroup6 = styled.div`
  width: 1922px;
  height: 1590px;
  position: relative;
  margin-left: 4px;
  margin-top: -4px;
`;

export const Background = styled.div`
  position: absolute;
  width: 1920px;
  height: 1590px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

export const WritingButton = styled.img`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 1255px;
  left: 1703px;
`;

export const Header = styled.header`
  position: absolute;
  width: auto;
  height: 115px;
  top: 144px;
  left: 872px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  min-width: 911px;
  gap: 701px;
  background-color: transparent;
`;

export const LogoContainer = styled.div`
  width: 170px;
  height: 115px;
  position: relative;
`;

export const IconUser = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 9px;
`;

export const ScrollBar = styled.div`
  position: absolute;
  width: 15px;
  height: 459px;
  top: 19px;
  left: 1891px;
  background-color: #d9d9d93d;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
`;

function Footer() {
  return (
    <Footer1>
      <Line3 src="line-3-1.png" alt="Line 3" />
      <Lupcyclecokr>
        <span>
          <span className="inter-medium-black-15px">Lupcycle.co.kr</span>
        </span>
      </Lupcyclecokr>
    </Footer1>
  );
}

export const Footer1 = styled.footer`
  position: absolute;
  width: 1922px;
  height: auto;
  top: 1440px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 68px;
  gap: 41px;
  background-color: transparent;
`;

export const Line3 = styled.img`
  width: 1920px;
  height: 1px;
  margin-right: 2px;
`;

export const Lupcyclecokr = styled.div`
  ${ValignTextMiddle}
  ${InterMediumBlack15px}
            width: 145px;
  height: 25px;
  margin-right: 9px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const Contents1 = styled.div`
  position: absolute;
  height: 708px;
  top: 449px;
  left: 319px;
  display: flex;
  align-items: flex-start;
  min-width: 1274px;
`;

export const OverlapGroup4 = styled.div`
  width: 378px;
  height: 536px;
  position: relative;
`;

export const Picture = styled.img`
  position: absolute;
  width: 378px;
  height: 458px;
  top: 78px;
  left: 0;
  object-fit: cover;
`;

export const ContentBackground = styled.div`
  position: absolute;
  width: 378px;
  height: 172px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 20px 20px 0px 0px;
`;

export const Like = styled.img`
  position: absolute;
  width: 42px;
  height: 36px;
  top: 491px;
  left: 10px;
`;

export const Save = styled.img`
  position: absolute;
  width: 31px;
  height: 41px;
  top: 0;
  left: 331px;
`;

export const User = styled.div`
  position: absolute;
  width: 322px;
  top: 12px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
  gap: 56px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 162px;
  gap: 5px;
`;

export const User1 = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
`;

export const FlexCol = styled.div`
  ${InterMediumBlack15px}
  width: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50px;
`;

export const UserName = styled.div`
  ${ValignTextMiddle}
  width: 98px;
  height: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Team = styled.div`
  ${ValignTextMiddle}
  width: 98px;
  height: 25px;
  margin-left: 3px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Tagtagtag = styled.div`
  ${ValignTextMiddle}
  ${InterMediumJordyBlue15px}
            width: 302px;
  height: 25px;
  align-self: center;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Title = styled.div`
  ${InterBoldBlack20px}
  position: absolute;
  width: 327px;
  top: 90px;
  left: 26px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const OverlapGroupContainer = styled.div`
  width: 379px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 605px;
  gap: 59px;
`;

export const FlexCol1 = styled.div`
  width: 378px;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  align-items: flex-start;
  min-height: 273px;
  gap: 28px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 10px 10px 40px #00000040;
`;

export const FlexRow1 = styled.div`
  height: 69px;
  display: flex;
  align-items: flex-start;
  min-width: 351px;
`;

export const User2 = styled.img`
  width: 56px;
  height: 56px;
  align-self: flex-end;
  object-fit: cover;
`;

export const FlexCol2 = styled.div`
  ${InterMediumBlack15px}
  width: 106px;
  align-self: center;
  margin-left: 6px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50px;
`;

export const DawitKwak = styled.div`
  ${ValignTextMiddle}
  width: 106px;
  height: 25px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const Text3 = styled.div`
  ${ValignTextMiddle}
  width: 98px;
  height: 25px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const IconBookmark = styled.img`
  width: 31px;
  height: 41px;
  margin-left: 152px;
`;

export const FlexCol3 = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 161px;
`;

export const SSGQT = styled.h1`
  ${InterBoldBlack36px}
  width: 275px;
  min-height: 89px;
  margin-left: 9px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Text4 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumJordyBlue15px}
            width: 333px;
  height: 25px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
`;

export const IconHeart = styled.img`
  width: 42px;
  height: 36px;
  margin-top: 11px;
`;

export const FlexCol4 = styled.div`
  width: 378px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  align-items: flex-start;
  min-height: 273px;
  gap: 28px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 10px 10px 40px #00000040;
`;

export const FlexRow2 = styled.div`
  height: 69px;
  display: flex;
  align-items: flex-start;
  min-width: 347px;
`;

export const FlexCol5 = styled.div`
  ${InterMediumBlack15px}
  width: 106px;
  align-self: center;
  margin-left: 11px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50px;
`;

export const Ohgyumin83 = styled.div`
  ${ValignTextMiddle}
  width: 106px;
  height: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

export const IconBookmark1 = styled.img`
  width: 31px;
  height: 41px;
  margin-left: 143px;
`;

export const FlexCol6 = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 161px;
`;

export const Text5 = styled.p`
  ${InterBoldBlack36px}
  width: 341px;
  min-height: 89px;
  margin-left: 9px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Text7 = styled.p`
  ${InterBoldBlack20px}
  width: 341px;
  min-height: 89px;
  margin-left: 9px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Text6 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumJordyBlue15px}
            width: 333px;
  height: 25px;
  margin-left: 7px;
  letter-spacing: 0;
  line-height: normal;
`;

export const IconHeart1 = styled.img`
  width: 42px;
  height: 36px;
  align-self: flex-start;
  margin-top: 11px;
`;

export const OverlapGroupContainer1 = styled.div`
  width: 378px;
  margin-left: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 708px;
  gap: 39px;
`;

export const OverlapGroup = styled.div`
  width: 378px;
  height: 396px;
  position: relative;
`;

export const Picture1 = styled.img`
  position: absolute;
  width: 378px;
  height: 290px;
  top: 106px;
  left: 0;
  object-fit: cover;
`;

export const Unlike = styled.img`
  position: absolute;
  width: 42px;
  height: 36px;
  top: 352px;
  left: 17px;
`;

export const Unsave = styled.img`
  position: absolute;
  width: 31px;
  height: 41px;
  top: 0;
  left: 328px;
`;

export const CoolWon = styled.div`
  ${ValignTextMiddle}
  ${InterMediumBlack15px}
            position: absolute;
  width: 91px;
  height: 23px;
  top: 15px;
  left: 75px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const SFC = styled.div`
  ${ValignTextMiddle}
  ${InterMediumBlack15px}
            position: absolute;
  width: 98px;
  height: 23px;
  top: 38px;
  left: 79px;
  letter-spacing: 0;
  line-height: normal;
`;

export const Text1 = styled.p`
  ${InterBoldBlack20px}
  position: absolute;
  width: 350px;
  top: 86px;
  left: 13px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export const User3 = styled.img`
  position: absolute;
  width: 56px;
  height: 54px;
  top: 15px;
  left: 10px;
  object-fit: cover;
`;

export const Text2 = styled.p`
  ${ValignTextMiddle}
  ${InterMediumJordyBlue15px}
            position: absolute;
  width: 345px;
  height: 25px;
  top: 123px;
  left: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

function View() {
  return (
    <View1>
      <IconSearch src="search-1.png" alt="icon-search" />
    </View1>
  );
}

export const View1 = styled.div`
  position: absolute;
  height: 46px;
  top: 304px;
  left: 293px;
  display: flex;
  padding: 7.1px 20.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1326px;
  background-color: var(--white);
  border-radius: 30px;
  box-shadow: inset 10px 10px 25px #00000040;
`;

export const IconSearch = styled.img`
  width: 30px;
  height: 30px;
`;

function Logo() {
  return (
    <Logo1>
      <Logo2 src="logo-1.png" alt="logo" />
      <Lupcycle>
        <span className="inter-bold-milano-red-36px"> Lupcycle</span>
      </Lupcycle>
    </Logo1>
  );
}

export const Logo1 = styled.div`
  position: absolute;
  width: 170px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 115px;
  gap: 4px;
`;

export const Logo2 = styled.img`
  width: 80px;
  height: 66px;
  margin-right: 2px;
  object-fit: cover;
`;

export const Lupcycle = styled.div`
  ${InterBoldMilanoRed36px}
  min-height: 44px;
  margin-right: 2px;
  min-width: 168px;
  text-shadow: 3px 3px 3px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

export default Screen;