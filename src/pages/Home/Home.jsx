import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Meals from "../../components/Meals/Meals";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import FeaturesBanner from "../../components/FeaturesBanner/FeaturesBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts
        array={["featured", "hot"]}
        val="featured"
      ></FeaturedProducts>
      <Services></Services>
      <ImgSlider></ImgSlider>
      <FeaturesBanner></FeaturesBanner>
    </>
  );
}
