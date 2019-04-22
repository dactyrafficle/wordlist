var words = [];
var tagList = ['SPAN', 'LI', 'A', 'DIV'];

function abc(element) {

  if (element.children.length > 0 && tagList.indexOf(element.tagName) !== -1) {
    // if there are children elements, loop over them
    for (var i = 0; i < element.children.length; i++) {
      abc(element.children[i]);
    }
  } else {

    // if there are no children elements, grab the inner text of the element
    let x = element.innerText.split(' ');
    //console.log(element.tagName);
    
    for (var i = 0; i < x.length; i++) {
      // add each word to the array
      words.push(x[i]);
    }  
  }

}

abc(document.body);
