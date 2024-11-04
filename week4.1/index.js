
const fs = require('fs');
const { Command } = require('commander');

const program = new Command();


function ReadFile(file){
  console.log(process.argv);
  fs.readFile(file, 'utf-8', function(err, data){
      if (err){
        console.log(err);
      }
      else {
        let count=0;
        for(let i= 0; i < data.length; i++){
          if (data[i] === " "){
            count++;
          }   
        }
        console.log(`this file ${file} has ${count + 1} spaces`);
      }
  })
}

function countSentences(file){
  fs.readFile(file, 'utf-8', function(err, data){
    if (err){
      console.log(err);
    }
    else {
      let count=0;
      for(let i= 0; i < data.length; i++){
        if (data[i] === "\n"){
          count++;
        }   
      }
      console.log(`this file ${file} has ${count} lines`);
    }
})
}

function addText(file, text){
  const texttoadd = text.join(" ");
  fs.appendFile(file, texttoadd +'\n', function(err){
    if (err){
    console.log(err);
    }
    else{
      console.log(`this new text ${texttoadd} has been added to ${file}`);
    }
  })
}

program
  .name('File Related CLI')
  .description('CLI to do file based task')
  .version('0.8.0');

program
  .command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .option('pawan','help provided')
  .action(ReadFile);

program
  .command('countSen')
  .description('counts the no of Sentences in the file')
  .argument('<file>')
  .action(countSentences);

program 
  .command('add')
  .description('Adds Text To your File')
  .argument('file', 'file in which text to be added')
  .argument('<text...>', 'text to be added')
  .action(addText);

  program.parse();
