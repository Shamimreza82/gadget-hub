import Banner from "@/components/ui/Banner";
import Feature from "@/components/ui/Feature";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import ReadyForOrder from "@/components/ui/ReadyForOrder";



export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
      <Feature/>
      <FeaturedCategories/>
      <ReadyForOrder/>
      <FeaturedProducts/>
    </div>
  );
}
