const data = require('./products.json')


// brandList = new Set()
// categoryList = new Set()

// data.products.map(item => {
//   brandList.add(item.brand)
//   categoryList.add(item.category) 
// })
// console.log(brandList,categoryList);

productsData = data.products


const groupBy = (array, key) => {
  let result = {};
  array.map(item => {
    let value = item[key];
    if (!result[value]) result[value] = [];
    result[value].push(item);
  });
  return result;
};

try{
  const groupByBrand = groupBy(productsData, 'brand');
  const groupByCategory = groupBy(productsData, 'category');
  
  console.log('Products grouped by brand:', groupByBrand);
  console.log('Products grouped by category:', groupByCategory);
}catch(error){
  console.log(error.message)
}


