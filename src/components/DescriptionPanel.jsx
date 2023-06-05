import React, { useState } from 'react';
import './DescriptionPanel.scss';

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? 'visible' : 'hidden') + ' description__content';
  const chevronClass =
    (isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down') + ' fa-solid';
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>{props.title}</span>
        <i className={chevronClass} onClick={showContent}></i>
      </p>
      <ul className={contentClass}>{props.content}</ul>
    </div>
  );
}

export default DescriptionPanel;
