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
import {Member} from "./Member.js"

export default {

  name: 'HelloWorld',
  data: function () {
    return {
      member: new Member(),
    }
  },
  methods: {
    createSession() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      console.log(this.user)
      this.$memberModule.createMember()
    }
  }
}


</script>
