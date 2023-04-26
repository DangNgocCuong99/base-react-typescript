import { BasicForm } from "../../components/Form"
import  {useState} from 'react';
import { dataConfig } from "./data.config";
import { Input } from "antd";
import { useComponentRegister } from "../../components/Form/src/hook/useComponentRegister";

function Login() {
    useComponentRegister("InputPassword",<Input.Password/>)
    return (
        <div>
            <h1>dang nhap</h1>
            <BasicForm dataForm={dataConfig()}
                test="testt" />
        </div>
    )
}

export default Login