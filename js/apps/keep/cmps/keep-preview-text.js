import { keepService } from "../services/keep-service.js";
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <div v-if="keep" class="keep-preview-text">
        <p v-if="!toShow" @click="toShow = !toShow">{{keep.info.txt}}</p>
        <!-- <p v-if="toShow">{{txt}}</p> -->
        <div v-if="toShow" class="text-modal" @change="toShow = !toShow">
            <textarea placeholder="Edit your Note here.." v-model="txt" @change="saveToKeep"></textarea>
         </div>
    </div>

    `,
    data() {
        return {
            toShow: false,
            txt: '',
            keepTxt: {
                id: null,
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: ''
                },
                style: {
                    backgroundColor: 'none'
                }
            }
        }
    },
    computed: {

    },
    methods: {
        saveToKeep() {
            this.keepTxt = this.editableKeep;
            this.keepTxt.info.txt = this.txt;
            console.log(this.keepTxt)
            keepService.save(this.keepTxt)
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



        },







    },
    components: {},

}