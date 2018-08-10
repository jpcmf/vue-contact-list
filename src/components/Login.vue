<template lang="html">
  <section id="login" class="login h-100">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
          <img class="d-block mx-auto" src="../assets/logo.png">
          <div class="card card-signin my-4">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin">
                <div class="form-label-group">
                  <input v-model="input.username" id="inputUser" type="text" name="username" class="form-control" placeholder="Username">
                  <label for="inputUser">Username</label>
                </div>
                <div class="form-label-group">
                  <input v-model="input.password" id="inputPassword" type="password" name="password" class="form-control" placeholder="Password">
                  <label for="inputPassword">Password</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="button" v-on:click="login()">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        input: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        if(this.input.username != "" && this.input.password != "") {
          if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
          } else {
            console.log("The username and / or password is incorrect");
          }
        } else {
          console.log("A username and password must be present");
        }
      }
    }
  }
</script>

<style lang="scss">
  :root {
    --input-padding-x: 1.5rem;
    --input-padding-y: .75rem;
  }

  .login {
    img {
      max-width: 200px;
    }
  }

  .card-signin {
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    .card-title {
      margin-bottom: 2rem;
      font-weight: 300;
      font-size: 1.5rem;
    }
    .card-body {
      padding: 2rem;
    }
  }

  .form-signin {
    width: 100%;

    .btn {
      font-size: 80%;
      border-radius: 5rem;
      letter-spacing: .1rem;
      font-weight: bold;
      padding: 1rem;
      transition: all 0.2s;
    }
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;

    input {
      border-radius: 2rem;
      height: auto;
    }
  }

  .form-label-group > input,
  .form-label-group > label {
    padding: var(--input-padding-y) var(--input-padding-x);
  }

  .form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
    padding-bottom: calc(var(--input-padding-y) / 3);
  }

  .form-label-group input:not(:placeholder-shown)~label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 12px;
    color: #777;
  }
</style>
