import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DudeImage = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "design/dude-trace--color.png" }) {
          childImageSharp {
            fluid(maxWidth: 680) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    if (!data?.placeholderImage?.childImageSharp?.fluid) {
      return <div>Picture not found</div>
    }

    return (
      <ImageWrapper>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    );
}

function LandingSection() {
  return (
    <Landing>
      <Title>Vintage Cream</Title>
      <DudeImage />
      {/* <BlockYellow></BlockYellow>
      <BlockOutline></BlockOutline> */}
    </Landing>
  );
}

export default LandingSection

const Landing = styled.section`
  width: 100%;
  height: 800px;

  ${'' /* background-color: red; */}
`;

const Title = styled.h1`
  color: var(--yellow);
  font-size: 8rem;
  margin: 0;
  position: absolute;
  top: 25%;
  left: 10%;
  text-shadow: 
    0px 5rem var( --yellow-tranOne),
    0px 10rem var( --yellow-tranTwo)
  ;
  z-index: var(--negative);

  @media (max-width: 1300px) {
    font-size: 6rem;

    text-shadow: 
    0px 3rem var(--yellow),
    0px 6rem var(--yellow)
  ;
  }
  @media (max-width: 1000px) {
    left: 5%;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const ImageWrapper = styled.div`
  width: 680px;
  float: right;
  padding: 0;
  margin-top: 4rem;
  mix-blend-mode: luminosity;
  opacity: 0.6;

  z-index: var(--midground);

  @media (max-width: 1200px) {
    width: 600px;
    margin-right: -6rem;
  }
  @media (max-width: 768px) {
    margin-right: -12rem;
  }
  @media (max-width: 600px) {
    width: 500px;
    margin-right: -15rem;
  }
`;

const BlockYellow = styled.div`
  width: 8rem;
  height: 680px;
  position: absolute;
  bottom: -125px;
  right: 8rem;

  ${'' /* mix-blend-mode: darken; */}
  background-color: var(--yellow);

  z-index: var(--background);

  @media (max-width: 1200px) {
    width: 7rem;
    height: 600px;
    right: 6rem;
  }
`;

const BlockOutline = styled.div`
  width: 8rem;
  height: 680px;
  position: absolute;
  bottom: -115px;
  right: 7.125rem;
  border: 3px solid var(--black);

  z-index: var(--negative);
`;




