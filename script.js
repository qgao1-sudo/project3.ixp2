// Page 3 button interaction

const fiveBtn = document.querySelector("#fiveBtn");

if(fiveBtn){

  fiveBtn.addEventListener("mouseenter", ()=>{
    fiveBtn.textContent = "Five？？？";
  });

  fiveBtn.addEventListener("mouseleave", ()=>{
    fiveBtn.textContent = "Five";
  });

  fiveBtn.addEventListener("click", ()=>{
    alert("Congrats! Page 3/5 unlocked (2 left to go)");
    window.location.href = "page4.html";
  });

}

const interactBtn = document.querySelector("#interactBtn");

if (interactBtn) {
  let dodged = false;

  interactBtn.addEventListener("mouseenter", () => {
    
    if (dodged) return;
    dodged = true;

  
    const dx = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 40); // 40~80px
    const dy = (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 20); // 15~35px

    interactBtn.style.transform = `translateX(-50%) translate(${dx}px, ${dy}px)`;
  });

 
  interactBtn.addEventListener("mouseleave", () => {
    interactBtn.style.transform = "translateX(-50%)";
    dodged = false;
  });

 
  interactBtn.addEventListener("click", () => {
    alert("Nice! You passed the interaction test ✅");
    window.location.href = "page5.html";
  });
}


const finalBtn = document.querySelector("#finalBtn");

if (finalBtn) {
  finalBtn.addEventListener("mouseenter", () => {
    finalBtn.textContent = "DDL: 11:59pm tonight!";
  });

  finalBtn.addEventListener("mouseleave", () => {
    finalBtn.textContent = "Submit";
  });

  finalBtn.addEventListener("click", () => {
    alert("Roman：You’re just clicking it now? You’re late!Redo it！😡");
    window.location.href = "<!doctype html>.html"; // 如果你第一页不是 index.html 就改成你的第一页文件名
  });
}