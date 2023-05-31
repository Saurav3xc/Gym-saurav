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

const  accordian= document.querySelectorAll('.faq');
accordian.forEach(faq =>{
  const icons= faq.querySelector('.icon');
  const answers=faq.querySelector('.answer');
  faq.addEventListener('click', function(){
  if( icons.classList.contains('active')){
    icons.classList.remove('active');
    answers.style.maxHeight=null;
  }
  else{
    icons.classList.add('active');
    answers.style.maxHeight=answers.scrollHeight+'px'} })
  
});