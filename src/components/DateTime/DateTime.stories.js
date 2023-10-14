import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import ThemeProvider from '../../utils/theme.js';
import DateTime from './DateTime.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DateTime',
  component: DateTime,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const [date, setDate] = useState();
  return (
    <ThemeProvider>
      <DateTime
        {...args}
        value={date}
        onChange={setDate}
        style={{ width: 400 }}
      ></DateTime>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const DateTimeUsage = () => {
  return (
    <ThemeProvider>
      <DateTime label="DateTime Input" onChange={action('onChange')}></DateTime>
    </ThemeProvider>
  );
};
