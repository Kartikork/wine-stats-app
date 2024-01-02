import React from 'react';
import FlavanoidsStatsTable from './component/FlavanoidsStatsTable';
import GammaStatsTable from './component/GammaStatsTable';
import wineData from './winedata' // Update with the actual path to your wineData file

const App = () => {

  // Calculate the Favanoid value for each sample and group by class
  const flavanoidsData = wineData.reduce((acc, sample) => {
    const alcoholClass = sample["Alcohol"];
    const flavanoidsValue = sample["Flavanoids"];

    if (!acc[alcoholClass]) {
      acc[alcoholClass] = [];
    }

    acc[alcoholClass].push(flavanoidsValue);

    return acc;
  }, {});

  // Calculate the Gamma value for each sample and group by class
  const gammaData = wineData.reduce((acc, sample) => {
    const alcoholClass = sample["Alcohol"];
    const gammaValue = (sample["Ash"] * sample["Hue"]) / sample["Magnesium"];

    if (!acc[alcoholClass]) {
      acc[alcoholClass] = [];
    }

    acc[alcoholClass].push(gammaValue);

    return acc;
  }, {});

    // Render the FlavanoidsStatsTable and GammaStatsTable component with the calculated data

  return (
    <div>
      <FlavanoidsStatsTable wineData={flavanoidsData} />
      <GammaStatsTable wineData={gammaData} />
    </div>
  );
};

export default App;
