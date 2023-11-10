<template>
    <div class="post">
        <div class="posthead">
            <img class="headerimage" src="/src/assets/me.png">
            <p class="headerdate">{{date}}</p>
        </div>
        <div class="postbody">
            <img class="bodyimage" src="{{uri}}" v-show="uri!=''">
            <p class="bodytext">{{text}}</p>
        </div>
        <div class="postfooter">
            <img class="footerimage" scr="/src/assets/likeutton.png" v-on:click="LikePost" >
            <p class="likes">{{"Likes: "+ numberOfLikes}} </p> 
        </div>
    </div>
</template>
<script>
export default {
    name: "post",
    methods: {
        LikePost: function(){
            this.$store.commit('authenticate', {
                postId: this.postId
            });
        }
    },
    props: {
        postId:Number,
        date: String,
        uri:String,
        text:String,
        numberOfLikes:Number
    },
    data:{

    },
    computed:{

    }
}
</script>