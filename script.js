const addButton=document.querySelector('#add');

const updateLSData=()=>{
const textAreaData=document.querySelectorAll('textarea');
const notes=[];
textAreaData.forEach((note)=>{
    return notes.push(note.value);
});

console.log(notes);

localStorage.setItem('notes',JSON.stringify(notes));

}
const addNewNote=(text='')=>{
    const note=document.createElement('div');     //javascript property to create a new div
    note.classList.add('note');                   // javascript property for adding a class to the div
    
    const htmlData = `
    <div class="operation">
        <button class="edit"><i class="fa-solid fa-pencil"></i></button>
        <button class="delete"><i class="fa-solid fa-trash-alt"></i></button>
    </div>
    <div class="main ${text? "":"hidden"}"></div>
    <textarea class=" ${text?"hidden":""}" ></textarea>`;
    note.insertAdjacentHTML('afterbegin',htmlData)      //javascript property to insert the html data after the begining of the div
    //console.log(note);

    //getting the references
    const editButton=note.querySelector('.edit');
    const delButton=note.querySelector('.delete');
    const mainDiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

    //deleting the note
    delButton.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    });
//toggle using edit button
    textArea.value=text;
    mainDiv.innerHTML=text;

editButton.addEventListener('click',()=>{
mainDiv.classList.toggle('hidden');
textArea.classList.toggle('hidden');
});

textArea.addEventListener('change',(event)=>{
const value=event.target.value;
mainDiv.innerHTML=value;
updateLSData();
});

// The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.The localStorage object stores data with no expiration date. 
// The data will not be deleted when the browser is closed, and will be available the next day, week, or year.The localStorage property is read-only.
// The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
// The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
// The removeItem() method of the Storage interface, when passed a key name, will remove that key from the storage.
// The clear() method of the Storage interface, when invoked, will empty all keys out of the storage.
// The key() method of the Storage interface, when passed a number n, returns the name of the nth key in the storage.
// The length read-only property of the Storage interface returns an integer representing the number of data items stored in the Storage object.





document.body.appendChild(note);                    //javascript property to append the note to the body of the html.The appendChild() method appends a node as the last child of a node.

}   
//getting data back from localstorage to the website
const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=>{
        addNewNote(note);
    });
}



addButton.addEventListener('click',()=>{
addNewNote()
});