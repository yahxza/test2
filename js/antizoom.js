var obj=document.body;  // obj=element for example body
// bind mousewheel event on the mouseWheel function
if(obj.addEventListener)
{
    obj.addEventListener('DOMMouseScroll',mouseWheel,false);
    obj.addEventListener("mousewheel",mouseWheel,false);
}
else obj.onmousewheel=mouseWheel;

function mouseWheel(e)
{
    // disabling
    e=e?e:window.event;
    if(e.ctrlKey)
    {
        if(e.preventDefault) e.preventDefault();
        else e.returnValue=false;
        return false;
    }
}