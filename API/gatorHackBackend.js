
const express = require('express')
const app = express()
const port = 3000
const OpenAI = require('openai')
const { userInfo } = require('os')
app.use(express.json())
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/', async (req, res) => {
  console.log("recieved connection")
  user_Message = req.body.message
  gpt_Out = await sendMessage(process.env.ADD_TO_BEFORE+user_Message + process.env.ADD_TO_END)
  
  res.json({source:"gpt", message:gpt_Out})
})

app.listen(port,"127.0.0.1", () => {
  console.log(`Example app listening on port ${port}`)
})


message_History = [{role: "system", content: process.env.START_ROLEPLAY}]

async function sendMessage(user_Message){
  message_History.push({role: "user", content:user_Message})
  const chatCompletion = await openai.chat.completions.create({
    messages: message_History,
    model: "gpt-3.5-turbo",
  });
  message_History.push({role: 'assistant', content:JSON.parse(chatCompletion.choices[0].message.content).message})
  return chatCompletion.choices[0].message
}




