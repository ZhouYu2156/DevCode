import React from "react";

export default class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  switchBtn = () => {
    this.setState(
      (state, props) => {
        return {
          flag: !state.flag,
        };
      },
      () => {
        // 在拿到最新改变的状态后 更新父组件的状态
        this.props.displayBg(this.state.flag);
      }
    );
  };
  render() {
    return (
      <div
        className="form-check form-switch text-light mt-5 gy-2 d-none d-md-block"
        style={{ position: "fixed", right: "3rem", top: "1.2rem" }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchBg"
          onChange={this.switchBtn}
        />
        <label className="form-check-label" htmlFor="switchBg">
          背景切换
        </label>
      </div>
    );
  }
}
