import React from 'react'
import { iProduct } from '../interfaces/product.interfaces';

interface ProductCardProps {
  product: iProduct;
}

const GenericProductCardComponent: React.FC<ProductCardProps> = ({ product }) => {

  function addToWishList() {
    console.log('Add to wishlist')
  }

  const isWishListed = 0

  // const [isWishListed, setWishListed] = useState(false)

  // setWishListed(false)

  return (
    <div className="uk-card uk-card-default uk-height-1-1 uk-border-rounded">
      <div className="uk-card-media-top uk-text-center uk-padding uk-flex uk-flex-middle product-image uk-padding-small">
        <img style={{ margin: 'auto' }} src={product.api_featured_image} alt="" />
      </div>
      <div>
        <div className="uk-card-body uk-text-center uk-padding-small">
          <h3 className="uk-card-title uk-text-small limit-text product-name uk-margin-remove">
            {product.name}
          </h3>
          <div className="uk-text-bold uk-text-large uk-margin-small-bottom">
            {product.price}
          </div>
          <div className="uk-text-center add-wishlist">
            <button onClick={addToWishList} className="uk-button uk-button-text">
              <span uk-icon="icon: heart; ratio: 0.75"></span>&nbsp;&nbsp;
              {isWishListed ? 'Wishlisted' : 'Add to wishlist'}
            </button>
          </div>
          <hr />
          <div className="uk-text-center">
            <a
              className="uk-button uk-button-primary"
              href={`/products/details?productId=${product.id}&productName=${product.name}`}
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericProductCardComponent;
