import axios from 'axios'

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: 'Bearer 6vP3yOXa5Al_Ar8vl3SnC5C8wA94PP8iUEyvTm-JLJoEV1x-1_TDGLMEBgHt1tyDNqSR8zJinpRfnqm4rgJAoHkyBisoO-ZagnARurdyaF7Bu_6WM0Fs0dxqMS9-X3Yx'
    }
})
