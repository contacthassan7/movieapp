import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-3">
                <span className='fab fa-imdb fa-2x' />
                <i className="fab fa-react fa-2x" id="react-logo" />
                <span className='fab fa-js fa-2x' />
                <span className='fab fa-redux fa-2x' />
              </div>
              <div className="col-md-3">
                <h3>Browse Movies</h3>
              </div>
              <div className="col-md-6">
                <input type="search" placeholder="Search..." id="" className="form-control" />
              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default Header
