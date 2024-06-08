# OpenStack

## 配置网络
- 查看其他章节内容，不在赘述。略...

```bash
# 删除默认的网关
$ nmcli c delete ens33
# 一键配置网络，注意把IP改成自己的。桥接模式的话，IP对应window上的IP网关和网段；NAT模式的话，IP对应虚拟机上配置的网关和网段。
$ nmcli c add type ethernet con-name "ens33" ifname ens33 ipv4.addresses 10.0.0.2/24 gw4 10.0.0.254 ipv4.dns "window上的可用网络提供的DNS服务器IP，多个IP用空格分隔" ipv4.method manual autoconnect yes && nmcli c up ens33
# 配置好网络后，关闭默认的网络管理工具
$ systemctl stop NetworkManager
$ systemctl status NetworkManager
```



- 关闭安全策略

```bash
$ vim /etc/selinux/config
# SELINUX=disabled
$ setenforce 0
$ getenforce
# Permission
```

- 关闭防火墙

```bash
$ systemctl stop firewalld
$ systemctl disable firewalld
$ systemctl status firewalld
```



## 时钟同步

- 查看docker部分，不再赘述。略...



## 更换主机名

```bash
$ hostnamectl set-hostname openstack
$ echo "172.26.71.10  opstack  opstack.localdomain" >> /etc/hosts
```



## 设置centos锁屏时间

```bash
# 先查看是否安装 gsettings 命令
$ gsettings --version
# 没有安装的话，执行以下命令安装
$ yum install -y dconf-tools
# 安装完成后，你可以使用以下命令设置锁屏时间
$ gsettings set org.gnome.desktop.session idle-delay <seconds>
# 在上面的命令中，<seconds> 是你希望设置的锁屏时间，单位为秒。例如，如果你希望将锁屏时间设置为 300 秒（5 分钟），可以执行以下命令：
$ gsettings set org.gnome.desktop.session idle-delay 300
# 请注意，这个命令只会在使用 GNOME 桌面环境的情况下生效。如果你使用的是其他桌面环境，比如 KDE、XFCE 等，设置锁屏时间的方法可能会有所不同。
```



## 开始安装openstack

```bash
# 先更新
$ yum -y update
# 下载这个train软件
$ yum install -y centos-release-openstack-train
# 需要再次更新
$ yum -y update
# 下载openstack安装器
$ yum install -y openstack-packstack
# 运行安装器，所有组件安装在一个节点
$ packstack --allinone
# 安装完成后，可以查看版本
$ nova-manage --version
```









