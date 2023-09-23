import React, { useState, useEffect } from 'react';
import './Coins.css';

const CoinItem = (props) => {
  const [conversionRate, setConversionRate] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();

        const inrConversionRate = data.rates.INR;
        setConversionRate(inrConversionRate);
      } catch (error) {
        console.error('Error fetching conversion rate:', error);
      }
    };

    fetchConversionRate();
  }, []);

  const priceInINR = conversionRate ? props.coins.current_price * conversionRate : null;
  const totalVolumeInINR = conversionRate ? props.coins.total_volume * conversionRate : null;
  const marketCapInINR = conversionRate ? props.coins.market_cap * conversionRate : null;

  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={props.coins.image} alt='' />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>{priceInINR ? `₹${priceInINR.toLocaleString()}` : 'Fetching...'}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>{totalVolumeInINR ? `₹${totalVolumeInINR.toLocaleString()}` : 'Fetching...'}</p>
      <p className='hide-mobile'>{marketCapInINR ? `₹${marketCapInINR.toLocaleString()}` : 'Fetching...'}</p>
    </div>
  );
}

export default CoinItem;


// import React from 'react';
// import './Coins.css';

// const conversionRate = 74.5; // Replace with the actual conversion rate from USD to INR

// const CoinItem = (props) => {
//   const priceInINR = props.coins.current_price * conversionRate;
//   const totalVolumeInINR = props.coins.total_volume * conversionRate;
//   const marketCapInINR = props.coins.market_cap * conversionRate;

//   return (
//     <div className='coin-row'>
//       <p>{props.coins.market_cap_rank}</p>
//       <div className='img-symbol'>
//         <img src={props.coins.image} alt='' />
//         <p>{props.coins.symbol.toUpperCase()}</p>
//       </div>
//       <p>₹{priceInINR.toLocaleString()}</p>
//       <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
//       <p className='hide-mobile'>₹{totalVolumeInINR.toLocaleString()}</p>
//       <p className='hide-mobile'>₹{marketCapInINR.toLocaleString()}</p>
//     </div>
//   );
// }

// export default CoinItem;
