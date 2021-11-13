import fetchCategories from '../queries/fetchCategories.js';

export default async function getCategories(req, res) {
  try {
    const categories = await fetchCategories();

    res.send(categories);
  } catch (error) {
    res.sendStatus(500);
  }
}
