import styled from '@emotion/styled';
import { space, layout, color, typography } from 'styled-system';
import { Link } from 'react-router-dom';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const TableData = styled.td`
  padding: 12px;
  // width: 10%;
`;

export const StyledButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${typography}
  cursor: pointer;
  background-color: #4caf50;
  margin-left: 20px;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  ;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
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
  padding: 9px;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    background-color: #d32f2f;
    transform: scale(1.05);
  }
  `;
  

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-right: 15%;
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
  margin-left: 300px;
  width: 75%;
  align-items: center;
  @media (max-width: 1040px) {
    margin-left: 200px;
    margin-right: 50px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 30px;
  margin-bottom: 30px;
`;

export const SongCard = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  transition: 0.3s;
  width: 300px; 
  height: 200px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Card = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  margin-left: 16px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  transition: 0.3s;
  width: 150px; 
  height: 150px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const StyledParagraph = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  padding-left: 25px;
`;