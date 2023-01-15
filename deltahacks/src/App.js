import React, { useEffect, useState } from "react";

import "./App.css";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Radio,
  Row,
  Select,
  Statistic,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ShoeDataset } from "./shoe";
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
  const [gender, setGender] = useState();
  const [style, setStyle] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [correctedSize, setCorrectedSize] = useState();

  const [options, setOptions] = useState({});
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    setOptions(getOptions());
  }, []);
  function handleClick() {
    console.log("gender", gender);
    console.log("style", style);
    console.log("brand", brand);
    console.log("size", size);
    const newShoeSize = shoeMatch(gender, style, brand, size);
    console.log(newShoeSize);
    setCorrectedSize(newShoeSize);
  }

  function handleChangeStyle(e) {
    setStyle(e);
    setOptions(getOptions());
    setBrandOptions(getBrands(e));

    console.log("brandOptions", console.log(brandOptions));
  }

  function shoeMatch(Gender, Class, brand, size) {
    for (let i = 0; i < ShoeDataset.length; i++) {
      if (Gender === ShoeDataset[i].Gender) {
        console.log("Class", Class);
        console.log("Class2", ShoeDataset[i].Class);

        if (Class === ShoeDataset[i].Class) {
          // return "x";
          for (const shoe_brand in ShoeDataset[i].Brand) {
            if (shoe_brand === brand) {
              console.log("sizefinal", size + ShoeDataset[i].Brand[shoe_brand]);
              return size + ShoeDataset[i].Brand[shoe_brand];
            }
          }
        }
      }
    }
  }

  function getOptions() {
    let option = {
      style: {},
    };
    ShoeDataset.forEach((data) => {
      // option.gender.push(data.Gender);
      option.style[data.Class] = [];
      Object.keys(data.Brand).forEach((b) => {
        option.style[data.Class].push(b);
      });
    });
    console.log("options", option);
    return option;
  }
  function getBrands(style) {
    console.log("options", options);
    console.log("options.style[style]", options.style[style]);

    return options.style[style];
  }

  return (
    <div>
      <>
        <Layout>
          <Header style={{ height: "80px" }}>
            <Typography.Title style={{ color: "grey" }}>
              UniversoleFit Sizing Tool
            </Typography.Title>
            {/* <Image src={universole}></Image> */}
          </Header>
          <Content>
            <Card>
              <Form>
                <Form.Item
                  label="Gender"
                  required
                  tooltip="This is a required field"
                >
                  <Select onChange={setGender} placeholder="input gender">
                    <Select.Option label="Male" value="Male" />
                    <Select.Option label="Female" value="Female" />
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Class"
                  required
                  tooltip="This is a required field"
                >
                  <Select
                    onChange={(e) => handleChangeStyle(e)}
                    placeholder="input class"
                  >
                    {Object.keys((!!options.style && options.style) || {}).map(
                      (s) => {
                        console.log(s);
                        return <Select.Option label={s} value={s} />;
                      }
                    )}
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
                  <Select onChange={setBrand} placeholder="input brand">
                    {((!!brandOptions && brandOptions) || []).map((s) => {
                      return <Select.Option label={s} value={s} />;
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Size"
                  required
                  tooltip={{
                    title: "Tooltip with customize icon",
                    // icon: <InfoCircleOutlined />,
                  }}
                >
                  <Select onChange={setSize} placeholder="input brand">
                    {Array.from({ length: 21 }, (_, i) => 5.5 + i * 0.5).map(
                      (s) => {
                        return <Select.Option label={s} value={s} />;
                      }
                    )}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button onClick={handleClick} type="primary">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            {/* <Card>New: {correctedSize}</Card> */}
            <Card>
              <Col span={12}>
                <Statistic
                  title="UniversoleFit Size: "
                  value={correctedSize}
                  // loading
                />
              </Col>
            </Card>
          </Content>
        </Layout>
      </>
    </div>
  );
};

export default App;
