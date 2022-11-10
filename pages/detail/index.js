import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const index = ({ data }) => {
    const [symbol, setSymbol] = useState('BTC-USD');
    const [symbolPrice, setSymbolPrice] = useState(data)
    let symbolTxt = 'United States Dollar'

    const handleSymbol = (symbol) => {
        setSymbol(symbol)
    }

    const getPrice = async () => {
        try {
            await axios.get(`https://api.blockchain.com/v3/exchange/tickers/${symbol}`)
                .then(response => {
                    setSymbolPrice(response.data.last_trade_price)
                })
        } catch (error) {
            console.log(error)
        }
    }

    let btcusd, btcgbp, btceur = 'no-active';

    switch (symbol) {
        case 'BTC-USD':
            btcusd = 'active'
            btcgbp, btceur = 'no-active'
            symbolTxt = 'United States Dollar'
            break;

        case 'BTC-GBP':
            btcgbp = 'active'
            btcusd, btceur = 'no-active'
            symbolTxt = 'Great Britain Pound'
            break;

        case 'BTC-EUR':
            btceur = 'active'
            btcgbp, btcusd = 'no-active'
            symbolTxt = 'Euro'
            break;
    }

    return (
        <div className='text-center bg-1'>

            <div className='dt-header'>
                <FontAwesomeIcon className='arrow' icon={faArrowLeft} width={24} height={24} color="#1BBCB2"/>
                <p>
                    Resumen Bitcoin
                </p>
                <div></div>
            </div>

            <h4 className='mt-43'>
                Valor de Bitcoin actual
            </h4>

            <div className='plr-24 mt-24'>

                <div className='bg-white sc-dt1'>

                    <p>Moneda</p>

                    <div className='row align-items-center'>
                        <div className='col-4'>
                            <p className={btcusd} onClick={() => handleSymbol('BTC-USD')}>USD</p>
                        </div>

                        <div className='col-4'>
                            <p className={btcgbp} onClick={() => handleSymbol('BTC-GBP')}>GBP</p>
                        </div>

                        <div className='col-4'>
                            <p className={btceur} onClick={() => handleSymbol('BTC-EUR')}>EUR</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='plr-24 mt-24'>
                <div className='sc-dt2'>
                    <p>
                        Detalle
                    </p>

                    <p>
                        {symbolTxt}
                    </p>

                    <div>
                        <p>
                            ${symbolPrice}
                        </p>
                    </div>
                </div>
            </div>

            <div className='sc-dt3 mt-120'>
                <button className='btn-update' onClick={getPrice}>
                    Actualizar
                </button>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    let response;

    try {
        response = await axios.get('https://api.blockchain.com/v3/exchange/tickers/BTC-USD')
        return { props: { data: response.data.last_trade_price } }

    } catch (error) {
        console.log(error)
        return { props: { data: "error" } }
    }
}

export default index

