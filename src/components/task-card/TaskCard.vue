<template>
  <article :class="CardContainer">
    <task-list-form />
    <section :class="CardSection">
      <div>
        <task-list />
      </div>
    </section>
    <section :class="CardSection">
      <div>
        <div>
          <task-list />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { CardContainer, CardSection } from './TaskCard.css.js'
import TaskListForm from '@/components/task-list/task-list-form/TaskListForm.vue'
import TaskList from '@/components/task-list/TaskList.vue'
</script>
