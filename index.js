const prog = require('caporal');

prog
  .version('1.0.0')
  
//   #1 String Transformation

  .command('lowercase', 'convert words to lowercase')
  .argument('input', "input into lowercase")
  .action(function(args, options, logger) {
    return console.log(args.input.toLowerCase())
  })

  .command('uppercase', 'convert words to uppercase')
  .argument('input', "input into uppercase")
  .action(function(args, options, logger) {
    return console.log(args.input.toUpperCase())
  })

  .command('capitalize', 'convert words to capitalize')
  .argument('input', "text to capitalize")
  .action((args, options, logger) => {
        let splitStr = args.input.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return console.log(splitStr.join(' '));
  })

//   #2 Arithmetic

.command('arithmetic', 'command arithmetic')
.argument('input', "arithmetic number")
.action(function(args, options, logger) {
  return console.log(args.input.map(num => num + num))
})

// #3 Palindrome

.command('palindrome', 'check words is palindrome?')
.argument('input', "words palindrome")
.action((args, options, logger) => {
    let result = args.input.split('').reverse('').join('')
    console.log(`String: ${result}`)

    return args.input.toLowerCase() === result.toLowerCase()? console.log('Palindrome? Yes') : console.log('Palindrome? No')
})

// #4 Obfuscator

.command('obfuscator', 'make obfuscator in javascript')
.argument('input', "input text to obfuscate")
.action((args, options, logger) => {
    let result = args.input.split('')
        .map(obfuscate => {
            return '&#' + obfuscate.charCodeAt(0) + ';'
        })
        .join('')
    return console.log(result)
})

// #5 Random String

.command('random', 'generate random string')
.option('--length', 'How much app to deploy', prog.INT, 1)
.action((args, options, logger) => {
    let random = '';
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 32; i > 0; --i) {
        random += charSet[Math.round(Math.random()* (charSet.length-1))]
    }
    console.log(random)
})


prog.parse(process.argv);