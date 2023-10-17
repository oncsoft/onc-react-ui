import React from 'react';

import ThemeProvider from '../../utils/theme.js';
import ListItem from './ListItem.js';
import List from '../List/List.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List',
  component: ListItem,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <List {...args}>
        <ListItem {...args}></ListItem>
        <ListItem {...args}></ListItem>
        <ListItem {...args}></ListItem>
        <ListItem {...args}></ListItem>
      </List>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
