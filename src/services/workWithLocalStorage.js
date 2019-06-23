export function setStorage(key, data) {
  let localData = getStorage(key)
  if(localData){
    localData = {...localData, ...data}
  }else {
    localData = data
  }
  localStorage.setItem(key, JSON.stringify(localData))
}

export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function deleteStorage(key, property) {
  let localData = getStorage(key)
  if(localData && localData[property]){
    delete localData[property]
    localStorage.setItem(key, JSON.stringify(localData))
  }
}