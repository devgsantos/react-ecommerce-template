import React from 'react'
import { iProduct } from '../interfaces/product.interfaces'
import GenericProductCardComponent from './GenericProductCardComponent';
import UIkit from 'uikit';
UIkit.slider

interface GenericProductCarouselProps {
    products: iProduct[];
  }

export const GenericProductCarouselComponent: React.FC<GenericProductCarouselProps> = ({ products }) => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" uk-slider="true">
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
                {
                    products.map((item: iProduct) => (
                        <li key={item.id}>
                            <GenericProductCardComponent product={ item }/>
                        </li>
                    ))
                }
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

    </div>
  )
}
