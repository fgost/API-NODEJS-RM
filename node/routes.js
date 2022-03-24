const axios = require('axios');
const tools = require('./tools');
const fs = require('fs');



const routes =(app) =>{ 
  const path = require('path')
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  })

  //************************************Caracter section************************************
  //initial characters page
  app.get('/char', async (req, res) => {
    try {
      const character = await axios.get(`https://rickandmortyapi.com/api/character`);
      res.render('allChars', {data: character.data, cssFile: 'chars.css'});
      const data = JSON.stringify(character.data);
      tools.dirCheck();
      tools.writeHD(data);
    } catch (error) {
      tools.handleError(error);
    }
  });

  //will get all characters per pages
  app.get('/char:id', async (req, res) => {
    try{
      const character = await axios.get(`https://rickandmortyapi.com/api/character/?page=${req.params.id}`);
      res.render('allChars', {data: character.data, cssFile: 'chars.css'});
      const texto = JSON.stringify(character.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });

  //will get a single character
  app.get('/char/:id', async (req, res) => {
    try {
      const character = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`);
      res.render('singleChar', {data: character.data, cssFile: 'singleChar.css'});
      const texto = JSON.stringify(character.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });
    
  //************************************location section************************************
  //initial locations page
  app.get('/loc', async (req, res) => {
    try{
      const location = await axios.get(`https://rickandmortyapi.com/api/location?page=1`);
      res.render('allLoc', {data: location.data, cssFile: 'locations.css'});
      const texto = JSON.stringify(location.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });
  //will get all locations per pages
  app.get('/loc:id', async (req, res) => {
    try{
      const location = await axios.get(`https://rickandmortyapi.com/api/location?page=${req.params.id}`);
      res.render('allLoc', {data: location.data, cssFile: 'locations.css'});
      const texto = JSON.stringify(location.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });

  //will get a single location
  app.get('/loc/:id', async (req, res) => {
    try{
      const location = await axios.get(`https://rickandmortyapi.com/api/location/${req.params.id}`);
      res.render('singleLoc', {data: location.data, cssFile: 'singleLocation.css'});
      var texto = JSON.stringify(location.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });

  //************************************episode sections************************************
  //initial episodes page 
  app.get('/epi', async (req, res) => {
    try{
      const episodes = await axios.get(`https://rickandmortyapi.com/api/episode`);
      res.render('allEpi', {data: episodes.data, cssFile: 'episodes.css'});
      var texto = JSON.stringify(episodes.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });

  //will get all episodes per pages
  app.get('/epi:id', async (req, res) => {
    try{
      const episodes = await axios.get(`https://rickandmortyapi.com/api/episode?page=${req.params.id}`);
      res.render('allEpi', {data: episodes.data, cssFile: 'episodes.css'});
      var texto = JSON.stringify(episodes.data);
      fs.writeFileSync('consumo.txt', texto);
    } catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }
  });

  //willl get a single episode
  app.get('/epi/:id', async (req, res) =>{
    try{
      const episodes = await axios.get(`https://rickandmortyapi.com/api/episode/${req.params.id}`);
      res.render('singleEpi', {data: episodes.data, cssFile: 'singleEpi.css'});
      var texto = JSON.stringify(episodes.data);
      fs.writeFileSync('consumo.txt', texto);
    }catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }   
  })

  //************************************contact page************************************************* */
  app.get('/contact', async (req, res) =>{
    try{
      res.sendFile(path.join(__dirname, '/contactUs.html'));
    }catch (error) {
      console.error('see error log file');
      fs.writeFileSync('errorLog.txt', error.message);
    }   
  })

};
module.exports = routes


  // //return a JSON file
  // app.get('/char/json', async (req, res) => {
  //   try {
  //     const rickAndMorty = await axios.get(`https://rickandmortyapi.com/api/character`);
  //     //console.log('rickAndMorty', rickAndMorty.data);
  //     res.json(rickAndMorty.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // });