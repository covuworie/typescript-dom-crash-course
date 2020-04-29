const form = document.querySelector("#addForm") as HTMLFormElement;
const items = document.querySelector("#items") as HTMLUListElement;
const filter = document.querySelector("#filter") as HTMLInputElement;

// Add event
form.addEventListener("submit", addItem);
// Delete event
items.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(event: Event) {
  event.preventDefault();

  // Get input value
  const item = document.querySelector("#item") as HTMLInputElement;

  // Create new li element
  const li = document.createElement("li");
  // Add class
  li.classList.add("list-group-item");
  // Add text node with input value
  li.textContent = item.value;

  // Create delete button element
  const deleteButton = document.createElement("button");
  // Add classes
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-right",
    "delete"
  );
  // Add text node
  deleteButton.textContent = "X";

  // Append button to li
  li.appendChild(deleteButton);

  // Append li to list
  items.appendChild(li);
}

// Remove item
function removeItem(event: MouseEvent) {
  const item = event.target as HTMLLIElement | HTMLButtonElement;
  if (item.classList.contains("delete")) {
    if (confirm("Are you sure you wish to delete this item?")) {
      const li = item.parentElement as HTMLLIElement;
      items.removeChild(li);
    }
  }
}

// Filter items
function filterItems(event: KeyboardEvent) {
  // convert input text to lowercase
  const input = event.target as HTMLInputElement;
  const inputText = input.value.toLowerCase();
  inputText;
  // Get lis
  const lis = items.children;
  // Convert to an array
  Array.from(lis).forEach((li) => {
    var itemName = li.firstChild!.textContent!.toLowerCase();
    if (itemName.indexOf(inputText) != -1) {
      (li as HTMLLIElement).style.display = "block";
    } else {
      (li as HTMLLIElement).style.display = "none";
    }
  });
}
