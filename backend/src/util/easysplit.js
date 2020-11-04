const easysplit = {
  calculate: (expenses) => {
    const transactions = [];

    const exp = expenses;

    while (exp.length > 1) {
      exp.sort((x) => -x.amount);
      let best = Number.POSITIVE_INFINITY;
      let bestI = 0;
      for (let i = 1; i < exp.length; i += 1) {
        const curr = exp[0].amount + exp[i].amount;
        if (curr < best) {
          best = curr;
          bestI = i;
        }
      }

      transactions.push({
        from: exp[0].name,
        to: exp[bestI].name,
        amount: Math.round(exp[0].amount * 100) / 100,
      });

      exp[bestI].amount += exp[0].amount;

      exp.shift();
    }

    transactions.sort((x) => -x.amount);

    return transactions;
  },
};

module.exports = { easysplit };
