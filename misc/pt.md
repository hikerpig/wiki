PT 备忘
===

使用 [[docker]] 部署一些服务

## transmisison

[威联通在Container Station中安装Transmission，超级简单 - 什么值得买](https://post.smzdm.com/p/a83dqnpq/)

[使用Docker安装Transmission | 生命不息 折腾不止](http://blog.sysu.tech/Docker/%E4%BD%BF%E7%94%A8Docker%E5%AE%89%E8%A3%85Transmission/)

```shell
docker create \
  --name=transmission \
  -e PUID=0 \
  -e PGID=0 \
  --net=host \
  -v /share/nas/tr:/config \
  -v /share/Public/torrents:/watch \
  -v /share/Download:/downloads \
  --restart unless-stopped \
  linuxserver/transmission:latest
```

### 发布种子

```bash
# 进入 container， 执行 shell
docker exec -it $transmission_container "/bin/bash"
```

```bash
# docker transmission 镜像中
/usr/bin/transmission-create -p  -o "/watch/somefile.torrent" -t $tracker /downloads	/complete/directory 
```

带有 `-p` 的是 private torrent

### 小 tip

- [transmission命令行工具集中文使用说明 - 杂食菜熊的Blog](http://xdsnet.github.io/index.html?name=%E6%9D%82%E8%B0%88:transmission%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7%E9%9B%86%E4%B8%AD%E6%96%87%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)

### 使用高级 web control 

 安装 web control [Linux Installation CN · ronggang/transmission-web-control Wiki](https://github.com/ronggang/transmission-web-control/wiki/Linux-Installation-CN)
 
### tracker
- [BT Tracker 服务器地址大全与常用 BT 软件下载地址 Tracker List - DNS.iCoA.CN](https://dns.icoa.cn/tracker/)
- [trackerslist best](https://trackerslist.com/best.txt)

精选:

```
http://1337.abcvg.info:80/announce
http://bt.3kb.xyz:80/announce
http://bt.okmp3.ru:2710/announce
http://ns3107607.ip-54-36-126.eu:6969/announce
http://opentracker.xyz:80/announce
http://rt.tace.ru:80/announce
http://share.camoe.cn:8080/announce
http://t.nyaatracker.com:80/announce
http://torrent.nwps.ws:80/announce
http://torrentsmd.com:8080/announce
http://tr.cili001.com:8070/announce
http://tracker.anirena.com:80/announce
http://tracker.anirena.com:80/b16a15d9a238d1f59178d3614b857290/announce
http://tracker.bt4g.com:2095/announce
http://tracker.files.fm:6969/announce
http://tracker.gbitt.info:80/announce
http://tracker.noobsubs.net:80/announce
http://tracker.trackerfix.com:80/announce
http://tracker1.itzmx.com:8080/announce
http://tracker2.itzmx.com:6961/announce
http://tracker3.itzmx.com:6961/announce
http://trk.publictracker.xyz:6969/announce
http://vps02.net.orel.ru:80/announce
http://www.all4nothin.net:80/announce.php
https://1337.abcvg.info:443/announce
https://bt.nfshost.com:443/announce
https://tr.ready4.icu:443/announce
https://tr.steins-gate.moe:2096/announce
https://tracker.coalition.space:443/announce
https://tracker.gbitt.info:443/announce
https://tracker.hama3.net:443/announce
https://tracker.imgoingto.icu:443/announce
https://tracker.lilithraws.cf:443/announce
https://tracker.nanoha.org:443/announce
```

## calibre-web

[centos+docker的Calibre-web 个人图书库搭建_马立杰的博客-CSDN博客](https://blog.csdn.net/i12344/article/details/103638868)

```bash
docker run --name=calibre \
  -e PUID=1000 \
  -e PGID=1000 \
  -v /share/nas/calibre:/books \
  -v /share/nas/calibre-db:/config \
  --restart unless-stopped \
  -p 8083:8083 \
  linuxserver/calibre-web
```

[QLOCKER - FULL GUIDE how to get your Data back, QNAP NAS Hack - Ransomware Help & Tech Support](https://www.bleepingcomputer.com/forums/t/749751/qlocker-full-guide-how-to-get-your-data-back-qnap-nas-hack/)