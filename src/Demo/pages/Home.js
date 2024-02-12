import React from 'react';  
import Common from '../Common';
import web from "../../images/rocket-2.png";  

export default function Home() {
  return (
    <>
      <Common
      name="Grow your business with"
      imgsrc={web}
      visit="/service"
      btnName="get started" />
    </>
  )
}
