
//根据选择器获得元素数组
var root=document.documentElement;

if('textShadow' in root.style){
    root.classList.add('textshadow');
}else{
    root.classList.add('no-textshadow');
}


function testProperty(property){
    var root=document.documentElement;

    if(property in root.style){
        root.classList.add(property.toLowerCase());
        return true;
    }else{
        root.classList.add('no'+property.toLowerCase());
        return false;
    }
}