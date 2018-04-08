/***********************************************************

 Export Index Page Controller logic & Model

 Architecture:
 ------------- 

  App.js ---> Routes ---> Controllers

  Where:

  Routes: index.js
  Controllers: indexController.js, aboutController.js

***********************************************************/
module.exports.aboutCtrl = function(req, res){
  res.render('about', {
    title: 'About - Some About Page Title here',
    pageHeader: {
      title: 'Another Title here!:',
      strapline: 'Some Text!'
    },
    extraAboutData: [{
      name: 'Extra Data',
      type: 'Some random string',
      index: 1,
      image:'/images/some-img.jpg',
      items: ['Toilets', 'Food', 'Premium wifi'],
      extra: '10 minutes'
    }]
  });
};

