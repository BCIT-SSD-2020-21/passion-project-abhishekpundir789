import React from 'react'
import './Product.css';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price }) {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };

      const useStyles = makeStyles({
        root: {
          width: 200,
          display: 'flex',
          alignItems: 'center',
        },
      });
      
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const [ {basket }, dispatch] = useStateValue();

    console.log("this is the basket", basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                //rating: rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>  
                        <div className={classes.root}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                        />
                        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </div>
                    </p>
                </div>
            </div>
            <img src = {image} alt = "image" />
            <button onClick={addToBasket}> Add to Basket </button>
        </div>
    )
}

export default Product
