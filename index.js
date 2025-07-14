const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/webhook', (req, res) => {
  let responseText = 'لم أفهم، هل يمكنك التوضيح؟';

  // نحاول نقرأ intent من طلب Dialogflow إذا موجود
  const intent = req.body?.queryResult?.intent?.displayName;

  if (intent === 'Hello') {
    responseText = 'أهلاً بك في بوت التخرج!';
  }

  // إذا ما في intent، مثلاً جاي من Flutter مباشرة
  if (!intent) {
    const message = req.body.message || req.body.text || "لا يوجد رسالة";
    responseText = `رسالتك: ${message}`;
  }

  res.json({
    fulfillmentText: responseText
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webhook يعمل على المنفذ ${PORT}`));


