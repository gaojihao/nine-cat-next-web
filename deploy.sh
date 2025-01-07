#!/bin/bash

# 应用名称
APP_NAME="next-app"
# 应用端口
PORT=3000

echo "开始部署 $APP_NAME..."

# 检查 PM2 是否安装
if ! command -v pm2 &> /dev/null; then
    echo "PM2 未安装，正在安装..."
    npm install -g pm2
fi

# 检查并停止已存在的服务
if pm2 list | grep -q "$APP_NAME"; then
    echo "发现已存在的服务，正在停止..."
    pm2 delete $APP_NAME
fi

# 安装依赖
echo "安装项目依赖..."
yarn install --production

# 构建项目
echo "构建项目..."
yarn build

# 使用 PM2 启动服务
echo "启动服务..."
pm2 start ecosystem.config.js --env production

# 保存 PM2 进程列表
pm2 save

echo "部署完成！服务已在端口 $PORT 启动"
