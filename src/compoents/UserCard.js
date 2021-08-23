import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   border-radius: 2.5rem;
   background-color: white;
   overflow: hidden;
`;

const Image = styled.img`
   height: 20rem;
   object-fit: cover;
`;

const UserCard = ({ email, image, name, phoneNumber }) => {
   return (
      <Wrapper>
         <Image src={image}></Image>
         <div style={{ padding: "2rem" }}>
            <h3>{name}</h3>
            <div>{email}</div>
            <br />
            <div>{phoneNumber}</div>
         </div>
      </Wrapper>
   );
};

export default UserCard;
