import React, { useState } from 'react';
import Editor from './Editor';
import ThemeProvider from '../../utils/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Editor',
  component: Editor,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <Editor {...args}></Editor>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  const [value, setValue] = useState(`<b><Editor></b> Alanı`);

  return (
    <ThemeProvider>
      <Editor value={value} onChange={setValue} />
    </ThemeProvider>
  );
};
