<template>
  <div class="flex ml-4">
    <img class="z-10 inline h-12 px-4 py-4 -mr-16 " src="/images/inputs/user-repo.svg" alt="">
    <div class="w-full">
      <Password v-model="form.password" :toggle="true" :placeholder="text"
      />
    </div>
  </div>
</template>

<script>
import Password from 'vue-password-strength-meter';
export default {
  name: "ButtonPassword",
  props: {
    text: String
  },
  components:{
    Password
  },
  data: () => ({
      form :{
          password             : null,
          password_confirmation: null,
          token                : '',
      },
      errors : [],
  }),
      mounted() {
      this.form.token = this.$route.params.users_token;
  },
};
</script>

<style>

input.Password__field {
  padding-left: 35px;
}

</style>
