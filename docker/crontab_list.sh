#必须要的默认定时任务请勿删除
52 */1 * * * sh /scripts/docker/default_task.sh >> /scripts/logs/default_task.log 2>&1
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

# 签到

## 快手签到
## https://github.com/Sunert/Scripts
1/20 10-23/3 * * * node /scripts/kuaishou.js >> /scripts/logs/kuaishou.log 2>&1