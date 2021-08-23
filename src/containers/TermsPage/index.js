import React from "react";
import {
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,
   MDBMask,
   MDBView,
   MDBInput,
   MDBSelect,
   MDBSelectInput,
   MDBSelectOption,
   MDBSelectOptions,
   MDBBtn,
   MDBDatePicker,
} from "mdbreact";
import styled from "styled-components";
import Input from "../../StyledCompoents/Input";
import Select from "../../StyledCompoents/Select";
import Textarea from "../../StyledCompoents/Textarea";
import Button from "../../StyledCompoents/Button";
import CenteringWrapper from "../../StyledCompoents/CenteringWrapper";
import "./styles.css";
import "../../common/styles.css";
const Wrapper = styled.div`
   height: 100%;
   background: rgb(243, 175, 71);
   background: linear-gradient(51deg, rgba(243, 175, 71, 1) 0%, rgba(242, 123, 173, 1) 50%, rgba(0, 0, 178, 1) 100%);
`;
const Popup = styled.div`
   width: 80%;
   background: white;
   padding: 2rem 5rem;
`;
const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   & > *:first-child {
      margin-right: 2rem;
   }
   margin-top: 3rem;
   place-items: center;
`;
class Register extends React.Component {
   submitHandler = (event) => {
      event.preventDefault();
      event.target.className += " was-validated";
   };

   changeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   };

   render() {
      return (
         <div id="register">
            <MDBView>
               <MDBMask className="d-flex justify-content-center align-items-center" overlay="gradient">
                  <MDBContainer className="h-100 d-flex justify-content-center align-items-center">
                     <MDBRow>
                        <MDBCol md="12" className="mt-5 mx-auto">
                           <CenteringWrapper>
                              <Popup style={{ margin: "5rem 0", height: "80vh", overflow: "scroll" }}>
                                 <h1>TÉRMINOS Y CONDICIONES</h1>
                                 <div>
                                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod an et iusto odio dignissim qui blandit praesent
                                    luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                                    dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                    ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                    nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                                    praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                                    ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                    ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                    nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                                    praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                                    ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                    ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                    nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                                    praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                                    ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                    ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                    consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                    consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                    consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                                 </div>
                                 <ButtonWrapper>
                                    <Button variant="success">ACEPTAR</Button>
                                    <Button variant="danger">RECHAZAR</Button>
                                 </ButtonWrapper>
                              </Popup>
                           </CenteringWrapper>
                        </MDBCol>
                     </MDBRow>
                  </MDBContainer>
               </MDBMask>
            </MDBView>
         </div>
      );
   }
}

export default Register;
