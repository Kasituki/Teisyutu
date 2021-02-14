window.onload = function() {
    // var target = document.getElementById("link");
    // var newTag = target.insertRow();

    // var cell = newTag.insertCell();
    // cell.innerHTML ="試しに入れてみた1";
    // newTag.appendChild(cell);
    // cell.classList.add('red');

    // var cell2 = newTag.insertCell();
    // cell2.innerHTML ="試しに入れてみた2";
    // newTag.appendChild(cell2);

    // var newTag2 = target.insertRow();
    // var cell3 = newTag2.insertCell();
    // cell3.innerHTML ="試しに入れてみた3";
    // newTag2.appendChild(cell3);
    
    // var target = document.getElementById("link");
    // var newTag = target.insertRow();

    // var cell = newTag.insertCell();
    // var newAnchor = document.createElement("a");
    // var newTxt = document.createTextNode( "詳細を見る" );
    // newAnchor.appendChild( newTxt );
    // newAnchor.setAttribute("href","information.html"  );
    // cell.appendChild(newAnchor);
    // newTag.appendChild(cell);
    // cell.classList.add('information');
    // localStorage.clear();
    let data = [];
    for(let i = 1 ; i <= localStorage.length ; i++) {

        // let key = localStorage.key(i);
        // console.log(localStorage.key(i));
        data = JSON.parse(localStorage.getItem(i));
        console.log(data);

        var target = document.getElementById("link");
        var newTag = target.insertRow();
    
        var title = newTag.insertCell();
        var titleTxt = document.createTextNode(i);
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
        content.setAttribute('id','item' + i);
        // content.setAttribute('class','tab');

        content.setAttribute('onclick','infochc()');
        content.appendChild( newTxt );
        cell3.appendChild(content);

        //アコーディオンの外側づくり
        // var newAnchor = document.createElement("div");
        // // var newTxt = document.createTextNode( "詳細を見る" );
        // newAnchor.classList.add('accordion');
        // newAnchor.setAttribute('class','accordion');
        // cell3.appendChild(newAnchor);
        // // newTag3.appendChild(cell3);
        // // newAnchor.appendChild( newTxt );
        // //アコーディオンメニューの中身
        // var content = document.createElement("div");
        // content.setAttribute('class','accordion-item');
        // newAnchor.appendChild(content);


        // var h2 = document.createElement("h2");
        // h2.setAttribute('class','accordion-header');
        // h2.setAttribute('id','headingOne');
        // content.appendChild(h2);

        // var button = document.createElement("button");
        // button.setAttribute('class','accordion-button');
        // button.setAttribute('type','button');
        // button.setAttribute('data-bs-toggle','collapse' + i);
        // button.setAttribute('data-bs-target','#collapseOne' + i);
        // button.setAttribute('aria-expanded','false');
        // button.setAttribute('aria-controls','collapseOne' + i);

        // h2.appendChild(button)
        // var newTxt = document.createTextNode( "詳細を見る" );
        // button.appendChild( newTxt );

        // var content_in = document.createElement("div");
        // content_in.setAttribute('id','collapseOne' + i);
        // content_in.setAttribute('class','accordion-collapse' + i);
        // content_in.setAttribute('class','collapse' + i);
        //  content_in.setAttribute('class','show');
        // content_in.setAttribute('aria-labelledby','headingOne');
        // content_in.setAttribute('data-bs-parent','#accordionInfo' + i);
        // content.appendChild( content_in );

        // var dl = document.createElement("dl");
        // content_in.appendChild(dl);

        // var dd1 = document.createElement("dd");
        // var newTxt1 = document.createTextNode( "日付：" + data.Date );
        // dd1.appendChild(newTxt1);
        // dl.appendChild(dd1);

        // var dd2 = document.createElement("dd");
        // var newTxt2 = document.createTextNode( "メモ：" + data.Memo );
        // dd2.appendChild(newTxt2);
        // dl.appendChild(dd2);
        // var dd3 = document.createElement("dd");
        // var newTxt3 = document.createTextNode( "種類：" + data.Type );
        // dd3.appendChild(newTxt3);
        // dl.appendChild(dd3);
        // cell3.classList.add('information'+ i);
        // cell3.setAttribute('value',i);
        // newAnchor.setAttribute("href","information.html"  );
        
    }
    
}

$(function() {
    let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
    $(".tab").on("click", function() { // tabをクリックしたらイベント発火
      $(".active").removeClass("active"); // activeクラスを消す

      var val = $(this).attr('class');


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
        var key = num.substr(4,1);

        var intkey = Number(key);
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