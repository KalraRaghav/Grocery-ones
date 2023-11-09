document.addEventListener("DOMContentLoaded", function() {
    let grocery = document.getElementById("grocery");
    grocery.addEventListener('submit', addItem);

    function addItem(e) {
        e.preventDefault();
        let data = this.elements.writeList.value;
        let list = document.querySelector("ol");
        let item = document.createElement('li');
        let text = document.createElement("p");

        text.textContent = data;
        this.elements.writeList.value = "";
        item.append(text);
        list.append(item);

        // Add a class "remove" to the list item
        item.classList.add('remove');

        // Add a remove button to the list item
        let rmvbtn = document.createElement("span");rmvbtn.textContent = 'Remove';
        
        rmvbtn.addEventListener('click', function() {
            // Remove the list item when the "Remove" button is clicked
            list.removeChild(item);
        });
        rmvbtn.style.backgroundColor = 'red';
        rmvbtn.style.padding = '5px';
        rmvbtn.style.borderRadius = '3px';
        rmvbtn.style.cursor = 'pointer';

        item.append(rmvbtn);
    }
});
