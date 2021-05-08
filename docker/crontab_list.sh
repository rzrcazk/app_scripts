#必须要的默认定时任务请勿删除
52 */1 * * * sh /scripts/docker/default_task.sh >> /scripts/logs/default_task.log 2>&1
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

## app

## 跃动族
# 0,30 0-23 * * * node /scripts/yuedongzu.js >> /scripts/logs/yuedongzu.log 2>&1
## 芝麻视频
0 * * * * node /scripts/zhima.js >> /scripts/logs/zhima.log 2>&1

## 快手视频
1/20 10-23/3 * * * node /scripts/kuaishou.js >> /scripts/logs/kuaishou.log 2>&1

## 电视家
*/15 4,12,19,23 * * * node /scripts/dianshijia.js >> /scripts/logs/dianshijia.log 2>&1

## 中青签到&转盘宝箱
#*/10 5-23 * * * node /scripts/youth.js >> /scripts/logs/youth.log 2>&1

## 中青自动阅读
#10 */2 * * * node /scripts/youth_read.js >> /scripts/logs/youth_read.log 2>&1

## 中青浏览赚
#20 5 10 * * * node /scripts/youth_gain.js >> /scripts/logs/youth_gain.log 2>&1

## 笑谱
#*/20 8-23 * * * node /scripts/iboxpay.js >> /scripts/logs/iboxpay.log 2>&1

## 步步宝
0,30 0-23 * * * node /scripts/bububao.js >> /scripts/logs/bububao.log 2>&1

## 汽车之家
*/10 5-23 * * * node /scripts/qczjspeed.js >> /scripts/logs/qczjspeed.log 2>&1

## 吾爱破解
0 9,18 * * * node /scripts/52pojie.js >> /scripts/logs/52pojie.log 2>&1