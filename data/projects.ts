import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Breadstack – unified e-commerce management platform",
    period: "06/2022 — Present",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "React Query",
      "Ant Design",
      "TailwindCSS",
      "Shopify",
      "WooCommerce",
    ],

    problem:
      "Retailers operated multiple disconnected systems for catalog, orders, CRM, analytics, and logistics, causing fragmented workflows and inconsistent data across sales channels.",

    role: "Frontend Developer contributing to core business modules and shared UI infrastructure across Breadstack, Chatso, and Canfleet.",

    whatIBuilt:
      "A unified management console centralising catalog, pricing, orders, CRM, analytics, and logistics, with integrations to external commerce, loyalty, payment, and delivery services.",

    technicalDecisions: [
      "Organised the frontend by business domains (orders, catalog, CRM, logistics, analytics) to reduce cross-module coupling and improve scalability.",
      "Built shared UI libraries for business components and dashboards, establishing consistent design and interaction patterns.",
      "Separated server state (React Query) from client state (Redux) to maintain predictable data flow and simplify complex state transitions.",
      "Implemented feature flag mechanisms to enable incremental rollouts and safer production deployments.",
      "Abstracted third-party integrations (Shopify, WooCommerce, payment gateways, loyalty systems, logistics providers) behind structured frontend contracts.",
    ],

    impact: [
      "Improved maintainability and reduced duplication across multiple product modules through shared UI infrastructure.",
      "Enhanced release stability and deployment safety via feature-flagged delivery strategy.",
      "Delivered performant, data-heavy dashboards and complex business flows in production environments.",
      "Enabled reliable integration with external commerce and logistics ecosystems.",
    ],
  },
];
