import React from 'react';
import ThemeProvider from '../../utils/theme.js';
import Alert from './Alert.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alert',
  component: Alert,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <Alert {...args}></Alert>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
