

/* juanshen
独立COOKIE文件
github地址 https://github.com/rzrcazk
TG频道地址  https://t.me/juanshenscript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://cdn.jsdelivr.net/gh/rzrcazk/app_scripts@2.2/juanshen.boxjs.json

转载请备注个名字，谢谢

方式一
在boxjs里选择复制会话 粘贴至cookie1处



方式三
把每一个ck在分别``里面填写，多账号换行 

*/

modulees = 1 //1 选择方式一 3 选择方式三





//方式一
let cookie1 = {}













let refreshtokenVal= ``
let iboxpayvideoheaderVal= ``
let iboxpayvideobodyVal= ``


let cookie3 = {

  refreshtokenVal: refreshtokenVal, 
    iboxpayvideoheaderVal: iboxpayvideoheaderVal,  
      iboxpayvideobodyVal: iboxpayvideobodyVal,   
  
}



if (modulees == 1) {
    module.exports = cookie1
}

if (modulees == 2) {
    module.exports = cookie2
}


if (modulees == 3) {
    module.exports = cookie3
}
  


