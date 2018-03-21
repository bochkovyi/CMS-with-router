import React from 'react'

const types = [
  "active", "row", "primary", 
  "secondary", "success", "danger", "warning", 
  "info", "light", "dark"
];

const Table = () => (
  <React.Fragment>
    <div className="card text-white bg-info mb-3">
      <div className="card-header">Hello there!</div>
      <div className="card-body">
        <h4 className="card-title">Do you want to see a really awesome table?</h4>
        <p className="card-text">This table may seem good enough. But that's only a #dummyTable!
          Find your real one at the bottom of my site.
          <br/><br/><a className="btn btn-primary" href="https://bochkovyi.github.io/projects/live-stream/" target="blank" rel="noopener">Go there!</a>
        </p>
      </div>
    </div>
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
      </tr>
    </thead>
    <tbody>
      {types.map(item => {
        const className = `table-${item}`;
        const title = item.charAt(0).toUpperCase() + item.slice(1);

        return (
          <tr key={item} className={className}>
            <th scope="row">{title}</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        );
      })}
    </tbody>
    </table>
  </React.Fragment>
)

export default Table;
