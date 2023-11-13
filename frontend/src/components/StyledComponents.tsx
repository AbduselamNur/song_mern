import styled from '@emotion/styled';
import { space, layout, color, typography } from 'styled-system';
import { Link } from 'react-router-dom';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-left: 10%;
  margin-top: 15%;
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
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  ;

  &:hover {
    background-color: #45a049;
  }
`;

export const Modal = styled.div<{ isOpen: boolean, onClose: any }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  background-color: #4caf50;
  color: white;
`;

export const ModalCloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  line-height: 20px;

  &:hover {
    color: black;
  }
`;

export const ModalBody = styled.div`
  padding: 10px;
`;

export const Input = styled.input`
  ${space}
  ${layout}
  ${color}
  ${typography}
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const DeleteButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${typography}
  cursor: pointer;
  background-color: #f44336;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const DeleteConfirmationModal = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const DeleteConfirmationContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  text-align: center;
`;

export const DeleteConfirmationText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const DeleteConfirmationButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${typography}
  cursor: pointer;
  background-color: #f44336;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-right: 10px;
`;

export const SidebarContainer = styled.div`
  background-color: #333;
  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
`;

export const SidebarLink = styled(Link)`
  display: block;
  padding: 10px;
  color: white;
  padding-top: 50px;
  padding-bottom: 40px;
  text-decoration: none;
  text-align: center;
  background-color: #333;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Arial', sans-serif; 

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }

  &:active {
    background-color: lightblue;
    transform: scale(1.05);
    text-decoration: solid;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 200px; 
  padding: 16px;
`;