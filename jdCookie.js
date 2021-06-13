/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [

  'pt_key=AAJgsyQGADAEGuiGOLxXG8jSfVtVhT3cuuelaUvd21vvGdqvIxOX-TYAYAcKAj1fJNIBlr017bI;pt_pin=13317182430_p;',
'pt_key=AAJgs46EADBK0P8H2c8GSS4JgPEYHh0K4OsBww_oKwtsiEHAJJRGUu1f7kvud0BVBjccnrDRRuQ;pt_pin=wmlsgsb;',
'pt_key=AAJgvET8ADC1zWWaxe7m3TAFRkpbfHzUWGcN_KGwAXOTySwShM8bpPRsxZ1mpYv5U3qCvAELMPY;pt_pin=jd_bcpLnnctUqmJ;',
'pt_key=AAJgt8cIADAhh5vltdXB2Nd5QiYrcesOXZX5uYgKhi37DvJXGhuYGvB2BNQ5Sz-qf27wV1Dfc-g;pt_pin=jd_5d8be618f1e32;',
'pt_key=AAJgs44TADCg2QqBnLM0A_kHCiDNyVHguGJVaCkot6nXRT_rUKur8qJqgcfTfV7xjOuG3cTTMHU;pt_pin=jd_jCWHiiFPAqeB;',
'pt_key=AAJgsyVkADDgo5aWJb0H1O-TQjz_B4TwXt8xAtkh0skifABgJbOM0-V9AA0VAQx5bLqoxHQ5bIk;pt_pin=jd_aIYfAFRwDPQT;',
'pt_key=AAJgs56hADDH5BQdZZx_1m9vG7KddN1piYYQuWwBYTSd-l4_NOM-x-IwPhNYQ6n-AE3vmg7fVuA;pt_pin=jd_NKtiHAWVoRoU;',
'pt_key=AAJgs6i3ADCCEC0tzEsZaiJPQhQl_UzRRKljaLIyOTnGoohfHrP8hirtUpvvkvVVXvEF8O7DLBY;pt_pin=jd_hdXjmlkYGTce;',
'pt_key=AAJgs6hvADAw0njNrQezNKNhII2-gO-Z_V5wumzw4K1_U2oHZNbBdK9GGwDKszTbaGcqsOg7z90;pt_pin=jd_414289eec3ace;',
'pt_key=AAJgs6HYADDkUG6-w9O--wiLfyS6vXQbS0YPod_E0UGO_VXTJB4_Q3vYuMHcwQ-8aNHoXcydmFI;pt_pin=jd_6f5e8ee8f9429;',
'pt_key=AAJgvOKsADARgptLzjwuunhDZuWfycXqt3nocJv-D5evqzJamTf03-81WoMrk6KwRQznJ8EoAqM;pt_pin=jd_yokIZjEvyfay;',
'pt_key=AAJgvBzgADBwA_rF2XrOgS1CiKZDd82n9CIZpOLclmc_h-d-Tc2apR65Rmq_5qVPnnvu2qatseo;pt_pin=jd_465ff9a4931ef;',
'pt_key=AAJgsyddADCyRdZtyNs7Ydu15XGNN0ukJr85HHqQ_Ih9Ou78s_cpipHTDmKP09t77bN3jE7aykI;pt_pin=jd_6c648da6da7f3;',
'pt_key=AAJgs3ZgADCvEwVRm0WEzYxYQtZuULkJXwJH1UgKnz8zw15xYqyznET27AWTlLLQgGnU4kcIfsY;pt_pin=jd_51abc16590a53;',
'pt_key=AAJgsPLJADA-IfiTQC1WhmN3o8zmvm52m2EvVHA_gcmneEQ44B_8QkREHTwToQA8uvYaN6IsDEo;pt_pin=9389wang;',
'pt_key=AAJgtft4ADB_U2rQPhExQ26mEbGJ_LAJLL45ZB-H_5jo6x-qqDhkiK9Tziy-BUSR92OsqAkpbRk;pt_pin=wdNXnIUlqgYVoIU;',
'pt_key=AAJgsPTzADAgCDk9XReS4E3u-X0MB_zhNUhEGi6HHQbw5_daxjHuaK1oYCY2gIr4pIRIwHjaQn8;pt_pin=jd_53710fb87d890;',
'pt_key=AAJgva-XADB9aaTYsIZPqrqyl86zBaMJwQMrRcPY-qhuq_qb3ammYXJX3HD2lLA3ZOOaUZvVCtQ;pt_pin=%E5%A4%A9%E6%B6%AF%E9%87%8E520;',
'pt_key=AAJgszfEADBOs2-mi9eNJgDSM73FOFwmnUMH424RwORsJLRPhxAohM45D_HFf9WwU2-pK8C4cRE;pt_pin=jd_75fab679047ef;',
'pt_key=AAJgs33JADCoY4f_ka_wtLlpYzMtq5llGrcDWsXxZDlO7dae-5Fh2JoYvVuuQkyZEfbsUX4qYgo;pt_pin=J0013557;',
'pt_key=AAJguO9zADCgjmRz2gyzAR6SMJGNQmnjBXO6_6mIUdE3Xc-8TJIdBV8ZGkK2868duB-Wi9Wo4lQ;pt_pin=jd_6a6cd550c6f0a;',
'pt_key=AAJgxYpmADB-5HVSrQziAsS_b1NAi7iQI6uybrglJX8bVGqpaV0pAktB3-ct011BOCxi79P1qSw;pt_pin=jd_53cd430d4448d;',
'pt_key=AAJgn-HkADCaXi-drtZVuqJVWIB1jBfr5RSvsDrswV2b6TmUiMarBBgi1gXy9JSBC9hfNdWY_Io;pt_pin=%E8%93%9D%E8%89%B2%E5%A4%A7%E6%B5%B7X;',
'pt_key=AAJgs5x5ADCBJ-AtxaU9U3f1moQOio7JuvWwUZTFpzzz-trGkXXTiVCvTK2lxKnz3H0hINTyauk;pt_pin=jd_61add762fa375;',
'pt_key=AAJgn9yuADARXf4TozeNDE7TrX2ZhzxdoKPoVHxL9J0HDoUvRoFOnkuz1jcvAdWbR4-1kSayOJY;pt_pin=jd_4072ec9100304;',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
