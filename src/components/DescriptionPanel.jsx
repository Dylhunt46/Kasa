import React, { useState } from 'react';
import './DescriptionPanel.scss';

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? 'visible' : 'hidden') + 'description__content';
  const chevronClass =
    (isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down') + ' fas';
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>{props.title}</span>
        <i
          className={chevronClass} //"fa-sharp fa-solid fa-chevron-up"
          onClick={showContent}
        ></i>
      </p>
      {isContentVisible ? 'visible' : 'hidden'}
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;
