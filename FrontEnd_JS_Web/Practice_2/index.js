// document.getElementsByTagName('h1').innerText='External File Loaded Successfully';
document.getElementsByTagName('h1')[0].innerText='External File Loaded Successfully';
console.log(document.getElementsByTagName('h1'));

const consoleMain = (e) =>{
    // if(e.target != this.target)
    console.log(e);
    console.log('Main')
}

const consoleImage = (e) =>{
    console.log(e);
    console.log('Main')
}

document.getElementsByClassName('card').addEventListener('click', consoleMain, false);  // Parent->Child ___ Child->Parent 
// Parent --> Child == Capturing       true means capturing
// Child --> Parent == Bubbling

// .nodeName , nodeValue, nodeType




// HTMLCollection is an array-like object that has a collection of document elements. 

// A NodeList object is a collection of document nodes (element nodes, attribute nodes, and text nodes).



//  GitHub
// git-SCM.com

/*
    git clone url`
    vs terminal --> git checkout -b aliNasir/projectSetup     // to create new branch
    git add.             // for whole change
    git commit -m 'Project Setup'  
  */