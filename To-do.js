function addNewItem(list, itemText){
     var listItem = document.createElement("li");
     var checkBox = document.createElement("input");

     listItem.setAttribute("style", "height: 3em;")
   checkBox.setAttribute("style"," width :2.0em; height :1.75em;  border: thin solid lightgray; margin-right: 1em; margin-top:0.85em");
     
     checkBox.type = "checkbox";
     var span = document.createElement("span");
     span.setAttribute("style","font-size : 2.5rem;" )
     span.innerText = itemText;
  
     listItem.append(checkBox);
     listItem.appendChild(span);

     list.appendChild(listItem);
     

}

var btnNew =document.getElementById("btnAdd");
btnNew.onclick = function(){


    var inItemText = document.getElementById("inItemText");

    var itemText = inItemText.value;
    

    if(!itemText ||itemText =="" || itemText ==" "){

        return false;
    }
   
addNewItem(document.getElementById("todoList"), itemText);
inItemText.select();

};