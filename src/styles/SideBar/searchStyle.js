import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: var(--sidebar-color);
  /* border: 1px solid #2c3e50; */
  /* padding: 10px; */
  border-radius: 5px;
  /* margin-left: 10px; */
`;

export const LogoImg = styled.img`
  /* margin-top: 20px;
  margin-left: 140px; */
  display: flex;
  justify-content: center;
  margin: 20px auto;
  height: 130px;
`;

export const SearchInputWrapper = styled.div``;

export const SearchInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px var(--lightgray-color);
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 1.4;
  letter-spacing: -0.01em;
  padding: 0 12px 0 40px;
  border: 1px solid gray;
  margin-left: 20px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 178px;
  left: 35px;
  width: 24px;
`;
