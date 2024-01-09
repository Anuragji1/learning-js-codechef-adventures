DOM allows us to delete and hide elements as well.

Deletion: Sample syntax as follows.

The code creates an element 'removeelement' associated with the id 'childid' in the HTML
It then removes the element 'removeelement' from the parent with the id 'parentid'
var removeelement = document.getElementById('childid');
document.getElementById('parentid').removeChild(removeelement);
The above will delete all child elements with id='childid' within the parent with id='parentid'.

Hide: Sample syntax as follows.

document.getElementById('newpara').hidden = true;
The above will hide element with the id = 'newpara'

---------
