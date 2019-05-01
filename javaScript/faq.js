window.onload = function(){
 var Accordion_nextEl = (function () {
    function Accordion_nextEl(el) {
        this.el = el;
    }
    Accordion_nextEl.prototype.showHide = function () {
        for (var i = 0; i < this.el.length; i++) {
            this.el[i].addEventListener('click', function () {
            this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("active");
                
                var sp = document.getElementsByClassName('spanText');
                //HTMLcollectionオブジェクトを返します。
                //console.log(sp[0]);
                //console.log(sp[1]);
                //console.log(sp[2]);
                //alert('チェック用'); デバックでよく使います
                //戻り値とそれに対応するメソッドがわからない？？？？？？？？？？？？？？？？？？？？？？？？？？？？
                for(var i = 0; i < sp.length; i++) {
                  if(sp[i].parentNode.classList.contains("active")){
                    sp[i].innerHTML = "-";
                  
                  }else{
                    sp[i].innerHTML = "+";
                  }
                }
            });
        }
    };
    return Accordion_nextEl;
}());
var text = document.getElementsByClassName("sample");
new Accordion_nextEl(text).showHide();

  
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