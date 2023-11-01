import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeFashion = () => {
  return (
    <>
      <SEO titleTemplate="Fashion Home" description="Fashion home of EliteMart." />
      <LayoutOne headerContainerClass="container-fluid" headerPaddingClass="header-padding-1">
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
        
      </LayoutOne>
    </>
  );
};

export default HomeFashion;
