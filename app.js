window.onload = () => {
    document.querySelector(".card").classList.add(generateRandomSuit());
    document.querySelector(".number").innerHTML = generateRandomNumber();
    
document.getElementById("myOption").addEventListener("change", (event)=> {
  document.getElementById("card").style.width = event.target.value;
  
})


document.getElementById("myOptionn").addEventListener("change", (event)=> {
  document.getElementById("card").style.height = event.target.value;
  
})
  };


  
  let autogenerar = ""
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
  };
  
  let generateRandomSuit = () => {
    let suit = ["diamond", "spade", "heart", "club"];
    let iSuit = Math.floor(Math.random() * suit.length);
    return suit[iSuit];
  };
function autogenerate() {
  

  autogenerar = setInterval(myFunction, 1200)
  function myFunction() {
      document.querySelector(".card").classList.add(generateRandomSuit());
      document.querySelector(".number").innerHTML = generateRandomNumber();
      return;
  }
  return;
}
function stopgenerate() {
  clearInterval(autogenerar);
}


function changeWidth() {
  
}


