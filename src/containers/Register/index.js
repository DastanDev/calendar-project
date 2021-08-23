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
import "./styles.css";
import "../../common/styles.css";
const FormRow = styled.div`
   display: grid;
   grid-template-columns: repeat(${(p) => p.items}, 1fr);
   grid-template-rows: 1fr;
   gap: 1rem;
`;

const InputsWrapper = styled.div`
   display: grid;
   grid-template-rows: repeat(9, 1fr);
   gap: 1rem;
`;

const TextboxWrapper = styled.div`
   display: grid;
   grid-template-rows: repeat(4, 1fr);
   gap: 2rem;
`;
const Wrapper = styled.div`
   display: grid;
   gap: 2rem;
   grid-template-columns: 1fr 1fr;
   width: 80%;
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
                           <Wrapper>
                              <InputsWrapper>
                                 <FormRow items={1}>
                                    <Input placeholder="Fecha"></Input>
                                 </FormRow>
                                 <FormRow items={2}>
                                    <Input placeholder="Nombres"></Input>
                                    <Input placeholder="Apellidos"></Input>
                                 </FormRow>
                                 <FormRow items={3}>
                                    <Select>
                                       <option value="Departamento">Departamento</option>
                                    </Select>
                                    <Select>
                                       <option value="Departamento">Departamento</option>
                                    </Select>
                                    <Select>
                                       <option value="Departamento">Departamento</option>
                                    </Select>
                                 </FormRow>
                                 <FormRow items={3}>
                                    <Input placeholder="Cédula de Identidad"></Input>
                                    <Select>
                                       <option value="Extensión">Extensión</option>
                                    </Select>
                                    <Select>
                                       <option value="Estado Civil">Estado Civil</option>
                                    </Select>
                                 </FormRow>
                                 <FormRow items={3}>
                                    <Input placeholder="Fecha de Nacimiento"></Input>
                                    <Select>
                                       <option value="Edad">Edad</option>
                                    </Select>
                                    <Select>
                                       <option value="Edad">Rango</option>
                                    </Select>
                                 </FormRow>
                                 <FormRow items={1}>
                                    <Input placeholder="Profesión / Ocupación"></Input>
                                 </FormRow>
                                 <FormRow items={2}>
                                    <Input placeholder="Correo Electrónico"></Input>
                                    <Input placeholder="Teléfono / Celular"></Input>
                                 </FormRow>
                                 <FormRow items={1}>
                                    <Input placeholder="Género"></Input>
                                 </FormRow>
                                 <FormRow items={1}>
                                    <Input placeholder="Grado Académico"></Input>
                                 </FormRow>
                                 <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Button style={{ float: "right" }} variant="success">
                                       Accept
                                    </Button>
                                 </div>
                              </InputsWrapper>
                              <TextboxWrapper>
                                 <Textarea>Descripción del Emprendimiento</Textarea>
                                 <Textarea>Descripción del Emprendimiento</Textarea>
                                 <Textarea>Descripción del Emprendimiento</Textarea>
                                 <Textarea>Descripción del Emprendimiento</Textarea>
                                 <Button variant="danger">Cancel</Button>
                              </TextboxWrapper>
                           </Wrapper>
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
