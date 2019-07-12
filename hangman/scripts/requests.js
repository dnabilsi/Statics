'use strict'



const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// -------------------------------------------------------------------------------------------------------------------

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=105b0a3d26fa43')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location info')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch country data')
//         }
//     }).then((countryData) => {
//         return countryData.find(country => country.alpha2Code === countryCode)
//     })
// }

// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=105b0a3d26fa43').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch location info')
//         }
//     }).then((data) => {
//         return data
//     })
// }