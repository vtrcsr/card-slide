let count = 1
document.querySelector('#radio1').checked = true

setInterval(function(){
  slide()
}, 3000)

function slide(){
  count++
  if(count>4){
    count = 1
  }
  document.querySelector('#radio'+count).checked = true
}