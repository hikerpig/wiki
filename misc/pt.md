PT 备忘
===

## transmisison

```bash
# 进入 container， 执行 shell
docker exec -it $transmission_container "/bin/bash"
```

```bash
# docker transmission 镜像中
/usr/bin/transmisison-create -p  -o "/watch/somefile.torrent" -t $tracker /download/complete/directory 
```

## calibre-web

