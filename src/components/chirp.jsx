import React from 'react';
// import NewChirp from './NewChirp';
import './style.css';

// let Timeline = (props) => {
//     return props.chirps.map((chirp, id) => <NewChirp chirp={chirp} id={id} />);
//   };
// export default Timeline;


export default class Chirp extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (

            <div key={this.props.key} className="card">
                <div className="card-body">
                    <span className="badge badge-warning">{this.props.chirpUser}</span>
                    <p className="card-text">
                        <span className="badge badge-info">{this.props.chirpPost}</span>
                    </p>

                </div>
            </div>
        )
    }
}