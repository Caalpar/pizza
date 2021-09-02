class DropDown {
    constructor(id) {
      this.dropdown = document.createElement('select')
      this.dropdown.id = id
    }
    addOption(text,value='') {
      let option = document.createElement('option')
      option.innerHTML = text
      if(value!='')
        option.value = value
      this.dropdown.appendChild(option)
    }
    getDrop() {
      return this.dropdown
    }

    setClass(cla){
      this.dropdown.classList.add(cla)
    }

  }
  