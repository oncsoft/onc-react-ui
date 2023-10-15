import React, { useState } from 'react';
import ThemeProvider from '../../utils/theme.js';
import Switch from './Switch.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Switch',
  component: Switch,
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
      <Switch {...args}></Switch>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ThemeProvider>
      <Switch type="default" checked={checked} onChange={setChecked}></Switch>
    </ThemeProvider>
  );
};
