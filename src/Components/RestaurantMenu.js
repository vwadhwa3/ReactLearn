import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategories from "./ResCategories"
import { useState } from "react"



const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex,setShowIndex]= useState(null)
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(RestaurantMenu_API+ resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
 
 const categories =
 resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c) =>
     c.card?.["card"]?.["@type"] ===
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );

const dummyData = "Dummy Data";
  return (
    <div className="text-center">
      <h1 className=" p-1 m-6 text-2xl font-bold ">{name}</h1>
      <p className=" p-1  font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <ResCategories 
          dummyData={dummyData}
          key={category?.card?.card.title}
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
 
    </div>
  );
};

export default RestaurantMenu;
 