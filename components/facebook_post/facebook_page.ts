import axios from 'axios';

const PostSendFacebook = async (article: {
  title: string;
  url: string;
  picture: string;
}) => {
  // try {
  //   const groupi_id = process.env.GROUP_FACEBOOK_ID;
  //   const access_token = process.env.ACCESS_FACEBOOK_TOKEN;
  //   const postData = {
  //     message: article.title,
  //     link: article.url,
  //     picture: article.picture,
  //   };
  //   const response = await axios.post(
  //     `https://graph.facebook.com/${groupi_id}/feed?access_token=${access_token}`,
  //     postData
  //   );
  //   console.log('Публикация успешно отправлена в группу:', response.data);
  // } catch (error: any) {
  //   console.error(
  //     'Ошибка при отправке публикации в группу Facebook:',
  //     error.response.data
  //   );
  // }
};

export default PostSendFacebook;
