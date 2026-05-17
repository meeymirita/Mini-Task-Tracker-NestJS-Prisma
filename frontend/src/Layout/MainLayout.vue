<script setup lang="ts"></script>

<template>
  <div class="row p-5">
    <div class="col-3">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Активный элемент</li>
        <li class="list-group-item">Второй элемент</li>
        <li class="list-group-item">Третий элемент</li>

      </ul>
    </div>
    <div class="col-9">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
