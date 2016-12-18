;

var myFunction = function() {
    var myList = document.getElementById('my-list');
    document.getElementById('my-heading').innerHTML = "Some basic JS in half an hour :)";

    document.getElementById('my-button').addEventListener('click', addListItem);

    var count = myList.getElementsByTagName('li').length + 1;

    function addListItem() {
        var newItem = document.createElement('li', null);
        newItem.className = "my-item";
        newItem.innerHTML = "New list item " + count;
        myList.insertBefore(newItem, myList.firstChild);
        count++;
    }
}

myFunction();
