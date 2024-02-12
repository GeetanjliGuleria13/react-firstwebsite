import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className='bg-light text-center'>
        <p>©️ {currentYear} <strong>Geetanjli Guleria</strong>. All Rights Reserved | Terms and Conditions.</p>
      </footer>
    </>
  )
}
