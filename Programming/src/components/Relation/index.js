import React from "react";
import sponsorCode from "../../assets/sponsor.jpg";
import WeChatCode from "../../assets/WeChat.jpg";
import QQCode from "../../assets/QQ.jpg";
import Qualifications from "../../assets/qualifications.pdf";

export default class Relation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sponsorCode:
      //   "https://www.zhouyu2156.cn/Programming/static/media/sponsor.be6c28cf3157d5a54e8f.jpg",
      // WeChatCode:
      //   "https://www.zhouyu2156.cn/Programming/static/media/WeChat.332005ae81f63b426d8d.jpg",
      // QQCode:
      //   "https://www.zhouyu2156.cn/Programming/static/media/QQ.2f8c64aaca1ffb72b4d5.jpg",
      like: false,
      wechat: false,
      qq: false,
      github: "https://github.com/ZhouYu2156",
      gitee: "https://gitee.com/zhouyu2156",
      envelope: "QQ邮箱: 1043744584@qq.com",
      chat: "微信号: LiXiaoYao2156",
      img: null,
    };
  }
  modStatus = (e, classify) => {
    e.preventDefault();
    this.setState((state, props) => {
      return { [classify]: !state[classify] };
    });
  };
  weChatCode = (event, classify, codeImg) => {
    // 阻止a标签的默认跳转行为
    event.preventDefault();
    // 设置状态并进行数据通信
    this.setState(
      (state, props) => {
        return {
          // 用户是否点击
          [classify]: !state[classify],
          // 设置该二维码为状态
          img: codeImg,
        };
      },
      () => {
        this.props.switchSponsor(this.state.wechat, this.state.img);
      }
    );
  };
  render() {
    const {
      like,
      wechat,
      github,
      gitee,
      envelope,
      chat,
      qq,
      // sponsorCode,
      // WeChatCode,
      // QQCode,
    } = this.state;
    console.log(this.state);
    return (
      <div id="rel" className="d-flex justify-content-end align-items-center">
        {/* gihub */}
        <div>
          <a href={github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
        {/* gitee */}
        <div>
          <a href={gitee}>
            <svg
              t="1654269849355"
              className="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1740"
              width="16"
              height="16"
            >
              <path
                d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z"
                fill="currentColor"
                p-id="1741"
              ></path>
            </svg>
          </a>
        </div>
        {/* QQ联系 */}
        <div>
          {qq ? (
            <a
              href={envelope}
              onClick={(e) => {
                this.modStatus(e, "qq");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={qq ? "red" : "currentColor"}
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          ) : (
            <a
              href={envelope}
              onClick={(e) => {
                this.weChatCode(e, "qq", QQCode);
              }}
              data-bs-toggle="modal"
              data-bs-target="#relations"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={qq ? "red" : "currentColor"}
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          )}
        </div>
        {/* 微信联系 */}
        <div>
          {wechat ? (
            <a
              href={chat}
              onClick={(e) => {
                this.modStatus(e, "wechat");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={wechat ? "red" : "currentColor"}
                className="bi bi-chat-dots-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
          ) : (
            <a
              href={chat}
              onClick={(e) => {
                this.weChatCode(e, "wechat", WeChatCode);
              }}
              data-bs-toggle="modal"
              data-bs-target="#relations"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={wechat ? "red" : "currentColor"}
                className="bi bi-chat-dots-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </a>
          )}
        </div>
        {/* 赞助 */}
        <div>
          {like ? (
            <a
              href={"javascript(void);"}
              onClick={(e) => {
                this.modStatus(e, "like");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={like ? "red" : "currentColor"}
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </a>
          ) : (
            <a
              href={"javascript(void);"}
              onClick={(e) => {
                this.weChatCode(e, "like", sponsorCode);
              }}
              data-bs-toggle="modal"
              data-bs-target="#relations"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={like ? "red" : "currentColor"}
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  }
}
