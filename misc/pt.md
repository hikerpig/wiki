PT 备忘
===

使用 [[docker]] 部署一些服务

## transmisison

### 发布种子

```bash
# 进入 container， 执行 shell
docker exec -it $transmission_container "/bin/bash"
```

```bash
# docker transmission 镜像中
/usr/bin/transmisison-create -p  -o "/watch/somefile.torrent" -t $tracker /download/complete/directory 
```

### 小 tip

- 安装 web control [Linux Installation CN · ronggang/transmission-web-control Wiki](https://github.com/ronggang/transmission-web-control/wiki/Linux-Installation-CN)

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


