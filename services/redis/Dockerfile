# FROM redis:7.2.4
FROM redis:7.2.4-alpine

# RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
#   && apk --no-cache add tzdata libgcc openssl gcc libc6-compat\
#     && cp "/usr/share/zoneinfo/Asia/Shanghai" /etc/localtime \
#     && echo "Asia/Shanghai" > /etc/timezone

# # 设置阿里云的APT源
# RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list.d/debian.sources
# # # 添加阿里云GPG密钥
# RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 40976EAF437D05B5 && \
#     apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3B4FE6ACC0B21F32
# RUN apt-get update
 
# RUN set -ex \
#     && apt-get install -y wget

    # && mkdir /usr/local/etc/redis \
    # # && wget https://github.com/brandur/redis-cell/releases/download/v0.3.1/redis-cell-v0.3.1-x86_64-unknown-linux-gnu.tar.gz \
    # && wget https://static.ixuenong.com/pxn/other/static/act/redis-cell-v0.3.1-x86_64-unknown-linux-gnu.tar.gz \
    # && tar xvzf redis-cell-v0.3.1-x86_64-unknown-linux-gnu.tar.gz \
    # && mv libredis_cell.so /usr/local/etc/redis/libredis_cell.so \
    # && rm redis-cell-v0.3.1-x86_64-unknown-linux-gnu.tar.gz


# COPY ./extend/libredis_cell_v0.3.1.so /etc/libredis_cell.so
# CMD [ "redis-server", "--loadmodule /etc/libredis_cell.so" ]