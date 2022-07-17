import * as React from 'react';
import styled from 'styled-components';
import {
  Flex,
  FlexDirectionEnum,
  TableData,
  TableEnd,
  TableEndPosition,
} from '../core';

export interface TableBuilderProps {
  tableData: TableData[];

  content: React.ReactNode | JSX.Element | JSX.Element[];
}

const TableBuilderContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TableBuilderContent = styled.div`
  flex-grow: 1;
`;

const DummyPaginatedDiv = styled.div`
  height: 1px;
  width: 1px;
  background: transparent;
`;

export const TableBuilder = React.forwardRef<HTMLDivElement, TableBuilderProps>(
  ({ tableData, content, ...props }, paginateRef) => {
    return (
      <Flex width="100%" flexDirection={FlexDirectionEnum.COLUMN} {...props}>
        <TableBuilderContainer>
          <TableEnd position={TableEndPosition.TOP} tableData={tableData} />
          <TableBuilderContent>{content}</TableBuilderContent>
          <TableEnd position={TableEndPosition.BOTTOM} tableData={tableData} />
        </TableBuilderContainer>
        <DummyPaginatedDiv ref={paginateRef} />
      </Flex>
    );
  },
);

TableBuilder.displayName = 'TableBuilder';
