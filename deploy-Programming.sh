#!/bin/bash

# 需要自己执行打包，并且修改掉 index.html 文件中的绝对路径
# 注意其他开发项目中不能存在 .git 文件

set -x

export DEV=git@gitee.com:zhouyu2156/DevCode.git
export PRO=git@gitee.com:zhouyu2156/Programming.git

# 提交开发代码
git add .
git commit -m "auto commit Programming DevCode."
git push -f ${DEV} master

# 提交打包代码
cd ./Programming/Programming
git init
git add .
git commit -m "auto commit Programming Production Project."
# git push -u $PRO master     # 第一次提交代码到仓库
git push -f ${PRO} master