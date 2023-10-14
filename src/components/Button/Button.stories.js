import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button.js';
import ThemeProvider from '../../utils/theme.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <Button {...args}></Button>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  return (
    <ThemeProvider>
      <Button
        type="primary"
        label="Button"
        onClick={action('clicked')}
      ></Button>
    </ThemeProvider>
  );
};
