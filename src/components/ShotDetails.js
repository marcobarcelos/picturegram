/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import ShotStats from './ShotStats';

const ShotDetails = ({ shot }) => {
  const getSafeShotDescriptionMarkup = () => ({ __html: shot.description ? sanitizeHtml(shot.description) : '' });

  return (
    <div className="shot-details shot-item">
      <h2 className="shot-title">{shot.title}</h2>
      <span className="shot-author">by {shot.user.name}</span>
      <div className="shot-card">
        <img className="shot-preview" alt={shot.title} src={shot.images.hidpi || shot.images.normal} />
        <ShotStats viewsCount={shot.views_count} likesCount={shot.likes_count} />
      </div>
      <span className="shot-description" dangerouslySetInnerHTML={getSafeShotDescriptionMarkup()} />
    </div>
  );
};

ShotDetails.propTypes = {
  shot: PropTypes.object.isRequired
};

export default ShotDetails;
