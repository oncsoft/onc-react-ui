import React from 'react';
import { action } from '@storybook/addon-actions';
import ThemeProvider from '../../utils/theme.js';
import TextArea from './TextArea.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TextArea',
  component: TextArea,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <TextArea {...args} style={{ width: 400 }}></TextArea>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const BorderedTextArea = () => {
  return (
    <ThemeProvider>
      <TextArea
        bordered
        label="Bordered TextArea"
        onChange={action('onChange')}
      ></TextArea>
    </ThemeProvider>
  );
};

export const RoundedTextArea = () => {
  return (
    <ThemeProvider>
      <TextArea
        rounded
        label="Rounded TextArea"
        onChange={action('onChange')}
      ></TextArea>
    </ThemeProvider>
  );
};
