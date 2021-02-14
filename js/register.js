window.onload = function() {
    var today = new Date;
    var year =	today.getFullYear();	    	
    var month = today.getMonth() +1;
    var day = today.getDate();
    //   localStorage.clear();
    
    let element = document.getElementById('date');

    element.textContent = year + "年" + month + "月" + day + "日";

    var last=0;

    let key = [];
    for(let i=1; i<=localStorage.length; i++) {
        key = JSON.parse(localStorage.getItem(i));
        last++
        console.log(key.Root);
      }
      document.getElementById('count').value = last;
      console.log(document.getElementById('count').value);
};

function save(){
    var last=0;
    last = Number(document.getElementById('count').value);

    var root = null;
    var name = null;
    var date = null;
    var memo = null;
    var type = null;
    last = last + 1;

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
     last=last++;
     var key = last;
    localStorage.setItem(key,JSON.stringify(input));
    document.getElementById('root').value = "";
    document.getElementById('name').value = "";
    document.getElementById('memo').value = "";
    $('input[name="type"]:checked').prop('checked', false);
    document.getElementById('count').value = last;
    alert('登録されました');
    }else{
        if(root == null){
            alert('パスかURLが入力されていません');
        }else{
            alert('名前が入力されていません');
        }
    }
}