const express = require('express');
const router = express();
const fetch = require('node-fetch');

router.get('/', (req, res) =>{
    
    async function serviceReports(){

        const reportsNewNews = await fetch("https://new-news-reports.herokuapp.com/numCalls");
        const responseReportsNewNews = await reportsNewNews.json();
        console.log(responseReportsNewNews.numCalls);
        const reportsLogin = await fetch("http://164.8.9.88:12005/api/v1/statistics/endpoint_calls");
        const responseReportsLogin = await reportsLogin.json();
        const numCallsLogin = responseReportsLogin[2].stDostopov;
        console.log(responseReportsLogin[2].stDostopov);

        res.render('../views/index', {newNews: responseReportsNewNews, login: numCallsLogin})
      }
    serviceReports();

});

module.exports = router;