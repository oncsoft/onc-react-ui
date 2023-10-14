import React, { useState } from 'react';
import Modal from './Modal';
import { action } from '@storybook/addon-actions';
import ThemeProvider from '../../utils/theme.js';
import Button from '../Button/Button.js';
import Calendar from '../Calendar/Calendar.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    open: {
      description: 'Modal Açılmasını yönetir',
    },
    onClose: {
      description: 'Modal Kapatma butonuna basıldığında tetiklenir',
    },
  },
};

const Story = (args) => {
  return (
    <ThemeProvider>
      <Modal {...args}></Modal>
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});

export const Primary = () => {
  const [open, setOpen] = useState(false);
  const onClose = (e) => {
    setOpen(false);
    action('onClose')(e);
  };
  return (
    <ThemeProvider>
      <Button label={'Modal Aç'} onClick={() => setOpen(true)} />
      <Modal open={open} onClose={onClose} heading="Modal Başlık">
        <Calendar />
      </Modal>
    </ThemeProvider>
  );
};
