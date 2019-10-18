import * as moment from "moment";

class Order {
  constructor(id, items, total, date) {
    this.id = id;
    this.items = items;
    this.total = total;
    this.date = date;
  }

  get convertedDate() {
    return moment(this.date).format("MMMM Do YYYY, hh:mm");
  }
}

export default Order;
