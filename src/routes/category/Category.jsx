import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategory,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h1 className="category-title">{category.toUpperCase()}</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
