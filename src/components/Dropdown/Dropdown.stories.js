import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown.js';
import ThemeProvider from '../../utils/theme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dropdown',
  component: Dropdown,
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
  const data = ['a', 'b', 'c'];
  const [value, setValue] = useState('a');
  return (
    <ThemeProvider>
      <Dropdown
        {...args}
        value={value}
        onSelect={setValue}
        data={data}
        style={{ width: 400, height: 400 }}
      ></Dropdown>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const DropdownInput = () => {
  const data = ['a', 'b', 'c'];
  const [value, setValue] = useState('a');
  return (
    <ThemeProvider>
      <Dropdown
        label="Dropdown Label"
        value={value}
        data={data}
        onSelect={(e) => {
          setValue(e);
          action('onSelect');
        }}
      ></Dropdown>
    </ThemeProvider>
  );
};
