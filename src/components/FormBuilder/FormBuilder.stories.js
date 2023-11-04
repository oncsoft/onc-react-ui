import React, { useRef } from 'react';

import ThemeProvider from '../../utils/theme.js';
import FormBuilder from './FormBuilder.js';
import Button from '../Button/Button.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormBuilder',
  component: FormBuilder,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = () => {
  const builderRef = useRef();
  return (
    <ThemeProvider>
      <FormBuilder
        ref={builderRef}
        data={[
          {
            item: 6,
            type: 'Input',
            value: 'aaa',
            name: 'a',
            label: 'İnput Alanı',
            bordered: true,
          },
          {
            item: 6,
            type: 'Input',
            name: 'b',
            label: 'İnput Alanı2',
            value: 'bbb',
          },
          {
            item: 6,
            type: 'Dropdown',
            name: 'c',
            label: 'Dropdown Alanı',

            value: 'b',
            data: ['a', 'b', 'c'],
          },
          {
            item: 6,
            type: 'DateTime',
            label: 'Time Alanı',

            name: 'd',
            value: new Date(),
          },
          {
            item: 12,
            type: 'ColorPicker',
            name: 'e',
            value: '#fff',
          },
        ]}
      />
      <Button
        label="Değerler"
        onClick={() => alert(JSON.stringify(builderRef.current.getData))}
      />
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
