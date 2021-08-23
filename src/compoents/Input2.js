import styled from "styled-components";

const Label = styled.div`
   color: black;
   font-weight: bold;
   margin-bottom: 0.5rem;
`;

const Input = styled.input`
   border: none;
   outline: one;
   border-bottom: 1px solid black;
   color: darkgray;
   width: 100%;
   &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid black;
   }
   ::placeholder {
      color: darkgray;
   }
`;

const Input2 = ({ label, placeholder }) => {
   return (
      <div>
         <Label>{label}</Label>
         <Input placeholder={placeholder}></Input>
      </div>
   );
};

export default Input2;
