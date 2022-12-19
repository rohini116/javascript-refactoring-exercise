function processTransactions(transActions) {
  const txr = [];

  if (transActions === undefined) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  transActions.forEach((transaction) => {
    txCount[transaction]
      ? (txCount[transaction] += 1)
      : (txCount[transaction] = 1);
  });

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach((key) => {
    txr.push(`${key} ${txCount[key]}`);
  });

  return txr;
}

function sortByAmountThenName(txCount) {
  const sortedTxCount = {};

  Object.keys(txCount)
    .sort()
    .sort((a, b) => {
      return txCount[b] - txCount[a];
    })
    .forEach((key) => {
      sortedTxCount[key] = txCount[key];
    });

  return sortedTxCount;
}

// function validateTransactions(transactions) {
//   return transactions !== undefined;
// }

module.exports = processTransactions;
