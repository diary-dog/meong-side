import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components';
import { GridIcon } from '../../components/Icons';
import UserImage from '../../components/UserImage';
import ROUTE_PATH from '../../router/constants';
import { slideMockData } from '../../utils/mockData';

import * as S from './Slide.styled';

const loggedUserId = '0';
const Slide = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <Layout
      top={{
        title: '슬라이드',
        rightButton: (
          <GridIcon onClick={() => navigate(`${ROUTE_PATH.GRID}/all`)} />
        ),
      }}
    >
      <S.Container>
        {[...slideMockData].reverse().map((data) => (
          <S.SlideWrapper
            $isLoggedInUser={loggedUserId === data.user.userId}
            key={data.createdAt}
          >
            <S.VerificationWrapper className="verification">
              <S.VerificationItem className="verification-item">
                <h3 className="category">{data.category}</h3>
                {data.option && <p className="option">{data.option}</p>}
                {data.imageUrl && (
                  <S.Image src={data.imageUrl} alt={data.createdAt} />
                )}
              </S.VerificationItem>
              {data.contents && <S.Contents>{data.contents}</S.Contents>}
            </S.VerificationWrapper>
            <S.Author>
              <UserImage size="XS" imageUrl={data.user.userImage} />
              <span>{data.user.nickname}</span>
            </S.Author>
          </S.SlideWrapper>
        ))}
      </S.Container>
    </Layout>
  );
};

export default Slide;
