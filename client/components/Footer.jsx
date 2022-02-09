import React from 'react'

function Footer (props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Hassan M
            </span>
            , Using <i className='fab fa-js' />
            <i className="fab fa-react" />
                     React &amp; Redux
            integrated with external API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
