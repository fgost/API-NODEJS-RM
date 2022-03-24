const fs = require('fs');

const DIR_CONSUMO = './logs/consumo';
const DIR_ERRO = './logs/erro';
const ERROR_FILE = './logs/erro/errorLog.txt';
const WRITE_FILE = './logs/consumo/consumo.json';

const dirCheck = function() {

    //Verifica se não existe
    if (!fs.existsSync(DIR_CONSUMO)){
        //Efetua a criação do diretório
        fs.mkdirSync(DIR_CONSUMO);
    }
    
    //Verifica se não existe
    if (!fs.existsSync(DIR_ERRO)){
        //Efetua a criação do diretório
        fs.mkdirSync(DIR_ERRO);
    }
};

const handleError = function(error) {
    console.error('see error log file');
    console.error(error);
    dirCheck();
    fs.appendFile(ERROR_FILE, error);
};

const writeHD = function(data){
    fs.writeFileSync(WRITE_FILE, data);
}

module.exports = {
    handleError,
    dirCheck, 
    writeHD,
}
