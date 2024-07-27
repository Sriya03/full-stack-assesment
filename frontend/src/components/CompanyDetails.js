import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);
function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState({ latitude: null, longitude: null });  // Initialize lat and lng

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Data not loaded',
        data: [],
        backgroundColor: ['rgba(0, 0, 0, 0.1)'],
        borderColor: ['rgba(0, 0, 0, 0.1)'],
        borderWidth: 1,
      }
    ],
  });
  const position = [company.latitude, company.longitude]; // Adjust based on actual data

  useEffect(() => {
    axios.get(`http://localhost:8000/companies/${id}`)
      .then(response => {
        setCompany(response.data);
        // Assume the data for the chart is being updated correctly
        setChartData({
          labels: ['Votes', 'Comments'], // Example labels
          datasets: [
            {
              label: 'Engagement',
              data: [7,9],//[response.data.votes, response.data.comments], 
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch(error => {
        console.error('Error fetching company details:', error);
        setChartData({
          labels: [],
          datasets: [{
            label: 'No data available',
            data: [],
            backgroundColor: ['rgba(255, 0, 0, 0.2)'],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 1,
          }],
        });
      });
  }, [id]);

  return (
    <div>
      <Link to="/" className="btn btn-primary">Go Home</Link>
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      {company.latitude && company.longitude && (  // Ensure both coordinates are not null
        <MapContainer center={[company.latitude, company.longitude]} zoom={13} style={{ height: '300px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[company.latitude, company.longitude]} />
        </MapContainer>
      )}
      <Bar data={chartData} options={{ scales: { x: { beginAtZero: true }, y: { beginAtZero: true } } }} />
    </div>
);

}

export default CompanyDetails;
