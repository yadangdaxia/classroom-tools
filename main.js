
const form = document.getElementById('random-order-form')
// console.log(form)
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const studentString = document.getElementById('random-names').value
  const studentArray = studentString.split(',')
  console.log(studentArray)
  const mixedArray = mix(studentArray)
  console.log(mixedArray)

  const displayArea = document.getElementById('random-order-result');
  console.log(displayArea)
  displayArea.textContent = mixedArray
})





function mix(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array
}
