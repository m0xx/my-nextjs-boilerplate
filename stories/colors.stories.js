import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import '../styles/index.css';
import Text from '../components/text';

export default {
  title: 'Colors',
  decorators: [withA11y]
};

const ColorSwatch = ({ color }) => {
  return (
    <div className="mb-6">
      <Text display="title-1b">{color}</Text>
      <div className="flex flex-row">
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(level => {
          return (
            <div className="mr-4">
              <div className={`w-32 h-32 inline-block bg-${color}-${level}`} />
              <div>{level}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const colorSwatches = () => (
  <div>
    {[
      'gray',
      'cyan',
      'blue',
      'indigo',
      'violet',
      'fuschia',
      'pink',
      'red',
      'orange',
      'yellow',
      'lime',
      'green',
      'teal'
    ].map(color => (
      <ColorSwatch color={color} />
    ))}
  </div>
);
