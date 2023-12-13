
<template>
  <div class="logout">
      <button @click="Logout">Logout</button>
    </div>
  <div class="home">
    <div class="pagebody">
      <div class="block"></div>
      <div class="postlist">
        <div class="post" v-for="post in posts" :key="post.id">
          <router-link
            class="postbody"
            :to="{ name: 'Apost', params: { id: post.id } }"
          >

            <span class="date"> {{ formatDate(post.date) }}</span>
            <span class="body"> {{ post.body }}</span>

          </router-link>
        </div>
      </div>

      <div class="block"></div>
    </div>
  </div>
  <router-link to="/addpost">
    <button>Add Post</button>
  </router-link>
  <button @click="del()">Delete all posts</button>
</template>
<script>
import auth from "../auth";

export default {
  name: "homeView",
  components: {},
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
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Date(dateString).toLocaleDateString(
        undefined,
        options
      );
      return formattedDate;
    },
    fetchPosts() {
      fetch("http://localhost:3000/auth/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the response data
          this.posts = data;
        })
        .catch((err) => console.error("Error fetching posts:", err));
    },
    del() {
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/delete-posts", {
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
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
  computed: {},
};
</script>

