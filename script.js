let textarea = document.getElementById("text");
console.log(textarea);
function SaveData(){
    localStorage.setItem("SavedData" , textarea.value);
}


    if(localStorage.getItem("SavedData")){
        textarea.value = localStorage.getItem("SavedData");
    }


textarea.addEventListener('input', SaveData);





