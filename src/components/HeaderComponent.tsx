import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link para usar rotas
import { iProductCategory, iProductType,  } from '../interfaces/product.interfaces'

interface HeaderProps {
    cartQuantity: number;
    wishlistQuantity: number;
    productTypes: iProductType[];
  }

const Header: React.FC<HeaderProps> = ({ cartQuantity, wishlistQuantity, productTypes }) => {
  return (
    <header>
      <div className="uk-container uk-container-large uk-flex uk-flex-middle uk-flex-between">
        <div className="logo">
          <span>LOGO</span>
        </div>
        <nav className="uk-width-1-1" uk-navbar="true">
          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="">
                  <span uk-icon="icon: home; ratio: 0.75" style={{ marginBottom: '6px' }}></span>
                  HOME
                </Link>
              </li>
              <li className="uk-parent">
                <Link to="">
                  <span uk-icon="icon: thumbnails; ratio: 0.75" style={{ marginBottom: '6px' }}></span>
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="">
                  {cartQuantity > 0 && (
                    <div className="uk-position-top-right" style={{ top: '10px' }}>
                      <span className="uk-badge" style={{ marginBottom: '6px' }}>{cartQuantity}</span>
                    </div>
                  )}
                  <span uk-icon="icon: cart; ratio: 0.75" style={{ marginBottom: '6px' }}></span>
                  Cart
                </Link>
              </li>
              <li>
                <a>
                  <span uk-icon="icon: user; ratio: 0.75" style={{ marginBottom: '6px' }}></span>
                  ACCOUNT
                </a>
                <div className="uk-padding-small" uk-dropdown="mode: hover">
                  <ul className="uk-list uk-margin-remove user-menu-list">
                    <li>
                      <a className="uk-button uk-button-text uk-width-1-1 uk-text-left">
                        <span uk-icon="icon: cog; ratio: 0.75"></span>&nbsp;&nbsp;Profile
                      </a>
                    </li>
                    <li>
                      <a className="uk-button uk-button-text uk-width-1-1 uk-text-left">
                        <span uk-icon="icon: file-text; ratio: 0.75"></span>&nbsp;&nbsp;Orders
                      </a>
                    </li>
                    <li>
                      {wishlistQuantity > 0 && (
                        <div className="uk-position-top-right">
                          <span className="uk-badge" style={{ marginBottom: '6px' }}>{wishlistQuantity}</span>
                        </div>
                      )}
                      <a className="uk-button uk-button-text uk-width-1-1 uk-text-left">
                        <span uk-icon="icon: heart; ratio: 0.75"></span>&nbsp;&nbsp;Wishlisted
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="categories">
        <div className="uk-container">
          <div className="uk-flex uk-flex-middle uk-flex-between uk-padding-small">
            {productTypes.map((t: iProductType) => (
              <div key={t.id}>
                <a className="categories-item">{t.title.replace('_', ' ')}</a>
                <div className="uk-padding-small" uk-dropdown="mode: hover">
                  <ul className="uk-nav uk-dropdown-nav uk-list-divider">
                    {t.categories.map((c: iProductCategory) => (
                      <li key={c.id} className="uk-margin-remove fill-effect uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-right">
                        {/* <Link to={`/products/list?productTypeId=${t.id}&productTypeTitle=${t.title}&productCategoryId=${c.id}&productCategoryTitle=${c.title}`}> */}
                        <Link to="">
                          {c.title.replace('_', ' ')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
