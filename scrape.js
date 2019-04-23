var words = [];
var tagList = ['BODY', 'SPAN', 'UL', 'LI', 'A', 'DIV', 'H1', 'H2', 'H3', 'H4'];

function abc(element) {

  if (tagList.indexOf(element.tagName) !== -1) {
  

		if (element.children.length > 0) {
		
			// if there are children elements, loop over them
			for (var i = 0; i < element.children.length; i++) {
				abc(element.children[i]);
			}
			
		} else {
			   
			//words.push(element.innerText);
			
			let x = element.innerText.split(' ');
			

			for (var i = 0; i < x.length; i++) {
			
				// add each word to the array
				words.push(x[i]);
			}  
		}

  } else {
    // if tag isnt on the approved tag list, do nothing
  }

}

abc(document.body);
