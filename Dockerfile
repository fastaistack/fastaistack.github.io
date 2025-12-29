FROM python:3.10-alpine

WORKDIR /app

# 配置 pip 使用国内镜像源
RUN pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/ && \
    pip config set install.trusted-host mirrors.aliyun.com

# 复制依赖文件并安装
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制所有网站文件
COPY server.py .
COPY Open.html .
COPY index.html .
COPY css/ ./css/
COPY js/ ./js/
COPY images/ ./images/
COPY *.html ./

# 暴露端口
EXPOSE 8080

# 启动命令
CMD ["python", "server.py"]

