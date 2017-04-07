/**
 * Created by yc on 2016/12/30.
 */
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext( '2d' );
$(function(){

    draw();

    // 鼠标移入微信图标显示二维码
    $('.share a:eq(0)').hover(
        function(){
            $('.wechat-code').show();
        },
        function(){
            $('.wechat-code').hide();
        }
    );

    // 鼠标移出导航
    $('.menu-wrap').mouseout(function(){
        $('#blue-block').stop().animate({'left' : '17px' , 'width' : '32px'} , 200)
    });
    // 鼠标移入导航
    $('.menu-wrap ul li:eq(0)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '17px' , 'width' : '32px'} , 200)
        }

    );
    $('.menu-wrap ul li:eq(1)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '83px' , 'width' : '64px'} , 200)
        }
    );
    $('.menu-wrap ul li:eq(2)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '181px' , 'width' : '64px'} , 200)
        }
    );
    $('.menu-wrap ul li:eq(3)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '280px' , 'width' : '80px'} , 200)
        }
    );
    $('.menu-wrap ul li:eq(4)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '393px' , 'width' : '104px'} , 200)
        }
    );
    $('.menu-wrap ul li:eq(5)').hover(
        function(){
            $('#blue-block').stop().animate({'left' : '527px' , 'width' : '68px'} , 200)
        }
    );


    //var c = $('#canvas canvas');
    //var w = c.attr('width' , window.innerWidth),
    //    h = c.attr('height' , window.innerHeight);

    // 改变画布大小
    // 改变画布大小
    window.addEventListener( 'resize', function(){

//            c.attr('width' , window.innerWidth);
//            c.attr('height' , window.innerHeight);
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        draw();
    })



    // 移入选择
    $('.selection').hover(
        function(){
            $(this).find('ul').show();
            $(this).find('.angle').addClass('changeAngle');
        },
        function(){
            $(this).find('ul').hide();
            $(this).find('.angle').removeClass('changeAngle');
        }
    );


    // 选择改变内容
    $('.selection ul li').bind('click' , function(){
        var tag = $('.select-tag label');
        tag.text($(this).text());
    });
});
// 绘制无数星星
function draw(){
    //ctx.fillRect(0,0,w,h);
//        console.log(typeof(w));
    var x, y, r;
//        var gy = 380;
    for(var i = 0 ; i<400 ; i++){
        // 随机生成x
        x = random(10 , w-10);
        // 随机生成y
        y = random(10 , h-10);
        // 随机生成r
        r = random(0 , 3);
        drawStar(x , y , r);
    }
}

//产生随机数
function random(m , n){
    var c = m-n+1;
    var result = Math.floor(Math.random() * c + n);
    return result;
}

// 画星星
function drawStar(x , y , r){

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = '#9AA0AF';
    ctx.fill();
}