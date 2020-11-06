import React from 'react';

const layoutDecorator = (spaceX = 4, spaceY = 4) => storyFn => (
  <div className={`px-${spaceX} py-${spaceY}`}>{storyFn()}</div>
);

export default layoutDecorator;
