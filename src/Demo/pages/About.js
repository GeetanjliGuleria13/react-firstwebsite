import React from 'react';
import Common from '../Common';
import web from "../../images/about.png";


export default function About() {
  return (
    <>
      <Common
      name="Welcome to About page"
      imgsrc={web}
      visit="/contact"
      btnName="Contact now " />
    </>
  )
}
