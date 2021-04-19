#必须要的默认定时任务请勿删除
52 */1 * * * sh /scripts/docker/default_task.sh >> /scripts/logs/default_task.log 2>&1
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

#
#秒   是   0-59    , - * /
#分   是   0-59    , - * /
#时   是   0-23    , - * /
#日   是   1-31    , - * ? / L W C
#月   是   1-12 或 JAN-DEC  , - * /
#周   是   1-7 或 SUN-SAT   , - * ? / L C #
#年   否   空 或 1970-2099   , - * /

## app

## 芝麻视频
0 * * * * node /scripts/Task/zhima.js >> /scripts/logs/zhima.log 2>&1

## 快手视频
1/20 10-23/3 * * * node /scripts/Task/kuaishou.js >> /scripts/logs/kuaishou.log 2>&1

## 步步宝(貌似已不能提现)
0,30 0-23 * * * node /scripts/Task/bububao.js >> /scripts/logs/bububao.log 2>&1

## 汽车之家(只能签到了)
*/10 5-23 * * * node /scripts/Task/qczjspeed.js >> /scripts/logs/qczjspeed.log 2>&1

## 笑谱(视频ck 15 天过期)
*/20 8-23 * * * node /scripts/Task/iboxpay.js >> /scripts/logs/iboxpay.log 2>&1


## 中青签到&转盘宝箱
*/10 5-23 * * * node /scripts/Task/youth.js >> /scripts/logs/youth.log 2>&1

## 中青自动阅读
10 */2 * * * node /scripts/Task/youth_Read.js >> /scripts/logs/youth_Read.log 2>&1

## 中青浏览赚
20 5 10 * * * node /scripts/Task/youth_gain.js >> /scripts/logs/youth_gain.log 2>&1


## 吾爱破解
0 9,18 * * * node /scripts/52pojie.js >> /scripts/Task/logs/52pojie.log 2>&1