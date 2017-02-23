/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const Input = styled.input`
  z-index: 3;
  text-align: left;
  align-self: flex-start;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #E5B5D1;
  height: 35px;
  width: 260px;
  margin-top: 35px;
  border-bottom: solid 2px;
  border-color: #E5B5D1;
  margin-left: 15px;

  &:focus{
    outline: none;
  }

`;

export default Input;
