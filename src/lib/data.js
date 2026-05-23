export async function getCategories() {

  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;

}

export async function getNewsByCategoryId(category_Id) {

  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_Id}`);
  const data = await res.json();
  return data.data;

}

export async function getNewsDetailsById(news_Id) {

  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_Id}`);
  const data = await res.json();
  return data.data[0];

}