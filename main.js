
let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/*你好，我叫chapel
*我想来试试写一个demo
*首先准备一个div
**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把 div 变成一个八卦图
*看好了
*首先把div变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1 {
   background: linear-gradient(90deg, rgba(255,255,255,1)
   0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)
}
/*加两个乾坤圈
*一上一下
**/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%)}
`;
let string2 = "";

// string = string.replace(/\n/g, "<br>")
let n = -1
let step = () => {
    setTimeout(() => {   // setTimeout() 只执行一次 ; setInterval() 一直执行  使用 setTimeout() 更自由的控制结束时机
        n = n + 1
        if (string[n] === "\n") {
            string2 = string2 + "<br>"
        } else if (string[n] === " ") {
            string2 = string2 + "&nbsp"
        } else {
            string2 = string2 + string[n]
        }
        if (n >= string.length) {
            return;
            // n是索引值，n的值不能等于string的长度，等于长度的时候就跳出
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,999999)
        html.scrollTo(0,999999)
        step()
    }, 50)
}

 step()


