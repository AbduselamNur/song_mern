import styled from '@emotion/styled';
import { space, layout, color, typography } from 'styled-system';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const TableData = styled.td`
  padding: 12px;
`;

export const StyledButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${typography}
  // Add other styles as needed
`;
