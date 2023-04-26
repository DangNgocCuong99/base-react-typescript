import { FormSchemaModel } from "../../components/Form/src/BasicForm";
import { MODE } from "../../ultils/enum"

export const dataConfig = (mode?:MODE):FormSchemaModel<{user:String,password:String,time:Date }>[]=> [{
    name: 'user',
    label: 'user',
    rules:[{required:true}]
},
{
    name: 'password',
    label: 'password',
    rules:[{required:true , message : "dong 2 bat buoc nhat"}],
    component:"InputPassword"
}
]