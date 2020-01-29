
function FormatCapacity(cap, usdxsn)
{
    var tempCap = cap / Math.pow(10,8);
    var formattedCap = tempCap.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 8});

    if (usdxsn)
    {
        var capusd = cap*usdxsn/Math.pow(10,8);
        var formattedCapusd = capusd.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
        return `${formattedCap} xsn (${formattedCapusd} USD)`;
    }
    else
        return `${formattedCap} xsn`;
}

// Converts uint8 json array to hex string
function RHashArrayToHexString(rhash)
{
    return rhash.map(function(i) {
        return ('0' + i.toString(16)).slice(-2);
    }).join('');
}

function ParseAxiosError(error)
{
    if (error.response)
        // Server responded
        return error.response.data;
    else
        // Server did not respond
        return error.message;
}

function GetTransactionURL(txid)
{
    return 'https://xsnexplorer.io/transactions' + txid;
}

export {
    FormatCapacity,
    RHashArrayToHexString,
    ParseAxiosError,
    GetTransactionURL
}
