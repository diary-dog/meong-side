import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Layout } from "../components";
import { GridIcon } from "../components/Icons";
import UserImage from "../components/common/UserImage";
import ROUTE_PATH from "../router/constants";

interface Data {
  createdAt: string;
  category: string;
  imageUrl: string;
  contents: string;
  option: string;
  user: {
    userId: string;
    userImage: string;
    nickname: string;
  };
}
const mackData: Data[] = [
  {
    createdAt: "22222229",
    category: "산책 인증",
    option: "1시간 10분",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__",
    contents: "",
    user: {
      userId: "0",
      userImage:
        "https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__",
      nickname: "둘째딸",
    },
  },
  {
    createdAt: "22222228",
    category: "산책 인증",
    option: "1시간 10분",
    imageUrl: "",
    contents: "",
    user: {
      userId: "1",
      userImage:
        "https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__",
      nickname: "막둥이",
    },
  },
  {
    createdAt: "22222227",
    category: "간식 인증",
    option: "뼈다귀",
    imageUrl: "",
    contents: "개껌 두개나 먹었는데 더달라고 쳐다봄ㅋㅋㅋㅋ 적당히 줘야될 듯!",
    user: {
      userId: "1",
      userImage:
        "https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__",
      nickname: "막둥이",
    },
  },
  {
    createdAt: "22222226",
    category: "산책 인증",
    option: "",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__",
    contents:
      "왼쪽으로 가야되는데 오른쪽으로 간다고 개찡찡댔다... 다음타자 힘들듯^^",
    user: {
      userId: "0",
      userImage:
        "https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__",
      nickname: "둘째딸",
    },
  },
  {
    createdAt: "22222225",
    category: "산책 인증",
    option: "개껌",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__",
    contents: "",
    user: {
      userId: "1",
      userImage:
        "https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__",
      nickname: "막둥이",
    },
  },
  {
    createdAt: "22222224",
    category: "산책 인증",
    option: "",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__",
    contents: "",
    user: {
      userId: "0",
      userImage:
        "https://s3-alpha-sig.figma.com/img/53dd/e582/a7ad46483eb5c2a1714a957f9ff9efac?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS~6xmYPqBB9e0p68RmqnmHwifQ0AzpBsJrENi-Nhre5ZIDc-nFa~TI3-VL8okScO7x3YbYWiXqPQUOD-235o6DQkn1rFXISXn5XOg4kAgU-asUxYmHk9gUESXPDblV3xECPnP1eh~TxMEklOc5cRZCeidVD07d1xk~Emh~u9tnOUqhE9CRNVLO3-ei456su8aKt3HrCnO1Ny~sXkoE5EdzX9k2K2Jznweio8n~NCoxpMC1rHX-RYooQeGGPynSjk4-LEWXRXv4eCEZJq-UcQ60v26iVTEnBMprTDV72XeKEn-TjUJWYmyJ8XLUSv8DZ5WcL6wWm4kA6QLoE46N2Iw__",
      nickname: "둘째딸",
    },
  },
  {
    createdAt: "22222223",
    category: "산책 인증",
    option: "1시간 10분",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4ff7/8f13/860ad4b7818f4fe382ca9378cc33724b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAArtVM73XMp7USZpPDppvUgTI77B7hEuVra5xwyRnpfx5xmzJmX6doEcjRHj825bYWDHsMl6mEH77a6Ziqx-BIeMYzk5ohIekpvCQ7JDXz3Vdg3W9TG0NTise377KE~lGj7bTptHCrldB-PuVme3~caFNcfKaiK6Vn54WmG0PCJ9e1OkBtHFbuwoyGzwuoMVtYlwL5mzJjfY8py650D-RkNZqPog0qgFg1CaFHUW8Wj1ZHgwgKMWf7ZvtgM0H33Od3aSRKgICSFrDrnCk3GMJDdJnYpePSOsi-2rxnATq7-JXWUsWHMaWbUMd1UlqdMHy-SjY~z-mUhbGW74w53Lw__",
    contents: "",
    user: {
      userId: "1",
      userImage:
        "https://s3-alpha-sig.figma.com/img/e086/970b/bfb65c790c7136f50ef8c25630f1a4c2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9xmGXyVn1Q8UrnF4EwhbwUFlzDxZWJOGNAtrMZ9LvdBD0iqJLhTphIwRrHkjJ9J14tyKoTSflnO2ekJ3WiEolzq-4OP7f6DPVPVZgJFeq4k1lnneEgj~ZUb0Zj3QPB0BSQz5zKzjWRn4cvyJRlMUHGiDeOVs2dcFarZs945s0adQyo2nOEbX9f9mc0N~1yQty3JUxghVadcnIbovXv8FXgAx8E57XnDGTcCPbaV9lnwaf82JeKwp6jA9P4Obh2o~f6Y-CqSMOjJpZU9sLMqajytw49eUa3NXGWrIlR7Bl01189GMRO221IsgzvZ1aFSMC~-otmax86POBHZYodMyg__",
      nickname: "막둥이",
    },
  },
];

const loggedUserId = "0";
const Slide = () => {
  const navigation = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <Layout>
      <Layout.TopBar
        title="슬라이드"
        rightButton={<GridIcon onClick={() => navigation(ROUTE_PATH.GRID)} />}
      />
      <Container>
        {[...mackData].reverse().map((data) => (
          <SlideWrapper
            isLoggedInUser={loggedUserId === data.user.userId}
            key={data.createdAt}
          >
            <VerificationWrapper className="verification">
              <VerificationItem className="verification-item">
                <h3 className="category">{data.category}</h3>
                {data.option && <p className="option">{data.option}</p>}
                {data.imageUrl && (
                  <Image src={data.imageUrl} alt={data.createdAt} />
                )}
              </VerificationItem>
              {data.contents && <Contents>{data.contents}</Contents>}
            </VerificationWrapper>
            <Author>
              <UserImage size="XS" imageUrl={data.user.userImage} />
              <span>{data.user.nickname}</span>
            </Author>
          </SlideWrapper>
        ))}
      </Container>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Slide;
const Container = styled.div`
  padding: 80px 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f5;
`;

const SlideWrapper = styled.div<{ isLoggedInUser: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 20px;
  overflow: hidden;

  height: fit-content;

  align-items: ${({ isLoggedInUser }) => (isLoggedInUser ? "end" : "start")};
  .verification {
    margin: ${({ isLoggedInUser }) =>
      isLoggedInUser ? "0 50px 0 0" : "0 0 0 50px"};
  }

  .verification-item {
    background-color: ${({ theme, isLoggedInUser }) =>
      isLoggedInUser ? theme.COLORS["SECONDARY-DASH"] : theme.COLORS.DECO2};
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center center;
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  gap: 10px;
`;

const VerificationItem = styled.div`
  background-color: ${({ theme }) => theme.COLORS["SECONDARY-DASH"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 218px;
  padding: 14px 34px;
  gap: 7px;
  border-radius: 30px;

  .category {
    font-size: ${({ theme }) => theme.FONT.MD};
    color: white;
    line-height: 20.48px;
    padding: 5px 45px;
  }
  .option {
    width: 77px;
    height: 35px;
    padding: 10px 12px;
    gap: 10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.COLORS["P-BUTTON2"]};
    font-size: ${({ theme }) => theme.FONT.XS};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Contents = styled.p`
  width: 218px;
  height: 44px;
  top: 1843px;
  left: 70px;
  padding: 7px 12px;
  gap: 8px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT.XS};
  background-color: ${({ theme }) => theme.COLORS["S-BUTTON"]};
  line-height: 15.36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: ${({ theme }) => theme.FONT.XS};
  margin: -40px 0 0 0;
`;
