const express = require('express');
const app = express();
const { engine } = require('express-handlebars');


app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use(express.static('images'));

// routing 
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Home Page', 
        source1: "https://handlebarsjs.com/guide/",
        source2: 'https://nvd.nist.gov/vuln/detail/cve-2019-20920',
        source3: 'https://portswigger.net/web-security/server-side-template-injection/exploiting/lab-server-side-template-injection-in-an-unknown-language-with-a-documented-exploit',
        source4: 'https://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html'
    });

})

app.get('/lookup', (req, res)=>{
    res.render('lookup', 
    {title: 'lookup helper',
    user: {
        username: 'LeeSullivan',
        age: 20,
        email: 'hsullivan@stetson.edu'
    },
    });
})

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});
