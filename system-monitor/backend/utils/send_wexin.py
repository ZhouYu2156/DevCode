# -*- encoding: utf-8 -*-
# @Time: 2024/4/11 10:57
# @Author: 周玉
# -*- encoding: utf-8 -*-
# @Time: 2024/3/28 10:11
# @Author: 周玉
import json
import time
import requests
from load_ini_parser import load_config


def read_config(file):
    """
    获取appID、appsecret链接，需要登录：https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo
    :param file:
    :return:
    """
    return file


def get_token(conf):
    """
    如果没有获取到token信息，刷新secretapp那个页面，重新获取秘钥，秘钥可能一段时间会过期，所以需要重新获取
    :param conf:
    :return:
    """
    # headers = {"User-Agent": configuration['wechat']["User-Agent"]}
    url = f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="
    url += f"{conf['appID']}&secret={conf['appsecret']}"
    response = requests.get(url)
    token = response.json()
    return token


def get_localtime():
    """
    返回本地时间
    :return:
    """
    return time.strftime('%Y年%m月%d日 %H:%M:%S', time.localtime())


def send_msg(token, user, conf, msg: str):
    """
    功能： 发送消息
    :param  token, user, conf, msg
    :return:
    """
    url = f"https://api.weixin.qq.com/cgi-bin/message/template/send?access_token={token['access_token']}"
    data = {
        "touser": user,
        "template_id": conf['templateID'],
        "url": "https://github.com/zhouyu2156/",
        "topcolor": "#FF0000",
        "data": {
            'error': {
                'value': msg,
                'color': '#173177'
            },
            'time': {
                'value': get_localtime(),
                'color': '#FF0000'
            }
        }
    }
    response = requests.post(url, data=json.dumps(data))
    return response.json()


# 读取配置文件
# config = read_config('./keys/private_key.json')
config_ini = load_config()
config = config_ini['wechat']
# 发送消息-结果反馈
# feedback = send_msg(get_token(config), config, '系统出错辣~~~')
# errorcode: 0 表示成功发送了，手机上可以查看测试公众号发来的消息
# print(feedback)
token_ = get_token(config)
print(token_)
user_all = config['touser'].split(' ')


def multiple_send(msg="'传入告警信息'"):
    result = map(lambda user: send_msg(token_, user, config, msg), user_all)
    print(list(result))


if __name__ == '__main__':
    multiple_send()
