
let todo = [];

let req = prompt("Enter the request you want to perform");

while (true) {
  if (req == 'quit') {
    console.log("Quitting the app");
    break;
  } else if (req == 'list') {
    console.log('________________________')
    for(let i=0; i<todo.length;i++) {
        console.log(i, todo[i]);
    }
    console.log('_______________________')
    req = prompt("Enter the request you want to perform");
}
  else if(req=='add'){

    let gift = prompt("Enter the new task in To-Do list");
    todo.push(gift)
    console.log('Task added')
    req = prompt("Enter the request you want to perform");
  }
  else if(req=='delete') {
    let del=prompt("Enter the index of the task to Remove");
    todo.splice(del,1);
    console.log("Task Deleted succefully");
    req = prompt("Enter the request you want to perform");
  }
  else{
    console.log('Wrong Input')
    req = prompt("Enter the request you want to perform");
  }

}