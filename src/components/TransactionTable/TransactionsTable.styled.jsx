import styled from 'styled-components';
import { switchColor } from 'helpers/transformDate';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: visible scroll;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 715px;
    max-height: 80vh;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.bgGrayRight};
    border-radius: 2px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${p => p.theme.ff.familyExo};
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const TableHeading = styled.th`
  &:first-child {
    border-radius: 30px 0 0 30px;
  }
  &:last-child {
    border-radius: 0 30px 30px 0;
  }
  border: none;
  background-color: ${p => p.theme.colors.white};
  text-align: ${p => (p.left ? 'left' : 'center')};

  padding: 16px 10px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TrData = styled.tr`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    background-color: ${p => p.theme.colors.white};
    border-radius: 10px;
    border-left: 5px solid ${switchColor};
  }

  position: relative;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const StyledTd = styled.td`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }
  padding: 8px 10px;
  height: 52px;
  line-height: calc(18 / 16);
  color: ${switchColor};
  font-weight: ${p => (p.type ? '700' : '400')};
  text-align: ${p => (p.left ? 'left' : 'center')};
`;

export const DataHeading = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const DataValue = styled.span`
  @media screen and (max-width: 767px) {
    text-align: end;
  }
  display: block;
  white-space: nowrap;
  width: 130px;
  max-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const chooseBtnColor = p => {
  return p.red ? p.theme.colors.btPink : p.theme.colors.btGreen;
};

export const Button = styled.button`
  &:not(:last-child) {
    margin-right: 5px;
  }
  padding: 5px 7px;
  border: none;
  border-radius: 6px;
  color: white;
  background-color: ${chooseBtnColor};
  transition: box-shadow 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    box-shadow: 0px 3px 10px ${chooseBtnColor};
  }
  svg {
    width: 24px;
    height: 24px;
    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;
