import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '37599795-c944c27653bb06b521e6c5184';

export const getPhotos = async (searchQuery = '', page = 1, perPage = 12) => {
  const params = new URLSearchParams({
    q: searchQuery,
    page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: perPage,
  });

  try {
    const responce = await axios.get(BASE_URL, { params });
    const data = responce.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
