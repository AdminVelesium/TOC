import React, { useState } from "react";
import {
    Layout,
    Menu,
    Typography,
    Card,
    Table,
    Tag,
    Avatar,
    Button,
    Input,
    Row,
    Col,
    Space,
    Badge
} from "antd";
import {
    UserOutlined,
    SearchOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    CalendarOutlined,
    StarFilled
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// Mock data for demonstration
const internalCandidates = [
    {
        id: 'EMP001',
        name: 'John Smith',
        position: 'Senior Developer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        experience: '5 years',
        status: 'Available',
        rating: 4.5
    },
    {
        id: 'EMP002',
        name: 'Sarah Johnson',
        position: 'Product Manager',
        department: 'Product',
        location: 'New York, NY',
        experience: '7 years',
        status: 'On Project',
        rating: 4.8
    },
    {
        id: 'EMP003',
        name: 'Michael Chen',
        position: 'UX Designer',
        department: 'Design',
        location: 'Austin, TX',
        experience: '3 years',
        status: 'Available',
        rating: 4.2
    },
    {
        id: 'EMP004',
        name: 'Emma Rodriguez',
        position: 'Data Scientist',
        department: 'R&D',
        location: 'Seattle, WA',
        experience: '4 years',
        status: 'On Leave',
        rating: 4.7
    },
    {
        id: 'EMP005',
        name: 'David Wilson',
        position: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Remote',
        experience: '6 years',
        status: 'Available',
        rating: 4.4
    }
];

const externalCandidates = [
    {
        id: 'EXT001',
        name: 'Jennifer Parker',
        currentCompany: 'Tech Innovations',
        position: 'Frontend Developer',
        experience: '4 years',
        status: 'Active',
        skills: ['React', 'JavaScript', 'CSS'],
        appliedDate: '2023-05-15'
    },
    {
        id: 'EXT002',
        name: 'Robert Kim',
        currentCompany: 'Digital Solutions',
        position: 'Backend Engineer',
        experience: '6 years',
        status: 'New',
        skills: ['Node.js', 'Python', 'AWS'],
        appliedDate: '2023-06-01'
    },
    {
        id: 'EXT003',
        name: 'Lisa Anderson',
        currentCompany: 'WebCraft Inc',
        position: 'Full Stack Developer',
        experience: '5 years',
        status: 'Interview',
        skills: ['React', 'Node.js', 'MongoDB'],
        appliedDate: '2023-05-20'
    },
    {
        id: 'EXT004',
        name: 'Thomas Moore',
        currentCompany: 'Data Systems',
        position: 'Data Engineer',
        experience: '3 years',
        status: 'Rejected',
        skills: ['Python', 'SQL', 'ETL'],
        appliedDate: '2023-05-10'
    },
    {
        id: 'EXT005',
        name: 'Amanda Lewis',
        currentCompany: 'Cloud Services',
        position: 'Cloud Architect',
        experience: '8 years',
        status: 'Offer Sent',
        skills: ['AWS', 'Azure', 'DevOps'],
        appliedDate: '2023-05-25'
    }
];

const otherCompaniesCandidates = [
    {
        id: 'OC001',
        name: 'Brian Taylor',
        currentCompany: 'Google',
        position: 'Senior SWE',
        experience: '7 years',
        noticePeriod: '30 days',
        skills: ['Java', 'Distributed Systems', 'Kubernetes']
    },
    {
        id: 'OC002',
        name: 'Sophia Martinez',
        currentCompany: 'Amazon',
        position: 'Product Designer',
        experience: '5 years',
        noticePeriod: '60 days',
        skills: ['Figma', 'UX Research', 'Prototyping']
    },
    {
        id: 'OC003',
        name: 'Kevin Brown',
        currentCompany: 'Microsoft',
        position: 'Data Scientist',
        experience: '4 years',
        noticePeriod: '15 days',
        skills: ['Python', 'Machine Learning', 'TensorFlow']
    },
    {
        id: 'OC004',
        name: 'Olivia Davis',
        currentCompany: 'Apple',
        position: 'iOS Developer',
        experience: '6 years',
        noticePeriod: '45 days',
        skills: ['Swift', 'Objective-C', 'Xcode']
    },
    {
        id: 'OC005',
        name: 'James Wilson',
        currentCompany: 'Meta',
        position: 'UX Engineer',
        experience: '4 years',
        noticePeriod: '30 days',
        skills: ['React', 'Three.js', 'WebGL']
    }
];

// Internal Candidate Component
const InternalCandidate = () => {
    const columns = [
        {
            title: 'Employee',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        style={{ backgroundColor: '#1890ff', marginRight: 10 }}
                        icon={<UserOutlined />}
                    />
                    <Text strong>{text}</Text>
                </div>
            ),
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: (text) => (
                <div>
                    <EnvironmentOutlined style={{ marginRight: 5, color: '#8c8c8c' }} />
                    {text}
                </div>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = status === 'Available' ? 'green' :
                    status === 'On Project' ? 'blue' : 'orange';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating) => (
                <div>
                    <StarFilled style={{ color: '#faad14' }} />
                    <Text style={{ marginLeft: 5 }}>{rating}</Text>
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Button type="link" style={{ padding: 0 }}>
                    View Profile
                </Button>
            ),
        },
    ];

    return (
        <Card title="Internal Candidates" style={{ borderRadius: 8 }}>
            <div style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search internal candidates..."
                    prefix={<SearchOutlined />}
                    style={{ width: 300 }}
                />
            </div>
            <Table
                columns={columns}
                dataSource={internalCandidates}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
        </Card>
    );
};

// External Candidate Component
const ExternalCandidate = () => {
    const columns = [
        {
            title: 'Candidate',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        style={{ backgroundColor: '#52c41a', marginRight: 10 }}
                        icon={<UserOutlined />}
                    />
                    <Text strong>{text}</Text>
                </div>
            ),
        },
        {
            title: 'Current Company',
            dataIndex: 'currentCompany',
            key: 'currentCompany',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
            render: (skills) => (
                <div>
                    {skills.map((skill, index) => (
                        <Tag key={index} color="blue" style={{ marginBottom: 4 }}>
                            {skill}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = status === 'New' ? 'blue' :
                    status === 'Interview' ? 'purple' :
                        status === 'Offer Sent' ? 'green' : 'red';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Applied Date',
            dataIndex: 'appliedDate',
            key: 'appliedDate',
            render: (date) => (
                <div>
                    <CalendarOutlined style={{ marginRight: 5, color: '#8c8c8c' }} />
                    {date}
                </div>
            ),
        },
    ];

    return (
        <Card title="External Candidates" style={{ borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <Input
                    placeholder="Search external candidates..."
                    prefix={<SearchOutlined />}
                    style={{ width: 300 }}
                />
                <Button type="primary">Add New Candidate</Button>
            </div>
            <Table
                columns={columns}
                dataSource={externalCandidates}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
        </Card>
    );
};

// Other Companies Candidate Component
const OtherCompaniesCandidate = () => {
    const columns = [
        {
            title: 'Candidate',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        style={{ backgroundColor: '#722ed1', marginRight: 10 }}
                        icon={<UserOutlined />}
                    />
                    <Text strong>{text}</Text>
                </div>
            ),
        },
        {
            title: 'Current Company',
            dataIndex: 'currentCompany',
            key: 'currentCompany',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Notice Period',
            dataIndex: 'noticePeriod',
            key: 'noticePeriod',
            render: (period) => (
                <Tag color="orange">{period}</Tag>
            ),
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
            render: (skills) => (
                <div>
                    {skills.map((skill, index) => (
                        <Tag key={index} color="geekblue" style={{ marginBottom: 4 }}>
                            {skill}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space>
                    <Button size="small">Contact</Button>
                    <Button size="small" type="primary">Request Interview</Button>
                </Space>
            ),
        },
    ];

    return (
        <Card title="Candidates from Other Companies" style={{ borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <Input
                    placeholder="Search candidates from other companies..."
                    prefix={<SearchOutlined />}
                    style={{ width: 350 }}
                />
                <Button type="primary">Import Candidates</Button>
            </div>
            <Table
                columns={columns}
                dataSource={otherCompaniesCandidates}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
        </Card>
    );
};

// Main Candidate Management Component
const CandidateManagement = () => {
    const [activeTab, setActiveTab] = useState('internal');

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                width={250}
                style={{
                    background: '#fff',
                    boxShadow: '2px 0 8px rgba(0,0,0,0.06)',
                    paddingTop: 20
                }}
            >
                <div style={{ padding: '0 24px 16px' }}>
                    <Title level={4} style={{ marginBottom: 0 }}>Candidate Management</Title>
                    <Text type="secondary">Manage all candidate types</Text>
                </div>

                <Menu
                    mode="inline"
                    selectedKeys={[activeTab]}
                    style={{ borderRight: 0 }}
                >
                    <Menu.Item
                        key="internal"
                        icon={<UserOutlined style={{ color: '#1890ff' }} />}
                        onClick={() => setActiveTab('internal')}
                    >
                        Internal Candidates
                    </Menu.Item>
                    <Menu.Item
                        key="external"
                        icon={<UserOutlined style={{ color: '#52c41a' }} />}
                        onClick={() => setActiveTab('external')}
                    >
                        External Candidates
                    </Menu.Item>
                    <Menu.Item
                        key="other"
                        icon={<UserOutlined style={{ color: '#722ed1' }} />}
                        onClick={() => setActiveTab('other')}
                    >
                        Other Companies Candidates
                    </Menu.Item>
                </Menu>

                <div style={{ padding: 24, marginTop: 'auto' }}>
                    <Text strong>Need help?</Text>
                    <Text style={{ display: 'block' }}>Contact our support team</Text>
                    <Button type="link" style={{ paddingLeft: 0 }}>support@company.com</Button>
                </div>
            </Sider>

            <Layout>
                <Header style={{
                    background: '#fff',
                    padding: '0 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                    <div>
                        <Text strong style={{ fontSize: 16 }}>Candidate Management</Text>
                        <Text type="secondary" style={{ marginLeft: 16 }}>
                            {activeTab === 'internal' ? 'Internal Candidates' :
                                activeTab === 'external' ? 'External Candidates' :
                                    'Candidates from Other Companies'}
                        </Text>
                    </div>
                    <Space>
                        <Input
                            placeholder="Search candidates..."
                            prefix={<SearchOutlined />}
                            style={{ width: 250 }}
                        />
                        <Badge count={5} size="small">
                            <Button icon={<MailOutlined />} shape="circle" />
                        </Badge>
                        <Avatar icon={<UserOutlined />} />
                    </Space>
                </Header>

                <Content style={{ margin: '24px 24px 0', overflow: 'initial' }}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            {activeTab === 'internal' && <InternalCandidate />}
                            {activeTab === 'external' && <ExternalCandidate />}
                            {activeTab === 'other' && <OtherCompaniesCandidate />}
                        </Col>

                        <Col span={24} md={12}>
                            <Card title="Candidate Pipeline" style={{ borderRadius: 8 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <Text strong style={{ fontSize: 24 }}>142</Text>
                                        <div><Text type="secondary">Total Candidates</Text></div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Text strong style={{ fontSize: 24 }}>42</Text>
                                        <div><Text type="secondary">New Applicants</Text></div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Text strong style={{ fontSize: 24 }}>18</Text>
                                        <div><Text type="secondary">Interviews</Text></div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Text strong style={{ fontSize: 24 }}>7</Text>
                                        <div><Text type="secondary">Hired</Text></div>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col span={24} md={12}>
                            <Card title="Upcoming Interviews" style={{ borderRadius: 8 }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                    <Avatar style={{ backgroundColor: '#1890ff', marginRight: 12 }}>
                                        JD
                                    </Avatar>
                                    <div>
                                        <Text strong>John Doe - Frontend Developer</Text>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CalendarOutlined style={{ marginRight: 5, color: '#8c8c8c' }} />
                                            <Text type="secondary">Today, 2:00 PM - 3:00 PM</Text>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                                    <Avatar style={{ backgroundColor: '#52c41a', marginRight: 12 }}>
                                        SM
                                    </Avatar>
                                    <div>
                                        <Text strong>Sarah Miller - Product Designer</Text>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CalendarOutlined style={{ marginRight: 5, color: '#8c8c8c' }} />
                                            <Text type="secondary">Tomorrow, 10:00 AM - 11:00 AM</Text>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar style={{ backgroundColor: '#722ed1', marginRight: 12 }}>
                                        RK
                                    </Avatar>
                                    <div>
                                        <Text strong>Robert Kim - Data Scientist</Text>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CalendarOutlined style={{ marginRight: 5, color: '#8c8c8c' }} />
                                            <Text type="secondary">June 15, 1:30 PM - 2:30 PM</Text>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};
export default CandidateManagement;