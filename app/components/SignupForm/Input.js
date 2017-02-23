import styled from 'styled-components';

const Input = styled.input`
z-index: ${(props) => props.zIndex};
text-align: left;
align-self: flex-start;
display: flex;
align-items: center;
font-size: 16px;
color: ${(props) => props.color};
height: 35px;
width: 260px;
margin-top: 35px;
border-bottom: solid 2px;
border-color: ${(props) => props.color};
margin-left: 15px;
&:focus{
  outline: none;
}
`;


export default Input;
