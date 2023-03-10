const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.post('/upload-file', async (req, res) => {
    console.log(123);
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
    console.log(12223);
            let file = req.files.file;
            file.mv('./uploads/' + file.name);
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//start app 
const port = process.env.PORT || 3002;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);
