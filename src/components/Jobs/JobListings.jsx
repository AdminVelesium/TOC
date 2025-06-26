import React, { useState } from "react";
import {
    Layout,
    Menu,
    Typography,
    Card,
    Button,
    Avatar,
    Input,
    Tabs,
    Badge,
    Row,
    Col,
    Space,
    Divider,
    Statistic,
    Checkbox,
    Table,
    Tag,
    Progress,
    Form,
    Select,
    DatePicker,
    Timeline,
    Switch,
    Slider,
    Rate
} from "antd";
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    FileTextOutlined,
    SearchOutlined,
    PlusOutlined,
    BellOutlined,
    ClockCircleOutlined,
    DollarOutlined,
    EnvironmentOutlined,
    MailOutlined,
    FilterOutlined,
    EditOutlined,
    CheckCircleOutlined,
    ScheduleOutlined,
    EnvironmentFilled,
    PhoneFilled,
    MailFilled,
    LinkOutlined,
    DownloadOutlined,
    StarFilled,
    CalendarOutlined,
    FilePdfOutlined,
    SafetyCertificateOutlined,
    BookOutlined,
    HistoryOutlined,
    GlobalOutlined,
    TeamOutlined,
    SolutionOutlined,
    DashboardOutlined,
    NotificationOutlined,
    LockOutlined,
    CloudDownloadOutlined,
    DeleteOutlined,
    InfoCircleOutlined
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph, Link } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// Job data
const ourJobPostings = [
    {
        id: 'JOB001',
        title: "Senior Software Engineer (Backend)",
        location: "Remote",
        salary: "$120,000 - $160,000/yr",
        level: "Senior-level",
        type: "Full-time",
        applicants: 45,
        posted: "1 day ago",
        status: "Active",
        description: "We're looking for an experienced backend engineer to join our growing team. You'll be responsible for designing and implementing scalable microservices architecture using Node.js and TypeScript.",
        requirements: ["5+ years experience", "Node.js/TypeScript", "AWS/GCP", "Docker/Kubernetes", "REST/GraphQL APIs"],
        tags: ["Engineering", "Backend", "Full-time"]
    },
    {
        id: 'JOB002',
        title: "Marketing Specialist",
        location: "London, UK",
        salary: "$50,000 - $70,000/yr",
        level: "Entry-level",
        type: "Full-time",
        applicants: 30,
        posted: "2 days ago",
        status: "Active",
        description: "Join our marketing team to develop and execute innovative campaigns that drive user acquisition and engagement.",
        requirements: ["2+ years marketing experience", "SEO/SEM expertise", "Content creation", "Analytics tools"],
        tags: ["Marketing", "Entry-level", "Full-time"]
    },
    {
        id: 'JOB003',
        title: "Lead Frontend Developer",
        location: "Remote",
        salary: "$130,000 - $170,000/yr",
        level: "Senior-level",
        type: "Full-time",
        applicants: 8,
        posted: "2 days ago",
        status: "Active",
        description: "Lead our frontend team in building beautiful, responsive user interfaces using React and modern web technologies.",
        requirements: ["7+ years frontend experience", "React/TypeScript", "State management", "UI/UX principles", "Team leadership"],
        tags: ["Engineering", "Frontend", "Leadership"]
    },
    {
        id: 'JOB004',
        title: "Product Manager (SaaS)",
        location: "New York, NY",
        salary: "$100,000 - $140,000/yr",
        level: "Mid-level",
        type: "Full-time",
        applicants: 22,
        posted: "3 days ago",
        status: "Active",
        description: "Drive product strategy and execution for our SaaS platform, working closely with engineering and design teams.",
        requirements: ["3+ years product management", "SaaS experience", "Agile methodologies", "User research", "Roadmapping"],
        tags: ["Product", "SaaS", "Full-time"]
    }
];

const externalJobListings = [
    {
        id: 'EXT001',
        title: "UX Designer at TechCorp",
        location: "San Francisco, CA",
        salary: "$95,000 - $125,000/yr",
        company: "TechCorp",
        posted: "1 day ago",
        type: "Full-time",
        description: "Design intuitive user experiences for enterprise software applications. Collaborate with product managers and engineers to create user-centered solutions.",
        tags: ["Design", "UX", "Full-time"]
    },
    {
        id: 'EXT002',
        title: "Data Analyst at DataInsights",
        location: "Remote",
        salary: "$85,000 - $110,000/yr",
        company: "DataInsights",
        posted: "2 days ago",
        type: "Full-time",
        description: "Analyze complex datasets to uncover insights and drive business decisions. Create visualizations and reports for stakeholders.",
        tags: ["Data", "Analytics", "Remote"]
    },
    {
        id: 'EXT003',
        title: "DevOps Engineer at CloudScale",
        location: "Austin, TX",
        salary: "$110,000 - $150,000/yr",
        company: "CloudScale",
        posted: "3 days ago",
        type: "Contract",
        description: "Implement and maintain CI/CD pipelines, infrastructure as code, and monitoring solutions for cloud-native applications.",
        tags: ["DevOps", "Cloud", "Contract"]
    },
    {
        id: 'EXT004',
        title: "Product Marketing Manager at GrowthHack",
        location: "Chicago, IL",
        salary: "$90,000 - $120,000/yr",
        company: "GrowthHack",
        posted: "4 days ago",
        type: "Full-time",
        description: "Develop go-to-market strategies, positioning, and messaging for our product portfolio. Drive customer acquisition and retention.",
        tags: ["Marketing", "Product", "Full-time"]
    }
];

// Our Job Postings Component
const OurJobPostings = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                <Title level={4} style={{ margin: 0 }}>Our Job Postings</Title>
                <Button type="primary" icon={<PlusOutlined />}>Create New Job</Button>
            </div>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={selectedJob ? 14 : 24}>
                    <Card title={`Active Postings (${ourJobPostings.length})`} style={{ borderRadius: 8 }}>
                        <Table
                            dataSource={ourJobPostings}
                            rowKey="id"
                            pagination={false}
                            onRow={(record) => ({
                                onClick: () => setSelectedJob(record)
                            })}
                            columns={[
                                {
                                    title: 'Job Title',
                                    dataIndex: 'title',
                                    key: 'title',
                                    render: (text, record) => (
                                        <div>
                                            <Text strong>{text}</Text>
                                            <div style={{ fontSize: 12, color: '#8c8c8c' }}>
                                                <EnvironmentOutlined /> {record.location}
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    title: 'Applicants',
                                    dataIndex: 'applicants',
                                    key: 'applicants',
                                    render: applicants => (
                                        <Badge count={applicants} style={{ backgroundColor: '#1890ff' }} />
                                    )
                                },
                                {
                                    title: 'Posted',
                                    dataIndex: 'posted',
                                    key: 'posted'
                                },
                                {
                                    title: 'Status',
                                    dataIndex: 'status',
                                    key: 'status',
                                    render: status => (
                                        <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
                                    )
                                },
                                {
                                    title: 'Action',
                                    key: 'action',
                                    render: () => (
                                        <Button size="small">Manage</Button>
                                    )
                                }
                            ]}
                        />
                    </Card>

                    <Card title="Job Post Performance" style={{ marginTop: 24, borderRadius: 8 }}>
                        <Row gutter={24}>
                            <Col xs={24} md={8}>
                                <Statistic
                                    title="Total Views"
                                    value={1, 243}
                                    valueStyle={{ fontSize: 28 }}
                                />
                            </Col>
                            <Col xs={24} md={8}>
                                <Statistic
                                    title="Application Rate"
                                    value={12.3}
                                    suffix="%"
                                    valueStyle={{ fontSize: 28 }}
                                />
                            </Col>
                            <Col xs={24} md={8}>
                                <Statistic
                                    title="Avg. Time to Apply"
                                    value={2.4}
                                    suffix="days"
                                    valueStyle={{ fontSize: 28 }}
                                />
                            </Col>
                        </Row>
                        <Divider />
                        <Title level={5} style={{ marginBottom: 16 }}>Top Performing Jobs</Title>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {ourJobPostings.slice(0, 3).map(job => (
                                <div key={job.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Text>{job.title}</Text>
                                    <div>
                                        <Text strong>{job.applicants}</Text>
                                        <Text type="secondary"> applicants</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>

                {selectedJob && (
                    <Col xs={24} lg={10}>
                        <Card
                            title={selectedJob.title}
                            extra={<Button icon={<EditOutlined />} type="text" />}
                            style={{ borderRadius: 8 }}
                        >
                            <div style={{ marginBottom: 16 }}>
                                <Text strong>Job Details</Text>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                                    <div>
                                        <Text type="secondary">Location</Text>
                                        <div><EnvironmentOutlined /> {selectedJob.location}</div>
                                    </div>
                                    <div>
                                        <Text type="secondary">Salary</Text>
                                        <div><DollarOutlined /> {selectedJob.salary}</div>
                                    </div>
                                    <div>
                                        <Text type="secondary">Type</Text>
                                        <div>{selectedJob.type}</div>
                                    </div>
                                </div>
                            </div>

                            <Divider style={{ margin: '16px 0' }} />

                            <div style={{ marginBottom: 16 }}>
                                <Text strong>Job Description</Text>
                                <Paragraph>{selectedJob.description}</Paragraph>
                            </div>

                            <div style={{ marginBottom: 16 }}>
                                <Text strong>Requirements</Text>
                                <ul style={{ paddingLeft: 20, margin: '8px 0 0' }}>
                                    {selectedJob.requirements.map((req, i) => (
                                        <li key={i}><Text>{req}</Text></li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginBottom: 16 }}>
                                <Text strong>Tags</Text>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                                    {selectedJob.tags.map((tag, i) => (
                                        <Tag key={i} color="blue">{tag}</Tag>
                                    ))}
                                </div>
                            </div>

                            <Divider style={{ margin: '16px 0' }} />

                            <div>
                                <Text strong>Actions</Text>
                                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                    <Button type="primary">View Applicants</Button>
                                    <Button>Edit Posting</Button>
                                    <Button danger>Close Position</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
};

// External Job Listings Component
const ExternalJobListings = () => {
    const [filter, setFilter] = useState({
        location: [],
        jobType: [],
        salaryRange: [0, 200000],
        experience: []
    });

    const experienceOptions = [
        'Entry-level', 'Mid-level', 'Senior-level', 'Executive'
    ];

    const jobTypeOptions = [
        'Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'
    ];

    const locationOptions = [
        'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX',
        'London, UK', 'Chicago, IL', 'Seattle, WA'
    ];

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                <Title level={4} style={{ margin: 0 }}>External Job Listings</Title>
                <Button type="primary" icon={<PlusOutlined />}>Add Job Alert</Button>
            </div>

            <Card title="Filter Jobs" style={{ marginBottom: 24, borderRadius: 8 }}>
                <Row gutter={[24, 16]}>
                    <Col xs={24} md={12}>
                        <Text strong>Job Type</Text>
                        <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {jobTypeOptions.map(type => (
                                <Checkbox
                                    key={type}
                                    checked={filter.jobType.includes(type)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFilter({ ...filter, jobType: [...filter.jobType, type] });
                                        } else {
                                            setFilter({ ...filter, jobType: filter.jobType.filter(t => t !== type) });
                                        }
                                    }}
                                >
                                    {type}
                                </Checkbox>
                            ))}
                        </div>
                    </Col>

                    <Col xs={24} md={12}>
                        <Text strong>Location</Text>
                        <Select
                            mode="multiple"
                            placeholder="Select locations"
                            style={{ width: '100%', marginTop: 8 }}
                            value={filter.location}
                            onChange={value => setFilter({ ...filter, location: value })}
                        >
                            {locationOptions.map(location => (
                                <Option key={location} value={location}>{location}</Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} md={12}>
                        <Text strong>Experience Level</Text>
                        <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {experienceOptions.map(level => (
                                <Checkbox
                                    key={level}
                                    checked={filter.experience.includes(level)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setFilter({ ...filter, experience: [...filter.experience, level] });
                                        } else {
                                            setFilter({ ...filter, experience: filter.experience.filter(l => l !== level) });
                                        }
                                    }}
                                >
                                    {level}
                                </Checkbox>
                            ))}
                        </div>
                    </Col>

                    <Col xs={24} md={12}>
                        <Text strong>Salary Range</Text>
                        <div style={{ marginTop: 8 }}>
                            <Slider
                                range
                                min={0}
                                max={200000}
                                step={10000}
                                value={filter.salaryRange}
                                onChange={value => setFilter({ ...filter, salaryRange: value })}
                                tipFormatter={value => `$${value.toLocaleString()}`}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text>${filter.salaryRange[0].toLocaleString()}</Text>
                                <Text>${filter.salaryRange[1].toLocaleString()}</Text>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                            <Button>Reset Filters</Button>
                            <Button type="primary">Apply Filters</Button>
                        </div>
                    </Col>
                </Row>
            </Card>

            <Row gutter={[24, 24]}>
                {externalJobListings.map((job) => (
                    <Col xs={24} md={12} lg={8} key={job.id}>
                        <Card
                            hoverable
                            style={{ borderRadius: 8, height: "100%" }}
                            bodyStyle={{ padding: 16 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start"
                                }}
                            >
                                <Title level={5} style={{ margin: 0, fontSize: 16 }}>
                                    {job.title}
                                </Title>
                                <Button shape="circle" icon={<GlobalOutlined />} size="small" />
                            </div>

                            <Paragraph style={{ margin: "8px 0", fontWeight: 500, color: "#1890ff" }}>
                                {job.company}
                            </Paragraph>

                            <Paragraph style={{ margin: "8px 0" }}>
                                <DollarOutlined /> {job.salary}
                            </Paragraph>

                            <Paragraph style={{ margin: "8px 0", fontSize: 14 }}>
                                {job.description.substring(0, 100)}...
                            </Paragraph>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: 12
                                }}
                            >
                                <Text>{job.type}</Text>
                                <Text
                                    style={{
                                        background: "#e6f7ff",
                                        padding: "2px 8px",
                                        borderRadius: 4,
                                        fontSize: 12,
                                        color: "#1890ff"
                                    }}
                                >
                                    External
                                </Text>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                                {job.tags.map((tag, i) => (
                                    <Tag key={i} color="blue">{tag}</Tag>
                                ))}
                            </div>

                            <Divider style={{ margin: "12px 0" }} />

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <div>
                                    <EnvironmentOutlined />{" "}
                                    <Text type="secondary">{job.location}</Text>
                                </div>
                                <Button type="primary" size="small">
                                    Apply Now
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
                <Button type="primary">Load More Jobs</Button>
            </div>
        </div>
    );
};

// Applications Data
const applicationsData = [
    {
        id: "APP001",
        name: "John Smith",
        position: "Senior Software Engineer",
        status: "Review",
        applied: "2023-06-10",
        experience: "5 years",
        location: "San Francisco, CA",
        email: "john.smith@example.com",
        phone: "+1 (555) 123-4567",
        resume: "john_smith_resume.pdf",
        skills: ["Java", "Spring Boot", "AWS", "Docker"],
        rating: 4.7,
    },
    {
        id: "APP002",
        name: "Sarah Johnson",
        position: "Marketing Specialist",
        status: "Interview",
        applied: "2023-06-08",
        experience: "3 years",
        location: "New York, NY",
        email: "sarah.j@example.com",
        phone: "+1 (555) 987-6543",
        resume: "sarah_johnson_resume.pdf",
        skills: ["SEO", "Content Marketing", "Social Media", "Google Analytics"],
        rating: 4.3,
    },
    {
        id: "APP003",
        name: "Michael Chen",
        position: "Lead Frontend Developer",
        status: "Technical Test",
        applied: "2023-06-05",
        experience: "6 years",
        location: "Austin, TX",
        email: "michael.c@example.com",
        phone: "+1 (555) 456-7890",
        resume: "michael_chen_resume.pdf",
        skills: ["React", "TypeScript", "Redux", "GraphQL"],
        rating: 4.9,
    },
    {
        id: "APP004",
        name: "Emma Rodriguez",
        position: "Product Manager",
        status: "Offer",
        applied: "2023-06-01",
        experience: "4 years",
        location: "Seattle, WA",
        email: "emma.r@example.com",
        phone: "+1 (555) 234-5678",
        resume: "emma_rodriguez_resume.pdf",
        skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
        rating: 4.6,
    },
    {
        id: "APP005",
        name: "David Wilson",
        position: "DevOps Engineer",
        status: "Rejected",
        applied: "2023-05-28",
        experience: "5 years",
        location: "Remote",
        email: "david.w@example.com",
        phone: "+1 (555) 876-5432",
        resume: "david_wilson_resume.pdf",
        skills: ["Kubernetes", "CI/CD", "Terraform", "Ansible"],
        rating: 4.2,
    },
];

// Status options for filtering
const statusOptions = [
    { value: "Review", label: "Review", color: "blue" },
    { value: "Interview", label: "Interview", color: "purple" },
    { value: "Technical Test", label: "Technical Test", color: "orange" },
    { value: "Offer", label: "Offer", color: "green" },
    { value: "Rejected", label: "Rejected", color: "red" },
    { value: "Hired", label: "Hired", color: "cyan" },
];

// Applications Component
const Applications = () => {
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [searchText, setSearchText] = useState("");

    const filteredData = applicationsData.filter((app) => {
        const matchesStatus =
            selectedStatus.length === 0 || selectedStatus.includes(app.status);
        const matchesSearch =
            searchText === "" ||
            app.name.toLowerCase().includes(searchText.toLowerCase()) ||
            app.position.toLowerCase().includes(searchText.toLowerCase()) ||
            app.email.toLowerCase().includes(searchText.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const statusCounts = statusOptions.map((status) => ({
        ...status,
        count: applicationsData.filter((app) => app.status === status.value).length,
    }));

    const columns = [
        {
            title: "Candidate",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                        style={{ backgroundColor: "#1890ff", marginRight: 10 }}
                        icon={<UserOutlined />}
                    />
                    <div>
                        <Text strong>{text}</Text>
                        <div style={{ fontSize: 12, color: "#8c8c8c" }}>{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: "Position",
            dataIndex: "position",
            key: "position",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                const statusObj = statusOptions.find((opt) => opt.value === status);
                return <Tag color={statusObj?.color || "default"}>{status}</Tag>;
            },
        },
        {
            title: "Applied",
            dataIndex: "applied",
            key: "applied",
            render: (date) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <CalendarOutlined style={{ marginRight: 5, color: "#8c8c8c" }} />
                    {date}
                </div>
            ),
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => (
                <div>
                    <StarFilled style={{ color: "#faad14" }} />
                    <Text style={{ marginLeft: 5 }}>{rating}</Text>
                </div>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button size="small">View</Button>
                    <Button size="small" type="primary">
                        Process
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 24,
                }}
            >
                <Title level={4} style={{ margin: 0 }}>
                    Job Applications
                </Title>
                <Button type="primary" icon={<DownloadOutlined />}>
                    Export to CSV
                </Button>
            </div>

            {/* Status Summary Cards */}
            <Row gutter={16} style={{ marginBottom: 24 }}>
                {statusCounts.map((status) => (
                    <Col xs={24} sm={12} md={8} lg={4} key={status.value}>
                        <Card
                            bordered={false}
                            style={{
                                textAlign: "center",
                                backgroundColor: `${status.color}10`,
                                borderLeft: `3px solid ${status.color}`,
                            }}
                        >
                            <Text strong style={{ fontSize: 24 }}>
                                {status.count}
                            </Text>
                            <div>
                                <Text type="secondary">{status.label}</Text>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Filters */}
            <Card style={{ marginBottom: 24, borderRadius: 8 }}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        alignItems: "center",
                    }}
                >
                    <Input
                        placeholder="Search candidates..."
                        prefix={<SearchOutlined />}
                        style={{ width: 250 }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <Select
                        mode="multiple"
                        placeholder="Filter by Status"
                        style={{ width: 250 }}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                    >
                        {statusOptions.map((option) => (
                            <Option key={option.value} value={option.value}>
                                <Tag color={option.color}>{option.label}</Tag>
                            </Option>
                        ))}
                    </Select>

                    <DatePicker.RangePicker />

                    <Button icon={<FilterOutlined />}>Apply Filters</Button>
                    <Button>Reset Filters</Button>
                </div>
            </Card>

            {/* Applications Table */}
            <Card style={{ borderRadius: 8 }}>
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                    expandable={{
                        expandedRowRender: (record) => (
                            <div
                                style={{ margin: 0, padding: "16px 24px", background: "#fafafa" }}
                            >
                                <Row gutter={24}>
                                    <Col span={8}>
                                        <Text strong>Contact Information</Text>
                                        <div style={{ marginTop: 8 }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 8,
                                                }}
                                            >
                                                <MailFilled
                                                    style={{ marginRight: 8, color: "#8c8c8c" }}
                                                />
                                                <Text>{record.email}</Text>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: 8,
                                                }}
                                            >
                                                <PhoneFilled
                                                    style={{ marginRight: 8, color: "#8c8c8c" }}
                                                />
                                                <Text>{record.phone}</Text>
                                            </div>
                                            <div
                                                style={{ display: "flex", alignItems: "center" }}
                                            >
                                                <EnvironmentFilled
                                                    style={{ marginRight: 8, color: "#8c8c8c" }}
                                                />
                                                <Text>{record.location}</Text>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col span={8}>
                                        <Text strong>Skills & Experience</Text>
                                        <div
                                            style={{
                                                marginTop: 8,
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 8,
                                            }}
                                        >
                                            {record.skills.map((skill, index) => (
                                                <Tag key={index} color="blue">
                                                    {skill}
                                                </Tag>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: 16 }}>
                                            <Text strong>Experience: </Text>
                                            <Text>{record.experience}</Text>
                                        </div>
                                    </Col>

                                    <Col span={8}>
                                        <Text strong>Documents</Text>
                                        <div style={{ marginTop: 8 }}>
                                            <Button
                                                icon={<FilePdfOutlined />}
                                                type="link"
                                                style={{
                                                    padding: 0,
                                                    display: "block",
                                                    textAlign: "left",
                                                }}
                                            >
                                                {record.resume}
                                            </Button>
                                            <Button
                                                icon={<FilePdfOutlined />}
                                                type="link"
                                                style={{
                                                    padding: 0,
                                                    display: "block",
                                                    textAlign: "left",
                                                }}
                                            >
                                                Cover Letter.pdf
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ),
                        rowExpandable: (record) => true,
                    }}
                />
            </Card>

            {/* Application Timeline */}
            <Card
                title="Application Pipeline"
                style={{ marginTop: 24, borderRadius: 8 }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 16,
                    }}
                >
                    <div>
                        <Text strong>Total Applications: </Text>
                        <Text>142</Text>
                    </div>
                    <div>
                        <Text strong>Conversion Rate: </Text>
                        <Text>24%</Text>
                    </div>
                </div>

                <Progress
                    percent={100}
                    success={{ percent: 24 }}
                    status="active"
                    strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                    style={{ marginBottom: 24 }}
                />

                <Timeline mode="alternate">
                    <Timeline.Item color="green" dot={<CheckCircleOutlined />}>
                        <Text strong>Application Received</Text>
                        <Text style={{ display: "block" }}>142 candidates</Text>
                        <Text type="secondary">Avg. time: 1 day</Text>
                    </Timeline.Item>
                    <Timeline.Item color="blue" dot={<SearchOutlined />}>
                        <Text strong>Screening</Text>
                        <Text style={{ display: "block" }}>98 candidates</Text>
                        <Text type="secondary">Avg. time: 3 days</Text>
                    </Timeline.Item>
                    <Timeline.Item color="purple" dot={<UserOutlined />}>
                        <Text strong>Interview</Text>
                        <Text style={{ display: "block" }}>52 candidates</Text>
                        <Text type="secondary">Avg. time: 5 days</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        color="orange"
                        dot={<SafetyCertificateOutlined />}
                    >
                        <Text strong>Technical Test</Text>
                        <Text style={{ display: "block" }}>32 candidates</Text>
                        <Text type="secondary">Avg. time: 4 days</Text>
                    </Timeline.Item>
                    <Timeline.Item color="cyan" dot={<CheckCircleOutlined />}>
                        <Text strong>Offer</Text>
                        <Text style={{ display: "block" }}>15 candidates</Text>
                        <Text type="secondary">Avg. time: 2 days</Text>
                    </Timeline.Item>
                    <Timeline.Item color="green" dot={<CheckCircleOutlined />}>
                        <Text strong>Hired</Text>
                        <Text style={{ display: "block" }}>8 candidates</Text>
                    </Timeline.Item>
                </Timeline>
            </Card>
        </div>
    );
};

// View Profile Component
const ViewProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();

    const userProfile = {
        name: "Jane Doe",
        title: "HR Manager",
        email: "jane.doe@company.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        department: "Human Resources",
        startDate: "2020-03-15",
        skills: [
            "Recruitment",
            "Employee Relations",
            "Performance Management",
            "HR Policies",
        ],
        bio: "Experienced HR professional with over 8 years in talent acquisition and employee development. Passionate about creating positive workplace cultures and implementing effective HR strategies.",
        education: [
            {
                degree: "MBA in Human Resources",
                university: "Stanford University",
                year: "2012-2014",
            },
            {
                degree: "Bachelor of Psychology",
                university: "UC Berkeley",
                year: "2008-2012",
            },
        ],
        certifications: [
            "SHRM Senior Certified Professional (SHRM-SCP)",
            "Professional in Human Resources (PHR)",
            "Diversity and Inclusion Certificate",
        ],
    };

    const handleSave = () => {
        form
            .validateFields()
            .then((values) => {
                console.log("Updated profile:", values);
                setIsEditing(false);
            })
            .catch((error) => {
                console.log("Validation failed:", error);
            });
    };

    return (
        <div>
            <Card
                title="Your Profile"
                style={{ borderRadius: 8, marginBottom: 24 }}
                extra={
                    <Button
                        icon={isEditing ? <CheckCircleOutlined /> : <EditOutlined />}
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                    >
                        {isEditing ? "Save Profile" : "Edit Profile"}
                    </Button>
                }
            >
                {isEditing ? (
                    <Form form={form} layout="vertical" initialValues={userProfile}>
                        <Row gutter={24}>
                            <Col xs={24} md={8}>
                                <div style={{ textAlign: "center", marginBottom: 24 }}>
                                    <Avatar
                                        size={120}
                                        icon={<UserOutlined />}
                                        style={{ marginBottom: 16 }}
                                    />
                                    <Button type="link">Change Photo</Button>
                                </div>
                            </Col>

                            <Col xs={24} md={16}>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Full Name"
                                            name="name"
                                            rules={[{ required: true }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Job Title" name="title">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{ type: "email", required: true }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Phone" name="phone">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Location" name="location">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Department" name="department">
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item label="Bio" name="bio">
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                ) : (
                    <Row gutter={24}>
                        <Col xs={24} md={8}>
                            <div style={{ textAlign: "center" }}>
                                <Avatar
                                    size={120}
                                    icon={<UserOutlined />}
                                    style={{ marginBottom: 16 }}
                                />
                                <Title level={4} style={{ marginBottom: 4 }}>
                                    {userProfile.name}
                                </Title>
                                <Text type="secondary">{userProfile.title}</Text>

                                <div style={{ marginTop: 24, textAlign: "left" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: 12,
                                        }}
                                    >
                                        <MailFilled
                                            style={{
                                                marginRight: 12,
                                                color: "#8c8c8c",
                                                fontSize: 16,
                                            }}
                                        />
                                        <Text>{userProfile.email}</Text>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: 12,
                                        }}
                                    >
                                        <PhoneFilled
                                            style={{
                                                marginRight: 12,
                                                color: "#8c8c8c",
                                                fontSize: 16,
                                            }}
                                        />
                                        <Text>{userProfile.phone}</Text>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: 12,
                                        }}
                                    >
                                        <EnvironmentFilled
                                            style={{
                                                marginRight: 12,
                                                color: "#8c8c8c",
                                                fontSize: 16,
                                            }}
                                        />
                                        <Text>{userProfile.location}</Text>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <CalendarOutlined
                                            style={{
                                                marginRight: 12,
                                                color: "#8c8c8c",
                                                fontSize: 16,
                                            }}
                                        />
                                        <Text>Joined {userProfile.startDate}</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={16}>
                            <Card title="About Me" style={{ marginBottom: 24 }}>
                                <Paragraph>{userProfile.bio}</Paragraph>
                            </Card>

                            <Card title="Skills & Expertise" style={{ marginBottom: 24 }}>
                                <div
                                    style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                                >
                                    {userProfile.skills.map((skill, index) => (
                                        <Tag
                                            key={index}
                                            color="blue"
                                            style={{ fontSize: 14, padding: "6px 12px" }}
                                        >
                                            {skill}
                                        </Tag>
                                    ))}
                                </div>
                            </Card>

                            <Row gutter={24}>
                                <Col xs={24} md={12}>
                                    <Card title="Education" style={{ marginBottom: 24 }}>
                                        {userProfile.education.map((edu, index) => (
                                            <div key={index} style={{ marginBottom: 16 }}>
                                                <Text strong>{edu.degree}</Text>
                                                <div>{edu.university}</div>
                                                <Text type="secondary">{edu.year}</Text>
                                            </div>
                                        ))}
                                    </Card>
                                </Col>

                                <Col xs={24} md={12}>
                                    <Card title="Certifications">
                                        <ul style={{ paddingLeft: 20, margin: 0 }}>
                                            {userProfile.certifications.map((cert, index) => (
                                                <li key={index} style={{ marginBottom: 8 }}>
                                                    <Text>{cert}</Text>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Card>

            {/* Account Information */}
            <Card
                title="Account Information"
                style={{ borderRadius: 8, marginBottom: 24 }}
            >
                <Row gutter={24}>
                    <Col xs={24} md={8}>
                        <div>
                            <Text strong>Account Security</Text>
                            <div style={{ marginTop: 8 }}>
                                <Button
                                    type="link"
                                    style={{
                                        padding: 0,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    Change Password
                                </Button>
                                <Button
                                    type="link"
                                    style={{
                                        padding: 0,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    Two-Factor Authentication
                                </Button>
                                <Button
                                    type="link"
                                    style={{
                                        padding: 0,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    Login Activity
                                </Button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} md={8}>
                        <div>
                            <Text strong>Subscription</Text>
                            <div style={{ marginTop: 8 }}>
                                <Text type="secondary">Current Plan: </Text>
                                <Text strong>Premium</Text>
                                <div>
                                    <Text type="secondary">Renewal Date: </Text>
                                    <Text>July 15, 2023</Text>
                                </div>
                                <Button type="primary" size="small" style={{ marginTop: 8 }}>
                                    Upgrade Plan
                                </Button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} md={8}>
                        <div>
                            <Text strong>Data Management</Text>
                            <div style={{ marginTop: 8 }}>
                                <Button
                                    type="link"
                                    style={{
                                        padding: 0,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    Export My Data
                                </Button>
                                <Button
                                    type="link"
                                    style={{
                                        padding: 0,
                                        display: "block",
                                        textAlign: "left",
                                        color: "#ff4d4f",
                                    }}
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>

            {/* Recent Activity */}
            <Card title="Recent Activity" style={{ borderRadius: 8 }}>
                <Timeline>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: "16px" }} />}>
                        <Text strong>Posted new job listing</Text>
                        <div>Senior Product Designer</div>
                        <Text type="secondary">Today, 09:45 AM</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={<HistoryOutlined style={{ fontSize: "16px" }} />}
                    >
                        <Text strong>Reviewed applications</Text>
                        <div>12 applications for Marketing Specialist</div>
                        <Text type="secondary">Yesterday, 04:30 PM</Text>
                    </Timeline.Item>
                    <Timeline.Item dot={<UserOutlined style={{ fontSize: "16px" }} />}>
                        <Text strong>Scheduled interviews</Text>
                        <div>3 interviews for Frontend Developer position</div>
                        <Text type="secondary">June 10, 2023, 11:20 AM</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={
                            <CheckCircleOutlined
                                style={{ fontSize: "16px", color: "#52c41a" }}
                            />
                        }
                    >
                        <Text strong>Hired new employee</Text>
                        <div>John Smith for Senior Software Engineer</div>
                        <Text type="secondary">June 5, 2023, 03:15 PM</Text>
                    </Timeline.Item>
                </Timeline>
            </Card>
        </div>
    );
};

// Settings Component
const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');

    const notificationSettings = [
        { id: 1, name: 'Email Notifications', description: 'Receive email alerts for important activities', enabled: true },
        { id: 2, name: 'Push Notifications', description: 'Get real-time updates on your mobile device', enabled: true },
        { id: 3, name: 'Application Alerts', description: 'Notify when new applications are received', enabled: true },
        { id: 4, name: 'Candidate Updates', description: 'Alert when candidates update their status', enabled: false },
        { id: 5, name: 'Job Expiry Alerts', description: 'Notify before job postings expire', enabled: true },
    ];

    const integrations = [
        { id: 1, name: 'LinkedIn', description: 'Import candidates from LinkedIn', connected: true },
        { id: 2, name: 'Google Calendar', description: 'Sync interviews with your calendar', connected: true },
        { id: 3, name: 'Slack', description: 'Get notifications in Slack', connected: false },
        { id: 4, name: 'Zoom', description: 'Schedule interviews directly to Zoom', connected: false },
    ];

    return (
        <div>
            <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                style={{ marginBottom: 24 }}
            >
                <TabPane tab="Account Settings" key="account" />
                <TabPane tab="Notification Preferences" key="notifications" />
                <TabPane tab="Integrations" key="integrations" />
                <TabPane tab="Billing" key="billing" />
                <TabPane tab="Security" key="security" />
            </Tabs>

            {activeTab === 'account' && (
                <Card title="Account Information" style={{ borderRadius: 8, marginBottom: 24 }}>
                    <Form layout="vertical">
                        <Row gutter={24}>
                            <Col xs={24} md={8}>
                                <div style={{ textAlign: 'center' }}>
                                    <Avatar size={120} icon={<UserOutlined />} style={{ marginBottom: 16 }} />
                                    <Button type="link" style={{ display: 'block' }}>Change Profile Picture</Button>
                                </div>
                            </Col>

                            <Col xs={24} md={16}>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <Form.Item label="Full Name">
                                            <Input defaultValue="Jane Doe" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Job Title">
                                            <Input defaultValue="HR Manager" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Email">
                                            <Input defaultValue="jane.doe@company.com" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Phone">
                                            <Input defaultValue="+1 (555) 123-4567" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Location">
                                            <Input defaultValue="San Francisco, CA" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Department">
                                            <Input defaultValue="Human Resources" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item label="Bio">
                                            <Input.TextArea
                                                rows={4}
                                                defaultValue="Experienced HR professional with over 8 years in talent acquisition and employee development."
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                                            <Button>Cancel</Button>
                                            <Button type="primary">Save Changes</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            )}

            {activeTab === 'notifications' && (
                <Card title="Notification Preferences" style={{ borderRadius: 8, marginBottom: 24 }}>
                    <div style={{ marginBottom: 24 }}>
                        <Title level={5} style={{ marginBottom: 16 }}>Notification Channels</Title>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                            <Card style={{ flex: 1, minWidth: 200 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text strong>Email Notifications</Text>
                                    <Switch defaultChecked />
                                </div>
                                <Text type="secondary">Receive notifications via email</Text>
                            </Card>
                            <Card style={{ flex: 1, minWidth: 200 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text strong>Push Notifications</Text>
                                    <Switch defaultChecked />
                                </div>
                                <Text type="secondary">Get alerts on your devices</Text>
                            </Card>
                            <Card style={{ flex: 1, minWidth: 200 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text strong>In-app Notifications</Text>
                                    <Switch defaultChecked />
                                </div>
                                <Text type="secondary">See notifications within the app</Text>
                            </Card>
                        </div>
                    </div>

                    <Divider />

                    <Title level={5} style={{ marginBottom: 16 }}>Notification Types</Title>
                    <Table
                        dataSource={notificationSettings}
                        rowKey="id"
                        pagination={false}
                        columns={[
                            {
                                title: 'Notification Type',
                                dataIndex: 'name',
                                key: 'name',
                                render: (text, record) => (
                                    <div>
                                        <Text strong>{text}</Text>
                                        <div><Text type="secondary">{record.description}</Text></div>
                                    </div>
                                )
                            },
                            {
                                title: 'Status',
                                dataIndex: 'enabled',
                                key: 'enabled',
                                render: (enabled) => (
                                    <Switch defaultChecked={enabled} />
                                )
                            }
                        ]}
                    />
                </Card>
            )}

            {activeTab === 'integrations' && (
                <Card title="App Integrations" style={{ borderRadius: 8, marginBottom: 24 }}>
                    <Title level={5} style={{ marginBottom: 16 }}>Connected Services</Title>
                    <Paragraph type="secondary" style={{ marginBottom: 24 }}>
                        Connect your JobFlow account with other services to streamline your workflow.
                    </Paragraph>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {integrations.map(integration => (
                            <Card key={integration.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                        <Avatar size={48} style={{ backgroundColor: '#f0f2f5' }}>
                                            <Text strong style={{ fontSize: 16 }}>{integration.name.charAt(0)}</Text>
                                        </Avatar>
                                        <div>
                                            <Text strong>{integration.name}</Text>
                                            <div><Text type="secondary">{integration.description}</Text></div>
                                        </div>
                                    </div>
                                    <div>
                                        {integration.connected ? (
                                            <Tag color="green">Connected</Tag>
                                        ) : (
                                            <Button type="primary">Connect</Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <Divider style={{ margin: '24px 0' }} />

                    <Title level={5} style={{ marginBottom: 16 }}>API Access</Title>
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Text strong>API Key Management</Text>
                                <div><Text type="secondary">Generate and manage API keys for integration</Text></div>
                            </div>
                            <Button>Manage API Keys</Button>
                        </div>
                    </Card>
                </Card>
            )}

            {activeTab === 'billing' && (
                <Card title="Billing Information" style={{ borderRadius: 8, marginBottom: 24 }}>
                    <Row gutter={24}>
                        <Col xs={24} md={12}>
                            <Card title="Current Plan" style={{ marginBottom: 24 }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Title level={2} style={{ color: '#1890ff' }}>Premium</Title>
                                    <Text strong style={{ fontSize: 18 }}>$99/month</Text>
                                    <div style={{ margin: '16px 0' }}>
                                        <Button type="primary">Upgrade Plan</Button>
                                    </div>
                                </div>

                                <Divider />

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Text strong>Plan Features</Text>
                                        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                                            <li>Unlimited job postings</li>
                                            <li>500 candidate applications</li>
                                            <li>Advanced analytics</li>
                                            <li>Priority support</li>
                                            <li>Custom branding</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Text strong>Renewal Date</Text>
                                        <div style={{ textAlign: 'center', marginTop: 8 }}>
                                            <CalendarOutlined style={{ fontSize: 24 }} />
                                            <div>July 15, 2023</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card title="Payment Method" style={{ marginBottom: 24 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <Avatar size={40} style={{ backgroundColor: '#f0f2f5' }}>
                                            <Text strong>VISA</Text>
                                        </Avatar>
                                        <div>
                                            <Text strong>Visa ending in 1234</Text>
                                            <div><Text type="secondary">Expires 12/2024</Text></div>
                                        </div>
                                    </div>
                                    <Button>Change</Button>
                                </div>

                                <Divider style={{ margin: '16px 0' }} />

                                <Button type="dashed" block icon={<PlusOutlined />}>
                                    Add Payment Method
                                </Button>
                            </Card>

                            <Card title="Billing History">
                                <Table
                                    dataSource={[
                                        { id: 'INV001', date: '2023-06-15', amount: '$99.00', status: 'Paid' },
                                        { id: 'INV002', date: '2023-05-15', amount: '$99.00', status: 'Paid' },
                                        { id: 'INV003', date: '2023-04-15', amount: '$99.00', status: 'Paid' },
                                    ]}
                                    rowKey="id"
                                    pagination={false}
                                    columns={[
                                        { title: 'Invoice ID', dataIndex: 'id', key: 'id' },
                                        { title: 'Date', dataIndex: 'date', key: 'date' },
                                        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
                                        {
                                            title: 'Status',
                                            dataIndex: 'status',
                                            key: 'status',
                                            render: status => <Tag color="green">{status}</Tag>
                                        },
                                        {
                                            title: 'Action',
                                            key: 'action',
                                            render: () => <Button size="small">Download</Button>
                                        }
                                    ]}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            )}

            {activeTab === 'security' && (
                <Card title="Security Settings" style={{ borderRadius: 8, marginBottom: 24 }}>
                    <Row gutter={24}>
                        <Col xs={24} md={12}>
                            <Card title="Password" style={{ marginBottom: 24 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <Text strong>Password</Text>
                                        <div><Text type="secondary">Last changed 3 months ago</Text></div>
                                    </div>
                                    <Button>Change Password</Button>
                                </div>
                            </Card>

                            <Card title="Two-Factor Authentication" style={{ marginBottom: 24 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <Text strong>2FA Authentication</Text>
                                        <div><Text type="secondary">Add an extra layer of security</Text></div>
                                    </div>
                                    <Switch />
                                </div>
                            </Card>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card title="Login Activity" style={{ marginBottom: 24 }}>
                                <div style={{ marginBottom: 16 }}>
                                    <Text strong>Recent Logins</Text>
                                    <div style={{ marginTop: 8 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                            <Text>San Francisco, CA</Text>
                                            <Text type="secondary">Today, 09:45 AM</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                            <Text>New York, NY (Mobile)</Text>
                                            <Text type="secondary">Yesterday, 04:30 PM</Text>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                            <Text>London, UK</Text>
                                            <Text type="secondary">June 10, 2023, 11:20 AM</Text>
                                        </div>
                                    </div>
                                </div>
                                <Button>View All Activity</Button>
                            </Card>

                            <Card title="Data Management">
                                <div style={{ marginBottom: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <Text strong>Export Data</Text>
                                            <div><Text type="secondary">Download all your data</Text></div>
                                        </div>
                                        <Button icon={<CloudDownloadOutlined />}>Export</Button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <Text strong>Delete Account</Text>
                                        <div><Text type="secondary">Permanently delete your account</Text></div>
                                    </div>
                                    <Button danger icon={<DeleteOutlined />}>Delete Account</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    );
};

export default function JobDashboard() {
    const [activeMenu, setActiveMenu] = useState("1");

    const tabTitles = {
        "1": "Our Job Postings",
        "2": "External Job Listings",
        "3": "Applications",
        "4": "Settings",
        "5": "Your Profile"
    };

    const tabDescriptions = {
        "1": "Manage your company's job listings and recruitment process",
        "2": "Explore external job opportunities from other companies",
        "3": "Review and manage job applications from candidates",
        "4": "Configure your account settings and preferences",
        "5": "View and edit your personal profile information"
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{ backgroundColor: "#fff", padding: "16px 0" }}
            >
                <div style={{ padding: "0 20px 16px", textAlign: "center" }}>
                    <Title level={4} style={{ margin: 0 }}>JobFlow</Title>
                </div>
                <Menu
                    mode="inline"
                    selectedKeys={[activeMenu]}
                    onSelect={({ key }) => setActiveMenu(key)}
                >
                    <Menu.Item key="1" icon={<AppstoreOutlined />}>
                        Our Job Postings
                    </Menu.Item>
                    <Menu.Item key="2" icon={<GlobalOutlined />}>
                        External Job Listings
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SolutionOutlined />}>
                        Applications
                    </Menu.Item>
                    <Menu.Item key="4" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        View Profile
                    </Menu.Item>
                </Menu>
                <div style={{ padding: "20px", marginTop: "auto" }}>
                    <Space>
                        <Avatar size={40} icon={<UserOutlined />} />
                        <div>
                            <Text strong>Jane Doe</Text>
                            <div>
                                <Text type="secondary">HR Manager</Text>
                            </div>
                        </div>
                    </Space>
                </div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        background: "#fff",
                        padding: "0 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
                        zIndex: 1
                    }}
                >
                    <div>
                        <Title level={4} style={{ margin: 0 }}>{tabTitles[activeMenu]}</Title>
                        <Text type="secondary">{tabDescriptions[activeMenu]}</Text>
                    </div>
                    <Space>
                        <Input
                            prefix={<SearchOutlined />}
                            placeholder="Search..."
                            style={{ maxWidth: 300 }}
                        />
                        <Button icon={<PlusOutlined />} type="primary">
                            {activeMenu === "1" ? "Post Job" :
                                activeMenu === "2" ? "Add Listing" :
                                    activeMenu === "3" ? "New Application" : "Create"}
                        </Button>
                        <Badge count={5} size="small">
                            <Button icon={<BellOutlined />} shape="circle" />
                        </Badge>
                        <Button icon={<MailOutlined />} shape="circle" />
                    </Space>
                </Header>
                <Content style={{ margin: "24px 16px", padding: "0 16px" }}>
                    {activeMenu === "1" && <OurJobPostings />}
                    {activeMenu === "2" && <ExternalJobListings />}
                    {activeMenu === "3" && <Applications />}
                    {activeMenu === "4" && <Settings />}
                    {activeMenu === "5" && <ViewProfile />}
                </Content>
            </Layout>
        </Layout>
    );
}