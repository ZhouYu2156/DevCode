import json
import time
import psutil as ps
from flask import Flask
from colorama import Fore
from flask_cors import CORS
# from speedtest import Speedtest


# speed_test = Speedtest(source_address='https://www.baidu.com/')


def get_network_speed():
    """测试时间较长"""
    download_speed = speed_test.download() / (0b01 << 23)
    # print(f"你的下载速度是{download_speed}")
    upload_speed = speed_test.upload() / (0b01 << 23)
    # print(f"你的上传速度是{upload_speed}")
    return round(download_speed, 2), round(upload_speed, 2)


def get_net_io():
    """计算单位时间内的网速"""
    net_io = ps.net_io_counters()
    download_speed_old, upload_speed_old = net_io.bytes_recv, net_io.bytes_sent
    while True:
        time.sleep(1)
        net_io = ps.net_io_counters()
        download_speed_new, upload_speed_new = net_io.bytes_recv, net_io.bytes_sent
        download_speed = download_speed_new - download_speed_old
        upload_speed = upload_speed_new - upload_speed_old
        return round(download_speed / (0b01 << 20), 2), round(upload_speed / (0b01 << 20), 2)


def get_disk_speed(disk_name='PhysicalDrive0', interval=1.0):  # 指定磁盘名称和采样间隔（秒）
    old_disk_stats = ps.disk_io_counters(perdisk=True)[disk_name]

    time.sleep(interval)  # 等待指定的时间间隔

    new_disk_stats = ps.disk_io_counters(perdisk=True)[disk_name]

    # 计算读写速度（字节/秒）
    read_speed = (new_disk_stats.read_bytes - old_disk_stats.read_bytes) / interval
    write_speed = (new_disk_stats.write_bytes - old_disk_stats.write_bytes) / interval

    return read_speed, write_speed


app = Flask(__name__)
CORS(app)

"""
一、需求分析：
    1、我们需要监控的系统对象，比如CPU、内存、网络...
    2、对于这些不同的系统对象，我们需要获取它的哪些信息
    3、这里使用web开发方式模拟windows操作系统的资源管理器界面，实现本机上的一个系统监控工具

二、技术方案：
    1、通过python中方便获取CPU、内存信息的库，如psutil这个工具包，来获取CPU、内存的相关信息
    2、通过flask这个精悍简小的web框架，将数据展示到网页上，实现数据的可视化

三、具体实现步骤：
    1、通过日志配置文件向日志文件追加CPU、内存的相关信息
    2、通过Flask这个web框架和echarts可视化工具，将数据展示到网页上，实现数据的可视化
    3、js设置定时器，每隔1秒向后端请求数据，实现动态渲染
"""


@app.route('/')
def home():
    return '<h1>Hello World!</h1>'


@app.route('/cpu/', methods=['GET'])
def cpu_information():
    """CPU使用情况"""
    state = ps.cpu_percent(interval=1)
    # parcel = {'usage': round(sum(state) / 6, 2)}
    parcel = {'usage': round(state, 2)}
    print(Fore.GREEN + '------------------CPU利用率: ' + str(state) + '------------------')
    return json.dumps(parcel)


@app.route('/disk/', methods=['GET'])
def disk_information():
    """磁盘使用情况"""
    disks = []
    c_disk = ps.disk_usage('C:')
    d_disk = ps.disk_usage('D:')
    e_disk = ps.disk_usage('E:')
    f_disk = ps.disk_usage('F:')
    # 获取磁盘使用率，返回给前端进行图标渲染
    for disk in [c_disk, d_disk, e_disk, f_disk]:
        total = round(disk.total / (0b01 << 30), 2)  # 磁盘总量
        used = round(disk.used / (0b01 << 30))  # 磁盘已使用
        free = round(disk.free / (0b01 << 30))  # 磁盘剩余
        percent = round(disk.percent)  # 磁盘使用率
        item = {'total': total, 'used': used, 'free': free, 'percent': percent}
        disks.append(item)
        print(Fore.CYAN + '------------------磁盘使用情况: ' + str(disk) + '------------------')
    return json.dumps(disks)


@app.route('/battery/')
def get_battery_information():
    """电池使用情况"""
    battery = ps.sensors_battery()
    volume = battery.percent
    status = battery.power_plugged
    return json.dumps({'volume': volume, 'status': status})


@app.route('/memory/', methods=['GET'])
def get_memory_information():
    """内存使用情况"""
    memory = ps.virtual_memory()
    return json.dumps({'percent': round(memory.percent, 0)})


@app.route('/diskio/', methods=['GET'])
def get_disk_io():
    r, w = get_disk_speed()
    read_speed, write_speed = round(r / (0b01 << 20), 2), round(w / (0b01 << 20), 2)
    print(Fore.MAGENTA + f'磁盘读速度: {read_speed:.2f}MBps, 磁盘写速度: {write_speed:.2f}MBps')
    return json.dumps({
        'read_speed': read_speed,
        'write_speed': write_speed
    })


@app.route('/network/', methods=['GET'])
def get_network_information():
    download_speed, upload_speed = get_net_io()
    print(Fore.MAGENTA + f'下载速度: {download_speed:.2f}MBps, 上传速度: {upload_speed:.2f}MBps')
    return json.dumps({
        'download_speed': download_speed,
        'upload_speed': upload_speed
    })


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
