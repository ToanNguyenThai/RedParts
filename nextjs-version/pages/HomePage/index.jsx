import dynamic from "next/dynamic";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HomeBody = dynamic(() => import("../../components/HomeBody"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="site">
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  );
}
