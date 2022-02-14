import { defineStore } from "pinia";


export const useTemplateStore = defineStore('template', {
    state: () => ({
        template: 23,
        template2: 0,
    }), 

    actions: {
        incrementBy(value ){
            this.template += value;
            // this.template += 1;
        }
    }
})

