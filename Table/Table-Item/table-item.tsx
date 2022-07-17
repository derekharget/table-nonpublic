import * as React from 'react';
import styled from 'styled-components';

export interface TableItemProps {
  /**
   * Set a flex-basis config and generate results
   * set name of item
   */
  config: {
    size: number;
    name: string;
  }[];
}

const TableItemRoot = styled.div`
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.25rem 0;

  &:nth-child(2n - 1) {
    background-color: #3b4252;
  }

  &:hover {
    background-color: #4c566a;
  }
`;

const TableItemEl = styled.div<{ size: number }>`
  flex-basis: ${(p) => p.size}%;
`;

export const TableItem: React.FC<TableItemProps> = ({ config = [] }) => {
  return (
    <TableItemRoot>
      <>
        {config.map(({ size, name }, idx) => (
          <TableItemEl key={idx} size={size}>
            {name}
          </TableItemEl>
        ))}
      </>
    </TableItemRoot>
  );
};
