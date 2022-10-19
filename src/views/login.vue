<template>
  <div>
    <v-app dark="dark">
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      required
                      label="Email"
                      type="email"
                      :error-messages="emailErrors"
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      required
                      label="Password"
                      type="password"
                      :error-messages="passwordErrors"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                    ></v-text-field>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="onSubmit" color="primary" to="/">Login</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
      <v-footer app="app">
        <v-flex class="text-xs-center">© 2022. All rights reserved.</v-flex>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>