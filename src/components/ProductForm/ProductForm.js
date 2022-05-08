import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.prepareOrder();
    console.log(props.prepareOrder());
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', props.currentSize.name);
    console.log('Size: ', props.currentPrice);
    console.log('Color: ', props.currentColor);
  };

  return (
    <div>
      <header>
        <h2 className={styles.name}>{props.title}</h2>
        <span className={styles.price}>Price: {props.currentPrice}$</span>
      </header>
      <form onSubmit={handleSubmit}>
        <OptionSize
          sizes={props.sizes}
          currentSize={props.currentSize}
          setCurrentSize={props.setCurrentSize}
        />
        <OptionColor
          colors={props.colors}
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
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
  currentPrice: PropTypes.number.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  prepareOrder: PropTypes.func.isRequired,
};
