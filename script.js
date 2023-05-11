// let factor = document.querySelector(".portion-number").innerHTML;

// let amount = document.querySelector(".amount").innerHTML;
// let unit = document.querySelector(".unit").innerHTML;
// let name = document.querySelector(".name").innerHTML;

// const hummus = function () {
//   let ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(factor);

// let factor = "";
// let count = 1;
// for (i = count; i <= 6; i++) {
//   factor++;
//   document.getElementById('optionone').value = factor;
//   console.log(factor);
// }

// let selectBox = document.getElementById("portions");

// let option = document.createElement("option");
// option.text = factor;

// selectBox.add(option);

let ingredients = [
    { amount: 1 , unit: "can", name: "chickpeas" },
    { amount: 0.25 , unit: "cup", name: "tahini" },
    { amount: 0.25, unit: "cup", name: "lemon juice" },
    { amount: 1, unit: "clove", name: "garlic" },
    { amount: 2, unit: "tablespoon", name: "olive oil" },
    { amount: 0.5, unit: "teaspoon", name: "cumin" },
  ];

let insideOption = "";
for(let i=0; i<= 6; i++){
    insideOption += `<option value='${i}'>${i}</option>`;
}
document.getElementById('portions').innerHTML = insideOption;

console.log(ingredients);

function addingData() {
  let tableBody = document.getElementById("data");

  let portions = document.getElementById("portions");
  let value = portions.options[portions.selectedIndex].text;
  let intValue = parseInt(value);

  let tr = ""; 
  ingredients.forEach(element => {
    console.log(element.amount);
    tr +=
    `<tr>
      <td>${element.amount*intValue}</td>
      <td>${element.unit}</td>
      <td>${element.name}</td>
    </tr>`;
  });
  tableBody.innerHTML = tr;
}