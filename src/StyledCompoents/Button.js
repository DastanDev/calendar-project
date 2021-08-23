import styled, { css } from "styled-components";

const VariantStyles = {
   primary: css`
      background: rgb(13, 70, 144);
      background: linear-gradient(68deg, rgba(13, 70, 144, 1) 0%, rgba(1, 164, 210, 1) 100%); ;
   `,
   success: css`
      background-color: #83b283;
   `,
   danger: css`
      background-color: #c48686;
   `,
};

export default styled.div`
   padding: 0.5rem 2rem;
   font-size: 1.125rem;
   color: white;
   width: fit-content;
   cursor: pointer;
   ${(p) => VariantStyles[p.variant]}
`;
