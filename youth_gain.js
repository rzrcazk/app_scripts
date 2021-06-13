/*
更新时间: 2021-02-26 11:32
Github Actions使用方法见[@lxk0301](https://raw.githubusercontent.com/lxk0301/scripts/master/githubAction.md) 使用方法大同小异

中青看点浏览赚任务，手动完成任务，获取请求体，支持boxjs及Github Actions，多请求用"&"分开，点击任务，支持自动获取请求

https:\/\/ios\.baertt\.com\/v5\/task\/browse_start\.json url script-request-body youth_gain.js

https:\/\/ios\.baertt\.com\/v5\/Nameless\/adlickstart\.json url script-request-body youth_gain.js


多个请求体时用'&'号或者换行隔开"，本脚本可自动删除失效请求，请须知 ‼️


YOUTH_START
YOUTH_LOOK

*/


const $ = new Env("中青看点浏览赚&看看赚")
//const notify = $.isNode() ? require('./sendNotify') : '';
let startArr = [], lookArr=[];
let gainscore = 0, lookscore = 0;
let StartBody = [],LookBody = [];
let startbodys = $.getdata('youth_start');
let lookbodys = $.getdata('youth_look')

if (isGetCookie = typeof $request !==`undefined`) {
   GetCookie();
   $.done()
} 
if (!$.isNode() && !lookbodys) {
    $.msg($.name, "您未获取看看赚请求，请先获取");
} else if (!$.isNode() && !startbodys) {
    $.msg($.name, "您未获取浏览赚请求，请先获取");
}
if (!$.isNode() && !startbodys.indexOf("&") == -1) {
    startArr.push(startbodys)
} else if (!$.isNode() && !lookbodys.indexOf("&") == -1) {
    lookArr.push(lookbodys)
} else {
    if (!$.isNode() && !startbodys.indexOf("&") > -1) {
        StartBody = startbodys.split('&');
    }
    if (!$.isNode() && !lookbodys.indexOf("&") > -1) {
        LookBody = lookbodys.split('&');
    }
    if ($.isNode()) {

        process.env.YOUTH_START = 'p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKAgP925DF3FYgHBkO0ovozDH3FWi-5_i6TbFyBllvL4Ws6whyKV-dhWObFa2t-KnZeFugwDo8RCkWyTMWYSqiDoR5fhhBbx1L8YmM5VwnMzTPmXlN87GjqXUmf5vCtfX4LTGz8t82FtWPm7HwsF7JpU3BBgnCBOIA4TfMaqrFRU_NLOBYWJZPovNpUAmlB6R_-rArnsJkW4yDq4X6yhaYDkN0LiVK86TFgFESkjV-pjHosL2tZLmMXANK21ntgG1CP-IE-kamhFAxPMHdmyZsJ3zHfejqr9WvUzXKgJke9sPoPCy0dtZ0TYd-CzyPox0D5i6DKPiA6kn7nh5YcxTLjRQaRfpbxXnRQg37BQB0u6l4h1paEjqJdWNy5WKUMKAZa8tquno7NHPn50eo8Y9T7OwHNvDZFcbh1O-qegNWQHlqzRvdkWW3wGMeCS0j2DGfW3uDe0LQDp-rMgNxXeE1udlixDJxD_ktpsCTmhznx5bwZQ6nEOXB_8ZFM1vsu6VOSW5H5z2llLqne7LB_eqVvtIJHKo2oWDx6he5iXwWznfJuYGXYHq6muaJrXNZzB6LxeXwAItele3G0Egqm4-7_KbWPo7TVb3yRiUg7SmmjPQy5FHcqhrOufvxo9H99IkQ4XqfSMgxhpu6VhBrT4D7cQlm2kS5UAsnAJ7Hr7U_fjQ%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKAgP925DF3FYgHBkO0ovozDH3FWi-5_i6TbFyBllvL4Ws6whyKV-dhWObFa2t-KnZeFugwDo8RCkWyTMWYSqiDoR5fhhBbx1L8YmM5VwnMzTPmXlN87GjqXUmf5vCtfX73HZtcT8X1Jw017RSdT2w81Kr65NH6MItlMdGZgB3otrAbEObG5jPZM90rL_c3ANvqvLYu95RFe8w1vmvFz1AjZVxxmsJBY1fRhqyiVPZBBcSmxA8jKu_K-gyqW2SG32ezaX78YwMsWSAQ1UOLAC1TkY7QbJYzDrlq2xpKjoJBN7UPLj2_ooeL0CKsTSuAWpMnIRQ2HcjlCng6gIYjcDqLTTdOCNGS0h8ZFRH3Kyu2_D9tcP1-IaGkXWLHX9fMavuVOSApzBBv64BcFWLLyuy16ZYiRb_ek5Xt28eE6jDjQDBiMowJ4t24d8A2cFVli_Vd3I_0yKlVZZVH-vknL8sFXoTGRnoYSg3VYLb5hw5jXzLc030iSElPD0GtDIDy3mvJTIcwlhiOMFiSItGI1U7z_IEBjUS6bbHCmHM3ms0Aw_tgo9HbTOgwdWpZ7_YjZ3tf_fnwD0IUrufC3WPsomT7iSGEiz4qJad_TjqhAeIuDB6nmDUI0XDNpt7eaZjBt72Nyvld4F7Ap11MBnhbPvr7alloKnsxwKcG7kqIMCwkcw%3D%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKAgP925DF3FYgHBkO0ovozDH3FWi-5_i6TbFyBllvL4Ws6whyKV-dhWObFa2t-KnZeFugwDo8RCkWyTMWYSqiDoR5fhhBbx1L8YmM5VwnMzTPmXlN87GjqXUmf5vCtfX4LTGz8t82FtWPm7HwsF7JpU3BBgnCBOIA4TfMaqrFRU_NLOBYWJZPovNpUAmlB6R_-rArnsJkW4yDq4X6yhaYDkN0LiVK86TFgFESkjV-pjHosL2tZLmMXANK21ntgG1CP-IE-kamhFAxPMHdmyZsJ3zHfejqr9WvUzXKgJke9sPoPCy0dtZ0TYd-CzyPox0D5i6DKPiA6kn7nh5YcxTLjRQaRfpbxXnRQg37BQB0u6l4h1paEjqJdOjMO5IN5Wt1-BZrt73LBGbIBhxas5s48DT4SlHesiZG3NX1bGWgwWIkZ6U_U2XSVKumnyPIyG1Q2bGXBdTwViuc3wD71ra5p7hYwCfl8hTFXi5ZOKHIUwWcIOFLnAHKR4qGY4X3stE9OlAGIU7VWL1dzgocAZHw6Qw16M73wADNWh-ZoyZJpULJqkOJQaOdNUdQnWAXoKgjNiQWU7BUTdcfZE9_EH5oxK3Tfy0L8LJo%3D&p=9NwGV8Ov71o%3DGvDnjwMsu_ld4qx0YVkhCGSN79Nz9uYVd_6x03zS0fnS8kKdOyWyDMKSICaFBvwH5U4nsR_vvJsjHH2Z81CBL7eyJjtPmVfyM0x8EAsS-_ESh4-JImy11uTAadxMJCYAdD7P_w27pQt6_tIUTgtnDG7LOKwRL-IZbYYNciqqQLKAgP925DF3FYgHBkO0ovozDH3FWi-5_i6TbFyBllvL4Ws6whyKV-dhWObFa2t-KnZeFugwDo8RCkWyTMWYSqiDoR5fhhBbx1L8YmM5VwnMzTPmXlN87GjqXUmf5vCtfX73HZtcT8X1Jw017RSdT2w81Kr65NH6MItlMdGZgB3otrAbEObG5jPZM90rL_c3ANvqvLYu95RFe8w1vmvFz1AjZVxxmsJBY1fRhqyiVPZBBcSmxA8jKu_K-gyqW2SG32ezaX78YwMsWSAQ1UOLAC1TkY7QbJYzDrlq2xpKjoJBN7UPLj2_ooeL0CKsTSuAWpMnIRQ2HcjlCng6gIYjcDqLTTdOCNGS0h8ZFRH3Kyu2_D9tcP1-IaGkTTqIWcG5JLdqspvOlHd6yjIWqFqfhh0EayKNDkaTInydUzM4ny5QHayxuUG92XhwIFFSKUyEtX10h0lZw8GZSY-DsBLwzUMI10eYuIkkoBXF89FC5qI5yYh4Tj9dE-ECI0LX8DzA-ebEPE70rQBfTtODMilFhSTifvmEnR79rFJOdgo3CvO6Oz9OfOnjwGeaDa-o4Rc-VXJyJDToCG65FDaPZtqlIt2CJm_dFs_S9aE%3D&p=9NwGV8Ov71o%3DgW5NEpb6rjb84bkaCQyOq-myT0C-Ktb_mEtDEGsOrBruuZzIpWlevTEf2n4e6SDtwtHI8jh7tGLFm1iscPtbZwlhO1--2rPMqEVay5SHQZ0Xa5om9y_QnFioIoDSg-ArtrfwznZt1IhRAOspLNm4F1Z4mRILDUTDM9AS-u45jBCPiG5QwcEz0zDomsqn1kiPulA5sWxCosoy4DijSx41vpEVxcePrUS4Np10JMsr8I0AQ1CpzDgHcujhWekGxsGyFiVahwCvi07rmUOc6WWA33tuOh0l-LqGrwQjB4Sn5ULv0BXTe1WcPcDJ6WwFA96gt4jKefatfkrxEh57PheCyPnjP3YCNgsF64eNnLqrGvWDNx07By5CLKP5CCOEtxt9zw5z-2ydGX6AMs74dIVR3A2P7FDDwf0q415vO-ykZrm_Ekc4kUL_l798468eZ-hAejkQMyaQLiw6oJknx_btuQyvexCxAiFPaZ_27OVb8CScbtyIp5sDAF8NsLE22pXt57stcI7vGZs-rtaMjE8EzXV0IKA8lK3QsPDhqRPKZbH0K2CVr5uGzpNW5djR9VCCtcb-PGaIAWsB30Vgrmx0U-OpM9l8GyB7eSckKbMfrbaaEblVMNlLfPrFfmo2NE_VYXsak6iuCO9XmB6MMmjvikQi3Lr3cf1EBdqFRNGAJDy8EvxRWcaNSs2TEcsEL_bqVhvzc942yNq01eL9Vpi0FlqDHDbs_IKKiM2TtOUR2FIckZpkmNGHvNSWB2Nood1I4i0JpnWcwg5enMQkIHzhowG7rorM_Q2mH6lxBvxQ-S7qlgF_dxE5E2Q6jss86TFvc0-m9RrB_GE3APULttB0RWVZfgBt1bSi'

        if (process.env.YOUTH_START && process.env.YOUTH_START.indexOf('&') > -1) {
            StartBody = process.env.YOUTH_START.split('&');
        } else {
            StartBody = [process.env.YOUTH_START]
        };

        process.env.YOUTH_LOOK = 'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp7q_4Y8Qp9lXBZIVHu2MzOdUG1zK6r33DYL2bRu1fmmHJkyOIyuGfMF2UaN9lXnlHYb6Hc5T4X8Q1M6tD9TXL6Mf8gW7UHSVOsNgJqs6P6fMHqDze5cr_Wckjkk3cRw2IOnx4I-VITo0wYi1NoraMDYz1Ii3JjVAUv9ryX-ZYjcGzslng8hBCkvAMI3OXRnP7ZfwoHUvc2JCWJF1j6k24Cmlt2PlfAfBNPSBkGCTWg3Zo-6Ap97w8aRtRTSPUO1obkX-S09MMBmUQxt2JTO-V-bw2u6gxPFyb31TKfMDC3Gunv4XjVbXqeCOB5RDO6VdaUVmFMPxh4lNtPyYJsBX7XeJSY2UOF9_mmRaiR6itVkXJl7hE-QKSQTyIQHymG3I8umpNEqJ_ZJVNer9JYZsrVw%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfpnghIkj_jIc5UUjO105wBMoitP_SLYhM4_MowICrd5q-4nFogB3oldB3_9AHyz142MfbguPU4yxrjyMahpTuTGbenNCO93a6DOpWWWUX4J7l3bM-A41atJZaru6NBsyfc73MnQJhVaOTUlYEK_Al2wcVKKIkKUl48x9Vx-W_VVgcmByvca8w9tsHB9vlFWAmBfEfmgaUrPYvSUGr8D9hhqtyokugztFo-AYuf1lei--pvcEuVwCMqFaWEOsTDqp_oydIQigYCX98_GtLmmyz7fGGv5vmG71wPT09MuYwK2fDv22ApgscpLjDV4CEtSy1eSQbNceSTtmuv5QCit5SLvmFU66XbErocK-UDppxYLS4gKI7sLwR_m2G2rijGaqXQ8k1LioAVyovhylmjR8Wnsg%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfpnghIkj_jIc7_VTLvrTS2LmjvISyyasKhezygcrjOqwbYzr6J6VyCGCQREVIN5BwabWb917MWzuFcDcv1WG6kMFAShY1cgVxqqtFbkn9UsAUIvJydMMSTArfC8C-6EKMwsIIPaqac2JY-hrbl8l_F2kF7NqTwojLYJLpheH4td2b4AwjnCunihF9ZnIhA03hENGjQNPjad4a51aQONKZLQ8LdUiRkjsgS47d7fB_Q58kCpeGnYCoz7isqLTkd3cX9qFIkrUqWce6H05fPRZkASpx_A1rW5YHOjDKBQTctopn8IiiY7-D9u49DYdbhmZK0ZfntzxHqcu-Mh6by2w-RKEaYyNP8mfP19fzrWQ-7pfdEuJ9uq5TUpf9ZOknhMSyed5WWZS9tX9-ME6-BtjBXQw%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfpnghIkj_jIc7hxtm18F2VVMZchPcCprz66fxMXzlRaK0QfMgoP3ocXsp8S-Oo-9WjB8m0KIriYLNAy5pI5VszhjGNBioJK4rhlYRkHx_a-VsOIhXYEh7Hcc4IMM4DBCZdDdQ5wNiwwiB_clQlh2UvDrJfrZo_22t6nd_qptOgcqD8fk6pBpnQdaGimo8JvKa2IdvtNhBlii1H15WxIECS2DBn_j-DCXKsEdY0_Parf6niMRpWFKiG-Sbpaq9XctCLkGHPaXE7Ryfo5uZdWWfsztQiAnUKAc_oKmjMNXYR4vVPZwUCcT2Mfyp3CYY3XptnfkK1tSEmgnb3Ns5E1talH6fos2Fn-9qAGkoxgP-PVJcTL5lWSvrT4Q1KiNKMte67CR5rWwoP2MmpLAr87dd_cg%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfpnghIkj_jIc7onLBKWhLzcWZvk8HjNqFBX2_6kywbNc5WPi77cIMDnOfzGbql8IJZ1_KvDocc5XzASmM5iLZ0d4JgnYyULAyC-Kop99Fg0y6dg88GS3uy-6nJd2NrbFXLE25AWVnoRRezTXtTPlrYkKp1MujYB2_nTOtgJ5J_5mHyr2LImq6FivOamWYe5sffl8vTlYsShY1EajBeS9QNAIYLy1XzqDvQVx6-V_EQBrvRiFh-sjDayfg7kRl_BnV-G8bD0ZCO6D6RHKb6ocEWvaBK63p8K6fdG82_3eFMOeYEGdN8OEOuLpo6eemCSKXT_JKZQJwnnLMXAcDth_xitlgfVLrBjwWTPi2la2ER_IZEHiHlz4kwJvPffGXR_OXki9-dFhawHCua8flHgTL9jg%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfpnghIkj_jIc7EjoiFAmKrarTiN-LS-Z9V4mgqf73xFFJRq_ZaJ_2NFmJrptmyuDtjtEIrr2-0U02wWSFC-glCBN3CkZSrIhAsBf1umADtjiuD9KhmbGzkVFyDo0suDzDrPvXszXqqCmumQB4aaaEwQW7w0HH7jqDTIM2g4cbqFojOdc0cPqkZbWfhSrLl5yK526HAIvTH9rrLw9W8rtTMgfEeHMqtRyQwd_5ICnkNNuglPhB5lB2LMC3RkudwQ7CLEiXow4KlSSL3LXbSOOMauuidi6u77ewWW4QdOZy2d8YSdoZE4UXSAAhR8eQ3DDiX_O7l15XtIu8PZo2E5iWS63c9POfZ2WiKhRaOQyQ4xvhUl3bIrcSRd-04SmvusGaYlqBHUfdXBTOu2GguQkQBJA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp540fW24LUQvq5M9ICVvE8S6m57lN9iFMeRAVlfpDqJfWbXLc6YExCasaMFHYAHrYYEzpYOH9kuDgfXYjSmZkMAUzYuj8q5w4mnUpE0T7UpkCr9kjAEcRStmHuMnF_rboRph_TJ6pmsdGgOsEshlVpyBzCCnLSZOR9v77dRPWV0qtExObfK-6eRqfTSAV5cS0dq60-O6eHtq-LDdjH2IycDV17JsfjX-trR8SimONxTbl0Lrty4UqvEDLujl6pxYrLnIl9I_vglwY6IvlCeg7MOXBiC59yUMWkLNenn6O4bAg-ewvHIYL3PqMsbQ5TrDtXdJxnBEOHyhB8FfrpHzSRGU5SmXXRacNCXt6lDrCn8v4Wso-oStZTPbsAn-3dzJ_aOajVCd95bdI0L6IIkZ1sQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp540fW24LUQvQSgk7PvvqCfzCYrv1YnKjpHrEXcc-noAVw1fJwt_g8a3oqNGlwq-jVclagiZdyJwGCoqImk7X9uW1aazaUPCmcDotiDvmEojvmCYkwKFKmFOO9p8YtR2z25xk9GPlSsaDoBkQMdfVTkLlY9F_Qug0zU9ua8HLDu1vBrt230lmmut2-5MlNQplMZET7qnPxBkwRHViUJaFTOjeBxa9ERfZ_yfYee6Flux0-J-Nrhlm0yYwqykVXJ0roVgwqGf7K7dCByKKdCvuS02FLpgbG63fwwxiNEWLI7ld_txfTp72oDFsG8cXseFrlMzxdpTcAvCU5XvSUFRBdi_KdJ7owRMTv7p1Chi7YxrRYUkqxIzLJmJluRPWku_4WSedH-dNjNH8ZgL_Glov_Q%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp540fW24LUQvmPDisGBS9mCe4t5uFqLtrlfpBpOLasYkhBVU0oDYOK5xfiAmra9xw_PEQrnFEsAVN42mn92Dzmk43LrvaJRopIXTAk5ZT-FsG7LZas27w1GahnMHYfC4fOQCUviH4znAn-4NTpYrFe1Tzdp2cgfA_23Mg4KfrA7aAZNJyJl2qRdtvuBi9uqULUmv_64lkLGN1bQkUWdPPptPUgxeiqZfVZZl-EpQ5JVoX8XRA0mAEsPNd3BPXgYj2j1Mxn1-CG2I_W9KjHMbKKInxS8o5asC3GcDHOzhE8qXnsg57ad_JLew4WDzRA3PqljIuqJYWVF7qVWvQCYF0aVIIULpiuXlmRtaviuq4v0_N9ZBrfiw5portaLvAtUAkD2m9h33mwCvbgV5qV7KtOQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp540fW24LUQt8gBJcqymQRSBBkMCyjS3y0mXwJ3lffjWnmo1zRTlRw5E5SKlNW3P_fp1dRQHeimBKmaZLfj85zcih7qB7McOV4EjdFjYdVYDbYceD-KjJ7s-feG6n_ueNvcsSLqVQS6sd2xnHXJGk71tayRpUluDSUjQNwQPygCkg2Kme9R6npKZ0Qjm_yQQEdCanVE8pl9EMYa-vm-jiND6qzyih7Z8_IS7blxGuo4Xd6Ocui-zQk2rzv0_OrRS4iCfOneC3XS4B8xW3ZxuTwavXIV1HY1Io60Tr1YKG51eGBpaSClgXi_4zaDqYQGZ58ygnxWE-6FUeOmDvuS2TtVozdW88mCmrZA-VP9PHWNzKiESf9_fxOB_U5YKYIV_0nwhKjLXMF0eAv28g3E0Y2A%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0zZqjOa6FiWW03rytP3OHvUyPjijY8yfp540fW24LUQvol5AFANgvYw3qidYZqNqNTj0HhYAg1HUBit0tHvhAnLHCgUm0ce0t0jvPJnp_L-5WeVitEWWTq9k7t-mjbC1y7Cb9OlI_po-JT1nlDYe5N4oIcdrrjS_W01UJVdJ0QkEBuLDXGLLx_IByYDa8E5-LGfgkJEBr7MkvLiSRRmF3dGc91Azh0hoCdJnC3Iy3wp7EVf5PsqP2yRNrdLQMoq0HxlgL2jalAfMM_A8ujRFslLc2upHZLeJKT2xA-tkeVfU-XG0Ew5GBXM4REv8QqkVtFUSquGznD60Z5FamHkBvrEiKt2yAmnh7Hl4slARZx-ymMG_UmvbjVoBPfnb7FKXWGqYZ8gX43zfHqM8Q_zxPdWmUQu04pnVDBX2Up0ZnThYSk-1EJKgNGA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJeetZKscUfjbvJXuzV_oLT1mvJGbQ6xj097t_7hiExAS2ZFdfoOdeTOr9nyWQkCBgvEiYzNeBIDfDslavsvojmXdEhIEQonYBPI-C6Ds4wvsKk_-aSV4FF5S-GxQEVNPi_EVj3qP9g_K-KJCxyxasj0QMq1DvOM6dPnwlU5brtwkPlpLVB1459pAU6FKLoZdebW2cw6fQTM3kF3svDGrcbrBW8d5AkyO9llP80IbmQqmTZXTPaymU9dRu5KRNZ_Pcx7zZlb4k4smeRCTN6cgtTVB26HDuZGHBvVUO6FJRFnOyRgnWfd05n5ft2Lw-x7i2wFLeK0r5ma6o_9oBtrZuVoeM4nvZr7edUp52m_x0jx18f4q89JeEuiORG2NDZSTusl3_mN9UQvtJg%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJeej23kQo1nyAxhW-eCLzl8J0Sjekb0iSTy2_BBogJhPwyEnDzBC9L1fLdDprAizcxEERTc07grSkyu_RPZjtGlMHDo9WpRpTCRSwbatG2sQlWNskjVsbyE9JCYce-8d-U-ikH1fyB_pfN1FAcv2gxLxP1zSfVab55Nt3E0jgT6sFSnus8_-gNzSOyjIFydivQqRXaQS4D7Y06Y93AK_xEgTON5h1Lmlwi3b50KhkywrLyzx7RtvsFH6WIgNInPCcgN52JcuYzIpHqhIM0_ByvVGEfVTncuvV0kRcRVfowQJEvuH8XfXwBkuuz-ixUuvciBG99q19SA03IaNCgpZLfHFx0nd8MCxYF59Zkxom60GO-E3hyBOXb6sjsXXdfACKpKBvU_ZvP6h2w%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJedKTwRZAjK0Doua0qZzJKwcuKPh8aE_YhcTyIU4IR2d1hrDoJEQfO4CTE6i73EKMRDp2nkes5MfdFRHSRLlZeuENmgxeU0bDJoI3yinHrRqQNhJ6qtQNaSZRTI-53KvPFoTJDvtz0xTWW4F5jZI51LXSwm9NZUJkJc-vfthQpq94mOfMPDpSZjRFmGMrLnuaLcKM8Xmn6VNQocM3QxCw5ePEKrJRaALHj5E1UzgOjGVL5LoKOCIln6s527LeWd3OBMMqxSfEzJ6kswenFzjD5K0YAs6R1utZY_UxVTBk7Sy-rv-QebWKoUZGCLIeGJ30DkdMoRr2O0NmQqndiDMY6uHXJ53D4ZXPGQX26gBEbphpGGKZ-Na1gQj1ECFjw1k7iYVkZYohIOBMA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJeelcWGJQhQxSNtwTxsP0Lp75EdcqVvctb2mSmmEe_TrDbFMyFlzXnjYWCyJPHOMFloLv4iFU6gsyL2Qt0DKD2QUFQQnSJAUvWwo-S2Oxz4-U6CEnfKt8pz9shStGrrMTxhrrNp4YqDWTkeKkWxC4-3sNXm5o3lZtHBfdWb1sf5aqddWI_h_5bQczx06h0_BCtC4i6sIox1xxUfnVke_HJqAGd0EwUbU4SJq1wryYFcw9Jtw6LY_w1i5atQPNyGADZ-cojCvslxUEI1j6hXKbPBDb208MLyPUD0MQ4oMJaU_s2ChdJz3Lg-dEOpNeF67-bg2sG2p7Ymx5-CaPvREYHQg7BiyF0HrvgVJe4PjxdmjWxaqUIDrpt2A9ntCJLbMlAeMioNYF0gboQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJeetA7epKEcAtz8NL8jskMnndbK-9r8jGHhhKCmo1doqXv-WGVdXd2mITzzLJ531409sABLMIhUHY555ATIDDUa1WjsX11ygWxqofIs9t7ofJdWOmXM_X4goDGJOloRuEBwy6EJCCg5tJBLQFMuPjMKKF_sLD6NcfRPf7tY2OdtJIG_IO44nEt-PEZAKzhlN5kXbHFU4tzAvqW74VKI4gp29oXeQ1rTpRkxgoLnSRQFI6X7MEQs37IkJE8va5SqEj-8iyJ_UObXjrZGEPi1sxy5JXdGv8aMPgb_oW6Dwfbjb7HDTxqS1jZinvS480nTNM6dPuSjy7-wJsCjYK_M0iA5CP8RVG_xWli07zPkBhXlUgJKssctEwwy0m6RLztZsQSRw828g66PaAA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJefSE2s4B-W84U8kprAXgCKG7erGadiBbH0fLDCpuVB_FQxKWa5vx6RQkIRbfouVPxfACvF9nOToNv2L_zihbtOKlQEbAkYiGsQR3ukA1xVC9bsNtwUJh-ulTug-aHfbEneVkA59xPOmxiPM2OHqlkRO8cpMHTiRFdLceUVjOmyvRt2grxWgcN0bvj3m4dNUrREC7-6MP-BX8sEy76h-2MceXiqThsysCgJj6LRSnYP5lOhT4xEbh_dDz1PiZs_-3PnCz_qkGuNtT-PexHtMFnTuvKDxAdbSCmR3ub6NSqhorhoS1d3asoRj39MgalbA555k1epRO2AMH6g6QoHC251fOMsxo8xyAKrqk2cjmeRQrG3VIu0dcA5XuFzZryDVrsGIQ3VciAIv3A%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJedKgwGDTN8ZrefYcXpFzCpvYDwwafObnOFFeD94PZr7yT-IJqC_VSzsKfE20ABklYJSdMlC9UkG3LN8hzNJu4k2SX0XTzc7Zmi7iePUTBd9Zu4sbuDvabAvVNICbR-77eUZSuCMCvbcaumK7lp1YFrJZNOIyo_vvHOcOPayGqd1JrEDSo6LCGauRqIyoUZ6g03PgYOQ4f_hqtMyOpHPSKDGywzD0cun0dMsOQnt3G3qz1DwgRvOe3WX6v5pqQOFWaVXNTr0kUfFX6Oe3Kkq77narOhBpTM5OTvyZGREMRN7Dk1irqlfX2u16K5StmmjeFJ_MukEMxvDENJNVJ3b0Edh91lhqK8D753kK39kb9uQCqg5GQG86RgEnI9q0-4uk-_QbBEPC4mOPg%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJed5faQaTUq8TS41zmLeOWoFza4TakcAb8JuUMtklYq-xOI6lmi785uT5kqRWWVGMhnk3z-hVHO1yBenPU-serIwXpbSEFIy86ZMDlV9h50XNYLl4Kq8ph5DYKTUrJuOGcb6KTL3q3wI6PhoKyRYYIUvqAMNj6AhSC71rFePb-VBjRIin3yZOzM_ZEvzMLNaUaHZwNcQ0FgYgu-IqEOTYa7udky5fb5gTQ16HmEA7sy2YgvfZ34b1VfhpLepruW6_sqr8vNxnYDyMGp1xQ6541UkwmQY4cTAMpv8kNA2LILsyDHijjn09rgwUWiWqJiepaSwuTG7JSaSiyGU4fPWaZU4LoXYjPOx86289-pifBH3EXWvYncjOEM-z676897zC8fdyFo4v3fTWA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0NxJVBQRu6SqrnHCybRuRKetvKc-dYb1HYH4mGJOFJecShef-2QjAydg0EVTOFCgvO9HrioiZ8chctrwNf7fWu-SjOSEWvScwHEcpQhOf63GBMOh680AcHIcPaIuR2J2EhvkNGTzI2YnhZzRng6g0UCKeRfduMz0J9ZFIm-l596UgGVVH9M0azhnPSKGGEYVp2qYeeGWL-vvv7c2mjgKMFTb3ggSqJXPS3soIkhxYK7olP0P_qkqW-QtfAdnxsQjgd0Sut6CQilcvO8QTgOODbigZo4oBmiqo14Rs2eh9Nl5FQQSG9YEn2GI-0RhLrOtCpMVodHAOk5VjaiYTUlOvHBrWIPkZj4SmjBjPfbuCYSsX48A4FoDfQi0GXVouElVGeXN31N6_L5YQqyQl2eR4U1g1ejlim8xxY-_BsATqGfgwft4HpIpkmA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFm4McpbPc5GYEwDe0k6gPpSTK6BafWZt7H98S4i8n0wZSdpyg_-TCPmVKTNarG-MUv29yZyhrYazOWSEjZ0ylajuRe6mgzeSzR0At6H8ZiL8zRBbtxsXC9dtFFuD30tiBTWRAZlBzG88iWFyMhSSc4v42snQdir0m8mV0DrF58ntETmTgLVVTO_InuFUcCeIoKeGcbthWfKNWDe8GP2CFoO-e9k5tfSbHqGKXQsc9KnIPNgtdq5-QKOPdo1Nx96UE-ptKaKAk5qtBPuVh677CgaQKKRqnxQjwNDZRqfSC7d5i3IAkVjT4TBIIrWYYRTv9LQunlLQ5GcReMGxT8rFmmWeSDYKd6XdYN43nDJVDyRZmi0_cQ3PeDoOJTc_VY7Y-VPz2rEYjwaZYGEwJNZXORHQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFm4McpbPc5GYG9F6K0GG8qXt0LCm_NASonkrKs0bRilqBQUHMdXZYqCgOK1LANXDocfgCvdty-wS3QUmyQJx3roa6ZK2cHbpZRta5teXFmxiiLerIP0dcewEYxCVr5E15ZoltUzXNMK0jmI68DFtHs3JlvgR3VXZBYqDwzIzVpcDkRSAlhnvxcUaezf11N-5SIIeCRxqXfHhgQuJzSOwe2oqcJaiNnSYW-Cm6vOaV6NgcK4aO7MoAXi7Di3ud6ubhQXwvek0yrZ_0tgeRbNihvwA3UhnWzEyGlBB6SbsQ73NrMFjsKZpyAP8VQWbE8NdNuWTOO9maTH5O-YoWzxfxoll15dO-KoT-O_icSbau5bKX9iQ7moWqXJMJhibPh2n6CUb34ZZ_MeBZ9LCJmoJrMNA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFm4McpbPc5GYHq3wNUoFIZdr04mFYESnD69pp2uW9dUqRFJbszrJm1fmeUKo7-l0kMvZFj3_sk5IHT3uVCHigly3uq-C8EzTOgpROFXarbCGRsZP9cH1WqnOUk_dIidyuVeGQBIUbX74i63w1HsSDLGy81P9UWhBSsDNiz3VCvitabEI1tbnK3UQQJ6lsGPAhhMRIq-l0f9CwFpraWi579Vca8UxMFC2zasv46TG5ppv-3ouLXFLxS_T17PBje4_1A5S2NZRiYJa_oCUb6kz18tS-j0b-hNH950B-qZDfQEIYddmUnTgYSWdq__7qvF4kc2QRJGUU6nHnuMBTtWqbBN4pQsztQtIegBDAuTycjspKtpLymZXKRjPoltfwvGaMmOYz5R9GRAZKcjkx9XDYnXQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFm4McpbPc5GYEmdG0iF4M4fiwv7N3qqBK0WhAw-hoBtROtVExHwyFlhxQ3uiaYS8Gk-xEnG8y4bGcH1cYo_Q-4DM203t0UOV6aiZ-Rwgw1JE3I7mhDQO1iSYTAGlZ70DNE1qfFyAGF7MOMmvJ-Ya0aqslO3tK6cieiAOwiV6SUYWakIdPedwbquarY6ffiMHZnOebbrarKNcuEQtgR3KZgJyf-IXFp6-DX-0rjrBVQrdkbtXg8EIZI86Yg4YPaQ09VxdBW3Ew16pfqfNX_nSoHvQirFLevhxOnYrWfXVZhWOdA2n_9P_KI2m3Vn8qH0HlLeL4JS2RXxIdIBxaSNrSc4cSttfNmFY0yYHuolHc46OHlTqTSo_4kMhnj-TT0y_irDydowEWWRBoUHo1FkxG83g%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFmsKWQP3TKbgxd0J_xlBJFWFSas9gOQAH8pWr765ySMXfNH2uCMAv4sA3C4EIbiCFAly_kYY50K0RuO-Ex7lYNrXJR96MybYPOQrxoXfqWBuvFOzV7I8glBRaB9Cncq5UzxuBXdi9gNZl_zRidLLxlE_w4zdqcRwRGHXXEjntmGOEKM5IzPrgCN7FR5OHZUjEtOJUI7iZ-UHXCdVg5XTzuBy94Ty4z6BI6BCo7qxneP7ZhOuaRfWMKHvJ8_YoNqYvQRdAdI5I-4Jcjj8wrAUwr_22EmH9N5cX9aAojVIC_n-NryHayHUv6Nfb220fPZTdyz-SiPB6fP2iIwwaRN8mcVbVXRJ4YlK_idiEKj_6neF73T2kPEAFgIAJetq9IfYN_tIjmlf7mv4p4dRlARuiAnQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFmsKWQP3TKbgxt2lkB2JvX7FlaCvn1Pda8VKEcnOVTd6MAq2uWY65fcAgXXx7C5PXnvCEvVb0iB5TeC4DvCb2h8fxQbKHzDvX_Vg3UVfrvBbVk80vWkSGOBm3AAHgigm3_XjomYAKkiBhT3e28BT3ABPTwom1vuGwbpeSr1xL431X4RQHBbOLDBt6rS4YpkMTUGSib2B2MyS8YFbTQe2gNToTQo3vT8F0rVdRIlWUFFPylFUH7NiFxX6rNTJrappYExHIudA-kR-HjL9inO9JKaZDq5mVj0t1Fcv_LaKdrzFLgPOz21JA7wLXCTi0yR3PROZzerS-Qy3xhPOoCif7bb_jtW_kRNZ8E1UGwyNWD9uH1vYKt5DUqiaNNAbyCl42fYMIjhU_bFOuysdRIYPbFcA%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFmsKWQP3TKbgy7cK-7xAXV11MJgCxGU8M5E1JVR19nuJ2As6ygGmIEXIv5cj3ee02MzNm0chtMhzHeDoRtPy_Ouo4BqrpSXxSNKjrKkkIHFseTNgqtgKl79nK7m-GRoiZL_pjHacWQ8ZSCa_YbIQz9KxWAaBZDtb7RGVn4iyGh8k8qvaiLcXzkx3_VYkKfLydXS0aq9606en0R5BZRsVbkU5boLZU-kjeuCPnVUCOv4dR5akCf3i4j8VXHxwV2j7lbsMPSq36Jj9M73WE9zRQ3DwTLIwdvsFukBKYKkHY5rK6PO6MqsimubJqzcvKP6hDjW-Woht3VTjYijV6Z5FeCgrfMhnpl0xsuwuOm_lBkGUFbxiBu1IAvBuJp7VX05N2qZTER4FtOpOxyeMPcENjUiQ%3D%3D&p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT09KH9QKdckslTkSN4bzUw9XzwuZ6ukOFmsKWQP3TKbgyru2ikbV0NyoJ2uoCj6brCbgc8YzOfyfpy82ry6pmvL0fAiE1ytteS0LR6ns03XPkIHteo4sjc-cPrQ7JhoVL-WhEfLqjZ48ylEkpsfawoxQlf9jpyCxfncGEjtXTW8FVBFCKtvC9oy2ni5_uH6U7BMJYrh2KVIXBReZFjjti4i0ASVQqwoOlHJA-yqwh7vRk2ObgjSvgw9V6_AnwR_kum0zVCZOCg5hhbZV48756Z1K9N_o6pZbscghJ9Zqx9bM--LMQ2ThmSNvZxFt7HBLfAgl4kQPnyR7tHbFOSug343Ki75xcHmfUQsJEqVJBkTeF_KEvyHarCWPizsjRaG6BBS3Qz0evovwgQ_y2L0ylVf1hEwKvh2A45iQZgSMpTYjydk4-IjSuvOw%3D%3D';
        if (process.env.YOUTH_LOOK && process.env.YOUTH_LOOK.indexOf('&') > -1) {
            LookBody = process.env.YOUTH_LOOK.split('&');
        } else {
            LookBody = [process.env.YOUTH_LOOK]
        }
    }
    Object.keys(StartBody).forEach((item) => {
        if (StartBody[item]) {
            startArr.push(StartBody[item])
        }
    });
    Object.keys(LookBody).forEach((item) => {
        if (LookBody[item]) {
            lookArr.push(LookBody[item])
        }
    })
}
timeZone = new Date().getTimezoneOffset() / 60;
timestamp = Date.now() + (8 + timeZone) * 60 * 60 * 1000;
bjTime = new Date(timestamp).toLocaleString('zh', {
    hour12: false,
    timeZoneName: 'long'
});
console.log(`\n === 脚本执行 ${bjTime} ===\n`);
!(async() => {
    $.log(`您共提供${startArr.length}次浏览赚任务`)
    if (startArr.length !== 0) {
        for (let i = 0; i < startArr.length; i++) {
            if (startArr[i]) {
                gainbody = startArr[i];
                $.index = i + 1;
                $.log(`-------------------------\n\n开始中青看点浏览赚第${$.index}次任务`)
            }
            await GainStart();
        }
        console.log(`-------------------------\n\n中青看点共完成${$.index}次任务，共计获得${gainscore}个青豆，浏览赚任务全部结束`);
        //$.msg("中青看点浏览赚", `共完成${$.index}次任务`+`  共计获得${gainscore}个青豆`);
    }
    $.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n您共提供${lookArr.length}次看看赚任务\n`)
    if (lookArr.length !== 0) {
        for (let k = 0; k < lookArr.length; k++) {
            if (lookArr[k]) {
                lookbody = lookArr[k];
                $.index = k + 1;
                $.log(`-------------------------\n\n开始中青看点看看赚第${$.index}次任务`)
            }
            await lookStart();
        }
        console.log(`-------------------------\n\n中青看点共完成${$.index}次任务，共计获得${lookscore}个青豆，看看赚任务全部结束`);
        $.msg("中青看点看看赚", '共完成' + (lookArr.length + startArr.length) + '次任务，共计获得' + parseInt(lookscore + gainscore) + '个青豆');
    }
    if ($.isNode()) {
        //await notify.sendNotify($.name，`共完成${$.index}次任务，\n共计获得${gainscore}个青豆`
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

function GainStart() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('task/browse_start.json', gainbody), async(error, resp, data) => {
            let startres = JSON.parse(data);
            if (startres.success == false) {
                smbody = $.getdata('youth_start').replace(gainbody + "&", "");
                $.setdata(smbody, 'youth_start');
                $.log(startres.message + "已自动删除")
            } else {
                comstate = startres.items.comtele_state;
                if (comstate == 0) {
                    $.log("任务开始，" + startres.items.banner_id + startres.message);
                    await $.wait(10000);
                    await GainEnd()
                } else if (comstate == 1) {
                    $.log("任务:" + startres.items.banner_id + "已完成，本次跳过");
                }
            }
            resolve()
        })
    })
}

function lookStart() {
    return new Promise((resolve, reject) => {
        console.log(lookbody);
        $.post(gainHost('Nameless/adlickstart.json', lookbody), async(error, resp, data) => {
            startlk = JSON.parse(data);
            if (startlk.success == false) {
                smbody = $.getdata('youth_look').replace(lookbody + "&", "");
                $.setdata(smbody, 'youth_look');
                $.log(startlk.message + "已自动删除")
            } else {
                comstate = startlk.items.comtele_state;
                if (comstate == 0) {
                    $.log("任务开始，" + startlk.items.banner_id + startlk.message);
                    for (let j = 0; j < startlk.items.see_num - startlk.items.read_num; j++) {
                        $.log("任务执行第" + parseInt(j + 1) + "次")
                        await $.wait(8000);
                        await lookstatus()
                    }
                    await $.wait(10000);
                    await lookEnd()
                } else if (comstate == 1) {
                    $.log("任务:" + startlk.items.banner_id + "已完成，本次跳过");
                }
            }
            resolve()
        })
    })
}

function GainEnd() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('task/browse_end.json', gainbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message + "，恭喜获得" + endres.items.score + "个青豆");
                gainscore += parseInt(endres.items.score)
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function lookstatus() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('Nameless/bannerstatus.json', lookbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message);
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function lookEnd() {
    return new Promise((resolve, reject) => {
        $.post(gainHost('Nameless/adlickend.json', lookbody), (error, resp, data) => {
            let endres = JSON.parse(data);
            if (endres.success == true) {
                $.log("任务" + endres.items.banner_id + endres.message + "，" + endres.items.desc)
                lookscore += parseInt(endres.items.score)
            } else {
                $.log(endres.message)
            }
            resolve()
        })
    })
}

function gainHost(api, body) {
    return {
        url: 'https://ios.baertt.com/v5/' + api,
        headers: {
            'User-Agent': 'KDApp/1.7.8 (iPhone; iOS 14.0; Scale/3.00)',
            'Host': 'ios.baertt.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    }
}


function GetCookie() {
    if ($request && $request.method != 'OPTIONS' && $request.url.match(/\/browse_start\.json/)) {
        startbodyVal = $request.body;
        if (startbodys) {
            if (startbodys.indexOf(startbodyVal) > -1) {
                $.msg($.name, '阅读请求重复，本次跳过');
                return
            } else if (startbodys.indexOf(startbodyVal) == -1) {
                startbodys += "&" + startbodyVal
            }
        } else {
            startbodys = $request.body
        }
        $.setdata(startbodys, 'youth_start');
        $.log("获取浏览赚请求: " + startbodyVal);
        $.msg($.name, '获取浏览赚请求成功')
    } else if ($request && $request.method != 'OPTIONS' && $request.url.match(/\/adlickstart\.json/)) {
        seeVal = $request.body;
        if (lookbodys) {
            if (lookbodys.indexOf(seeVal) > -1) {
                $.msg($.name, '阅读请求重复，本次跳过');
                return
            } else if (lookbodys.indexOf(seeVal) == -1) {
                lookbodys += "&" + seeVal
                $.msg($.name, '获取看看赚请求' + lookbodys.split("&").length + '成功')
            }
        } else {
            lookbodys = $request.body
            $.msg($.name, '获取看看赚请求成功')
        }
        $.setdata(lookbodys, 'youth_look');
        $.log("获取浏览赚请求: " + seeVal)
    }
}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
