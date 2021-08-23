import styled, { css } from "styled-components";

interface FlexboxProps {
   gap?: string;
   items?: number;
   dir?: "row" | "column";
}

export default styled.div<FlexboxProps>`
   /* ${(p) =>
      css`
         & > * {
            margin-right: ${p.gap || "1rem"};
         }
         & > *:last-child {
            margin-right: 0;
         }
      `}; */
   flex-direction: ${(p) => p.dir || "row"};
`;
