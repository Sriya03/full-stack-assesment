import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/companies')
            .then(response => {
                setCompanies(response.data);
            })
            .catch(error => console.error('Error fetching companies:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="container mt-5">
            <h1>Company List</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Search companies..."
                onChange={handleSearchChange}
            />
            <ul className="list-group mt-3">
                {filteredCompanies.map(company => (
                    <li key={company.company_id} className="list-group-item">
                        <Link to={`/companies/${company.company_id}`}>{company.name} - {company.address}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompanyList;
