
const fetchCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories(data.data.news_category))
}

const showCategories = data =>{
    // console.log(data)
    const categoriesContainer = document.getElementById('categories-container');
    data.forEach(singleCategory =>{
        // console.log(singleCategory.category_id)
        const paragraph = document.createElement('p')
        paragraph.innerHTML = `
        <a href="#" onclick="fetchCategoriesNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>
        `
        categoriesContainer.appendChild(paragraph);
    })
}
const fetchCategoriesNews =(category_id, category_name)=>{
    // console.log(category_id)
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))
}
const showAllNews = (data, category_name)=>{
  console.log(data)
    console.log(data, category_name)
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('categories-name').innerText = category_name;
    const detailsNewsContainer = document.getElementById('all-news');
    data.forEach(sigleNews =>{
      console.log(sigleNews)
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `<div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>`;
      detailsNewsContainer.appendChild(card);
        });
}
// fetchCategories();