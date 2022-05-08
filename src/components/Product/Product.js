import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = () => {
    let variantPrice = props.basePrice + currentSize.additionalPrice;
    return variantPrice;
  };

  const prepareOrder = () => {
    return {
      title: props.title,
      price: getPrice(),
      color: currentColor,
      size: currentSize.name,
    };
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <ProductForm
        title={props.title}
        sizes={props.sizes}
        colors={props.colors}
        basePrice={props.basePrice}
        currentColor={currentColor}
        currentSize={currentSize}
        setCurrentColor={setCurrentColor}
        setCurrentSize={setCurrentSize}
        prepareOrder={prepareOrder}
        getPrice={getPrice}
      />
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
