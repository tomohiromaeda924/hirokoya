window.onload = function(){
  document.getElementById("sendButton").onclick = function(){
    
    var modal;
    var windowWidth = window.innerWidth;
      if(windowWidth >= 800){
        modal = document.getElementById('confirmationScreen');
        modal.style.display = 'block';
        target = document.getElementById("userName2");
        target.innerText = document.forms.contactForm.userName.value;

        target2 = document.getElementById("emailAddress");
        target2.innerText = document.forms.contactForm.userEmail.value;

        target3 = document.getElementById("inquiryDetails");
        input = document.getElementById("wl").value;
        target3.innerHTML = input;
        
        var bgcolor = document.getElementById('contents');
        bgcolor.style.background = '#666';
        var bgcolor1 = document.getElementById('userAddress');
        bgcolor1.style.background = '#666';
        var bgcolor2 = document.getElementById('userName');
        bgcolor2.style.background = '#666';
        var bgcolor3 = document.getElementById('wl');
        bgcolor3.style.background = '#666';
    }else{
      modal = document.getElementById('confirmationScreenUn420');
      modal.style.display = 'block';
      target = document.getElementById("userName2un800");
      target.innerText = document.forms.contactForm.userName.value;
      console.log(target);

      target2 = document.getElementById("emailAddressun800");
      target2.innerText = document.forms.contactForm.userEmail.value;

      target3 = document.getElementById("inquiryDetailsun800");
      input = document.getElementById("wl").value;
      target3.innerHTML = input;
     
      var bgcolor = document.getElementById('contents');
        bgcolor.style.background = '#666';
        var bgcolor1 = document.getElementById('userAddress');
        bgcolor1.style.background = '#666';
        var bgcolor2 = document.getElementById('userName');
        bgcolor2.style.background = '#666';
        var bgcolor3 = document.getElementById('wl');
        bgcolor3.style.background = '#666';
      
    }

    }

  //-------------------------------------送信ボタン（モダール消す）---------------------------
  document.getElementById("sousin").onclick = function(){
    
    var modal = document.getElementById('confirmationScreen');
      modal.style.display = 'none';
    var modal2 = document.getElementById('sendCompletely');
      modal2.style.display = 'block';
    var bgcolor = document.getElementById('contents');
    bgcolor.style.background = '#fff';  
    var bgcolor1 = document.getElementById('userAddress');
    bgcolor1.style.background = '';
    var bgcolor2 = document.getElementById('userName');
    bgcolor2.style.background = '';
    var bgcolor3 = document.getElementById('wl');
    bgcolor3.style.background = '';
    }

  //-------------------------------------戻るボタン（モダール消す）---------------------------
  document.getElementById("return").onclick = function(){
    var modal = document.getElementById('confirmationScreen');
     modal.style.display = 'none';
    var bgcolor = document.getElementById('contents');
    bgcolor.style.background = '#fff';
    var bgcolor1 = document.getElementById('userAddress');
    bgcolor1.style.background = '';
    var bgcolor2 = document.getElementById('userName');
    bgcolor2.style.background = '';
    var bgcolor3 = document.getElementById('wl');
    bgcolor3.style.background = '';
    }
    
    //-------------------topへ戻るボタンの表示、非表示-----------------
  window.onscroll = function()//スクロールされるたびにfunctionが実行されるのですか？？？？？？？？？？？？？？
{
    var scrollTop =
        document.documentElement.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop;              // Chrome、Safari
    if(scrollTop > 200){
      document.getElementById('js-button').style.display = "block";
    }else{
      document.getElementById('js-button').style.display = "none";
    }
}
  　　　

//-------------------topへ戻る-----------------


  let target = document.getElementById('js-button');//html<button>のid取得
  target.addEventListener('click', function() {
  window.scrollTo(0,0);
  });
}
