async function MakeReqest(url) {
    try {
        const responce = await fetch(url)
        if (!responce.ok) {
            console.log('erroe');
        }
        const result = await responce.json()
        return result


    } catch (error) {
        console.log(error);
    }
}
function RenderItems(result) {
    const containeer = document.getElementById('result')
    containeer.innerHTML = ''
    result.map((item) => {
        containeer.innerHTML += `
         <div class="block">
              <img width="100px" src="${item.image}" alt="">
              <h1>${item.name}</h1>
              <p>${item.price}</p>
              

              <button>delete<button/>
         </div>
        `
    })
}
async function FetchData() {
    const url = 'https://63d304794abff88834170d21.mockapi.io/items'
    try {
        const result = await MakeReqest(url)
        RenderItems(result)
    } catch (error) {
        console.log(error);
    }
}

async function PatchReqest(url, data) {
    try {

        const responce = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!responce.ok) {
            console.log('error');
        }
        const resoult = await responce.json()
        return resoult
    } catch (error) {
        console.log(error);
    }
}

async function PutReqest(url, data) {
    try {

        const responce = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!responce.ok) {
            console.log('error');
        }
        const resoult = await responce.json()
        return resoult
    } catch (error) {
        console.log(error);
    }
}

async function uopdateData() {
    const url = 'https://63d304794abff88834170d21.mockapi.io/ss/6'
    const newData = {
        "name": "баель кандай",
        "age": "fdsfsdfsdf",
        "adress": "213",
        "avatar": "https://cojo.ru/wp-content/uploads/2022/12/plov-s-goviadinoi-veles-1.webp",
        "desprition": "kuba",

    }
    try {
        const resoult = await PutReqest(url, newData)

    } catch (error) {
        console.log(error);

    }

}

FetchData()




const array = [1, 2, 3, 4, 5, 6, 7]


function fsds(n) {
    let result = 0
    for (let i = 0; i < n.length; i++) {
        const element = n[i];
        result += element
    }
    return result / n.length
}



function SortByPrice(data, min, max) {
    const sortedArray = []
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.price > +min.value && element.price < +max.value) {
            sortedArray.push(element)
        }

    }
    console.log(sortedArray);
    RenderItems(sortedArray)

}

const min = document.getElementById('min')
const max = document.getElementById('max')

async function SortData() {
    const url = 'https://63d304794abff88834170d21.mockapi.io/items'
    try {
        const result = await MakeReqest(url)
        SortByPrice(result, min, max)
    } catch (error) {
        console.log(error);
    }
}
const sort = document.getElementById('sort')
sort.addEventListener('click', SortData)

var objectsArray = [];

function createAndDisplayObject() {
  var value1 = document.getElementById("input1").value;
  var value2 = document.getElementById("input2").value;
  var value3 = document.getElementById("input3").value;
  var value4 = document.getElementById("input4").value;
  var value5 = document.getElementById("input5").value;

  var newObject = {
    field1: value1,
    field2: value2,
    field3: value3,
    field4: value4,
    field5: value5
  };

  objectsArray.push(newObject);

  displayObjects();
}

function createObject() {
  var value1 = document.getElementById("input1").value;
  var value2 = document.getElementById("input2").value;
  var value3 = document.getElementById("input3").value;
  var value4 = document.getElementById("input4").value;
  var value5 = document.getElementById("input5").value;

  var newObject = {
    field1: value1,
    field2: value2,
    field3: value3,
    field4: value4,
    field5: value5
  };

  objectsArray.push(newObject);
}

function displayObjects() {
  var displayElement = document.getElementById("displayObjects");
  displayElement.innerHTML = '';

  for (var i = 0; i < objectsArray.length; i++) {
    var object = objectsArray[i];
    var objectString = 'Object ' + (i + 1) + ': ' + JSON.stringify(object);
    var objectElement = document.createElement('p');
    objectElement.textContent = objectString;
    displayElement.appendChild(objectElement);
  }
}

function редактироватьОбъект() {
    var значение1 = document.getElementById('input6').value;
    var значение2 = document.getElementById('input7').value;
    var значение3 = document.getElementById('input8').value;
    var значение4 = document.getElementById('input9').value;
    var значение5 = document.getElementById('input10').value;
    var объект = {
        поле1: значение1,
        поле2: значение2,
        поле3: значение3,
        поле4: значение4,
        поле5: значение5
    };

    var результатЭлемент = document.getElementById('результат');
    результатЭлемент.innerHTML = `
        <p>Измененный объект:</p>
        <p>Поле 1: ${объект.поле1}</p>
        <p>Поле 2: ${объект.поле2}</p>
        <p>Поле 3: ${объект.поле3}</p>
        <p>Поле 4: ${объект.поле4}</p>
        <p>Поле 5: ${объект.поле5}</p>
    `;
}