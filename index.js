// Write your code here!
const main= document.getElementById('main')
const jina= "Hilary"
main.remove()

const newHeader= document.createElement('h1')
document.body.append(newHeader);


newHeader.id='victory';

newHeader.innerHTML= `${jina} is the champion`



