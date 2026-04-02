function openCard(){
  document.getElementById("popup").style.display="block";
}

function closeCard(){
  document.getElementById("popup").style.display="none";

  const t=document.getElementById("toast");
  t.style.display="block";

  setTimeout(()=>t.style.display="none",3000);
}
