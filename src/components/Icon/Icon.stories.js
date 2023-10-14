import React from 'react';
import Icon from './Icon';
import * as icons from '../Icons';
import ThemeProvider from '../../utils/theme';
import Grid from '../Grid/Grid';
import defaultTheme from '../../utils/defaultTheme';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

const Story = (args) => {
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
