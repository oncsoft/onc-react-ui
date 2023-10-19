import React from 'react';
import ThemeProvider from '../../utils/theme.js';
import UploadImage from './UploadImage.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UploadImage',
  component: UploadImage,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <UploadImage {...args}></UploadImage>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
