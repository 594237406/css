
//根据选择器获得元素数组
function $(selector,context){
    context = document || context;

    var elements=context.querySelectorAll(selector);

    return Array.prototype.slice.call(elements)
}