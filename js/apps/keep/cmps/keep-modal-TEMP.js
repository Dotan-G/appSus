// export default {
//     props: ['keep'],
//     template: `
//     <!-- modal -->
//     <section class="keep-modal modal">
//         <!-- modal-content -->
//     <div class="keep-modal-content">
//         <span class="close">&times;</span>
//         <form @submit.prevent="save">
//             <input ref="keepTxt" type="text" v-model="keep.info.txt"  class="edit-bar">
//             <!-- <input ref="keepTxt" type="text" v-model="keep.info.txt" placeholder="Add a note..." class="add-bar"> -->
//         </form>
//     </div>

//     </section>
//     </div>
//     `,
//     data() {
//         return {
//             editableKeep: this.keep
//         }
//     },

//     computed: {

//     },
//     components: {

//     },
//     methods: {
//         save() {
//             console.log('entered save() in keep-modal');
//             this.$emit('editKeep',this.editableKeep);
//             this.editableKeep = {
//                 type:
//             }
//         }
//         // emitEditKeep(keepId) {
//         //     console.log('entering emitEditKeep with id:', keepId);

//         // }
//     }
// }