import keepTodo from "./keep-todo.js";
import { keepService } from "../services/keep-service.js"
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <div class="keep-preview-todos">
    <p>Todos:</p>
    <li v-for="(todo, idx, name) in keep.info.todos" :key="todo.id" class="keep-todo-container">
        <keep-todo :todo="todo" :keepToEdit="this.keepToEdit"  :todoToEdit="this.todoToEdit" :selTodoIdx="idx"/>
        <button class="todo-delete-btn" @click.stop="delTask(idx, keep.id)">Delete</button>
        <button class="todo-edit-btn" @click.stop="sendEditableTodo(idx,keep.id)">Edit</button>

    </li>

    </div>
    `,
    computed: {
        data() {
            return {
                todoToEdit: null,
                keepToEdit: null,
                selTodoIdx: null,
                currTodoKeep: null,
            }
        }


    },
    methods: {
        getDateFormat(todoDoneDate) {

            return todoDoneDate === null ? '' : new Date(todoDoneDate).toLocaleTimeString();
        },



        sendEditableTodo(idx, id) {
            this.setKeepAndTodo(idx, id)
        },

        setKeepAndTodo(idx, id) {
            keepService.getKeepById(id)
                .then(keep => {
                    this.keepToEdit = keep;
                    this.todoToEdit = keep.info.todos[idx];
                    this.selTodoIdx = id;
                    console.log("keepToEdit", this.keepToEdit);
                    console.log("todoToEdit", this.todoToEdit)
                })
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
            this.$emit('todoKeepToPreview', editedKeep);

        },

    },







    components: { keepTodo }
}