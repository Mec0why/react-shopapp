import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  const prepareColorClassName = (color) => {
    return styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.prepareOrder();
    console.log(props.prepareOrder());
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', props.currentSize.name);
    console.log('Size: ', props.getPrice());
    console.log('Color: ', props.currentColor);
  };

  return (
    <div>
      <header>
        <h2 className={styles.name}>{props.title}</h2>
        <span className={styles.price}>Price: {props.getPrice()}$</span>
      </header>
      <form onSubmit={handleSubmit}>
        <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {props.sizes.map((size) => (
              <li key={size.name}>
                <button
                  type='button'
                  onClick={() => props.setCurrentSize(size)}
                  className={clsx({
                    [styles.active]: props.currentSize === size,
                  })}
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
                  onClick={() => props.setCurrentColor(color)}
                  className={clsx(prepareColorClassName(color), {
                    [styles.active]: props.currentColor === color,
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
  );
};

export default ProductForm;

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  prepareOrder: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};
