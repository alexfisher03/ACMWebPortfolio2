import React from 'react'

function Contact() {
  return (
    <section id="contact" class="contact">
        <h2 className="font-mono text-2xl font-bold py-3">Contact</h2>
        <hr/>
        <p className="font-mono py-3">You can reach me at 
            <a className="hover:text-blue-900 hover:text-lg duration-100" href="mailto:your-email@example.com"> your-email@example.com</a>.
        </p> 
    </section>
  )
}

export default Contact