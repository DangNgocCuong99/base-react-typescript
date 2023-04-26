import { Input ,DatePicker} from "antd";
import { ComponentType } from "./types";

const componentMap = new Map<ComponentType, JSX.Element>();

componentMap.set("Input", <Input/>);
// componentMap.set("InputPassword", <Input.Password/>);
componentMap.set("DatePicker", <DatePicker/>);

export function add(compName: ComponentType, component: JSX.Element) {
    componentMap.set(compName, component);
}

export function del(compName: ComponentType) {
    componentMap.delete(compName);
}

export function has(compName: ComponentType) {
    return componentMap.has(compName);
}

export { componentMap };
