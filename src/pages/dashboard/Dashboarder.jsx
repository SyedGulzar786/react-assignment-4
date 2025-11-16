import { AppLayout } from '../../components'

const Dashboarder = ({children}) => {
    var name = "ahsan"
const updateName = () => {
    name = "moiz"
    var getName = document.getElementById("name")
    getName.innerText = name;
    console.log(name);
}
  return (
        <AppLayout>
            <h1 id='name'>{name}</h1>
            <button onClick={updateName}>update name</button>
            {children}
        </AppLayout>
  )
};

export default Dashboarder;


