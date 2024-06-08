import React from "react";
export default class Search extends React.Component {
  constructor() {
    super();
    // 初始化输入框的值
    this.state = {
      iptVal: "",
    };
  }
  search = (e) => {
    this.setState({
      iptVal: e.target.value,
    });
    // 如果是回车事件   =>  进行百度搜索
    if (e.keyCode === 13) {
      window.open(
        // 打开新窗口用百度的搜索引擎进行检索信息给用户
        `https://www.baidu.com/s?ie=UTF-8&wd=${this.state.iptVal}`,
        "_blank"
      );
      // 帮用户把输入框清空
      this.setState({
        iptVal: "",
      });
    }
  };
  // 搜索按钮点击的处理程序
  submit = () => {
    window.open(
      // 打开新窗口用百度的搜索引擎进行检索信息给用户
      `https://www.baidu.com/s?ie=UTF-8&wd=${this.state.iptVal}`,
      "_blank"
    );
    this.setState({
      iptVal: "",
    });
  };
  render() {
    return (
      <div className="row align-items-center mt-5 gy-2">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
          <div className="row align-self-center m-0 p-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="请输入关键字搜索"
                aria-label="请输入关键字搜索"
                aria-describedby="button-addon2"
                id="ipt_search"
                autoComplete="off"
                value={this.state.iptVal}
                onChange={this.search}
                onKeyDown={this.search}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="ipt_btn"
                onClick={this.submit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                &nbsp;搜索
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
