// imrc
import React, { Component } from 'react'

// ccs
class SearchForm extends Component {
  render () {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Lets dig out some movies ...
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm
