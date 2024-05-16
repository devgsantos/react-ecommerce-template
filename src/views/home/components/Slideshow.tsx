import React from 'react';

const Slideshow: React.FC = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex={-1}
      uk-slideshow="animation: pull; ratio: 6:2; autoplay: true; autoplay-interval: 6000; pause-on-hover: false"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src="https://picsum.photos/id/240/2000/600" alt="" uk-cover="true" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 className="uk-margin-remove">First Slideshow</h3>
            <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li>
          <img src="https://picsum.photos/id/241/2000/600" alt="" uk-cover="true" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 className="uk-margin-remove">Second Slideshow</h3>
            <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
        <li>
          <img src="https://picsum.photos/id/242/2000/600" alt="" uk-cover="true" />
          <div className="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
            <h3 className="uk-margin-remove">Third Slideshow</h3>
            <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </li>
      </ul>

      <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
      <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
    </div>
  );
};

export default Slideshow;
