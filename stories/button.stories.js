import React from 'react';
import Button from '../components/button';
import { withA11y } from '@storybook/addon-a11y';

import '../styles/index.css';
import layoutDecorator from './layout-decorator';
import Text from '../components/text';
import { colors as allColors, capitalize } from './helpers';

export default {
  title: 'Button',
  decorators: [withA11y, layoutDecorator()]
};

const ButtonVariants = props => (
  <div className="mb-6">
    <Text className="mb-4" display="title-1b">
      {props.variant}
    </Text>
    <Text className="mb-4">enabled</Text>
    {allColors.map(color => (
      <Button {...props} color={color} className="mb-4 mr-4">
        {capitalize(color)}
      </Button>
    ))}
    <Text className="mb-4">disabled</Text>
    {allColors.map(color => (
      <Button {...props} disabled color={color} className="mb-4 mr-4">
        {capitalize(color)}
      </Button>
    ))}
  </div>
);

export const all = () => (
  <div>
    <ButtonVariants variant="solid" />
    <ButtonVariants variant="outline" />
    <ButtonVariants variant="ghost" />
    <ButtonVariants variant="link" />
  </div>
);

export const withSizes = () => (
  <div>
    <Button size="sm" color="gray">
      Small
    </Button>
    <Button size="md" color="gray">
      Medium
    </Button>
    <Button size="lg" color="gray">
      Large
    </Button>
  </div>
);

export const withLoading = () => (
  <div>
    <ButtonVariants variant="solid" isLoading />
    <ButtonVariants variant="outline" isLoading />
    <ButtonVariants variant="ghost" isLoading />
    <ButtonVariants variant="link" isLoading />
  </div>
);

export const withLoadingText = () => (
  <div>
    <ButtonVariants variant="solid" loadingText="Loading..." isLoading />
    <ButtonVariants variant="outline" loadingText="Loading..." isLoading />
    <ButtonVariants variant="ghost" loadingText="Loading..." isLoading />
    <ButtonVariants variant="link" loadingText="Loading..." isLoading />
  </div>
);

export const withRawContent = () => (
  <Button rawContent size="lg">
    <span className="underline">Raw content!</span>
  </Button>
);
