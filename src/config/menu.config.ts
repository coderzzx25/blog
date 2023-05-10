interface IMenu {
  id: number
  name: string
  url: string
}
// 菜单列表
const menulist: IMenu[] = [
  {
    id: 1,
    name: 'Home',
    url: '/home'
  },
  {
    id: 2,
    name: 'About Me',
    url: '/about'
  }
]

export default menulist
