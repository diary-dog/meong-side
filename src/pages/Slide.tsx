import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
import { GridIcon } from "../components/Icons";
import ROUTE_PATH from "../router/constants";

const Slide = () => {
  const navigation = useNavigate();
  return (
    <Layout>
      <Layout.TopBar
        title="슬라이드"
        rightButton={<GridIcon onClick={() => navigation(ROUTE_PATH.GRID)} />}
      />
      <div>슬라이드</div>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Slide;
