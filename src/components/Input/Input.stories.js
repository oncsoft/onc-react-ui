import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input.js';
import ThemeProvider from '../../utils/theme.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <Input {...args} style={{ width: 400 }}></Input>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const BorderedInput = () => {
  return (
    <ThemeProvider>
      <Input
        bordered
        label="Bordered Input"
        onChange={action('onChange')}
      ></Input>
    </ThemeProvider>
  );
};

export const RoundedInput = () => {
  return (
    <ThemeProvider>
      <Input
        rounded
        label="Rounded Input"
        onChange={action('onChange')}
      ></Input>
    </ThemeProvider>
  );
};
