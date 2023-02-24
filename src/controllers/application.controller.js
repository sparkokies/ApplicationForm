const fs = require('fs');
const saveApplication = (req, res) => {

    const { name, email, phone, position, message} = req.body

    const preparedData = `${name}, ${email}, ${phone}, ${position}, ${message} \n`;
    try{
        saveToFile(preparedData);
        const message = "File saved successfully";
        return res.redirect('/?msg=' + message)
    }catch(error)
    {
        console.log({error})
        const message = "Error saving application data";
        return res.redirect('/?msg=' + message)
    }

}

const renderHome = (req, res) => {
    var msg = req.query.msg ? req.query.msg : null;
    res.render('welcome', {msg});
}

const saveToFile = (data) => {
    const filePath =  createFile('application.csv');
    fs.appendFileSync(filePath, data, 'utf-8');
}

const createFile = (path) => {
    if(!fs.existsSync(path)){
        const defaultHeaders  = "name, email, phone, position, message \n";
        fs.writeFileSync(path, defaultHeaders, 'utf-8');
    }
    return path;
}

module.exports = {saveApplication,renderHome};