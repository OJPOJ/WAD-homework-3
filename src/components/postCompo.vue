<template>
    <div class="post">
        <div class="posthead">
            <p class="headerdate">{{id}}</p>
        </div>
        <div class="postbody">
            <p class="bodytext">{{body}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "postCompo",
    methods: {
    },
    props: {
        id:Number,
        body:String
    },
    data: function (){

    },
    computed:{

    }
}
</script>