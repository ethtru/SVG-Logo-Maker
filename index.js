const inquirer = require('inquirer');
const {Circle, Square, Triangle } = require('./lib/shapes.js')
const {writeFile} = require('fs/promises')

inquirer.prompt([
    {
        message: 'Please enter text',
        type: 'input',
        validate: (text)=> {
            return text.length <= 3 || 'Message should not have more than three characters!'
        },
        name: 'text',
    },
    {
        message: 'Please enter text color.',
        type: 'input',
        name: 'textColor',
        default: 'white'
    },
    {
        message: 'Please choose a shape.',
        type: 'list',
        name: 'shape',
        choices:['square', 'circle', 'triangle']
    },
    {
        message: 'Please select a color for the shape.',
        type: 'input',
        name: 'shapeColor',
        default: 'black'
    },

]).then(answers => {
    let shape;
    switch (answers.shape){
        case 'square': 
            shape = new Square()
            shape.setColor(answers.shapeColor)
            break;
        case 'circle': 
            shape = new Circle()
            shape.setColor(answers.shapeColor)
            break; 
        case 'triangle': 
            shape = new Triangle()
            shape.setColor(answers.shapeColor)
            break;   
    }
    const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
    `
    return writeFile('./examples/logo.svg', svg)
}).then(()=> console.log('Logo was successfully created!'))
.catch((err)=> console.log(err))

