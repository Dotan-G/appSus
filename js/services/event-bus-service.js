export const eventBus = new Vue();

// Rememer adding mail to all events.
// remember to turn of the event at destroyed:


//example:
// destroyed() {
//     eventBus.$off('show-msg', this.showMsg);
//     if (this.timeout) {
//         clearTimeout(this.timeout);
//         this.timeout = null;
//     }
// },