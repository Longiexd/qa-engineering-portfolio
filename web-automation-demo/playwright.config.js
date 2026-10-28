const {defineConfig}=require('@playwright/test');
module.exports=defineConfig({testDir:'./tests',workers:2,retries:0,timeout:30000,reporter:[['list'],['html',{open:'never'}],['junit',{outputFile:'test-results/results.xml'}]],use:{baseURL:'https://jsonplaceholder.typicode.com',extraHTTPHeaders:{Accept:'application/json'}}});
