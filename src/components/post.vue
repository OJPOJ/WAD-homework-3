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
            <img class="footerimage" scr="/src/assets/likeutton.png">
            <p class="likes">{{"Likes: "+ numberOfLikes}} </p> 
        </div>
    </div>
</template>
<script>
export default {
    name: "post",
    props: {
        postId:String,
        date: String,
        uri:String,
        text:String,
        numberOfLikes:Number
    }
}
</script>