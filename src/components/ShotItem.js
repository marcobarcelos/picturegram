import React from 'react';
import PropTypes from 'prop-types';
import ShotStats from './ShotStats';
import ShotImage from './ShotImage';

class ShotItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.shot);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.props.onSelect) {
      this.props.onSelect(this.props.shot);
    }
  }

  render() {
    return (
      <div className="shot-item-container">
        <div className="shot-item" role="link" onClick={this.handleClick} onKeyPress={this.handleKeyPress} tabIndex={0}>
          <div className="shot-image">
            <ShotImage alt={this.props.shot.title} images={this.props.shot.images} />
            <div className="shot-details-hover">
              <ShotStats
                likesCount={this.props.shot.likes_count}
                viewsCount={this.props.shot.views_count}
              />
            </div>
          </div>
          <div className="shot-description">{this.props.shot.title}</div>
        </div>
      </div>
    );
  }
}

ShotItem.propTypes = {
  shot: PropTypes.object.isRequired,
  onSelect: PropTypes.func
};

ShotItem.defaultProps = {
  onSelect: null
};

export default ShotItem;
