var Links = {
    setColor:function (color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },//객체와 객체를 구분할 때는 반드시 ,를 써야함!
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    
    Links.setColor('yellow');
} else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
}
}