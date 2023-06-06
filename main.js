const togglings= document.querySelectorAll('.toggling');
togglings.forEach(toggling =>{
  const icon= toggling.querySelector('.icon');
  const answer=toggling.querySelector('.answer');
  toggling.addEventListener('click',
  function(){
    /*icon.classList.toggle('active');
    answer.classList.toggle('active');*/
    if(icon.classList.contains('active')){
      icon.classList.remove('active');
      answer.style.maxHeight = null;
    }
    else{
    icon.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight+'px'}
  })
  
})
;
let opens=document.getElementById('open');
let closes=document.getElementById('close');
let opensmenu=document.getElementById('openmenu');
opens.addEventListener('click',()=>{
  if(opensmenu.style.left!="0px"){
    opensmenu.style.left="0px"
  }
});
closes.addEventListener('click',()=>{
  opensmenu.style.left="-200px"
})
new TypeIt(".multipleStrings", {
  strings: ["This is a great string.", "But here is a better one."],
  speed: 50,
  waitUntilVisible: true,
}).go();