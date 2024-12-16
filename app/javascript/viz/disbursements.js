export default class Disbursements {
  constructor(rawData) {
    this.allData = structuredClone(rawData)
    this.selectedDimensions = {}
  }
}
