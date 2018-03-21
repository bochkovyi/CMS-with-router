import React from 'react'

const List = () => (
  <React.Fragment>
    <div className="card text-dark bg-light mb-3">
      <div className="card-header">Hello there!</div>
      <div className="card-body">
        <h4 className="card-title">Do you want to see a really awesome list?</h4>
        <p className="card-text">And you have one! A list of my apps.
          <br/><br/><a className="btn btn-primary" href="https://github.com/bochkovyi" target="blank" rel="noopener">Check out my github!</a>
        </p>
      </div>
    </div>
    <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <a href="https://bochkovyi.github.io/projects/currency-app/" target="blank" rel="noopener">Buy and sell Bitcoins with Angular</a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <a href="https://bochkovyi.github.io/projects/partywise/" target="blank" rel="noopener">Vote with Angular</a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <a href="https://bochkovyi.github.io/projects/orchid/" target="blank" rel="noopener">Orchid Camp at Kinburn Spit</a>
        </li>
    </ul>
  </React.Fragment>
)

export default List;