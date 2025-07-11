// ملف: index.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const intent = req.body.queryResult.intent.displayName;

  let responseText = 'لم أفهم، هل يمكنك التوضيح؟';

  if (intent === 'Hello') {
    responseText = 'أهلاً بك في بوت التخرج!';
  }

  res.json({
    fulfillmentText: responseText
  });
});

app.listen(3000, () => console.log('Webhook يعمل على المنفذ 3000'));
