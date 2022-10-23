// const buttonUse = document.getElementById("bg").className;

// buttonUse.addEventListener('click', function(){
//     buttonUse = buttonUse.classList.add('active')
// })
// let index = 0

// const activeButton = n => {
//     for (butt of buttonUse) {
//         butt.classList.remove('active');
//     }
//     buttonUse[n].classList.add('active');
// }


// function submit() {
//   let index = 0;
//   let button = document.getElementById("bg");
  let search = document.getElementById("bg").className;
//   if (search == "butt") {
//     button.classList.add("active");
//   } else {
//     button.classList.remove("active");
//   }
// }


window.addEventListener('click', function(event){

  if(event.target.dataset.action === 'but'){
    const buttonGroop = event.target.closest('.counterBut')
    const buttonWrapper = buttonGroop.querySelector('[data-action]')
      if (search == 'butt'){
      buttonWrapper.classList.add('active')
      console.log.apply(buttonWrapper)
    } 
    
  } 
  
  



})