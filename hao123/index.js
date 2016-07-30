localStorage=window.localStorage;
var css = document.getElementById('color');
var key = 'theme';
function changeStyle(a) {
    css.setAttribute("href", "css/color" + a + ".css");
    localStorage.setItem(key, a);
}
window.onload=function(){
    var a=localStorage.getItem('theme');
    if (a>0) {
        css.setAttribute("href", "css/color" + a + ".css");
    }

}
// cookie方法
// var css = document.getElementById('color');
// function changeStyle(a) {
//     css.setAttribute("href", "css/color" + a + ".css");
//     if (a == 1) {
//         document.cookie = "theme=1"
//     }
//     if (a == 2) {
//         document.cookie = "theme=2"
//     }
//     if (a == 3) {
//         document.cookie = "theme=3"
//     }
//     if (a == 4) {
//         document.cookie = "theme=4"
//     }
//     if (a == 5) {
//         document.cookie = "theme=5"
//     }   
// }

// var cookie = document.cookie;

// window.onload=function(){
//     var a=cookie.charAt(6);
//     console.log(a);
//     if (a>0) {
//         css.setAttribute("href", "css/color" + a + ".css");
//     }

// }
