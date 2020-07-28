var alertArray = [];
window.onload=(()=>{
  DIVS = document.getElementsByTagName("div");
  selected = document.getElementsByTagName("body")[0];
  msg = document.getElementsByClassName("multimatch")[0]
  input = document.getElementsByTagName("input")[0];
  input.value="";
  input.addEventListener("click",reset);
  input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
})


function reset(){
  if(selected){
    selected.style.backgroundColor="lightblue";
  }
  selected = document.getElementsByTagName("body")[0];
  msg.innerText = "The Faces of La Celia"
  msg.style.color="lightblue";
  input.value = "";
  for(let i = 0; i < alertArray.length; i++){
    document.getElementById(alertArray[i]).style.backgroundColor="lightblue"
  }
  alertArray = [];
}

function search(){
  let term = document.getElementById("search").value.toLowerCase().trim();
  if(term > 0){//checking to see if the search if for an apartment number
    selected = document.getElementById(term);
    if(selected){
      selected.style.backgroundColor="red";
      selected.scrollIntoView();
    }else{
      selected = document.getElementsByTagName("body")[0];
    }
  }else{
    let names = term.split(" ");
    if(names.length > 1){ //user entered first and last name
      for(let i = 0;i < DIVS.length; i++){
        let div = DIVS[i]
        if(div.classList.contains(names[0]) && div.classList.contains(names[1])){
          div.scrollIntoView();
          div.style.backgroundColor="red"
          selected = div;
        }
      }
    }
    else{ //user entered just 1st name or just last name--may result in multiple matches
      for(let i = 0;i < DIVS.length; i++){
        let div = DIVS[i]
        if(div.classList.contains(names[0])){
          div.scrollIntoView();
          div.style.backgroundColor="red"
          selected = div;
          alertArray.push(div.id);
        }
      }
      if(alertArray.length > 1){
        msg.style.color='red';
        msg.innerText = "Multiple matches! \n Check apartments " + alertArray
        window.scrollTo(0, 0);
      }
    }
  }
  if(selected.tagName == "BODY"){
    msg.style.color='red';
    msg.innerText = "No matches!"
  }
}
