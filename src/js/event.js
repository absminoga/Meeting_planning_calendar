class createTask {
   constructor() {
      this.eventName = document.querySelector('#name');
      this.labelName = document.querySelector('.event_name label');
      this.eventMemeber = document.querySelector('#participants');
      this.eventDay = document.querySelector('#day');
      this.eventTime = document.querySelector('#time');
      this.errorBtn = document.querySelector('.error_event_btn');
      this.errorBtn = document.querySelector('.error_event_btn');
      this.eventBtnCancel = document.querySelector('.event_btn_cancel');
      this.eventBtnCreate = document.querySelector('.event_btn_create');

      this.index;

      this.eventBtnCreate.onclick = () => {
         this.validateForm()
      }
   }
   validateForm() {
      if (this.eventName.value === "" || this.eventName.value === undefined || this.eventName.value.replace(/\s\s+/g, " ") === " ") {
         this.eventName.setAttribute("placeholder", "Invalid value");
         this.labelName.setAttribute("style", "color:red");
         this.eventName.classList.add('invalid_value');
      } else {
         this.eventName.removeAttribute("placeholder", "Invalid value");
         this.labelName.removeAttribute("style", "color:red");
         this.eventName.classList.remove('invalid_value');
         this.createLocalStorage();
      }
   }

   createLocalStorage() {

      let localTask;
      // this.localArray();
      if (this.eventMemeber.value === "serhij,marij,petro,ann,oleg,tamara") {
         this.index++;
         localTask = {
            count: this.index,
            nameEvent: this.eventName.value,
            memberEvent: this.eventMemeber.value.split(','),
            dateEvent: this.eventDay.value,
            timeEvent: this.eventTime.value,
         }
      } else {
         this.index++;
         localTask = {
            count: this.index,
            nameEvent: this.eventName.value,
            memberEvent: this.eventMemeber.value,
            dateEvent: this.eventDay.value,
            timeEvent: this.eventTime.value,
         }
      }
      console.log(localTask);
      // ------------------------    Adding Items to Local Storage ------------------------
      let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
      itemsArray.push(localTask);
      localStorage.setItem('items', JSON.stringify(itemsArray));
   }

   localArray() {

   }

}
let createtask = new createTask();