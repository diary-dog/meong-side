import styled from "styled-components";

const STYLES = {
  SIZE: {
    XS: "40px",
    SM: "50px",
    MD: "90px",
    XL: "216px",
  },
} as const;

const StyledUserImage = styled.img<{ size: keyof typeof STYLES.SIZE }>`
  width: ${({ size }) => STYLES.SIZE[size]};
  height: ${({ size }) => STYLES.SIZE[size]};
  background-color: gray;
  border-radius: 50px;
`;

const UserImage = ({
  size,
  imageUrl,
}: {
  size: keyof typeof STYLES.SIZE;
  imageUrl?: string;
}) => {
  return <StyledUserImage size={size} src={imageUrl} alt={imageUrl} />;
};

export default UserImage;
