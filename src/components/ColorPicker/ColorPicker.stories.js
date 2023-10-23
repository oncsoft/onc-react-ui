import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import ThemeProvider from '../../utils/theme.js';
import ColorPicker from './ColorPicker.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ColorPicker',
  component: ColorPicker,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const [color, setColor] = useState('#000');
  const onChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <ThemeProvider>
      <ColorPicker
        {...args}
        value={color}
        onChange={onChange}
        style={{ width: 400 }}
      ></ColorPicker>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const BorderedColorPicker = () => {
  return (
    <ThemeProvider>
      <ColorPicker
        bordered
        label="Bordered ColorPicker"
        onChange={action('onChange')}
      ></ColorPicker>
    </ThemeProvider>
  );
};

export const RoundedColorPicker = () => {
  return (
    <ThemeProvider>
      <ColorPicker
        rounded
        label="Rounded ColorPicker"
        onChange={action('onChange')}
      ></ColorPicker>
    </ThemeProvider>
  );
};
