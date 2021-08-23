import styled from "styled-components";
import UserCard from "../../components/UserCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from "mdbreact";

const Wrapper = styled.div`
   display: flex;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.2);
   padding: 3rem;
   flex-grow: 1;
`;
const CalendarWrapper = styled.div`
   background-color: white;
   border-radius: 3rem;
   margin-left: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-grow: 1;
`;

const CalendarPageContent = () => {
   return (
      <Wrapper>
         <UserCard
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            email="samyfer@gmail.com"
            phoneNumber="+591 78569355"
            name="Samuel Fernandez Cortez"
         ></UserCard>
         <CalendarWrapper>
            <Calendar></Calendar>
         </CalendarWrapper>
      </Wrapper>
   );
};

export default CalendarPageContent;
