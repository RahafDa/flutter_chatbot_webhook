const express = require('express');
const app = express();
const cors = require('cors');

// ✅ تفعيل CORS للسماح بطلبات من تطبيق Flutter Web
app.use(cors());
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

// ✅ تغيير المنفذ ليأخذه من البيئة أو الافتراضي 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webhook يعمل على المنفذ ${PORT}`));

