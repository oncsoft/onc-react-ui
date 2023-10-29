import React, { useRef, useState } from 'react';
import ThemeProvider from '../../utils/theme.js';
import Popover from './Popover.js';
import Button from '../Button/Button.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Popover',
  component: Popover,
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  return (
    <ThemeProvider>
      <Button
        ref={ref}
        label={'Popover Aç'}
        style={{ width: '100%' }}
        onClick={() => setOpen(true)}
      ></Button>
      <Popover
        {...args}
        targetRef={ref}
        open={open}
        setOpen={setOpen}
        position="bottom-right"
      >
        Popover deneme
      </Popover>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
