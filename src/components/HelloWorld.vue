<template>
  <v-container>
    <v-form
        ref="form"
        lazy-validation
    >
      <v-text-field
          v-model="member.firstName"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="member.lastName"
          :rules="nameRules"
          label="Name"
          required
      ></v-text-field>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        Validate
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import {Member} from "./Member.js"

export default {

  name: 'HelloWorld',

  data: function () {
    return {
      member: new Member(),
      facilitator: this.facilitatorModule,
    }
  },
  props: {
    facilitatorModule: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}


</script>
