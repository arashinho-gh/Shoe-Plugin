import React, { useEffect, useState } from "react";

import "./App.css";
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Layout,
  Radio,
  Row,
  Space,
  Select,
  Statistic,
  Typography,
  Tabs,
  message,
  Upload,
  Avatar,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ShoeDataset } from "./shoe";
import img from "./universole.png";
import logo from "./uf.png";

import { genImagePreviewStyle } from "antd/es/image/style";
// import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
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
            <Row>
              <Typography.Title style={{ color: "#f0ffff" }}>
                UniversoleFit
              </Typography.Title>{" "}
              <Space>
                <Avatar src={logo} size="large"></Avatar>
              </Space>
            </Row>
          </Header>
          <Content>
            <Card>
              <Typography.Title level={5} >
                Welcome to the UniversoleFit Official Shoe Sizing Tool. Use our
                standardized measurements to order shoes online without
                worrying about wrong sizing!
              </Typography.Title>
              <Alert
                message="Input data on favourite fitting shoe to get your standardized UniversoleFit shoe size for the best shoe shopping experience!"
                type="info"
                showIcon
              />
              <br />
              <Form>
                <Form.Item
                  label="Gender"
                  required
                  tooltip="Input shoe-specified gender!"
                >
                  <Select onChange={setGender} placeholder="input gender">
                    <Select.Option label="Male" value="Male" />
                    <Select.Option label="Female" value="Female" />
                  </Select>
                </Form.Item>

                {/* <Tabs>
                  <Tabs.TabPane tab={"Input Shoe Style"} key={"a"}> */}
                {/* <Space> */}
                <Row>
                  <Col span={8}>
                    <Typography.Text strong>Option 1:</Typography.Text>
                    <Form.Item
                      label="Class"
                      required
                      tooltip="Input shoe type!"
                    >
                      <Select
                        onChange={(e) => handleChangeStyle(e)}
                        placeholder="input class"
                      >
                        {Object.keys(
                          (!!options.style && options.style) || {}
                        ).map((s) => {
                          console.log(s);
                          return <Select.Option label={s} value={s} />;
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Brand"
                      required
                      tooltip={{
                        title: "Input shoe brand",
                        // icon: <InfoCircleOutlined />,
                      }}
                    >
                      <Select onChange={setBrand} placeholder="input brand">
                        {((!!brandOptions && brandOptions) || []).map((s) => {
                          return <Select.Option label={s} value={s} />;
                        })}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Divider type="vertical" />

                  <Col span={8}>
                    <Typography.Text strong>Option 2:</Typography.Text>
                    <Dragger {...props}>
                      <p className="ant-upload-text">
                        Click/drag an image of your shoes and autofill the
                        information with our auto detection!
                      </p>
                    </Dragger>{" "}
                  </Col>
                </Row>
                {/* </Space> */}

                {/* </Tabs.TabPane>
                  <Tabs.TabPane tab={`Upload Shoe Image`} key={"b"}>
                    <Upload></Upload>
                  </Tabs.TabPane>
                </Tabs> */}
                <Form.Item
                  label="Size"
                  required
                  tooltip={{
                    title: "Input shoe size!",
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
                  <Row>
                    <Button onClick={handleClick} type="default">
                      Get Size!
                    </Button>{" "}
                    <Divider type="vertical" />
                    <Statistic
                      title="UniversoleFit Size: "
                      value={correctedSize}
                      // prefix={<CheckCircleOutl ined/>}
                      // loading
                    />
                    <Divider type="vertical" />
                    <Button
                      type="primary"
                      // shape="circle"
                      // icon={<SearchOutlined />}
                    >
                      Shop!
                    </Button>
                  </Row>
                </Form.Item>
                {/* <Col span={12}> */}

                {/* </Col> */}
              </Form>
            </Card>
          </Content>
        </Layout>
      </>
    </div>
  );
};

export default App;
