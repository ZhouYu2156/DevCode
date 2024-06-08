# -*- encoding: utf-8 -*-
# @Time: 2024/3/28 11:20
# @Author: 周玉
import base64
import re
# SMTP服务类
import smtplib
# 构建邮件头
from email.header import Header
# 构建邮件纯文本内容
from email.mime.text import MIMEText
# 构建邮件图片内容
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication


# 构建邮箱类
class Email:
    """
    @reference: https://blog.csdn.net/MAKABAKA__ZJC/article/details/128830276
    @login website: https://mail.qq.com/
    """

    def __init__(self, sender, authorization_code, sender_name='运维管理员'):
        # 第三方SMTP服务
        self.host = 'smtp.qq.com'  # 邮箱服务器, QQ邮箱服务器: smtp.qq.com
        self.port = 465  # 服务器端口号
        self.sender = sender  # 发送方邮箱
        self.sender_name = sender_name  # 发信人姓名
        self.password = authorization_code  # QQ邮箱授权码
        self.msg: MIMEText | None = None
        self.multipart: MIMEMultipart | None = None
        self.stp = smtplib.SMTP_SSL(self.host, 465)  # 建立smtp连接，qq邮箱必须用ssl连接，因此连接465端口

    def send_mail(self, receiver):
        try:
            self.stp.connect(self.host, self.port)
            self.stp.login(self.sender, self.password)
            self.stp.sendmail(self.sender, receiver, self.msg.as_string())  # 发送邮件
            print('邮件发送成功！！')
        except smtplib.SMTPException as e:
            print(e.__traceback__.tb_lineno, e)
            print('邮件发送失败！！')
        finally:
            self.stp.quit()

    def create_msg(self, subject, content=None, filepath=None, filename=None):
        # MIMEText('内容', '文本格式', '编码')
        self.msg = Email.create_content(content, filepath, filename)
        # 发送者邮箱
        self.msg['From'] = Header(
            f'=?utf-8?B?{base64.b64encode(self.sender_name.encode()).decode()}=?= <{self.sender}>')
        # self.msg['To'] = ';'.join(self.receivers)  # 邮件接收者姓名
        self.msg['To'] = self.receiver
        self.msg['Subject'] = Header(subject, 'utf-8')  # 邮件主题

    def create_multipart(self):
        self.multipart = MIMEMultipart()

    def add_content(self, content):
        self.multipart.attach(content)

    @staticmethod
    def create_content(content=None, filepath=None, refilename=None):
        if filepath:
            try:
                with open(filepath, 'rb') as fp:
                    data = fp.read()
                    if re.match(r'.*\.(jpg|jpeg|png|JPG|JPEG|PNG)$', filepath):
                        image = MIMEImage(data, filepath.split('.')[-1])
                        image.add_header('Content-Disposition', 'attachment', filename=refilename)
                        return image
                    elif re.match(r'.*\.(pdf|PDF)$', filepath):
                        pdf = MIMEApplication(data)
                        pdf.add_header('Content-Disposition', 'attachment', filename=refilename)
                        return pdf
                    elif re.match(r'.*\.(zip|rar|gz|iso|7z)$', filepath):
                        archive = MIMEApplication(data)
                        archive.add_header('Content-Disposition', 'attachment', filename=refilename)
                        return archive
            except FileNotFoundError as e:
                print("文件不存在!", e)
        else:
            txt = MIMEText(content, 'plain', 'utf-8')
            return txt
