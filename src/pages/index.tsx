import * as React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    filter: brightness(1.15) opacity(0.8);
  }
`;

const PaddedLink = styled(StyledLink)`
  padding: 0.25em;
`;

const BlackLink = styled(PaddedLink)`
  color: #000;
`;

const WhiteLink = styled(PaddedLink)`
  color: #fff;
`;

const TwoSigma = styled(WhiteLink)`
  background-color: #4398a4;
`;

const Amazon = styled(BlackLink)`
  background-color: #f90;
`;

const CapitalOne = styled(WhiteLink)`
  background-color: #004977;
`;

const Facebook = styled(WhiteLink)`
  background-color: #3b5998;
`;

const DiscoVR = styled(WhiteLink)`
  background-color: #7f1ae5;
`;

const Email = styled(WhiteLink)`
  background-color: #ea4335;
`;

const GitHub = styled(WhiteLink)`
  background-color: #333;
`;

const LinkedIn = styled(WhiteLink)`
  background-color: #0077b5;
`;

const QUEST = styled(WhiteLink)`
  background-color: #5e2b3c;
`;

const Maryland = styled(WhiteLink)`
  background-color: #e03a3e;
`;

function IndexPage() {
  return (
    <React.Fragment>
      <p>Hey! My name is Ekansh.</p>

      <p>
        I'm a software engineer at{" "}
        <TwoSigma target="_blank" href="https://www.twosigma.com/">
          Two Sigma
        </TwoSigma>
        . I studied Computer Science at the{" "}
        <Maryland target="_blank" href="https://www.umd.edu/">
          University of Maryland, College Park
        </Maryland>
        .
      </p>

      <p>
        In 2019, I interned at{" "}
        <TwoSigma target="_blank" href="https://www.twosigmaiq.com/">
          Two Sigma Insurance Quantified
        </TwoSigma>{" "}
        and{" "}
        <Facebook target="_blank" href="https://www.facebook.com/">
          Facebook
        </Facebook>
        . Previously, I've had a chance to contribute at{" "}
        <CapitalOne target="_blank" href="https://www.capitalonelabs.com/">
          Capital One Labs
        </CapitalOne>
        , and{" "}
        <Amazon target="_blank" href="https://aws.amazon.com/">
          Amazon Web Services
        </Amazon>
        .
      </p>

      <p>
        At school, I completed research at the{" "}
        <Maryland target="_blank" href="http://mbrc.umd.edu/">
          Maryland Blended Reality Center
        </Maryland>
        . I specialized in virtual and augmented reality, including their
        medical applications and streaming optimizations. I'm also an alumni of
        the{" "}
        <QUEST
          target="_blank"
          href="https://www.rhsmith.umd.edu/programs/undergraduate-programs/academics/fellows-special-programs/quest"
        >
          QUEST Honors Program
        </QUEST>
        , a program focusing on design and innovation.
      </p>

      <p>
        Outside of that, I share code on{" "}
        <GitHub target="_blank" href="https://github.com/evinaik/">
          GitHub
        </GitHub>
        , where you'll find both completed projects and works in progress. For
        example, I've published a multidisciplinary team designing a virtual
        reality memory palace called{" "}
        <DiscoVR target="_blank" href="https://github.com/evinaik/discovr">
          DiscoVR
        </DiscoVR>
        . Feel free to connect with me on my{" "}
        <LinkedIn target="_blank" href="https://linkedin.com/in/evinaik">
          LinkedIn
        </LinkedIn>{" "}
        as well.
      </p>

      <p>
        Interested? Contact me at{" "}
        <Email target="_blank" href="mailto:ekansh.vinaik@gmail.com">
          ekansh.vinaik@gmail.com
        </Email>
        .
      </p>
    </React.Fragment>
  );
}

export default IndexPage;
