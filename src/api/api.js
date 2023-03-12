import axios from 'axios';

const pictureInstance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const getImages = async (searchQuery, page) => {
  const { data } = await pictureInstance.get('/', {
    params: {
      key: '33606619-e92c95447caff2b5a446312ae',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return data;
};
