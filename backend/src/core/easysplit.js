const easysplit = {
  calculate: (expenses) => {
    var transactions = [];

    while (expenses.length > 1) {
      expenses.sort((x) => -x['amount']);
      var best = Number.POSITIVE_INFINITY;
      var best_i = 0;
      for (var i = 1; i < expenses.length; i++) {
        var curr = expenses[0]['amount'] + expenses[i]['amount'];
        if (curr < best) {
          best = curr;
          best_i = i;
        }
      }

      transactions.push({
        from: expenses[0]['name'],
        to: expenses[best_i]['name'],
        amount: Math.round(expenses[0]['amount'] * 100) / 100,
      });

      expenses[best_i]['amount'] =
        expenses[best_i]['amount'] + expenses[0]['amount'];

      expenses.shift();
    }

    transactions.sort((x) => -x['amount']);

    return transactions;
  },
};

module.exports = { easysplit };
