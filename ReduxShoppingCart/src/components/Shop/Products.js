import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 9,
    title: "Fantasy Book",
    description:
      "Amazing fantasy book that will keep your attention from first till last page.",
  },
  {
    id: "p2",
    price: 15,
    title: "Action Book",
    description: "Amazing action book that features a lot of tense action.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
