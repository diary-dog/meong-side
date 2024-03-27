import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import ROUTE_PATH from "../../router/constants";

const UploadSnack = () => {
  const { type } = useParams();

  const navigator = useNavigate();

  // 인증 업로드 구분
  const imgUploadpages = [
    0, // 산책
    1, // 식사
    2, // 간식
    3, // 목욕
    4, // 순간 포착 일상
  ];

  /* // 산책
  // 시간 , 분
  // 코멘트
  // PUT
  PUT(/{petId}/{게시글Id}/walk)
  LocalDateTime 시간, 분
  String 코멘트
  String ImgUrl*/

  return (
    <>
      {imgUploadpages.map((imgUploadpage) => {
        <NavLink key={imgUploadpage} to="verification/$:type/upload" />;
      })}

      {/* 폼 데이터 전송은 전체 필수 값으로 */}
      <TextWrapper>
        <h2>{type} 식사 인증 순간 남기기</h2>
        <InputWrapper>
          <input type="file" className="imgFile" />
          <select>
            <option>강아지껌</option>
            <option>건조간식</option>
            <option>저키/트릿</option>
            <option>캔</option>
            <option>비스킷</option>
            <option>기타</option>
          </select>
          <input type="text" placeholder="지금 이 순간을 코멘트해주세요." />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={() => navigator(ROUTE_PATH.HOME)} color="primary">
            전송!
          </button>
        </ButtonWrapper>
        <br />
        <CloseButtonWrapper>
          <button onClick={() => navigator(ROUTE_PATH.HOME)} color="D9D9D9">
            닫기
          </button>
        </CloseButtonWrapper>
      </TextWrapper>
    </>
  );
};

export default UploadSnack;

const TextWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  maigin: 0 auto;
`;

const ButtonWrapper = styled.button`
  margin-top: 70px;
  background: #f48c29;
  border-radius: 10px;
  width: 265px;
  height: 52px;
  padding: 16px 0;
  border-radius: 30px;
  border: none;
  text-align: center;
  margin: 0 auto;
`;

const CloseButtonWrapper = styled.button`
  margin-top: -30px;
  background: #d9d9d9;
  width: 50px;
  height: 50px;
  padding: 16px 0;
  border-radius: 100px;
  border: none;
  margin: 0 auto;
`;
