'use strict';


const libraryApi=require('./library-api');
const ui=require('./ui');

const onGetBooks = function(event){
  event.preventDefault();

let bookId=$('.book-id').val();
if(bookId.length===0){
  libraryApi.index()
    .done(ui.onSuccess)
    .fail(ui.onError);
}else{
  libraryApi.show(bookId)
  .done(ui.onSuccess)
  .fail(ui.onError);
}
};

//document ready
$(() =>{
  $('#book-request').on('submit',onGetBooks);
});
