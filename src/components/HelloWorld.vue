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
    createSession() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      //this.facilitator.create(this.member)
    }
  }
}


</script>
