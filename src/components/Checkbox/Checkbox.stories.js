import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox.js';
import ThemeProvider from '../../utils/theme.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: Checkbox,
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
      <Checkbox {...args}></Checkbox>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
    action('onChange')(e);
  };
  return (
    <ThemeProvider>
      <Checkbox
        type="secondary"
        label="Checkbox"
        value={checked}
        onChange={onChange}
      ></Checkbox>
    </ThemeProvider>
  );
};
