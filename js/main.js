var siteName=document.querySelector("#siteName")
var siteUrl=document.querySelector("#siteUrl")
var bttnn=document.querySelector("#bttnn")
var siteName=document.querySelector("#siteName")
var bookList = [];

function productt(){

    var product = {
        titel : siteName.value
        
    } ;
    bookList.push(productt)
    
    display()

}


function display(){

    var temb = ""

    for(var i = 0 ;i<bookList.length;i++){

        temb+=`  <tr>
        <th scope="row"> `+i+` </th>
        
        <td>`+bookList[i]+`</td>
        <td><button class="btn btn-success"><span><i class="fa-regular fa-eye"></i></span> Visit</button></td>
        <td><button class="btn btn-danger"><span><i class="fa-solid fa-trash-can"></i></span> Delete</button></td>
      </tr>`

    }
    console.log(bookList[i]);
    
    document.getElementsByClassName("hnzwd").innerHTML=temb

}




















