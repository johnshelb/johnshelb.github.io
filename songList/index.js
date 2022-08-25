const titleEl = document.getElementById("title");



if(!localStorage.getItem('songList')){
  localStorage.setItem('songList',JSON.stringify({"Here Comes the Sun":0, "Imagine":0,"Let It Be":0}))
}

function getList(){
  return JSON.parse(localStorage.getItem('songList'))
}

function getSong(){
  let songList = getList()
  const songs = Object.keys(songList);
//continue the process as long as there is at least 1 song with fewer than 4 plays
  while(Math.min(...Object.values(songList))<4){
    let index = Math.floor(Math.random() * songs.length)
    let title = songs[index]
    if(songList[title] < 4){
      songList[title]+=1;
      titleEl.innerText=title;
      localStorage.setItem('songList',JSON.stringify(songList))
      hideList()
      return;
    }
  }
  for(let song in songList){
    songList[song]=0
  }
  localStorage.setItem('songList',JSON.stringify(songList))
  getSong()
}

function addSong(){
  document.getElementsByTagName('input')[0].focus()
  let key = document.getElementsByTagName('input')[0].value
  if(key ==""){
    return
  }
  // key = key.charAt(0).toUpperCase() + key.slice(1)
  const keyWords = key.split(" ")
  const titleCase = keyWords.map(w=>w.charAt(0).toUpperCase() + w.slice(1))
  key = titleCase.join(" ")


  document.getElementsByTagName('input')[0].value="";
  let songList = getList()
  songList[key]=0;
  localStorage.setItem('songList',JSON.stringify(songList))
  titleEl.textContent="You added " + key;
  showList()
}

function deleteSong(song){
  let thisSong=song
  let songList = getList()
  titleEl.textContent="You deleted " + song
  delete songList[thisSong]
  localStorage.setItem('songList',JSON.stringify(songList))
  hideList()
  showList()
}

function showList(){
  const titles = Object.keys(getList()).sort((a,b)=>a>b)
  const list = document.getElementById("list")
  list.innerHTML=""
  titles.forEach(song=>{
    let item = document.createElement("li")
    item.textContent = song
    let btn = document.createElement("button")
    btn.classList.add('delete')
    btn.innerText = 'remove';
    btn.addEventListener("click",()=>deleteSong(song))
    item.appendChild(btn)
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