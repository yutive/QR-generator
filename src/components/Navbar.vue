<template>
  <div>
    <div class = "burger">
      <ul>
        <li>
          <img src="../assets/menu.png" alt="Burger symbol">
        </li>
        <li>
          <button @click="$emit('change', 'generate')" id="left">Generate</button>
        </li>
        <li>
          <button @click="$emit('change', 'read')">Read</button>
        </li>
        <li>
          <button @click="$emit('change', 'about')" id="right">About</button>
        </li>
      </ul>
    </div>
    <div class="darkMode">
      <div class="darkModeButton">
        <label :for="id + '_button'" :class="{'active': isActive}" class="toggle__button">
          <span v-if="isActive" class="toggle__label">{{ enableText }}</span>
          <span v-if="! isActive" class="toggle__label">{{ disabledText }}</span>

          <input type="checkbox" :disabled="disabled" :id="id + '_button'" v-model="checkedValue" v-on:change="$emit('changeMode', checkedValue)">
          <span class="toggle__switch"></span>
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:"Navbar",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    labelEnableText: {
      type: String,
      default: 'On'
    },

    labelDisableText: {
      type: String,
      default: 'Off'
    },
    id: {
      type: String,
      default: 'primary'
    },
    defaultState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentState: this.defaultState,
    }
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState)
    }
  },
  computed: {
    // currentState() {
    //     return this.defaultState;
    // },
    isActive() {
      return this.currentState;
    },
    enableText() {
      return this.labelEnableText;
    },
    disabledText() {
      return this.labelDisableText;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
        this.$emit( newValue);
      }
    }
  }
}
</script>

<style>

.burger img{
  width: 7vh ;
  height: 7vh;
  display: none;
}

  ul {
    display: flex;
    list-style-type: none;
    padding-left: 0;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0;
    background-color: #f29559;
  }

.darkMode ul {
  background-color: #3b4252;
}
.darkMode button {
  background: #3b4252;
  color: #78808f;
  border-style: solid;
  border-width: 1px;
  border-color: #3b4252;
}
  button  {
    border: none;
    cursor: pointer;
    background: #f29559;
    color: white;
    padding: 7px 10px;
    margin: 4px 0;
    width: 90px;
    font-size: 18px;
  }
  button:hover {
    background-color: #F2A568;
  }

.darkMode button:hover {
  background-color: #434C5E;
  border-color:#F2A568 ;
}

  .darkModeButton {
    padding-left:  90%;
    padding-top: 10px;
  }

.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle__button .toggle__switch {
  display:inline-block;
  height:12px;
  border-radius:6px;
  width:40px;
  background: #BFCBD9;
  box-shadow: inset 0 0 1px #BFCBD9;
  position:relative;
  margin-left: 10px;
  transition: all .25s;
}
.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}
.toggle__button .toggle__switch::after {
  background: #4D4D4D;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #4D4D4D;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
  opacity:0;
}
.active .toggle__switch {
  background: #efece9;
  box-shadow: inset 0 0 1px #efece9;
}
.active .toggle__switch::after,
.active .toggle__switch::before{
  transform:translateX(40px - 18px);
}
.active .toggle__switch::after {
  left: 23px;
  background: #ffffff;
  box-shadow: 0 0 1px #ffffff;
}
@media (max-width: 800px) {
  ul {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    width: 7vh ;
    height: 7vh;
  }
  button {
    padding: 2vw;
    margin: 0;
    display: none;
    width: 40vw;
  }
  .burger img {
    display: inline-flex;
    color: #f29559;
  }
  .burger:hover  button{
    display: block;
    position: relative;
  }
  .burger {
    width: 7vh ;
    height: 7vh;
    position:fixed;
  }
  .darkModeButton {
    padding-left:  75%;
  }
}
</style>