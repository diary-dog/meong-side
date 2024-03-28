import { useNavigate } from "react-router-dom";
import { Layout } from "../components";
import { SlideIcon } from "../components/Icons";
import ROUTE_PATH from "../router/constants";

const Grid = () => {
  const navigation = useNavigate();
  return (
    <Layout>
      <Layout.TopBar
        title="그리드"
        rightButton={<SlideIcon onClick={() => navigation(ROUTE_PATH.SLIDE)} />}
      />
      <div>그리드</div>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Grid;
