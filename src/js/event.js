class ModelEvent {
   constructor() {
      this.events = [
         { id: 1, nameEvent: "lectures", memberEvent: "serhij", dateEvent: "tue", timeEvent: "10" },
         { id: 2, nameEvent: "meet", memberEvent: ["serhij", "marij", "petro", "ann", "oleg", "tamara"], dateEvent: "wed", timeEvent: "12" },
      ]
      this.errorEvent = document.querySelector('.error_event')
   }

   addEvent(text, member, date, time) {
      const event = {
         id: this.events.length > 0 ? this.events[this.events.length - 1].id + 1 : 1,
         nameEvent: text,
         memberEvent: member,
         dateEvent: date,
         timeEvent: time,
      }
      this.events.push(event)
      console.log(this.events);
   }

   checkArrayEvent(eventText, memberText, dateText, timeText) {
      this.events.length > 0 ? this.checkEvent(eventText, memberText, dateText, timeText) : this.addEvent(eventText, memberText, dateText, timeText)
   }

   addError() {
      this.errorEvent.classList.remove("hidden_error");
   }

   checkEvent(text, member, date, time) {
      let array = [];
      this.events.forEach((elem) => {
         (date === elem.dateEvent && time === elem.timeEvent) ? array.push(1) : array.push(0);
      });
      (array.some((elem) => elem == 1)) ? this.addError() : this.addEvent(text, member, date, time);
   }

}

class ViewEvent {
   constructor() {
      // The root element
      this.app = this.getElement('section', 'section_one_event')

      // The cover element of the app
      this.wrapper = this.createElement('div', 'wrapper')

      //The container for event form
      this.containerEvent = this.createElement('div', 'create_event_field')

      //The container for event error
      this.eventError = this.createElement('div', 'error_event', 'hidden_error')

      //The event error elements
      this.error = this.createElement('div', 'error_description')
      this.iconError = this.createElement('i', 'fas', 'fa-plus-circle')
      this.textError = this.createElement('span', 'error_event_description')
      this.textError.textContent = 'Failed to create an event. Time slot is already booked.'

      this.error.append(this.iconError, this.textError)

      //The event error btn
      this.errorBtn = this.createElement('span', 'error_event_btn')
      this.errorBtn.textContent = '&#10006;'

      // The event error container
      this.eventError.append(this.error, this.errorBtn)

      // ----------------- The event body ----------------
      this.eventBody = this.createElement('div', 'event_body')
      this.eventField = this.createElement('div', 'added_field')

      // ----------------- The event form ----------------
      this.eventForm = this.createElement('form')
      this.eventForm.setAttribute("action", "/calendar.html")
      this.eventForm.setAttribute("method", "GET")

      // ----------------- The event form title----------------
      this.eventName = this.createElement('div', 'event_name', 'entry_field')

      this.eventNameLabel = this.createElement('label')
      this.eventNameLabel.setAttribute("for", "name")
      this.eventNameLabel.textContent = "Name of the event:"

      this.eventNameInput = this.createElement('input')
      this.eventNameInput.setAttribute("id", "name")
      this.eventNameInput.setAttribute("type", "text")

      this.eventName.append(this.eventNameLabel, this.eventNameInput)

      // ----------------- The event form members----------------
      this.eventMembers = this.createElement('div', 'event_members', 'entry_field')

      this.MemberLabel = this.createElement('label')
      this.MemberLabel.setAttribute("for", "participants")
      this.MemberLabel.textContent = "Participants:"

      this.MemberSelect = this.createElement('select')
      this.MemberSelect.setAttribute("id", "participants")

      this.MemberOptionAll = this.createElement('option')
      this.MemberOptionAll.setAttribute("value", "serhij,marij,petro,ann,oleg,tamara")
      this.MemberOptionAll.textContent = "All members"

      this.MemberOptionSerg = this.createElement('option')
      this.MemberOptionSerg.setAttribute("value", "serhij")
      this.MemberOptionSerg.textContent = "Serhij"

      this.MemberOptionMarij = this.createElement('option')
      this.MemberOptionMarij.setAttribute("value", "marij")
      this.MemberOptionMarij.textContent = "Marij"

      this.MemberOptionPetro = this.createElement('option')
      this.MemberOptionPetro.setAttribute("value", "petro")
      this.MemberOptionPetro.textContent = "Petro"

      this.MemberOptionAnn = this.createElement('option')
      this.MemberOptionAnn.setAttribute("value", "ann")
      this.MemberOptionAnn.textContent = "Ann"

      this.MemberOptionOleg = this.createElement('option')
      this.MemberOptionOleg.setAttribute("value", "oleg")
      this.MemberOptionOleg.textContent = "Oleg"

      this.MemberOptionTamara = this.createElement('option')
      this.MemberOptionTamara.setAttribute("value", "tamara")
      this.MemberOptionTamara.textContent = "Tamara"

      this.MemberSelect.append(this.MemberOptionAll, this.MemberOptionSerg, this.MemberOptionMarij, this.MemberOptionPetro, this.MemberOptionAnn, this.MemberOptionOleg, this.MemberOptionTamara)

      this.eventMembers.append(this.MemberLabel, this.MemberSelect)

      // ----------------- The event form day----------------
      this.eventDay = this.createElement('div', 'event_day', 'entry_field')

      this.DayLabel = this.createElement('label')
      this.DayLabel.setAttribute("for", "day")
      this.DayLabel.textContent = "Day:"

      this.DaySelect = this.createElement('select')
      this.DaySelect.setAttribute("id", "day")

      this.DayOptionMonday = this.createElement('option')
      this.DayOptionMonday.setAttribute("value", "mon")
      this.DayOptionMonday.textContent = "Monday"

      this.DayOptionTuesday = this.createElement('option')
      this.DayOptionTuesday.setAttribute("value", "tue")
      this.DayOptionTuesday.textContent = "Tuesday"

      this.DayOptionWednesday = this.createElement('option')
      this.DayOptionWednesday.setAttribute("value", "wed")
      this.DayOptionWednesday.textContent = "Wednesday"

      this.DayOptionThursday = this.createElement('option')
      this.DayOptionThursday.setAttribute("value", "thu")
      this.DayOptionThursday.textContent = "Thursday"

      this.DayOptionFriday = this.createElement('option')
      this.DayOptionFriday.setAttribute("value", "fri")
      this.DayOptionFriday.textContent = "Friday"

      this.DaySelect.append(this.DayOptionMonday, this.DayOptionTuesday, this.DayOptionWednesday, this.DayOptionThursday, this.DayOptionFriday)

      this.eventDay.append(this.DayLabel, this.DaySelect)

      // ----------------- The event form time----------------
      this.eventTime = this.createElement('div', 'event_time', 'entry_field')

      this.timeLabel = this.createElement('label')
      this.timeLabel.setAttribute("for", "time")
      this.timeLabel.textContent = "Time:"

      this.timeSelect = this.createElement('select')
      this.timeSelect.setAttribute("id", "time")

      this.timeOption10 = this.createElement('option')
      this.timeOption10.setAttribute("value", "10")
      this.timeOption10.textContent = "10:00"

      this.timeOption11 = this.createElement('option')
      this.timeOption11.setAttribute("value", "11")
      this.timeOption11.textContent = "11:00"

      this.timeOption12 = this.createElement('option')
      this.timeOption12.setAttribute("value", "12")
      this.timeOption12.textContent = "12:00"

      this.timeOption13 = this.createElement('option')
      this.timeOption13.setAttribute("value", "13")
      this.timeOption13.textContent = "13:00"

      this.timeOption14 = this.createElement('option')
      this.timeOption14.setAttribute("value", "14")
      this.timeOption14.textContent = "14:00"

      this.timeOption15 = this.createElement('option')
      this.timeOption15.setAttribute("value", "15")
      this.timeOption15.textContent = "15:00"

      this.timeOption16 = this.createElement('option')
      this.timeOption16.setAttribute("value", "16")
      this.timeOption16.textContent = "16:00"

      this.timeOption17 = this.createElement('option')
      this.timeOption17.setAttribute("value", "17")
      this.timeOption17.textContent = "17:00"

      this.timeOption18 = this.createElement('option')
      this.timeOption18.setAttribute("value", "18")
      this.timeOption18.textContent = "18:00"

      this.timeSelect.append(this.timeOption10, this.timeOption11, this.timeOption12, this.timeOption13, this.timeOption14, this.timeOption15, this.timeOption16, this.timeOption17, this.timeOption18)
      this.eventTime.append(this.timeLabel, this.timeSelect)
      this.eventForm.append(this.eventName, this.eventMembers, this.eventDay, this.eventTime)



      // ----------------- The event button----------------
      this.eventFieldBtn = this.createElement('div', 'create_btn_field')

      this.eventCanselBtn = this.createElement('input', 'event_btn_cancel', 'event_btn')
      this.eventCanselBtn.setAttribute("value", "Cancel")
      this.eventCanselBtn.setAttribute("type", "buttom")

      this.eventCreatelBtn = this.createElement('input', 'event_btn_create', 'event_btn')
      this.eventCreatelBtn.setAttribute("value", "Create")
      this.eventCreatelBtn.setAttribute("type", "button")

      this.eventFieldBtn.append(this.eventCanselBtn, this.eventCreatelBtn)



      this.eventField.append(this.eventForm)
      this.eventBody.append(this.eventField, this.eventFieldBtn)
      this.containerEvent.append(this.eventError, this.eventBody)
      this.wrapper.append(this.containerEvent)
   }

   // Create an element with an optional CSS class

   createElement(tag, firstClassName, secondClassName) {
      const element = document.createElement(tag)
      if (firstClassName) element.classList.add(firstClassName)
      if (secondClassName) element.classList.add(secondClassName)

      return element
   }

   // Retrieve an element from the DOM

   getElement(selector) {
      const element = document.querySelector(selector)

      return element
   }

   get _textEvent() {
      return this.eventNameInput.value
   }

   _resetTextEvent() {
      return this.eventNameInput.value = ''
   }

}

class ControllerEvent {
   constructor(model, view) {
      this.model = model
      this.view = view
   }


}

const event = new ControllerEvent(new ModelEvent(), new ViewEvent());

event.model.checkArrayEvent("lectures", "serhij", "wed", "10");
event.model.checkEvent("lectures", "serhij", "fri", "12");





// let eventName = document.querySelector('#name');
// let labelName = document.querySelector('.event_name label');
// let eventMemeber = document.querySelector('#participants');
// let eventDay = document.querySelector('#day');
// let eventTime = document.querySelector('#time');

// let eventBtnCancel = document.querySelector('.event_btn_cancel');
// let eventBtnCreate = document.querySelector('.event_btn_create');

// let errorBtn = document.querySelector('.error_event_btn');
// let errorEvent = document.querySelector('.error_event');
// let localTask;

// class CreateEvent {
//    constructor(eventBtnCreate, eventBtnCancel) {
//       this.eventBtnCancel = eventBtnCancel;
//       this.eventBtnCreate = eventBtnCreate;

//       this.eventBtnCreate.onclick = () => {
//          validation.validateForm();
//       }

//       this.eventBtnCancel.onclick = () => {
//          validation.removeError();
//          document.location.href = "/index.html"
//       }
//    }
// }

// class Validation {
//    constructor(labelName, eventName, errorBtn, errorEvent, eventBtnCreate) {
//       this.eventName = eventName;
//       this.labelName = labelName;
//       this.errorBtn = errorBtn;
//       this.errovEvent = errorEvent;
//       this.eventBtnCreate = eventBtnCreate;

//       this.errorBtn.onclick = () => this.removeError();
//    }

//    validateForm() {
//       if (this.eventName.value === "" || this.eventName.value === undefined || this.eventName.value.replace(/\s\s+/g, " ") === " ") {
//          this.eventName.setAttribute("placeholder", "Invalid value");
//          this.labelName.setAttribute("style", "color:red");
//          this.eventName.classList.add('invalid_value');
//       } else {
//          this.eventName.removeAttribute("placeholder", "Invalid value");
//          this.labelName.removeAttribute("style", "color:red");
//          this.eventName.classList.remove('invalid_value');
//          localstorage.createLocalEvent();
//       }
//    }

//    failedEvent() {
//       this.errovEvent.classList.remove('hidden_error');
//       return
//    }

//    removeError() {
//       this.errovEvent.classList.add('hidden_error');
//    }


// }

// class LocalStorage {
//    constructor(eventMemeber, eventName, eventTime, eventDay) {
//       this.eventName = eventName;
//       this.eventMemeber = eventMemeber;
//       this.eventDay = eventDay;
//       this.eventTime = eventTime;
//    }

//    createLocalEvent() {

//       if (this.eventMemeber.value === "serhij,marij,petro,ann,oleg,tamara") {
//          localTask = {
//             nameEvent: this.eventName.value,
//             memberEvent: this.eventMemeber.value.split(','),
//             dateEvent: this.eventDay.value,
//             timeEvent: this.eventTime.value,
//          }
//       } else {
//          localTask = {
//             nameEvent: this.eventName.value,
//             memberEvent: this.eventMemeber.value,
//             dateEvent: this.eventDay.value,
//             timeEvent: this.eventTime.value,
//          }
//       }

//       // ------------------------    Adding Items to Local Storage ------------------------
//       let array = JSON.parse(localStorage.getItem(`events`));
//       if (!array) {
//          this.createLocalStorage(localTask)
//       } else {
//          array.forEach(task => {
//             if (task.dateEvent === this.eventDay.value && task.timeEvent === this.eventTime.value) {
//                console.log("Failed event");
//                console.log(`task.timeEvent: ${task.timeEvent}`);
//                console.log(`this.eventTime.value ${this.eventTime.value}`);
//                validation.failedEvent();

//             } else {
//                console.log("Add event");
//                console.log(`task.timeEvent: ${task.timeEvent}`);
//                console.log(`this.eventTime.value ${this.eventTime.value}`);
//                this.createLocalStorage(localTask);
//             }
//          })
//       }
//    }

//    createLocalStorage(localTask) {
//       let localEvent = localStorage.getItem(`events`) ? JSON.parse(localStorage.getItem(`events`)) : [];
//       localEvent.push(localTask);
//       localStorage.setItem('events', JSON.stringify(localEvent));
//    }


// }



// let createevent = new CreateEvent(eventBtnCreate, eventBtnCancel);

// let validation = new Validation(labelName, eventName, errorBtn, errorEvent, eventBtnCancel);

// let localstorage = new LocalStorage(eventMemeber, eventName, eventTime, eventDay);

