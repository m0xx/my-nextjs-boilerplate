import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Text from '../components/text';

import '../styles/index.css';
import { capitalize } from './helpers';

export default {
  title: 'Text',
  decorators: [withA11y]
};

const formatTextStyle = s => capitalize(s).replace('-', ' ');

// TODO: remove from pages

const TextStyles = () => {
  const textStyles = [
    'header-1',
    'header-2',
    'header-3',
    'header-4',
    'header-5',
    'title-1',
    'title-1b',
    'title-2',
    'title-2b',
    'subtitle-1',
    'subtitle-1m',
    'subtitle-1b',
    'subtitle-2',
    'subtitle-2b',
    'paragraph-1',
    'paragraph-1m',
    'paragraph-1b',
    'paragraph-2',
    'paragraph-2b',
    'description-1',
    'description-1m',
    'description-1b',
    'description-2',
    'description-2b',
    'small-1',
    'small-1m',
    'small-1b',
    'small-2',
    'small-2b',
  ];

  return (
    <div>
      {textStyles.map(textStyle => (
        <Text className="mb-3" display={textStyle}>
          {formatTextStyle(textStyle)}
        </Text>
      ))}
    </div>
  );
};

export const allTexts = () => <TextStyles />;
