import React from 'react'

function Footer (props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-primary font-weight-normal">
              Hassan M
            </span>
            <p> Powered by <i className='fab fa-js' />
              <i className="fab fa-react" />
                &amp; integrated with external API--
              <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
              OMDB
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
