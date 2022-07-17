import React from 'react';
import { Story } from '@storybook/react';
import { TableItem, TableItemProps } from './table-item';

export default {
  title: 'Components/core/Table/TableItem',
  component: TableItem,
};

const Template: Story<TableItemProps> = (args) => {
  return (
    <>
      {[...new Array(10)].map((_, idx) => (
        <TableItem {...args} key={idx} />
      ))}
    </>
  );
};

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
  config: mockTable,
};

export const Bottom = Template.bind({});
Bottom.args = {};
