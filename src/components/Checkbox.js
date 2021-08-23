import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding-top: 1.5rem;
   padding-bottom: 3rem;
`;
const Label = styled.div`
   font-size: 0.8rem;
   color: darkgray;
   margin-left: 0.5rem;
`;

const Button = styled.div``;

const Checkbox = ({ label }) => {
   return (
      <Wrapper>
         <input type="checkbox"></input>
         <Label>{label}</Label>
      </Wrapper>
   );
};

export default Checkbox;
