#必须要的默认定时任务请勿删除
52 */1 * * * sh /scripts/docker/default_task.sh >> /scripts/logs/default_task.log 2>&1
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

## app

## 跃动族
## 0,30 0-23 * * * node /scripts/yuedongzu.js >> /scripts/logs/yuedongzu.log 2>&1
## 芝麻视频
0 * * * * node /scripts/zhima.js >> /scripts/logs/zhima.log 2>&1

## 快手视频
1/20 10-23/3 * * * node /scripts/kuaishou.js >> /scripts/logs/kuaishou.log 2>&1

## 电视家
*/15 4,12,19,23 * * * node /scripts/dianshijia.js >> /scripts/logs/dianshijia.log 2>&1

## 中青签到&转盘宝箱
*/10 5-23 * * * node /scripts/youth.js >> /scripts/logs/youth.log 2>&1

## 中青自动阅读
10 */2 * * * node /scripts/youth_read.js >> /scripts/logs/youth_read.log 2>&1

## 中青浏览赚
20 5 22 * * * node /scripts/youth_gain.js >> /scripts/logs/youth_gain.log 2>&1

## 笑谱
## */20 8-23 * * * node /scripts/iboxpay.js >> /scripts/logs/iboxpay.log 2>&1

## 步步宝
0,30 0-23 * * * node /scripts/bububao.js >> /scripts/logs/bububao.log 2>&1

## 汽车之家
*/10 5-23 * * * node /scripts/qczjspeed.js >> /scripts/logs/qczjspeed.log 2>&1

## 吾爱破解
0 9,18 * * * node /scripts/52pojie.js >> /scripts/logs/52pojie.log 2>&1

#柠檬拆红包

0 0 * * *  node /scripts/jd_chb.js >> /scripts/logs/jd_chb.log 2>&1


## 柠檬大牌闪购红包雨
1 0 * * *  node /scripts/jd_dphby.js >> /scripts/logs/jd_dphby.log 2>&1

## 柠檬特物国创IP

1 0 * * *  node /scripts/jd_gcip.js >> /scripts/logs/jd_gcip.log 2>&1

## 惊喜工厂抢茅台 自己设置时间
1 0 * * * node /scripts/jd_jxgc.js >> /scripts/logs/jd_jxgc.log 2>&1

## 柠檬是兄弟就砍我

0 0 * * *  node /scripts/jd_kanjia.js >> /scripts/logs/jd_kanjia.log 2>&1

# 柠檬是兄弟就砍我2
0 5 * * *  node /scripts/jd_kanjia2.js >> /scripts/logs/jd_kanjia2.log 2>&1

## 柠檬东东泡泡大战

1 0 * * *  node /scripts/jd_ppdz.js >> /scripts/logs/jd_ppdz.log 2>&1

## 柠檬618惊奇探秘夜
0 0 * * *  node /scripts/jd_qqtmy.js >> /scripts/logs/jd_qqtmy.log 2>&1

## 柠檬华为荣耀618
1 0 * * * node /scripts/jd_cctx.js >> /scripts/logs/jd_cctx.log 2>&1

## 柠檬省钱大赢家
0,2 0 * * * node /scripts/jd_sq.js >> /scripts/logs/jd_sq.log 2>&1

## 柠檬省钱大赢家
0,2 0 * * * node /scripts/jd_sqdyj.js >> /scripts/logs/jd_sqdyj.log 2>&1

## 柠檬推一推
0 0 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1

## 柠檬我是大老板农场
5 6-18/6 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1

## 柠檬品新潮牌联欢
1 0 * * * node /scripts/jd_xcpp.js >> /scripts/logs/jd_xcpp.log 2>&1

## 柠檬618限时盲盒
0 0 * * * node /scripts/jd_xsmh.js >> /scripts/logs/jd_xsmh.log 2>&1

## 柠檬邀请有礼
0 0 * * * node /scripts/jd_yqyl.js >> /scripts/logs/jd_yqyl.log 2>&1

## 柠檬赚金币
0 5 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1

