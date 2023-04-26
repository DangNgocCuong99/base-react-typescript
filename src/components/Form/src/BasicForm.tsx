  import { Button, Form, Input , Row} from 'antd';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';
import { componentMap } from './componentMap';
import { ComponentType } from './types';

interface props {
  label: String,
  name: NamePath,
  rules: Rule[],
  component?: ComponentType
}

export interface FormSchemaModel<T> extends props {
  name: Extract<keyof T, string>;
}


function BasicForm({ dataForm, test }: { dataForm: props[], test?: String }) {
  let form = dataForm?.map((data,index) => {
    console.log(data.component ? componentMap.get(data.component): false);
    
    return (
      <Form.Item
        label={data.label}
        name={data.name}
        rules={data.rules}
        key={index}
        wrapperCol={{ span: 12 }}
      >
      {data.component ? componentMap.get(data.component) : <Input />}   
      </Form.Item>
    )

  })

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>BasicForm</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
        {form}
        </Row>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default BasicForm