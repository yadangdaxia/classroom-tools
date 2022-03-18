
randomOrder()
randomTeams()
drawNamesFromHat()

function randomOrder() {
  const form = document.getElementById('random-order-form')
  // console.log(form)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let item = document.querySelector('ol');
    // console.log(item, "LIST ITEM")
    item.innerHTML = " "

    const studentString = document.getElementById('random-names').value
    const studentArray = studentString.split(',')
    // console.log(studentArray)
    const mixedArray = mix(studentArray)
    // console.log(mixedArray)
    const displayArea = document.getElementById('random-order-result');
    // console.log(displayArea)
    // displayArea.textContent = mixedArray
    mixedArray.forEach((student) => {
      let listItem = document.createElement('li');
      // console.log(listItem, "listitem")
      // console.log(student, "list of students should be here")
      displayArea.appendChild(listItem);
      listItem.textContent = student
    })
  })
}

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

function randomTeams() {
  const form = document.getElementById('random-teams-form')
  // console.log(form, 'randomteamsform')
  form.addEventListener('submit', (e) => {

    e.preventDefault();
    // console.log(e, 'event')

    let list = document.getElementById('random-teams-output');
    console.log(list, "LIST ")
    list.innerHTML = " "

    const studentString = document.getElementById('student-names').value
    // console.log(studentString, "<- should return string of names");

    const shuffledStudents = mix(studentString.split(','))
    // console.log(shuffledStudents, "<- should return shuffled students");

    const studentsPerTeam = document.getElementById('students-per-team').value
    // console.log(studentsPerTeam, "<- students per team");

    // const numberOfStudents = shuffledStudents.length
    // console.log(numberOfStudents, "<- number of students");

    let teams = [];
    while (shuffledStudents.length) {
      teams.push([shuffledStudents.splice(0, `${studentsPerTeam}`)])
    }

    const displayArea = document.getElementById('random-teams-output');
    // console.log(displayArea, "DISPLAY AREA")

    teams.forEach((team) => {
      // console.log(team, "TEAM")
      let listItem = document.createElement('li');
      // let textNode = document.createTextNode('Team Number')
      displayArea.appendChild(listItem);
      listItem.innerHTML = `${team}`
      // document.body.insertBefore(listItem, textNode)
    })
  })
}






function drawNamesFromHat() {
  const form = document.getElementById('names-in-hat-form')
  console.log(form)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e, "EVENT")

    let item = document.getElementById('hat-list');
    // console.log(item, "LIST ITEM")
    item.innerHTML = " "

    const studentString = document.getElementById('names-for-hat').value
    const studentArray = studentString.split('\n')
    // console.log(studentArray)
    const mixedArray = mix(studentArray)


    // display mixed array in hat
    const hatList = document.getElementById('hat-list')


    mixedArray.forEach((student) => {
      let studentName = document.createElement('li');
      hatList.appendChild(studentName);
      studentName.textContent = student
    })

    // console.log(hatList, "HAT LIST");
    // console.log(mixedArray, "MIXED ARRAY")



    const displayArea = document.getElementById('display-drawn-name')


      const drawNameBtn = document.getElementById('draw-a-name')
      drawNameBtn.addEventListener('click', (e) => {

        while (mixedArray.length) {
          const random = Math.floor(Math.random() * mixedArray.length);
          const toRemove = mixedArray.splice(random, 1);
          displayArea.textContent = `${toRemove}`
          console.log(mixedArray, "updated MIXED ARRAY");

        }
      })





  })
}












// function createGroups(arr, numGroups) {
//   const perGroup = Math.ceil(arr.length / numGroups);
//   return new Array(numGroups)
//     .fill('')
//     .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
// }



    // const groupedStudents = [];
    // console.log(groupedStudents, "grouped students array")

    //   let i, j, temp, chunk = 10;
    //   for (i = 0; j = numberOfStudents; i < j; i += chunk) {
    //   temp = array.slice(i, i + chunk);
    //   console.log(temp);
    // }


    // sliceIntoGroups(shuffledStudents, studentsPerTeam)

// function sliceIntoGroups(array, groupSize) {
//   const newArr = [];
//   for (let i = 0; i < array.length; i += groupSize) {
//     const chunk = array.slice(i, i + groupSize);
//     newArr.push(chunk);
//   }
//   console.log(newArr);
//   return newArr;
// }
