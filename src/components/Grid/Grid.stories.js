import React from 'react';
import Grid from './Grid.js';
import defaultTheme from '../../utils/defaultTheme.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid System',
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    container: {
      description: 'container ana gridtir.item prosu eklenmemelidir',
    },
    justifyContent: {
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end'],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end'],
      },
    },
  },
};

const Story = (args) => {
  const style = {
    border: '3px solid black',
    color: 'white',
    fontSize: 20,
  };
  return (
    <Grid
      container
      direction={'row'}
      style={{ background: defaultTheme.primaryColor, width: 600, height: 100 }}
      {...args}
    >
      <Grid item={1} style={style}>
        1
      </Grid>
      <Grid item={2} style={style}>
        2
      </Grid>
      <Grid item={9} style={style}>
        3
      </Grid>
    </Grid>
  );
};

export const Docs = Story.bind({});
