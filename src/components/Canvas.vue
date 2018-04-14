<template>
  <v-container fluid>
    <v-stage :config="{
    width: 400,
    height: 600
  }">
  <v-layer>
    <v-circle :config="{
          x: 200,
          y: 300,
          radius: 120,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 4
        }" />
  </v-layer>
</v-stage>
  </v-container>
</template>

<script>
export default {
}
</script>
