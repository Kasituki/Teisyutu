window.onload = function() {
    var today = new Date;
    var year =	today.getFullYear();	    	
    var month = today.getMonth() +1;
    var day = today.getDate();
    // localStorage.clear();
    
    let element = document.getElementById('date');

    element.textContent = year + "年" + month + "月" + day + "日";

    var last=0;

    let icon = [];
    let key = '0';
    for(let i=0; i<localStorage.length; i++) {
         key = localStorage.key(i);
        console.log('i:'+i);
        console.log('key:'+key);
        console.log('localStorage.length:'+localStorage.length);
      last=last++;
        icon = JSON.parse(localStorage.getItem(key));
        console.log(icon.Root);
      }
};

function save(){


    var root = null;
    var name = null;
    var date = null;
    var memo = null;
    var type = null;

     root = document.getElementById('root').value;
     name = document.getElementById('name').value;
     date = document.getElementById('date').innerHTML;
     memo = document.getElementById('memo').value;
     type = $('input[name="type"]:checked').val();

    if(root !== '' && name !== ''){
    const input = {
        Root : root,
        Name : name,
        Date : date,
        Memo : memo,
        Type : type
    } ;
    console.log(input);
    var last='0';

    /**localstrageの中にどれだけ入ってるかをチェック */
    last = localStorage.length;

    console.log('last:' +last);
    var setKey = '';
    setKey =localStorage.length;
    console.log(setKey);


    // setKey = localStorage.key(last);
    console.log('setKey:'+setKey);
    console.log('length:' + localStorage.length);

    localStorage.setItem(setKey,JSON.stringify(input));
    document.getElementById('root').value = "";
    document.getElementById('name').value = "";
    document.getElementById('memo').value = "";
    $('input[name="type"]:checked').prop('checked', false);
    var count = document.getElementById('count').value;


    count = localStorage.length;
    console.log('count:'+count);
    alert('登録されました');

    }else{
        if(root == null){
            alert('パスかURLが入力されていません');
        }else{
            alert('名前が入力されていません');
        }
    }
}