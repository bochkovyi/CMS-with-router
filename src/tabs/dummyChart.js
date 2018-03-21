import React from 'react'

const types = [
    {
        key: 25,
        value: "success"
    },
    {
        key: 50,
        value: "info"
    },
    {
        key: 75,
        value: "warning"
    },
    {
        key: 100,
        value: "danger"
    }
];

const Chart = () => (
  <React.Fragment>
    <div className="card text-white bg-success mb-3">
      <div className="card-header">Hello there!</div>
      <div className="card-body">
        <h4 className="card-title">Do you want to see a really awesome chart?</h4>
        <p className="card-text">Well, here you can't find one here. Only progress bars this time! But you know what? Check out this React + Typescript Battleship!
          <br/><br/><a className="btn btn-primary" href="https://bochkovyi.github.io/projects/battleship/" target="blank" rel="noopener">Go there!</a>
        </p>
      </div>
    </div>

    <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1 id="progress">Progress</h1>
            </div>

            <div className="bs-component">
                {types.map(item => {
                    const styleObject = {
                        width: `${item.key}%`,
                        ariaValuenow: "10",
                        ariaValuemin: "0",
                        ariaValuemax: "100"
                    };
                    const className = `progress-bar bg-${item.value}`;
                    const className2 = `progress-bar progress-bar-striped bg-${item.value}`;
                    
                    return (
                    <div key={item.value} >
                        <div className="progress mb-1">
                            <div className={className} role="progressbar" style={styleObject}></div>
                        </div>

                        <div className="progress mb-1">
                            <div className={className2} role="progressbar" style={styleObject}></div>
                        </div>
                    </div>
                    );
                })}
            </div>
          </div>
        </div>
  </React.Fragment>
)

export default Chart;
