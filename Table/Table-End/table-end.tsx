import * as React from 'react';
import styled from 'styled-components';

export enum TableEndPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export interface TableData {
  name: string;

  /**
   * flex-basis value 100, so increment by that
   */
  size: number;
}

export interface TableEndProps {
  position: TableEndPosition;

  tableData: TableData[];
}

interface TableEndRootProps {
  position: TableEndPosition;
}

const TableEndRoot = styled.div<TableEndRootProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #d8dee9;
  border-style: ${(p) =>
    p.position === TableEndPosition.TOP
      ? 'none none solid none'
      : 'solid none none none'};
  padding: ${(p) =>
    p.position === TableEndPosition.TOP ? '0.25rem 0' : '0.3rem 0'};
`;

const TableTextItem = styled.span<{ size: number }>`
  flex-basis: ${(p) => p.size}%;
`;

export const TableEnd: React.FC<TableEndProps> = ({
  position = TableEndPosition.TOP,
  tableData = [],
}) => {
  return (
    <TableEndRoot position={position}>
      {tableData.map(({ name, size }, idx) => (
        <TableTextItem size={size} key={idx}>
          {name}
        </TableTextItem>
      ))}
    </TableEndRoot>
  );
};
