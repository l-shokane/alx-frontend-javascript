export default function getSanfranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it was the seventh-highest income country in the United States, which per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.capita}.`;
}
