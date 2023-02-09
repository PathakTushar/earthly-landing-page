import classes from "./ProductContainer.module.css";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";
const ProductContainer = (props) => {
  return (
    <div className={classes.productContainer}>
      <ProductItem
        image={props.image}
        hoverImage={props.hoverImage}
        description={props.description}
        price={props.price}
      />
      <Button active={props.active}>{props.active?'Add to Cart':'Out of Stock'}</Button>
    </div>
  );
};
export default ProductContainer;
