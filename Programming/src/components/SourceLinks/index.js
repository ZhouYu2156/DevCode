import React from "react";
export default class SourceLinks extends React.Component {
  renderAll() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* 指示器小圆点 */}
        <div className="carousel-indicators">
          {this.props.links.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={"Slide " + (index + 1)}
              ></button>
            );
          })}
        </div>
        {/* 轮播页面  */}
        <div className="carousel-inner">
          {/* 循环遍历每一项 */}
          {this.props.links.map((item, index) => {
            return (
              <div
                className={
                  "carousel-item h-100" + (index === 0 ? " active" : "")
                }
                key={index}
              >
                <div className="row justify-content-center mt-5">
                  {item.map((inItem, inIndex) => {
                    return (
                      <div className="col-3 mt-5" key={inIndex}>
                        <a
                          href={inItem.itemUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="rounded mx-auto d-block"
                            src={inItem.itemImg}
                            alt={inItem.itemName}
                          />
                          <span className="d-block text-center mt-2">
                            {inItem.itemName}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev justify-content-start"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">上一页</span>
        </button>
        <button
          className="carousel-control-next justify-content-end"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">下一页</span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="row align-items-center mt-5">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
          {this.renderAll()}
        </div>
      </div>
    );
  }
}
