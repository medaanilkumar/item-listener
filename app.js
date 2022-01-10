var addform=document.querySelector('#addForm')
var search =document.querySelector('#search')
var ul=document.querySelector('ul')

addform.addEventListener('submit',addEle)
ul.addEventListener('click',removeItem)


search.addEventListener('keyup',changeText)




function changeText(e){
    var li=document.querySelectorAll('li')
    console.log(li)
    var searchValue=e.target.value.toLowerCase()
    Array.from(li).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(searchValue) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }
}

function addEle(e){
    e.preventDefault()
    var eValue=document.querySelector('#enter').value
    var li=document.createElement("li")
    var btn=document.createElement("button")
    btn.textContent="X"
    btn.className='delete'
    li.appendChild(btn)
    li.appendChild(document.createTextNode(eValue))
    ul.appendChild(li)
}
