
<template>


  <div class="home">
    <h1>Home</h1>
    <p>Home page content goes here.</p>
    <div class="postList">
      <post-compo v-for="post in this.$store.state.postList" :key ="post.postId"
        :postId="post.postId"
        :date="post.date"
        :uri="post.pictureURI"
        :text="post.text"
        :numberOfLikes="post.likeCount"
      ></post-compo>
    </div>
    <button @click="resetAllLikes" class="reset-likes">
      <p>Reset likes for all posts</p>
    </button>
  </div>
</template>
<script>
import postCompo from '@/components/postCompo.vue'

export default ({
  name: "homeView",
  components: {
    postCompo
  },
  methods: {
    resetAllLikes: function() {
      this.$store.commit('resetAllLikes');
    }
  }
})
</script>
