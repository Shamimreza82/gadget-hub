import Navber from "@/components/Navber";
import Banner from "@/components/ui/Banner";
import Feature from "@/components/ui/Feature";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import Link from "next/link";



export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
      <Feature/>
      <FeaturedCategories/>
    </div>
  );
}
