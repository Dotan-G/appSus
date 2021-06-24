export default {
    props: ['keep'],
    template: `
    <div :style="keepStyle" class="keep-preview-text">
    <p>{{keep.info.title}}</p>
    <img :src="keep.info.url" width="150px">
    

    </div>
    `,
    data() {
        return { keepStyle: null }

    },
    computed: {

    },
    watch: {
        myprop: function(newVal, oldVal) { // watch it
            this.keepStyle = newVal.style;
        }
    },
    components: {}
}