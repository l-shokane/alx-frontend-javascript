export default function getNeighborhoodsList() {
  this.SanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.SanFranciscoNeighborhoods.push(newNeighborhood);
    return this.SanFranciscoNeighborhoods;
  };
}
