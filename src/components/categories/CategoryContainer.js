import React from "react";
import {categories} from "../../categories"
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
 console.log(categories)
 const handleClick = (name)=>
 alert(name)
  return (
    <div className="row gx-5">
      {categories.map((element, index) => (
        <CategoryCard categorie = {element}  key={index} handleClick={handleClick}>
          <h1>
            {element.categoryName}
          </h1>
        </CategoryCard>
      ))}
    </div>
  );
};

export default CategoryContainer;
