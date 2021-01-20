import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterColumn>
        <h2 className="small">Socials</h2>
      </FooterColumn>
      <FooterColumn>
        <h2 className="small">Location</h2>
      </FooterColumn>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  @media (min-width: 550px) {
    display: flex;
  }
  background: #282828;
  color: white;
  min-height: 20vh;
  display: block;
  justify-content: space-between;
`;

const FooterColumn = styled.div``;

export default Footer;
