import { MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from "mdbreact";
import styled from "styled-components";
// import LoggedInNavbar from "../../Components/LoggedInNavbar";
import Sidebar from "../../components/Sidebar";
import CalendarPageContent from "./CalendarPageContent";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
`;

const BottomWrapper = styled.div`
   flex-grow: 1;
   display: flex;
   height: 100%;
   width: 100%;
`;

const CalendarPage = () => {
   return (
      <div className="classic-form-page" id="login">
         <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center" overlay="stylish-strong">
               <MDBContainer>
                  <MDBRow>
                     {/* <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto"> */}
                     <Wrapper>
                        {/* <LoggedInNavbar
            heading="Ejecutor interno"
            subHeading="Plataforma de administración"
            logo={Images.bdpLogo1}
            username="Sammy!"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
         ></LoggedInNavbar> */}
                        <BottomWrapper>
                           <Sidebar
                              items={[
                                 "NOVEDADES",
                                 "PERSONAS",
                                 "EVENTOS",
                                 "TRABAJO EN CLASES",
                                 "REPORTES",
                                 "CALIFICACIONES",
                                 "CALENDARIO",
                                 "MEET",
                              ]}
                              activeIndex={6}
                           ></Sidebar>
                           <CalendarPageContent></CalendarPageContent>
                        </BottomWrapper>
                     </Wrapper>
                     {/* </MDBCol> */}
                  </MDBRow>
               </MDBContainer>
            </MDBMask>
         </MDBView>
      </div>
   );
};

export default CalendarPage;
