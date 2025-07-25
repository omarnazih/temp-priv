import { Building, CreditCard, FileText, Shield, FileSpreadsheet, Table2 } from 'lucide-react';

export const HOME_EXAMPLE_TASKS = [
  {
    title: 'List Hub71 companies',
    description: 'List the latest cohort of Hub71 companies',
    category: 'Agent',
    icon: Building,
    route: '/replay/9f792f43-0ccb-4af6-b871-7b8389e4f1cc/45c7abf3-5023-4e74-89d7-5aa0d38c00f1'
  },
  {
    title: 'Auto Reimbursement',
    description: 'Process expense reimbursements automatically',
    category: 'Agent',
    icon: CreditCard,
    route: '/replay/9f792f43-0ccb-4af6-b871-7b8389e4f1cc/e42a57d2-6ec4-4cda-afb0-ecd48c3d36c6'
  },
  {
    title: 'Fill PDF Form',
    description: 'Automatically fill PDF forms with data',
    category: 'Agent',
    icon: FileText,
    route: '/replay/6f637e9f-3c5d-4fd0-a75b-eb581b8225f1/fd166b01-7a7b-4b6c-8733-8a28c92a0f1b'
  },
  {
    title: 'Pass Captcha',
    description: 'Solve captcha challenges automatically',
    category: 'Agent',
    icon: Shield,
    route: '/replay/6f637e9f-3c5d-4fd0-a75b-eb581b8225f1/564fcf38-37f7-420a-8d9e-416122d1f346'
  }
];

export const GALLERY_EXAMPLE_TASKS = [
  {
    title: 'List Hub71 Companies',
    description: 'List the latest cohort of Hub71 companies and their LinkedIn URL',
    category: 'Agent',
    icon: Building,
    route: '/replay/7442d07a-10c7-44aa-968c-1a0c90de5176/83799c1d-252e-4973-93b8-38de2a6208a8'
  },
  {
    title: 'Auto Reimbursement',
    description: 'Process expense reimbursements automatically',
    category: 'Agent',
    icon: CreditCard,
    route: '/replay/9f792f43-0ccb-4af6-b871-7b8389e4f1cc/e42a57d2-6ec4-4cda-afb0-ecd48c3d36c6'
  },
  {
    title: 'Fill PDF Form',
    description: 'Automatically fill PDF forms with data',
    category: 'Agent',
    icon: FileText,
    route: '/replay/6f637e9f-3c5d-4fd0-a75b-eb581b8225f1/fd166b01-7a7b-4b6c-8733-8a28c92a0f1b'
  },
  {
    title: 'Pass Captcha',
    description: 'Solve captcha challenges automatically',
    category: 'Agent',
    icon: Shield,
    route: '/replay/6f637e9f-3c5d-4fd0-a75b-eb581b8225f1/564fcf38-37f7-420a-8d9e-416122d1f346'
  },
  {
    title: 'Convert PDF or images to Excel',
    description: 'Convert PDF or scanned images into editable Excel spreadsheets',
    category: 'Agent',
    icon: FileSpreadsheet,
    route: '/replay/a2ff4b27-15f4-4b25-adab-9c51c7f000f5/d952d4a0-aad1-4381-a84b-b428691f338c'
  },
  {
    title: 'Clean Excel format',
    description: 'Automatically clean and standardize Excel file formatting',
    category: 'Agent',
    icon: Table2,
    route: '/replay/7442d07a-10c7-44aa-968c-1a0c90de5176/5ed9b573-c457-4758-a26f-8840e06690a6'
  }
];

export const MAX_TOOL_RESULT_LENGTH = 1000;

export const VM_MAX_TIME = 10 * 60; // 10 hours in minutes for free tier

// Bug report Notion link
export const BUG_REPORT_URL = 'https://cambioml.notion.site/1e3d2ffa6f2f80adb2e0ee1fa095e42a';
