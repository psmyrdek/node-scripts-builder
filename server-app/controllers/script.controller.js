const fs = require('fs')
const path = require('path')

module.exports = (req, res, next) => {

    const config = {
        rootElSelector: '#nsb-container',
        labels: {
            buttonLabel: 'Hello world'
        }
    };

    res.contentType('application/javascript')

    fs.readFile(path.join(__dirname, '../../client-app/dist/demo-app.js'), { encoding: 'utf-8' }, (err, data) => {
        res.status(200).send(data.replace('[NSB_CONFIG_PLACEHOLDER]', JSON.stringify(config)))
    })

}