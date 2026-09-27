import Header from "../components/Header";
import CredentialCards from "../components/CredentialCards";
import Bottomnav from "../components/Bottomnav";

const credentials = [
    {
        title: "Bachelor of Technology in Computer Science",
        issuer: "APJ Abdul Kalam Technological University",
        issueDate: "2020-08-01",
        expiryDate: "2024-06-30",
        credentialId: "KTU-BTECH-2024-9842"
    },
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        issueDate: "2024-01-10",
        expiryDate: "2027-01-10",
        credentialId: "AWS-PSA-8839201"
    },
    {
        title: "Full Stack Web Development Certification",
        issuer: "Meta",
        issueDate: "2023-11-20",
        expiryDate: "Lifetime",
        credentialId: "META-FS-5542190"
    },
    {
        title: "Certified Information Systems Security Professional (CISSP)",
        issuer: "(ISC)²",
        issueDate: "2024-03-15",
        expiryDate: "2027-03-15",
        credentialId: "ISC2-CISSP-441092"
    },
    {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        issueDate: "2023-09-05",
        expiryDate: "Lifetime",
        credentialId: "DLAI-MLS-739281"
    },
    {
        title: "Professional Scrum Master (PSM I)",
        issuer: "Scrum.org",
        issueDate: "2024-05-12",
        expiryDate: "Lifetime",
        credentialId: "SCRUM-PSM-102938"
    },
    {
        title: "Google Cloud Associate Cloud Engineer",
        issuer: "Google Cloud",
        issueDate: "2024-02-18",
        expiryDate: "2026-02-18",
        credentialId: "GCP-ACE-662914"
    },
    {
        title: "Certified Kubernetes Administrator (CKA)",
        issuer: "Linux Foundation & CNCF",
        issueDate: "2024-07-22",
        expiryDate: "2027-07-22",
        credentialId: "CNCF-CKA-338291"
    }
];

function DashboardPage() {
    return (
        <div className="dashboard"> 
            <Header />
            <div className="credentials-container">
                {credentials.map((item) => (
                    <CredentialCards
                        key={item.credentialId}
                        title={item.title}
                        issuer={item.issuer}
                        issueDate={item.issueDate}
                        expiryDate={item.expiryDate}
                        credentialId={item.credentialId}
                    />
                ))}
            </div>
            <Bottomnav />
        </div>
    );
}

export default DashboardPage;