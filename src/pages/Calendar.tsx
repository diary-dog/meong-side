import { Layout } from "../components";

const Calendar = () => {
  return (
    <Layout>
      <Layout.TopBar title="캘린더 보기" />
      <div>캘린더</div>
      <Layout.BottomBar />
    </Layout>
  );
};

export default Calendar;
