import React, { useState } from 'react';

import ThemeProvider from '../../utils/theme.js';
import InfiniteScroll from './InfiniteScroll.js';
import { timeBasedUUID } from '../../utils/helper.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InfiniteScroll',
  component: InfiniteScroll,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const newData = Array.from({ length: 10 }, (_, i) => {
    return <span key={i}>Item {i + 1} </span>;
  });
  const [data, setData] = useState(newData);

  const renderItem = (item) => {
    return <div key={timeBasedUUID()}>{item}</div>;
  };
  const fetchData = async () => {
    setTimeout(() => {
      setData((prev) => [...prev, ...newData]);
    }, 1000);
  };

  return (
    <ThemeProvider>
      <InfiniteScroll
        {...args}
        fetchData={fetchData}
        threshold={400}
        data={data}
        renderItem={renderItem}
        itemHeight={60}
        containerHeight={400}
      />
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
