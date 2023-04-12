import React from 'react';
import './DescriptionPanel.scss';

function DescriptionPanel() {
  return (
    <div className="description__panel">
      <p className="description__header">
        <span>Description</span>
        <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </p>
      <p className="description__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut
        molestiae eveniet in voluptas incidunt adipisci iusto, sapiente
        inventore tenetur harum reiciendis accusamus nisi, totam doloremque
        accusantium magnam fugit voluptatum ullam? Ducimus, recusandae sed. Ut
        ratione libero ipsam repudiandae fugit suscipit placeat corporis, id
        eveniet cumque tempore quis, doloremque nulla?
      </p>
    </div>
  );
}

export default DescriptionPanel;
