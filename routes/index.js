const express = require('express');
const router = express();
const fetch = require('node-fetch');

router.get('/', (req, res) =>{
    /*
    async function serviceReports(){
        const getNews = req.params.newsId;
        const newNews = await fetch("http://studentdocker.informatika.uni-mb.si:3050/new");
        //const newNews = await fetch("http://novicke-nove-novicke-api:4000/new");
        const responseNewNews = await newNews.json();
        const responseNewsArray = []
        for(const newNews of responseNewNews){
            //console.log(newNews.newsId);
            const news = await fetch(`http://studentdocker.informatika.uni-mb.si:12001/api/v1/news/${newNews.newsId}`);
            //const news = await fetch("http://novicke-novice-service-api:12001/api/v1/news/");
            const responseNews = await news.json();
            console.log(responseNews.newsTitle)
            responseNewsArray.push(responseNews);
        }
        //console.log(responseNewsArray);
        res.render('../views/newNews', {responseNews: responseNewsArray})
        
      }
    serviceReports();
    */
   console.log('test')
    res.render('../views/index')
});

module.exports = router;