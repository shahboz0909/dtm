// var elInput1 = document.querySelector ("#form__input1");
// var elInput2 = document.querySelector ("#form__input2");
// var elInput3 = document.querySelector ("#form__input3");


// var elInput4 = document.querySelector ("#form__input4");
// var elOutput = document.querySelector (".output")
// var elBtn = document.querySelector (".wrapper__btn");
// var massage = "" ;

// elBtn.addEventListener("click", function(evt){
//   evt.preventDefault();
//   var akkum = elInput1.checked;
//   var kamera = elInput2.checked;
//   var vid = elInput3.checked;
//   var ekran = elInput4.checked;

//   if ((akkum && kamera && vid && ekran) || (kamera && vid && !ekran && !akkum) || (kamera && vid && ekran && !akkum)) {
//     massage = "Yaxshi, Olaman";  
//   }
//   else {
//     massage = "Yoq, olmayman"
//   }
//   elOutput.textContent = massage
// })




//  3 ga qoldiqsiz bolinsa - Fizz
//  5 ga qoldiqsz bo'linsa - Buzz
//  3ga va 5 ga qoldiqsiz bo'linsa - FizzBuzz
// else - raqam



// var elInput = document.getElementById ("number");
// var elOutput = document.querySelector(".output");



// elInput.addEventListener ("change", function(e) {
//   var number = elInput.value.trim();

//   var onlyNumber = Number(number);
//   var result = ""
//   elInput.value = null


  // BIRINCHI USUL

  // if ( (isNaN(onlyNumber)) || (number.length == "" || number.length > 6) ) {
  //   elInput.style.borderColor = "red";
  //   return
    
  // }else if ((number % 3 == 0) && (number % 5 == 0)) {
  //   result = "har ikkalasiga qoldiqsiz";
  // }else if (number % 3 == 0) {
  //   result = "3 ga qoldiqsiz";
  // } else if (number % 5 == 0) {
  //   result = "5 ga qolldiqsiz";
  // } else {
  //   result = number;
  // }
  
// IKKINCHI USUL

//   if (number % 3 == 0) {
//     result = "Fizz"
//   }
//   if (number % 5 == 0) {
//     result = result + "Buzz"
//   }
//   if (result == "") {
//     result = number
//   }
//   elOutput.textContent = `${number} -  "${result}" `
// })

var elInput = document.querySelector (".form__input");
var elBtn = document.querySelector (".form__btn");
var elSelect = document.querySelector ("#alone");
var elOutput = document.querySelector (".wrapper__massage");

var maxBall = 189
var grant = 156;
var kantrakt = 100;
var supper = (grant / 2);

var universitest = ["BuxDu", "SamDu", "Jizpi", "TDTU", "TATU", "UzSWLU"] ;


for (var univer of universitest) {
  var create = document.createElement ("option");
  create.textContent=univer;
  create.value=univer;
  elSelect.append(create);

}

elBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  var input = elInput.value.trim();
  var number = Number(input)

  if (input > maxBall || input == ""){
    elInput.style.borderColor = "red";
    return
  }
  else if (isNaN(number)){
    elInput.style.borderColor = "red";
    return
  }

  elInput.style.borderColor = "black";
  var univ = elSelect.value 

    var massage = "" ;


    if (input >= grant) {
      massage = " davlat granti asosida o'qishga qabul qilindingiz"
    }
    else if (input >= kantrakt && input < grant) {
      massage = "kantrakt asosida o'qishga qabul qilindingiz "
    }
    else if (input >= supper && input < kantrakt) {
      massage = "o'qishga kira olmadingiz. Sizda super-kantrakt asosida o'qish imkoni bor"
    }
    else {
      massage = "o'qishga qabul qilinmadingiz"
    }
  
  elOutput.textContent = `Siz ${univ} ga ${massage}`

})






