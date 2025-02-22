import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company"

interface SearchResponse {
  data: CompanySearch[]
}

const BASE_URL = "https://financialmodelingprep.com/api/v3"
const API_KEY = process.env.REACT_APP_API_KEY

export const searchCompanies = async (query: string) => {
  try {
    // Axios performs an HTTP GET request, returning a promise.
    // The response type is explicitly declared as SearchResponse, which is a structure we defined.
    const response = await axios.get<SearchResponse>(
      `${BASE_URL}/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
    )
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error while fetching company search: ", error.message)
      return error.message
    }
    console.error("Unexpected error during company search: ", error)
    return "An unexpected error occurred during the company search."
  }
}

export const getCompanyProfile = async (query: string) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `${BASE_URL}/profile/${query}?apikey=${API_KEY}`
    )
    return response
  } catch (error: any) {
    
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getKeyMetrics = async (query: string) => {
  try {
    const response = await axios.get<CompanyKeyMetrics[]>(
      `${BASE_URL}/key-metrics-ttm/${query}?limit=40&apikey=${API_KEY}`
    )
    return response
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getIncomeStatement = async (query: string) => {
  try {
    const response = await axios.get<CompanyIncomeStatement[]>(
      `${BASE_URL}/income-statement/${query}?limit=50&apikey=${API_KEY}`
    )
    return response
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getBalanceSheet = async (query: string) => {
  try {
    const response = await axios.get<CompanyBalanceSheet[]>(
      `${BASE_URL}/balance-sheet-statement/${query}?limit=20&apikey=${API_KEY}`
    )
    return response
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getCashFlow = async (query: string) => {
  try {
    const response = await axios.get<CompanyCashFlow[]>(
      `${BASE_URL}/cash-flow-statement/${query}?limit=100&apikey=${API_KEY}`
    )
    return response 
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getTenK  = async (query: string) => {
  try {
    const response = await axios.get<CompanyTenK[]>(
      `${BASE_URL}/sec_filings/${query}?type=10-k&page=0&apikey=${API_KEY}`
    )
    return response 
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}

export const getHistoricalDividend  = async (query: string) => {
  try {
    const response = await axios.get<CompanyHistoricalDividend>(
      `${BASE_URL}/historical-price-full/stock_dividend/${query}?apikey=${API_KEY}`
    )
    return response 
  } catch (error: any) {
    console.error("Error occurred while fetching the company profile: ", error.message)
  }
}