import React, { useState } from 'react';

import ThemeProvider from '../../utils/theme.js';
import Dialog from './Dialog.js';
import Button from '../Button/Button.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dialog',
  component: Dialog,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <div style={{ width: 500, height: 500 }}>
        <Dialog {...args} open></Dialog>
      </div>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  const [dialog, setDialog] = useState({
    children: 'Dialog Contenti burası',
    title: 'Dialog Title',
  });
  const dialogOpen = (status) => () => {
    setDialog((prev) => ({ ...prev, open: status }));
  };
  return (
    <ThemeProvider>
      <Button label="Dialog Aç" onClick={dialogOpen(true)} />
      <Dialog
        open={dialog.open}
        title={dialog.title}
        actions={
          <Button
            size={'sm'}
            label="Dialog Kapat"
            onClick={dialogOpen(false)}
          />
        }
      >
        {dialog.content}
        {dialog.children}
      </Dialog>
    </ThemeProvider>
  );
};
