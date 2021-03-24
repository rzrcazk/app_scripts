/*
更新时间: 2021-02-26 11:32
Github Actions使用方法见[@lxk0301](https://raw.githubusercontent.com/lxk0301/scripts/master/githubAction.md) 使用方法大同小异

中青看点浏览赚任务，手动完成任务，获取请求体，支持boxjs及Github Actions，多请求用"&"分开，点击任务，支持自动获取请求

https:\/\/ios\.baertt\.com\/v5\/task\/browse_start\.json url script-request-body youth_gain.js

https:\/\/ios\.baertt\.com\/v5\/Nameless\/adlickstart\.json url script-request-body youth_gain.js


多个请求体时用'&'号或者换行隔开"，本脚本可自动删除失效请求，请须知 ‼️

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

        process.env.YOUTH_START='p=kFbVGOYyXwIo%3DPsKtOYIB3ReVrvKgydyi4lM1lB7gh0zCWLMT8Ko8kgXO2VCbWvWjJU0yodR6pmIk3jsi7gASBGOj6UPN_BR1smYfh6XNvJPLcBsPWXtTWf8Gd7DLo8Rk2D5SdKyYQ11GWiKEoWwN0nmyKEWOYMF2XpFhXdQmComSpzKvSnih41-GCJzJcP0-zEZnQTXblGFSxGrianALmG7ZEzvhWW_yc4TKOXN8XDNLmx4tWEUrazo7wBJI6r6QM_56A5IwcHfIoXiKzMEcMrLg5hS0YhcWJ0TiBSrmh3FIg5aR90q46O7Eh5fEit7OahdN279P2QBsE3BzRlK45wcEBXhqIbyaQNtYpmmumQOzyNYArysPc71DHIPski4YI9RZo3oOpMD8vEHCYqcuyxt-3MKbgC78upxzBKhDEXUXg9TvF9hWJe9_YHOpIGSZmO5JNpddshiXva7iOm-SOy-yO6i1U6Do-F4aGqrGwPiBrIn-uwL4MMAhx0rA6aZF1hsPECncVCAxPlw0SkBMjckidl4WnoQVL4Jr86GW5dPc6N9Sk2Wmps8iEyJEwPBRcGtAv-uh8O4_RGCeYZqc3go2ZU3KHNH54k7ohVo-ae8UzUCK5mYg7GoS_p0tNVqS5TmYXm3xvJnaosQsTf63P_29CWgIsXKf4GzjVH3gOSyQjXOzHH8yuj0qgf84F2nXkYmdH8fLWX3QGmWEf3iMq92Hv9F-ZISzxqEaC43VJIH2xcrHa-z6vu_vQEYImmt-Uj7aIYuojNtZqOh_iQBAWdAFi7U-fZzblFZlrUddaq_ieCt6gPkILcc3o0Sldp5oYyz-pSh-CtmPSrVK1n2jOUNfvKF4La0nUZDem91axNIkUqD2p-f5-EZGHsXX4Q78TAl-oOZR9BBti8qxQfSIcBdq_kha59upNUSKMQ07hsLAHJPS17BgGQTG2wYmmX2SrHc5M2FjdsHuXU-uowX7dkDrLQ1s4a3DzC8DzbeHNGeMEpTz9HLWK7lNRgoVd7KKLxeZhGojGExOO8D2PTZydM5camTDX1w5MN_JuhrA3uEv-6YX-MAoeBYohFXeFRaiZipxD9z6X0GWRlqlPKJoBFbpUuzyx1V2D8BuLt6gy36_IMR3Y_-dvXf6YOqEow-54i1egb9IlgFVmBSE99aLM_5elF3ci0WtqzsK08ynd0R4enjRvlBrQEzTvq6N_b2dKwNwcMfhT7xY-OdMV9DRf_jHj68Svgv76IITGdP5fLaE97t796P_R_2En0FCEtdYEb3ixxRRfv_Fy09PRl9E-13PWTnFIhswQzCtnDvQoL75N&p=MFbVGOYyXwIo=PsKtOYIB3Rd5Kmg0p5bPmtkBasldIeyqgpn4ZFAaK26zxF3Uv1UjuiCljT6Cc6ag960Qhv_H-xAldXtkgBMhs_M3BjUvkwZnY4THoP6KGI5WJcxc_Ue8IjVh-M_JkpwMzuBMguc4hPHqfiKT5obWSxgsbsvz2ZinOcaXZoQGjxSsen7jXgK-_vADvTBLOBaB4fNh196HNiYfPQOinJxehXbA-BjzDhh1-Trvc3_KrKyExKJ7Vdhph_DB2wOrnwkXEN3JbS-E6XLPRdModp-Gl-iqpojl5p-Ywi9o41FRGQmB9O_bu-8GQ1z9NYf4bHw58T3O-t2dU9k5cOwi6lHcFg5ldpq2f24YCjOVlju1ybHU9T4m770Tp5LDqQPo0Go_J-jA6P52mkhIj-ke7aGbIAzlKfdjbTor85K4d0wcj36icJ7Ni9l1T1kVwCRpfZTFpt2fXrsA3GIEo5jFcwrzSoliy4hViAqDsOdpd2hBdAzTrTmwfl19b2MlIKUlGLs3JXK8WeAA9PqScymfj04GTMASY4pbtDYKh1cnUI2TdPgdTUyV81ITifQFoOcCVAMwbKaihV-uW4O6celPqTFXsZcJSaHHmfbHYoxLpVyAZI0TxUlupaZKpgvE8IE3mkUSIkhYtx6pjGtjEnk0UHW1_fxC8MSTDwCSdMI-1HvjEOWHkt4oHvJk1PW7n4QgrZi0wsaxrODv4_Oatp6T1AVknzWYmW6CxsBGYCdcymnLu7sPLh44RHbcYeet2ARNTBw5quHc-Mb4VjHJQ48Sr72ylSw26y-n0KDS4mv_vakBDNfcNHOcGeIMjIZBifknphjaF1IBVk_1F3wKa7cYzCL8LP1qSxsqjPWY2YlC4caIIUlruZZa45ddC_GYjIdoOem9sXLylPVXqCI8GWLhqCldq8xA6JMLfUDbdSA_PDJz8-Xbfu3pYwWuAJz8nuD3nz8Ugv6e4TLNrpSyM_FI7zcb7TpT1_GdeEZ_rlvh6Jit02U6v45hkzLSvNmOWPoEizfc2ccGYCDB-8Q8BWYQoDhDC5kAmFl5dSwnJuUpzIvNt2skSZbXjxVxAzSuFouymnQu-RNnuUJp7cVoGnzb41Jj72Zb_87MGI7YexcSzNQAxqU_O0pai-zmbtB1-iYsDCOsQnUdyYVo1I2fwSC3dZ9vdSfsyRdAUZRytgs9jcId2vCpj6ScmIZQt2NNlb-t2VVlk-j0_0AhIrlUbs0D0lcwZTtvGUNuw3ZhnbMz70gAbY2nUlQCoHQSqpFJlSqoFAqeNu4mzv9l5ttdxkmYpimJQAjdwDzUUb7oLagvgh3L6eyFIHMqGHDsASZApvfogI_lWAiFidgER8sODXRL-ifr6846MlQexJXOr&p=tYFg4QJ5A6eY%3DVpUK7bR_CQ5fNauEN4OUvreV1zEWAEyfzWKJ_WftXaUZBpG8nVFodcTX9adD86Vu7OLcU2D3o-d60djI34TDFd4sRrFe6w_EE_YLdermpfUh1DYAigF5if3U6Bt_rjNrnB5pDkWlqMubQ-MYRXE7WUNJ5sPYbBgphCC9DxCS_0vW80SbhreuNWbNSdajzSaGiSpBW-HnFPRIzsfz0gWS3awSemA14T1OAfKJzm37hm4zv1rtE2FKETmnJwE7Xye0vdO7JsnFJdaT59O5GBbRcST9eJFFc2KJoLX-8JBUvLOBRySos7dzpkVPD4eHvNWQ5DJwM6JmggMH6AecCv_OM70DrviHOye0uAuPqNpPqF-qVCKg-iHquFu5_4mDgmuh6GMSio3FZU4j2wxI0hW5ishLDsb15nMDnZgZVX0eob3C4Z50X1RpVOcEBlcQfQbc0sFCMjR-_5hrbrJqRktcS5jjUC4UTMhaJh0lj3hs_rZPU_-vfvzwebBtTeD9McBmgUfzoOlpFVDmCb3m9kAiwS4hRaBpiOiTZ5UHG5IRfOjScT2rHX6m_HoSR66TNBSnd9w_dFOVFzQzhQuhQ3ua_8qxhMnGRnl0YxDA4yp5RjoGILz_qeRzZs93LcvkOm0y7OfhQGk2w7QTo87zmDsHbAFk-sp7tRsIZx2tODllmiVUdIhgRg2I69lvF_ESrLe-P-m4Lcv4sOueibdAIrYX5ZRk7YflRwU81sCIZ_EWOmLwBkOzBX9EovDGRGUjW7zxb9ODRHy-ybqbxssjxjTCCF2Z0L66P8oIdbVLhK1uhrfdUYJhvlnuGP02kINlstRwxFSqKVY6Y6eys81wDJNO-sEpdk39kUDADt5k-LLesG8wgbnfCqGNuEEWlf_62Rra9lsW-XVjcoP-znNqyb-OtzJk_U7nxm2qD0dbJDIK2Jx3QZmRdwWtdFnRCnO1JnaS5z9vMbU0iDiRT-yc5u6_VWSS4xMyya6zXMtYL7K3owitXctdT8UAxyqEPGKoLfOpz7Q8GLQX7mu7d2wU6rjNohOzTXwoYci_JWp-O113NY8WmOrChlGE09g6kxhF6rISZhmQfeLLP-8rnz3fjwqmi-UF2HjY1hCyFMFoXIc-5xOmENoV9YtSd6IqUN_KHYKJfnYCHKdU0KYjuknZZFMXMqzG3KffQHwUsRYhiwDw75uV1YCNy_dapsc4KLC-4Yj92WI-MQhOVRbZs5XuwVj8NHWvvjy3dO7SaxX-Uw-WFUz8VcxT3Q93gHvVAOwu6rkUT-OPV15xAW_2mhAQJIXRWeOruX9X0xgXLseGiXgJZToZ2PDNuktV5gaX72z9SqdJh4BUvK1NH6Pwu5P3bA3Um5jfGv2s29kRXPau2j7H_zGNYz6SycxAWSjeFiChCX3z';

        process.env.YOUTH_LOOK = 'p=nCWwRj3eGxCw%3DOY4T2_YuUnfP5ROhYPgCFKsXGbtqChDirkcp6si0I-JdjVsB51SupRCHWk6fU1PYd9LZEuNpetKS4mz3RXBxM4sjv_FTvkbHGUWbdlUxlf1YSrKbbCoXAN2BO3QxnHNqERw1KIEHpWkTa3hjqLCsD61A33xm8yYhY2jJfRMEgNyI8GvxBMSxTZ_Tlzk2nAJGwu-NndGTKgi2x-JSEIjGJ82Dj7-5_rxUKDlK37GT8gAwts7zNFNb17b5Qsy35w8xF-DJM2-zuzobcU9I-yspFftJtuev03BRIAek9Wz-wmxtuPQfMQsiTfbFT3Sf5OLcdGsMhqzIhwixohZof8Exf_6ma9KCMhavTLUx7ZECIsfQtqJp0eEdBPkv_CiMgpO-W9GWfR_D4F4IL4nMIQhe6bu8d6lHWvxrg_iwgsJJx7wVxhRa76X-Myc5fPAyaqZ8tNg91Ch2QaoSZOHa8g9y6xgMMwmZoG1iTha84jWJherhelQ28ES_qSFJFz_P-ie_4JqfCYyuWo8lh2b6kEOkupvubDlso0fOjHqB2WrAKEMYR_gVnhLpLfeD8_d0OovhPJWx1RN2gLrf_Sf0igh0JyZ0YXnV2mWCew3E5Rl4XDcAg-SK-oyxUyky2Xbe1t-MIncHMu0qpkLC30zpsl09HjVSiVUjUTzE2EKiHsWBL9EJ4pwClOzwVYHZEsDl-h6Z0tPRcC5CnA_4zHcCCX4qag7jZI4dpRYPCM1BLJpJrHZH3PRMzdPjAMf1kHQJ_ih4zZN9k8D8c5EdZ88dEnu2H5pdtBU71D1ed-juMzwm3WAueC6mbp7KQSuPno95FTbWhGLWj_po5B9p2Gbua6RVi0_as9nb8y_k47NYNroQOVICum58PrJETPuzkyDyq22NHLomKbJmVJoX2No0EqF0ANoHvb98vZtm2zIBetyDtJpqjQmoI84BygqlVlvxes8leNkwm06gSMfEZxWitaMzrG1yx_o6WLZHVw3cf4-n-KDVSKrE5HPDBnvIStdp2lXAheXAcdDJpx216yX8I7z9DdGWyl1Jhzu63pr5pGrUXdCKdpE6XYr1Z8Ps8GYiBUN-E17h2ktbzV6jq0ZBa_HdHv4gp_BxpFT2wz8P59fACNaQ3K7jEpFLO9kn2x57twLvm1ATFfb1Q_O7hZA8ibkIMtKtYiElt9qGmNdi5bABbk1Pb0dv8n2HR7cV_MFW6FaTiNCMLch6Alc-pRx-kKUKeY2iTjBd2Isb3bVepSIJ5NhkfG4c3EIgdhI3QvvaJ3s22KmIAI3aZsNLT16n6mnklCHlxoFkmC4p&p=aFbVGOYyXwIo=PsKtOYIB3Rd5Kmg0p5bPmtkBasldIeyqgpn4ZFAaK26zxF3Uv1UjuiCljT6Cc6ag960Qhv_H-xAldXtkgBMhs_M3BjUvkwZnY4THoP6KGI5WJcxc_Ue8IjVh-M_JkpwMzuBMguc4hPHqfiKT5obWSxgsbsvz2ZinOcaXZoQGjxSsen7jXgK-_vADvTBLOBaB4fNh196HNiYfPQOinJxehXbA-BjzDhh1-Trvc3_KrKyExKJ7Vdhph_DB2wOrnwkXEN3JbS-E6XLPRdModp-Gl-iqpojl5p-Ywi9o41FRGQmB9O_bu-8GQ1z9NYf4bHw58T3O-t2dU9k5cOwi6lHcFg5ldpq2f24YCjOVlju1ybHU9T4m770Tp5LDqQPo0Go_J-jA6P52mkhIj-ke7aGbIAzlKfdjbTor85K4d0wcj36icJ7Ni9l1T1kVwCRpfZTFpt2fXrsA3GIEo5jFcwrzSoliy4hViAqDsOdpd2hBdAzTrTmwfl19b2MlIKUlGLs3JXK8WeAA9PqScymfj04GTMASY4pbtDYKh1cnUI2TdPgdTUyV81ITifQFoOcCVAMwbKaihV-uW4O6celPqTFXsZcJSaHHmfbHYoxLpVyAZI0TxUlupaZKpgvE8IE3mkUSIkhYtx6pjGtjEnk0UHW1_fxC8MSTDwCSdMI-1HvjEOWHkt4oHvJk1PW7n4QgrZi0wsaxrODv4_O1WcEYas1dJJfffKcq8mjur6tDy8_z7Vy6rWeK0lgkAE4XCjy4m_M4JD6492R2JMgnElihKBP4Mq9g51WKfVryc2XabBLtdmzHmssOY2UrZbzi9J081ZbdZ-8gPawJNg-wnD3nbTmof6wYXfWVHgIHeR76ZhfWCMyTrowpgEbqBOBu7_NZx_aWHYnF4147X2QO2IPukeuKL35vt6YZHuUtxMCfO-3wco8x7WoDghvhqoa6RvPsH4ReFmT5CWoWleugNpAHOKK4Rp_jmsNhYHIXBWr4hm5XLnubc2gu59o3mpdjWFXcZMeTGyMHjs3YuuejsmO5g77hLWL52sdUHxsTf71c3ZzSZ4dhnOncn_TrrUpw26ilGItMjyYc9nkZZD6a9_t0Azd7C9N15pbJFvvv3ITx99i2pezmPPMf6oB-pXPCcD2674gYb1KgzbpXgCdx3I3gg-G6iN8FtNrNKq_oJLP06AZzF11qNXpLKZzDBaX6ia4W3sFfpw47WcSUnMUlUC3RQoK23EVP1SMPaYZft7ayZpyBADD8RPmVqffCQuUpot6-hNU_77FmXq0kKzmqb5ovBE65kJpJzHJdzP0Dykyk0mgBAgI24xDC7pN9uB3cm1LFVtTge8i4utdhnzVx24DMEnkvKdUe0_sopU49B&p=aFbVGOYyXwIo%3DPsKtOYIB3Re_Ph0xavVPnewQ5xRMaeXyth4hMXgp-WqamDpBbbI8hZ3IWO_46mBj1_1cfzQCuPK9MRmT5pem6se4_sdLt_Py8mo0Wj-3jv2ELlID6QzWsKQ8b36oSu1M4Q_cUxyCSLJPQY_MiVlM85qr5nsa7e8Q6nJ4q0wP-OlSTmKioCqstyfPubO4gLa8HZjTUdDVXs0yh23I1eOWQ8Sq3ixuL7RhJQRyRDOz10wI5W5liZM5lEP5uJGrPcZLrVr4Sf8tkpp3NU_WS7vZ18KzMklesTK2pjebRtaqeR0ABXGYPrUpz7fWPisXjOBkGaw9riZNk4mwAViqfmzdX6c_KkxxDfkXlP0swYM4NWHOsIn6R2Z6keiqMsbeSGOY5jZ2sqzS5_fqJouEJtbH9OjCdYsDFA-_Pd-7_PLR0Ajb3WkPd4c1LsSpq58E_C2yyd-DHXfqQJCpsidrlomQlAoC89DCs-nL1igpX6LtIXVicCMKzE7PKKkz3FRTKCGpXxa_cRb9RiG316IBtQKiU-Twxjvq9hYgmRA2fteVqUWn-uahbIjM9AwHaLMtM5NqqIKG2KTPOgtJQPkXrAidHLNO2Bb7Yozyx8vvjCVYvqNILEoAex8dVS-Y_c6DLG1tVtlx93hQMK3IPCrBHix7yA9syZZY8uMuLpNVRrGk3AM_QBBSwRfmBenC1_62UYZTQE-iCxPULrV0yHPM2NhksoTAW-IEJcc2Tbg9Y4GjKXOIorvt59kHfHfULDcIja5_FXGGhD3Fws-mJowTQzKRyTfEqxXqClnJdRd2vmg7q7yemaPLjvvqVlWZLynDNtN6ujwneitcahyJ0oEr0WbaEb69wDcx02i-UdSCvBavEw36AmkHEfG9WU9FNZ4u-YepTgiTzQFdikygJFsMascYsm0YwZffC5RPqq70zIAnxoZ3LjTJb5bKsgVfUdBIJpa2FDzUaGac2pwbYuZNjdD5ZUufqRMOJidsC1qufOlzcR0njEI1VtSrM5gQOD0Ca3EbXi7LSuIDtwKmOydL6IxdO3hW-xGhHRysO60Pu8Bhj5ed6noqVrq5cT0by5XcjeN7jRuQ0BM51ZTp9s_GjP93b8A7XQPEKvoXWwrwOkTkNasP3qrg3MPpF6zgCxCrgXr9ng81MLqxj3Jy7naWQWl1eOKzaSa7efaVPQ8V9f6KnXV_lT6x_LMSMvjUBgagsIbqdBItsXqiQT1X5A1jQyT6ZiOm8ADt_ranUYl75YTLvp_-PdipLaxrOXXpeK3IWL5VwH6H991Mr_rlGYfe9FekpVy1yevt_-xiSbRzTDN-xRZPkuSCuEx2cPGFRK2KWdPZzcu-FromiFMWt8L8Qo-IecYfhxBPneyfTq43pQq7Ll_yJ6vaMCvLXxZC9AbLA3Tln';
        if (process.env.YOUTH_START && process.env.YOUTH_START.indexOf('&') > -1) {
            StartBody = process.env.YOUTH_START.split('&');
        } else {
            StartBody = [process.env.YOUTH_START]
        };
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
