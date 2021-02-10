
const eventName = document.querySelector('#name');
const labelName = document.querySelector('.event_name label');
const eventMemeber = document.querySelector('#participants');
const eventDay = document.querySelector('#day');
const eventTime = document.querySelector('#time');
const errorBtn = document.querySelector('.error_event_btn');
const eventBtnCancel = document.querySelector('.event_btn_cancel');
const eventBtnCreate = document.querySelector('.event_btn_create');

class CreateEvent {
   constructor(eventBtnCreate, eventBtnCancel) {
      this.eventBtnCancel = eventBtnCancel;
      this.eventBtnCreate = eventBtnCreate;

      this.eventBtnCreate.onclick = () => {
         validation.validateForm();
      }
   }
}

class Validation {
   constructor(labelName, eventName, errorBtn) {
      this.eventName = eventName;
      this.labelName = labelName;
      this.errorBtn = errorBtn;
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
         this.createLocalEvent();
      }
   }


}

class LocalStorage {
   constructor(eventMemeber, eventName, eventTime, eventDay, errorBtn, eventBtnCancel, eventBtnCreate, labelName) {
      this.eventName = eventName;
      this.eventMemeber = eventMemeber;
      this.eventDay = eventDay;
      this.eventTime = eventTime;
   }

   createLocalEvent() {
      let localTask;
      if (this.eventMemeber.value === "serhij,marij,petro,ann,oleg,tamara") {
         localTask = {
            nameEvent: this.eventName.value,
            memberEvent: this.eventMemeber.value.split(','),
            dateEvent: this.eventDay.value,
            timeEvent: this.eventTime.value,
         }
      } else {
         localTask = {
            nameEvent: this.eventName.value,
            memberEvent: this.eventMemeber.value,
            dateEvent: this.eventDay.value,
            timeEvent: this.eventTime.value,
         }
      }

      // ------------------------    Adding Items to Local Storage ------------------------
      let array = JSON.parse(localStorage.getItem(`events`));
      if (!array) {
         this.createLocalStorage(localTask)
      } else {
         array.forEach(task => {
            if (task.timeEvent === this.eventTime.value && task.dateEvent === this.eventDay.value) {
               console.log("Existing event");
            } else {
               console.log("New event");
            }
         })
      }
   }

   createLocalStorage(localTask) {
      let localEvent = localStorage.getItem(`events`) ? JSON.parse(localStorage.getItem(`events`)) : [];
      localEvent.push(localTask);
      localStorage.setItem('events', JSON.stringify(localEvent));
   }


}



let createevent = new CreateEvent(eventBtnCreate, eventBtnCancel);

let validation = new Validation(labelName, eventName, errorBtn);

let localstorage = new LocalStorage(eventMemeber, eventName, eventTime, eventDay, errorBtn, eventBtnCancel, eventBtnCreate, labelName);

