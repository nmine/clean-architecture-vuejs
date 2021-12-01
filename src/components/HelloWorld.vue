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
          color="success"
          class="mr-4"
          @click="createSession"
      >
        Validate
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import {Member} from "../core/domain/Member.js"

export default {

  name: 'HelloWorld',
  data: function () {
    return {
      member: new Member(),
    }
  },
  methods: {
    createSession() {
      this.$memberUseCases.createMember()
    }
  }
}


</script>
