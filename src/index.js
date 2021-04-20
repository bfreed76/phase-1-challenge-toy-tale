let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-toy-btn"); //~ declarations
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector("#toy-collection");
  // const newDiv = document.createElement('div');
  // let TOTAL_DRIVCERS = 0
  const baseUrl = "http://localhost:3000/toys"
  
  fetch(baseUrl)                    //~ fetch toys
    .then (response => response.json())
    .then (data => {
      renderToys(data);
      // console.log("1" + data);
    });

        //  newList.innerHTML = data[element].name;
        //  (other key values/properties can be added within this loop)
        //  need to create an img div inside 'card' div
        //  toy-avatar class goes to img div
        //   inside imgdiv innerHTML src = ...
        //  toyCollection.appendChild(newList);
    
const renderToys = (toysData) => {
  // console.log(toysData);
  // console.log("3" + id, name, image, likes)
  // for (const key in toysData) {
    //   console.log(`${key}: ${toysData[key]}`);
    // };
  
  const {id, name, image, likes} = toysData
  toysData.forEach(element => console.log(element));
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');

  div.id = id;
  h1.innerText = name;
  h2.innerText = likes;
  image.src = image;
  div.append(h1, h2, image);
  toyCollection.append(div);
};


// const  renderDriverOtherWay = driver => {
  //   const {id, name, img} = toys
  //   //create a bunch of elements, and append them to each other
  //   const div = document.createElement('div');
  //   const h1 = "
  //   const h2 = "
  //   const img = ""
  //   //manually assign later
  
  //   div.id = id
  //   h1.innerText = name
  //   h2.innerText - cards
  //   img.src = img
  //   div.append(h1, h2, img)
  //   drivercontainer.append(div)
  // }
  
  //   create card/renderer
    // one way is to make dynamic string of html
    //creatdiv at some point
    // const cardHTML =
    // <div id=${id}>
    // <h1${name{}>
    // <img src-${img} alt='nupe'>
      // </div>
    // toycontainer.append(cardHTML)
    // -or-
  //}


  // const deleteDriver = driver => {
    //   method" DELETE" 
    //   Headers:...SVGMaskElement
    //     fetch(baseUrl + "/" + event.target.id(might need to add id elsewhere in code))

// }


// addeventlistner on the /form with an action of "submit"

// const postNewDriver = (event) =>
// event.preventdefault()
// //to get submitted values, assign each an id and use .value on those ids or,
// // event.target[0], event.target[1].value, to find values. You can loop over them...event
// const inputs  = event.target
// const [name = inputs[0].value
// const car = inputs[1].value
// const img = inputs 2.value
// ++ TOTAL_DRIVERS

// //object to send with all th eheaders, body and request type
// const reqObj = {
//   method: "POST"
//   headers: {
//     "Content-Type": "application/json",
//     "Accepts": "application/json",
//   }
//   body: JSON.stringify({
//     "name": name,
//     "car": car,
//     "id": TOTAL_DRIVERS,
//     "img": img
//   })

//   fetch(baseUrl, reqObj)
//   .then(response => response.json())
//   .then(newDriver => {
//     console.log(newDriver)
//     renderDriverInnterHTML(newDriver);
//   }
//   }
//   }
// }





  addBtn.addEventListener("click", () => {              //~ hide/seek addbtn
    // hide & seek with the form
    addToy = !addToy;   //? How does this work?
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});
