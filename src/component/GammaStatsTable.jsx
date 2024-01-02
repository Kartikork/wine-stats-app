import React from 'react';
// Import utility functions
import { calculateMean, calculateMedian, calculateMode } from '../utility';

// React component to display a table of Gamma measures
const GammaStatsTable = ({ wineData }) => {
    // Get the class names from the data keys
    const classes = Object.keys(wineData);
    // Define the measures to be calculated
     const measures = ['Mean', 'Median', 'Mode'];

 // Return a table with a row for each measure and a column for each class
  return (
    <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {classes.map((className, index) => <th key={index}>{`Class ${className}`}</th>)}
                </tr>
            </thead>
            <tbody>
                {measures.map((measure, index) => (
                    <tr key={index}>
                        <td>{`Gamma ${measure}`}</td>
                        {classes.map((className, index) => {
                            let value;
                            switch (measure) {
                                case 'Mean':
                                    value = calculateMean(wineData[className]);
                                    break;
                                case 'Median':
                                    value = calculateMedian(wineData[className]);
                                    break;
                                case 'Mode':
                                    value = calculateMode(wineData[className]);
                                    break;
                                default:
                                    value = '';
                            }
                            return <td key={index}>{value}</td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default GammaStatsTable;
