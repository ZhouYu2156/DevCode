import React from "react";

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classify: false,
    };
  }
  render() {
    return (
      <div className="modal fade" tabIndex="-1" id="relations">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 style={{ userSelect: "none", textAlign: "center" }}>
                感谢 - 光临
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src={this.props.imgData}
                alt=""
                style={{ width: "15rem", height: "15rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
