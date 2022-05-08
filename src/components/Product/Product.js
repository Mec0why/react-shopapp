import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
// import shortid from 'shortid';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = (color) => {
    return styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`];
  };

  const getPrice = () => {
    let variantPrice = props.basePrice + currentSize.additionalPrice;
    return variantPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prepareOrder();
    console.log(prepareOrder());
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', currentSize.name);
    console.log('Size: ', getPrice());
    console.log('Color: ', currentColor);
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
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type='button'
                    onClick={() => setCurrentSize(size)}
                    className={clsx({ [styles.active]: currentSize === size })}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={color}>
                  <button
                    type='button'
                    onClick={() => setCurrentColor(color)}
                    className={clsx(prepareColorClassName(color), {
                      [styles.active]: currentColor === color,
                    })}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
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
