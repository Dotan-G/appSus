export default {
    props: ['keep'],
    template: `
    <div class="keep-preview-text">
        <p>text note:</p>
    <p>{{keep.type}}</p>
    <p>{{keep.info.txt}}</p>
    <p>-------------------------</p>


    </div>
    `,
    computed: {

    },
    components: {}
}