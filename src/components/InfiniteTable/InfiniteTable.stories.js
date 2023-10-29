import React, { useState } from 'react';
import ThemeProvider from '../../utils/theme.js';
import InfiniteTable from './InfiniteTable.js';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InfiniteTable',
  component: InfiniteTable,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const Story = (args) => {
  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',
      email: 'john@example.com',
      age: 30,
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    {
      id: 1,
      name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',
      email: 'john@example.com',
      age: 30,
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    {
      id: 1,
      name: 'John Doesadasdsa sadasda sdsadas dasd sda sa d sa',
      email: 'john@example.com',
      age: 30,
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    // Add more data here...
  ]);

  // Sample data
  const sampleData2 = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    // Add more data here...
  ];

  // Define columns for the table
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'age', header: 'Age' },
    // Add more columns here...
  ];

  // Function to simulate fetching more data
  const fetchMoreData = () => {
    // Simulate an API call or data fetching logic here
    // For this example, we'll just add more sample data
    const newData = [
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
      {
        id: 4,
        name: 'Bob Wilsonsadasd asdasdasdasdsadad asdsadasdsasdad',
        email: 'bob@example.com',
        age: 35,
      },
      // Add more data here...
    ];

    setSampleData((current) => [...current, ...sampleData2, ...newData]);
  };
  return (
    <ThemeProvider>
      <InfiniteTable
        {...args}
        data={sampleData}
        columns={columns}
        fetchData={fetchMoreData}
      />
    </ThemeProvider>
  );
};

export const Docs = Story.bind({});
