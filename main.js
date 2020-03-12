! function () {
    var duration = 50

    function writeCode(prefix, code, fn) {
        let domCode = document.querySelector('.code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = prefix + code.substring(0, n)
            domCode.scrollTop = domCode.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `/*
* 大家好，下面我将用 CSS 画个皮卡丘
* 先让代码变得好看一点
*/
.token.selector {
    color: #690;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}
.token.punctuation {
    color: #999;
}
/*
* 我们先画个皮
*/
.preview-wrapper {
background: #ffe600;
}
/*
* 接着画皮卡丘的鼻子
*/
.nose {
width: 0;
height: 0;
border-style: solid;
border-width: 10px 12px;
border-color: black transparent transparent;
border-radius: 50%;
position: absolute;
left: 50%;
top: 26px;
margin-left: -12px;
}
/*
* 接下来画它的眼睛
*/
.eye {
width: 49px;
height: 49px;
background: #2E2E2E;
position: absolute;
border-radius: 50%;
border: 2px solid #000000;
}
/*
* 左眼移到左边
*/
.eye.left {
left: 50%;
margin-left: -114px;
}
/*
* 右眼自然在右边
*/
.eye.right {
right: 50%;
margin-right: -114px;
}
/*
* 来两个眼眸
*/
.eye::before {
content: '';
display: block;
width: 21px;
height: 21px;
background: #FFFFFF;
border-radius: 50%;
position: absolute;
left: 6px;
top: 2px;
border: 2px solid #000000;
}
/*
* 别忘了皮卡丘的红晕
*/
.face {
width: 67px;
height: 67px;
background: #FF0000;
border-radius: 50%;
border: 2px solid #000000;
position: absolute;
top: 83px;
}
/*
* 左右两边放
*/
.face.left {
left: 50%;
margin-left: -160px;
}
.face.right {
right: 50%;
margin-right: -160px;
}
/*
* 然后是可爱的上嘴唇
*/
.upperLip {
width: 65px;
height: 25px;
border: 2px solid black;
border-top: none;
position: absolute;
top: 38px;
background: #ffe600;
}
.upperLip.left {
border-bottom-left-radius: 40px 25px;
border-right: none;
right: 50%;
transform: rotate(-26deg);
}
.upperLip.right {
border-bottom-right-radius: 40px 25px;
border-left: none;
left: 50%;
transform: rotate(25deg);
}
/*
* 画一个嘴巴
*/
.preview-Lowerlip {
bottom: 0;
position: absolute;
left: 50%;
margin-left: -100px;
height: 132px;
overflow: hidden;
width: 320px;
}
.lowerLip {
width: 200px;
height: 2000px;
background: #9B000A;
border-radius: 100px/800px;
border: 2px solid black;
position: absolute;
bottom: 0;
overflow: hidden;
}
/*
* 加上小舌头
*/
.lowerLip::after {
content: '';
position: absolute;
right: 50%;
margin-right: -66px;
bottom: -25px;
width: 132px;
height: 132px;
background: #ff485f;
border-radius: 50%;
}
/*
* 嘻嘻，皮卡皮卡
*/
`
    writeCode('', code)

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })

}.call()