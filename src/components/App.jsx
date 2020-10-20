import React, { Component } from 'react';
import Chirp from './chirp';

export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      chirpsArr: [
        { User: "Josh", Post: "Wow, Will is really cool!" },
        { User: "Garrett", Post: "Yeah, Will is awesome!" },
        { User: "Jake", Post: "Man, that Will guy is the sick!" },
      ],
      chirp: {
        User: "",
        Post: "",
      }
    }
  };

  handleChange = async (e, key) => {
    let { value } = e.target;
    //console.log("DERP". value);
    let chirp = { ...this.state.chirp };
    chirp[key] = value;
    await this.setState({ chirp: chirp });
    // console.log("VERIFY", this.state.chirp);

  }

  formInputGroup = (key, value) => {
    return (
      <div className="form-group">
        <label className="labels">{key}</label>
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={(e) => this.handleChange(e, key)}
        />
      </div>
    )
  }
  formContent = () => {
    let {
      chirp, chirpsArr
    } = this.state;
    let { User, Post } = chirp;
    return (
      <div>
        <form>
          {this.formInputGroup("User", User)}
          {this.formInputGroup("Post", Post)}
          <button type="button" id="chirp-btn" className="btn btn-primary" onClick={this.handleSubmit}>Chirp!</button>
        </form>
      </div>
    );
  }
  handleSubmit = () => {
    let { chirp, chirpsArr } = this.state;
    if (chirp.User !== "" && chirp.Post !== "") {
      chirpsArr.push(chirp);
    // console.log("chirp", chirpsArr);
    this.setState({ chirpsArr: this.state.chirpsArr, chirp: { User: "", Post: "" } });
    } 
  }
  render() {
    return (
      <div className="timeline-container">
        <div className="form-container">
          {this.formContent()}
        </div>
        <div className="chirp-container">
          {this.state.chirpsArr.map(
            (chirp, idx) => {
              return <div key={idx} className="card">
                <div className="card-body">
                  <span className="badge badge-warning">{chirp.User}</span>
                  <p className="card-text">
                    <span className="badge badge-info">{chirp.Post}</span>
                  </p>
                </div>
              </div>
            }
          ).reverse()
          }
        </div>
      </div>
    )
  };
};


