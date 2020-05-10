<template>
  <section>
    <Swap :direction="tab === 'login' ? 'right' : 'left'">
      <form v-if="tab === 'login'" key="login" @submit.prevent.stop>
        <input type="text" placeholder="Login">
        <input type="password" placeholder="Password">
        <input type="submit" value="Login">
        <button @click="tab = 'pwd'" type="button"><span>Password forgotten</span> 👉</button>
      </form>

      <form v-if="tab === 'pwd'" key="pwd" @submit.prevent.stop>
        <input type="email" placeholder="Email">
        <input type="submit" value="Reset">
        <button @click="tab = 'login'" type="button">👈 <span>Login</span></button>
      </form>
    </Swap>
  </section>
</template>

<script>
import Swap from '../../../../../packages/vue-swap/src/Swap'

export default {
  components: {
    Swap,
  },
  data() {
    return {
      tab: 'login',
    }
  },
}
</script>

<style scoped>
section {
  margin-bottom: 5vh;
  font-size: calc(2rem + .75vw);
  background-color: #F7FAFC;
  padding: 5%;
  max-width: 8em;
  margin: 5vh auto;
  overflow: hidden;
}

form {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  justify-content: center;
}

input {
  appearance: none;
  font-size: 0.5em;
  text-align: left;
  padding: .5em 1em;
  border: 1px solid #E2E8F0;
  border-top-left-radius: .25em;
  border-top-right-radius: .25em;
}

input + input {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

input:last-of-type {
  border-bottom-left-radius: .25em;
  border-bottom-right-radius: .25em;
}

[type="submit"] {
  background-color: #E2E8F0;
}

input:focus {
  outline: none;
}

button {
  display: flex;
  justify-content: center;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 1em .5em;
  font-size: .5em;
}

button span {
  text-decoration: underline;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: .25em;
}

button:hover,
button:focus,
button:active {
  outline: none;
  cursor: pointer;
  color: #68D391;
}
</style>
