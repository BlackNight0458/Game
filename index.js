
var Classic = document.getElementsByClassName('Classic')[0]; 
var text = document.getElementsByClassName('text')[0];
var Insane = document.getElementsByClassName('Insane')[0];
var Endless = document.getElementsByClassName('Endless')[0];
var txt = document.getElementsByClassName('txt')[0];
var i = 0;
var t = 1000;
var key = 1;
//经典
Classic.onclick = function () {
    text.innerHTML='得分:'+i;
    Classic.style.display = 'none';
    Insane.style.display = 'none';
    Endless.style.display = 'none';
    // txt.style.display = 'none'; 
    text.style.display = 'block'; 
    key = 2;  
    i=0;    
    var timer1 = setInterval(function () {
        var con = document.getElementById('content');
        var div = document.createElement("div");
        div.setAttribute("class","ball");
        con.appendChild(div);
        var timer2 = setTimeout( function() {
            div.remove();
            i--; 
            text.innerHTML='得分:'+i;
        }, 1000);
        var a = Math.floor(Math.random() * 94) + 1;
        var b = Math.floor(Math.random() * 90) + 1;
        div.style.top = a+'%';
        div.style.left = b+'%';
        div.onclick=function () {
            clearInterval(timer2);
            div.remove();
            i++;
            text.innerHTML='得分:'+i;
        }
        if(i<-9){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            i=1;
            txt.style.color = 'green';
            txt.innerHTML = '重新开始'
            txt.style.display = 'block'
            // Classic.style.display = 'block';
            // Insane.style.display = 'block';
            // Endless.style.display = 'block';
        }
        if(i>9){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            i=0;
            txt.style.color = 'rgb(2, 255, 242)';
            txt.innerHTML = '经典模式,胜利!'
            txt.style.display = 'block'
        }  
    },1000);
}
//疯狂
Insane.onclick = function(){
    text.innerHTML='得分:'+i;
    Classic.style.display = 'none';
    Insane.style.display = 'none';
    Endless.style.display = 'none';
    // txt.style.display = 'none'; 
    text.style.display = 'block'; 
    i=0;
    key = 2;      
    var timer1 = setInterval(function () {
        var con = document.getElementById('content');
        var div = document.createElement("div");
        div.setAttribute("class","ball");
        con.appendChild(div);
        var timer2 = setTimeout( function() {
            div.remove();
            i--; 
            text.innerHTML='得分:'+i;
        }, t);
        var a = Math.floor(Math.random() * 94) + 1;
        var b = Math.floor(Math.random() * 90) + 1;
        div.style.top = a+'%';
        div.style.left = b+'%';
        div.onclick=function () {
            clearInterval(timer2);
            div.remove();
            i++;
            text.innerHTML='得分:'+i;
        }
        if(i<-9){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            
            i=1;
            txt.style.color = 'green';
            txt.innerHTML = '重新开始'
            txt.style.display = 'block'
        }
        if(i>9){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            i=0;
            txt.style.color = 'rgb(2, 255, 242)';
            txt.innerHTML = '疯狂模式,胜利!'
            txt.style.display = 'block'
        }
        if(i>8){
            t=100;
        }
        if(i>6){
            t=300;
        }
        if(i>3){
            t=500;
        }else{
            t=1000;
        }
    },t);
}
//无尽
Endless.onclick = function(){
    text.innerHTML='得分:'+i;
    Classic.style.display = 'none';
    Insane.style.display = 'none';
    Endless.style.display = 'none';
    // txt.style.display = 'none'; 
    text.style.display = 'block'; 
    key = 2;     
    i=0; 
    var timer1 = setInterval(function () {
        var con = document.getElementById('content');
        var div = document.createElement("div");
        div.setAttribute("class","ball");
        con.appendChild(div);
        var timer2 = setTimeout( function() {
            div.remove();
            i--; 
            text.innerHTML='得分:'+i;
        }, 500);
        var a = Math.floor(Math.random() * 94) + 1;
        var b = Math.floor(Math.random() * 90) + 1;
        div.style.top = a+'%';
        div.style.left = b+'%';
        div.onclick=function () {
            clearInterval(timer2);
            div.remove();
            i++;
            text.innerHTML='得分:'+i;
        }
        if(i<-9){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            i=1;
            txt.style.color = 'green';
            txt.innerHTML = '重新开始'
            txt.style.display = 'block'
        }
        if(i>29){
            clearInterval(timer1);
            clearInterval(timer2);
            text.style.display = 'none'; 
            div.style.display = 'none'; 
            i=0;
            txt.style.color = 'red';
            txt.style.color = 'rgb(2, 255, 242)';
            txt.style.display = 'block'
        }
    },1000);
}
//重新开始
txt.onclick = function() {
    Classic.style.display = 'block';
    Insane.style.display = 'block';
    Endless.style.display = 'block';
    txt.style.display = 'none';
}


 

