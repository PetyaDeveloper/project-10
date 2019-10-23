//  scroll employee modal window with prev and next arrows
$('.popup').on("click", 'button', function (e) {
  console.log(curIdx);
  if(e.target.id === 'prev'){
  //reduce index value
  curIdx--; 
  //check that index is not below 0
  console.log(curIdx);
  //if it is then reset to index 11
  if (curIdx < 0) {
        curIdx = 11;
  }
  }
  if(e.target.id === 'next'){
    //increase index value
    curIdx++; 
    //check that index is not above 11
    console.log(curIdx);
    //if it is then reset to index 0
    if (curIdx > 11) {
        curIdx = 0;
    }
  }
  const person = document.querySelectorAll('.person')[curIdx];
  console.log(person);
  const popupContentText = document.querySelector('.popup-content-text');
  let personHTML = $(person).clone();
  $(popupContentText).html(personHTML);
  $(personHTML).removeClass('person').addClass('personFull');
  $(personHTML).children('div').show();
  $('.personFull').css({"background":"#fff"});
  $('.personFull').css({"opacity":"1"});
});



// search employee name in input: filter
function inputSearchEmployee(){
    const input = document.getElementById('search');
    let filter = input.value.toUpperCase();
    //const ul = document.getElementById('myUl');
    let li = document.getElementsByTagName('li');
      
    // loop through all list items and hide those who dont match the search query
    for(let i=0; i<li.length; i++){
        let name = li[i].getElementsByTagName('p')[0];
        let txtValue = name.textContent || name.innerText;
        if(txtValue.toUpperCase().indexOf(filter)>-1) {
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
  }
};
$('input').on('keyup', function(){
   inputSearchEmployee(); 
});

