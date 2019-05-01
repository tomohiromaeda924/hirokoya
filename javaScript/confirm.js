window.onload = function(){


  var pram=location.search;
  /* 引数がない時は処理しない */
  if (!pram) return false;

  /* 先頭の?をカット */
  pram=pram.substring(1);//引数1は開始位置、なぜ0の位置が「？」になる??????????
//location.href="confirm.html?"+pram;
  /* 「&」で引数を分割して配列に */
  var pair=pram.split("&");
  // pram="name="+name+"&email="+email+"&inquirydetails="+inquirydetails 
  //["name="name, email="email", inquirydetails="inquirydetails] こうなっる？？？？？？？？？？？？？？？？
  var i="";//何のためにある？？？？？？？？？？？？？
  var temp="";
  var key=new Array();
  for (i=0; i < pair.length; i++) {
      /* 配列の値を「=」で分割 */
      temp=pair[i].split("=");//["name", name]  ["email", email], ["inquirydetails", inquirydetails]
      keyName=temp[0];
      keyValue=temp[1];
      /* キーと値の連想配列を生成 */
      key[keyName]=keyValue;//{name:name, email:email, inquirydetails:inquirydetails}???????????????
  }

  var name=email=inquirydetails="";//空文字を代入してる？？？？？？？？？？？？？？？

  if (!key["name"] || key["name"]==""){//!key["name"]はkeyとしてnameが存在してるかの判定？？？？
     name="匿名希望";
 }else{
     /* コード変換 */
     name=unescape(key["name"]);
 }
 if (!key["email"] || key["email"]==""){
    email="adoresu";
}else{
    /* コード変換 */
    email=unescape(key["email"]);
}
if (!key["inquirydetails"] || key["inquirydetails"]==""){
   inquirydetails="--------";
}else{
   /* コード変換 */
   inquirydetails=unescape(key["inquirydetails"]);
}
  document.getElementById("userName").value = name;
  document.getElementById("emailAddress").value = email;
  document.getElementById("inquiryDetails").value = inquirydetails;
  
  
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