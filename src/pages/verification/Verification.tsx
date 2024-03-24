import { useParams } from "react-router-dom";

const Verification = () => {
  const { type } = useParams();

  return (
    <>
      <h2>Verification</h2>
      <p>type : {type}</p>
    </>
  );
};

export default Verification;
