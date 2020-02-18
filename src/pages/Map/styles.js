import styled from 'styled-components';

export const ContainerPopup = styled.div`
  background: #fff;
  padding: 5px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: #1e6923;
`;

export const TitleApto = styled.div`
  color: #f5794f;
  font-size: 20px;
  font-weight: bold;
`;

export const TextApto = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export const Bottom = styled.button`
  margin: 5px 0 0;
  height: 25px;
  width: 75px;
  background: #f5794f;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  transition: background 0.2s;
  :hover {
    background: #852605;
  }
`;

export const TextLive = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const Point = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #333;
  cursor: pointer;
  :hover {
    background: #229434;
  }
`;
