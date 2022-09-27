import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategory,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategory);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
