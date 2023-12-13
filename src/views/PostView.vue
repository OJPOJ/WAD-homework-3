
<template>
  <div class="home">
    <div class="addpagebody">
      <div class="post">
        <p>Your Post</p>
        <div class="postbody">
        
        <span class="date">{{ formatDate(post.date) }}</span>
        <input name="body" type="text" id="body" required v-model="post.body" />

        <div class="button">
          <button @click="deletePost()">Delete</button>
          <button @click="updatePost()">Update</button>
        </div>

        
        </div>
      </div>
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
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Date(dateString).toLocaleDateString(
        undefined,
        options
      );
      return formattedDate;
    },
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
    updatePost() {
      fetch(`http://localhost:3000/auth/post/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost(){
      fetch(`http://localhost:3000/auth/post/${this.$route.params.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.posts = [];
        })
        .catch((e) => {
          console.log(e);
        });
        this.$router.push({ name: 'Home' });
    }
  },
  mounted() {
      const id = this.$route.params.id;
      fetch(`http://localhost:3000/auth/post/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>
