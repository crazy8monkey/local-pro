import type { SearchBusiness } from "../types/search.types";

export const searchBusinesses: SearchBusiness[] = [
    {
        id: "business-001",
        name: "Omaha Coffee House",
        description: "Specialty coffee and fresh pastries",
        category: "Coffee",
        address: "Omaha, Nebraska",
        isActive: true
    },
    {
        id: "business-002",
        name: "Downtown Pizza",
        description: "Local pizza restaurant and delivery",
        category: "Restaurant",
        address: "Omaha, Nebraska",
        isActive: true
    },
    {
        id: "business-003",
        name: "Elite Auto Repair",
        description: "Automotive maintenance and repair",
        category: "Automotive",
        address: "Omaha, Nebraska",
        isActive: true
    },
    {
        id: "business-004",
        name: "Closed Test Business",
        description: "Inactive sample business",
        category: "Other",
        address: "Omaha, Nebraska",
        isActive: false
    }
];