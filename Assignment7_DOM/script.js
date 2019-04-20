function squarenumber(){
  var num = document.getElementById('square-input').value
  console.log('The square of' +num+' is equal to '+num**2)
  document.getElementById('solution').innerHTML = num**2
}

function halfnumber(){
  var num=document.getElementById('half-input').value
  console.log('Half of '+num+' is equal to'+num/2)
  document.getElementById('solution').innerHTML = num/2
}

function percent(){
  var num1 = document.getElementById('percent1-input').value
  var num2 = document.getElementById('percent2-input').value
  var percent = (num1/num2)*100 + '%'
  console.log(num1+' is '+percent+' of '+num2)
  document.getElementById('solution').innerHTML = percent
}

function area(){
  var radius = document.getElementById('area-input').value
  var area = (radius**2)*Math.PI
  var area = area.toFixed(2)
  console.log('The area of a circle with a radius of'+radius+' is '+area)
  document.getElementById('solution').innerHTML = area
}
