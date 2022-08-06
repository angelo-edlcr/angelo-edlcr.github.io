const mouseCursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e)=>{
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
});

