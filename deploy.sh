#!/bin/bash

# 应用名称
APP_NAME="next-app"

echo "开始部署 $APP_NAME..."

# 检查并停止已存在的服务
if pm2 list | grep -q "$APP_NAME"; then
    echo "发现已存在的服务，正在停止..."
    pm2 delete $APP_NAME
fi

# 使用 PM2 启动服务
echo "启动服务..."
pm2 start ecosystem.config.js --env production

# 保存 PM2 进程列表
pm2 save

echo "部署完成！服务已在端口 $PORT 启动"
