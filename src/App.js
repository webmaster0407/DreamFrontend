import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Input, Button, Table, Card  } from 'antd';
import { Col, Row } from 'antd';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme } from 'victory';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const dataSource = [
  {
    key: '1',
    data: 'Create contract',
  },
  {
    key: '2',
    data: 'Add liquidity',
  },
];

const columns = [
  {
    title: 'Owner transaction list',
    dataIndex: 'data',
    key: 'data',
  },
];

const dataSource1 = [
  {
    key: '1',
    data: 'Remove liquidity',
  },
  {
    key: '2',
    data: 'Buy',
  },
  {
    key: '3',
    data: 'Buy',
  },
  {
    key: '4',
    data: 'Sell',
  },
];

const columns1 = [
  {
    title: 'Token add, remove liquidity and buy, sell txs.',
    dataIndex: 'data',
    key: 'data',
  },
];

const items1 = [
  {
    label: "Search",
  },
  {
    label: "Connect Wallet",
  }
]

const items2 = [
  {
      key: 0,
      label: 'Token name, symbol, decimal',
  },
  {
    key: 1,
    label: 'Token 2',
  },
  {
    key: 2,
    label: 'Token 3',
  },
  {
    key: 3,
    label: 'Token 4',
  },
  {
    key: 4,
    label: 'Token 5',
  }
]

const onSearch = (value) => console.log(value);

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Header className="header" style={{ position: 'fixed', width: '100%' }}>
        <Row>
          <Col span={4}>
            <div className="logo" />
            
          </Col>
          <Col span={4}>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200, marginTop: 15 }} />
          </Col>
          <Col span={16}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} items={items1} />
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: '0',
          overflow: false
        }}
      >
        <Layout
          style={{
            padding: '0px',
            background: colorBgContainer,
          }}
          hasSider
        >
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items2} />
          </Sider>
          <Layout
            className="site-layout"
            
            style={{
              marginLeft: 200,
            }}
          >
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            />
            <Content
              style={{
                margin: '24px 16px 0',
                overflow: 'initial',
              }}
            >
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                }}
              >
                <Card style={{
                  padding: 0
                }}>

                  <Row style={{
                    margin: 10
                  }}>
                    <Col span={4} >
                      <Button type='dashed'>
                        Token Name
                      </Button>
                    </Col>
                    <Col span={4} >
                      <Button type='dashed'>
                        Token Symbol
                      </Button>
                    </Col>
                    <Col span={5} >
                      <Button type='dashed'>
                        Token Contact Address
                      </Button>
                    </Col>
                    <Col span={5} >
                      <Button type='dashed'>
                        Token Owner Address
                      </Button>
                    </Col>
                    <Col span={6} >
                      <Button type='dashed'>
                        Launched on
                      </Button>
                    </Col>
                  </Row>

                  <Row style={{
                    margin: 10
                  }}>
                    <Col span={4} >
                      <Button type='dashed'>
                        Token Name
                      </Button>
                    </Col>
                    <Col span={20}>
                      Links in the verified smart contract
                    </Col>
                  </Row>

                  <Row style={{
                    margin: 10
                  }}>
                    <Col span={4} >
                      <Button type='dashed'>
                        Is swap enabled?
                      </Button>
                    </Col>
                    <Col span={4} >
                      <Button type='dashed'>
                        Is locked?
                      </Button>
                    </Col>
                    <Col span={8} >
                      <Button type='dashed'>
                        Limit is removed
                      </Button>
                    </Col>
                    <Col span={8} >
                      <Button type='dashed'>
                        Is renounced?
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{
                    margin: 10
                  }}>
                    <Col span={4} >
                      <Button type='dashed'>
                        Simulation result
                      </Button>
                    </Col>
                    <Col span={4} >
                    </Col>
                    <Col span={8} >
                    </Col>
                    <Col span={8} >
                    </Col>
                  </Row>
                </Card>
                <Row style={{
                  margin: '10px 0'
                }}>
                  <Col span={8} >
                    <Card bordered='true' style={{
                      margin: 10
                    }}>
                      <Table dataSource={dataSource} columns={columns} />
                    </Card>
                  </Col>
                  <Col span={10} style={{
                      margin: 10
                    }}>
                    <Card title='Token price' bordered='true'>
                      <VictoryChart
                        // adding the material theme provided with Victory
                        theme={VictoryTheme.material}
                        domainPadding={20}
                      >
                        <VictoryAxis
                          tickValues={[1, 2, 3, 4]}
                          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                        />
                        <VictoryAxis
                          dependentAxis
                          tickFormat={(x) => (`$${x / 1000}k`)}
                        />
                        <VictoryBar
                          data={data}
                          x="quarter"
                          y="earnings"
                        />
                      </VictoryChart>
                    </Card>
                  </Col>
                  <Col span={4} style={{
                      margin: 10
                    }}>
                    <Card bordered='true'>
                      <Table dataSource={dataSource1} columns={columns1} />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;