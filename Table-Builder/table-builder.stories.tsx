import React from 'react';
import { Story } from '@storybook/react';
import { TableBuilder, TableBuilderProps } from './table-builder';
import { TableItem } from '../core';

export default {
  title: 'Components/Table-Builder/TableBuilder',
  component: TableBuilder,
};

const Template: Story<TableBuilderProps> = (args) => <TableBuilder {...args} />;

const mockTable = [
  { name: 'Title', size: 50 },
  { name: 'Status', size: 10 },
  { name: 'Likes', size: 10 },
  { name: 'Dislikes', size: 10 },
  { name: 'Comments', size: 10 },
  { name: 'Date', size: 10 },
];

const generateContent = (
  <>
    {[...new Array(10)].map((_, idx) => (
      <TableItem key={idx} config={mockTable} />
    ))}
  </>
);

export const Table = Template.bind({});
Table.args = {
  tableData: mockTable,
  content: generateContent,
};
