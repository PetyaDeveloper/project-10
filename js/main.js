let curIdx = 0;

function displayInfo(data){
    var personList = '<table><ul id="myUl">';
    $.each(data.results, function(i, item){
      let date = item.dob.date.substring(5,7);
      let month = item.dob.date.substring(8,10);
      let year = item.dob.date.substring(0,4);

      personList += `<li class="person scroll">
        <img src = "${item.picture.large}"/>
        <span>
          <p class="name"> ${item.name.first} ${item.name.last}</p>
          <p class="email">${item.email}</p>
          <p class="location">${item.location.city}</p>
        </span>
        <div class="personExtraData" style="display:none">
          <p>${item.cell}</p>
          <p class="address">${item.location.street}, ${item.location.state}, ${item.location.postcode}</p>
          <p>Birthday: ${date}/${month}/${year}</p>
          
          <span class = "arrows">
            <button id = "prev">&#10094;</button>
            <button id="next">&#10095;</button>
          </span>
        </div></li>`;
    });
    personList += '<ul><table>';
    $('.js').html(personList);
    
    // POP UP WINDOW
    const person = document.querySelectorAll('.person');
    //const close = document.getElementById('close');
    const popup = document.querySelector('.popup');
    const popupContentText = document.querySelector('.popup-content-text');

    $.each(person,function(i){
        person[i].addEventListener('click',()=>{
            popup.style.display = "block";
            curIdx = i;
            
          let personHTML = $(this).clone();
          $(popupContentText).html(personHTML);
            $(personHTML).removeClass('person').addClass('personFull');
            $(personHTML).children('div').show();
        //   make the body behind the popup window darker
            $('ul, .person').css('opacity', '.5');
            $('ul, .person, body').css('background-color', '#527a7a');
            $('.personFull').css('opacity', '1');
      });
    });
    $('#close').on('click',function(){
        $(popup).hide();
        $('.person').css('background-color', 'white');
        $('body, ul').css('background-color', '#e0ebeb');
        $('ul, .person, body').css('opacity', '1');
    }); 
} // end of displayInfoData

$.ajax({
  url: 'https://randomuser.me/api/?nat=au,ca,ch,fr,gb,nl,nz,us&results=12&inc=picture,name,email,location,cell,dob',
  dataType: 'json',
  success: function(data) {
    displayInfo(data);
    console.log(data);
  }
});
