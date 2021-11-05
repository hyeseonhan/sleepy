import React from "react";

import {
  MyMainView,
  ProfileWrapper,
  ProfileImage,
  ProfileInfoWrapper,
  ProfileNameWapper,
  ProfileName,
  ProfileNameNim,
  ProfileEmailWrapper,
  ProfileEmail,
  ProfileEmailContent,
  ProfilePointWrapper,
  ProfilePoint,
  ProfilePointContent,
  IconBackGround,
  IconWrapper,
  InsertImage,
  HistoryWrapper,
  HistoryTitleWrapper,
  BuyHistory,
  PointHistory,
  BuyHistoryWrapper,
  PointHistoryWrapper,
  RowName,
  ColumnName,
  Row,
  Column,
  ColumnContent,
} from "./Mypage.styles";

import { useNavigation } from "@react-navigation/native";
import BoughtProductCard from "./Mypage.BoughtProductCard.present";
import { ScrollView } from "react-native-gesture-handler";

const MypageUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MyMainView>
        <ProfileWrapper>
          <ProfileImage
            source={require("../../../../public/images/mypage/mypageexmapleprofile.png")}
          />
          <ProfileInfoWrapper>
            <ProfileNameWapper>
              <ProfileName>밥 먹고 똥 싸는게 좋다</ProfileName>
              <ProfileNameNim>님</ProfileNameNim>
            </ProfileNameWapper>
            <ProfileEmailWrapper>
              <ProfileEmail>이메일</ProfileEmail>
              <ProfileEmailContent>littlebi96@naver.com</ProfileEmailContent>
            </ProfileEmailWrapper>
            <ProfilePointWrapper>
              <ProfilePoint>포인트</ProfilePoint>
              <ProfilePointContent>100,000,000,000</ProfilePointContent>
            </ProfilePointWrapper>
          </ProfileInfoWrapper>
        </ProfileWrapper>
        <IconWrapper>
          <IconBackGround onPress={() => navigation.navigate("내정보 수정")}>
            <InsertImage
              source={require("../../../../public/images/mypage/myinformation.png")}
            />
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("마이찜")}>
            <InsertImage
              source={require("../../../../public/images/mypage/favorite.png")}
            />
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("장바구니")}>
            <InsertImage
              source={require("../../../../public/images/mypage/cart.png")}
            />
          </IconBackGround>
          <IconBackGround>
            <InsertImage
              source={require("../../../../public/images/mypage/charge.png")}
            />
          </IconBackGround>
        </IconWrapper>
        <HistoryWrapper>
          <HistoryTitleWrapper>
            <BuyHistory onPress={props.onPressShowBuy}>구매내역</BuyHistory>
            <PointHistory onPress={props.onPressShowPoint}>
              포인트내역
            </PointHistory>
          </HistoryTitleWrapper>
        </HistoryWrapper>
        {!props.isPoint ? (
          <BuyHistoryWrapper>
            <BoughtProductCard />
            <BoughtProductCard />
          </BuyHistoryWrapper>
        ) : (
          <PointHistoryWrapper>
            <RowName>
              <ColumnName>날짜</ColumnName>
              <ColumnName>내용</ColumnName>
              <ColumnName>거래 및 충전내역</ColumnName>
              <ColumnName>잔액</ColumnName>
            </RowName>
            <Row>
              <Column>2021-02-24</Column>
              <ColumnContent></ColumnContent>
              <Column>+1000000</Column>
              <Column>1000000</Column>
            </Row>
          </PointHistoryWrapper>
        )}
      </MyMainView>
    </ScrollView>
  );
};

export default MypageUI;
