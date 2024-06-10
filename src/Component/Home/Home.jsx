import { useEffect, useState } from "react";
import ViewCategory from "./Category/ViewCategory";
import ClientReview from "./ClientReview/ClientReview";
import CraftItems from "./CraftSection/CraftItems";
import Slider from "./Slider/Slider";
import TypeLetter from "./TypeLetter/TypeLetter";

const Home = () => {
  const [paper, setPaper] = useState([]);
  const [category, setcategory] = useState([]);
  useEffect(() => {
    const dataFetching = async () => {
      try {
        const paper = await fetch('https://ruhit-server.vercel.app/product');
        const paperOne = await paper.json();
        setPaper(paperOne);

        const categorys = await fetch('https://ruhit-server.vercel.app/category');
        const catgorysd = await categorys.json();
        setcategory(catgorysd);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    dataFetching();
  }, []);

  console.log(paper)
  console.log(category)
  return (
    <div>
      <Slider></Slider>
      <CraftItems paper={paper}></CraftItems>
      <ViewCategory category={category}></ViewCategory>
      <TypeLetter></TypeLetter>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
