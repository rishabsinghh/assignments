/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  n = transactions.length;
  if(n == 0){
    return [];
  }

  if(n == 1){
    transactions = transactions[0]
    return [{'category': transactions['category'], 'totalSpent':transactions['price']}]
  }

  res = {}

  for(let i = 0; i<n; i++)
  {
    temp_obj = transactions[i]
    if(temp_obj['category'] in res){
       res[temp_obj['category']]+=temp_obj['price']
    }
    else{
      res[temp_obj['category']] = temp_obj['price']
    }
  }

  ans = []

  for(let cat in res){
    temp_obj = {'category': cat,'totalSpent':res[cat]}
    ans.push(temp_obj)
  }

  return ans
  
}

module.exports = calculateTotalSpentByCategory;
