import dynamic from "next/dynamic";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BlockFeatures from "../../components/Body/component/BlockFeatures";
const FeatureProducts = dynamic(
  () => import("../../components/Body/component/FeatureProducts"),
  {
    ssr: false,
  }
);
const HomeBody = dynamic(() => import("../../components/HomeBody"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="site">
      <Header></Header>
      {/* <HomeBody></HomeBody> */}
      <BlockFeatures></BlockFeatures>
      <FeatureProducts></FeatureProducts>
      <Footer></Footer>
    </div>
  );
}
