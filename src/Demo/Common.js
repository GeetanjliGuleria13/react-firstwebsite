import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Common(props) {
  return (
    <>
      <section id="header" className='d-flex align-items-center'>
        <div className="container-fluid nav_bg pb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row mb-5">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name} <br/> <strong className="brand-name"> Geetanjli Guleria</strong></h1>
                            <p className='my-3'> We are the team of talented developer making websites</p>
                            <div className="mt-3 custom-btn">
                                <NavLink to={props.visit} className="btn btn-outline-info btn-medium">{props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-lg-end text-start">
                            <img className='img-fluid haeder-img animated' src={props.imgsrc} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
      </section>
    </>
  )
}
