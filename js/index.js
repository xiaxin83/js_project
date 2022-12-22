var ul = document.querySelector(".navItem");
var itemName = ['首页' , 'HTML' , ' CSS' , 'JAVASCRIPT' , 'VUE' , 'BOOTSTRAP' , 'NODEJS' , 'PYTHON3' , ' JAVA' , ' C' , ' C++' , ' C#' , ' GO' , ' SQL' , ' LINUX',  ' JQUERY' , '  本地书签']
for (let i= 0; i<itemName.length;i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
    a.innerText = itemName[i];
    li.appendChild(a);
    ul.appendChild(li);
}