## Team 2 (BudgetBird)

```
Weibo Zhang
Student ID: 030194877
Email: weibo.zhang01@student.csulb.edu

Sophia Doan
Student ID: 029917249
Email: sophia.doan01@student.csulb.edu

Zophia Laud
Student ID: 029783219
Email: zophiakimberly.laud01@student.csulb.edu

Daniella Vargas
Student ID: 028804995
Email: daniella.vargas01@student.csulb.edu

Raquel Hernandez
Student ID: 029796544
Email: raquel.hernandez01@student.csulb.edu

Andrew Di
Student ID: 010936716
Email: andrew.di01@student.csulb.edu
```

## Preface

| Version | Date    | Changes         |
| ------- | ------- | --------------- |
| 1.0     | 3/13/24 | Initial Version |

Purpose
This document serves as a comprehensive guide for the development and understanding of the software project titled "BudgetBird"

Audience
The intended audience of this document includes project stakeholders, developers, testers, and anyone involved in the project lifecycle.

Introduction
(Introduce the software project, its goals, and the problem it aims to solve)

Project Overview
"BudgetBird" is a user-friendly web-based personal budget management system tailored for individuals seeking effective financial planning and tracking. Navigate your finances with confidence. Track spending, budgets, transactions, and create budgeting goals.

Project Goals
● Financial Planning
● Expense/ Transactions Tracking
● Connecting with Banks
● Customization
● User-Friendly Interface

Glossary
(Define key terms and acronyms used throughout the document, unless they are commonly known to each possible stakeholder (e.g., “Cell phone”) AND used with their common meaning. Do not expect your stakeholders to be experts. If in doubt, define a term.)
● Plaid: Fintech API to fetch bank transactions and authenticate accounts
● Supabase: Cloud database, authentication, and storage
● API: Application Programming Interface.
● React: Javascript library for building user interface in component style and state management
● Nextjs: React framework that provides building blocks for web development

User Requirements and Use Cases
(Outline what the system must do from the user's perspective. User stories need to use the format discussed in class and on our slides. Use cases provide detailed scenarios of system interactions.)

User Stories

(A collection of user stories that apply to the project.)

1.  As a registered budgeter, I want to log in securely so that my private bank transactions and balance is confidential.
2.  As a budgeter, I want to receive notifications when I'm approaching or exceeding my budget limits for specific categories, helping me stay within my financial boundaries.
3.  As a budgeter, I want to easily add my income sources and recurring expenses to the budget tracker, allowing me to have a comprehensive overview of my financial situation.
4.  As a budgeter, I want to be able to create multiple budgets for different aspects of my life (e.g., groceries, utilities, entertainment) so that I can allocate my funds appropriately.
5.  As a budgeter, I want to receive personalized tips to help me make the most of my money.
6.  As a budgeter, I want to be able to collaborate with others to manage shared expenses.
7.  As a budgeter , I want the budget tracker app to provide reports on my spending habits that show trends and categories where I can save money.
8.  As a budgeter, I want to be able to add tags to transactions and utilize an interface that organizes my finances by customizable categories.
9.  As a budgeter, I want to be able to see how much money I’ve saved in the past day, week, or month so that I can see if I am on the right track in saving money.
10. As a budgeter, I want to be able to manage my spending equally on various subjects so that I can live comfortably and not have to face any financial crisis

| Seq# | Actor's Action                                                                          | System's Response                                                                          |
| ---- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1    | User selects "add new expense"                                                          |                                                                                            |
| 2    | User adds new expense to the budget tracker (Groceries, utilities, rent, entertainment) | System provides an interface to input recurring expenses and checks submitted information. |
| 3    | Clicks "save"                                                                           |                                                                                            |
| 4    |                                                                                         | Runs checks in the submitted information                                                   |
| 5    |                                                                                         | Checks are successful                                                                      |
| 6    |                                                                                         | Saves submitted information in banks/budget database                                       |

| Seq# | Actor's Action                                             | System's Response                                                                                                           |
| ---- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1    | User exceeds expense budget limits for specific categories |                                                                                                                             |
| 2    | User re-enters expense budget for specific categories      | System sends notification to alert the user of the exceeded budget limits, prompts them to review and adjust their spending |
| 3    | Clicks "save"                                              |                                                                                                                             |
| 4    |                                                            | System checks to see if re-submitted information meets the required limits.                                                 |
| 5    |                                                            | Checks are successful                                                                                                       |
| 6    |                                                            | Saves submitted information in the banks/budget database                                                                    |

| Seq# | Actor's Action                                                | System's Response                                                                                |
| ---- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1    | User attempts to add an expense without specifying a category |                                                                                                  |
| 2    | Adds an expense with the specified category                   | System prompts the user to select or create a category before proceeding with adding the expense |
| 3    | Clicks "save"                                                 |                                                                                                  |
| 4    |                                                               | System checks to see if re-submitted information meets the required category.                    |
| 5    |                                                               | Checks are successful                                                                            |
| 6    |                                                               | Saves submitted information in the banks/budget database                                         |

System Architecture
(Describe the high-level design of the software.)

Components

1. Frontend: Web app built with React, NextJS, TailwindCSS
2. Backend: API built with Vercel, NextJS
3. Database: Supabase PostgreSQL
4. Authentication: Supabase Authentication for login/signup
