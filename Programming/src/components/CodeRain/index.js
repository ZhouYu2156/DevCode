import React from "react";
import CodeRain from "./code";

// 创建Canvas绘制网页背景图组件
export default class CodeRainCanvas extends React.Component {
  componentDidMount() {
    CodeRain(document.getElementById("cxt"));
    let timer = null;
    window.onresize = function () {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(function () {
        // 一秒钟后清除画布 获取最新的屏幕宽高  进行重绘 => 同样采用节流方法 => 不要频繁刷新网页
        let canvas = document.getElementById("cxt");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        // 进行重绘
        return CodeRain(document.getElementById("cxt"));
      }, 1000);
    };
  }
  render() {
    return <canvas id="cxt"></canvas>;
  }
}
