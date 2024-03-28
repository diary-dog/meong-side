import { Layout } from "../components";
import UserImage from "../components/common/UserImage";

const Home = () => {
  return (
    <Layout>
      <Layout.TopBar title="HOME" rightButton={<UserImage size="XS" />} />
      <div>Hoe</div>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Home;
