export default {
    // props: ['keep'],
    template: `
    <div class="keep-add">
    <p>(Note preview from preview-component): txt/jpg/audio sign/video image</p>
    <input type="text" placeholder="Add a note...">
    <button>Checklist</button>
    <button>Text</button>         
    <button>Photo</button>
    <button>Video</button>
    <button>Audio</button>
    <button>List</button>
    <!-- <img :src = "keep.thumbnail"> -->
    <!-- <p>Title: {{keep.title}}</p> -->
    </div>
    `,
    computed: {

    },
    components: {}
}