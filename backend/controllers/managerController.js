import axios from "axios"
import asyncHandler from "express-async-handler"
import Manager100 from "../models/managers100Model.js"
import Manager250 from "../models/managers250Model.js"
import Manager500 from "../models/managers500Model.js"

const fetchAndSaveTop100 = asyncHandler(async (req, res) => {
    const managers = await Manager100.find({})
    if (managers) {
        await Manager100.deleteMany({})
    }
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=1&page_size=100",
        headers: req.headers
    }

    console.log(config)

    const response = await axios.request(config)
    const data = await response.data
    if (!data) {
        res.status(400)
        throw new Error('An error occured')
    }
    if (data) {
        const newManagers = await Manager100.create(data?.results)
        res.status(200).json({ managers: newManagers, managerNumber: newManagers.length })
    }

})

const fetchAndSaveTop250 = asyncHandler(async (req, res) => {
    const managers = await Manager250.find({})
    if (managers) {
        await Manager250.deleteMany({})
    }
    let config1 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=1&page_size=50"
    }
    let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=2&page_size=50"
    }
    let config3 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=3&page_size=50"
    }
    let config4 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=4&page_size=50"
    }
    let config5 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=5&page_size=50"
    }

    try {
        const response = await Promise.all([axios.request(config1), axios.request(config2), axios.request(config3), axios.request(config4), axios.request(config5)])
        const data = response.map(x => x?.data?.results).flat()
        const newManagers = await Manager250.create(data)
        res.status(200).json({ managers: newManagers, managerNumber: newManagers.length })
    } catch (error) {
        res.status(400)
        throw new Error('An error occured, Try again')
    }
})

const fetchAndSaveTop500 = asyncHandler(async (req, res) => {
    const managers = await Manager500.find({})
    if (managers) {
        await Manager500.deleteMany({})
    }
    let config1 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=1&page_size=100"
    }
    let config2 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=2&page_size=100"
    }
    let config3 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=3&page_size=100"
    }
    let config4 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=4&page_size=100"
    }
    let config5 = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://www.serieafantasy.com/api/v0/leagues/season-league/36/?page=5&page_size=100"
    }
    try {
        const response = await Promise.all([axios.request(config1), axios.request(config2), axios.request(config3), axios.request(config4), axios.request(config5)])
        const data = response.map(x => x?.data?.results).flat()
        const newManagers = await Manager500.create(data)
        res.status(200).json({ managers: newManagers, managerNumber: newManagers.length })
    } catch (error) {
        res.status(400)
        throw new Error('An error occured, Try again')
    }
})

const loadManagerTeams100 = asyncHandler(async (req, res) => {
    const managers = await Manager100.find({})
    if(!managers) {
        res.status(404)
        throw new Error('No managers found')
    }

    const managerIds = managers.map(manager => manager.user_id)
    console.log(managerIds.length)
   
    try {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://www.serieafantasy.com/api/v0/userteams/user-team-for-round/?user=524&football_round=209",
            headers: req.headers
        }
        const managerRes = await axios.request(config)
        console.log(managerRes)
        console.log('boy')
        res.json(managerIds)
    } catch (error) {
        //console.log(error)
        throw new Error(error)
    }

    /*const response = await Promise.all(managerIds.map(async id => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://www.serieafantasy.com/api/v0/userteams/user-team-for-round/?user=${id}&football_round=209`
        }

        const managerRes = await axios.request(config)
        return { id, football_players: managerRes.results[0].football_players}
    }))
    res.json(response)*/
})

const loadManagerTeams250 = asyncHandler(async (req, res) => {})

const loadManagerTeams500 = asyncHandler(async (req, res) => {})

const fetchFromDb100 = asyncHandler(async (req, res) => {
    const managers = await Manager100.find({})
    res.status(200).json(managers)
})

const fetchFromDb250 = asyncHandler(async (req, res) => {
    const managers = await Manager250.find({})
    res.status(200).json(managers)
})

const fetchFromDb500 = asyncHandler(async (req, res) => {
    const managers = await Manager500.find({})
    res.status(200).json(managers)
})


export {
    fetchAndSaveTop100, fetchAndSaveTop250, fetchAndSaveTop500,
    loadManagerTeams100, loadManagerTeams250,
    loadManagerTeams500,
    fetchFromDb100, fetchFromDb250, fetchFromDb500
}