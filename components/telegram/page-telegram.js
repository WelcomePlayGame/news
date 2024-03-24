const sendMessage = async ({ articleData }) => {
  const bot_id = `${process.env.BOT_ID}`;
  const group_id = `${process.env.BOT_ID_GROUP}`;
  const photo_url = `${process.env.URL_AWS}${articleData.image}`;

  const articleUrl = `https://newsaroundwolrd.com/news/${articleData.slug}`;
  const caption = `<b>⚡ ${articleData.title} ⚡</b>\n\n<a href="${articleUrl}">👀 Continue Reading</a>`;

  const url_fetch = `https://api.telegram.org/bot${bot_id}/sendPhoto`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: group_id,
      photo: photo_url,
      caption: caption,
      parse_mode: 'HTML',
    }),
  };

  try {
    const response = await fetch(url_fetch, options);
    const data = await response.json();

    if (data.ok) {
      console.log('Сообщение успешно отправлено в Telegram:', data);
    } else {
      // Логируем всю информацию об ошибке для более детального анализа
      console.error('Ошибка при отправке сообщения в Telegram:', data);
      throw new Error(
        `Ошибка при отправке сообщения в Telegram: ${data.description}`
      );
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к Telegram:', error);
  }
};

export default sendMessage;
