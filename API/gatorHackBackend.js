
const express = require('express')
const app = express()
const port = 5000
const OpenAI = require('openai')
const { userInfo } = require('os')
app.use(express.json())
var cors = require('cors');
app.use(cors());
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/', async (req, res) => {
  console.log("recieved connection")
  user_Message = req.body.message
  
  gpt_Out = await sendMessage(process.env.ADD_TO_BEFORE+user_Message + process.env.ADD_TO_END)
  console.log("output: " + gpt_Out.content)
  res.json({source:"gpt", message:gpt_Out})
})

app.listen(port,"127.0.0.1", () => {
  console.log(`Example app listening on port ${port}`)
})


message_History = [{role: "system", content: process.env.START_ROLEPLAY}]

async function sendMessage(user_Message){
  /*
  message_History.push({role: "user", content:user_Message})
  //for(var i = 0; i< message_History.length;i++){
   // console.log(message_History[i].content + '\n')
  //}
  const chatCompletion = await openai.chat.completions.create({
    messages: message_History,
    model: "gpt-3.5-turbo",
  });
  //message_History.pop()
  message_History.push({role: 'assistant', content:JSON.parse(chatCompletion.choices[0].message.content).message})
  return chatCompletion.choices[0].message
*/

  x = Math.floor(Math.random() * 3);
  console.log("Random # " + x)
  if(x == 0){
    return {"content":'{"message": "poop","key_terms": ["poop key", "poop keys", "poops key"],"followup_questions":["poop?", "poop question?", "poops question?"],"recommended_products": [{"name":"poop1","price":"1 gorbillion dollars","description": "its a poop"},{"name":"poop2","price":"1 gorbillio00n dollars","description": "its a poop"},{"name":"poop3","price":"1 gorbillion dollars","description": "its a poop"}]}'}
  }
  else if(x == 1){
    return {"content":'{"message": "poop","key_terms": ["poo1111p", "11poo key", "po1p1p key"],"followup_questions":["11poop??", "111poop??", "1111 poops question?"],"recommended_products": [{"name":"1poop1","price":"1 gorb111illion dollars","description": "its a poop"},{"name":"1poop2","price":"1 gorbillion dollars","description": "it111s a poop"},{"name":"1poop3","price":"1 gorbillion dollars","description": "its a poop"}]}'}
  }else{
    return {"content":'{"message": "poop","key_terms": ["po22p key", "number 2.. key", "p222222p key"],"followup_questions":["p222op???", "222poops????", "222 poop. actually yeah. poop"],"recommended_products": [{"name":"2poop1","price":"1 gorbilli222on dollars","description": "its a poop"},{"name":"2222poop2","price":"1 gorbillion222 dollars","description": "its a poop"},{"name":"2222poop3","price":"1 gorbillion dollars","description": "its a poop"}]}'}



}
}




