const fields = [
    {
        field: 1,
        characterType: "b",
        length: 64,
        bytesOfLength: 0,
        description: "Bit Map Extended"
    },
    {
        field: 2,
        characterType: "n",
        length: 19,     
        bytesOfLength: 1,
        description: "Primary account number (PAN)"
    },
    {
        field: 3,
        characterType: "n",
        length: 6,
        bytesOfLength: 0,
        description: "Processing code"
    },
    {
        field: 4,
        characterType: "n",
        length: 12,
        bytesOfLength: 0,
        description: "Amount, transaction"
    },
    {
        field: 5,
        characterType: "n",
        length: 12,
        bytesOfLength: 0,
        description: "Amount, Settlement"
    },
    {
        field: 6,
        characterType: "n",
        length: 12,
        bytesOfLength: 0,
        description: "Amount, cardholder billing"
    },
    {
        field: 7,
        characterType: "n",
        length: 10,
        bytesOfLength: 0,
        description: "Transmission date & time"
    },
    {
        field: 8,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Amount, Cardholder billing fee"
    },
    {
        field: 9,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Conversion rate, Settlement"
    },
    {
        field: 10,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Conversion rate, cardholder billing"
    },
    {
        field: 11,
        characterType: "n",
        length: 6,
        bytesOfLength: 0,
        description: "Systems trace audit number (STAN)"
    },
    {
        field: 12,
        characterType: "n",
        length: 6,
        bytesOfLength: 0,
        description: "Time, Local transaction"
    },
    {
        field: 13,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Date, Local transaction (MMdd)"
    },
    {
        field: 14,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Date, Expiration"
    },
    {
        field: 15,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Date, Settlement"
    },
    {
        field: 16,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Date, conversion"
    },
    {
        field: 17,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Date, capture"
    },
    {
        field: 18,
        characterType: "n",
        length: 4,
        bytesOfLength: 0,
        description: "Merchant type"
    },
    {
        field: 19,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Acquiring institution (country code)"
    },
    {
        field: 20,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "PAN Extended (country code)"
    },
    {
        field: 21,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Forwarding institution (country code)"
    },
    {
        field: 22,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Point of service entry mode"
    },
    {
        field: 23,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Application PAN number"
    },
    {
        field: 24,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Network International identifier (NII)"
    },
    {
        field: 25,
        characterType: "n",
        length: 2,
        bytesOfLength: 0,
        description: "Point of service condition code"
    },
    {
        field: 26,
        characterType: "n",
        length: 2,
        bytesOfLength: 0,
        description: "Point of service capture code"
    },
    {
        field: 27,
        characterType: "n",
        length: 1,
        bytesOfLength: 0,
        description: "Authorizing identification response length"
    },
    {
        field: 28,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Amount, transaction fee"
    },
    {
        field: 29,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Amount. settlement fee"
    },
    {
        field: 30,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Amount, transaction processing fee"
    },
    {
        field: 31,
        characterType: "n",
        length: 8,
        bytesOfLength: 0,
        description: "Amount, settlement processing fee"
    },
    {
        field: 32,
        characterType: "n",
        length: 11,
        bytesOfLength: 1,
        description: "Acquiring institution identification code"
    },
    {
        field: 33,
        characterType: "n",
        length: 11,
        bytesOfLength: 1,
        description: "Forwarding institution identification code"
    },
    {
        field: 34,
        characterType: "n",
        length: 28,
        bytesOfLength: 1,
        description: "Primary account number, extended"
    },
    {
        field: 35,
        characterType: "z",
        length: 37,
        bytesOfLength: 1,
        description: "Track 2 data"
    },
    {
        field: 36,
        characterType: "n",
        length: 104,
        bytesOfLength: 2,
        description: "Track 3 data"
    },
    {
        field: 37,
        characterType: "an",
        length: 12,
        bytesOfLength: 0,
        description: "Retrieval reference number"
    },
    {
        field: 38,
        characterType: "an",
        length: 6,
        bytesOfLength: 0,
        description: "Authorization identification response"
    },
    {
        field: 39,
        characterType: "an",
        length: 2,
        bytesOfLength: 0,
        description: "Response code"
    },
    {
        field: 40,
        characterType: "an",
        length: 3,
        bytesOfLength: 0,
        description: "Service restriction code"
    },
    {
        field: 41,
        characterType: "ans",
        length: 8,
        bytesOfLength: 0,
        description: "Card acceptor terminal identification"
    },
    {
        field: 42,
        characterType: "ans",
        length: 15,
        bytesOfLength: 0,
        description: "Card acceptor identification code"
    },
    {
        field: 43,
        characterType: "ans",
        length: 40,
        bytesOfLength: 0,
        description: "Card acceptor name/location"
    },
    {
        field: 44,
        characterType: "an",
        length: 25,
        bytesOfLength: 1,
        description: "Additional response data"
    },
    {
        field: 45,
        characterType: "an",
        length: 76,
        bytesOfLength: 1,
        description: "Track 1 data"
    },
    {
        field: 46,
        characterType: "an",
        length: 999,
        bytesOfLength: 2,
        description: "Additional data (ISO)"
    },
    {
        field: 47,
        characterType: "an",
        length: 999,
        bytesOfLength: 2,
        description: "Additional data (national)"
    },
    {
        field: 48,
        characterType: "an",
        length: 999,
        bytesOfLength: 2,
        description: "Additional data (private)"
    },
    {
        field: 49,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Currency code, transaction"
    },
    {
        field: 50,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Currency code, settlement"
    },
    {
        field: 51,
        characterType: "n",
        length: 3,
        bytesOfLength: 0,
        description: "Currency code, cardholder billing"
    },
    {
        field: 52,
        characterType: "b",
        length: 64,
        bytesOfLength: 0,
        description: "Personal identification number data"
    },
    {
        field: 53,
        characterType: "n",
        length: 16,
        bytesOfLength: 0,
        description: "Security related control information"
    },
    {
        field: 54,
        characterType: "an",
        length: 120,
        bytesOfLength: 2,
        description: "Additional amounts"
    },
    {
        field: 55,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "ICC data – EMV having multiple tags"
    },
    {
        field: 56,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (ISO)"
    },
    {
        field: 57,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (national)"
    },
    {
        field: 58,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (national)"
    },
    {
        field: 59,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (national)"
    },
    {
        field: 60,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (national)"
    },
    {
        field: 61,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (private)"
    },
    {
        field: 62,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (private)"
    },
    {
        field: 63,
        characterType: "ans",
        length: 999,
        bytesOfLength: 2,
        description: "Reserved (private)"
    },
    {
        field: 64,
        characterType: "b",
        length: 64,
        bytesOfLength: 0,
        description: "Message authentication code (MAC)"
    }    
]