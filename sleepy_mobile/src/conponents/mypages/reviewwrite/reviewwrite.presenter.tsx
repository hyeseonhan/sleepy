import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  ReviewWriteView,
  ProductCard,
  ProductImage,
  ProductInfo,
  CategoryWrapper,
  Category,
  CategoryContent,
  ProductNameWrapper,
  ProductName,
  ProductPriceWrapper,
  ProductPrice,
  LabelWrapper,
  Label,
  LableLine,
  ReviewPhotoWrapper,
  ReviewPhotoUpload,
  Plus,
  ReviewStarWrapper,
  StarIcon,
  ReviewContentWrapper,
  ReviewContentInput,
  ReviewWriteButton,
  ReviewWriteButtonText,
} from "./reviewwrite.styles";

export default function ReviewUI(props: any) {
  return (
    <>
      <ScrollView>
        <ReviewWriteView>
          <ProductCard>
            <ProductImage
              source={{
                uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
              }}
            />
            <ProductInfo>
              <CategoryWrapper>
                <Category>카테고리</Category>
                <CategoryContent>
                  {props.data?.fetchUseditem.tags}
                </CategoryContent>
              </CategoryWrapper>
              <ProductNameWrapper>
                <ProductName>{props.data?.fetchUseditem.name}</ProductName>
              </ProductNameWrapper>
              <ProductPriceWrapper>
                <ProductPrice>
                  {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
                </ProductPrice>
              </ProductPriceWrapper>
            </ProductInfo>
          </ProductCard>
          <LabelWrapper>
            <Label>이미지 등록</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewPhotoWrapper>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
          </ReviewPhotoWrapper>
          <LabelWrapper>
            <Label>별점</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewStarWrapper>
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/offstar.png")}
            />
          </ReviewStarWrapper>
          <LabelWrapper>
            <Label>리뷰 작성</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewContentWrapper>
            <ReviewContentInput
              onChangeText={props.onChangeContents}
              style={{ flexShrink: 1 }}
              multiline={true}
            ></ReviewContentInput>
          </ReviewContentWrapper>
          <ReviewWriteButton onPress={props.onClickRegisterReview}>
            <ReviewWriteButtonText>리뷰 작성</ReviewWriteButtonText>
          </ReviewWriteButton>
        </ReviewWriteView>
      </ScrollView>
    </>
  );
}
