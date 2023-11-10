<template>
    <div class="post">
        <div class="posthead">
            <img class="headerimage" src="">
            <p class="headerdate">{{date}}</p>
        </div>
        <div class="postbody">
            <img class="bodyimage" src="{{uri}}" v-show="uri!=''">
            <p class="bodytext">{{text}}</p>
        </div>
        <div class="postfooter">
            <img class="footerimage" scr="">
            <p class="likes"> </p> 
        </div>
    </div>
</template>
<script>
export default {
    name: "post",
    props: {
        date: String,
        uri:String,
        text:String
    }
}
</script>