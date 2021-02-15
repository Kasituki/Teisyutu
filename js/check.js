window.onload = function() {
 
    let data = [];
    for(let i = 0 ; i < localStorage.length ; i++) {

        let key = localStorage.key(i);
        console.log('i:'+ i);
        console.log('key:'+key);

        data = JSON.parse(localStorage.getItem(key));
        console.log(data);

        var target = document.getElementById("link");
        var newTag = target.insertRow();
    
        var title = newTag.insertCell();
        var titleTxt = document.createTextNode(i + 1);
        title.appendChild(titleTxt);
        title.setAttribute('class','conTitle');
        title.setAttribute('rowspan',2);
        newTag.appendChild(title);



        var cell = newTag.insertCell();
        cell.innerHTML =data.Root;
        newTag.appendChild(cell);
    
        var newTag2 = target.insertRow();
        var cell2 = newTag2.insertCell();
        cell2.innerHTML =data.Name;
        newTag2.appendChild(cell2);

        var newTag3 = target.insertRow();
        var cell3 = newTag3.insertCell();

        var newTxt = document.createTextNode( "詳細を見る" );
        var content = document.createElement("div");
        content.setAttribute('class','infobtn tab');
        content.setAttribute('id',key);
        // content.setAttribute('class','tab');

        content.setAttribute('onclick','infochc()');
        content.appendChild( newTxt );
        cell3.appendChild(content);

        
    }
    
}

$(function() {
    let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
    $(".tab").on("click", function() { // tabをクリックしたらイベント発火
      $(".active").removeClass("active"); // activeクラスを消す

      var val = $(this).attr('class');

      console.log(val);

      /*詳細へボタンを押した際 */
      if("infobtn tab"== val){
        var check = document.getElementById('check');
        $(check).addClass("active"); // 詳細タブにactiveクラスを追加
        $(".content").removeClass("show");
        var next = "";
        next = document.getElementById('panel2');
        $('#panel2').addClass("show"); 

        var num = "";
        num = $(this).attr('id');
        console.log(this);
        // var key = num.substr(4,1);

        var intkey = Number(num);
        let tagdata = [];
        tagdata = JSON.parse(localStorage.getItem(intkey));
        let displayUrlPath = "";
        let displayName = "";
        let displayData = "";
        let displaymemo = "";
        let displayType = "";
        let displayNum = "";


        displayUrlPath = document.getElementById('pathUrl');
        displayName = document.getElementById('name');
        displayData = document.getElementById('date');
        displaymemo = document.getElementById('memo');
        displayType = document.getElementById('type');
        displayNum = document.getElementById('listnum');

        displayUrlPath.textContent = tagdata.Root;
        displayName.textContent = tagdata.Name;
        displayData.textContent = tagdata.Date;
        displaymemo.textContent = tagdata.Memo;
        displayType.textContent = tagdata.Type;
        displayNum.setAttribute('value',intkey);
        console.log(displayNum);

      }else if("back btn tab"== val){
        /**一覧に戻るボタンを押したとき */
        var list = document.getElementById('list');
        $(list).addClass("active"); // 詳細タブにactiveクラスを追加

        var next = "";
        next = document.getElementById('panel1');
        console.log(next);
        $('#panel2').removeClass("show"); 
        $('#panel3').removeClass("show"); 
        $('#panel1').addClass("show"); 
      }else if("remake btn tab"== val){
        /**編集するボタンを押したとき */
        var remake = document.getElementById('remake');

        var key = "";
        key = document.getElementById('listnum').value;

        var intKey = Number(key);

        $(remake).addClass("active");
        var next = "";
        next = document.getElementById('panel2');
        console.log(next);
        $('#panel2').removeClass("show"); 
        $('#panel3').addClass("show"); 

        let displayUrlPath = "";
        let displayName = "";
        let displayData = "";
        let displaymemo = "";
        let displayType = "";

        let tagdata = [];
        tagdata = JSON.parse(localStorage.getItem(intKey));

        displayUrlPath = document.getElementById('root_remake');
        displayName = document.getElementById('name_remake');
        displayData = document.getElementById('date_remake');
        displaymemo = document.getElementById('memo_remake');
        // displayType = $('input[name="type"]:checked').val();
        console.log(tagdata.Type);

        displayUrlPath.value = tagdata.Root;
        displayName.value = tagdata.Name;
        displayData.textContent = tagdata.Date;
        displaymemo.value = tagdata.Memo;
        displayType.value = tagdata.Type;
          $('input[value='+ tagdata.Type +']').prop('checked', true);

        
      }else if("delete btn tab" == val){
        var result = confirm('本当に削除してもよろしいですか？');
        console.log(val);
        if(result){
          var delTag = '';

          delTag = document.getElementById('listnum').value;
  
          localStorage.removeItem(delTag);
          location.reload()

        }else{

        }
        


      }else{
        return false;
      }
      $(this).addClass("active"); // クリックした箇所にactiveクラスを追加

      // $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
    })
})

function remakeInfo(){
  var root = null;
  var name = null;
  var date = null;
  var memo = null;
  var type = null;

   root = document.getElementById('root_remake').value;
   name = document.getElementById('name_remake').value;
   date = document.getElementById('date_remake').innerHTML;
   memo = document.getElementById('memo_remake').value;
   type = $('input[name="type"]:checked').val();

  const input = {
      Root : root,
      Name : name,
      Date : date,
      Memo : memo,
      Type : type
  } ;

var key = '';
key = document.getElementById('listnum').value;
console.log(key);
  localStorage.setItem(key,JSON.stringify(input));
  alert('変更されました');
  location.reload()
}