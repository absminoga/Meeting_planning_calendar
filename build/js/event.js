let eventName = document.querySelector('#name');
let labelName = document.querySelector('.event_name label');
let eventMemeber = document.querySelector('#participants');
let eventDay = document.querySelector('#day');
let eventTime = document.querySelector('#time');
let eventBtnCancel = document.querySelector('.event_btn_cancel');
let eventBtnCreate = document.querySelector('.event_btn_create');
let errorBtn = document.querySelector('.error_event_btn');
let errorEvent = document.querySelector('.error_event');
let localTask;

class CreateEvent {
  constructor(eventBtnCreate, eventBtnCancel) {
    this.eventBtnCancel = eventBtnCancel;
    this.eventBtnCreate = eventBtnCreate;

    this.eventBtnCreate.onclick = () => {
      validation.validateForm();
    };

    this.eventBtnCancel.onclick = () => {
      validation.removeError();
      document.location.href = "/index.html";
    };
  }

}

class Validation {
  constructor(labelName, eventName, errorBtn, errorEvent, eventBtnCreate) {
    this.eventName = eventName;
    this.labelName = labelName;
    this.errorBtn = errorBtn;
    this.errovEvent = errorEvent;
    this.eventBtnCreate = eventBtnCreate;

    this.errorBtn.onclick = () => this.removeError();
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
      localstorage.createLocalEvent();
    }
  }

  failedEvent() {
    this.errovEvent.classList.remove('hidden_error');
    return;
  }

  removeError() {
    this.errovEvent.classList.add('hidden_error');
  }

}

class LocalStorage {
  constructor(eventMemeber, eventName, eventTime, eventDay) {
    this.eventName = eventName;
    this.eventMemeber = eventMemeber;
    this.eventDay = eventDay;
    this.eventTime = eventTime;
  }

  createLocalEvent() {
    if (this.eventMemeber.value === "serhij,marij,petro,ann,oleg,tamara") {
      localTask = {
        nameEvent: this.eventName.value,
        memberEvent: this.eventMemeber.value.split(','),
        dateEvent: this.eventDay.value,
        timeEvent: this.eventTime.value
      };
    } else {
      localTask = {
        nameEvent: this.eventName.value,
        memberEvent: this.eventMemeber.value,
        dateEvent: this.eventDay.value,
        timeEvent: this.eventTime.value
      };
    } // ------------------------    Adding Items to Local Storage ------------------------


    let array = JSON.parse(localStorage.getItem(`events`));

    if (!array) {
      this.createLocalStorage(localTask);
    } else {
      array.forEach(task => {
        if (task.dateEvent === this.eventDay.value && task.timeEvent === this.eventTime.value) {
          console.log("Failed event");
          console.log(`task.timeEvent: ${task.timeEvent}`);
          console.log(`this.eventTime.value ${this.eventTime.value}`);
          validation.failedEvent();
        } else {
          console.log("Add event");
          console.log(`task.timeEvent: ${task.timeEvent}`);
          console.log(`this.eventTime.value ${this.eventTime.value}`);
          this.createLocalStorage(localTask);
        }
      });
    }
  }

  createLocalStorage(localTask) {
    let localEvent = localStorage.getItem(`events`) ? JSON.parse(localStorage.getItem(`events`)) : [];
    localEvent.push(localTask);
    localStorage.setItem('events', JSON.stringify(localEvent));
  }

}

let createevent = new CreateEvent(eventBtnCreate, eventBtnCancel);
let validation = new Validation(labelName, eventName, errorBtn, errorEvent, eventBtnCancel);
let localstorage = new LocalStorage(eventMemeber, eventName, eventTime, eventDay);