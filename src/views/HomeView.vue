
<template>
  <div class="home">
    <div class="pagebody">
      <div class="block"></div>
      <div class="logout">
        <button @click="Logout">Logout</button>
      </div>
      <div class="postList">
        <post-compo
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :body="post.body"
        ></post-compo>
      </div>

      <div class="block"></div>
    </div>
  </div>
</template>
<script>
import postCompo from "@/components/postCompo.vue";
import auth from "../auth";

export default {
  name: "homeView",
  components: {
    postCompo,
  },
  data: function () {
    return {
      posts: [],
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
      fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data.posts))
        .catch((err) => console.log(err.message));
    },
  },
  computed: {
  },
};
</script>
