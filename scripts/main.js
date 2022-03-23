
randomOrder()
randomTeams()
// drawNamesFromHat()
magicHat()
// timer()
tabsShow()

window.addEventListener("load", myInit, true); function myInit() {
  // switchOn(tab1), switchOn(tab2), switchOn(tab4), switchOn(tab5)
  switchOn(tab4), switchOff(tab1), switchOff(tab2), switchOff(tab5);
  hideAllTools();
};



function randomOrder() {
  const form = document.getElementById('random-order-form')
  // console.log(form)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let item = document.querySelector('ol');
    // console.log(item, "LIST ITEM")
    item.innerHTML = " "

    const studentString = document.getElementById('random-names').value
    const studentArray = studentString.split('\n')
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
    console.log(studentString, "<- should return string of names");

    const shuffledStudents = mix(studentString.split('\n'))
    console.log(shuffledStudents, "<- should return shuffled students");

    const studentsPerTeam = document.getElementById('students-per-team').value
    // console.log(studentsPerTeam, "<- students per team");

    // const numberOfStudents = shuffledStudents.length
    // console.log(numberOfStudents, "<- number of students");





    let teams = [];
    while (shuffledStudents.length) {
      teams.push(shuffledStudents.splice(0, ` ${studentsPerTeam} `))
      console.log(teams, "teams array after splice")
    }

    // teams.forEach((member) => {
    //   console.log(member, 'MEMBER')
    // })

    const displayArea = document.getElementById('random-teams-output');
    // console.log(displayArea, "DISPLAY AREA")

    teams.forEach((team) => {
      console.log(team, "TEAM")
      newTeam = [];

      team.forEach((member) => {
        console.log(member, "member")
        newTeam.push(" " + member)
      })


      let listItem = document.createElement('li');
      // let textNode = document.createTextNode('Team Number')
      displayArea.appendChild(listItem);
      listItem.innerHTML = `${newTeam}`
      // document.body.insertBefore(listItem, textNode)

    })
  })
}














function drawNamesFromHat() {
  const form = document.getElementById('names-in-hat-form')
  form.addEventListener('submit', (e) => {
    const doneList = document.getElementById('done-list')
    console.log(doneList, 'DONELIST')
    doneList.innerHTML = " "

    e.preventDefault();

    let item = document.getElementById('hat-list');
    item.innerHTML = " "

    const studentString = document.getElementById('names-for-hat').value
    const studentArray = studentString.split('\n')
    const mixedArray = mix(studentArray)


    // display mixed array in hat
    const hatList = document.getElementById('hat-list')

    const alreadyFinished = document.getElementById('already-finished-list')
    console.log(alreadyFinished);
    alreadyFinished.innerHTML = " "

    mixedArray.forEach((student) => {
      let studentName = document.createElement('li');
      alreadyFinished.appendChild(studentName);
      studentName.textContent = student
    })

    // hatList.style.display = 'none';




    const displayArea = document.getElementById('display-drawn-name')

    const doneStudents = [];

      const drawNameBtn = document.getElementById('draw-a-name')
      drawNameBtn.addEventListener('click', (e) => {

        // while (mixedArray.length) {
          const random = Math.floor(Math.random() * mixedArray.length);
          const toRemove = mixedArray.splice(random, 1);
          displayArea.textContent = `${toRemove}`
          // console.log(mixedArray, "updated MIXED ARRAY");
        // }



        alreadyFinished.innerHTML = " "



        const drawnName = document.getElementById('display-drawn-name').innerText
        console.log(drawnName, "<-- DRAWN NAME HERE")



        doneStudents.push(drawnName);
        console.log(doneStudents, "<-- Done Students array")


        doneList.innerHTML = " "

        // while (drawnName) {
          doneStudents.forEach((student) => {
            console.log(student)
            let doneStudent = document.createElement('li');
            if (student !== '') {
              doneList.appendChild(doneStudent)
              doneStudent.textContent = student
            }
            else {
              console.log('no more')
            }
          })
        // }



        mixedArray.forEach((student) => {
          let studentName = document.createElement('li');
          alreadyFinished.appendChild(studentName)
          studentName.textContent = student
          // console.log(mixedArray, "MIXED ARRAY")
        })
      })
  })
  // end of form1
}


function hideAllTools(){

  const randomOrderTab = document.getElementById('random-order-tab');
  const randomTeamsTab = document.getElementById('random-teams-tab');
  const magicHatTab = document.getElementById('magic-hat-tab');


  magicHatTab.style.display = 'none';
  randomTeamsTab.style.display = 'none';
  randomOrderTab.style.display = 'none';
}

function switchOn(tab) {
  tab.classList.remove('switched-off')
  tab.classList.add('switched-on')
}
function switchOff(tab) {
  tab.classList.remove('switched-on')
  tab.classList.add('switched-off')
}


function tabsShow() {
  const tab1 = document.getElementById('tab1');
  const tab2 = document.getElementById('tab2');
  // const tab3 = document.getElementById('tab3');
  const tab4 = document.getElementById('tab4');
  const tab5 = document.getElementById('tab5');

  const randomOrderTab = document.getElementById('random-order-tab');
  const randomTeamsTab = document.getElementById('random-teams-tab');
  // const namesInHatTab = document.getElementById('names-in-hat-tab');
  const magicHatTab = document.getElementById('magic-hat-tab');
  const timerTab = document.getElementById('timer-tab');




  function randomOrderShow() {
    if (randomOrderTab.style.display === 'none') {
      randomOrderTab.style.display = 'block';

      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomTeamsTab.style.display = 'none';
      switchOn(tab1);
      switchOff(tab4);
      switchOff(tab2);
      switchOff(tab5);

    } else {
      randomOrderTab.style.display = 'none';
      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomTeamsTab.style.display = 'none';
      switchOff(tab1);
    }
  }
  function randomTeamsShow() {
    if (randomTeamsTab.style.display === 'none') {
      randomTeamsTab.style.display = 'block';

      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomOrderTab.style.display = 'none';

      switchOn(tab2);
      switchOff(tab1);
      switchOff(tab4);
      switchOff(tab5);
    } else {
      randomTeamsTab.style.display = 'none';
      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomOrderTab.style.display = 'none';
      switchOff(tab2);
    }
  }

  // function namesInHatShow() {
  //   if (namesInHatTab.style.display === 'none') {
  //     namesInHatTab.style.display = 'block';
  //     switchOn(tab3);
  //   } else {
  //     namesInHatTab.style.display = 'none';
  //     switchOff(tab3);
  //   }
  // }

  function magicHatShow() {
    if (magicHatTab.style.display === 'none') {
      magicHatTab.style.display = 'block';

      timerTab.style.display = 'none';
      randomTeamsTab.style.display = 'none';
      randomOrderTab.style.display = 'none';

      switchOn(tab5);
      switchOff(tab1);
      switchOff(tab4);
      switchOff(tab2);

    } else {
      randomTeamsTab.style.display = 'none';
      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomOrderTab.style.display = 'none';
      switchOff(tab5);
    }
  }

  function timerShow() {
    if (timerTab.style.display === 'none') {
      timerTab.style.display = 'block';

      magicHatTab.style.display = 'none';
      randomTeamsTab.style.display = 'none';
      randomOrderTab.style.display = 'none';

      switchOn(tab4);
      switchOff(tab1);
      switchOff(tab2);
      switchOff(tab5);

    } else {
      randomTeamsTab.style.display = 'none';
      magicHatTab.style.display = 'none';
      timerTab.style.display = 'none';
      randomOrderTab.style.display = 'none';
      switchOff(tab4);
    }
  }


  tab1.addEventListener('click', (e) => {
    randomOrderShow();
  })
  tab2.addEventListener('click', (e) => {
    randomTeamsShow();
  })
  // tab3.addEventListener('click', (e) => {
  //   namesInHatShow();
  // })
  tab4.addEventListener('click', (e) => {
    timerShow();
  })
  tab5.addEventListener('click', (e) => {
    magicHatShow();
  })
}



function magicHat() {
  const form = document.getElementById('names-in-hat-form')
  form.addEventListener('submit', (e) => {
    const doneList = document.getElementById('done-list')
    // console.log(doneList, 'DONELIST')
    // doneList.innerHTML = " "

    e.preventDefault();

    let item = document.getElementById('hat-list');
    item.innerHTML = " "

    const studentString = document.getElementById('names-for-hat').value
    const studentArray = studentString.split('\n')
    const mixedArray = mix(studentArray)


    // Display mixed array in hat
    const hatList = document.getElementById('hat-list')

    // const alreadyFinished = document.getElementById('already-finished-list')
    // console.log(alreadyFinished);
    // alreadyFinished.innerHTML = " "

    // Making the list
    mixedArray.forEach((student) => {
      let studentName = document.createElement('li');
      hatList.appendChild(studentName);
      studentName.textContent = student
    })

    // hatList.style.display = 'none';


    const displayArea = document.getElementById('display-drawn-name')
    // const doneStudents = [];

    const drawNameBtn = document.getElementById('draw-a-name')
    drawNameBtn.addEventListener('click', (e) => {

      // while (mixedArray.length) {
      const random = mixedArray[Math.floor(Math.random() * mixedArray.length)];
      // const toRemove = mixedArray.splice(random, 1);
      displayArea.textContent = `${random}`
      // console.log(mixedArray, "updated MIXED ARRAY");
      // }



      // alreadyFinished.innerHTML = " "



      const drawnName = document.getElementById('display-drawn-name').innerText
      console.log(drawnName, "<-- DRAWN NAME HERE")



      // doneStudents.push(drawnName);
      // console.log(doneStudents, "<-- Done Students array")


      // doneList.innerHTML = " "

      // while (drawnName) {
      // doneStudents.forEach((student) => {
      //   console.log(student)
      //   let doneStudent = document.createElement('li');
      //   if (student !== '') {
      //     doneList.appendChild(doneStudent)
      //     doneStudent.textContent = student
      //   }
      //   else {
      //     console.log('no more')
      //   }
      // })
      // }



      // mixedArray.forEach((student) => {
      //   let studentName = document.createElement('li');
      //   alreadyFinished.appendChild(studentName)
      //   studentName.textContent = student
      //   // console.log(mixedArray, "MIXED ARRAY")
      // })
    })
  })
  // end of form1
}































// getUserTime()
// function getUserTime() {
// }

// function timer() {

//   const startStopButton = document.getElementById('start-stop-button')
//   startStopButton.addEventListener('click', (e) => {


//     e.preventDefault()

//     const userMinutes = document.getElementById('minutes').value;
//     const userSeconds = document.getElementById('seconds').value;

//     console.log(userMinutes, userSeconds)
//     // return { userMinutes, userSeconds };
//     // return userMinutes

//     // const startButton = document.getElementById('start-stop-button')
//     // console.log(startButton)
//     const resetButton = document.getElementById('reset-button')
//     console.log(resetButton)

//     let startingMinutes = userMinutes;
//     let time = startingMinutes * 60;

//     const countdown = document.getElementById('countdown');

//     if (time < 0) {
//       console.log('not enough TIME!')
//       let sound = new Audio('images/horse_noise.mp3')
//       sound.play();
//     }
//     else {
//       setInterval(updateCountdown, 1000);
//     }

//     function updateCountdown() {

//       let minutes = Math.floor(time / 60);
//       let seconds = time % 60;

//       let running = true;

//       seconds = seconds < 10 ? '0' + seconds : seconds;
//       countdown.innerHTML = `${minutes}:${seconds}`
//       time--;
//       console.log(time);
//     }

//   });

// }










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
