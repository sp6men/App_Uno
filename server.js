let express = require('express')
let app = express()

let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%=  %>', {});
    
    
app.set('view engine', 'ejs')

app.use('/static', express.static('public'))
// app.use('/static', express.static(__dirname + '/files'));

app.get('/', (request, response) => {
    response.render('pages/index', {test: 'saluttt'})
    
})
app.listen(8080)