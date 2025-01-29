# -*- encoding: utf-8 -*-
# @Time: 2024/4/11 10:37
# @Author: 周玉

default_path = '../config/config.ini'


def load_config(config_path=default_path):
    import configparser as parser
    """
    读取配置文件
    :param config_path:
    :return:
    """
    config = parser.ConfigParser()
    config.read(config_path, encoding='utf-8')
    return config


def save_config(config, config_path=default_path):
    """
    保存配置文件
    :param config:
    :param config_path:
    :return:
    """
    with open(config_path, 'w', encoding='utf-8') as fp:
        config.write(fp)


if __name__ == '__main__':
    # 以下是本文件的测试代码
    conf = load_config()
    print(conf['wechat']['appid'])