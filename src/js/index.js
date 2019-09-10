// 登录注册
!function(){
  const reg=document.querySelector('.register'); 
  const cover=document.querySelector('aside');
  const box=document.querySelector('.box');
  const x=document.querySelector('.x')
reg.onclick=function(){
   //给body加类名，body变黑
   cover.classList.add('cover');
   box.style.display='block'
 //登录注册框 
    // 点击x登录注册框关闭
x.onclick=function(){
  box.style.display='none';
  cover.classList.remove('cover');
  
}   
 
}

}()
//渲染数据
!function($){
$.ajax({
    
    url: "http://10.31.157.62/peval_object/h51907/object/php/api.php",
    
    dataType: "json",
    
  }).done(function(list){
    let $strhtml='<ul>';
    $.each(list,function(index,value){
        $strhtml+=`
        <li>
            <a href="detail.html?sid=${value.sid}">
                <img src="${value.url}">
                <h4>${value.title}</h4>
                <p>${value.price}</p>
            </a>
        </li>
        `;
    });
    $strhtml+='</ul>';

    $('.cart-data').html($strhtml);
  });
}(jQuery)
//购物车详情页
!function($){
  let $sid = location.search.substring(1).split('=')[1];
  $.ajax({
    url: 'http://10.31.157.62/peval_object/h51907/object/php/getdata.php',
    data: {
        sid: $sid
    },
    dataType: 'json',
}).done(function (d) { //获取后端返回的数据。
  // console.log(d)
    let $smallpic = d.urls.split(',');

    $('.bg-img img').attr('src', d.url);
    $('.bg-img img').attr('sid',d.sid);
    $('.big-more img').attr('src', d.url);
    $('.data-title').html(d.title);
    $('.price-data').html(d.price);
    //拼接小图片
    let $htmlstr = ''
    $.each($smallpic, function (index, value) {
        $htmlstr += `
            <li>
                <img src="${value}" />
            </li>
        `;
    });
    $('.sm-img').html($htmlstr);
});
//加入购物车
let sidarr = []; //存放商品的编号数组
let numarr = []; //存放商品的数量数组
const gdnum=$('.cart-num');
console.log(gdnum)
//2.1取cookie(假设是第二次点击，获取第一次的cookie),提前约定cookie的key值
//cookie添加，
let myobj = {
    addcookie: function (key, value, day) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + date;
    },
    //获取
    getcookie: function (key) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (key === newarr[0]) {
                return newarr[1];
            }
        }
    },
    //删除cookie
    delcookie: function (key) {
        addcookie(key, '', -1);
    }
}

//将cookie取出转换成数组，利用数组进行判断是否有值(是否第一次)。
function cookieToArray() {
    if (myobj.getcookie('cookiesid') && myobj.getcookie('cookienum')) {
        sidarr = myobj.getcookie('cookiesid').split(',') //cookie存放商品编号的key值(字符串转数组)
        numarr = myobj.getcookie('cookienum').split(',') //cookie存放商品数量的key值(字符串转数组)
    }
}
// $('.cart-add').on('click', function () {
//     //通过当前点击的按钮，获取当前商品的(图片)sid。
//     let $sid = $(this).parents('.detail').find('.bg-img').find('img').attr('sid');
//     // console.log($sid)
//     //是否第一次，获取cookie才能知道是否是第一次。第一次会存储cookie(编号和数量)
//     // cookieToArray(); //取出转换成数组(调用cookieToarray函数)
//     if ($.inArray($sid, sidarr) !== -1) { //存在//通过jquery方法
//         //通过sid获取对应的数量，取出数量+当前新添加的商品的数量。
//         // console.log(numarr);
//         // console.log(sidarr); //当前sid对应的数组的索引位置
//         // console.log($.inArray($sid, sidarr)); //当前sid对应的数组的索引位置
//         // console.log(numarr[$.inArray($sid, sidarr)]);
//         $('.cart-num').text((i,ot)=>{
//           renturn parseInt(ot)+1
//         })
//         let changenum = parseInt(numarr[$.inArray($sid, sidarr)]) + parseInt($('.cart-num').text()++);//原来的数量+当前的数量。
//         console.log(changenum)
      
//         gdnum.innerHtml =changenum;
//         numarr[$.inArray($sid, sidarr)]=changenum;//数组值改变
//         myobj.addcookie('cookienum', numarr.toString(), 10);//继续添加cookie //最后一个参数是天数
//     } else { //不存在
//         sidarr.push($sid); //将编号push进数组
//         myobj.addcookie('cookiesid', sidarr.toString(), 10); //存储cookie ，整个数组。
//         numarr.push($('.cart-num').text()); //将商品的数量push进数组
//         myobj.addcookie('cookienum', numarr.toString(), 10);
//     }


// });

// }(jQuery)
// });
// }(jQuery)
// $('.cart-add').on('click', function () {
  //通过当前点击的按钮，获取当前商品的(图片)sid。
  // let $sid = $(this).parents('.detail').find('.bg-img').find('img').attr('sid');
  // console.log($sid)
  //是否第一次，获取cookie才能知道是否是第一次。第一次会存储cookie(编号和数量)
  // cookieToArray(); //取出转换成数组(调用cookieToarray函数)
  // if ($.inArray($sid, sidarr) !== -1) { //存在//通过jquery方法
      //通过sid获取对应的数量，取出数量+当前新添加的商品的数量。
      // console.log(numarr);
      // console.log(sidarr); //当前sid对应的数组的索引位置
      // console.log($.inArray($sid, sidarr)); //当前sid对应的数组的索引位置
      //$('.cart-num').html=$('.cart-num').html()++
      //$('.cart-num').html()++
      $('.cart-add').on('click', function () {
        //通过当前点击的按钮，获取当前商品的(图片)sid。
        let $sid = $(this).parents('.detail').find('.bg-img').find('img').attr('sid');
        // console.log($sid)
        //是否第一次，获取cookie才能知道是否是第一次。第一次会存储cookie(编号和数量)
        // cookieToArray(); //取出转换成数组(调用cookieToarray函数)
        if ($.inArray($sid, sidarr) !== -1) { //存在//通过jquery方法
            //通过sid获取对应的数量，取出数量+当前新添加的商品的数量。
            // console.log(numarr);
            // console.log(sidarr); //当前sid对应的数组的索引位置
            // console.log($.inArray($sid, sidarr)); //当前sid对应的数组的索引位置
            //$('.cart-num').html=$('.cart-num').html()++
            //$('.cart-num').html()++
            $('.cart-num').text((i,ot)=>{
              console.log(i,ot)
              return parseInt(ot)+1
            })
            console.log(numarr[$.inArray($sid, sidarr)],parseInt($('.cart-num').text()))
            let changenum = parseInt(numarr[$.inArray($sid, sidarr)])+ parseInt($('.cart-num').text());//原来的数量+当前的数量。
            console.log(changenum)
          
            gdnum.innerHtml =changenum;
            numarr[$.inArray($sid, sidarr)]=changenum;//数组值改变
            myobj.addcookie('cookienum', numarr.toString(), 10);//继续添加cookie //最后一个参数是天数
        } else { //不存在
            sidarr.push($sid); //将编号push进数组
            myobj.addcookie('cookiesid', sidarr.toString(), 10); //存储cookie ，整个数组。
            numarr.push($('.cart-num').text()); //将商品的数量push进数组
            sessionStorage.cookienum=numarr.toString()
            myobj.addcookie('cookienum', numarr.toString(), 10);
        }
       
    });
    }(jQuery)


//页面跳转
// !function($){
//   const jump=document.querySelector('.cart');
//   const num=document.querySelector('.cart-num');
//   const empty=document.querySelector('.cart-empty');
//   const have=document.querySelector('.cart-list');
//   const foot=document.querySelector('.cart-total')
//   jump.onclick=function(){
//   num.innerHTML=1
//   window.location.href='http://10.31.157.62/peval_object/h51907/object/src/html/cart.html';
//   //判断num的值，如果值为0显示空页面，如果不为0，显示商品列表页面
  
//   }
//   if(!num.innerHTML){
//     $.ajax({
//       url:'http://10.31.157.62/peval_object/h51907/object/php/api.php',
//       dataType:json,
//       //传送sid
//       data:{
//         sid:$sid
//       }
//     }).done(function(){
//       //sid

//     })
//   }else{
//     empty.style.display='block';
//     have.style.display='none';
//     foot.style.display='none'
//   }
// }(jQuery)
//轮播图
!function(){
  var banner = document.querySelector('.banner');
        var btns = document.querySelectorAll('.banner li button'); //8
        var pics = document.querySelectorAll('.banner img'); //8
        var leftBtn = document.querySelector('.btn1');
        var rightBtn = document.querySelector('.btn2');
        var num = 0; //存放当前的索引。
        var timer = null;

  //让图片自己动
  //克隆元素放在图片第一张前面和图片最后一张后面
  
  for (var i = 0; i < btns.length; i++) {
    //添加自定义的属性(自定义索引)
    btns[i].index = i; //自定义索引
    btns[i].onmouseover = function() {
        //this.index:当前点击的按钮的索引
        num = this.index; //num是整个效果的核心。
        tabswitch();
    };
}


rightBtn.onclick = function() {
    num++;
    if (num > btns.length - 1) { //如果num大于最大的索引值，重新设置为0
        num = 0;
    }
    tabswitch();
}

leftBtn.onclick = function() {
    num--;
    if (num < 0) {
        num = btns.length - 1;
    }
    tabswitch();
}

//切换的过程单独封装--代码重用
function tabswitch() {
    for (var i = 0; i < btns.length; i++) { //清除
        btns[i].className = '';
        pics[i].className = '';
    }
    //切换的核心。
    btns[num].className = 'active';
    pics[num].className = 'show';
}

//自动切换
//每隔2s自动点击右键。
timer = setInterval(function() {
    rightBtn.onclick();
}, 2000);

//鼠标移入banner，关闭定时器，移出，继续开启定时器。
banner.onmouseover = function() {
    clearInterval(timer);
};

banner.onmouseout = function() {
    timer = setInterval(function() {
        rightBtn.onclick();
    }, 2000);
}
  
  
}()
!function(){
  //不能用querySelectorAll,那样名字就分不开了
  const btn=document.querySelector('.without-btn');
  const btn2=document.querySelector('.box-2');
  const icon=document.querySelector('.zhuce-icon');
  const box3=document.querySelector('.box-btn2')
  btn.onclick=function(){
    btn2.style.display='none';
    icon.style.display='block';
    box3.style.display='block'
    box3.onclick=function(){
      location.href='http://10.31.157.62/peval_object/h51907/object/src/html/reg.html'
    }
  }
}()