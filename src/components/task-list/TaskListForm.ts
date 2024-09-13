<template>
  <form @submit="addTask" class="task-form">
    <input type="text" v-model="task" placeholder="Add a new task" class="task-form__input" />
    <button type="submit">+</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const task = ref('')

const addTask = (e) => {
  e.preventDefault()
  console.log('Adding a new task', task.value)
}
</script>

<style scoped lang="scss">
.task-form {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__input {
    box-sizing: border-box;
    display: block;
    min-width: 200px;
    width: 100%;
    outline: 0;
    padding: 0.5rem;
    border-radius: 10px;
    // border: 2px solid ${({ theme }) => theme.border};
    // @include border-style($radius: 10px);
    // background: ${({theme}) => theme.bgInput};
  }

  &__button {
    // border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    // background-color: var(--color-secondary);
    transition: border-color 0.25s;

    &:hover {
      // background-color: var(--color-tertiary);
      // color: var(--color-light);
    }

    &:focus,
    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
}
</style>
