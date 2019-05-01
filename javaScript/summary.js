window.onload = function(){
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