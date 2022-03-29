export default {
    state: {
         isCollapse: false
    },
    mutations: {
        collapesMenus(state){
            state.isCollapse = !state.isCollapse
        }
    }
}