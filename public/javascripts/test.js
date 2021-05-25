$(function (){
    $('.departName').click(()=>{
      let message = document.getElementById("queryInput").value
      $.ajax({
          url:"/begin/"+message,
          type:'post',
          success: (data) =>{
              document.getElementById('biao').innerHTML =
              data.map(o =>
              `
              <tr>
              <td>${ o.regname}</td>
              <td>${ o.regpass}</td>
              <td>${ o.create_time}</td>
              
              <td>
              <button class="c3 delete"  data-id=${ o.id }>删除</button>
              </td>
      </tr>
              
              `).join(" ");
          }
      })
    })


    Array.from($('.delete')).forEach(i =>   //  /del/:id  conn.qu(SQL,(ERR,RES) RES.S)
        i.onclick = function(){
            let id = i.getAttribute('data-id')
            $.ajax({
                url: "/begin/del/"+id,
                type: "delete",
                success: function(data){
                    if(data =='success'){
                        alert('成功删除')
                        $(i).parent().parent().remove()
                    }
                }
            })
        })
})


Array.from(document.getElementsByClassName('update')).forEach(i=>{
    i.onclick =function(){
        let ind = this.getAttribute('data-id1')
        window.location.href='/begin/upd/'+ind
    }
})