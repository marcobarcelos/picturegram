import React from 'react';
import PropTypes from 'prop-types';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiEyeOutline from 'react-icons/lib/ti/eye-outline';

class ShotItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { displayHighResImage: false };
    console.log(this.props.shot.id, 'constructing', this.state);
    this.loadedHighResImage = this.loadedHighResImage.bind(this);
  }

  loadedHighResImage() {
    console.log(this.props.shot.id, 'loaded high res - changing state', this.state);
    this.setState({ displayHighResImage: true });
  }

  render() {
    console.log('Rendering', this.props.shot.id);
    return (
      <div className="shot-item-container">
        <div className="shot-item">
          <div className="shot-image">
            <img
              className={`shot-teaser ${!this.state.displayHighResImage && 'visible'}`}
              alt={this.props.shot.title}
              src={this.props.shot.images.teaser}
            />
            <img
              className={`shot-preview ${this.state.displayHighResImage && 'visible'}`}
              alt={this.props.shot.title}
              src={this.props.shot.images.hidpi || this.props.shot.images.normal}
              onLoad={this.loadedHighResImage}
            />
            <div className="shot-details">
              <span className="stats">
                <span className="views"><TiEyeOutline /> {this.props.shot.views_count}</span>
                <span className="likes"><TiHeartOutline /> {this.props.shot.likes_count}</span>
              </span>
            </div>
          </div>
          <div className="shot-description">{this.props.shot.title}</div>
        </div>
      </div>
    );
  }
}

ShotItem.propTypes = {
  shot: PropTypes.object.isRequired
};

export default ShotItem;
