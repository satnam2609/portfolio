import ProjectPage from "@/components/ProjectPage";

export default function Project() {
  return (
    <ProjectPage
      title="Inventory System"
      image="/project/Inventory.png"
      description="The Inventory Management System I developed is a full-featured application designed to streamline business operations by combining inventory control with user role management, authentication, and real-time analytics. It enables authenticated users to manage products, track stock levels, and monitor inventory movements while providing role-based access to sensitive operations. The system includes a dynamic dashboard that displays key business metrics and analytics, helping users make data-driven decisions. In addition to inventory tracking, it supports invoice generation and purchase order management, making it a practical tool for handling day-to-day business transactions. The overall design emphasizes usability, security, and operational efficiency, making it well-suited for small to mid-sized businesses seeking an integrated inventory and sales management solution."
      stack={["MongoDB","NextJS"]}
      git="https://github.com/satnam2609/inventory_management_system"
      medium=""
    />
  );
}
