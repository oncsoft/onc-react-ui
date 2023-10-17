import React from 'react';

import ThemeProvider from '../../utils/theme.js';
import VirtualList from './VirtualList.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'VirtualList',
  component: VirtualList,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const data = Array.from({ length: 200 }, (_, i) => {
    return <span key={i}>Item {i + 1} </span>;
  });

  return (
    <ThemeProvider>
      <VirtualList
        {...args}
        data={data}
        itemHeight={40}
        containerHeight={400}
      />
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
