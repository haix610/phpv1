FROM redis:7.2.4

RUN cp "/usr/share/zoneinfo/Asia/Shanghai" /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

RUN mkdir -p /usr/local/etc/redis
COPY ./extend/libredis_cell_v0.3.1.so /usr/local/etc/redis/libredis_cell.so


# CMD [ "redis-server" ]
