import logging


# 记录器：应用程序代码直接使用的接口
# 处理器：将日志发送到不同的目的地
# 过滤器：粒度控制，决定输出哪些日志
# 格式化器：输出日志的格式

def my_logger(path: str):
    # 1、获取日志记录器   记录器名称
    logger = logging.getLogger(__name__)
    logger.setLevel(logging.DEBUG)

    # 2、终端处理器
    sh = logging.StreamHandler()
    # 设置处理器的日志级别： DEBUG<INFO<WARNING<ERROR<CRITICAL
    # 大于等于该级别才会输出
    sh.setLevel(logging.DEBUG)
    # 格式化器 p85
    formatter = logging.Formatter("%(asctime)s [%(levelname)s] %(pathname)s:%(lineno)d %(message)s")
    sh.setFormatter(formatter)

    # 3、文件处理器
    # path = 'E:/DeskTop/专升本二期/郭洋/Python自动化运维/api.log.bak'
    fh = logging.FileHandler(filename=path, mode='a', encoding='utf-8')
    fh.setLevel(logging.INFO)
    fh.setFormatter(formatter)


    # 4、处理器添加到记录器
    logger.addHandler(sh)
    logger.addHandler(fh)
    return logger



if __name__ == '__main__':
    # 已经初始化好的记录器
    logger = my_logger('test01.log')
    logger.debug("测试调试信息输出")
    logger.info("测试info信息输出")
    logger.warning("测试warning信息输出")
    logger.error("测试error信息输出")
    logger.critical("测试critical信息输出")