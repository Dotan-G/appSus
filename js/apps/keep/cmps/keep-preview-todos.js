import { keepService } from "../services/keep-service.js"
export default {
    props: ['keep'],
    template: `
    <div class="keep-preview-todos">
    <li v-for="(todo, idx, name) in keep.info.todos" :key="todo.id" class="keep-todo-container">
        <p>Todos:</p>
        <p>Todo: {{todo.txt}}</p>
        <p>Done At: {{getDateFormat(todo.doneAt)}}</p>
        <button class="todo-delete-btn" @click.stop="delTask(idx, keep.id)">Edit</button>
        <button class="todo-delete-btn" @click.stop="delTask(idx, keep.id)">Delete</button>



    </li>

    </div>
    `,
    computed: {
        data() {
            return {
                currTodoKeep: null
            }
        }


    },
    methods: {
        getDateFormat(todoDoneDate) {

            return todoDoneDate === null ? '' : new Date(todoDoneDate).toLocaleTimeString();
        },

        delTask(todoIdx, todoKeepId) {
            keepService.getKeepById(todoKeepId)
                .then(todo => {
                    this.currTodoKeep = todo
                    this.currTodoKeep.info.todos.splice(todoIdx, 1);
                    this.emitEditedKeep(this.currTodoKeep);
                });
        },
        emitEditedKeep(editedKeep) {
            //console.log(editedKeep);
            this.$emit('todoKeepToPreview', editedKeep);

        }
    },







    components: {}
}