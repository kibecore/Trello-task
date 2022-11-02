$(document).ready(function(){
   function drag_card(){
      var item = document.querySelector('.formcard');
        var target = document.querySelectorAll('.formcard .task');
        var draggable = null;
        target.forEach((i) =>{
            i.addEventListener('dragstart', function(e){
                draggable = this;
            });
            i.addEventListener('dragend', function(e){
                draggable = null;
            });
        })
        item.addEventListener('dragleave', function(e){
            e.preventDefault();
        });
        item.addEventListener('dragover', function(e){
            e.preventDefault();
           
            if(draggable){
               this.append(draggable);
            }
        });
        item.addEventListener('drop', function(e){
            this.appendChild(draggable);
            console.log(draggable);
        })

      //   inwork
      var item = document.querySelector('.formcard_work');
        var target = document.querySelectorAll('.formcard .task');
        var draggable = null;
        target.forEach((i) =>{
            i.addEventListener('dragstart', function(e){
                draggable = this;
            });
            i.addEventListener('dragend', function(e){
                draggable = null;
            });
        })
        item.addEventListener('dragleave', function(e){
            e.preventDefault();
        });
        item.addEventListener('dragover', function(e){
            e.preventDefault();
            if(draggable){
               this.append(draggable);
            }
        });
        item.addEventListener('drop', function(e){
            this.appendChild(draggable);
            console.log(draggable);
        })

      //   review
      var item = document.querySelector('.form_review');
        var target = document.querySelectorAll('.formcard .task');
        var draggable = null;
        target.forEach((i) =>{
            i.addEventListener('dragstart', function(e){
                draggable = this;
            });
            i.addEventListener('dragend', function(e){
                draggable = null;
            });
        })
        item.addEventListener('dragleave', function(e){
            e.preventDefault();
        });
        item.addEventListener('dragover', function(e){
            e.preventDefault();
            if(draggable){
               this.append(draggable);
            }
        });
        item.addEventListener('drop', function(e){
            this.appendChild(draggable);
            console.log(draggable);
        })

      //   done

      var item = document.querySelector('.form_done');
        var target = document.querySelectorAll('.formcard .task');
        var draggable = null;
        target.forEach((i) =>{
            i.addEventListener('dragstart', function(e){
                draggable = this;
            });
            i.addEventListener('dragend', function(e){
                draggable = null;
            });
        })
        item.addEventListener('dragleave', function(e){
            e.preventDefault();
        });
        item.addEventListener('dragover', function(e){
            e.preventDefault();
            if(draggable){
               this.append(draggable);
            }
        });
        item.addEventListener('drop', function(e){
            this.appendChild(draggable);
            console.log(draggable);
        })
   }
   $('.overlay').hide()
   
   $('#btn_todo').click(function(){

      var input_from =
    `<div class="add_todo"> <textarea class="input" type="text" placeholder="Nhập tiêu đề..."></textarea>
      <button class="addcard">Thêm</button>
      <button class="exit">&times;</button>  </div>`;
      $('.input_field').append(input_from)
      $('textarea').focus()
      $('#btn_todo').hide()

      $('.add_work').hide()
      $('.add_review').hide()
      $('.add_done').hide()

      $('#btn_done').show()
      $('#btn_review').show()
      $('#btn_work').show()

      // Close input
      $('.exit').click(function(){
         $('.add_todo').remove()
         
         $('#btn_todo').show()
            
      })
      $('.addcard').click(function(){
         var card_min =
          `<div class="task" draggable="true" style="color: black;"  >
          <div class="backgroud-mini"></div>
              <div class="save_text_div">

                  <h1 class="style title_submit">  ${$('.add_todo textarea').val()}</h1>
              </div>
            <div style="margin-top: 10px;">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-fill" viewBox="0 0 16 16">
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0h-8zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
               </svg>


              <svg xmlns="http://www.w3.org/2000/svg" width="16" class="lock" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
               </svg>
            </div>
      
           </div>`;

           if($('.add_todo textarea').val() == ""){
            var ero = `<p class="no">Không được bỏ trống</p>`;
            $('.error').prepend(ero)
         
            $('textarea').focus()
         
            $('.error').show()
         setTimeout(function(){
            $('.error').hide()
            $('.no').remove()
         },2000);
         
      }else{
         $('.error').show('slow')
         var ss = `<p>Thành công</p>`
         $('.error').append(ss)
         setTimeout(function(){
            $('.error').hide()
   
         },2000);
   
      
         $('.formcard').append(card_min)
         $('.add_todo').remove()
         $('#btn_todo').show()

         drag_card();

         
         
      }  
       // add mô tả
      $('.task').click(function(){
         
         $(this).addClass('task_todo')
         var a = $('.task_todo').html()
   
         var dialog_mota = `
         <dialog class="dl_mota">
        
         <div class="flex_l">
         <div class="background"> </div>
           <div class="dl_title">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-horizontal" viewBox="0 0 16 16">
                  <path d="M1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1Zm11.5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM1 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM1.25 9h5.5a.25.25 0 0 1 0 .5h-5.5a.25.25 0 0 1 0-.5Z"/>
               </svg>
            
               <textarea class="title_text tt_dl">${$('.title_submit').html()}</textarea>
            </div>
            <div class="date_time">
            <p> Thời gian: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16">
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
          </svg> <input type="text" id="datepicker"></p>
            </div> 
            <div class="dl_mo_ta">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
               </svg>
               <p>Mô tả:</p>
            </div>
            <div class="dl_mo_ta_cha">
               <div class="dl_mo_ta_con">
               </div>
               <button class="btn_add_mota">Thêm mô tả chi tiết...</button>
            </div>
            <div class="dl_check_box">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
               </svg>
               <p>Việc cần Làm</p>
               <button class="remove_checkbox"> xóa </button>
            </div>
            <div class="val_checkbox"></div>
            
            <div class="tien_do">
            <div class="da_lam"> </div>
            </div>
            
            <div class="check_box">  </div>
            <div class="btn_check_box">
               <button class="btn_add_check_box">Thêm mục</button>
            </div> 
            <div class="dl_mo_ta">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
               </svg>
               <p>Hoạt động:</p>
            </div>
            <img src="https://profilepicture7.com/img/img_nanshengshanggan/4/1878313097.jpg" alt="avt" class="avt_cmt">
            <textarea class="input" type="text" placeholder="Viết bình luận..."></textarea>
            
         </div>
         <div class="flex_r">
            <button class="close" id="cancel">X</button>
            <p>Thêm vào thẻ </p>

            <button class="btn-flex_r btn_thanh_vien"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
               <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg> Thành viên</button>
            
            <button class="btn-flex_r btn_thanh_vien"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg> Nhãn</button>
            <div class="select-item"> 
            <button class="btn-flex_r move_task"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
          </svg> Di chuyển</button>
          </div>

            
            <button class="btn-flex_r btn_thanh_vien"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
          </svg> Đính kèm</button>
            
            <button class="btn-flex_r btn_backgroud"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
          </svg> Ảnh bìa</button>
            
          

            <button class=" btn-flex_r" id="submit">Save</button>
            <button class="btn-flex_r" id="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg></button>
         </div>
         </dialog>
        
        `;
        $('.overlay').show()
         $('.todo').prepend(dialog_mota)
   
         $('.dl_mota').show()
      

         // chuyển task
         $('.move_task').click(function(){
            var select = `
            <select  class="select_task">
            <option value=""><h1>Di chuyển đến</h1></option>
            <option value="inwork">In work</option>
            <option value="review">Review</option>
            <option value="done">done</option>
          </select>`
          
         $('.move_task').hide()
         $('.select-item').append(select)
         $('.select_task').show()
         $('.select_task').change(function(){

          if($('.select_task').val() == "inwork"){
           var adiv = `<div class="task"  draggable="true" style="color: black;" >${a}</div>`
           
            $('.formcard_work').append(adiv)
            $('.dl_mota').remove()
            $('.task_todo').remove()
            $('.overlay').remove()
            
            $('a').show();
            $('.task').show();
            



           
      
         
            }else if($('.select_task').val() == "review"){
               var adiv = `<div class="task"  draggable="true" style="color: black;" >${a}</div>`
           
               $('.form_review').append(adiv)
               $('.dl_mota').remove()
               $('.task_todo').remove()
               $('.overlay').remove()
               
               $('a').show();
               $('.task').show();


            
               
               
            }else{
               var adiv = `<div class="task"  draggable="true" style="color: black;" >${a}</div>`
           
               $('.form_done').append(adiv)
               $('.dl_mota').remove()
               $('.task_todo').remove()
               $('.overlay').remove()
               
               $('a').show();
               $('.task').show();


            }
            })

         })
         // date time

         $( function() {
            $( "#datepicker" ).datepicker();
          } );


         // edit title



        
            $('#submit').click(function(){
               var tt_fix =`<h1 class="title-fixed">${$('.tt_dl').val()}</h1>`
             

               if($('.tt_dl').val() == ""){
                  var ero = `<p class="no">Không được bỏ trống</p>`;
                  $('.error').prepend(ero)
               
                  $('.form_input_title textarea').focus()
                  $('.yes').hide()
                  $('.task_todo').removeClass()
                  
            
               
                  $('.error').show()
               setTimeout(function(){
                  $('.error').hide()
                  $('.no').remove()
               },2000);
               return false;
               
            }else{
               $('.error').show('slow')
               var ss = `<p class="yes">Thành công</p>`
               $('.error').append(ss)
               $('.no').hide()
               setTimeout(function(){
                  $('.error').hide()
         
               },2000);
         
            
               $('.save_text_div').prepend(tt_fix)
               $('.overlay').remove()
               $('.tt_dl').show()
               $('.title_submit').remove()
               $('.dl_mota').remove()
               

              
              
      
               drag_card();
      
               
               
            } 
           
            })
         

         // them mo ta
         $('.btn_add_mota').click(function(){
            var form_input_mota = `<div class="form_add_mota"> 
            <textarea class="input_mota" type="text" placeholder="Thêm mô tả chi tiết..."></textarea>
            <div class="div_btn_mota">
            <button class="addcard_mota">Lưu</button>
            <button class="exit_mota">Hủy</button>
            </div>  </div>`;
            
            $('.btn_add_mota').hide();
            $('.dl_mo_ta_con').append(form_input_mota);
            $('.form_add_mota').show()

            // cancel
            $('.exit_mota').click(function(){
               $('.form_add_mota').remove()
               $('.btn_add_mota').show();

            })

            //save
            $('.addcard_mota').click(function(){
               var save = `<p class="save_input_mota"> ${$('.input_mota').val()} </p>`
               if($('.input_mota').val() == ""){
                 $('.form_add_mota').remove()
                  $('.btn_add_mota').show()
                  
                 
               
               return false;
               
            }else{
               $('.input_mota').hide()
               $('.div_btn_mota').hide()
               $('.save_text_div').prepend(save)
               $('.save_text_div p').show()
               $('.form_add_mota').append(save)
               $('save').show()
              
               
               
               // click mota
               $('.save_input_mota').click(function(){
                  $('.save_input_mota').remove()
                  $('.input_mota').show()
                  $('.div_btn_mota').show()
                  $('.input_mota').append(save)
                  $('save').show()


               })
              
             
               
            }  

            }) 


         })


         // add, delete, edit check box

         $('.btn_add_check_box').click(function(){
            var formAddcheck = `<div class="form_add_checkbox">
            <textarea class="input_checkbox" type="text" placeholder="Thêm một mục..."></textarea>
            <div class="div_btn_checkbox">
            <button class="addcard_checkbox">Lưu</button>
            <button class="exit_checkbox">Hủy</button></div>`
            $('.btn_add_check_box').hide()
            $('.btn_check_box').append(formAddcheck)
            $('.form_add_checkbox').show()

            // cancel form check
            $('.exit_checkbox').click(function(){
               $('.form_add_checkbox').remove()
               $('.btn_add_check_box').show()
            })

            // add check box
            $('.addcard_checkbox').click(function(){
               var checkBox =
                `<div class="div_check_box"> 
                  <input type="checkbox" id="${$('.input_checkbox').val()}" name="source" value="${$('.input_checkbox').val()}" >
                  <label>
                  ${$('.input_checkbox').val()}
                  </label>
               </div>`
               if($('.input_checkbox').val() == ""){
                  $('.input_checkbox').focus()
                return false;
                
             }else{

                
                $('.check_box').append(checkBox)
                $('checkBox').show()
                $('.input_checkbox').val("")
                
                           
                        } 
                        $(function(){
                           var count = 0;
                           var checked = 0;
                          function countBoxes() { 
                          count = $("input[type='checkbox']").length;
                          console.log(count);
                           }
                       
                           countBoxes();
                          $(":checkbox").click(countBoxes);
                       
                       // count checks
                       
                       function countChecked() {
                          checked = $("input:checked").length;
                     
                          var val_check = parseInt(((checked / count) * 100));
                          $(".da_lam").css('width', val_check + "%");
                          $(".val_checkbox").text(val_check + "%");
                       }
                       
                       countChecked();
                       $(":checkbox").click(countChecked);
           
                                   
                        })


            // xóa check box
            $('.remove_checkbox').click(function(){
               var dlt_cb = `<dialog class="yes_no_remove_check">
         <h1>Bạn muốn xóa nhiệm vụ ?<h1/>
         <button class="btnadd" id="ok">OK<button/> 
         <button class="close" id="huy">Hủy<button/> <dialog/>`
         $('.div_check_box').prepend(dlt_cb)
         
          

            $('.yes_no_remove_check').show()
           
      
            $('#ok').click(function(){
            $('.check_box').remove()
            $('.yes_no_remove_check').remove()  
            
            })
            $('#huy').click(function(){
               $('.yes_no_remove_check').remove()   
               
               })
              

            })

             
             
            })
         })


         // add backgroud
         $('.btn_backgroud').click(function(){
            var dlBackgroud = `
            <dialog class="dl_backgroud">
            <p>Ảnh bìa</p>
            <hr>
            <div class="select_backgroud">
            <img class="photo" src="https://thietbiketnoi.com/wp-content/uploads/2020/01/tong-hop-hinh-nen-background-vector-designer-dep-do-phan-giai-fhd-2k-4k-moi-nhat-24-1024x678.jpg" alt="backgroud-1">
            <img class="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINx69r1kWQrjm6eWTs2cgLsn9i45p10BpaQ&usqp=CAU" alt="backgroud-2">
            <img class="photo" src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg" alt="backgroud-3">
       <br> <img class="photo" src="https://i.pinimg.com/originals/c0/8b/06/c08b06eea315abf8fd7de2a43c779e76.png" alt="backgroud-4">
            <img class="photo" src="https://img.freepik.com/free-vector/hand-drawn-colorful-space-background_52683-12647.jpg?w=2000" alt="backgroud-5">
            <img class="photo" src="https://img6.thuthuatphanmem.vn/uploads/2022/03/16/background-den-led-doi-mau_085305216.jpg" alt="backgroud-6">

            </div> </dialog>`

            $('.flex_r').prepend(dlBackgroud)
            $('.dl_backgroud').show()
            $('.background').show()
            $('.dl_backgroud img').click(function(){
               var dlt_backgroud = `<button class="remove_background">Xóa </button> `
               $('.background').append(dlt_backgroud)
               $('dlt_backgroud').show()

               $(this).addClass('bgr')
               $('.background').css('height', '150px')
               $('.background').css('background', 'url(' + $('.bgr').attr('src') + ')')
               $('.backgroud-mini').css('height', '50px')
               $('.backgroud-mini').css('width', '159px')
               $('.backgroud-mini').css('background', 'url(' + $('.bgr').attr('src') + ')')
               $('.bgr').show()
               $(this).removeClass('bgr')
               $('.dl_backgroud').remove()
               $('.remove_background').click(function(){
                  $('.background').hide()
                  $('.remove_background').remove()
               })
            })
         })





          // xóa dl
         $('#cancel, .overlay').click(function(){ 
            $('.dl_edit').hide()

            $('.task_todo').removeClass('task_todo')  
            $('.dl_mota').remove()
            $('.overlay').hide()
           
            
         })
          // xóa dialog và task
         $('#delete').click(function(){
            $('.dl_edit').hide()
      
            var dlRemove = `<dialog class="dl_rm">
            <h1>Bạn muốn xóa Task ?<h1/>
            <button class="btnadd" id="ok">OK<button/> 
            <button class="close" id="huy">Hủy<button/> <dialog/>`
            $('.todo').prepend(dlRemove)
               $('.dl_rm').show()
               $('.dl_mota').remove()
         
               $('#ok').click(function(){

               $('.overlay').hide()
               $('.dl_rm').remove()  
               $('.dl_mota').remove()
               $('.task_todo').remove()
               })
               $('#huy').click(function(){
                  $('.dl_rm').remove()  
                  $('.dl_mota').remove()
                  $('.overlay').hide()
                  $('.task_todo').removeClass('delete')  
                  })
           
               })
               // sửa dialog
               $('.task').click(function(){
      
                  $(this).addClass('task_todo')
                  var a = $('.task_todo').html() 
                  $('.overlay').show()
                  var  title_edit_max =`<textarea class="title_text">${$('.title-fixed').html()}</textarea>`
                  $('.todo').prepend(dialog_mota)
                  $('.title_text').remove()
                  $('.dl_title').append(title_edit_max)
                  $('title_edit_max').show()

                  
            
                  $('.dl_mota').show()
                  $('.btn_add_mota').hide()
                  var mota_edit = `<div class="form_add_mota"> <textarea class="input_mota m_t">${$('.save_input_mota').html()}</textarea>
                  <div class="div_btn_mota">
                  <button class="addcard_mota">Lưu</button>
                  <button class="exit_mota">Hủy</button>
                  </div>
                  </div>`

                  $('.dl_mo_ta_con').append(mota_edit)
                  $('mota_edit').show()
                  $('.div_btn_mota').hide()
                  $('.save_input_mota').remove()
                  $('.m_t').click(function(){
                     $('.div_btn_mota').show()
                  })
                
                     // cancel
            $('.exit_mota').click(function(){
               $('.form_add_mota').remove()
               $('.btn_add_mota').show();
               $('.save_text_div p').hide()
            })

            //save
            $('.addcard_mota').click(function(){
               var save_edit = `<p class="save_input_mota"> ${$('.m_t').val()} </p>`
               if($('.save_input_mota').val() == ""){
                 $('.form_add_mota').remove()
                  $('.btn_add_mota').show()
                  
                 
               
               return false;
               
            }else{
               $('.m_t').show()
               $('.div_btn_mota').hide()
               $('.save_text_div').prepend(save_edit)

            
             
              
               $('save').show()
            
                  
   
                 
            }
                  
               }) 
         })  
         


        

         // save task
         // $('#submit').click(function(){
         //    var card_max = 
         //    `
         //    <div class="card-save">
              
         //         <h1 class="title_save" style="color: black;">${$('.title-fixed').html()}</h1>
                 
        
         //         <p class="mota_save" style="color: black;"> ${$('.save_input_mota').html()}</p>
         //       </div>
                 
         // `;
         // $('.title_submit').remove()
         
        
         // $('.overlay').hide()  
         // $('.task').prepend(card_max)
         // $('.card-save').show()
         // $('.dl_mota').remove()
         // $('.dl_edit').hide()
         
         // drag_card();


         // // xem chi tiết
         // $('.task').click(function(){
         //    $(this).addClass('task_todo')
         //    var dialogEdit = 
         //    `<dialog class="dl_edit">
         
         //    <h1 style="color: blue;">${$('.task_todo').html()}<h1>
         //    <textarea type="text" class="input" placeholder="Nhập mô tả" >${$('.mota').html()}</textarea>
         //    <div>
         //    <button class="btnadd" id="edit">Save</button>
         //    <button class="close" id="cancel">cancel</button>
         //    <button class="btnadd" id="dlt">Delete</button>
         //    </div>
         //    </dialog>`;
         //    $('.todo').prepend(dialogEdit)
         //    $('.dl_edit').show()
         //    $('textarea').focus()

         //    // huy dialog
         //    $('#cancel').click(function(){   
         //       $('.dl_edit').remove()
         //       $('.task_todo').removeClass('task_todo')  
         //    })

         //    // edit
         //    $('#edit').click(function(){
         //       var ct = `
                
         //               <p style="color: black;">  ${$('.dl_edit textarea').val()}</p>
                       
         //       `;
         //       $('.mota').remove()
               
         //       $('.task_todo').removeClass('task_todo')  
         //       $('.task div').append(ct)
         //       $('.dl_edit').remove()
         //    })
         //    $('#dlt').click(function(){
                
         // var dlt_dl = `<dialog class="sdlt_dl">
         // <h1>Bạn muốn xóa Task ?<h1/>
         // <button class="btnadd" id="ok">OK<button/> 
         // <button class="close" id="huy">Hủy<button/> <dialog/>`
         // $('.todo').prepend(dlt_dl)
         //    $('.sdlt_dl').show()
         //    $('.dl_edit').remove()
      
         //    $('#ok').click(function(){
            
         //    $('.sdlt_dl').remove()  
         //    $('.dl_todo').remove()
         //    $('.task_todo').remove()
         //    })
         //    $('#huy').click(function(){
         //       $('.sdlt_dl').remove()
         //       $('.task_todo').removeClass('task_todo')  
               
         //       })

               
         //    })
                 
         // })
         
         // })

         
        
   
   
      })
      
   })
  
   })


   // in work
   $('#btn_work').click(function(){
      var input_from =
    `<div class="add_work"> <textarea class="input" type="text" placeholder="Nhập tiêu đề..."></textarea>
      <button class="addcard">Thêm</button>
      <button class="close">X</button>  </div>`;
      $('.input_work').append(input_from)
      $('textarea').focus()
      $('#btn_work').hide()

      $('.add_todo').hide()
      $('.add_review').hide()
      $('.add_done').hide()

      $('#btn_done').show()
      $('#btn_review').show()
      $('#btn_todo').show()

      // Close input
      $('.close').click(function(){
         $('.add_work').remove()
         
         $('#btn_work').show()
            
      })
      $('.addcard').click(function(){
         var card_min =
          `<div class="task" draggable="true" ondragstart="drag(event)" style="color: black;"  >

              <h1>  ${$('.add_work textarea').val()}</h1>
      
           </div>`;

           if($('.add_work textarea').val() == ""){
            var ero = `<p class="no">Không được bỏ trống</p>`;
            $('.error').prepend(ero)
         
            $('textarea').focus()
         
            $('.error').show()
         setTimeout(function(){
            $('.error').hide()
            $('.no').remove()
         },2000);
         
   
         return false;
      }else{
         $('.error').show('slow')
         var ss = `<p>Thành công</p>`
         $('.error').append(ss)
         setTimeout(function(){
            $('.error').hide()
   
         },2000);
   
      
         $('.formcard_work').append(card_min)
         $('.add_work').remove()
         $('#btn_work').show()

         drag_card();
         
      }  
       // add mô tả
      $('.task').click(function(){
         
         $(this).addClass('task_work')
   
         var dialog_mota = `<dialog class="dl_mota">
         
         <h1 style="color: blue;">${$('.task_work').html()}<h1>
         <textarea type="text" class="input" placeholder="Nhập mô tả" ></textarea>
         <div>
         <button class="btnadd" id="submit">Save</button>
         <button class="close" id="cancel">cancel</button>
         <button class="btnadd" id="delete">Delete</button>
         </div>
         </dialog>`;
         $('.inwork').prepend(dialog_mota)
   
         $('.dl_mota').show()


          // xóa dl
         $('#cancel').click(function(){ 
            $('.dl_edit').hide()
            $('.task_work').removeClass('task_work')  
            $('.dl_mota').remove()
           
            
         })
          // xóa dialog và task
         $('#delete').click(function(){
            $('.dl_edit').hide()
      
            var dlRemove = `<dialog class="dl_rm">
            <h1>Bạn muốn xóa Task ?<h1/>
            <button class="btnadd" id="ok">OK<button/> 
            <button class="close" id="huy">Hủy<button/> <dialog/>`
            $('.todo').prepend(dlRemove)
               $('.dl_rm').show()
               $('.dl_mota').remove()
         
               $('#ok').click(function(){
             
               $('.dl_rm').remove()  
               $('.dl_mota').remove()
               $('.task_work').remove()
               })
               $('#huy').click(function(){
                  $('.dl_rm').remove()  
                  $('.dl_mota').remove()
                  
                  $('.task_work').removeClass('task_work')  
                  })
            
         })
         $('#submit').click(function(){
            var card_max = 
            `<div class="task"  draggable="true" >
               <div>
                 <h1 class="edt" style="color: black;">${$('.task_work').html()}</h1>
                 <p>Mô tả:<p/>
        
                 <p class="mota" style="color: black;"> ${$('.dl_mota textarea').val()}</p>
               </div>
                 
         </div>`;
         $('.task_work').remove()  
         $('.formcard_work').prepend(card_max)
         $('.dl_mota').remove()
         $('.dl_edit').hide()

         drag_card();


         // xem chi tiết
         $('.task').click(function(){
            $(this).addClass('task_work')
            var dialogEdit = 
            `<dialog class="dl_edit">
         
            <h1 style="color: blue;">${$('.task_work').html()}<h1>
            <textarea type="text" class="input" placeholder="Nhập mô tả" >${$('.mota').html()}</textarea>
            <div>
            <button class="btnadd" id="edit">Save</button>
            <button class="close" id="cancel">cancel</button>
            <button class="btnadd" id="dlt">Delete</button>
            </div>
            </dialog>`;
            $('.inwork').prepend(dialogEdit)
            $('.dl_edit').show()
            $('textarea').focus()

            // huy dialog
            $('#cancel').click(function(){   
               $('.dl_edit').remove()
               $('.task_work').removeClass('task_work')  
            })

            // edit
            $('#edit').click(function(){
               var ct = `
                
                       <p style="color: black;">  ${$('.dl_edit textarea').val()}</p>
                       
               `;
               $('.mota').remove()
               
               $('.task_work').removeClass('task_work')  
               $('.task div').append(ct)
               $('.dl_edit').remove()
            })
            $('#dlt').click(function(){
                
         var dlt_dl = `<dialog class="sdlt_dl">
         <h1>Bạn muốn xóa Task ?<h1/>
         <button class="btnadd" id="ok">OK<button/> 
         <button class="close" id="huy">Hủy<button/> <dialog/>`
         $('.inwork').prepend(dlt_dl)
            $('.sdlt_dl').show()
            $('.dl_edit').remove()
      
            $('#ok').click(function(){
            
            $('.sdlt_dl').remove()  
            $('.dl_work').remove()
            $('.task_work').remove()
            })
            $('#huy').click(function(){
               $('.sdlt_dl').remove()
               $('.task_work').removeClass('task_work')  
               
               })

            })
                 
         })
         })

         
        
   
   
      })
   })
  
   })

   // review

   $('#btn_review').click(function(){
      var input_from =
    `<div class="add_review"> <textarea class="input" type="text" placeholder="Nhập tiêu đề..."></textarea>
      <button class="addcard">Thêm</button>
      <button class="close">X</button>  </div>`;
      $('.input_review').append(input_from)
      $('textarea').focus()
      $('#btn_review').hide()

      $('.add_work').hide()
      $('.add_todo').hide()
      $('.add_done').hide()

      $('#btn_done').show()
      $('#btn_todo').show()
      $('#btn_work').show()

      // Close input
      $('.close').click(function(){
         $('.add_review').remove()
         
         $('#btn_review').show()
            
      })
      $('.addcard').click(function(){
         var card_min =
          `<div class="task" draggable="true" ondragstart="drag(event)" style="color: black;"  >

              <h1>  ${$('.add_review textarea').val()}</h1>
      
           </div>`;

           if($('.add_review textarea').val() == ""){
            var ero = `<p class="no">Không được bỏ trống</p>`;
            $('.error').prepend(ero)
         
            $('textarea').focus()
         
            $('.error').show()
         setTimeout(function(){
            $('.error').hide()
            $('.no').remove()
         },2000);
         
   
         return false;
      }else{
         $('.error').show('slow')
         var ss = `<p>Thành công</p>`
         $('.error').append(ss)
         setTimeout(function(){
            $('.error').hide()
   
         },2000);
   
      
         $('.form_review').append(card_min)
         $('.add_review').remove()
         $('#btn_review').show()
         drag_card();
      }  
       // add mô tả
      $('.task').click(function(){
         
         $(this).addClass('task_review')
   
         var dialog_mota = `<dialog class="dl_mota">
         
         <h1 style="color: blue;">${$('.task_review').html()}<h1>
         <textarea type="text" class="input" placeholder="Nhập mô tả" ></textarea>
         <div>
         <button class="btnadd" id="submit">Save</button>
         <button class="close" id="cancel">cancel</button>
         <button class="btnadd" id="delete">Delete</button>
         </div>
         </dialog>`;
         $('.review').prepend(dialog_mota)
   
         $('.dl_mota').show()


          // xóa dl
         $('#cancel').click(function(){ 
            $('.dl_edit').hide()
            $('.task_review').removeClass('task_review')  
            $('.dl_mota').remove()
           
            
         })
          // xóa dialog và task
         $('#delete').click(function(){
            $('.dl_edit').hide()
      
            var dlRemove = `<dialog class="dl_rm">
            <h1>Bạn muốn xóa Task ?<h1/>
            <button class="btnadd" id="ok">OK<button/> 
            <button class="close" id="huy">Hủy<button/> <dialog/>`
            $('.review').prepend(dlRemove)
               $('.dl_rm').show()
               $('.dl_mota').remove()
         
               $('#ok').click(function(){
             
               $('.dl_rm').remove()  
               $('.dl_mota').remove()
               $('.task_review').remove()
               })
               $('#huy').click(function(){
                  $('.dl_rm').remove()  
                  $('.dl_mota').remove()
                  
                  $('.task_review').removeClass('task_review')  
                  })
            
         })
         $('#submit').click(function(){
            var card_max = 
            `<div class="task"  draggable="true" ondragstart="drag(event)">
               <div>
                 <h1 class="edt" style="color: black;">${$('.task_review').html()}</h1>
                 <p>Mô tả:<p/>
        
                 <p class="mota" style="color: black;"> ${$('.dl_mota textarea').val()}</p>
               </div>
                 
         </div>`;
         $('.task_review').remove()  
         $('.form_review').prepend(card_max)
         $('.dl_mota').remove()
         $('.dl_edit').hide()
         drag_card();


         // xem chi tiết
         $('.task').click(function(){
            $(this).addClass('task_review')
            var dialogEdit = 
            `<dialog class="dl_edit">
         
            <h1 style="color: blue;">${$('.task_review').html()}<h1>
            <textarea type="text" class="input" placeholder="Nhập mô tả" >${$('.mota').html()}</textarea>
            <div>
            <button class="btnadd" id="edit">Save</button>
            <button class="close" id="cancel">cancel</button>
            <button class="btnadd" id="dlt">Delete</button>
            </div>
            </dialog>`;
            $('.review').prepend(dialogEdit)
            $('.dl_edit').show()
            $('textarea').focus()

            // huy dialog
            $('#cancel').click(function(){   
               $('.dl_edit').remove()
               $('.task_review').removeClass('task_review')  
            })

            // edit
            $('#edit').click(function(){
               var ct = `
                
                       <p style="color: black;">  ${$('.dl_edit textarea').val()}</p>
                       
               `;
               $('.mota').remove()
               
               $('.task_review').removeClass('task_review')  
               $('.task div').append(ct)
               $('.dl_edit').remove()
            })
            $('#dlt').click(function(){
                
         var dlt_dl = `<dialog class="sdlt_dl">
         <h1>Bạn muốn xóa Task ?<h1/>
         <button class="btnadd" id="ok">OK<button/> 
         <button class="close" id="huy">Hủy<button/> <dialog/>`
         $('.review').prepend(dlt_dl)
            $('.sdlt_dl').show()
            $('.dl_edit').remove()
      
            $('#ok').click(function(){
            
            $('.sdlt_dl').remove()  
            $('.dl_review').remove()
            $('.task_review').remove()
            })
            $('#huy').click(function(){
               $('.sdlt_dl').remove()
               $('.task_review').removeClass('task_review')  
               
               })

            })
                 
         })
         })

         
        
   
   
      })
   })
  
   })

   // done

   $('#btn_done').click(function(){
      var input_from =
    `<div class="add_done"> <textarea class="input" type="text" placeholder="Nhập tiêu đề..."></textarea>
      <button class="addcard">Thêm</button>
      <button class="close">X</button>  </div>`;
      $('.input_done').append(input_from)
      $('textarea').focus()
      $('#btn_done').hide()

      $('.add_work').hide()
      $('.add_todo').hide()
      $('.add_review').hide()

      $('#btn_review').show()
      $('#btn_todo').show()
      $('#btn_work').show()

      // Close input
      $('.close').click(function(){
         $('.add_done').remove()
         
         $('#btn_done').show()
            
      })
      $('.addcard').click(function(){
         var card_min =
          `<div class="task" draggable="true" ondragstart="drag(event)" style="color: black;"  >

              <h1>  ${$('.add_done textarea').val()}</h1>
      
           </div>`;

           if($('.add_done textarea').val() == ""){
            var ero = `<p class="no">Không được bỏ trống</p>`;
            $('.error').prepend(ero)
         
            $('textarea').focus()
         
            $('.error').show()
         setTimeout(function(){
            $('.error').hide()
            $('.no').remove()
         },2000);
         
   
         return false;
      }else{
         $('.error').show('slow')
         var ss = `<p>Thành công</p>`
         $('.error').append(ss)
         setTimeout(function(){
            $('.error').hide()
   
         },2000);
   
      
         $('.form_done').append(card_min)
         $('.add_done').remove()
         $('#btn_done').show()
         drag_card();
      }  
       // add mô tả
      $('.task').click(function(){
         
         $(this).addClass('task_done')
   
         var dialog_mota = `<dialog class="dl_mota">
         
         <h1 style="color: blue;">${$('.task_done').html()}<h1>
         <textarea type="text" class="input" placeholder="Nhập mô tả" ></textarea>
         <div>
         <button class="btnadd" id="submit">Save</button>
         <button class="close" id="cancel">cancel</button>
         <button class="btnadd" id="delete">Delete</button>
         </div>
         </dialog>`;
         $('.done').prepend(dialog_mota)
   
         $('.dl_mota').show()


          // xóa dl
         $('#cancel').click(function(){ 
            $('.dl_edit').hide()
            $('.task_done').removeClass('task_done')  
            $('.dl_mota').remove()
           
            
         })
          // xóa dialog và task
         $('#delete').click(function(){
            $('.dl_edit').hide()
      
            var dlRemove = `<dialog class="dl_rm">
            <h1>Bạn muốn xóa Task ?<h1/>
            <button class="btnadd" id="ok">OK<button/> 
            <button class="close" id="huy">Hủy<button/> <dialog/>`
            $('.done').prepend(dlRemove)
               $('.dl_rm').show()
               $('.dl_mota').remove()
         
               $('#ok').click(function(){
             
               $('.dl_rm').remove()  
               $('.dl_mota').remove()
               $('.task_done').remove()
               })
               $('#huy').click(function(){
                  $('.dl_rm').remove()  
                  $('.dl_mota').remove()
                  
                  $('.task_done').removeClass('task_done')  
                  })
            
         })
         $('#submit').click(function(){
            var card_max = 
            `<div class="task"  draggable="true" ondragstart="drag(event)">
               <div>
                 <h1 class="edt" style="color: black;">${$('.task_done').html()}</h1>
                 <p>Mô tả:<p/>
        
                 <p class="mota" style="color: black;"> ${$('.dl_mota textarea').val()}</p>
               </div>
                 
         </div>`;
         $('.task_done').remove()  
         $('.form_done').prepend(card_max)
         $('.dl_mota').remove()
         $('.dl_edit').hide()

         drag_card();


         // xem chi tiết
         $('.task').click(function(){
            $(this).addClass('task_done')
            var dialogEdit = 
            `<dialog class="dl_edit">
         
            <h1 style="color: blue;">${$('.task_done').html()}<h1>
            <textarea type="text" class="input" placeholder="Nhập mô tả" >${$('.mota').html()}</textarea>
            <div>
            <button class="btnadd" id="edit">Save</button>
            <button class="close" id="cancel">cancel</button>
            <button class="btnadd" id="dlt">Delete</button>
            </div>
            </dialog>`;
            $('.done').prepend(dialogEdit)
            $('.dl_edit').show()
            $('textarea').focus()

            // huy dialog
            $('#cancel').click(function(){   
               $('.dl_edit').remove()
               $('.task_done').removeClass('task_done')  
            })

            // edit
            $('#edit').click(function(){
               var ct = `
                
                       <p style="color: black;">  ${$('.dl_edit textarea').val()}</p>
                       
               `;
               $('.mota').remove()
               
               $('.task_done').removeClass('task_done')  
               $('.task div').append(ct)
               $('.dl_edit').remove()
            })
            $('#dlt').click(function(){
                
         var dlt_dl = `<dialog class="sdlt_dl">
         <h1>Bạn muốn xóa Task ?<h1/>
         <button class="btnadd" id="ok">OK<button/> 
         <button class="close" id="huy">Hủy<button/> <dialog/>`
         $('.done').prepend(dlt_dl)
            $('.sdlt_dl').show()
            $('.dl_edit').remove()
      
            $('#ok').click(function(){
            
            $('.sdlt_dl').remove()  
            $('.dl_done').remove()
            $('.task_done').remove()
            })
            $('#huy').click(function(){
               $('.sdlt_dl').remove()
               $('.task_done').removeClass('task_done')  
               
               })

            })
                 
         })
         })
      })
   })
  
   })

   
   
})


