import React from 'react';

import Icon from './Icon.js';
import * as icons from '../Icons/index.js';
import ThemeProvider from '../../utils/theme.js';
import Grid from '../Grid/Grid.js';
import { AddSvg } from '../Icons/AddSvg.js';
import defaultTheme from '../../utils/defaultTheme.js';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

const Story = (args) => {
  console.error('icons', icons);
  return (
    <ThemeProvider>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
        spacing={2}
      >
        {Object.keys(icons).map((key) => {
          return (
            <Grid container direction={'column'} item={1} key={key}>
              <div
                style={{ fontSize: '10px', color: defaultTheme.primaryColor }}
              >
                {key}
              </div>
              <Icon {...args}>{React.createElement(icons[key])}</Icon>
            </Grid>
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const IconUsage = () => {
  return (
    <ThemeProvider>
      <Icon size="1.rem" type="primary">
        <AddSvg />
      </Icon>
    </ThemeProvider>
  );
};
