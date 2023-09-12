const titleEl = document.getElementById("title");

if(!localStorage.getItem('songList')){
  localStorage.setItem('songList',JSON.stringify({}))
}
if(!localStorage.getItem('harp')){
  localStorage.setItem('harp',JSON.stringify({}))
}

function getList(instrument){
  return JSON.parse(localStorage.getItem(instrument=="guitar"?'songList':'harp'));
}


function getSong(instrument){
  const songList = getList(instrument)
  const storageKey = instrument=="guitar"?'songList':'harp'
  const songs = Object.keys(songList).sort((a,b)=>a>b);
//continue the process as long as there is at least 1 song with fewer than 4 plays
  while(Math.min(...Object.values(songList))<4){
    let index = Math.floor(Math.random() * songs.length)
    let title = songs[index]
    if(songList[title] < 4){
      songList[title]+=1;
      titleEl.innerText=title;
      localStorage.setItem(storageKey,JSON.stringify(songList))
      hideList()
      return;
    }
  }
  for(let song in songList){
    songList[song]=0
  }
  titleEl.innerText = storageKey;
  localStorage.setItem(storageKey,JSON.stringify(songList))
  getSong()
}

function addSong(instrument){
  let key = document.getElementsByTagName('input')[0].value
  if(key ==""){
    return
  }
  const keyWords = key.split(" ")
  const titleCase = keyWords.map(w=>w.charAt(0).toUpperCase() + w.slice(1))
  key = titleCase.join(" ")


  document.getElementsByTagName('input')[0].value="";
  let songList = getList(instrument)
  songList[key]=0;
  let storageKey = instrument=="guitar"?'songList':'harp'
  localStorage.setItem(storageKey,JSON.stringify(songList))
  showList(instrument)
}

function deleteSong(song, instrument){
  let thisSong=song
  let songList = getList(instrument)
  delete songList[thisSong]
  let storageKey = instrument=="guitar"?'songList':'harp'
  localStorage.setItem(storageKey,JSON.stringify(songList))
  hideList()
  showList(instrument)
  alert(`${song} has been deletedBOOHOO`)
}

function showList(instrument){
  document.getElementById('title').textContent=""
  const titles = Object.keys(getList(instrument)).sort((a,b)=>a>b?1:-1)
  const list = document.getElementById("list")
  list.innerHTML=""
  titles.forEach(song=>{
    let item = document.createElement("li")
    let btn = document.createElement("button")
    btn.classList.add('delete')
    btn.innerText = 'X';
    btn.addEventListener("click",()=>deleteSong(song,instrument))
    let name = document.createElement('span')
    name.textContent = " " + song
    item.appendChild(btn)
    item.appendChild(name)
    list.appendChild(item)
  })
  document.getElementById('list').style.display='block';
  document.getElementById('hideList').style.display='inline';
  document.getElementById('showList').style.display='none';
}

function hideList(){
  document.getElementById('list').style.display='none';
  document.getElementById('hideList').style.display='none';
  document.getElementById('showList').style.display='inline';
}
