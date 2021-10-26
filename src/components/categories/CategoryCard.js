import React from "react";
import adventure from "../../adventure.jpg";
import PropTypes from "prop-types"

const CategoryCard = ({categorie : {categoryName, description, image}, children, title,
  handleClick
 }) => {

  return (
    <div className="col-md-3" >
      {children}
      {title} 
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={styleCss}
          src={image}

          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className= "card-title"> {categoryName} </h5>
          <p className="card-text"> {description} </p>
          <a className="card-link" href="" onClick={(event)=>
          {
            event.preventDefault()
            handleClick(categoryName)
          }} >
            click me
          </a>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes={categorie:PropTypes.object.isRequired, children:PropTypes.object
}
CategoryCard.defaultProps={title:"bonjour"}

const styleCss = { height: 200, objectFit: "cover" };

export default CategoryCard;
