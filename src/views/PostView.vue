
<template>
  <div class="home">
    <div class="pagebody">
      <div class="block"></div>

      <div class="postList">
        <p>{{post.id}}</p>
          <span class="body"><b>Body:</b> {{ post.body }}</span>

      </div>
      <div class="block"></div>
    </div>
  </div>
</template>
<script>

import auth from "../auth";

export default {
  name: "postView",
  components: {
  },
  data: function () {
    return {
      post: [],
      authResult: auth.authenticated(),
    };
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include", //  Don't forget to specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("jwt removed");
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/login");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
    mounted() {
      fetch("http://localhost:3000/auth/post/{{ $route.params.id }}")
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>
