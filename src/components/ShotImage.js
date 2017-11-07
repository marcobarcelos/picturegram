import React from 'react';
import PropTypes from 'prop-types';

class ShotImage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { displayHighResImage: false };
    this.loadedHighResImage = this.loadedHighResImage.bind(this);
  }

  loadedHighResImage() {
    this.setState({ displayHighResImage: true });
  }

  render() {
    return (
      <div>
        <img
          className={`shot-teaser ${!this.state.displayHighResImage && 'visible'}`}
          alt={this.props.alt}
          src={this.props.images.teaser}
        />
        <img
          className={`shot-preview ${this.state.displayHighResImage && 'visible'}`}
          alt={this.props.alt}
          src={this.props.images.hidpi || this.props.images.normal}
          onLoad={this.loadedHighResImage}
        />
      </div>
    );
  }
}

ShotImage.propTypes = {
  alt: PropTypes.string.isRequired,
  images: PropTypes.shape({
    teaser: PropTypes.string,
    hidpi: PropTypes.string,
    normal: PropTypes.string
  }).isRequired
};

export default ShotImage;

