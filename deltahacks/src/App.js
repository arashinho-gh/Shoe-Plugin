import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Button, Card, Form, Input, Layout, Radio, Row, Select } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
// import AuthContextProvider from "./contexts/AuthContextProvider";
const data = {
  athletic: {
    Nike: -0.5,
    Adidas: 0,
    Puma: 0,
    Reebok: -0.5,
  },
  dress: {
    "Cole Haan": -0.5,
    "Johnston & Murphy": 0,
    Aldo: -0.5,
    "Calvin Klein": -0.5,
  },
  casual: {
    Converse: 0,
    Vans: 0,
    Toms: 0,
    Sperry: 0,
  },
};

const App = () => {
  return (
    <div>
      <>
        <Layout>
          <Content>
            <Card>
              <Form>
                {/* <Form.Item label="Required Mark" name="requiredMarkValue">
                  <Radio.Group>
                    <Radio.Button value="optional">Optional</Radio.Button>
                    <Radio.Button value>Required</Radio.Button>
                  </Radio.Group>
                </Form.Item> */}
                <Form.Item
                  label="Gender"
                  required
                  tooltip="This is a required field"
                >
                  <Select placeholder="input gender">
                    <Select.Option label="Male" value="Male" />
                    <Select.Option label="Female" value="Female" />
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Class"
                  required
                  tooltip="This is a required field"
                >
                  <Select placeholder="input class">
                    <Select.Option label="Male" value="Male" />
                    <Select.Option label="Female" value="Female" />
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Brand"
                  required
                  tooltip={{
                    title: "Tooltip with customize icon",
                    // icon: <InfoCircleOutlined />,
                  }}
                >
                  <Input placeholder="input brand" />
                </Form.Item>
                <Form.Item
                  label="Size"
                  required
                  tooltip={{
                    title: "Tooltip with customize icon",
                    // icon: <InfoCircleOutlined />,
                  }}
                >
                  <Input placeholder="input Size" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </Layout>
      </>
    </div>
  );
};

export default App;
