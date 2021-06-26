import { keepService } from "../services/keep-service.js";
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <!-- <div :style="keepStyle" class="keep-preview-text">
    <p>{{keep.info.title}}</p>
    <img :src="keep.info.url" width="150px">
    

    </div> -->

    <div v-if="keep" class="keep-preview-image">
        <p v-if="!toShowTitle && !toShowImg" @click="toShowTitle = !toShowTitle">{{keep.info.title}}</p>
        <div v-if="toShowTitle" class="image-modal" @change="toShowTitle = !toShowTitle">
            <textarea class="modal-image-title" @change="saveToKeep" contenteditable="true" placeholder="Enter title..." v-model="title"></textarea>
        </div>
        <img v-if="!toShowImg && !toShowTitle" @click="toShowImg = !toShowImg" :src="keep.info.url" width="150px">
        <div v-if="toShowImg" class="image-modal" @change="toShowImg = !toShowImg">
            <textarea class="modal-image-url" @change="saveToKeep" contenteditable="true" placeholder="Enter image url..." v-model="url"></textarea>
        </div>
    </div>
    `,
    data() {
        return {

            toShowTitle: false,
            toShowImg: false,
            keepStyle: null,
            title: '',
            url: '',
            keepImg: {
                id: null,
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: '',
                    title: ''
                },
                style: {
                    backgroundColor: 'none'
                }
            },
        }


    },
    computed: {

    },
    methods: {
        saveToKeep() {
            console.log('saving')
            this.keepImg = this.editableKeep;
            if (this.title) this.keepImg.info.title = this.title;
            if (this.url) this.keepImg.info.url = this.url;
            keepService.save(this.keepImg)
                .then(() => {

                    console.log('success modifing  txt keep');


                })
                .catch(err => {
                    const msg = {
                        txt: err,
                        type: 'fail',
                    };
                    console.log(msg.type, msg.txt);

                })

        }
    },
    watch: {
        myprop: function(newVal, oldVal) { // watch it
            this.keepStyle = newVal.style;
        }
    },
    components: {}
}