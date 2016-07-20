'use strict';

const app=require('./app');

const index=function(){
  return $.ajax({
    method: 'GET',
    url:app.host +'/books'
  });
};

const show = function(id){
 return $.ajax({
   method:'GET',
   url:app.host + '/books/' + id
 });
};

module.exports = {
  index,
  show
};
