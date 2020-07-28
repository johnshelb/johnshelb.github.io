var alertArray = [];
window.onload=(()=>{
  DIVS = document.getElementsByTagName("div");
  selected = document.getElementsByTagName("body")[0];
  input = document.getElementsByTagName("input")[0];
  input.addEventListener("click",reset);
})


function reset(){
  if(selected){
    selected.style.backgroundColor="lightblue";
  }
  input.value = "";
  for(let i = 0; i < alertArray.length; i++){
    document.getElementById(alertArray[i]).style.backgroundColor="lightblue"
  }
  alertArray = [];
}

function search(){
  let term = document.getElementById("search").value.toLowerCase();
  if(term > 0){//checking to see if the search if for an apartment number
    selected = document.getElementById(term);
    if(selected){
      selected.style.backgroundColor="red";
      selected.scrollIntoView();
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
        alert("Check apartments " + alertArray)
      }
    }
  }
}
