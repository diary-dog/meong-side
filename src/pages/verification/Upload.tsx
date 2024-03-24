import { useParams } from "react-router-dom";

const Upload = () => {
  const { type } = useParams();

  return (
    <>
      <h2>Upload</h2>
      <p>type : {type}</p>
    </>
  );
};

export default Upload;
