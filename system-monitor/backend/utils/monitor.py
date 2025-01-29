# -*- encoding: utf-8 -*-
# @Time: 2024/4/11 10:48
# @Author: 周玉

import psutil as ps





if __name__ == '__main__':
    # 获取CPU的核数
    print(ps.cpu_count())
    cpu_percent = ps.cpu_percent(interval=0.5)
    print("cpu核数: ", ps.cpu_count(), "CPU使用率：", cpu_percent, "%")




