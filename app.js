
var div = document.getElementById('side')
var display = 0



function tog() 
{
    if (display == 1) 
    {
        div.style.display = 'block';
        display = 0
    }
    else
    {
        div.style.display = 'none'
        display = 1
    }
    
}