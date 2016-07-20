'use strict';

const onSuccess = function(data){
  if(data.book){
    $('.result').text(data.book.title);
    let author=$("<p></p>").text(data.book.author);
    $(".result").append(author);
    console.log(data.book);
  }else{
    for (let i = data.books.length-1; i >=0; i--) {
      let bookList=$("<li></li>").text(data.books[i].title);
      let authorList=$("<p></p>").text(data.books[i].author);
      $(".result").prepend(bookList,authorList);
    }
    console.log(data.books);
    }

};

const onError=function(reponse){
  console.error(response);
};



module.exports = {
  onSuccess,
  onError
};
