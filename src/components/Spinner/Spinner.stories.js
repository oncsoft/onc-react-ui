import React from 'react';
import ThemeProvider from '../../utils/theme.js';
import Spinner from './Spinner.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 500, height: 200 }}>
        <Spinner {...args}></Spinner>
      </div>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  return (
    <ThemeProvider>
      <Spinner text="Yükleniyor" type="spot" size="3rem" />
    </ThemeProvider>
  );
};
