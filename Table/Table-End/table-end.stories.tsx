import React from 'react';
import { Story } from '@storybook/react';
import { TableEnd, TableEndPosition, TableEndProps } from './table-end';

export default {
  title: 'Components/core/Table/TableEnd',
  component: TableEnd,
};

const Template: Story<TableEndProps> = (args) => <TableEnd {...args} />;

const mockTable = [
  { name: 'Title', size: 50 },
  { name: 'Status', size: 10 },
  { name: 'Likes', size: 10 },
  { name: 'Dislikes', size: 10 },
  { name: 'Comments', size: 10 },
  { name: 'Date', size: 10 },
];

export const Top = Template.bind({});
Top.args = {
  tableData: mockTable,
  position: TableEndPosition.TOP,
};

export const Bottom = Template.bind({});
Bottom.args = {
  tableData: mockTable,
  position: TableEndPosition.BOTTOM,
};
