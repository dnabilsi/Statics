'use strict'



const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country data')
        }
    }).then((countryData) => {
        return countryData.find(country => country.alpha2Code === countryCode)
    })
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=105b0a3d26fa43').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location info')
        }
    }).then((data) => {
        return data
    })
}