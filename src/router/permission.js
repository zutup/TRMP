import Cookie from "js-cookie"

export default {
    state: {
        isCollapse: false,
        tableList: [
            {
                path: '/',
                name: 'system',
                lable:"系统页",
            }
        ],
        currentMenu: null,
        menu: []
    },
    mutations: {
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'system'){
                state.currentMenu = val
                const result = state.tableList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tableList.push(val)
                }else{
                    state.currentMenu = null
                }
            }
        },
        closeTag(state,val){
            const result = state.tableList.findIndex(item => item.name === val.name)
            state.tableList.splice(result,1)
        },
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state){
            state.menu = []
            Cookie.remove('menu')
        },
         addMenu(state,router){
             if(!Cookie.get('menu')){
                 return
             }
             const menu = JSON.parse(Cookie.get('menu'))
             state.menu = menu
             const menuArray = []
             menu.array.forEach(item => {
                 if(item.children){
                     item.children = item.children.map(item =>{
                         item.component = () => import(`../components/system/${item.url}`)
                         return item
                    })
                    menuArray.push(...item.children)
                 }else{
                     item.component = () =>import(`../components/system/${item.url}`)
                     menuArray.push(item)
                 }
             });
             //路由动态添加
             menuArray.array.forEach(item => {
                router.addRoute('Main',item)
             });
             
         }
    }
}