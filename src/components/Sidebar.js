import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 100%;
   background-color: white;
   padding: 2rem;
`;
const SidebarItem = styled.div`
   margin-bottom: 1rem;
   font-size: 1rem;
   cursor: pointer;
`;

const Sidebar = ({ items, activeIndex }) => {
   return (
      <Wrapper>
         {items.map((x, i) => (
            <SidebarItem>{activeIndex === i ? <b>{x}</b> : x}</SidebarItem>
         ))}
      </Wrapper>
   );
};

export default Sidebar;
